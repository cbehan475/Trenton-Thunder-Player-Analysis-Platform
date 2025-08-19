// src/data/pitchersSeasonAggregates.js
// Computed first-half season aggregates built directly from game logs.
// HB values are absolute inches; IVB may be negative.

import { buildPitchersSeasonAggregates } from '../lib/aggregatePitchers.js';

// Array<{ id, name, pitches: { fourSeam|sinker|slider|curveball|changeup|cutter|sweeper?: { p50Velo, p50IVB, p50HB, n } } }>
export const PITCHERS_SEASON_AGG = buildPitchersSeasonAggregates();
