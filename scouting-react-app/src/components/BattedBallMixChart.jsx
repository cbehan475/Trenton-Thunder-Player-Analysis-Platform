// src/components/BattedBallMixChart.jsx
import React, { useMemo } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import { computeBattedBallMix, toGroupedBarData } from "../utils/battedBall";
import { MLB_BATTED_BALL_MIX_P50 } from "../constants/mlbBenchmarks";

export default function BattedBallMixChart({ events = [], title = "Batted Ball Mix vs MLB p50" }) {
  const { data, deltas } = useMemo(() => {
    const { pct } = computeBattedBallMix(events);
    const data = toGroupedBarData(pct, MLB_BATTED_BALL_MIX_P50);
    // Compute neutral deltas (Player − MLB p50), rounded to 1 decimal
    const keys = ["GB", "LD", "FB", "PU"];
    const deltas = Object.fromEntries(
      keys.map((k) => [
        k,
        Number(((pct?.[k] ?? 0) - (MLB_BATTED_BALL_MIX_P50?.[k] ?? 0)).toFixed(1)),
      ])
    );
    return { data, deltas };
  }, [events]);

  const fmtDelta = (v) => (v > 0 ? `+${v}` : `${v}`);

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/0 p-3">
      <div className="text-sm font-semibold mb-2">{title}</div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v, name) => `${v}%`} />
            <Legend />
            <Bar dataKey="Player" fill="#2563eb" />
            <Bar dataKey="MLB p50" fill="#9ca3af" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* Neutral Δ badges (percentage points) */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        {["GB", "LD", "FB", "PU"].map((k) => (
          <span
            key={k}
            className="rounded-full border border-white/15 px-2 py-1"
            title={`Player minus MLB p50 for ${k}`}
          >
            {k} Δ: {fmtDelta(deltas?.[k] ?? 0)} pp
          </span>
        ))}
      </div>
    </div>
  );
}
