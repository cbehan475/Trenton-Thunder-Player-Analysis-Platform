// src/components/BattedBallMixChart.jsx
import React, { useMemo } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import { computeBattedBallMix, toGroupedBarData } from "../utils/battedBall";
import { MLB_BATTED_BALL_MIX_P50 } from "../constants/mlbBenchmarks";

export default function BattedBallMixChart({ events = [], title = "Mix vs MLB p50" }) {
  const data = useMemo(() => {
    const { pct } = computeBattedBallMix(events);
    return toGroupedBarData(pct, MLB_BATTED_BALL_MIX_P50);
  }, [events]);

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/0 p-3">
      <div className="text-sm font-semibold mb-2">{title}</div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Legend />
            <Bar dataKey="Player" fill="#2563eb" />
            <Bar dataKey="MLB p50" fill="#9ca3af" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
