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
    <div className="w-full rounded-2xl border border-white/10 p-3">
      <div className="mb-2 text-sm font-semibold">{title}</div>
      {rows.length === 0 ? (
        <div className="text-sm opacity-70">No batted balls in range.</div>
      ) : (
        <div className="divide-y divide-white/10">
          {rows.map((r, idx) => (
            <div key={idx} className="py-2 text-sm flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="font-medium">EV {r.ev.toFixed(1)} mph • LA {r.la.toFixed(1)}°</div>
                <div className="opacity-70 truncate">
                  {r.result || "—"} {r.date ? `• ${String(r.date).slice(0, 10)}` : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
