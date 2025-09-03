import React, { useMemo, useRef } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

// MLB sweet spot definition
const SWEET = { evMin: 95, laMin: 8, laMax: 32 };

// Overlay the sweet-spot box
const sweetSpotPlugin = {
  id: "sweetSpotPlugin",
  beforeDraw(chart) {
    const { ctx, chartArea, scales } = chart;
    if (!chartArea || !scales?.x || !scales?.y) return;

    const x1 = scales.x.getPixelForValue(SWEET.laMin);
    const x2 = scales.x.getPixelForValue(SWEET.laMax);
    const yTop = scales.y.getPixelForValue(SWEET.evMin);
    const yBottom = scales.y.getPixelForValue(scales.y.min);

    ctx.save();
    ctx.globalAlpha = 0.12;
    ctx.fillStyle = "#00ff9c";
    ctx.fillRect(x1, yBottom, x2 - x1, yTop - yBottom);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#00ff9c";
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(x1, yBottom, x2 - x1, yTop - yBottom);
    ctx.restore();
  },
};
ChartJS.register(sweetSpotPlugin);

const HIT_RESULTS = new Set(["Single","Double","Triple","Home Run","HR"]);
const OUT_RESULTS = new Set([
  "Groundout","Flyout","Lineout","Pop Out","Forceout","Field Error","Error",
  "Sac Fly","Sacrifice Fly","Groundout DP","Flyout DP"
]);

/**
 * rows: array of table row objects. We normalize common key variants:
 *   EV/ev, LA/la, result/RESULT/outcome, hitter/HITTER, inning/INNING, pitchType/PITCH_TYPE
 * showFouls: include fouls as gray points (default true)
 */
export default function EVLAScatter({ rows = [], showFouls = true, title = "EV vs LA (Sweet Spot)" }) {
  const chartRef = useRef(null);

  const handleDownload = () => {
    if (chartRef.current) {
      const url = chartRef.current.toBase64Image();
      const link = document.createElement("a");
      link.href = url;
      link.download = "ev-la-scatter.png";
      link.click();
    }
  };
  const norm = (r, ...keys) => {
    for (const k of keys) if (r?.[k] != null) return r[k];
    return undefined;
  };

  const { hits, outs, fouls, yMin, yMax, xMin, xMax } = useMemo(() => {
    const H = [], O = [], F = [];
    let minEV = Infinity, maxEV = -Infinity, minLA = Infinity, maxLA = -Infinity;

    rows.forEach(r => {
      const ev = Number(norm(r, "ev", "EV"));
      const la = Number(norm(r, "la", "LA"));
      if (!Number.isFinite(ev) || !Number.isFinite(la)) return;

      const hitter = norm(r, "hitter", "HITTER", "player", "Player");
      const inning = norm(r, "inning", "INNING");
      const result = (norm(r, "result", "RESULT", "outcome", "Outcome") || "").toString().trim();
      const pitchType = norm(r, "pitchType", "PITCH_TYPE", "pitch", "Pitch");

      const point = {
        x: la,
        y: ev,
        meta: [hitter, inning != null ? `Inning ${inning}` : null, result || null, pitchType || null]
          .filter(Boolean).join(" • "),
      };

      minEV = Math.min(minEV, ev);
      maxEV = Math.max(maxEV, ev);
      minLA = Math.min(minLA, la);
      maxLA = Math.max(maxLA, la);

      if (result.toLowerCase() === "foul") F.push(point);
      else if (HIT_RESULTS.has(result)) H.push(point);
      else O.push(point);
    });

    const evPad = 3, laPad = 5;
    return {
      hits: H, outs: O, fouls: F,
      yMin: Math.max(0, Math.floor((minEV === Infinity ? 0 : minEV) - evPad)),
      yMax: Math.ceil((maxEV === -Infinity ? 100 : maxEV) + evPad),
      xMin: Math.floor((minLA === Infinity ? -50 : minLA) - laPad),
      xMax: Math.ceil((maxLA === -Infinity ? 80 : maxLA) + laPad),
    };
  }, [rows]);

  const data = useMemo(() => ({
    datasets: [
      { label: "Hits", data: hits, pointRadius: 4, pointHoverRadius: 6,
        pointBackgroundColor: "#00d47e", pointBorderColor: "#00d47e" },
      { label: "Outs", data: outs, pointRadius: 4, pointHoverRadius: 6,
        pointBackgroundColor: "#ff4d4d", pointBorderColor: "#ff4d4d" },
      ...(showFouls ? [{
        label: "Fouls",
        data: fouls,
        pointRadius: 3.5, pointHoverRadius: 5,
        pointBackgroundColor: "rgba(200,200,200,0.25)",
        pointBorderColor: "rgba(200,200,200,0.9)"
      }] : [])
    ]
  }), [hits, outs, fouls, showFouls]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top", labels: { boxWidth: 14 } },
      title: { display: true, text: title },
      tooltip: {
        callbacks: {
          label: (ctx) => ` EV ${ctx.raw?.y?.toFixed(1)} | LA ${ctx.raw?.x?.toFixed(0)}°`,
          afterLabel: (ctx) => ctx.raw?.meta || ""
        }
      }
    },
    scales: {
      x: { title: { display: true, text: "Launch Angle (°)" }, min: xMin, max: xMax,
           grid: { color: "rgba(255,255,255,0.08)" } },
      y: { title: { display: true, text: "Exit Velocity (mph)" }, min: yMin, max: yMax,
           grid: { color: "rgba(255,255,255,0.08)" } }
    }
  }), [title, xMin, xMax, yMin, yMax]);

  return (
    <div style={{ height: 420, width: "100%" }}>
      <Scatter ref={chartRef} data={data} options={options} />
      <button
        style={{ marginTop: "8px", padding: "4px 8px", fontSize: "0.85rem" }}
        onClick={handleDownload}
      >
        Download PNG
      </button>
    </div>
  );
}
