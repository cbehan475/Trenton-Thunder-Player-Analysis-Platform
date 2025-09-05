// src/constants/mlbBenchmarks.js
// Single source of truth for MLB median (p50) benchmarks

export const MLB_BATTED_BALL_MIX_P50 = { GB: 42.0, LD: 22.0, FB: 34.0, PU: 8.0 };

/**
 * Centralized MLB median (p50) benchmarks used across the app.
 * NOTE: Values below are placeholders until we wire real league medians.
 * Keep everything in one file to avoid duplication across pages/components.
 */
export const MLB_BENCHMARKS_P50 = {
  // Hitting quality
  EV: 0,       // mph  (PLACEHOLDER; to be updated)
  LA: 0,       // deg  (PLACEHOLDER; to be updated)
  HH_PCT: 0,   // %    (PLACEHOLDER; to be updated)

  // Batted ball mix (reuse the existing export so there’s one source)
  BATTED_BALL_MIX: MLB_BATTED_BALL_MIX_P50,
};

// Optional named exports if you prefer granular imports:
export const MLB_EV_P50 = MLB_BENCHMARKS_P50.EV;
export const MLB_LA_P50 = MLB_BENCHMARKS_P50.LA;
export const MLB_HH_PCT_P50 = MLB_BENCHMARKS_P50.HH_PCT;
