// src/pages/HittingReportsPage.js
import React, { useMemo, useRef } from "react";
import HitterSummary from "../components/HitterSummary.jsx";
import HitterGrades from "../components/HitterGrades.jsx";
import HitterBlurb from "../components/HitterBlurb.jsx";
import TopBattedBalls from "../components/TopBattedBalls.jsx";
import { useHittingReportData } from "../hooks/useHittingReportData.js";
import "../styles/pro-shell.css";
import "../styles/print.css";

import { computeHitterSummary } from "../utils/hitterMetrics.js";
import { computeBattedBallMix } from "../utils/battedBall.js";
import { computeHitterGrades } from "../utils/grades.js";
// Reuse shared select used elsewhere in the app
import AppSelect from "../components/ui/AppSelect.jsx";

export default function HittingReportsPage() {
  const {
    hitterName,
    reportEvents,
    logsCount,
    bipCount,
    // state for hitter selection mirrored from Batted Ball logic via hook
    selectedHitter,
    setSelectedHitter,
    hitterList,
    tab,
    setTab,
  } = useHittingReportData();

  // Build options with an "All Hitters" choice first
  const hitterOptions = useMemo(() => {
    const base = Array.isArray(hitterList) ? hitterList : [];
    return [{ label: "All Hitters", value: "__ALL__" }, ...base.map((n) => ({ label: n, value: n }))];
  }, [hitterList]);

  // Build a shareable/exportable snapshot of the current report window
  const snapshot = useMemo(() => {
    const summary = computeHitterSummary(reportEvents);             // { avgEV, avgLA, hhPct, bip }
    const { pct } = computeBattedBallMix(reportEvents);             // { GB, LD, FB, PU }
    const grades = computeHitterGrades({
      avgEV: summary.avgEV, hhPct: summary.hhPct, mix: pct, bip: summary.bip
    });
    // Top EV rows (reuse logic used in TopBattedBalls)
    const rows = (reportEvents || [])
      .map(e => ({
        ev: Number(e?.ev ?? e?.EV ?? e?.exitVelo ?? NaN),
        la: Number(e?.la ?? e?.LA ?? e?.launchAngle ?? NaN),
        result: e?.result ?? e?.playResult ?? e?.battedBallType ?? e?.bb_type ?? ""
      }))
      .filter(r => Number.isFinite(r.ev) && Number.isFinite(r.la))
      .sort((a,b) => b.ev - a.ev)
      .slice(0, 5);
    return { hitterName, logsCount, bipCount, summary, mix: pct, grades, topBattedBalls: rows };
  }, [reportEvents, hitterName, logsCount, bipCount]);

  const blurbRef = useRef(null);

  // Handle selection changes: picking a hitter sets per-hitter mode; choosing All clears
  function handlePick(e) {
    const val = e?.target?.value;
    if (!val || val === "__ALL__") {
      setSelectedHitter(null);
      setTab("all");
      return;
    }
    setSelectedHitter(val);
    if (tab !== "per") setTab("per");
  }

  function handleDownloadJSON() {
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${snapshot.hitterName.replace(/\s+/g,"_")}_hitting_report.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  function handleExportPDF() {
    window.print(); // uses print.css for a clean PDF
  }
  async function handleCopySummary() {
    const text = blurbRef.current?.textContent ?? "";
    try { await navigator.clipboard.writeText(text); } catch {}
  }

  return (
    <div className="app-shell min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      <div className="app-container mx-auto max-w-6xl px-4 py-5">
        {/* Header bar (mirrors pitching) */}
        <div className="header-row mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <h1 className="header-title text-2xl font-semibold tracking-tight">{hitterName}</h1>
            {/* Hitter dropdown */}
            <div style={{ minWidth: 260 }}>
              <AppSelect
                id="reports-hitter"
                value={selectedHitter ?? "__ALL__"}
                onChange={handlePick}
                options={hitterOptions}
                label=""
                placeholder="Select Hitter"
                clearable
                onClear={() => handlePick({ target: { value: "__ALL__" } })}
                formSx={{ minWidth: 260 }}
              />
            </div>
            <div className="header-chips hidden md:flex items-center gap-2 text-xs">
              <span className="chip rounded-full border border-white/15 bg-white/5 px-2 py-1">Logs: {logsCount}</span>
              <span className="chip rounded-full border border-white/15 bg-white/5 px-2 py-1">BIP: {bipCount}</span>
              {bipCount < 20 && (
                <span className="chip" title="BIP < 20 — grades capped">
                  Small sample
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5" onClick={handleCopySummary}>Copy Summary</button>
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5" onClick={handleDownloadJSON}>Download JSON</button>
            <button className="btn rounded-lg border border-white/15 bg-white/5 px-3 py-1.5" onClick={handleExportPDF}>Export PDF</button>
          </div>
        </div>

        {/* Two-column card grid */}
        <div className="grid-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <HitterSummary events={reportEvents} title="Summary" />
            <HitterGrades events={reportEvents} title="Scouting Grades (Present)" />
          </div>
          <div className="flex flex-col gap-4">
            <div ref={blurbRef}>
              <HitterBlurb events={reportEvents} title="Scouting Summary" />
            </div>
            <TopBattedBalls events={reportEvents} title="Top Batted Balls (by EV)" limit={5} />
          </div>
        </div>
      </div>
    </div>
  );
}


