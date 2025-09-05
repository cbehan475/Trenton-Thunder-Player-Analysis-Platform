// src/utils/hitterMetrics.js
export function isNumber(x) {
  return x != null && !Number.isNaN(Number(x));
}

// events: rows with ev/EV/exitVelo and la/LA/launchAngle
export function computeHitterSummary(events) {
  if (!Array.isArray(events) || events.length === 0) {
    return { avgEV: 0, avgLA: 0, hhPct: 0, bip: 0 };
    }
  let sumEV = 0, sumLA = 0, count = 0, hardHits = 0;

  for (const e of events) {
    const ev = e?.ev ?? e?.EV ?? e?.exitVelo;
    const la = e?.la ?? e?.LA ?? e?.launchAngle;
    if (!isNumber(ev) || !isNumber(la)) continue;

    const EV = Number(ev);
    const LA = Number(la);
    sumEV += EV;
    sumLA += LA;
    count += 1;
    if (EV >= 95) hardHits += 1; // HH threshold
  }

  if (count === 0) return { avgEV: 0, avgLA: 0, hhPct: 0, bip: 0 };

  const avgEV = Number((sumEV / count).toFixed(1));
  const avgLA = Number((sumLA / count).toFixed(1));
  const hhPct = Number(((hardHits / count) * 100).toFixed(1));
  return { avgEV, avgLA, hhPct, bip: count };
}
