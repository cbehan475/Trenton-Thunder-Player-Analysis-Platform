// src/lib/pitchingBenchmarksByLevel.js
// Simplified benchmark ranges by level for dropdown-driven benchmarks UI.
// Keep keys and structure stable; units: velo mph, IVB/HB inches (IVB may be negative).

export const pitchingBenchmarksByLevel = {
  MLB: {
    fourSeam: { velo: [92, 97], ivb: 16, hb: 7 },
    sinker:   { velo: [91, 96], ivb: 10, hb: 15 },
    slider:   { velo: [83, 88], ivb: 2,  hb: 6 },
    curveball:{ velo: [77, 83], ivb: -8, hb: 7 },
    changeup: { velo: [84, 89], ivb: 8,  hb: 14 },
    cutter:   { velo: [87, 92], ivb: 12, hb: 4 },
    sweeper:  { velo: [81, 86], ivb: 3,  hb: 14 },
  },
  AAA: {
    fourSeam: { velo: [91, 96], ivb: 15, hb: 8 },
    sinker:   { velo: [90, 95], ivb: 9,  hb: 14 },
    slider:   { velo: [82, 87], ivb: 2,  hb: 6 },
    curveball:{ velo: [76, 82], ivb: -7, hb: 7 },
    changeup: { velo: [83, 88], ivb: 7,  hb: 13 },
    cutter:   { velo: [86, 91], ivb: 11, hb: 4 },
    sweeper:  { velo: [80, 85], ivb: 3,  hb: 13 },
  },
  AA: {
    fourSeam: { velo: [90, 95], ivb: 14, hb: 8 },
    sinker:   { velo: [89, 94], ivb: 8,  hb: 14 },
    slider:   { velo: [81, 86], ivb: 2,  hb: 6 },
    curveball:{ velo: [75, 81], ivb: -7, hb: 7 },
    changeup: { velo: [82, 87], ivb: 7,  hb: 12 },
    cutter:   { velo: [85, 90], ivb: 11, hb: 4 },
    sweeper:  { velo: [79, 84], ivb: 3,  hb: 13 },
  },
  'A+': {
    fourSeam: { velo: [89, 94], ivb: 13, hb: 9 },
    sinker:   { velo: [88, 93], ivb: 8,  hb: 13 },
    slider:   { velo: [80, 85], ivb: 2,  hb: 6 },
    curveball:{ velo: [74, 80], ivb: -6, hb: 7 },
    changeup: { velo: [81, 86], ivb: 6,  hb: 12 },
    cutter:   { velo: [84, 89], ivb: 10, hb: 4 },
    sweeper:  { velo: [78, 83], ivb: 2,  hb: 12 },
  },
  A: {
    fourSeam: { velo: [88, 93], ivb: 12, hb: 9 },
    sinker:   { velo: [87, 92], ivb: 7,  hb: 12 },
    slider:   { velo: [79, 84], ivb: 2,  hb: 6 },
    curveball:{ velo: [73, 79], ivb: -6, hb: 6 },
    changeup: { velo: [80, 85], ivb: 6,  hb: 11 },
    cutter:   { velo: [83, 88], ivb: 9,  hb: 4 },
    sweeper:  { velo: [77, 82], ivb: 2,  hb: 11 },
  },
};
