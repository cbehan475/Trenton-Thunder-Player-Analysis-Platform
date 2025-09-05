import React from "react";

export default function TopBattedBallsTable({ rows }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-0 overflow-hidden">
      <div className="px-4 py-3 text-sm text-white/80">Top Batted Balls (by EV)</div>
      <table className="w-full text-sm text-white/90">
        <thead className="bg-white/5">
          <tr>
            <th className="text-left px-4 py-2 font-normal text-white/60">EV (mph)</th>
            <th className="text-left px-4 py-2 font-normal text-white/60">LA (°)</th>
            <th className="text-left px-4 py-2 font-normal text-white/60">Result</th>
          </tr>
        </thead>
        <tbody>
          {(rows ?? []).map((r, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="px-4 py-2 tabular-nums">{r.ev}</td>
              <td className="px-4 py-2 tabular-nums">{r.la}</td>
              <td className="px-4 py-2">{r.result}</td>
            </tr>
          ))}
          {(!rows || rows.length === 0) && (
            <tr className="border-t border-white/10">
              <td className="px-4 py-4 text-white/50" colSpan={3}>No batted balls in range.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
