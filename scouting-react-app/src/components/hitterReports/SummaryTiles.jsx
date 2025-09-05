import React from "react";

function Tile({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] text-white/60 tracking-tight mb-1">{label}</div>
      <div className="text-xl font-semibold tabular-nums text-white">{value}</div>
      {sub ? <div className="text-[11px] text-white/50 mt-1">{sub}</div> : null}
    </div>
  );
}

export default function SummaryTiles({ avgEV, avgLA, hhPct, sample }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Tile label="Avg EV" value={`${avgEV?.toFixed?.(1) ?? 0} mph`} />
      <Tile label="Avg LA" value={`${avgLA?.toFixed?.(1) ?? 0}°`} />
      <Tile label="Hard-Hit%" value={`${(hhPct ?? 0).toFixed(1)}%`} />
      <div className="col-span-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-[12px] text-white/70">
          Sample: {sample}
        </div>
      </div>
    </div>
  );
}
