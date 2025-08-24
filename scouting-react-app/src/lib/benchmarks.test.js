// src/lib/benchmarks.test.js
// Minimal unit tests for benchmark utilities. Jest-style tests.

import { delta, getBench, percentileFromBand } from './benchmarks';

test('delta computes difference correctly', () => {
  expect(delta(95, 94.5)).toBeCloseTo(0.5);
  expect(delta(92, 94)).toBeCloseTo(-2);
});

test('getBench returns null for missing pitch type', () => {
  expect(getBench('MLB', 'knuckleball')).toBeNull();
});

test('percentileFromBand ~50 when value is near p50', () => {
  expect(percentileFromBand(94, 93, 94, 95)).toBeCloseTo(50, 1);
});
