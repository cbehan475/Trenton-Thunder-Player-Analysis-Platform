import React from "react";

function G({ label, value }) {
  return (
    <div className="card">
      <div className="tile-label">{label}</div>
      <div className="tile-value tabnums">{Math.round(value ?? 20)}</div>
      <div className="subtle" style={{marginTop:6}}>20–80 scale</div>
    </div>
  );
}

export default function GradesTiles({ rawPower, impact, gamePower }) {
  return (
    <div className="tiles-3">
      <G label="Raw Power (EV)" value={rawPower} />
      <G label="Impact (HH%)" value={impact} />
      <G label="Game Power" value={gamePower} />
    </div>
  );
}
