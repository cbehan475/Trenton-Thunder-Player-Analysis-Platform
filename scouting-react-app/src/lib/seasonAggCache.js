// src/lib/seasonAggCache.js
// Cache computed season aggregates from logs using localStorage.

import { buildSeasonAggregatesFromLogs } from './seasonAggregatesFromLogs.js';
import { getPitchingLogStats } from '../data/logs/pitchingIndex.js';

export const FEATURE_AGG_FROM_LOGS = true; // default true

const LS_PREFIX = 'agg_cache_v1::';

function manifestKey() {
  try {
    const stats = getPitchingLogStats?.();
    const files = stats?.files ?? 0;
    const entries = stats?.entries ?? 0;
    const keysLen = Array.isArray(stats?.keys) ? stats.keys.length : 0;
    return `${files}-${entries}-${keysLen}`;
  } catch (_) {
    // Fallback simple key
    return 'unknown';
  }
}

export async function getSeasonAggFromLogsCached() {
  const key = LS_PREFIX + manifestKey();
  try {
    const cached = localStorage.getItem(key);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch (_) { /* ignore parse errors */ }

  // Compute fresh
  const built = await buildSeasonAggregatesFromLogs();
  try {
    localStorage.setItem(key, JSON.stringify(built));
  } catch (_) { /* storage may be unavailable */ }
  return built;
}
