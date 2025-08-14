// src/utils/pitchingAdapter.js
import allPitchingRows from '../data/logs/pitchingIndex';

function slugify(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
function readField(obj, candidates, fallback = null) {
  for (const c of candidates) if (obj[c] !== undefined && obj[c] !== null) return obj[c];
  return fallback;
}
function formatVelo(row) {
  const vMin = readField(row, ['veloMin', 'vMin', 'velocityMin', 'minVelo']);
  const vMax = readField(row, ['veloMax', 'vMax', 'velocityMax', 'maxVelo']);
  const vAvg = readField(row, ['velo', 'velocity', 'avgVelo']);
  if (vMin != null && vMax != null) return `${Math.round(vMin)}–${Math.round(vMax)} mph`;
  if (vAvg != null) return `${Math.round(Number(vAvg))} mph`;
  return '-';
}
function normalizePitchRow(row) {
  const name = readField(row, ['pitcher', 'player', 'name', 'pitcherName']);
  const typeRaw = readField(row, ['pitchType', 'type', 'pitch']);
  if (!name || !typeRaw) return null;
  const ivb = Number(readField(row, ['ivbIn', 'ivb', 'inducedVerticalBreak', 'verticalBreak'], 0));
  const hb  = Number(readField(row, ['hbIn', 'hb', 'horizontalBreak'], 0));
  const command = readField(row, ['command', 'cmdLabel', 'commandLabel'], '-');
  return {
    name,
    type: String(typeRaw),
    velo: formatVelo(row),
    ivb: Number.isFinite(ivb) ? Math.round(ivb) : 0,
    hb:  Number.isFinite(hb)  ? Math.round(hb)  : 0,
    command,
  };
}

export function loadPitcherSummaries() {
  // Combine all rows from the explicit index
  const rows = Array.isArray(allPitchingRows) ? allPitchingRows : [];
  const byPitcher = new Map();

  rows.forEach((r) => {
    const norm = normalizePitchRow(r);
    if (!norm) return;
    const id = slugify(norm.name);
    if (!byPitcher.has(id)) byPitcher.set(id, { id, name: norm.name, map: new Map() });
    const bucket = byPitcher.get(id);
    const key = norm.type;
    const prev = bucket.map.get(key);
    if (!prev || Math.abs(norm.ivb) > Math.abs(prev.ivb)) {
      bucket.map.set(key, { type: norm.type, velo: norm.velo, ivb: norm.ivb, hb: norm.hb, command: norm.command });
    }
  });

  const pitchers = [];
  for (const { id, name, map } of byPitcher.values()) {
    const preferred = ['Fastball','Four-Seam Fastball','Two-Seam Fastball','Sinker','Slider','Curveball','Changeup'];
    const pitches = [];
    preferred.forEach((t) => { if (map.has(t)) pitches.push(map.get(t)); });
    for (const [k,v] of map.entries()) if (!pitches.find(p => p.type === k)) pitches.push(v);
    pitchers.push({ id, name, pitches });
  }
  pitchers.sort((a,b) => a.name.localeCompare(b.name));
  return pitchers;
}
