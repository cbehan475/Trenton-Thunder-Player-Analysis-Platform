// src/lib/reviewCache.js
// Lightweight front-end review cache for arsenal verification telemetry.
// Tries to load src/data/arsenals/reviewCache.json if present (static seed),
// and persists updates to localStorage under 'arsenalReviewCache'.
// No server, no file mutation at runtime.

const LS_KEY = 'arsenalReviewCache';

let seedJson = {};

// Attempt to synchronously import the JSON seed if the bundler supports it.
// If missing, we just use an empty object.
try {
  // eslint-disable-next-line global-require, import/no-unresolved
  // Using require here to avoid build-time issues if file is absent.
  // If your bundler disallows require for JSON, this will be caught.
  // Path relative to this file:
  // ../data/arsenals/reviewCache.json (optional)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  seedJson = require('../data/arsenals/reviewCache.json');
} catch (e) {
  seedJson = {};
}

function deepClone(obj) { return JSON.parse(JSON.stringify(obj || {})); }

export function loadCache() {
  try {
    const fromLs = localStorage.getItem(LS_KEY);
    if (fromLs) return JSON.parse(fromLs);
  } catch {}
  return deepClone(seedJson || {});
}

export function saveCache(cache) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(cache));
  } catch {}
}

export function updateOuting(playerId, date, disagreePct, notes) {
  if (!playerId || !date) return null;
  const cache = loadCache();
  if (!cache[playerId]) cache[playerId] = { lastUpdated: null, outings: [] };
  const entry = { date, disagreePct, notes: Array.isArray(notes) ? notes : (notes ? [String(notes)] : []) };
  // Replace existing outing for date or append
  const idx = cache[playerId].outings.findIndex(o => o.date === date);
  if (idx >= 0) cache[playerId].outings[idx] = entry; else cache[playerId].outings.push(entry);
  cache[playerId].lastUpdated = new Date().toISOString();
  saveCache(cache);
  return entry;
}

export function getLatestOuting(playerId) {
  const cache = loadCache();
  const rec = cache[playerId];
  if (!rec || !Array.isArray(rec.outings) || rec.outings.length === 0) return null;
  const sorted = rec.outings.slice().sort((a,b) => (a.date < b.date ? 1 : -1));
  return sorted[0];
}

export function getCache() { return loadCache(); }
