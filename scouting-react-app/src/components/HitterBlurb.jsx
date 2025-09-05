// src/components/HitterBlurb.jsx
import React, { useMemo } from "react";
import { computeHitterSummary } from "../utils/hitterMetrics";
import { computeBattedBallMix } from "../utils/battedBall";
import { buildHitterBlurb } from "../utils/hitterBlurb";

export default function HitterBlurb({ events = [], title = "Scouting Summary" }) {
  const { summary, mix } = useMemo(() => {
    const s = computeHitterSummary(events);       // { avgEV, avgLA, hhPct, bip }
    const { pct } = computeBattedBallMix(events); // { GB, LD, FB, PU }
    return { summary: s, mix: pct };
  }, [events]);

  const text = useMemo(() => buildHitterBlurb({ ...summary, mix }), [summary, mix]);

  return (
    <div className="w-full rounded-2xl border border-white/10 p-3">
      <div className="mb-2 text-sm font-semibold">{title}</div>
      <p className="text-sm leading-5 opacity-95">{text}</p>
    </div>
  );
}
