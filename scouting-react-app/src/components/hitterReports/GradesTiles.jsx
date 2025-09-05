import React from "react";

function GradeTile({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] text-white/60 mb-1">{label}</div>
      <div className="text-xl font-semibold tabular-nums text-white">{Math.round(value ?? 20)}</div>
      <div className="text-[10px] text-white/40 mt-1">20–80 scale</div>
    </div>
  );
}

export default function GradesTiles({ rawPower, impact, gamePower }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <GradeTile label="Raw Power (EV)" value={rawPower} />
      <GradeTile label="Impact (HH%)" value={impact} />
      <GradeTile label="Game Power" value={gamePower} />
    </div>
  );
}
