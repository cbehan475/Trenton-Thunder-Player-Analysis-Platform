// src/utils/battedBall.js
// Utility helpers to classify launch angle and compute batted-ball mix

export function classifyByLA(la) {
  if (la == null || Number.isNaN(Number(la))) return null;
  const x = Number(la);
  if (x < 10) return "GB";
  if (x < 25) return "LD";
  if (x < 50) return "FB";
  return "PU";
}

export function computeBattedBallMix(events) {
  const counts = { GB: 0, LD: 0, FB: 0, PU: 0 };
  let total = 0;
  if (!Array.isArray(events)) return { counts, total, pct: { GB: 0, LD: 0, FB: 0, PU: 0 } };

  for (const e of events) {
    const la = e?.la ?? e?.LA ?? e?.launchAngle ?? null;
    const ev = e?.ev ?? e?.EV ?? e?.exitVelo ?? null;
    if (la == null || ev == null) continue;
    if (Number.isNaN(Number(la)) || Number.isNaN(Number(ev))) continue;
    const bucket = classifyByLA(la);
    if (!bucket) continue;
    counts[bucket]++; total++;
  }

  const pct = total
    ? Object.fromEntries(Object.entries(counts).map(([k, v]) => [k, (v / total) * 100]))
    : { GB: 0, LD: 0, FB: 0, PU: 0 };

  return { counts, total, pct };
}

export function toGroupedBarData(playerPct, mlbPct) {
  return ["GB", "LD", "FB", "PU"].map((k) => ({
    type: k,
    Player: Number(((playerPct?.[k] ?? 0)).toFixed(1)),
    "MLB p50": Number(((mlbPct?.[k] ?? 0)).toFixed(1)),
  }));
}
