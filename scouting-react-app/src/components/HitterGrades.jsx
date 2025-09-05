// src/components/HitterGrades.jsx
import React, { useMemo } from "react";
import { computeHitterSummary } from "../utils/hitterMetrics";
import { computeBattedBallMix } from "../utils/battedBall";
import { computeHitterGrades } from "../utils/grades";

function GradeTile({ label, grade }) {
  return (
    <div className="tile flex-1 rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="tile-label text-[11px] opacity-70">{label}</div>
      <div className="tile-value text-2xl font-semibold tabular-nums tracking-tight">{grade}</div>
    </div>
  );
}

export default function HitterGrades({ events = [], title = "Scouting Grades (Present)" }) {
  const data = useMemo(() => {
    const { avgEV, hhPct, bip } = computeHitterSummary(events);
    const { pct } = computeBattedBallMix(events);
    const g = computeHitterGrades({ avgEV, hhPct, mix: pct, bip });
    return { ...g, bip };
  }, [events]);

  return (
    <div className="card w-full rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="card-title mb-2 text-sm font-semibold">{title}</div>
      <div className="tiles-3 grid grid-cols-3 gap-3">
        <GradeTile label="Raw Power (EV)" grade={data.rawPower} />
        <GradeTile label="Impact (HH%)" grade={data.impact} />
        <GradeTile label="Game Power" grade={data.gamePower} />
      </div>
      <div className="mt-2 text-[11px] opacity-70">
        20–80 present grades • rounded to nearest 5{data.smallSample ? " • small-sample cap (≤55)" : ""} • BIP {data.bip}
      </div>
    </div>
  );
}

