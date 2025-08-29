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

// --- Normalization gates and verification ---
// We encode organization-wide gates (with tight and loose variants) for families.
// Tight gates drive initial classification; loose gates drive "shape dispute" hints.

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

// Looser gates for verifying a labeled pitch's shape without flapping
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

function toNums({ velo, ivb, hb, spin, fbVeloAvg }) {
  return {
    v: Number.isFinite(velo) ? velo : null,
    i: Number.isFinite(ivb) ? ivb : null,
    h: Number.isFinite(hb) ? hb : null,
    s: Number.isFinite(spin) ? spin : null,
    fv: Number.isFinite(fbVeloAvg) ? fbVeloAvg : null,
  };
}

// classifyPitch({ velo, ivb, hb, spin, fbVeloAvg }) => FF|SI|CT|SL|SW|CB|CH|SPL|null
export function classifyPitch({ velo, ivb, hb, spin, fbVeloAvg }) {
  // Note: when CH is verified in a pitcher's arsenal, downstream batch logic prefers CH over SPL
  // unless strong SPL gates are satisfied (ΔV, IVB, HB, usage/games). See Step 3F batch script.
  const nums = toNums({ velo, ivb, hb, spin, fbVeloAvg });
  if (gates.FF(nums)) return 'FF';
  if (gates.SI(nums)) return 'SI';
  if (gates.CT(nums)) return 'CT';
  if (gates.SW(nums)) return 'SW';
  if (gates.SL(nums)) return 'SL';
  if (gates.CB(nums)) return 'CB';
  if (gates.CH(nums)) return 'CH';
  if (gates.SPL(nums)) return 'SPL';
  return null;
}

// Constrain suggestion to a verified arsenal
export function constrainedSuggest({ velo, ivb, hb, spin, fbVeloAvg, allowed }) {
  const code = classifyPitch({ velo, ivb, hb, spin, fbVeloAvg });
  if (!code) return null;
  if (allowed && allowed instanceof Set && !allowed.has(code)) return null;
  return code;
}

// Verify if a given labeled code matches loose gates (shape verification)
export function verifyShape(code, { velo, ivb, hb, spin, fbVeloAvg }) {
  const c = String(code || '').toUpperCase();
  const nums = toNums({ velo, ivb, hb, spin, fbVeloAvg });
  const fn = loose[c];
  if (!fn) return { ok: false, reason: 'Unknown code' };
  const ok = !!fn(nums);
  let reason = '';
  if (!ok) {
    // Provide a minimal reason for dispute hints
    const parts = [];
    if (c === 'CH' && !(nums.fv != null && nums.v != null && nums.fv - nums.v >= 7)) parts.push('ΔV < 7');
    if ((c === 'CH' || c === 'SI' || c === 'CT') && !(nums.h != null && nums.h >= (c === 'CT' ? 5 : 10))) parts.push('HB low');
    if ((c === 'FF' || c === 'CT' || c === 'SI') && !(nums.i != null && nums.i >= (c === 'FF' ? 15 : 13))) parts.push('IVB low');
    if ((c === 'SL' || c === 'SW') && !(nums.s != null && nums.s >= 2200)) parts.push('Spin low');
    if (c === 'CB' && !(nums.i != null && nums.i <= -7)) parts.push('IVB not down');
    reason = parts.join(', ') || 'Outside loose gates';
  }
  return { ok, reason };
}
