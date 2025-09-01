#!/usr/bin/env node
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const { runBatch } = require('../scripts/batchArsenalNormalize');
const os = require('os');

const PORT = process.env.PORT || 5001;
const app = express();
app.use(bodyParser.json({ limit: '2mb' }));

const fhPath = path.join(__dirname, '..', 'src', 'data', 'arsenals', 'firstHalf.json');
const overridesPath = path.join(__dirname, '..', 'src', 'data', 'arsenals', 'overrides.json');
const proposalsPath = path.join(__dirname, '..', 'src', 'data', 'arsenals', 'proposals.json');
const patchesDir = path.join(__dirname, '..', 'src', 'data', 'arsenals', 'patches');
const pitcherArsenalsJs = path.join(__dirname, '..', 'src', 'data', 'pitcherArsenals.js');

function readJson(p, fallback) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}

function safeWriteJson(target, data) {
  const dir = path.dirname(target);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = target + '.tmp';
  const fd = fs.openSync(tmp, 'w');
  try {
    fs.writeFileSync(fd, JSON.stringify(data, null, 2));
    fs.fsyncSync(fd);
  } finally {
    fs.closeSync(fd);
  }
  fs.renameSync(tmp, target);
}

/** Safe write text file with fsync+rename */
function safeWriteText(target, text) {
  const dir = path.dirname(target);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = target + '.tmp';
  const fd = fs.openSync(tmp, 'w');
  try {
    fs.writeFileSync(fd, text, 'utf8');
    fs.fsyncSync(fd);
  } finally {
    fs.closeSync(fd);
  }
  fs.renameSync(tmp, target);
}

function timestamp() {
  const d = new Date();
  const pad = (n)=>String(n).padStart(2,'0');
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

function isoDate() {
  const d = new Date();
  const pad = (n)=>String(n).padStart(2,'0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}

function slugifyId(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Update pitcherArsenals.js in-place:
 * - Find line with matching playerId
 * - Replace arsenal array with provided normalized codes
 * - Append inline comment with date and optional note
 */
function updatePitcherArsenalsJs({ key, pitches, sourceNote }) {
  const raw = fs.readFileSync(pitcherArsenalsJs, 'utf8');
  const lines = raw.split(/\r?\n/);
  const isNumericKey = /^\d+$/.test(String(key));
  let idx = -1;
  if (isNumericKey) {
    const needle = `playerId: ${String(key)}`;
    idx = lines.findIndex((ln) => ln.includes(needle));
  } else {
    // fallback: match by slug(name)
    idx = lines.findIndex((ln) => {
      const m = ln.match(/name:\s*"([^"]+)"/);
      if (!m) return false;
      return slugifyId(m[1]) === String(key);
    });
  }
  if (idx < 0) {
    throw new Error(`Entry not found in pitcherArsenals.js for key=${key}`);
  }
  const line = lines[idx];
  // Build new arsenal literal, e.g., ["FF", "SL"]
  const arr = `[${pitches.map((p) => JSON.stringify(String(p).toUpperCase())).join(', ')}]`;
  const dateStr = isoDate();
  const note = sourceNote ? ` — ${String(sourceNote).replace(/\n/g, ' ').slice(0, 140)}` : '';
  // Replace the arsenal array content preserving other fields; assume single-line object format in file
  const newLine = line.replace(/arsenal:\s*\[[^\]]*\]/, `arsenal: ${arr}`) + ` // updated via review on ${dateStr}${note}`;
  lines[idx] = newLine;
  const out = lines.join(os.EOL);
  safeWriteText(pitcherArsenalsJs, out);
  return { index: idx, previousLine: line, newLine };
}

// Persist override pitches for a pitcher into src/data/pitcherArsenals.js
app.post('/api/arsenals/writeOverride', (req, res) => {
  try {
    const { key, pitches, sourceNote, reviewAction } = req.body || {};
    if (!key || !Array.isArray(pitches)) {
      return res.status(400).json({ error: 'key and pitches[] required' });
    }
    const result = updatePitcherArsenalsJs({ key, pitches, sourceNote });
    res.json({ ok: true, keyUsed: key, writtenPath: pitcherArsenalsJs, reviewAction: reviewAction || null, ...result });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

function applyOne(playerId, payload) {
  const firstHalf = readJson(fhPath, []);
  const overrides = readJson(overridesPath, {});
  const byId = new Map(firstHalf.map(p => [p.playerId, p]));

  const ov = overrides[playerId] || {};
  const lock = new Set(ov.lock || []);
  const drop = new Set(ov.drop || []);

  const row = byId.get(playerId) || { playerId, name: playerId, team: '', position: '', pitches: [] };
  const cur = new Set((row.pitches || []).filter(c => !drop.has(c)));
  // Ensure locked remain
  for (const l of lock) cur.add(l);
  // Apply suggested additions (skip dropped)
  for (const s of (payload.suggested || [])) {
    if (!drop.has(s)) cur.add(s);
  }
  row.pitches = Array.from(cur);
  row.status = 'verified';
  const noteBits = [];
  if (Array.isArray(payload.notes) && payload.notes.length) noteBits.push(`notes: ${payload.notes.join('; ')}`);
  if (payload.confidence != null) noteBits.push(`conf: ${payload.confidence}`);
  if (payload.support && payload.support.games != null) noteBits.push(`games: ${payload.support.games}`);
  row.statusNote = `Batch apply ${new Date().toISOString()} ${noteBits.join(' | ')}`;
  byId.set(playerId, row);

  // Write firstHalf
  safeWriteJson(fhPath, Array.from(byId.values()));

  // Write patch file
  fs.mkdirSync(patchesDir, { recursive: true });
  const patchContent = { [playerId]: payload };
  const patchFile = path.join(patchesDir, `patch-${timestamp()}.json`);
  safeWriteJson(patchFile, patchContent);

  // Remove from proposals
  const proposals = readJson(proposalsPath, {});
  if (proposals[playerId]) {
    delete proposals[playerId];
    safeWriteJson(proposalsPath, proposals);
  }

  return { row, patchFile };
}

app.get('/api/arsenals', (req, res) => {
  res.json(readJson(fhPath, []));
});

app.get('/api/proposals', (req, res) => {
  res.json(readJson(proposalsPath, {}));
});

app.post('/api/apply', (req, res) => {
  try {
    const { playerId, suggested, notes, support, confidence } = req.body || {};
    if (!playerId || !Array.isArray(suggested)) return res.status(400).json({ error: 'playerId and suggested[] required' });
    const result = applyOne(playerId, { suggested, notes: notes||[], support: support||{}, confidence });
    res.json({ ok: true, ...result });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.post('/api/ignore', (req, res) => {
  try {
    const { playerId } = req.body || {};
    if (!playerId) return res.status(400).json({ error: 'playerId required' });
    const overrides = readJson(overridesPath, {});
    overrides[playerId] = { ...(overrides[playerId] || {}), ignore: true };
    safeWriteJson(overridesPath, overrides);
    const proposals = readJson(proposalsPath, {});
    if (proposals[playerId]) {
      delete proposals[playerId];
      safeWriteJson(proposalsPath, proposals);
    }
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.post('/api/apply-bulk', (req, res) => {
  try {
    const { playerIds } = req.body || {};
    const proposals = readJson(proposalsPath, {});
    const targets = Array.isArray(playerIds) && playerIds.length ? playerIds : Object.keys(proposals);
    let applied = 0, skipped = 0;
    const combinedPatch = {};
    for (const pid of targets) {
      const payload = proposals[pid];
      if (!payload) { skipped++; continue; }
      try {
        const result = applyOne(pid, payload);
        combinedPatch[pid] = payload;
        applied++;
      } catch (e) {
        skipped++;
      }
    }
    // Save combined patch
    if (applied) {
      fs.mkdirSync(patchesDir, { recursive: true });
      const patchFile = path.join(patchesDir, `patch-bulk-${timestamp()}.json`);
      safeWriteJson(patchFile, combinedPatch);
    }
    res.json({ ok: true, applied, skipped });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.post('/api/ignore-bulk', (req, res) => {
  try {
    const { playerIds } = req.body || {};
    const proposals = readJson(proposalsPath, {});
    const overrides = readJson(overridesPath, {});
    const targets = Array.isArray(playerIds) && playerIds.length ? playerIds : Object.keys(proposals);
    let ignored = 0;
    for (const pid of targets) {
      overrides[pid] = { ...(overrides[pid] || {}), ignore: true };
      if (proposals[pid]) {
        delete proposals[pid];
        ignored++;
      }
    }
    safeWriteJson(overridesPath, overrides);
    safeWriteJson(proposalsPath, proposals);
    res.json({ ok: true, ignored });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.post('/api/rebatch', (req, res) => {
  try {
    const proposals = runBatch({});
    res.json({ ok: true, count: Object.keys(proposals||{}).length });
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
