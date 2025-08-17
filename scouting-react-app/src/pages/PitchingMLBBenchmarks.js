// src/pages/PitchingMLBBenchmarks.js
import React, { useMemo, useState } from 'react';
import { PITCHING_BENCHMARKS, PITCHING_BENCHMARKS_VERSION } from './pitchingBenchmarksByLevel.js';

const gold = '#FFB800';

const styles = {
  wrap: { maxWidth: 1180, margin: '0 auto', padding: '28px 16px 36px' },
  headerRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 8 },
  title: { color: gold, fontSize: 36, fontWeight: 900, letterSpacing: 0.5, margin: 0 },
  sub: { color: 'var(--muted)', margin: '4px 0 18px 0' },
  meta: { color: 'var(--muted)', margin: '2px 0 16px 0', fontSize: 12 },
  controls: { display: 'inline-flex', gap: 8, alignItems: 'center', color: 'var(--text)' },
  select: { background:'rgba(0,0,0,0.2)', color:'var(--text)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:8, padding:'6px 10px', fontWeight:700 },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14, alignItems: 'stretch' },
  card: () => ({
    background: 'var(--panel)', color: 'var(--text)', borderRadius: 12, padding: 14,
    border: '1px solid var(--panel-border)',
    boxShadow: '0 8px 18px rgba(0,0,0,0.35)',
    position: 'relative', transition: 'transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease',
  }),
  cardTopAccent: null,
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  cardName: { fontWeight: 900, color: gold, letterSpacing: 0.2 },
  badge: { display: 'inline-block', padding: '3px 8px', borderRadius: 999, background: 'rgba(255,184,0,0.12)', color: gold, fontWeight: 800, fontSize: 12 },
  cardBodyRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', color: 'var(--text)', marginTop: 6 },
  small: { color: 'var(--muted)', fontSize: 12 },
  footIcon: { marginLeft: 6, color: 'var(--muted)', cursor: 'help' },
  tableWrap: { marginTop: 16, overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' },
  table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 680 },
  th: { position: 'sticky', top: 0, background: 'rgba(10,18,30,0.65)', color: 'var(--text)', textAlign: 'left', fontWeight: 900, padding: '10px 12px', backdropFilter: 'blur(3px)', cursor: 'pointer' },
  td: { color: 'var(--text)', padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' },
  footnote: { marginTop: 10, color: 'var(--muted)', fontSize: 12 },
};

export default function PitchingMLBBenchmarks() {
  const [selectedLevel, setSelectedLevel] = useState('MLB');

  // Lock to Pro Dark preset via CSS variables on page root
  const rootStyle = useMemo(() => ({
    '--bg-grad-top': '#0A0C10',
    '--bg-grad-bottom': '#111827',
    '--panel': 'rgba(20, 26, 36, 0.85)',
    '--panel-border': 'rgba(255, 184, 0, 0.18)',
    '--text': '#E5E7EB',
    '--muted': '#94A3B8',
    '--accent': gold,
  }), []);

  const keyOrder = ['fourSeam','sinker','slider','curveball','changeup','cutter','sweeper'];
  const displayName = {
    fourSeam: 'Four-Seam',
    sinker: 'Sinker',
    slider: 'Slider',
    curveball: 'Curveball',
    changeup: 'Changeup',
    cutter: 'Cutter',
    sweeper: 'Sweeper',
  };

  const levelData = PITCHING_BENCHMARKS[selectedLevel];
  const rows = useMemo(() => {
    if (!levelData) return [];
    return keyOrder
      .filter(k => levelData[k])
      .map(k => ({ key: k, type: displayName[k], ...levelData[k] }));
  }, [levelData]);

  // Sorting
  const [sortKey, setSortKey] = useState('type');
  const [sortDir, setSortDir] = useState('asc');
  const sorted = useMemo(() => {
    const arr = [...rows];
    arr.sort((a,b) => {
      const av = a[sortKey] ?? '';
      const bv = b[sortKey] ?? '';
      const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true, sensitivity: 'base' });
      return sortDir === 'asc' ? cmp : -cmp;
    });
    return arr;
  }, [rows, sortKey, sortDir]);

  const header = (label, key) => (
    <th style={styles.th} onClick={() => setSortKey((prev) => prev === key ? (setSortDir(d=>d==='asc'?'desc':'asc'), key) : (setSortDir('asc'), key))}>
      {label}{sortKey===key ? (sortDir==='asc' ? ' ▲' : ' ▼') : ''}
    </th>
  );

  const fmtBand = (band) => Array.isArray(band) && band.length===2 && band[0]!=null && band[1]!=null ? `${band[0]}–${band[1]} mph` : '—';
  const fmtVal = (v) => (v===null || v===undefined || v==='') ? '—' : `${v}`;

  return (
    <div className={`mlb-benchmarks-page preset-pro-dark`}
      style={{
        ...rootStyle,
        minHeight: '100vh',
        background: 'linear-gradient(180deg, var(--bg-grad-top) 0%, var(--bg-grad-bottom) 100%)',
      }}
    >
      <div style={styles.wrap}>
        {/* Header */}
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.title}>MLB Benchmarks</h1>
            <div style={styles.sub}>Reference ranges for MLB pitch traits (velo, IVB, HB, command).</div>
            <div style={styles.meta}>
              Benchmarks: {selectedLevel} season ranges
              {PITCHING_BENCHMARKS_VERSION ? ` • version ${PITCHING_BENCHMARKS_VERSION}` : ''}
              {' • edit in '}<code style={{ color: 'var(--text)' }}>pitchingBenchmarksByLevel.js</code>
            </div>
          </div>
          {/* Level select (local state only) */}
          <div style={styles.controls} aria-label="Level Selector">
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Level:</span>
            <select value={selectedLevel} onChange={(e)=>setSelectedLevel(e.target.value)} style={styles.select}>
              <option value="MLB">MLB</option>
              <option value="AAA">AAA</option>
              <option value="AA">AA</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        {(!levelData) ? (
          <div style={{ color:'var(--muted)', padding:'12px 2px' }}>No benchmark data available for this level.</div>
        ) : (
          <div style={styles.cardsGrid}>
            {rows.map((r) => {
              const badge = r.command || '—';
              return (
                <div key={r.type} style={styles.card()}
                     onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 24px rgba(0,0,0,0.45)'; }}
                     onMouseLeave={(e)=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 18px rgba(0,0,0,0.35)'; }}>
                  <div style={styles.cardHeader}>
                    <div style={styles.cardName}>{r.type}</div>
                    <span style={styles.badge}>{badge}</span>
                  </div>
                  <div style={styles.cardBodyRow}><span className="lbl" style={styles.small}>Velocity</span><span>{fmtBand(r.velo)}</span></div>
                  <div style={styles.cardBodyRow}><span className="lbl" style={styles.small}>IVB avg</span><span>{fmtVal(r.ivb)}</span></div>
                  <div style={styles.cardBodyRow}><span className="lbl" style={styles.small}>HB avg</span><span>{fmtVal(r.hb)}</span></div>
                  <div style={{ marginTop: 8, display:'flex', alignItems:'center', color:'var(--muted)', fontSize:12 }}>
                    <span>Ranges represent typical values for this level.</span>
                    <span title="Ranges represent typical values for this level." style={styles.footIcon}>ⓘ</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Benchmark Table */}
        <div style={styles.tableWrap}>
          <table style={styles.table}>
            <thead>
              <tr>
                {header('Pitch Type', 'type')}
                {header('Velocity (mph)', 'velo')}
                {header('IVB (in)', 'ivb')}
                {header('HB (in)', 'hb')}
                {header('Command Notes', 'command')}
              </tr>
            </thead>
            <tbody>
              {(!levelData) ? (
                <tr><td style={styles.td} colSpan={5}>No benchmark data available for this level.</td></tr>
              ) : (
                sorted.map((r) => (
                  <tr key={`row-${r.type}`}>
                    <td style={styles.td}>{r.type}</td>
                    <td style={styles.td}>{fmtBand(r.velo)}</td>
                    <td style={styles.td}>{fmtVal(r.ivb)}</td>
                    <td style={styles.td}>{fmtVal(r.hb)}</td>
                    <td style={styles.td}>
                      <span>{fmtVal(r.command)}</span>
                      {r.n != null && (
                        <span style={{ marginLeft:8, color:'var(--muted)', fontSize:12, border:'1px solid rgba(255,255,255,0.15)', borderRadius:999, padding:'2px 6px' }}>n={r.n}</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footnotes */}
        <div style={styles.footnote}>
          Benchmarks are directional references; evaluate in context (release, axis, approach angle).
        </div>
      </div>
    </div>
  );
}
