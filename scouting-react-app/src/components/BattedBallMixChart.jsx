// src/components/BattedBallMixChart.jsx
import React, { useMemo } from "react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";
import { computeBattedBallMix, toGroupedBarData } from "../utils/battedBall";
import { MLB_BATTED_BALL_MIX_P50 } from "../constants/mlbBenchmarks";
import { LabelList } from "recharts";

// Compact, readable on-bar value label for Player
function PlayerValueLabel(props) {
  const { x, y, width, value } = props;
  if (value == null) return null;
  const v = Number(value);
  // Hide labels for very small percentages to reduce clutter
  if (Number.isNaN(v) || v < 3) return null; // suppress <3%
  const cx = x + width / 2;
  const cy = y - 6; // slight upward offset so text sits above bar
  return (
    <text x={cx} y={cy} textAnchor="middle" fontSize={11} opacity={0.9}>{`${v}%`}</text>
  );
}

export default function BattedBallMixChart({ events = [], title = "Batted Ball Mix vs MLB p50" }) {
  const { data, deltas, totalBIP } = useMemo(() => {
    const { pct, total } = computeBattedBallMix(events);
    const data = toGroupedBarData(pct, MLB_BATTED_BALL_MIX_P50);
    // Compute neutral deltas (Player − MLB p50), rounded to 1 decimal
    const keys = ["GB", "LD", "FB", "PU"];
    const deltas = Object.fromEntries(
      keys.map((k) => [
        k,
        Number(((pct?.[k] ?? 0) - (MLB_BATTED_BALL_MIX_P50?.[k] ?? 0)).toFixed(1)),
      ])
    );
    return { data, deltas, totalBIP: total ?? 0 };
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
            <Tooltip formatter={(v) => `${v}%`} />
            <Legend />
            <Bar dataKey="Player" fill="#2563eb">
              {/* MLB-style: show Player % directly on bars (clean, no clutter) */}
              <LabelList dataKey="Player" content={<PlayerValueLabel />} />
            </Bar>
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
      {/* Sample size + LA bucket caption */}
      <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] text-white/70">
        <span className="rounded-full border border-white/10 px-2 py-0.5">
          BIP: {totalBIP}
        </span>
        {totalBIP < 10 && (
          <span className="rounded-full border border-white/10 px-2 py-0.5">
            small sample — interpret cautiously
          </span>
        )}
        <span className="opacity-70">
          Buckets: GB &lt;10°, LD 10–24.9°, FB 25–49.9°, PU ≥50°
        </span>
      </div>
    </div>
  );
}
