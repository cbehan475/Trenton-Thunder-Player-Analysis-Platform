// src/lib/benchmarks.js
// Utilities for working with pitching benchmarks by level.
// Pure JS to match the project stack. All values are optional-safe.

import { PITCHING_BENCHMARKS } from '../pages/pitchingBenchmarksByLevel.js';

// Global feature toggles / defaults
export const BENCH_LEVEL = 'MLB';
export const FEATURE_BENCHMARK_BADGES = true;

const KEY_MAP = new Map([
  ['four-seam', 'fourSeam'],
  ['fourseam', 'fourSeam'],
  ['4s', 'fourSeam'],
  ['ffs', 'fourSeam'],
  ['ff', 'fourSeam'],
  ['sinker', 'sinker'],
  ['two-seam', 'sinker'],
  ['2s', 'sinker'],
  ['slider', 'slider'],
  ['curveball', 'curveball'],
  ['curve', 'curveball'],
  ['cb', 'curveball'],
  ['changeup', 'changeup'],
  ['ch', 'changeup'],
  ['cutter', 'cutter'],
  ['cut', 'cutter'],
  ['sweeper', 'sweeper'],
]);

function normalizePitchType(pitchType) {
  if (!pitchType) return null;
  const key = String(pitchType).toLowerCase().replace(/\s+/g, '-');
  return KEY_MAP.get(key) || null;
}

// getBench(level, pitchType) -> { velo:[min,max], ivb, hb, command, p50Velo, p50IVB, p50HB, n } | null
export function getBench(level, pitchType) {
  const lvl = level && PITCHING_BENCHMARKS[level] ? level : null;
  if (!lvl) return null;
  const norm = normalizePitchType(pitchType);
  if (!norm) return null;
  const rec = PITCHING_BENCHMARKS[lvl][norm];
  return rec || null;
}

// delta(value, benchP50) -> signed number or null
export function delta(value, benchP50) {
  const v = Number(value);
  const b = Number(benchP50);
  if (!Number.isFinite(v) || !Number.isFinite(b)) return null;
  return v - b;
}

// percentileFromBand(value, p25, p50, p75)
// Simple triangular approximation: piecewise-linear mapping with 0 at p25, 50 at p50, 100 at p75.
// Returns null if insufficient inputs.
export function percentileFromBand(value, p25, p50, p75) {
  const v = Number(value);
  const a = Number(p25);
  const m = Number(p50);
  const z = Number(p75);
  if (![v, a, m, z].every(Number.isFinite)) return null;
  if (v <= a) return 0;
  if (v >= z) return 100;
  if (v === m) return 50;
  if (v < m) {
    const t = (v - a) / (m - a);
    return Math.max(0, Math.min(50, t * 50));
  } else {
    const t = (v - m) / (z - m);
    return Math.max(50, Math.min(100, 50 + t * 50));
  }
}
