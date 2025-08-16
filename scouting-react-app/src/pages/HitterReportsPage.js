// src/pages/HitterReportsPage.js
import React, { useEffect, useMemo, useState } from 'react';
import { getAllHitterNames, getHittingMetricsFor, getHittingLogStats } from '../data/logs/hittingIndex.js';

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
          <select
            id="hitterSelect"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            style={{
              padding: '8px 10px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.24)',
              background: 'rgba(12,20,36,0.75)',
              color: '#E9EEFF',
              minWidth: 260
            }}
          >
            {names.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* metrics */}
        {metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(160px, 1fr))', gap: 12 }}>
            <div style={blockStyle}>
              <div style={labelStyle}>Avg EV</div>
              <div style={valueStyle}>{Number.isFinite(metrics.avgEV) ? metrics.avgEV.toFixed(1) + ' mph' : '—'}</div>
            </div>
            <div style={blockStyle}>
              <div style={labelStyle}>Avg LA</div>
              <div style={valueStyle}>{Number.isFinite(metrics.avgLA) ? metrics.avgLA.toFixed(1) + '°' : '—'}</div>
            </div>
            <div style={blockStyle}>
              <div style={labelStyle}>Hard-Hit % (EV ≥ 95)</div>
              <div style={valueStyle}>{Number.isFinite(metrics.hardHitPct) ? metrics.hardHitPct.toFixed(1) + '%' : '—'}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
