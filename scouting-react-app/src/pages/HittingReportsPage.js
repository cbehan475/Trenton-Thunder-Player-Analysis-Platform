// src/pages/HittingReportsPage.js
import React from "react";
import HitterSummary from "../components/HitterSummary.jsx";
import HitterGrades from "../components/HitterGrades.jsx";
import HitterBlurb from "../components/HitterBlurb.jsx";
import TopBattedBalls from "../components/TopBattedBalls.jsx";
import { useHittingReportData } from "../hooks/useHittingReportData.js";
import "../styles/pro-shell.css";

export default function HittingReportsPage() {
  const { hitterName, reportEvents, logsCount, bipCount } = useHittingReportData();

  return (
    <div className="app-shell min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      <div className="app-container mx-auto max-w-6xl px-4 py-5">
        {/* Header bar (mirrors pitching) */}
        <div className="header-row mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <h1 className="header-title text-2xl font-semibold tracking-tight">{hitterName}</h1>
            <div className="header-chips hidden md:flex items-center gap-2 text-xs">
              <span className="chip rounded-full border border-white/15 bg-white/5 px-2 py-1">Logs: {logsCount}</span>
              <span className="chip rounded-full border border-white/15 bg-white/5 px-2 py-1">BIP: {bipCount}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5">Save</button>
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5">Download JSON</button>
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5">Import JSON</button>
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5">Export PDF</button>
          </div>
        </div>

        {/* Two-column card grid */}
        <div className="grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <HitterSummary events={reportEvents} title="Summary" />
            <HitterGrades events={reportEvents} title="Scouting Grades (Present)" />
          </div>
          <div className="flex flex-col gap-4">
            <HitterBlurb events={reportEvents} title="Scouting Summary" />
            <TopBattedBalls events={reportEvents} title="Top Batted Balls (by EV)" limit={5} />
          </div>
        </div>
      </div>
    </div>
  );
}

