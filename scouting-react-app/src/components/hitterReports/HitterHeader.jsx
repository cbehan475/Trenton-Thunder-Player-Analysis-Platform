import React from "react";

export default function HitterHeader({ title, hitter, onChangeHitter, hitterOptions }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">{title} <span>⚡</span></h1>
      </div>
      <div className="w-72">
        <label className="block text-xs text-white/60 mb-1">Select Hitter</label>
        <select
          className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white"
          value={hitter?.value ?? ""}
          onChange={(e) => onChangeHitter(e.target.value)}
        >
          {hitterOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
