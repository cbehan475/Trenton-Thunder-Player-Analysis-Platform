// src/pages/HitterReportsPage.js
import React, { useEffect, useMemo, useState } from 'react';
import AppSelect from '../components/ui/AppSelect.jsx';
import { getAllHitterNames, getHittingMetricsFor, getHittingLogStats, getHitterEntries } from '../data/logs/hittingIndex';
import HitterSummary from '../components/HitterSummary.jsx';
import HitterBlurb from '../components/HitterBlurb.jsx';
import TopBattedBalls from '../components/TopBattedBalls.jsx';
import { isBIP } from '../lib/hitLogUtils.js';

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

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0e2d56,#0b4a8f 55%,#0b67c7)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ color: '#FFD600', fontWeight: 900, letterSpacing: 0.5, marginBottom: 8 }}>
          Hitter Reports
        </h1>

        {/* badge with stats */}
        <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', marginBottom: 16 }}>
          <span style={{ background: '#FFD600', color: '#23272F', fontWeight: 800, borderRadius: 999, padding: '4px 10px', fontSize: 12 }}>
            Logs: {stats.files}
          </span>
          <span style={{ background: 'rgba(0,0,0,0.3)', color: '#E9EEFF', fontWeight: 700, borderRadius: 999, padding: '4px 10px', fontSize: 12 }}>
            Entries: {stats.entries}
          </span>
        </div>

        {/* dropdown */}
        <div style={{ margin: '12px 0 20px' }}>
          <label htmlFor="hitterSelect" style={{ color: '#E9EEFF', fontWeight: 700, marginRight: 10 }}>Select Hitter:</label>
          <AppSelect
            id="hitterSelect"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            options={names}
            label=""
            formSx={{ minWidth: 260 }}
          />
        </div>

        {/* Header with name and counts plus action buttons */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="text-xl font-semibold" style={{ color: '#E9EEFF' }}>
            Hitter Reports — {selected || 'Hitter'}
            <span className="ml-2 align-middle text-xs opacity-70">
              {' '}Logs: {Array.isArray(entries) ? entries.length : 0} • BIP: {reportEvents.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => copyToClipboard(reportText)}
              style={{ padding: '8px 10px', borderRadius: 8, background: '#184d8a', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
            >
              Copy report
            </button>
            <button
              onClick={() => downloadTxt(`${(selected||'hitter').replace(/\s+/g,'_')}_hitter_report.txt`, reportText)}
              style={{ padding: '8px 10px', borderRadius: 8, background: '#0a7f3f', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}
            >
              Download .txt
            </button>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Left column: key numbers */}
          <div className="flex flex-col gap-3">
            <HitterSummary
              events={reportEvents}
              title="Summary (Avg EV, Avg LA, HH%)"
            />
          </div>

          {/* Right column: narrative + top batted balls */}
          <div className="flex flex-col gap-3">
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
    </div>
  );
}
