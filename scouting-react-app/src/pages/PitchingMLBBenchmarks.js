// src/pages/PitchingMLBBenchmarks.js
import React, { useEffect, useMemo, useState } from 'react';
import { PITCHING_BENCHMARKS_VERSION } from './pitchingBenchmarksByLevel.js';
import { pitchingBenchmarksByLevel } from '../lib/pitchingBenchmarksByLevel.js';
import { validateBenchmarks } from '../lib/validateBenchmarks.js';
import { PITCHERS_SEASON_AGG, PITCHERS_AGG_VERSION } from '../data/pitchersSeasonAggregates.js';
import { getPitcherSeasonAgg, FEATURE_BENCHMARK_BADGES, percentileFromBand } from '../lib/benchmarks.js';
import { FEATURE_AGG_FROM_LOGS, getSeasonAggFromLogsCached } from '../lib/seasonAggCache.js';

// Local dev flag (scoped to this page only)
const DEV_TOOLS = true;

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
  pctBadge: { display: 'inline-block', padding: '2px 6px', borderRadius: 999, background: 'rgba(148,163,184,0.15)', color: 'var(--muted)', fontWeight: 800, fontSize: 11 },
  cardBodyRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', color: 'var(--text)', marginTop: 6 },
  small: { color: 'var(--muted)', fontSize: 12 },
  footIcon: { marginLeft: 6, color: 'var(--muted)', cursor: 'help' },
  tableWrap: { marginTop: 16, overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' },
  table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 680 },
  th: { position: 'sticky', top: 0, background: 'rgba(10,18,30,0.65)', color: 'var(--text)', textAlign: 'left', fontWeight: 900, padding: '10px 12px', backdropFilter: 'blur(3px)', cursor: 'pointer' },
  td: { color: 'var(--text)', padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' },
  footnote: { marginTop: 10, color: 'var(--muted)', fontSize: 12 },
  warnWrap: { marginBottom: 12 },
  warnBanner: {
    background: 'rgba(148,163,184,0.12)',
    border: '1px solid rgba(148,163,184,0.3)',
    color: 'var(--muted)',
    borderRadius: 10,
    padding: '8px 12px',
    fontSize: 12,
  },
  warnToggle: { cursor: 'pointer', fontWeight: 700 },
  warnList: { marginTop: 8, paddingLeft: 16 },
  btn: {
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.18)',
    color: 'var(--text)',
    borderRadius: 8,
    padding: '6px 10px',
    fontWeight: 800,
    fontSize: 12,
    cursor: 'pointer'
  }
};

export default function PitchingMLBBenchmarks() {
  // Build level options from data keys, sorted per required order
  const desiredOrder = ['MLB','AAA','AA','A+','A'];
  const levelOptions = useMemo(() => {
    const keys = Object.keys(pitchingBenchmarksByLevel || {});
    const ordered = desiredOrder.filter(k => keys.includes(k));
    const extras = keys.filter(k => !desiredOrder.includes(k)).sort();
    return [...ordered, ...extras];
  }, []);
  const [selectedLevel, setSelectedLevel] = useState(() => levelOptions.includes('MLB') ? 'MLB' : (levelOptions[0] || 'MLB'));
  const [selectedPitcherId, setSelectedPitcherId] = useState('');
  const [pitchersAgg, setPitchersAgg] = useState(null); // computed map { [id]: {id,name,pitches} }
  const hasComputedAgg = !!(pitchersAgg && typeof pitchersAgg === 'object' && Object.keys(pitchersAgg).length);
  const [warnings, setWarnings] = useState([]);
  const [warnOpen, setWarnOpen] = useState(false);

  useEffect(() => {
    // Validate full dataset (non-blocking). Toggle stays as user set.
    const w = validateBenchmarks(pitchingBenchmarksByLevel) || [];
    setWarnings(w);
  }, [selectedLevel]);

  // Load computed season aggregates (first-half) if feature is enabled
  useEffect(() => {
    let mounted = true;
    async function loadAgg() {
      if (!FEATURE_AGG_FROM_LOGS) return;
      try {
        const data = await getSeasonAggFromLogsCached();
        if (mounted) setPitchersAgg(data);
      } catch (e) {
        // non-blocking; fall back silently
        if (mounted) setPitchersAgg(null);
      }
    }
    loadAgg();
    return () => { mounted = false; };
  }, []);

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

  const levelData = pitchingBenchmarksByLevel[selectedLevel];
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
  const fmtNum = (v, digits=1) => (v===null || v===undefined || Number.isNaN(Number(v))) ? '—' : Number(v).toFixed(digits);
  const sign = (v) => (v>0?`+${v}`:`${v}`);

  // Percentile helpers
  function velBandToPcts(band, p50Override) {
    if (!Array.isArray(band) || band.length !== 2) return null;
    const [min, max] = band;
    if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
    const p25 = min + 0.25 * (max - min);
    const p75 = min + 0.75 * (max - min);
    const p50 = Number.isFinite(p50Override) ? p50Override : (min + max) / 2;
    return { p25, p50, p75 };
  }
  function ivbBandApprox(p50) {
    if (!Number.isFinite(p50)) return null;
    const span = Math.abs(p50) * 0.25;
    return { p25: p50 - span, p50, p75: p50 + span };
  }
  function hbBandApprox(p50) {
    if (!Number.isFinite(p50)) return null;
    const span = Math.abs(p50) * 0.25;
    return { p25: p50 - span, p50, p75: p50 + span };
  }

  // Pitcher options sorted by last name (computed agg preferred)
  const pitcherOptions = useMemo(() => {
    const source = hasComputedAgg ? Object.values(pitchersAgg) : (PITCHERS_SEASON_AGG || []);
    const arr = source.map(p => ({ value: p.id, label: p.name }));
    arr.sort((a,b) => {
      const al = a.label.trim().split(/\s+/).pop()?.toLowerCase() || '';
      const bl = b.label.trim().split(/\s+/).pop()?.toLowerCase() || '';
      return al.localeCompare(bl);
    });
    return arr;
  }, [hasComputedAgg, pitchersAgg]);

  // Lookup helper: prefer computed map, fallback to static helper
  const getPlayerAgg = (pid, pitchKey) => {
    if (!pid || !pitchKey) return null;
    if (hasComputedAgg) {
      const rec = pitchersAgg?.[pid];
      const agg = rec?.pitches?.[pitchKey];
      if (agg) return agg;
    }
    return getPitcherSeasonAgg(pid, pitchKey);
  };

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
              {PITCHING_BENCHMARKS_VERSION ? ` \u000b• version ${PITCHING_BENCHMARKS_VERSION}` : ''}
              {' \u000b• edit in '}<code style={{ color: 'var(--text)' }}>pitchingBenchmarksByLevel.js</code>
              <div style={{ marginTop: 4 }}>
                <span style={{ color:'var(--muted)' }}>Source: first-half aggregates • version {PITCHERS_AGG_VERSION}</span>
              </div>
            </div>
          </div>
          {/* Level select (local state only) */}
          <div style={styles.controls} aria-label="Level Selector">
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Level:</span>
            <select value={selectedLevel} onChange={(e)=>setSelectedLevel(e.target.value)} style={styles.select}>
              {levelOptions.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl}</option>
              ))}
            </select>
            <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 10 }}>Compare Pitcher:</span>
            <select value={selectedPitcherId} onChange={(e)=>setSelectedPitcherId(e.target.value)} style={styles.select}>
              <option value="">None</option>
              {pitcherOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            {DEV_TOOLS && (
              <button
                type="button"
                style={{ ...styles.btn, marginLeft: 8 }}
                onClick={() => {
                  const payload = {
                    version: PITCHING_BENCHMARKS_VERSION,
                    data: pitchingBenchmarksByLevel,
                  };
                  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'pitchingBenchmarksByLevel-export.json';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }}
              >
                Export JSON
              </button>
            )}
            <button
              type="button"
              style={{ ...styles.btn, marginLeft: 8 }}
              onClick={() => {
                // Build CSV from current table state
                const rowsOut = [];
                const header = [
                  'Pitch Type','Velocity (mph)','IVB (in)','HB (in)','Command',
                  'Player p50 Velo','Player p50 IVB','Player p50 HB',
                  'Delta Velo','Delta IVB','Delta HB',
                  'Velo %ile','IVB %ile','HB %ile'
                ];
                rowsOut.push(header);
                (sorted || []).forEach((r) => {
                  let player=null, dV=null, dI=null, dH=null, pV=null, pI=null, pH=null;
                  if (selectedPitcherId) {
                    player = getPlayerAgg(selectedPitcherId, r.key);
                    if (player) {
                      if (Number.isFinite(r.p50Velo) && Number.isFinite(player.p50Velo)) dV = player.p50Velo - r.p50Velo;
                      if (Number.isFinite(r.p50IVB) && Number.isFinite(player.p50IVB)) dI = player.p50IVB - r.p50IVB;
                      if (Number.isFinite(r.p50HB)  && Number.isFinite(player.p50HB))  dH = player.p50HB  - r.p50HB;
                      const vb = velBandToPcts(r.velo, r.p50Velo);
                      if (vb && Number.isFinite(player.p50Velo)) pV = Math.round(percentileFromBand(player.p50Velo, vb.p25, vb.p50, vb.p75));
                      const ib = ivbBandApprox(Number.isFinite(r.p50IVB)?r.p50IVB:r.ivb);
                      if (ib && Number.isFinite(player.p50IVB)) pI = Math.round(percentileFromBand(player.p50IVB, ib.p25, ib.p50, ib.p75));
                      const hb = hbBandApprox(Number.isFinite(r.p50HB)?r.p50HB:r.hb);
                      if (hb && Number.isFinite(player.p50HB)) pH = Math.round(percentileFromBand(player.p50HB, hb.p25, hb.p50, hb.p75));
                    }
                  }
                  rowsOut.push([
                    r.type,
                    fmtBand(r.velo),
                    fmtVal(r.ivb),
                    fmtVal(r.hb),
                    fmtVal(r.command),
                    player ? fmtNum(player.p50Velo,1) : '',
                    player ? fmtNum(player.p50IVB,1) : '',
                    player ? fmtNum(player.p50HB,1) : '',
                    dV!=null ? dV.toFixed(1) : '',
                    dI!=null ? dI.toFixed(1) : '',
                    dH!=null ? dH.toFixed(1) : '',
                    pV!=null ? String(pV) : '',
                    pI!=null ? String(pI) : '',
                    pH!=null ? String(pH) : ''
                  ]);
                });
                const csv = rowsOut.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                const pitcherLabel = selectedPitcherId ? (pitcherOptions.find(p=>p.value===selectedPitcherId)?.label || 'Player') : 'All';
                a.href = url;
                a.download = `pitching-benchmarks_${selectedLevel}_${pitcherLabel.replace(/\s+/g,'-')}.csv`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Data warnings (non-blocking) */}
        {warnings.length > 0 && (
          <div style={styles.warnWrap}>
            <div style={styles.warnBanner}>
              <span role="button" onClick={() => setWarnOpen(o=>!o)} style={styles.warnToggle}>
                Data warnings ({warnings.length}) {warnOpen ? '▾' : '▸'}
              </span>
              {warnOpen && (
                <ul style={styles.warnList}>
                  {warnings.map((w, idx) => (
                    <li key={`warn-${idx}`}>{w}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

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
                  {/* Player overlay */}
                  {selectedPitcherId && (() => {
                    const player = getPlayerAgg(selectedPitcherId, r.key);
                    if (!player) return null;
                    const dV = (FEATURE_BENCHMARK_BADGES && Number.isFinite(r.p50Velo) && Number.isFinite(player.p50Velo)) ? (player.p50Velo - r.p50Velo) : null;
                    const dI = (FEATURE_BENCHMARK_BADGES && Number.isFinite(r.p50IVB) && Number.isFinite(player.p50IVB)) ? (player.p50IVB - r.p50IVB) : null;
                    // Percentiles for cards: velo + ivb only
                    let pctV = null, pctI = null;
                    const vb = velBandToPcts(r.velo, r.p50Velo);
                    if (vb && Number.isFinite(player.p50Velo)) pctV = Math.round(percentileFromBand(player.p50Velo, vb.p25, vb.p50, vb.p75));
                    const ib = ivbBandApprox(Number.isFinite(r.p50IVB)?r.p50IVB:r.ivb);
                    if (ib && Number.isFinite(player.p50IVB)) pctI = Math.round(percentileFromBand(player.p50IVB, ib.p25, ib.p50, ib.p75));
                    return (
                      <div style={{ marginTop: 8, color:'var(--muted)', fontSize:12 }}>
                        <div>Player p50 Velo: {fmtNum(player.p50Velo, 1)} mph</div>
                        <div>Player p50 IVB: {fmtNum(player.p50IVB, 1)} in</div>
                        <div>Player p50 HB: {fmtNum(player.p50HB, 1)} in</div>
                        {(dV!=null || dI!=null) && (
                          <div style={{ marginTop:6 }}>
                            <span style={{ border:'1px solid rgba(255,255,255,0.18)', borderRadius:999, padding:'2px 6px' }}>
                              {dV!=null ? `ΔVelo ${sign(dV.toFixed(1))}` : ''}{(dV!=null && dI!=null)?' • ':''}{dI!=null ? `ΔIVB ${sign(dI.toFixed(1))}` : ''}
                            </span>
                          </div>
                        )}
                        {(pctV!=null || pctI!=null) && (
                          <div style={{ marginTop:6 }}>
                            <span style={styles.pctBadge}>
                              {pctV!=null ? `Velo ${pctV}th` : ''}{(pctV!=null && pctI!=null)?' • ':''}{pctI!=null ? `IVB ${pctI}th` : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })()}
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
                {selectedPitcherId && <th style={styles.th}>Player (p50)</th>}
                {selectedPitcherId && <th style={styles.th}>Δ vs {selectedLevel} p50</th>}
              </tr>
            </thead>
            <tbody>
              {(!levelData) ? (
                <tr><td style={styles.td} colSpan={selectedPitcherId?7:5}>No benchmark data available for this level.</td></tr>
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
                    {selectedPitcherId && (() => {
                      const player = getPlayerAgg(selectedPitcherId, r.key);
                      const playerCell = player ? `${fmtNum(player.p50Velo,1)} / ${fmtNum(player.p50IVB,1)} / ${fmtNum(player.p50HB,1)}` : '—';
                      const dV = (FEATURE_BENCHMARK_BADGES && Number.isFinite(r.p50Velo) && player && Number.isFinite(player.p50Velo)) ? (player.p50Velo - r.p50Velo) : null;
                      const dI = (FEATURE_BENCHMARK_BADGES && Number.isFinite(r.p50IVB) && player && Number.isFinite(player.p50IVB)) ? (player.p50IVB - r.p50IVB) : null;
                      const dH = (FEATURE_BENCHMARK_BADGES && Number.isFinite(r.p50HB) && player && Number.isFinite(player.p50HB)) ? (player.p50HB - r.p50HB) : null;
                      // Percentiles (table: include HB)
                      let pctV=null, pctI=null, pctH=null;
                      if (player) {
                        const vb = velBandToPcts(r.velo, r.p50Velo);
                        if (vb && Number.isFinite(player.p50Velo)) pctV = Math.round(percentileFromBand(player.p50Velo, vb.p25, vb.p50, vb.p75));
                        const ib = ivbBandApprox(Number.isFinite(r.p50IVB)?r.p50IVB:r.ivb);
                        if (ib && Number.isFinite(player.p50IVB)) pctI = Math.round(percentileFromBand(player.p50IVB, ib.p25, ib.p50, ib.p75));
                        const hb = hbBandApprox(Number.isFinite(r.p50HB)?r.p50HB:r.hb);
                        if (hb && Number.isFinite(player.p50HB)) pctH = Math.round(percentileFromBand(player.p50HB, hb.p25, hb.p50, hb.p75));
                      }
                      return (
                        <>
                          <td style={styles.td}>{playerCell}</td>
                          <td style={styles.td}>
                            {(dV!=null || dI!=null || dH!=null) ? (
                              <span style={{ color:'var(--muted)' }}>
                                {dV!=null ? `ΔVelo ${sign(dV.toFixed(1))}` : ''}
                                {(dV!=null && (dI!=null || dH!=null)) ? ' • ' : ''}
                                {dI!=null ? `ΔIVB ${sign(dI.toFixed(1))}` : ''}
                                {(dI!=null && dH!=null) ? ' • ' : ''}
                                {dH!=null ? `ΔHB ${sign(dH.toFixed(1))}` : ''}
                              </span>
                            ) : '—'}
                            {(pctV!=null || pctI!=null || pctH!=null) && (
                              <div style={{ marginTop:6 }}>
                                <span style={styles.pctBadge}>
                                  {pctV!=null ? `Velo ${pctV}th` : ''}
                                  {(pctV!=null && (pctI!=null || pctH!=null)) ? ' • ' : ''}
                                  {pctI!=null ? `IVB ${pctI}th` : ''}
                                  {(pctI!=null && pctH!=null) ? ' • ' : ''}
                                  {pctH!=null ? `HB ${pctH}th` : ''}
                                </span>
                              </div>
                            )}
                          </td>
                        </>
                      );
                    })()}
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
