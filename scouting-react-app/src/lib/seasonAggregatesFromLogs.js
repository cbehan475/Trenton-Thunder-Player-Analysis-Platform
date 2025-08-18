// src/lib/seasonAggregatesFromLogs.js
// Build first-half season aggregates (p50s/means) from raw logs.

import { getAllFirstHalfLogs } from '../data/pitchingLogsProvider.js';

// Normalize pitch labels to internal keys used in benchmarks
const KEY_MAP = new Map([
  ['four-seam fastball', 'fourSeam'],
  ['4-seam fastball', 'fourSeam'],
  ['four-seam', 'fourSeam'],
  ['four seam', 'fourSeam'],
  ['fourseam', 'fourSeam'],
  ['ff', 'fourSeam'],
  ['ffs', 'fourSeam'],
  ['4s', 'fourSeam'],
  ['fastball', 'fourSeam'], // fallback mapping

  ['sinker', 'sinker'],
  ['two-seam', 'sinker'],
  ['two seam', 'sinker'],
  ['2s', 'sinker'],
  ['two-seam fastball', 'sinker'],

  ['slider', 'slider'],
  ['sl', 'slider'],

  ['curveball', 'curveball'],
  ['curve', 'curveball'],
  ['cb', 'curveball'],

  ['changeup', 'changeup'],
  ['change', 'changeup'],
  ['ch', 'changeup'],

  ['cutter', 'cutter'],
  ['cut', 'cutter'],

  ['sweeper', 'sweeper'],
]);

export function toPitchKey(s) {
  if (!s) return null;
  const base = String(s).trim().toLowerCase();
  // try direct match
  if (KEY_MAP.has(base)) return KEY_MAP.get(base);
  // heuristic contains
  if (base.includes('sweep')) return 'sweeper';
  if (base.includes('cutter')) return 'cutter';
  if (base.includes('change')) return 'changeup';
  if (base.includes('curve')) return 'curveball';
  if (base.includes('slider')) return 'slider';
  if (base.includes('sink') || base.includes('two-seam') || base.includes('2-seam')) return 'sinker';
  if (base.includes('fastball') || base.includes('four') || base.includes('4-seam') || base.includes('4 seam')) return 'fourSeam';
  return null;
}

export function median(nums) {
  const arr = (nums || []).filter((n) => Number.isFinite(n)).sort((a,b)=>a-b);
  if (arr.length === 0) return null;
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) return (arr[mid - 1] + arr[mid]) / 2;
  return arr[mid];
}

export function mean(nums) {
  const arr = (nums || []).filter((n) => Number.isFinite(n));
  if (arr.length === 0) return null;
  return arr.reduce((s,n)=>s+n,0) / arr.length;
}

export async function buildSeasonAggregatesFromLogs() {
  const rows = await getAllFirstHalfLogs();
  // pitcherId -> { id, name, pitches: { key -> arrays } }
  const map = new Map();

  for (const r of rows) {
    if (!r || !r.pitcherId) continue;
    const k = toPitchKey(r.pitchType || r.type || r.pitch || '');
    if (!k) continue;
    const pid = r.pitcherId;
    const name = r.pitcherName || '';
    if (!map.has(pid)) map.set(pid, { id: pid, name, pitches: Object.create(null) });
    const rec = map.get(pid);
    if (!rec.pitches[k]) rec.pitches[k] = { v: [], i: [], h: [] };
    const v = num(r.velo);
    const i = num(r.ivb);
    const h = num(Math.abs(r.hb));
    if (Number.isFinite(v)) rec.pitches[k].v.push(v);
    if (Number.isFinite(i)) rec.pitches[k].i.push(i);
    if (Number.isFinite(h)) rec.pitches[k].h.push(h);
  }

  // finalize stats
  const out = Object.create(null);
  for (const [pid, rec] of map.entries()) {
    const pitchesOut = Object.create(null);
    for (const [key, lists] of Object.entries(rec.pitches)) {
      const n = Math.min(lists.v.length, lists.i.length, lists.h.length);
      if (n <= 0) continue;
      const useMedian = n >= 3;
      const agg = {
        p50Velo: useMedian ? median(lists.v) : mean(lists.v),
        p50IVB:  useMedian ? median(lists.i) : mean(lists.i),
        p50HB:   useMedian ? median(lists.h) : mean(lists.h),
        n,
      };
      pitchesOut[key] = agg;
    }
    out[pid] = { id: rec.id, name: rec.name, pitches: pitchesOut };
  }

  return out;
}

function num(v) {
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : null;
}
