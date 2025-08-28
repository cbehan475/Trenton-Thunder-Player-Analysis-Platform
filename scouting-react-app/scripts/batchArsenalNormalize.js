#!/usr/bin/env node
/**
 * scripts/batchArsenalNormalize.js
 *
 * Batch Step 3F – Run 3E normalization gates over all logs and produce proposals.json
 *
 * Usage:
 *   node scripts/batchArsenalNormalize.js --logs src/data/logs --out src/data/arsenals/proposals.json
 */

const fs = require('fs');
const path = require('path');

// Simple CLI args
function parseArgs(argv) {
  const out = { logs: 'src/data/logs', out: 'src/data/arsenals/proposals.json' };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--logs') out.logs = argv[++i];
    else if (a === '--out') out.out = argv[++i];
  }
  return out;
}

// Read JSON file safely
function readJson(p, fallback) {
  try {
    const s = fs.readFileSync(p, 'utf8');
    return JSON.parse(s);
  } catch (e) {
    return fallback;
  }
}

// Very small helper to evaluate exported default from our JS log files.
// We will transform `export default X;` to `module.exports = X;` and require via vm.
const vm = require('vm');
function requireLogJs(absPath) {
  const code = fs.readFileSync(absPath, 'utf8');
  const transformed = code.replace(/export\s+default\s+/g, 'module.exports = ');
  const moduleSandbox = { module: { exports: {} }, exports: {}, require, __dirname: path.dirname(absPath), __filename: absPath, console };
  vm.createContext(moduleSandbox);
  vm.runInContext(transformed, moduleSandbox, { filename: absPath });
  return moduleSandbox.module.exports;
}

// Re-implement tight/loose gates (must match src/lib/pitchHeuristics.js)
function toNums(r, fbVeloAvg) {
  return {
    v: Number.isFinite(r.velo) ? r.velo : null,
    i: Number.isFinite(r.ivb) ? r.ivb : null,
    h: Number.isFinite(r.hb) ? r.hb : null,
    s: Number.isFinite(r.spin) ? r.spin : null,
    fv: Number.isFinite(fbVeloAvg) ? fbVeloAvg : null,
  };
}
const gates = {
  FF: ({ v, i }) => v != null && i != null && v >= 94 && i >= 16,
  SI: ({ h, i }) => h != null && i != null && h >= 15 && i < 16,
  CT: ({ i, h }) => i != null && h != null && i >= 14 && i <= 18 && h >= 6 && h <= 12,
  SW: ({ h, s, i }) => h != null && s != null && i != null && h <= -12 && s >= 2500 && i >= -1 && i <= 3,
  SL: ({ h, s, i }) => h != null && s != null && i != null && h <= -8 && h >= -16 && s >= 2300 && s <= 2600 && Math.abs(i) <= 3,
  CB: ({ i, v, s }) => i != null && v != null && s != null && i <= -8 && v < 82 && s >= 2600,
  CH: ({ fv, v, h, i }) => fv != null && v != null && fv - v >= 8 && h != null && h >= 12 && i != null && i >= 4 && i <= 14,
  SPL: ({ fv, v, i }) => fv != null && v != null && fv - v >= 8 && i != null && i < 8,
};
const loose = {
  FF: ({ v, i }) => v != null && i != null && v >= 93 && i >= 15,
  SI: ({ h, i }) => h != null && i != null && h >= 14 && i < 17,
  CT: ({ i, h }) => i != null && h != null && i >= 13 && i <= 19 && h >= 5 && h <= 13,
  SW: ({ h, s, i }) => h != null && s != null && i != null && h <= -11 && s >= 2350 && i >= -2 && i <= 4,
  SL: ({ h, s, i }) => h != null && s != null && i != null && h <= -7 && h >= -17 && s >= 2200 && s <= 2700 && Math.abs(i) <= 4,
  CB: ({ i, v, s }) => i != null && v != null && s != null && i <= -7 && v < 84 && s >= 2400,
  CH: ({ fv, v, h, i }) => fv != null && v != null && fv - v >= 7 && h != null && h >= 10 && i != null && i >= 3 && i <= 15,
  SPL: ({ fv, v, i }) => fv != null && v != null && fv - v >= 7 && i != null && i < 10,
};
function classifyPitch(r, fbVeloAvg) {
  const nums = toNums(r, fbVeloAvg);
  for (const k of ['FF','SI','CT','SW','SL','CB','CH','SPL']) {
    if (gates[k](nums)) return k;
  }
  return null;
}
function verifyShape(code, r, fbVeloAvg) {
  const fn = loose[code];
  if (!fn) return false;
  return !!fn(toNums(r, fbVeloAvg));
}

function listLogFiles(dir) {
  const items = fs.readdirSync(dir);
  return items.filter(f => /^pitching-\d{4}-\d{2}-\d{2}\.js$/.test(f)).map(f => path.join(dir, f));
}

function collectPitchesFromLog(logObj) {
  // logObj shape: { "Pitcher Name": { inningNumber: [ { pitchType, velo, ivb, hb, spin, ... }, ... ], ... }, ... }
  const out = [];
  for (const [pname, innings] of Object.entries(logObj || {})) {
    for (const [inn, arr] of Object.entries(innings || {})) {
      if (!Array.isArray(arr)) continue;
      out.push({ pitcher: pname, inning: Number(inn), pitches: arr });
    }
  }
  return out;
}

function shortFromLabel(label) {
  const s = String(label || '').toLowerCase();
  if (/four|ff/.test(s)) return 'FF';
  if (/sinker|two|2-?seam|si/.test(s)) return 'SI';
  if (/cutter|ct/.test(s)) return 'CT';
  if (/sweeper|sw/.test(s)) return 'SW';
  if (/slider|sl/.test(s)) return 'SL';
  if (/curve|cb/.test(s)) return 'CB';
  if (/change|ch/.test(s)) return 'CH';
  if (/split/.test(s)) return 'SPL';
  return 'UNK';
}

function nowIsoDate() {
  const d = new Date();
  return d.toISOString().slice(0,10);
}

function main() {
  const { logs: logsDir, out: outPath } = parseArgs(process.argv);
  const firstHalfPath = path.join('src', 'data', 'arsenals', 'firstHalf.json');
  const overridesPath = path.join('src', 'data', 'arsenals', 'overrides.json');

  const firstHalf = readJson(firstHalfPath, []);
  const overrides = readJson(overridesPath, {});

  const files = listLogFiles(logsDir);
  const perPitcher = new Map();
  const perPitcherGames = new Map();
  let globalSince = null;

  for (const f of files) {
    const obj = requireLogJs(f);
    const dateMatch = f.match(/pitching-(\d{4}-\d{2}-\d{2})\.js$/);
    const dateStr = dateMatch ? dateMatch[1] : null;
    if (dateStr) {
      if (!globalSince || dateStr < globalSince) globalSince = dateStr;
    }
    const ab = collectPitchesFromLog(obj);
    for (const entry of ab) {
      const pidKey = entry.pitcher; // We'll map to playerId by name match in firstHalf
      if (!perPitcher.has(pidKey)) perPitcher.set(pidKey, []);
      perPitcher.get(pidKey).push(...entry.pitches.map(p => ({ ...p, _game: path.basename(f, '.js') })));
      const games = perPitcherGames.get(pidKey) || new Set();
      games.add(path.basename(f, '.js'));
      perPitcherGames.set(pidKey, games);
    }
  }

  // Build name->playerId map from firstHalf
  const nameToId = new Map(firstHalf.map(r => [r.name, r.playerId]));
  const currentById = new Map(firstHalf.map(r => [r.playerId, r.pitches || []]));

  const proposals = {};

  for (const [pname, pitches] of perPitcher.entries()) {
    const playerId = nameToId.get(pname) || pname; // fallback to name if unknown id
    const current = currentById.get(playerId) || [];

    // Respect overrides.lock/drop directly in current view
    const ov = overrides[playerId] || {};
    if (ov.ignore === true) {
      // Explicitly ignored by user; skip proposing
      continue;
    }
    const locks = new Set(ov.lock || []);
    const drops = new Set(ov.drop || []);

    const allowed = new Set(current.filter(c => !drops.has(c)));
    for (const l of locks) allowed.add(l);

    // Compute fb avg velo for CH/SPL gates
    const fbVelos = pitches.filter(p => /four|ff/i.test(p.pitchType)).map(p => p.velo).filter(Number.isFinite);
    const fbVeloAvg = fbVelos.length ? (fbVelos.reduce((a,b)=>a+b,0)/fbVelos.length) : null;

    // Tally usage by labeled family and by suggested family
    const labeledCount = new Map();
    const suggestedCount = new Map();
    const shapeOffCount = new Map();

    for (const p of pitches) {
      const lab = shortFromLabel(p.pitchType);
      labeledCount.set(lab, (labeledCount.get(lab) || 0) + 1);
      const sug = classifyPitch(p, fbVeloAvg);
      if (sug) suggestedCount.set(sug, (suggestedCount.get(sug) || 0) + 1);
      if (lab !== 'UNK' && !verifyShape(lab, p, fbVeloAvg)) {
        shapeOffCount.set(lab, (shapeOffCount.get(lab) || 0) + 1);
      }
    }

    const total = pitches.length || 1;
    const games = perPitcherGames.get(pname)?.size || 0;

    // Mismatches: labeled CT behaves like SL ≥15%
    const notes = [];
    const suggestSet = new Set(current);

    // Evaluate CT→SL mismatch
    const ctLabeled = labeledCount.get('CT') || 0;
    const slSuggested = suggestedCount.get('SL') || 0;
    if (ctLabeled && (slSuggested/total) >= 0.15) {
      notes.push(`CT behaves as SL in ${(100*(slSuggested/total)).toFixed(0)}% of pitches across ${games} games`);
      // If SL exists in current or allowed, ensure suggested includes it
      suggestSet.add('SL');
    }

    // Missing families: if suggested usage ≥8% and appears in ≥2 games
    for (const fam of ['SW','SI','CT','CB','CH','SPL']) {
      const c = suggestedCount.get(fam) || 0;
      const usage = c / total;
      if (usage >= 0.08 && games >= 2 && !allowed.has(fam)) {
        suggestSet.add(fam);
        notes.push(`${fam} shape present ${(100*usage).toFixed(0)}% across ${games} games`);
      }
    }

    // Shape off notes for CH etc.
    for (const [fam, off] of shapeOffCount.entries()) {
      if (off/total >= 0.10) {
        notes.push(`${fam} shape off typical in ${(100*(off/total)).toFixed(0)}%`);
      }
    }

    // Respect overrides.add and overrides.drop
    for (const a of (ov.add || [])) suggestSet.add(a);
    for (const d of (ov.drop || [])) suggestSet.delete(d);

    const suggested = Array.from(suggestSet);
    // Constrain to known families only (gates already ensured by suggestion logic)

    // Confidence heuristic: share of suggestions that are consistent with proposed additions
    let agree = 0; let support = 0;
    for (const fam of suggested) {
      const c = suggestedCount.get(fam) || 0;
      agree += c; support += c;
    }
    const confidence = total ? Math.max(0.5, Math.min(0.95, agree / total)) : 0.5;

    // If no changes and no notes, skip
    const currentSet = new Set(current);
    const differs = suggested.length !== current.length || suggested.some(x => !currentSet.has(x));
    if (!differs && notes.length === 0) continue;

    proposals[playerId] = {
      current,
      suggested,
      notes,
      support: { games, sample: total, since: globalSince || nowIsoDate() },
      confidence: Number(confidence.toFixed(2)),
    };
  }

  // Only output pitchers with any proposal
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(proposals, null, 2));
  console.log(`Wrote proposals to ${outPath}`);
}

if (require.main === module) {
  main();
}
