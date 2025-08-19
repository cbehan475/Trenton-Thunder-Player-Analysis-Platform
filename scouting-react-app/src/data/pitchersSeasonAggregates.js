// src/data/pitchersSeasonAggregates.js
// Frozen first-half snapshot baked to JSON for instant loads.
// HB values are absolute inches; IVB may be negative.

import data from './pitchersSeasonAggregates.json';

// Array<{ id, name, pitches: { fourSeam|sinker|slider|curveball|changeup|cutter|sweeper?: { p50Velo, p50IVB, p50HB, n } } }>
export const PITCHERS_SEASON_AGG = data;
