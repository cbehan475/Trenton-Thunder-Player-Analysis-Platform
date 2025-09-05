import React from "react";

function Tile({ label, value, sub }) {
  return (
    <div className="card">
      <div className="tile-label">{label}</div>
      <div className="tile-value tabnums">{value}</div>
      {sub ? <div className="subtle" style={{marginTop:6}}>{sub}</div> : null}
    </div>
  );
}

export default function SummaryTiles({ avgEV, avgLA, hhPct, sample }) {
  return (
    <div className="tiles-3">
      <Tile label="Avg EV" value={`${(avgEV ?? 0).toFixed(1)} mph`} />
      <Tile label="Avg LA" value={`${(avgLA ?? 0).toFixed(1)}°`} />
      <Tile label="Hard-Hit%" value={`${(hhPct ?? 0).toFixed(1)}%`} />
      <div className="col-12" style={{gridColumn:"1 / -1"}}>
        <div className="card subtle">{sample}</div>
      </div>
    </div>
  );
}
