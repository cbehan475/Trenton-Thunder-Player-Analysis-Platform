// src/lib/pitchHeuristics.js
// Heuristic pitch classifier and helpers.
import { normalizePitchLabel } from './pitchLabel.js';

export function isFastballFamily(code) {
  const c = String(code || '').toUpperCase();
  return c === 'FF' || c === 'SI' || c === 'CT';
}

export function codeDisplay(code) {
  const { code: c } = normalizePitchLabel(code);
  return c;
}

// classifyPitch({ velo, ivb, hb, spin, fbVeloAvg }) => FF|SI|CT|SL|SW|CB|CH|SPL|null
export function classifyPitch({ velo, ivb, hb, spin, fbVeloAvg }) {
  const v = Number.isFinite(velo) ? velo : null;
  const i = Number.isFinite(ivb) ? ivb : null;
  const h = Number.isFinite(hb) ? hb : null;
  const s = Number.isFinite(spin) ? spin : null;
  const fv = Number.isFinite(fbVeloAvg) ? fbVeloAvg : null;

  // Fastball family
  if (v != null && i != null && v >= 94 && i >= 16) return 'FF';
  if (h != null && i != null && h >= 15 && i < 16) return 'SI';
  if (i != null && h != null && i >= 14 && i <= 18 && h >= 6 && h <= 12) return 'CT';

  // Breaking
  if (h != null && s != null && i != null && h <= -12 && s >= 2500 && i >= -1 && i <= 3) return 'SW';
  if (h != null && s != null && i != null && h <= -8 && h >= -16 && s >= 2300 && s <= 2600 && Math.abs(i) <= 3) return 'SL';
  if (i != null && v != null && s != null && i <= -8 && v < 82 && s >= 2600) return 'CB';

  // Offspeed (require fbVeloAvg)
  if (fv != null && v != null && fv - v >= 8) {
    // Changeup: stronger gates for verified shape
    if (h != null && i != null && h >= 12 && i >= 4 && i <= 14) return 'CH';
    // Splitter
    if (i != null && i < 8) return 'SPL';
  }

  return null;
}
