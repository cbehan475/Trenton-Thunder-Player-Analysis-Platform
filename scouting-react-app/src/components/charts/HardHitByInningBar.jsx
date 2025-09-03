import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function HardHitByInningBar({ rows = [], title = "Hard-Hit% by Inning" }) {
  const data = useMemo(() => {
    const inningTotals = {};
    const inningHardHits = {};

    rows.forEach(r => {
      const inning = r.inning ?? r.INNING;
      const ev = Number(r.ev ?? r.EV);
      if (!inning || !Number.isFinite(ev)) return;

      inningTotals[inning] = (inningTotals[inning] || 0) + 1;
      if (ev >= 95) {
        inningHardHits[inning] = (inningHardHits[inning] || 0) + 1;
      }
    });

    const labels = Object.keys(inningTotals).sort((a, b) => Number(a) - Number(b));
    const values = labels.map(inning => {
      const total = inningTotals[inning] || 0;
      const hh = inningHardHits[inning] || 0;
      return total > 0 ? (hh / total) * 100 : 0;
    });

    return {
      labels,
      datasets: [
        {
          label: "Hard-Hit%",
          data: values,
          backgroundColor: "rgba(0, 212, 126, 0.7)",
          borderColor: "rgba(0, 212, 126, 1)",
          borderWidth: 1,
        },
      ],
    };
  }, [rows]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: title },
      tooltip: { callbacks: { label: (ctx) => ctx.raw.toFixed(1) + "%" } },
    },
    scales: {
      y: { beginAtZero: true, max: 100, ticks: { callback: v => v + "%" } },
    },
  };

  return <div style={{ height: 300, marginTop: 24 }}><Bar data={data} options={options} /></div>;
}
