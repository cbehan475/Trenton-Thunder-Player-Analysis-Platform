/* eslint-disable no-console */
// AUTO-ADAPTED loader that understands your nested game-log format.

import MANIFEST from './pitchingManifest.js';

/** Turn one module into a flat list of pitch events, tagging pitcher & inning. */
function adaptModule(modLike) {
  const mod = modLike && modLike.default ? modLike.default : modLike;
  const out = [];

  if (!mod || typeof mod !== 'object') return out;

  // Case A: your format: { "Pitcher Name": { inningNumber: [ { pitch… }, … ] }, … }
  // Detect by checking that top-level values are objects with numeric keys -> arrays
  let looksLikePitchersObject = false;
  for (const val of Object.values(mod)) {
    if (val && typeof val === 'object') { looksLikePitchersObject = true; break; }
  }

  if (looksLikePitchersObject) {
    for (const [pitcherName, innings] of Object.entries(mod)) {
      if (!innings || typeof innings !== 'object') continue;
      for (const [inningStr, pitches] of Object.entries(innings)) {
        const inning = Number(inningStr);
        if (Array.isArray(pitches)) {
          for (const p of pitches) {
            out.push({ ...p, pitcher: pitcherName, inning });
          }
        }
      }
    }
    return out;
  }

  // Case B: fallback – arrays or plain objects you might add later
  if (Array.isArray(mod)) return mod.slice();
  return Object.values(mod).flatMap((v) => (Array.isArray(v) ? v : [v]));
}

/** Public: flatten a list of modules using the same adapter */
export function flattenModules(mods) {
  return (mods || []).flatMap(adaptModule);
}

/** Load & flatten everything from the manifest */
const ALL_PITCH_EVENTS = flattenModules(MANIFEST);

/** Utility */
const avg = (arr) => (arr.length ? arr.reduce((s, n) => s + n, 0) / arr.length : 0);
const asNum = (v) => (typeof v === 'number' ? v : Number(v));
const niceRange = (min, max) =>
  Number.isFinite(min) && Number.isFinite(max) ? `${Math.round(min)}–${Math.round(max)} mph` : '—';

/** Public: list pitcher names from real logs */
export function getAllPitcherNames() {
  const names = new Set();
  for (const e of ALL_PITCH_EVENTS) if (e.pitcher) names.add(e.pitcher);
  return Array.from(names).sort();
}

/** Public: compute table rows (one row per pitch type) from raw pitch events */
export function getPitchingMetricsFor(pitcherName) {
  const rows = ALL_PITCH_EVENTS.filter((e) => e.pitcher === pitcherName);
  const byType = new Map();

  for (const e of rows) {
    const type =
      e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass || 'Unknown';
    const velo = asNum(e.velo ?? e.velocity ?? e.v ?? e.speed);
    const ivb = asNum(e.ivb ?? e.vert ?? e.rise);
    const hb = asNum(e.hb ?? e.horz ?? e.run);

    if (!byType.has(type)) byType.set(type, []);
    byType.get(type).push({ velo, ivb, hb });
  }

  const table = [];
  for (const [type, list] of byType) {
    const vels = list.map((x) => x.velo).filter((n) => Number.isFinite(n));
    const ivbs = list.map((x) => x.ivb).filter((n) => Number.isFinite(n));
    const hbs  = list.map((x) => x.hb).filter((n) => Number.isFinite(n));

    const vMin = Math.min(...vels);
    const vMax = Math.max(...vels);

    table.push({
      type,
      velo: niceRange(vMin, vMax),
      ivb: Math.round(avg(ivbs)) || 0,
      hb: Math.round(avg(hbs)) || 0,
      command: '—',        // you can compute this later if you like
      // simple benchmark label (optional)
      bench: type.toLowerCase().includes('fastball')
        ? (Math.round(avg(ivbs)) >= 15 ? 'Above Avg' : 'MLB Avg')
        : 'MLB Avg',
    });
  }

  // Sort FB first, then by velo descending
  table.sort((a, b) => {
    const af = a.type.toLowerCase().includes('fastball') ? 0 : 1;
    const bf = b.type.toLowerCase().includes('fastball') ? 0 : 1;
    if (af !== bf) return af - bf;
    const aHi = Number(String(a.velo).split('–')[1]);
    const bHi = Number(String(b.velo).split('–')[1]);
    return (Number.isFinite(bHi) ? bHi : 0) - (Number.isFinite(aHi) ? aHi : 0);
  });

  return table;
}

/** Optional: simple stats for the badge/console */
export function getPitchingLogStats() {
  const keys = getAllPitcherNames();
  return { files: MANIFEST.length, entries: ALL_PITCH_EVENTS.length, keys };
}

/** Default export keeps parity with earlier code if anything still imports it */
export default ALL_PITCH_EVENTS;

// Debug: you should now see real keys (not []) and non-zero entries
console.log(
  '[pitchingIndex] manifest files:',
  MANIFEST.length,
  'total entries:',
  ALL_PITCH_EVENTS.length,
  'keys:',
  getAllPitcherNames()
);

// --- Added small helpers for page-scoped querying by date/pitcher/inning ---
// The page can seed this map using its existing per-date module imports to avoid
// modifying data files or manifests.
export let ALL_LOGS_BY_DATE = Object.create(null);

/** Seed the date → flat-rows map using the shared flattener. Non-breaking. */
export function seedLogsByDate(dateToModules) {
  const out = Object.create(null);
  for (const [dateStr, mod] of Object.entries(dateToModules || {})) {
    const mods = [mod && (mod.default ?? mod)].filter(Boolean);
    out[dateStr] = flattenModules(mods).map((r, idx) => ({ ...r, __id: `${dateStr}-${idx}` }));
  }
  ALL_LOGS_BY_DATE = out;
}

/** Return unique pitcher names who have logs on that date. */
export function getPitchersForDate(dateStr) {
  const day = ALL_LOGS_BY_DATE?.[dateStr] || [];
  const names = new Set();
  for (const entry of day) {
    if (entry?.pitcher) names.add(entry.pitcher);
  }
  return Array.from(names).sort();
}

/** Return ["All", ...unique innings] for a given date and optional pitcher. */
export function getInningsFor(dateStr, pitcherName) {
  const day = ALL_LOGS_BY_DATE?.[dateStr] || [];
  const innings = new Set();
  for (const p of day) {
    if (!pitcherName || p.pitcher === pitcherName) {
      if (p.inning != null) innings.add(String(p.inning));
    }
  }
  return [
    'All',
    ...Array.from(innings).sort((a, b) => Number(a) - Number(b)),
  ];
}

/** Filter rows by date, then pitcher (if set), then inning (if not "All"). */
export function getLogs(dateStr, pitcherName, inningVal) {
  let rows = ALL_LOGS_BY_DATE?.[dateStr] || [];
  if (pitcherName) rows = rows.filter((r) => r.pitcher === pitcherName);
  if (inningVal && inningVal !== 'All') rows = rows.filter((r) => String(r.inning) === String(inningVal));
  // Ensure DataGrid ids
  return rows.map((r, i) => ({ id: r.__id || i + 1, ...r }));
}