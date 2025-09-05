// src/components/HitterSummary.jsx
import React, { useMemo } from "react";
import { computeHitterSummary } from "../utils/hitterMetrics";

function StatTile({ label, value, unit }) {
  return (
    <div className="flex-1 rounded-xl border border-white/10 p-3">
      <div className="text-xs opacity-70">{label}</div>
      <div className="text-2xl font-semibold">
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
    <div className="w-full rounded-2xl border border-white/10 p-3">
      <div className="mb-2 text-sm font-semibold">{title}</div>
      <div className="flex gap-3">
        <StatTile label="Avg EV" value={avgEV} unit="mph" />
        <StatTile label="Avg LA" value={avgLA} unit="°" />
        <StatTile label="Hard-Hit%" value={hhPct} unit="%" />
      </div>
      <div className="mt-2 text-[11px] opacity-70">Sample: BIP {bip} • HH% uses ≥95 mph</div>
    </div>
  );
}
