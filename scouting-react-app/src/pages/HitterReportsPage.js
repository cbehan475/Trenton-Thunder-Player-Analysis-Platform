// src/pages/HitterReportsPage.js
import React, { useEffect, useMemo, useState } from 'react';
import AppSelect from '../components/ui/AppSelect.jsx';
import { getAllHitterNames, getHittingMetricsFor, getHittingLogStats, getHitterEntries } from '../data/logs/hittingIndex';
import HitterSummary from '../components/HitterSummary.jsx';
import HitterBlurb from '../components/HitterBlurb.jsx';
import TopBattedBalls from '../components/TopBattedBalls.jsx';
import { isBIP } from '../lib/hitLogUtils.js';
import HitterGrades from '../components/HitterGrades.jsx';

export default function HitterReportsPage() {
  const [names, setNames] = useState([]);
  const [selected, setSelected] = useState('');
  const [metrics, setMetrics] = useState(null);

  const stats = useMemo(() => getHittingLogStats(), []);

  useEffect(() => {
    // populate dropdown
    const n = getAllHitterNames();
    setNames(n);
    if (n.length && !selected) setSelected(n[0]);
  }, []); // mount only

  useEffect(() => {
    if (!selected) { setMetrics(null); return; }
    const m = getHittingMetricsFor(selected);
    setMetrics(m);
  }, [selected]);

  const blockStyle = {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 12,
    padding: 16,
    color: '#E9EEFF'
  };

  const labelStyle = { fontSize: 14, opacity: 0.85, marginBottom: 6 };
  const valueStyle = { fontSize: 20, fontWeight: 800 };

  // --- helpers for report ---
  function fmtPct(n) {
    return Number.isFinite(n) ? `${(n * 100).toFixed(0)}%` : '—';
  }
  function copyToClipboard(text) {
    try { navigator.clipboard.writeText(text); alert('Report copied'); } catch { alert('Copy failed'); }
  }
  function downloadTxt(filename, text) {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = filename; a.click();
    URL.revokeObjectURL(url);
  }

  // derive bullets from raw entries
  const entries = selected ? getHitterEntries(selected) : [];
  const evs = entries.map(e => e.ev).filter(Number.isFinite);
  const las = entries.map(e => e.la).filter(Number.isFinite);
  const hardHits = evs.filter(v => v >= 95).length;
  const sweetSpots = las.filter(a => a >= 8 && a <= 32).length;
  const bbCount = entries.length;
  const hardHitPctPr = bbCount ? hardHits / bbCount : undefined;
  const sweetSpotPctPr = bbCount ? sweetSpots / bbCount : undefined;

  const bullets = [
    selected ? `${selected} — ${bbCount} BBE logged.` : null,
    metrics?.summary?.evAvg != null ? `Avg EV: ${metrics.summary.evAvg} mph; Max EV: ${metrics.summary.evMax ?? '—'} mph.` : null,
    metrics?.summary?.laAvg != null ? `Avg LA: ${metrics.summary.laAvg}°.` : null,
    `Hard-Hit% (≥95 mph): ${fmtPct(hardHitPctPr)}.`,
    `Sweet-Spot% (8–32°): ${fmtPct(sweetSpotPctPr)}.`
  ].filter(Boolean);

  const reportText = bullets.join('\n');

  // Build the BIP-only set for this window
  const reportEvents = Array.isArray(entries) ? entries.filter((e) => isBIP(e?.result)) : [];
  const hitterName = selected || 'Hitter';
  const logsCount = Array.isArray(entries) ? entries.length : 0;
  const bipCount = reportEvents.length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-4">
      {/* Page title and chips */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="text-2xl font-semibold tracking-tight">
          Hitter Reports — {hitterName}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full border border-white/15 px-2 py-1">Logs: {logsCount}</span>
          <span className="rounded-full border border-white/15 px-2 py-1">BIP: {bipCount}</span>
        </div>
      </div>

      {/* dropdown */}
      <div className="mb-4">
        <label htmlFor="hitterSelect" className="mr-2 text-sm font-semibold">Select Hitter:</label>
        <AppSelect
          id="hitterSelect"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          options={names}
          label=""
          formSx={{ minWidth: 260 }}
        />
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column: key numbers */}
        <div className="flex flex-col gap-4">
          <HitterSummary
            events={reportEvents}
            title="Summary (Avg EV, Avg LA, HH%)"
          />
          <HitterGrades
            events={reportEvents}
            title="Scouting Grades (Present)"
          />
        </div>

        {/* Right column: narrative + top batted balls */}
        <div className="flex flex-col gap-4">
          <HitterBlurb
            events={reportEvents}
            title="Scouting Summary"
          />
          <TopBattedBalls
            events={reportEvents}
            title="Top Batted Balls (by EV)"
            limit={5}
          />
        </div>
      </div>
    </div>
  );
}
