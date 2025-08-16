/* eslint-disable no-console */
// Loader/adapter for hitters logs: flattens per-AB entries and computes metrics.

import MANIFEST from './hittingManifest.js';

function adaptModule(modLike) {
  const mod = modLike && modLike.default ? modLike.default : modLike;
  const out = [];
  if (!mod) return out;

  // Expected format: [ { hitter: string, atBats: [ { ev, la, ... }, ... ] }, ... ]
  if (Array.isArray(mod)) {
    for (const rec of mod) {
      const name = rec && (rec.hitter || rec.name || rec.player);
      const atBats = rec && Array.isArray(rec.atBats) ? rec.atBats : [];
      for (const ab of atBats) {
        if (!ab || typeof ab !== 'object') continue;
        out.push({ ...ab, hitter: name });
      }
    }
    return out;
  }

  // Fallback: object map { name: { atBats: [...] } }
  for (const [name, data] of Object.entries(mod)) {
    const atBats = data && Array.isArray(data.atBats) ? data.atBats : [];
    for (const ab of atBats) {
      if (!ab || typeof ab !== 'object') continue;
      out.push({ ...ab, hitter: name });
    }
  }
  return out;
}

const ALL_HIT_EVENTS = MANIFEST.flatMap(adaptModule);

const asNum = (v) => (typeof v === 'number' ? v : Number(v));
const avg = (arr) => (arr.length ? arr.reduce((s, n) => s + n, 0) / arr.length : 0);

export function getAllHitterNames() {
  const names = new Set();
  for (const e of ALL_HIT_EVENTS) if (e.hitter) names.add(e.hitter);
  return Array.from(names).sort();
}

export function getHittingMetricsFor(name) {
  const rows = ALL_HIT_EVENTS.filter((e) => e.hitter === name);

  const evs = rows.map((e) => asNum(e.ev ?? e.EV ?? e.exitVelo)).filter((n) => Number.isFinite(n));
  const las = rows.map((e) => asNum(e.la ?? e.LA ?? e.launchAngle)).filter((n) => Number.isFinite(n));

  const avgEV = avg(evs);
  const avgLA = avg(las);

  const denom = evs.length;
  const hardHits = evs.filter((v) => v >= 95).length;
  const hardHitPct = denom ? (hardHits / denom) * 100 : 0;

  return {
    avgEV,
    avgLA,
    hardHitPct,
    samples: rows.length,
  };
}

export function getHittingLogStats() {
  return { files: MANIFEST.length, entries: ALL_HIT_EVENTS.length, keys: getAllHitterNames() };
}

export default ALL_HIT_EVENTS;

console.log('[hittingIndex] manifest files:', MANIFEST.length, 'total entries:', ALL_HIT_EVENTS.length, 'keys:', getAllHitterNames());
