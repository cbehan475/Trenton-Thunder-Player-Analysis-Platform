/* eslint-disable no-console */
import MANIFEST from './pitchingManifest';

// ---- helpers: flatten any mix of arrays/objects into a flat array of entries
function flattenModules(mods) {
  const out = [];
  for (const m of mods) {
    const mod = m && m.default ? m.default : m;
    if (Array.isArray(mod)) out.push(...mod);
    else if (mod && typeof mod === 'object') out.push(...Object.values(mod).flat());
  }
  return out.filter(Boolean);
}

// ---- try multiple key aliases for each field
const pick = (obj, keys) => {
  for (const k of keys) {
    if (obj[k] != null && obj[k] !== '') return obj[k];
  }
  return undefined;
};

function toVeloRange(raw) {
  // accept: "94–96 mph", "94-96", low/high fields, or single number
  const str = pick(raw, ['velocity', 'velo', 'Velo', 'vel', 'mph', 'VeloRange', 'veloRange']);
  const lo = pick(raw, ['veloLow', 'VeloLow', 'vLow', 'mphLow']);
  const hi = pick(raw, ['veloHigh', 'VeloHigh', 'vHigh', 'mphHigh']);
  if (lo && hi) return `${lo}–${hi} mph`;
  if (typeof str === 'string') {
    if (str.includes('mph')) return str;
    return `${str} mph`;
  }
  if (typeof str === 'number') return `${str} mph`;
  return '';
}

function normalizeEntry(raw) {
  // pitcher name
  const name =
    pick(raw, ['pitcherName', 'PitcherName', 'pitcher', 'Pitcher', 'playerName', 'Player', 'name']) || 'Unknown';

  // pitch type
  const type = pick(raw, ['pitchType', 'PitchType', 'type', 'Type', 'pitch']) || 'Pitch';

  // IVB (induced vertical break)
  let ivb =
    pick(raw, ['ivb', 'IVB', 'inducedVertBreak', 'inducedVerticalBreak', 'vBreakInduced', 'vertBreak', 'vert']) ?? 0;

  // HB (horizontal break)
  let hb =
    pick(raw, ['hb', 'HB', 'horizontalBreak', 'hBreak', 'horizBreak', 'horizontal']) ?? 0;

  // numeric cleanup if strings like "17 in" or "+17"
  const num = (v) => {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
      const m = v.match(/-?\d+(\.\d+)?/);
      return m ? Number(m[0]) : 0;
    }
    return 0;
  };
  ivb = num(ivb);
  hb = num(hb);

  // command label
  let command = pick(raw, ['command', 'Command', 'cmd', 'grade', 'CommandGrade', 'control']);
  if (typeof command === 'number') {
    // translate common 20-80 or 2-8 scales
    const val = Number(command);
    if (val >= 55) command = 'Above-average';
    else if (val >= 45) command = 'Average';
    else command = 'Below-average';
  } else if (typeof command === 'string') {
    const c = command.toLowerCase();
    if (c.includes('above')) command = 'Above-average';
    else if (c.includes('below')) command = 'Below-average';
    else command = 'Average';
  } else {
    command = 'Average';
  }

  return {
    name,
    type,
    velo: toVeloRange(raw),
    ivb,
    hb,
    command,
  };
}

// ---- build per-pitcher map: { [name]: { name, pitches: [...] } }
function buildPitcherMap(entries) {
  const map = new Map();
  for (const e of entries) {
    const row = normalizeEntry(e);
    if (!map.has(row.name)) map.set(row.name, { name: row.name, pitches: [] });
    map.get(row.name).pitches.push({
      type: row.type,
      velo: row.velo,
      ivb: row.ivb,
      hb: row.hb,
      command: row.command,
    });
  }
  return map;
}

// ---- public API used by the page
export function getPitchingLogStats() {
  const modules = Array.isArray(MANIFEST) ? MANIFEST : [];
  const entries = flattenModules(modules);
  // For quick debugging, capture a sample of keys we saw
  const sampleKeys = entries.slice(0, 3).map((e) => Object.keys(e));
  console.log('[pitchingIndex] manifest files:', modules.length, 'total entries:', entries.length, 'sample keys:', sampleKeys);
  return { files: modules.length, entries: entries.length, entries, sampleKeys };
}

export function getAllPitcherNames() {
  const { entries } = getPitchingLogStats();
  const names = [...new Set(entries.map((e) => normalizeEntry(e).name))].filter((n) => n && n !== 'Unknown');
  return names;
}

export function getPitchingMetricsFor(pitcherName) {
  const { entries } = getPitchingLogStats();
  const map = buildPitcherMap(entries);
  const rec = map.get(pitcherName);
  if (!rec) return null;
  // sort pitches stable: FB/SL/CB/CH if present
  const order = ['fastball', 'sinker', 'slider', 'curve', 'curveball', 'change', 'changeup', 'cutter'];
  rec.pitches.sort((a, b) => order.indexOf(a.type.toLowerCase()) - order.indexOf(b.type.toLowerCase()));
  return rec;
}

// default export kept for any legacy callers
export default MANIFEST;
