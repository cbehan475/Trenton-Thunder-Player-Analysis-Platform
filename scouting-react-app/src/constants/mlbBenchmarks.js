// src/constants/mlbBenchmarks.js
// Single source of truth for MLB median (p50) benchmarks

export const MLB_BATTED_BALL_MIX_P50 = { GB: 42.0, LD: 22.0, FB: 34.0, PU: 8.0 };

/**
 * Centralized MLB median (p50) benchmarks used across the app.
 * NOTE: Values below are 2024 league-typical values.
 * Keep everything in one file to avoid duplication across pages/components.
 */
export const MLB_BENCHMARKS_P50 = {
  // Hitting quality (MLB p50 defaults; 2024 league-typical)
  EV: 88.6,    // mph
  LA: 13.0,    // degrees
  HH_PCT: 39.0, // %

  // Batted ball mix (reuse the existing export so there’s one source)
  BATTED_BALL_MIX: MLB_BATTED_BALL_MIX_P50,
};

// Optional named exports if you prefer granular imports:
export const MLB_EV_P50 = MLB_BENCHMARKS_P50.EV;
export const MLB_LA_P50 = MLB_BENCHMARKS_P50.LA;
export const MLB_HH_PCT_P50 = MLB_BENCHMARKS_P50.HH_PCT;
