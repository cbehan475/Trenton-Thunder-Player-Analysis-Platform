// src/pages/HittingReportsPage.js
import React, { useMemo, useRef, useState } from "react";
import HitterSummary from "../components/HitterSummary.jsx";
import HitterGrades from "../components/HitterGrades.jsx";
import HitterScoutingCard from "../components/HitterScoutingCard.jsx";
import TopBattedBalls from "../components/TopBattedBalls.jsx";
import { useHittingReportData } from "../hooks/useHittingReportData.js";
import "../styles/pro-shell.css";
import "../styles/print.css";

import { computeHitterSummary } from "../utils/hitterMetrics.js";
import { computeBattedBallMix } from "../utils/battedBall.js";
import { computeHitterGrades } from "../utils/grades.js";
// Reuse shared select used elsewhere in the app
import AppSelect from "../components/ui/AppSelect.jsx";
// Build events from by-date logs like other hitting pages
import HITTERS_BY_DATE from "../data/logs/hittersByDate";
import { flattenEventsFromByDateMap } from "../lib/battedBallMetrics";

// --- robust hitter id/name extractors (cover many event shapes) ---
function evtId(e) {
  return (
    e?.hitterId ?? e?.batterId ?? e?.playerId ??
    e?.hitter?.id ?? e?.batter?.id ?? e?.player?.id ?? null
  );
}
function evtName(e) {
  return (
    e?.batter_name ?? e?.batterName ?? e?.playerName ?? e?.hitterName ??
    e?.hitter?.fullName ?? e?.batter?.fullName ?? e?.player?.fullName ??
    e?.hitter?.name ?? e?.batter?.name ?? e?.player?.name ??
    e?.name ?? null
  );
}
function asOption(id, name) {
  const label = (name && String(name).trim()) || (id != null ? String(id) : "Unknown");
  const value = id != null ? `id:${String(id)}` : `name:${label.toLowerCase()}`;
  return { id, name: label, label, value };
}

export default function HittingReportsPage() {
  // Build the SAME flattened events used by Batted Ball page (full season scope for now)
  const eventsInRange = useMemo(() => {
    const evs = flattenEventsFromByDateMap(HITTERS_BY_DATE);
    return Array.isArray(evs) ? evs : [];
  }, []);

  // Local state: per-hitter toggle + selection object { id?, name? }
  const [perHitter, setPerHitter] = useState(false);
  const [selectedHitter, setSelectedHitter] = useState(null); // { id?, name? } | null

  // Build options from the events in-range (so names exist); include "All Hitters"
  const hitterOptions = useMemo(() => {
    const evs = Array.isArray(eventsInRange) ? eventsInRange : [];
    const map = new Map();
    for (const e of evs) {
      const id = evtId(e);
      const name = evtName(e);
      const opt = asOption(id, name);
      if (!map.has(opt.value)) map.set(opt.value, opt);
    }
    const list = Array.from(map.values()).sort((a, b) =>
      a.label.localeCompare(b.label, undefined, { sensitivity: "base" })
    );
    return [asOption("ALL", "All Hitters"), ...list];
  }, [eventsInRange]);

  // Build a lookup map for quick value->option resolution
  const optionByValue = useMemo(() => {
    const m = new Map();
    for (const o of hitterOptions) m.set(String(o.value), o);
    return m;
  }, [hitterOptions]);

  const {
    hitterName,
    logsCount,
    bipCount,
    reportEvents,
  } = useHittingReportData({ selectedHitter, perHitter, filteredEvents: eventsInRange });

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
    if (!val || val === "ALL" || val === "id:ALL" || val === "__ALL__") {
      setPerHitter(false);
      setSelectedHitter(null);
      return;
    }
    const picked = optionByValue.get(String(val));
    if (picked) {
      setPerHitter(true);
      const normalized = { id: picked.id ?? null, name: picked.name ?? picked.label ?? "" };
      setSelectedHitter(normalized);
      return;
    }
    // Fallback: treat as name string
    setPerHitter(true);
    setSelectedHitter({ id: null, name: String(val) });
  }

  // header title should reflect selection
  const pageTitle = perHitter && selectedHitter?.name ? selectedHitter.name : (hitterName || "All Hitters");

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
            <h1 className="header-title text-2xl font-semibold tracking-tight">{pageTitle}</h1>
            {/* Hitter dropdown */}
            <div style={{ minWidth: 260 }}>
              <AppSelect
                id="reports-hitter"
                value={
                  perHitter
                    ? (selectedHitter
                        ? asOption(selectedHitter.id ?? null, selectedHitter.name ?? "").value
                        : "id:ALL")
                    : "id:ALL"
                }
                onChange={handlePick}
                options={hitterOptions}
                label=""
                placeholder="Select Hitter"
                clearable
                onClear={() => handlePick({ target: { value: "id:ALL" } })}
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
              <HitterScoutingCard
                events={reportEvents}
                logsCount={logsCount}
                bipCount={bipCount}
                hitterName={perHitter ? (selectedHitter?.name ?? null) : undefined}
                title="Scouting Summary"
              />
            </div>
            <TopBattedBalls events={reportEvents} title="Top Batted Balls (by EV)" limit={5} />
          </div>
        </div>
      </div>
    </div>
  );
}


