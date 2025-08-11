// src/utils/battedBallProfile.js
// Utilities to build the Batted Ball Profile summary
const isNum = (v) => Number.isFinite(Number(v));

const laBucket = (la) => {
  const n = Number(la);
  if (!Number.isFinite(n)) return null;
  if (n < 10) return 'GB';
  if (n < 25) return 'LD';
  if (n < 50) return 'FB';
  return 'PU';
};

const isBIP = (r) => {
  const res = String(r?.result || '').toLowerCase();
  // treat anything that isn’t a foul as a ball in play
  return res && res !== 'foul';
};

function summarizeGroup(rows) {
  let bip = 0, gb = 0, ld = 0, fb = 0, pu = 0;
  let evSum = 0, laSum = 0, evMax = -Infinity, hard = 0;

  for (const r of rows) {
    if (!isBIP(r)) continue;
    bip++;

    const b = laBucket(r.la);
    if (b === 'GB') gb++;
    else if (b === 'LD') ld++;
    else if (b === 'FB') fb++;
    else if (b === 'PU') pu++;

    const ev = Number(r.ev);
    const la = Number(r.la);
    if (isNum(ev)) { evSum += ev; if (ev > evMax) evMax = ev; if (ev >= 95) hard++; }
    if (isNum(la)) laSum += la;
  }

  const pct = (n) => (bip ? +(100 * n / bip).toFixed(1) : 0);

  return {
    BIP: bip,
    GBp: pct(gb),
    LDp: pct(ld),
    FBp: pct(fb),
    PUp: pct(pu),
    avgEV: bip ? +(evSum / bip).toFixed(1) : 0,
    maxEV: bip ? (isFinite(evMax) ? +evMax.toFixed(1) : 0) : 0,
    avgLA: bip ? +(laSum / bip).toFixed(1) : 0,
    hardHitp: bip ? +(100 * hard / bip).toFixed(1) : 0,
  };
}

// Coerce any input into a plain array of events
const toArray = (v) => {
  if (Array.isArray(v)) return v;
  if (v && typeof v === 'object') {
    if (Array.isArray(v.rows)) return v.rows;
    if (Array.isArray(v.data)) return v.data;
    if (Array.isArray(v.default)) return v.default;
  }
  return [];
};

export function buildSummary(rows = []) {
  const byPitchTypeMap = new Map();
  for (const r of rows) {
    const pt = String(r.pitchType || r.pitch_type || r.PitchType || 'Unknown');
    if (!byPitchTypeMap.has(pt)) byPitchTypeMap.set(pt, []);
    byPitchTypeMap.get(pt).push(r);
  }

  const byPitchType = Array.from(byPitchTypeMap.entries())
    .map(([pitchType, arr]) => ({ pitchType, ...summarizeGroup(arr) }))
    .sort((a, b) => b.BIP - a.BIP);

  const overall = { pitchType: 'OVERALL', ...summarizeGroup(rows) };
  return { overall, byPitchType };
}

// Allow either named or default imports
export default buildSummary;
