// src/pages/pitchingBenchmarksByLevel.js
// Read-only pitching benchmarks by level. The UI renders placeholders ("—") when values are missing.
// Values are examples/placeholders; fill in with real ranges as available.

export const PITCHING_BENCHMARKS_VERSION = 'v2024.1';

export const PITCHING_BENCHMARKS = {
  MLB: {
    fourSeam:  { velo: [92,97], ivb: 16,  hb: 7,  command: 'MLB Avg', p50Velo: 94.5, p50IVB: 16,  p50HB: 7,  n: null },
    sinker:    { velo: [91,96], ivb: 10,  hb: 15, command: 'MLB Avg', p50Velo: 93.5, p50IVB: 10,  p50HB: 15, n: null },
    slider:    { velo: [83,88], ivb: 2,   hb: 6,  command: 'MLB Avg', p50Velo: 85.5, p50IVB: 2,   p50HB: 6,  n: null },
    sweeper:   { velo: [81,86], ivb: 3,   hb: 14, command: 'MLB Avg', p50Velo: 83.5, p50IVB: 3,   p50HB: 14, n: null },
    curveball: { velo: [77,83], ivb: -8,  hb: 7,  command: 'MLB Avg', p50Velo: 80,   p50IVB: -8,  p50HB: 7,  n: null },
    changeup:  { velo: [84,89], ivb: 8,   hb: 14, command: 'MLB Avg', p50Velo: 86.5, p50IVB: 8,   p50HB: 14, n: null },
    cutter:    { velo: [87,92], ivb: 12,  hb: 4,  command: 'MLB Avg', p50Velo: 89.5, p50IVB: 12,  p50HB: 4,  n: null },
  },
  AAA: {
    fourSeam:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sinker:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    slider:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    curveball: { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    changeup:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    cutter:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sweeper:   { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
  },
  AA: {
    fourSeam:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sinker:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    slider:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    curveball: { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    changeup:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    cutter:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sweeper:   { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
  },
  "A+": {
    fourSeam:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sinker:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    slider:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    curveball: { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    changeup:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    cutter:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sweeper:   { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
  },
  A: {
    fourSeam:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sinker:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    slider:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    curveball: { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    changeup:  { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    cutter:    { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
    sweeper:   { velo: null, ivb: null, hb: null, command: null, p50Velo: null, p50IVB: null, p50HB: null, n: null },
  },
};
