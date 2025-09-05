// src/components/TopBattedBalls.jsx
import React, { useMemo } from "react";

// Try common field names defensively
function getEV(e) { return Number(e?.ev ?? e?.EV ?? e?.exitVelo ?? NaN); }
function getLA(e) { return Number(e?.la ?? e?.LA ?? e?.launchAngle ?? NaN); }
function getDate(e) { return e?.date ?? e?.gameDate ?? e?.timestamp ?? ""; }
function getResult(e) {
  return (
    e?.result ??
    e?.playResult ??
    e?.battedBallType ??
    e?.bb_type ??
    ""
  );
}

export default function TopBattedBalls({ events = [], title = "Top Batted Balls", limit = 5 }) {
  const rows = useMemo(() => {
    if (!Array.isArray(events)) return [];
    const bips = events
      .map((e) => ({ e, ev: getEV(e), la: getLA(e), date: getDate(e), result: getResult(e) }))
      .filter((r) => Number.isFinite(r.ev) && Number.isFinite(r.la));
    bips.sort((a, b) => b.ev - a.ev);
    return bips.slice(0, limit);
  }, [events, limit]);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 text-sm font-semibold tracking-tight">{title}</div>
      {rows.length === 0 ? (
        <div className="text-sm opacity-70">No batted balls in range.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs opacity-70">
              <tr>
                <th className="py-1 pr-3">EV (mph)</th>
                <th className="py-1 pr-3">LA (°)</th>
                <th className="py-1 pr-3">Result</th>
                <th className="py-1">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r, idx) => (
                <tr key={idx}>
                  <td className="py-2 pr-3 tabular-nums">{r.ev.toFixed(1)}</td>
                  <td className="py-2 pr-3 tabular-nums">{r.la.toFixed(1)}</td>
                  <td className="py-2 pr-3">{r.result || "—"}</td>
                  <td className="py-2">{r.date ? String(r.date).slice(0,10) : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
