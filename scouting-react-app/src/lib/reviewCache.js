// Safe loader for optional review cache.
// If the JSON file is missing, we fall back to an empty object.
let CACHE = {};
try {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  CACHE = require("../data/arsenals/reviewCache.json");
} catch (e) {
  CACHE = {};
}

// Read-only snapshot (avoid accidental mutation from outside)
export function getReviewCache() {
  return { ...CACHE };
}

// In-memory upsert (persists only for this session)
// If/when we add persistence, write back to the JSON here.
export function upsertReviewCache(key, value) {
  CACHE = { ...CACHE, [key]: value };
}

// Back-compat shims for existing imports elsewhere in the app
// getCache -> same as getReviewCache
export function getCache() {
  return getReviewCache();
}

// updateOuting/getLatestOuting operate on a per-player shape:
// CACHE[playerId] = { lastUpdated: string|null, outings: Array<{date, disagreePct, notes: string[]}> }
export function updateOuting(playerId, date, disagreePct, notes) {
  if (!playerId || !date) return null;
  const cache = { ...CACHE };
  if (!cache[playerId]) cache[playerId] = { lastUpdated: null, outings: [] };
  const entry = {
    date,
    disagreePct,
    notes: Array.isArray(notes) ? notes : notes ? [String(notes)] : [],
  };
  const list = Array.isArray(cache[playerId].outings) ? cache[playerId].outings.slice() : [];
  const idx = list.findIndex((o) => o.date === date);
  if (idx >= 0) list[idx] = entry; else list.push(entry);
  cache[playerId] = { lastUpdated: new Date().toISOString(), outings: list };
  CACHE = cache; // persist in-memory only
  return entry;
}

export function getLatestOuting(playerId) {
  const rec = CACHE[playerId];
  if (!rec || !Array.isArray(rec.outings) || rec.outings.length === 0) return null;
  const sorted = rec.outings.slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  return sorted[0];
}

const api = { getReviewCache, upsertReviewCache, getCache, updateOuting, getLatestOuting };
export default api;
