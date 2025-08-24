// src/lib/battedBallOverrides.js
// Last-mile substitution of vetted 6-4-3 style batted ball metrics.
// This keeps data pipelines intact and only replaces displayed values when an override exists.

import BATTED_BALL_METRICS_OVERRIDES from '../data/overrides/battedBallMetricsOverrides';

// Map override keys to computed metrics keys used in UI
// override: { bip, gb, ld, fb, pu, avgEv, maxEv, avgLa, hardHit }
// computed: { BIP, GBpct, LDpct, FBpct, PUpct, avgEV, maxEV, avgLA, hardHitPct }
export function applyBattedBallOverride(name, metrics) {
  if (!name) return metrics || null;
  const o = BATTED_BALL_METRICS_OVERRIDES?.[name];
  if (!o) return metrics;
  const merged = {
    ...metrics,
    ...(o.bip != null ? { BIP: o.bip } : null),
    ...(o.gb != null ? { GBpct: o.gb } : null),
    ...(o.ld != null ? { LDpct: o.ld } : null),
    ...(o.fb != null ? { FBpct: o.fb } : null),
    ...(o.pu != null ? { PUpct: o.pu } : null),
    ...(o.avgEv != null ? { avgEV: o.avgEv } : null),
    ...(o.maxEv != null ? { maxEV: o.maxEv } : null),
    ...(o.avgLa != null ? { avgLA: o.avgLa } : null),
    ...(o.hardHit != null ? { hardHitPct: o.hardHit } : null),
  };
  return merged;
}

export default applyBattedBallOverride;
