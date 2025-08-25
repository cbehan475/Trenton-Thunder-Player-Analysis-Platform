// src/lib/percentiles.js
// Linear percentile within [min,max]; clamp 0..100.
// If inverse=true, lower is better (e.g., Whiff%, Chase%).
export function percentileWithinRange(value, [min, max], { inverse = false } = {}) {
  if (value == null || min == null || max == null || max <= min) return null;
  const t = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const p = Math.round((inverse ? (1 - t) : t) * 100);
  return p;
}

export default percentileWithinRange;
