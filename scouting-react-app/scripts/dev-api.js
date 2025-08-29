// scripts/dev-api.js
// Minimal dev API for proposals and re-batch on port 4001
const express = require('express');
const fs = require('fs');
const path = require('path');
const { runBatch } = require('./batchArsenalNormalize');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;
const PROPOSALS_PATH = path.join(__dirname, '..', 'src', 'data', 'arsenals', 'proposals.json');
const LOGS_DIR = path.join(__dirname, '..', 'src', 'data', 'logs');

function readJsonSafe(p, fallback) {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

app.get('/api/proposals', (req, res) => {
  const json = readJsonSafe(PROPOSALS_PATH, {});
  res.json(json);
});

app.post('/api/rebatch', (req, res) => {
  try {
    runBatch({ logsDir: LOGS_DIR, outPath: PROPOSALS_PATH });
    const json = readJsonSafe(PROPOSALS_PATH, {});
    const count = Object.keys(json || {}).length;
    res.json({ ok: true, count });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
});

// No-op apply: remove the proposal entry and return a fake updated row
app.post('/api/apply', (req, res) => {
  try {
    const { playerId } = req.body || {};
    if (!playerId) return res.status(400).json({ ok: false, error: 'playerId required' });
    const json = readJsonSafe(PROPOSALS_PATH, {});
    const p = json[playerId];
    delete json[playerId];
    fs.writeFileSync(PROPOSALS_PATH, JSON.stringify(json, null, 2));
    res.json({ ok: true, row: { playerId, current: p?.suggested || p?.current || [], name: String(playerId) } });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
});

// No-op ignore: remove the proposal entry
app.post('/api/ignore', (req, res) => {
  try {
    const { playerId } = req.body || {};
    if (!playerId) return res.status(400).json({ ok: false, error: 'playerId required' });
    const json = readJsonSafe(PROPOSALS_PATH, {});
    delete json[playerId];
    fs.writeFileSync(PROPOSALS_PATH, JSON.stringify(json, null, 2));
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
});

// Bulk apply: remove all entries and report counts
app.post('/api/apply-bulk', (req, res) => {
  try {
    const json = readJsonSafe(PROPOSALS_PATH, {});
    const applied = Object.keys(json).length;
    fs.writeFileSync(PROPOSALS_PATH, JSON.stringify({}, null, 2));
    res.json({ ok: true, applied, skipped: 0 });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
});

// Bulk ignore: same behavior as apply-bulk for now
app.post('/api/ignore-bulk', (req, res) => {
  try {
    const json = readJsonSafe(PROPOSALS_PATH, {});
    const ignored = Object.keys(json).length;
    fs.writeFileSync(PROPOSALS_PATH, JSON.stringify({}, null, 2));
    res.json({ ok: true, ignored });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e && e.message || e) });
  }
});

app.listen(PORT, () => {
  console.log(`Dev API listening on http://localhost:${PORT}`);
});
