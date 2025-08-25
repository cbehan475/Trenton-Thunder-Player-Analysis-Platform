// src/lib/hittingBenchmarks.js
import { flattenEventsFromByDateMap } from './battedBallMetrics';
import { isBIP } from './hitLogUtils';
import OVERRIDES from '../data/overrides/battedBallMetricsOverrides';

// Returns { evAvg, evMax, hardHitPct, laAvg } with 1-dec rounding, or null if unknown.
export function computeHitterCoreP50(byDateMap, hitterName, dateRange) {
  const events = flattenEventsFromByDateMap(byDateMap);
  const [start, end] = Array.isArray(dateRange) ? dateRange : [null, null];
  const fromEvents = events.filter(e => (
    (!start || e.date >= start) && (!end || e.date <= end) && e.hitter === hitterName
  ));

  let evAvg = null, evMax = null, hardHitPct = null, laAvg = null;

  if (fromEvents.length > 0) {
    const bip = fromEvents.filter(e => isBIP(e.result));
    const evs = bip.map(e => Number(e.ev)).filter(Number.isFinite);
    if (evs.length) {
      evAvg = +(evs.reduce((a,b)=>a+b,0)/evs.length).toFixed(1);
      evMax = +Math.max(...evs).toFixed(1);
    }
    const las = bip.map(e => Number(e.la)).filter(Number.isFinite);
    if (las.length) laAvg = +(las.reduce((a,b)=>a+b,0)/las.length).toFixed(1);

    if (bip.length) {
      const hardHits = bip.filter(e => Number(e.ev) >= 95).length;
      hardHitPct = +((hardHits / bip.length) * 100).toFixed(1);
    }
  }

  // Fallback to overrides if missing and override exists
  const ov = OVERRIDES?.[hitterName];
  if (ov) {
    if (evAvg == null && typeof ov.avgEv === 'number') evAvg = +ov.avgEv.toFixed(1);
    if (evMax == null && typeof ov.maxEv === 'number') evMax = +ov.maxEv.toFixed(1);
    if (laAvg == null && typeof ov.avgLa === 'number') laAvg = +ov.avgLa.toFixed(1);
    if (hardHitPct == null && typeof ov.hardHit === 'number') hardHitPct = +ov.hardHit.toFixed(1);
  }

  return { evAvg, evMax, hardHitPct, laAvg };
}
