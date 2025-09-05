// src/components/HitterSummary.jsx
import React, { useMemo } from "react";
import { computeHitterSummary } from "../utils/hitterMetrics";

function StatTile({ label, value, unit }) {
  return (
    <div className="tile flex-1 rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="tile-label text-[11px] opacity-70">{label}</div>
      <div className="tile-value text-2xl font-semibold tabular-nums tracking-tight">
        {value}{unit ? <span className="text-sm opacity-70 ml-1">{unit}</span> : null}
      </div>
    </div>
  );
}

export default function HitterSummary({ events = [], title = "Hitter Report" }) {
  const { avgEV, avgLA, hhPct, bip } = useMemo(
    () => computeHitterSummary(events),
    [events]
  );

  return (
    <div className="card w-full rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="card-title mb-2 text-sm font-semibold tracking-tight">{title}</div>
      <div className="tiles-3 grid grid-cols-3 gap-3">
        <StatTile label="Avg EV" value={avgEV} unit="mph" />
        <StatTile label="Avg LA" value={avgLA} unit="°" />
        <StatTile label="Hard-Hit%" value={hhPct} unit="%" />
      </div>
      <div className="mt-2 text-[11px] opacity-70">Sample: BIP {bip} • HH% uses ≥95 mph</div>
    </div>
  );
}

