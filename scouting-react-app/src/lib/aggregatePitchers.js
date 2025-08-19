// src/lib/aggregatePitchers.js
// Build first-half season aggregates (p50 medians) per pitcher directly from logs.
// Synchronous: uses the already-flattened default export from pitchingIndex.

import ALL_PITCH_EVENTS from '../data/logs/pitchingIndex.js';
import { toPitchKey, median, mean } from './seasonAggregatesFromLogs.js';

// Median helper (kept for API parity with the spec and in case we swap later)
export { median };

export function buildPitchersSeasonAggregates() {
  // pid -> { id, name, pitches: { key -> { v:[], i:[], h:[] } } }
  const map = new Map();

  for (const e of ALL_PITCH_EVENTS) {
    if (!e) continue;
    const pitcherName = e.pitcher || e.pitcherName || e.name || '';
    if (!pitcherName) continue;
    const rawId = e.pitcherId || e.pitcher_id || e.pid || null;
    const pitcherId = rawId ? String(rawId) : String(pitcherName).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const k = toPitchKey(e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass || '');
    if (!k) continue;

    if (!map.has(pitcherId)) map.set(pitcherId, { id: pitcherId, name: pitcherName, pitches: Object.create(null) });
    const rec = map.get(pitcherId);
    if (!rec.pitches[k]) rec.pitches[k] = { v: [], i: [], h: [] };

    const v = toNum(e.velo ?? e.velocity ?? e.v ?? e.speed);
    const i = toNum(e.ivb ?? e.vert ?? e.rise);
    const h = toNum(e.hb ?? e.horz ?? e.run);

    if (Number.isFinite(v)) rec.pitches[k].v.push(v);
    if (Number.isFinite(i)) rec.pitches[k].i.push(i);
    if (Number.isFinite(h)) rec.pitches[k].h.push(Math.abs(h)); // store absolute HB
  }

  // collapse to medians/means and convert to the array shape expected by getPitcherSeasonAgg()
  const out = [];
  for (const [pid, rec] of map.entries()) {
    const pitchesOut = Object.create(null);
    for (const [key, lists] of Object.entries(rec.pitches)) {
      const n = Math.min(lists.v.length, lists.i.length, lists.h.length);
      if (n <= 0) continue;
      const useMedian = n >= 3;
      pitchesOut[key] = {
        p50Velo: useMedian ? median(lists.v) : mean(lists.v),
        p50IVB:  useMedian ? median(lists.i) : mean(lists.i),
        p50HB:   useMedian ? median(lists.h) : mean(lists.h),
        n,
      };
    }
    out.push({ id: rec.id, name: rec.name, pitches: pitchesOut });
  }

  return out;
}

function toNum(v) {
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : null;
}
