// src/lib/pitchingBenchmarksByLevel.js
// Simplified benchmark ranges by level for dropdown-driven benchmarks UI.
// Keep keys and structure stable; units: velo mph, IVB/HB inches (IVB may be negative).

export const pitchingBenchmarksByLevel = {
  MLB: {
    fourSeam: { velo: [92, 97], ivb: 16, hb: 7,  p50Velo: 94.5, p50IVB: 16,  p50HB: 7 },
    sinker:   { velo: [91, 96], ivb: 10, hb: 15, p50Velo: 93.5, p50IVB: 10, p50HB: 15 },
    slider:   { velo: [83, 88], ivb: 2,  hb: 6,  p50Velo: 85.5, p50IVB: 2,  p50HB: 6 },
    curveball:{ velo: [77, 83], ivb: -8, hb: 7,  p50Velo: 80.0, p50IVB: -8, p50HB: 7 },
    changeup: { velo: [84, 89], ivb: 8,  hb: 14, p50Velo: 86.5, p50IVB: 8,  p50HB: 14 },
    cutter:   { velo: [87, 92], ivb: 12, hb: 4,  p50Velo: 89.5, p50IVB: 12, p50HB: 4 },
    sweeper:  { velo: [81, 86], ivb: 3,  hb: 14, p50Velo: 83.5, p50IVB: 3,  p50HB: 14 },
  },
  AAA: {
    fourSeam: { velo: [91, 96], ivb: 15, hb: 8,  p50Velo: 93.5, p50IVB: 15, p50HB: 8 },
    sinker:   { velo: [90, 95], ivb: 9,  hb: 14, p50Velo: 92.5, p50IVB: 9,  p50HB: 14 },
    slider:   { velo: [82, 87], ivb: 2,  hb: 6,  p50Velo: 84.5, p50IVB: 2,  p50HB: 6 },
    curveball:{ velo: [76, 82], ivb: -7, hb: 7,  p50Velo: 79.0, p50IVB: -7, p50HB: 7 },
    changeup: { velo: [83, 88], ivb: 7,  hb: 13, p50Velo: 85.5, p50IVB: 7,  p50HB: 13 },
    cutter:   { velo: [86, 91], ivb: 11, hb: 4,  p50Velo: 88.5, p50IVB: 11, p50HB: 4 },
    sweeper:  { velo: [80, 85], ivb: 3,  hb: 13, p50Velo: 82.5, p50IVB: 3,  p50HB: 13 },
  },
  AA: {
    fourSeam: { velo: [90, 95], ivb: 14, hb: 8,  p50Velo: 92.5, p50IVB: 14, p50HB: 8 },
    sinker:   { velo: [89, 94], ivb: 8,  hb: 14, p50Velo: 91.5, p50IVB: 8,  p50HB: 14 },
    slider:   { velo: [81, 86], ivb: 2,  hb: 6,  p50Velo: 83.5, p50IVB: 2,  p50HB: 6 },
    curveball:{ velo: [75, 81], ivb: -7, hb: 7,  p50Velo: 78.0, p50IVB: -7, p50HB: 7 },
    changeup: { velo: [82, 87], ivb: 7,  hb: 12, p50Velo: 84.5, p50IVB: 7,  p50HB: 12 },
    cutter:   { velo: [85, 90], ivb: 11, hb: 4,  p50Velo: 87.5, p50IVB: 11, p50HB: 4 },
    sweeper:  { velo: [79, 84], ivb: 3,  hb: 13, p50Velo: 81.5, p50IVB: 3,  p50HB: 13 },
  },
  'A+': {
    fourSeam: { velo: [89, 94], ivb: 13, hb: 9,  p50Velo: 91.5, p50IVB: 13, p50HB: 9 },
    sinker:   { velo: [88, 93], ivb: 8,  hb: 13, p50Velo: 90.5, p50IVB: 8,  p50HB: 13 },
    slider:   { velo: [80, 85], ivb: 2,  hb: 6,  p50Velo: 82.5, p50IVB: 2,  p50HB: 6 },
    curveball:{ velo: [74, 80], ivb: -6, hb: 7,  p50Velo: 77.0, p50IVB: -6, p50HB: 7 },
    changeup: { velo: [81, 86], ivb: 6,  hb: 12, p50Velo: 83.5, p50IVB: 6,  p50HB: 12 },
    cutter:   { velo: [84, 89], ivb: 10, hb: 4,  p50Velo: 86.5, p50IVB: 10, p50HB: 4 },
    sweeper:  { velo: [78, 83], ivb: 2,  hb: 12, p50Velo: 80.5, p50IVB: 2,  p50HB: 12 },
  },
  A: {
    fourSeam: { velo: [88, 93], ivb: 12, hb: 9,  p50Velo: 90.5, p50IVB: 12, p50HB: 9 },
    sinker:   { velo: [87, 92], ivb: 7,  hb: 12, p50Velo: 89.5, p50IVB: 7,  p50HB: 12 },
    slider:   { velo: [79, 84], ivb: 2,  hb: 6,  p50Velo: 81.5, p50IVB: 2,  p50HB: 6 },
    curveball:{ velo: [73, 79], ivb: -6, hb: 6,  p50Velo: 76.0, p50IVB: -6, p50HB: 6 },
    changeup: { velo: [80, 85], ivb: 6,  hb: 11, p50Velo: 82.5, p50IVB: 6,  p50HB: 11 },
    cutter:   { velo: [83, 88], ivb: 9,  hb: 4,  p50Velo: 85.5, p50IVB: 9,  p50HB: 4 },
    sweeper:  { velo: [77, 82], ivb: 2,  hb: 11, p50Velo: 79.5, p50IVB: 2,  p50HB: 11 },
  },
};
