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
    fourSeam:  { velo: [91,96], ivb: 15,  hb: 8,  command: 'AAA Avg', p50Velo: 93.5, p50IVB: 15,  p50HB: 8,  n: null },
    sinker:    { velo: [90,95], ivb: 9,   hb: 14, command: 'AAA Avg', p50Velo: 92.5, p50IVB: 9,   p50HB: 14, n: null },
    slider:    { velo: [82,87], ivb: 2,   hb: 6,  command: 'AAA Avg', p50Velo: 84.5, p50IVB: 2,   p50HB: 6,  n: null },
    sweeper:   { velo: [80,85], ivb: 3,   hb: 13, command: 'AAA Avg', p50Velo: 82.5, p50IVB: 3,   p50HB: 13, n: null },
    curveball: { velo: [76,82], ivb: -7,  hb: 7,  command: 'AAA Avg', p50Velo: 79.0, p50IVB: -7,  p50HB: 7,  n: null },
    changeup:  { velo: [83,88], ivb: 7,   hb: 13, command: 'AAA Avg', p50Velo: 85.5, p50IVB: 7,   p50HB: 13, n: null },
    cutter:    { velo: [86,91], ivb: 11,  hb: 4,  command: 'AAA Avg', p50Velo: 88.5, p50IVB: 11,  p50HB: 4,  n: null },
  },
  AA: {
    fourSeam:  { velo: [90,95], ivb: 14,  hb: 8,  command: 'AA Avg',  p50Velo: 92.5, p50IVB: 14,  p50HB: 8,  n: null },
    sinker:    { velo: [89,94], ivb: 8,   hb: 14, command: 'AA Avg',  p50Velo: 91.5, p50IVB: 8,   p50HB: 14, n: null },
    slider:    { velo: [81,86], ivb: 2,   hb: 6,  command: 'AA Avg',  p50Velo: 83.5, p50IVB: 2,   p50HB: 6,  n: null },
    sweeper:   { velo: [79,84], ivb: 3,   hb: 13, command: 'AA Avg',  p50Velo: 81.5, p50IVB: 3,   p50HB: 13, n: null },
    curveball: { velo: [75,81], ivb: -7,  hb: 7,  command: 'AA Avg',  p50Velo: 78.0, p50IVB: -7,  p50HB: 7,  n: null },
    changeup:  { velo: [82,87], ivb: 7,   hb: 12, command: 'AA Avg',  p50Velo: 84.5, p50IVB: 7,   p50HB: 12, n: null },
    cutter:    { velo: [85,90], ivb: 11,  hb: 4,  command: 'AA Avg',  p50Velo: 87.5, p50IVB: 11,  p50HB: 4,  n: null },
  },
  'A+': {
    fourSeam:  { velo: [89,94], ivb: 13,  hb: 9,  command: 'A+ Avg', p50Velo: 91.5, p50IVB: 13,  p50HB: 9,  n: null },
    sinker:    { velo: [88,93], ivb: 8,   hb: 13, command: 'A+ Avg', p50Velo: 90.5, p50IVB: 8,   p50HB: 13, n: null },
    slider:    { velo: [80,85], ivb: 2,   hb: 6,  command: 'A+ Avg', p50Velo: 82.5, p50IVB: 2,   p50HB: 6,  n: null },
    sweeper:   { velo: [78,83], ivb: 2,   hb: 12, command: 'A+ Avg', p50Velo: 80.5, p50IVB: 2,   p50HB: 12, n: null },
    curveball: { velo: [74,80], ivb: -6,  hb: 7,  command: 'A+ Avg', p50Velo: 77.0, p50IVB: -6,  p50HB: 7,  n: null },
    changeup:  { velo: [81,86], ivb: 6,   hb: 12, command: 'A+ Avg', p50Velo: 83.5, p50IVB: 6,   p50HB: 12, n: null },
    cutter:    { velo: [84,89], ivb: 10,  hb: 4,  command: 'A+ Avg', p50Velo: 86.5, p50IVB: 10,  p50HB: 4,  n: null },
  },
  A: {
    fourSeam:  { velo: [88,93], ivb: 12,  hb: 9,  command: 'A Avg',  p50Velo: 90.5, p50IVB: 12,  p50HB: 9,  n: null },
    sinker:    { velo: [87,92], ivb: 7,   hb: 12, command: 'A Avg',  p50Velo: 89.5, p50IVB: 7,   p50HB: 12, n: null },
    slider:    { velo: [79,84], ivb: 2,   hb: 6,  command: 'A Avg',  p50Velo: 81.5, p50IVB: 2,   p50HB: 6,  n: null },
    sweeper:   { velo: [77,82], ivb: 2,   hb: 11, command: 'A Avg',  p50Velo: 79.5, p50IVB: 2,   p50HB: 11, n: null },
    curveball: { velo: [73,79], ivb: -6,  hb: 6,  command: 'A Avg',  p50Velo: 76.0, p50IVB: -6,  p50HB: 6,  n: null },
    changeup:  { velo: [80,85], ivb: 6,   hb: 11, command: 'A Avg',  p50Velo: 82.5, p50IVB: 6,   p50HB: 11, n: null },
    cutter:    { velo: [83,88], ivb: 9,   hb: 4,  command: 'A Avg',  p50Velo: 85.5, p50IVB: 9,   p50HB: 4,  n: null },
  },
};
