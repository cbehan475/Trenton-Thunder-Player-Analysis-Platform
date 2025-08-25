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

// Read-only adapter for decision/contact metrics. Returns 1-dec rounded values or null when
// the required event flags are missing. Does NOT mutate inputs and has no overrides.
// Expects events (flattened) to optionally include boolean/numeric flags:
// - isSwing, isWhiff, isContact, isInPlay, isFoul, inZone, swung (alias), whiff (alias)
// - oZone (bool for out-of-zone), zZone (bool for in-zone)
// - oSwing (bool), zSwing (bool), zContact (bool)
// We guard each metric independently and return nulls when denominators are zero or data absent.
export function computeHitterDecisionP50(byDateMap, hitterName, dateRange) {
  const events = flattenEventsFromByDateMap(byDateMap);
  const [start, end] = Array.isArray(dateRange) ? dateRange : [null, null];
  const rows = events.filter(e => (
    (!start || e.date >= start) && (!end || e.date <= end) && e.hitter === hitterName
  ));
  if (!rows.length) {
    return { contactPct: null, zContactPct: null, whiffPct: null, chasePct: null };
  }

  const bool = v => v === true || v === 1 || v === '1';

  // Swings
  const swings = rows.filter(r => bool(r.isSwing) || bool(r.swung));
  const swingsN = swings.length;

  // Contact overall: in-play or foul or explicit isContact
  const contactN = swings.filter(r => bool(r.isContact) || bool(r.isInPlay) || bool(r.isFoul)).length;

  // Whiffs: swinging strikes
  const whiffN = swings.filter(r => bool(r.isWhiff) || bool(r.whiff) || (/swing/i.test(String(r.called || '')) && /strike/.test(String(r.result || '')))).length;

  // In-zone swings and contacts
  const zSwings = swings.filter(r => bool(r.inZone) || bool(r.zZone) || String(r.zone || '').toLowerCase() === 'z');
  const zSwingsN = zSwings.length;
  const zContactN = zSwings.filter(r => bool(r.isContact) || bool(r.isInPlay) || bool(r.isFoul) || bool(r.zContact)).length;

  // Chase: out-of-zone swings divided by out-of-zone pitches
  const oZ = rows.filter(r => bool(r.oZone) || (r.inZone === false) || (r.zZone === false) || String(r.zone || '').toLowerCase() === 'o');
  const oZSwingN = oZ.filter(r => bool(r.isSwing) || bool(r.swung) || bool(r.oSwing)).length;
  const oZPitchN = oZ.length;

  const round1 = (x) => Number.isFinite(x) ? +x.toFixed(1) : null;

  const contactPct = swingsN > 0 ? round1((contactN / swingsN) * 100) : null;
  const zContactPct = zSwingsN > 0 ? round1((zContactN / zSwingsN) * 100) : null;
  const whiffPct = swingsN > 0 ? round1((whiffN / swingsN) * 100) : null;
  const chasePct = oZPitchN > 0 ? round1((oZSwingN / oZPitchN) * 100) : null;

  return { contactPct, zContactPct, whiffPct, chasePct };
}
