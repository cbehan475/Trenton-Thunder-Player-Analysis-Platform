import React, { useEffect, useMemo, useState } from 'react';
import './PitchingLogsPage.css';
import { getBench, delta, BENCH_LEVEL, FEATURE_BENCHMARK_BADGES } from '../lib/benchmarks.js';
import { seedLogsByDate, getPitchersForDate, getInningsFor, getLogs } from '../data/logs/pitchingIndex.js';
// Import existing date modules to seed logs (keep in sync with PitchingLogsPage)
import pitching2025_06_04 from '../data/logs/pitching-2025-06-04.js';
import pitching2025_06_05 from '../data/logs/pitching-2025-06-05.js';
import pitching2025_06_06 from '../data/logs/pitching-2025-06-06.js';
import pitching2025_06_07 from '../data/logs/pitching-2025-06-07.js';
import pitching2025_06_08 from '../data/logs/pitching-2025-06-08.js';
import pitching2025_06_11 from '../data/logs/pitching-2025-06-11.js';
import pitching2025_06_12 from '../data/logs/pitching-2025-06-12.js';
import pitching2025_06_13 from '../data/logs/pitching-2025-06-13.js';
import pitching2025_06_14 from '../data/logs/pitching-2025-06-14.js';
import pitching2025_06_15 from '../data/logs/pitching-2025-06-15.js';
import pitching2025_06_18 from '../data/logs/pitching-2025-06-18.js';
import pitching2025_06_20 from '../data/logs/pitching-2025-06-20.js';
import pitching2025_06_21 from '../data/logs/pitching-2025-06-21.js';
import pitching2025_06_22 from '../data/logs/pitching-2025-06-22.js';
import pitching2025_06_24 from '../data/logs/pitching-2025-06-24.js';
import pitching2025_06_25 from '../data/logs/pitching-2025-06-25.js';
import pitching2025_06_26 from '../data/logs/pitching-2025-06-26.js';
import pitching2025_06_27 from '../data/logs/pitching-2025-06-27.js';
import pitching2025_06_28 from '../data/logs/pitching-2025-06-28.js';
import pitching2025_06_29 from '../data/logs/pitching-2025-06-29.js';
import pitching2025_07_01 from '../data/logs/pitching-2025-07-01.js';
import pitching2025_07_02 from '../data/logs/pitching-2025-07-02.js';
import pitching2025_07_03 from '../data/logs/pitching-2025-07-03.js';
import pitching2025_07_04 from '../data/logs/pitching-2025-07-04.js';
import pitching2025_07_05 from '../data/logs/pitching-2025-07-05.js';
import pitching2025_07_06 from '../data/logs/pitching-2025-07-06.js';
import pitching2025_07_08 from '../data/logs/pitching-2025-07-08.js';
import pitching2025_07_09 from '../data/logs/pitching-2025-07-09.js';
import pitching2025_07_11 from '../data/logs/pitching-2025-07-11.js';
import pitching2025_07_12 from '../data/logs/pitching-2025-07-12.js';

// Local, minimal tooltip (Pro Dark) scoped to this page only
const Tooltip = ({ content, children }) => {
  const wrap = {
    position:'relative', display:'inline-block'
  };
  const tip = {
    position:'absolute', zIndex: 1000, bottom:'125%', right: 0,
    background:'#1E293B', color:'#E5E7EB', border:'1px solid rgba(255,255,255,0.15)',
    borderRadius:8, padding:'8px 10px', fontSize:12, whiteSpace:'pre-line',
    boxShadow:'0 6px 16px rgba(0,0,0,0.5)', pointerEvents:'none', opacity:0, transform:'translateY(4px)', transition:'opacity 120ms ease, transform 120ms ease'
  };
  const arrow = {
    position:'absolute', top:'100%', right: 10, width:0, height:0,
    borderLeft:'6px solid transparent', borderRight:'6px solid transparent', borderTop:'6px solid #1E293B'
  };
  const show = {
    opacity:1, transform:'translateY(0)'
  };
  return (
    <span style={wrap}
      onMouseEnter={(e)=>{ const t=e.currentTarget.querySelector('.tt'); if (t) Object.assign(t.style, show); }}
      onMouseLeave={(e)=>{ const t=e.currentTarget.querySelector('.tt'); if (t) Object.assign(t.style, {opacity:0, transform:'translateY(4px)'}); }}
      onFocus={(e)=>{ const t=e.currentTarget.querySelector('.tt'); if (t) Object.assign(t.style, show); }}
      onBlur={(e)=>{ const t=e.currentTarget.querySelector('.tt'); if (t) Object.assign(t.style, {opacity:0, transform:'translateY(4px)'}); }}
    >
      {children}
      <span className="tt" style={tip} role="tooltip">
        {content}
        <span style={arrow} />
      </span>
    </span>
  );
};

// First-half dates (H1) using the same included files
const FIRST_HALF_DATES = [
  '2025-06-04','2025-06-05','2025-06-06','2025-06-07','2025-06-08','2025-06-11','2025-06-12','2025-06-13','2025-06-14','2025-06-15','2025-06-18','2025-06-20','2025-06-21','2025-06-22','2025-06-24','2025-06-25','2025-06-26','2025-06-27','2025-06-28','2025-06-29','2025-07-01','2025-07-02','2025-07-03','2025-07-04','2025-07-05','2025-07-06','2025-07-08','2025-07-09','2025-07-11','2025-07-12'
];

// Map dates to modules (local for this page)
const FIRST_HALF_MAP = {
  '2025-06-04': pitching2025_06_04,
  '2025-06-05': pitching2025_06_05,
  '2025-06-06': pitching2025_06_06,
  '2025-06-07': pitching2025_06_07,
  '2025-06-08': pitching2025_06_08,
  '2025-06-11': pitching2025_06_11,
  '2025-06-12': pitching2025_06_12,
  '2025-06-13': pitching2025_06_13,
  '2025-06-14': pitching2025_06_14,
  '2025-06-15': pitching2025_06_15,
  '2025-06-18': pitching2025_06_18,
  '2025-06-20': pitching2025_06_20,
  '2025-06-21': pitching2025_06_21,
  '2025-06-22': pitching2025_06_22,
  '2025-06-24': pitching2025_06_24,
  '2025-06-25': pitching2025_06_25,
  '2025-06-26': pitching2025_06_26,
  '2025-06-27': pitching2025_06_27,
  '2025-06-28': pitching2025_06_28,
  '2025-06-29': pitching2025_06_29,
  '2025-07-01': pitching2025_07_01,
  '2025-07-02': pitching2025_07_02,
  '2025-07-03': pitching2025_07_03,
  '2025-07-04': pitching2025_07_04,
  '2025-07-05': pitching2025_07_05,
  '2025-07-06': pitching2025_07_06,
  '2025-07-08': pitching2025_07_08,
  '2025-07-09': pitching2025_07_09,
  '2025-07-11': pitching2025_07_11,
  '2025-07-12': pitching2025_07_12,
};

export default function PitchTypeAnalysisPage() {
  // Seed logs once (non-destructive; keeps parity with logs page for any shared helpers)
  useEffect(() => {
    seedLogsByDate({ ...FIRST_HALF_MAP });
  }, []);

  // Build first-half aggregation per pitcher and dropdown options
  const { pitcherOptions, pitcherToRows } = useMemo(() => {
    const counts = new Map();
    const rowsByPitcher = new Map();
    for (const d of FIRST_HALF_DATES) {
      const day = FIRST_HALF_MAP[d];
      if (!day || typeof day !== 'object') continue;
      for (const [pName, byInning] of Object.entries(day)) {
        const collect = [];
        if (byInning && typeof byInning === 'object') {
          for (const inn of Object.keys(byInning)) {
            const arr = Array.isArray(byInning[inn]) ? byInning[inn] : [];
            for (const pitch of arr) {
              collect.push({ ...pitch, pitcher: pName, inning: Number(inn), type: pitch.type ?? pitch.pitchType });
            }
          }
        }
        if (!rowsByPitcher.has(pName)) rowsByPitcher.set(pName, []);
        rowsByPitcher.get(pName).push(...collect);
        counts.set(pName, (counts.get(pName) || 0) + collect.length);
      }
    }
    const names = Array.from(rowsByPitcher.keys());
    names.sort((a,b) => {
      const ca = counts.get(a) || 0;
      const cb = counts.get(b) || 0;
      if (cb !== ca) return cb - ca;
      return a.localeCompare(b);
    });
    return { pitcherOptions: names, pitcherToRows: rowsByPitcher };
  }, []);

  // Single control: pitcher selector
  const [pitcher, setPitcher] = useState('');
  useEffect(() => {
    if (!pitcher && pitcherOptions.length) setPitcher(pitcherOptions[0]);
  }, [pitcher, pitcherOptions]);

  // Data rows for selected pitcher across first half
  const rawRows = useMemo(() => (pitcher ? (pitcherToRows.get(pitcher) || []) : []), [pitcher, pitcherToRows]);

  // Optional pitch type filter driven by cards
  const [selectedType, setSelectedType] = useState(null);
  const filteredRows = useMemo(
    () => (selectedType ? rawRows.filter(r => (r.type || r.pitchType) === selectedType) : rawRows),
    [rawRows, selectedType]
  );

  // Utility: get canonical type
  const getType = (r) => r.type ?? r.pitchType ?? 'Unknown';

  // Aggregations by pitch type
  const byType = useMemo(() => {
    const map = new Map();
    for (const r of rawRows) {
      const t = getType(r);
      if (!map.has(t)) map.set(t, []);
      map.get(t).push(r);
    }
    return map;
  }, [rawRows]);

  const totalPitches = rawRows.length || 1; // avoid divide by zero

  // Stats helpers
  const mean = (arr) => (arr.length ? arr.reduce((a,b)=>a+b,0) / arr.length : 0);
  const pct = (num, den) => (den ? (num / den) * 100 : 0);

  // Color per type (stable palette)
  const TYPE_COLORS = useMemo(() => {
    const palette = [
      '#4FC3F7', '#FFD54F', '#81C784', '#BA68C8', '#FF8A65', '#F06292', '#A1887F', '#64B5F6', '#4DB6AC'
    ];
    const map = new Map();
    let i = 0;
    for (const t of byType.keys()) {
      map.set(t, palette[i % palette.length]);
      i++;
    }
    return map;
  }, [byType]);

  // Derived points for plots
  const movementPoints = useMemo(() => filteredRows.map(r => ({
    x: r.hb, y: r.ivb, t: getType(r), v: r.velo, s: r.spin, e: r.ext, res: r.result
  })).filter(p => p.x != null && p.y != null), [filteredRows]);

  const veloSpinPoints = useMemo(() => filteredRows.map(r => ({
    x: r.velo, y: r.spin, t: getType(r), v: r.velo, s: r.spin, e: r.ext, res: r.result
  })).filter(p => p.x != null && p.y != null), [filteredRows]);

  // Centroids by type
  const centroidsMovement = useMemo(() => {
    const res = [];
    for (const [t, arr] of byType.entries()) {
      const pts = arr.map(r => ({x:r.hb, y:r.ivb})).filter(p=>p.x!=null&&p.y!=null);
      if (!pts.length) continue;
      res.push({ t, x: mean(pts.map(p=>p.x)), y: mean(pts.map(p=>p.y)) });
    }
    return res;
  }, [byType]);

  const centroidsVeloSpin = useMemo(() => {
    const res = [];
    for (const [t, arr] of byType.entries()) {
      const pts = arr.map(r => ({x:r.velo, y:r.spin})).filter(p=>p.x!=null&&p.y!=null);
      if (!pts.length) continue;
      res.push({ t, x: mean(pts.map(p=>p.x)), y: mean(pts.map(p=>p.y)) });
    }
    return res;
  }, [byType]);

  // Scales for simple SVG plots
  const buildScale = (vals, padding=10) => {
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const span = max - min || 1;
    return {min, max, fn:(val, size)=>{
      return padding + ((val - min) / span) * (size - padding*2);
    }};
  };

  const Plot = ({ width=520, height=320, points, centroids, xLabel, yLabel, xKey, yKey }) => {
    const xs = points.map(p=>p.x);
    const ys = points.map(p=>p.y);
    if (!xs.length || !ys.length) return <div style={{color:'#cbd5e1', padding:12}}>No data</div>;
    const sx = buildScale(xs);
    const sy = buildScale(ys);
    return (
      <svg width={width} height={height} style={{ background:'rgba(255,255,255,0.05)', borderRadius:12 }}>
        {/* axes simple ticks */}
        <g>
          <line x1={40} y1={height-30} x2={width-10} y2={height-30} stroke="#88a" strokeWidth="1" />
          <line x1={40} y1={20} x2={40} y2={height-30} stroke="#88a" strokeWidth="1" />
          <text x={width/2} y={height-8} fill="#d1d5db" fontSize="12" textAnchor="middle">{xLabel}</text>
          <text x={16} y={16} fill="#d1d5db" fontSize="12">{yLabel}</text>
        </g>
        {/* points */}
        {points.map((p, i) => (
          <circle key={i} cx={sx.fn(p.x, width)} cy={height-30 - sy.fn(p.y, height-50)} r={4} fill={TYPE_COLORS.get(p.t) || '#999'}>
            <title>{`${p.t}\nVelo ${p.v?.toFixed?.(1) ?? ''} | Spin ${p.s ?? ''} | Ext ${p.e ?? ''}\n${xKey}: ${p.x} | ${yKey}: ${p.y}\n${p.res || ''}`}</title>
          </circle>
        ))}
        {/* centroids */}
        {centroids.map((c, i) => (
          <g key={`c-${i}`}>
            <rect x={sx.fn(c.x, width)-5} y={height-30 - sy.fn(c.y, height-50)-5} width={10} height={10} fill={TYPE_COLORS.get(c.t) || '#eee'} stroke="#000" strokeWidth="1" />
          </g>
        ))}
      </svg>
    );
  };

  // Card stats per type (from rawRows, unaffected by selectedType; clicking applies filter)
  const cards = useMemo(() => {
    const items = [];
    for (const [t, arr] of byType.entries()) {
      const pitches = arr.length;
      const denomWhiff = arr.filter(r => ['Swinging Strike','In Play','Foul'].includes(r.result)).length;
      const whiffs = arr.filter(r => r.result === 'Swinging Strike').length;
      const strikes = arr.filter(r => ['Called Strike','Swinging Strike'].includes(r.result)).length;
      const usage = pct(pitches, totalPitches);
      items.push({
        t,
        usage,
        veloAvg: mean(arr.map(r=>r.velo)),
        veloMax: Math.max(...arr.map(r=>r.velo || 0)),
        ivbAvg: mean(arr.map(r=>r.ivb)),
        hbAvg: mean(arr.map(r=>r.hb)),
        spinAvg: mean(arr.map(r=>r.spin)),
        extAvg: mean(arr.map(r=>r.ext)),
        whiff: pct(whiffs, denomWhiff),
        strike: pct(strikes, pitches),
      });
    }
    // Stable order by usage desc
    items.sort((a,b)=>b.usage - a.usage);
    return items;
  }, [byType, totalPitches]);

  // Outcomes table (respect selectedType via filteredRows)
  const tableRows = useMemo(() => {
    const groups = new Map();
    for (const r of filteredRows) {
      const t = getType(r);
      if (!groups.has(t)) groups.set(t, []);
      groups.get(t).push(r);
    }
    const out = [];
    for (const [t, arr] of groups.entries()) {
      const pitches = arr.length;
      const denomWhiff = arr.filter(r => ['Swinging Strike','In Play','Foul'].includes(r.result)).length;
      const whiffs = arr.filter(r => r.result === 'Swinging Strike').length;
      const strikes = arr.filter(r => ['Called Strike','Swinging Strike'].includes(r.result)).length;
      out.push({
        t,
        pitches,
        usage: pct(pitches, filteredRows.length || 1),
        whiff: pct(whiffs, denomWhiff),
        strike: pct(strikes, pitches),
        velo: mean(arr.map(r=>r.velo)),
        ivb: mean(arr.map(r=>r.ivb)),
        hb: mean(arr.map(r=>r.hb)),
        spin: mean(arr.map(r=>r.spin)),
        ext: mean(arr.map(r=>r.ext)),
      });
    }
    out.sort((a,b)=>b.pitches - a.pitches);
    return out;
  }, [filteredRows]);

  const toggleType = (t) => setSelectedType(prev => (prev === t ? null : t));

  return (
    <div className="pagePitchingLogs" style={{
      background: 'linear-gradient(180deg, #0A0C10 0%, #111827 100%)',
      minHeight: '100vh'
    }}>
      <h1>Pitch Type Analysis</h1>
      {FEATURE_BENCHMARK_BADGES && (
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop:-8, marginBottom:8 }}>
          <div style={{ fontSize: 12, color:'#94a3b8' }}>Δ vs {BENCH_LEVEL} p50</div>
        </div>
      )}

      {/* Controls: single Select Pitcher */}
      <div className="controls">
        <div className="field">
          <label className="gold">Select Pitcher</label>
          <select value={pitcher} onChange={(e)=>setPitcher(e.target.value)}>
            {pitcherOptions.map((name)=>(<option key={name} value={name}>{name}</option>))}
          </select>
        </div>
      </div>

      {/* Context */}
      <div className="plogs-context">
        <div className="ctx-left">{pitcher || '—'} • First Half</div>
        <div className="ctx-right">Pitches: {rawRows.length}</div>
      </div>

      {/* Empty state if no first-half data */}
      {(!rawRows.length) && (
        <section className="dataGridContainer tableShell" style={{ padding: 12, marginBottom: 14 }}>
          <div style={{ color:'#cbd5e1', padding:8 }}>No first-half data.</div>
        </section>
      )}

      {/* 1) Pitch Mix & Snapshot */}
      <section className="dataGridContainer tableShell" style={{ padding: 12, marginBottom: 14 }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
          {cards.map(c => (
            <button key={c.t} onClick={()=>toggleType(c.t)}
              style={{
                cursor:'pointer',
                minWidth: 240,
                borderRadius: 12,
                border: selectedType===c.t ? '1px solid #F5B301' : '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(0,0,0,0.25)',
                padding: '10px 12px',
                color: '#e9eef7',
                textAlign: 'left'
              }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
                <div style={{ fontWeight: 800, color: '#F5B301' }}>{c.t}</div>
                <div style={{ display:'flex', gap:6, alignItems:'center' }}>
                  {FEATURE_BENCHMARK_BADGES && (() => {
                    const b = getBench(BENCH_LEVEL, c.t);
                    const dv = b?.p50Velo != null ? delta(c.veloAvg, b.p50Velo) : null;
                    const di = b?.p50IVB != null ? delta(c.ivbAvg, b.p50IVB) : null;
                    const chipStyle = {
                      fontSize: 10,
                      color: '#cbd5e1',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: 999,
                      padding: '2px 6px',
                      background: 'rgba(255,255,255,0.04)'
                    };
                    return (
                      <>
                        {Number.isFinite(dv) && (
                          <Tooltip content={`Player: ${c.veloAvg.toFixed(1)} mph\n${BENCH_LEVEL} p50: ${b.p50Velo.toFixed?.(1) ?? b.p50Velo} mph\nΔVelo: ${dv >= 0 ? `+${dv.toFixed(1)}` : dv.toFixed(1)}`}>
                            <span style={chipStyle}>ΔVelo {dv >= 0 ? `+${dv.toFixed(1)}` : dv.toFixed(1)}</span>
                          </Tooltip>
                        )}
                        {Number.isFinite(di) && (
                          <Tooltip content={`Player: ${c.ivbAvg.toFixed(1)} in\n${BENCH_LEVEL} p50: ${b.p50IVB.toFixed?.(1) ?? b.p50IVB} in\nΔIVB: ${di >= 0 ? `+${di.toFixed(1)}` : di.toFixed(1)}`}>
                            <span style={chipStyle}>ΔIVB {di >= 0 ? `+${di.toFixed(1)}` : di.toFixed(1)}</span>
                          </Tooltip>
                        )}
                      </>
                    );
                  })()}
                  <div style={{ fontSize: 12, opacity: .9 }}>{c.usage.toFixed(1)}%</div>
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:6, marginTop:6, fontSize:12 }}>
                <div>Velo avg {c.veloAvg.toFixed(1)}</div>
                <div>Velo max {isFinite(c.veloMax) ? c.veloMax.toFixed(1) : '—'}</div>
                <div>Spin {c.spinAvg.toFixed(0)}</div>
                <div>IVB {c.ivbAvg.toFixed(1)}</div>
                <div>HB {c.hbAvg.toFixed(1)}</div>
                <div>Ext {c.extAvg.toFixed(1)}</div>
                <div>Whiff {c.whiff.toFixed(1)}%</div>
                <div>Strike {c.strike.toFixed(1)}%</div>
              </div>
            </button>
          ))}
          {!cards.length && (
            <div style={{ color:'#cbd5e1', padding:8 }}>No pitch data. Select a date and pitcher.</div>
          )}
        </div>
      </section>

      {/* 2) Movement Map */}
      {rawRows.length > 0 && (
        <section className="dataGridContainer tableShell" style={{ padding: 12, marginBottom: 14 }}>
          <div style={{ color:'#F5B301', fontWeight:800, margin:'4px 0 8px' }}>Movement Map (HB vs IVB)</div>
          <Plot width={720} height={360} points={movementPoints} centroids={centroidsMovement} xLabel="HB" yLabel="IVB" xKey="HB" yKey="IVB" />
        </section>
      )}

      {/* 3) Velo vs Spin */}
      {rawRows.length > 0 && (
        <section className="dataGridContainer tableShell" style={{ padding: 12, marginBottom: 14 }}>
          <div style={{ color:'#F5B301', fontWeight:800, margin:'4px 0 8px' }}>Velo vs Spin</div>
          <Plot width={720} height={360} points={veloSpinPoints} centroids={centroidsVeloSpin} xLabel="Velo" yLabel="Spin" xKey="Velo" yKey="Spin" />
        </section>
      )}

      {/* 4) Outcomes Table */}
      {rawRows.length > 0 && (
        <section className="dataGridContainer tableShell" style={{ padding: 12, marginBottom: 14 }}>
          <div style={{ color:'#F5B301', fontWeight:800, margin:'4px 0 8px' }}>Outcomes by Pitch Type</div>
          <div style={{ overflowX:'auto' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', color:'#e9eef7' }}>
              <thead>
                <tr style={{ background:'rgba(255,255,255,0.06)' }}>
                  {['Pitch Type','Pitches','Usage%','Whiff%','Strike%','Avg Velo','Avg IVB','Avg HB','Avg Spin','Avg Ext'].map(h => (
                    <th key={h} style={{ textAlign:'left', padding:'8px 10px', fontWeight:700, color:'#F5B301' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map(r => (
                  <tr key={r.t} style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
                    <td style={{ padding:'8px 10px', fontWeight:700 }}>{r.t}</td>
                    <td style={{ padding:'8px 10px' }}>{r.pitches}</td>
                    <td style={{ padding:'8px 10px' }}>{r.usage.toFixed(1)}%</td>
                    <td style={{ padding:'8px 10px' }}>{r.whiff.toFixed(1)}%</td>
                    <td style={{ padding:'8px 10px' }}>{r.strike.toFixed(1)}%</td>
                    <td style={{ padding:'8px 10px' }}>{r.velo.toFixed(1)}</td>
                    <td style={{ padding:'8px 10px' }}>{r.ivb.toFixed(1)}</td>
                    <td style={{ padding:'8px 10px' }}>{r.hb.toFixed(1)}</td>
                    <td style={{ padding:'8px 10px' }}>{r.spin.toFixed(0)}</td>
                    <td style={{ padding:'8px 10px' }}>{r.ext.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
