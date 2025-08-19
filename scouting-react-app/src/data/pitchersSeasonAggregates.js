// src/data/pitchersSeasonAggregates.js
// Frozen first-half snapshot baked to JSON for instant loads.
// HB values are absolute inches; IVB may be negative.

import data from './pitchersSeasonAggregates.json';

// Array<{ id, name, pitches: { fourSeam|sinker|slider|curveball|changeup|cutter|sweeper?: { p50Velo, p50IVB, p50HB, n } } }>
export const PITCHERS_SEASON_AGG = data;

// Simple display version derived from snapshot content (count-based).
// You can replace this with a timestamped version if desired in the generator.
export const PITCHERS_AGG_VERSION = `snapshot-${Array.isArray(data) ? data.length : 0}`;
