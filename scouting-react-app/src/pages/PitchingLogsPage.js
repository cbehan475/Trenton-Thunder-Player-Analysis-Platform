import React, { useMemo, useState, useEffect } from 'react';
import { seedLogsByDate, getPitchersForDate, getInningsFor, getLogs } from '../data/logs/pitchingIndex.js';
import './PitchingLogsPage.css';
import AppSelect from '../components/ui/AppSelect.jsx';
import { getBench, delta, BENCH_LEVEL, FEATURE_BENCHMARK_BADGES } from '../lib/benchmarks.js';
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

// Pitch family helpers for chip colors + short codes
const pitchFamily = (t) => {
  const s = String(t || '').toLowerCase();
  if (!s) return 'other';
  if (s.includes('four') || s.includes('ff') || s.includes('fast')) return 'fastball';
  if (s.includes('sinker') || s === 'si') return 'fastball';
  if (s.includes('cutter') || s === 'ct') return 'fastball';
  if (s.includes('slider') || s === 'sl' || s.includes('sweeper')) return 'breaking';
  if (s.includes('curve') || s === 'cu') return 'breaking';
  if (s.includes('change')) return 'offspeed';
  return 'other';
};
const pitchShort = (t) => {
  const s = String(t || '').toLowerCase();
  if (s.includes('four') || s.includes('fast')) return 'FF';
  if (s.includes('sinker')) return 'SI';
  if (s.includes('cutter')) return 'CT';
  if (s.includes('slider')) return 'SL';
  if (s.includes('sweeper')) return 'SW';
  if (s.includes('curve')) return 'CU';
  if (s.includes('change')) return 'CH';
  return (t && t.length > 0) ? t[0].toUpperCase() : '—';
};
const chipStyle = (fam) => {
  const base = { display:'inline-flex', alignItems:'center', gap:6, padding:'3px 8px', borderRadius:999, fontSize:12, fontWeight:700 };
  const map = {
    fastball: { background:'#1c3a72', color:'#b8d2ff', border:'1px solid rgba(117,169,255,.35)' },
    breaking: { background:'#5a1c1c', color:'#ffb4b4', border:'1px solid rgba(255,120,120,.35)' },
    offspeed: { background:'#1c5a3a', color:'#b4ffcf', border:'1px solid rgba(120,255,180,.35)' },
    other:    { background:'#3f3f46', color:'#e4e4e7', border:'1px solid rgba(255,255,255,.18)' },
  };
  return { ...base, ...(map[fam] || map.other) };
};

// Local, minimal tooltip (Pro Dark) scoped to this page only
const Tooltip = ({ content, children }) => {
  const wrap = { position:'relative', display:'inline-block' };
  const tip = {
    position:'absolute', zIndex:1000, bottom:'125%', right:0,
    background:'#1E293B', color:'#E5E7EB', border:'1px solid rgba(255,255,255,0.15)',
    borderRadius:8, padding:'8px 10px', fontSize:12, whiteSpace:'pre-line',
    boxShadow:'0 6px 16px rgba(0,0,0,0.5)', pointerEvents:'none', opacity:0, transform:'translateY(4px)', transition:'opacity 120ms ease, transform 120ms ease'
  };
  const arrow = {
    position:'absolute', top:'100%', right:10, width:0, height:0,
    borderLeft:'6px solid transparent', borderRight:'6px solid transparent', borderTop:'6px solid #1E293B'
  };
  const show = { opacity:1, transform:'translateY(0)' };
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

const GAME_DATES = [
  '2025-06-04',
  '2025-06-05',
  '2025-06-06',
  '2025-06-07',
  '2025-06-08',
  '2025-06-11',
  '2025-06-12',
  '2025-06-13',
  '2025-06-14',
  '2025-06-15',
  '2025-06-18',
  '2025-06-20',
  '2025-06-21',
  '2025-06-22',
  '2025-06-24',
  '2025-06-25',
  '2025-06-26',
  '2025-06-27',
  '2025-06-28',
  '2025-06-29',
  '2025-07-01',
  '2025-07-02',
  '2025-07-03',
  '2025-07-04',
  '2025-07-05',
  '2025-07-06',
  '2025-07-08',
  '2025-07-09',
  '2025-07-11',
  '2025-07-12',
];

const pitchingLogsMap = {
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

export default function PitchingLogsPage() {
  // State per spec
  const [dateStr, setDateStr] = useState(GAME_DATES[0]);
  const [pitcher, setPitcher] = useState('');
  const [inning, setInning] = useState('All');
  const [pitcherOptions, setPitcherOptions] = useState([]);
  const [inningOptions, setInningOptions] = useState(['All']);

  // Seed date → rows map on mount using existing modules
  useEffect(() => {
    seedLogsByDate({
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
    });
  }, []);

  // Refresh pitcher options when date changes; reset pitcher and inning
  useEffect(() => {
    const names = getPitchersForDate(dateStr);
    const preferred = [
      'Miguel Sime',
      'Jude Abbadessa',
      'Jarrette Bonet',
      'Andrew Ronne',
    ];
    const order = new Map(preferred.map((n, i) => [n, i]));
    const sorted = names.slice().sort((a, b) => {
      const ia = order.has(a) ? order.get(a) : Number.POSITIVE_INFINITY;
      const ib = order.has(b) ? order.get(b) : Number.POSITIVE_INFINITY;
      if (ia !== ib) return ia - ib;
      return a.localeCompare(b);
    });
    setPitcherOptions(sorted);
    setPitcher('');
    setInning('All');
    setInningOptions(['All']);
  }, [dateStr]);

  // Refresh inning options when date or pitcher changes; default to All if needed
  useEffect(() => {
    const inns = getInningsFor(dateStr, pitcher);
    setInningOptions(inns);
    if (!inns.includes(inning)) setInning('All');
  }, [dateStr, pitcher]);

  // Rows from single source of truth
  const rawRows = useMemo(() => getLogs(dateStr, pitcher, inning), [dateStr, pitcher, inning]);
  const rowsCount = rawRows.length;

  // Group by consecutive batter within inning (At-Bat groups)
  const abGroups = useMemo(() => {
    const groups = [];
    let current = null;
    for (let i = 0; i < rawRows.length; i++) {
      const r = rawRows[i];
      const inn = r.inning;
      const bat = r.batter || 'Unknown Batter';
      const type = r.type ?? r.pitchType ?? r.pitch ?? '—';
      const startNew = !current || current.inning !== inn || current.batter !== bat;
      if (startNew) {
        if (current) groups.push(current);
        current = { id: `${inn}-${bat}-${i}`, inning: inn, batter: bat, rows: [], startIndex: i };
      }
      current.rows.push({
        id: r.id ?? `${inn}-${bat}-${i}`,
        pitchIndex: i + 1,
        type,
        velo: r.velo,
        spin: r.spin,
        ext: r.ext,
        ivb: r.ivb,
        hb: r.hb,
        result: r.result,
      });
    }
    if (current) groups.push(current);
    return groups;
  }, [rawRows]);

  // Expanded state per group
  const [openIds, setOpenIds] = useState(() => new Set());
  useEffect(() => {
    // Expand all by default when filters change
    const all = new Set(abGroups.map(g => g.id));
    setOpenIds(all);
  }, [dateStr, pitcher, inning]);
  const toggleGroup = (id) => setOpenIds(prev => {
    const n = new Set(prev);
    if (n.has(id)) n.delete(id); else n.add(id);
    return n;
  });

  // Season aggregates per type (for tooltip deltas)
  const seasonAggByType = useMemo(() => {
    const map = new Map();
    if (!pitcher) return map;
    const push = (t, r) => {
      if (!t) return;
      if (!map.has(t)) map.set(t, []);
      map.get(t).push(r);
    };
    for (const d of GAME_DATES) {
      const day = pitchingLogsMap[d];
      if (!day) continue;
      const byInning = day[pitcher];
      if (!byInning) continue;
      for (const inn of Object.keys(byInning)) {
        const arr = Array.isArray(byInning[inn]) ? byInning[inn] : [];
        for (const r of arr) push(r.type ?? r.pitchType, r);
      }
    }
    const mean = (arr) => (arr.length ? arr.reduce((a,b)=>a+b,0)/arr.length : NaN);
    const out = new Map();
    for (const [t, arr] of map.entries()) {
      out.set(t, {
        veloAvg: mean(arr.map(r=>r.velo).filter(v=>Number.isFinite(v))),
        ivbAvg: mean(arr.map(r=>r.ivb).filter(v=>Number.isFinite(v))),
      });
    }
    return out;
  }, [pitcher]);

  // Sidebar summary (filtered rows only)
  const sidebar = useMemo(() => {
    const counts = new Map();
    const velos = new Map();
    for (const r of rawRows) {
      const t = r.type ?? r.pitchType ?? r.pitch ?? '—';
      counts.set(t, (counts.get(t) || 0) + 1);
      if (Number.isFinite(r.velo)) {
        if (!velos.has(t)) velos.set(t, []);
        velos.get(t).push(r.velo);
      }
    }
    const entries = Array.from(counts.entries()).sort((a,b)=>{
      const af = pitchFamily(a[0]) === 'fastball' ? 0 : 1;
      const bf = pitchFamily(b[0]) === 'fastball' ? 0 : 1;
      if (af !== bf) return af - bf;
      return b[1] - a[1];
    }).map(([t, c]) => {
      const v = velos.get(t) || [];
      const avg = v.length ? (v.reduce((s,n)=>s+n,0)/v.length) : null;
      return { t, c, avg };
    });
    const total = rawRows.length;
    return { entries, total };
  }, [rawRows]);

  return (
    <div className="pagePitchingLogs">
      <h1>Pitching Logs</h1>
      {FEATURE_BENCHMARK_BADGES && (
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop:-8, marginBottom:8 }}>
          <div style={{ fontSize: 12, color:'#94a3b8' }}>Δ vs {BENCH_LEVEL} p50</div>
        </div>
      )}

      <div className="controls">
        <div className="field">
          <label className="gold">Date</label>
          <input
            type="date"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="gold">Select Pitcher</label>
          <AppSelect
            value={pitcher}
            onChange={(e) => setPitcher(e.target.value)}
            options={pitcherOptions}
            label=""
            formSx={{ minWidth: 220 }}
          />
        </div>

        <div className="field">
          <label className="gold inningLabel">Inning</label>
          <AppSelect
            value={inning}
            onChange={(e) => setInning(e.target.value)}
            options={ inningOptions.map(v => (typeof v === 'number' ? String(v) : v)) }
            disabled={!pitcher && inningOptions.length <= 1}
            label=""
            formSx={{ minWidth: 140 }}
          />
        </div>
      </div>

      <div className="plogs-context">
        <div className="ctx-left">
          {pitcher || '—'} • {dateStr || '—'} • {inning && inning !== 'All' ? `Inning ${inning}` : 'All innings'}
        </div>
        <div className="ctx-right">Pitches: {rowsCount}</div>
      </div>

      <div className="plogs-layout">
        <section className="plogs-groups">
          {!rowsCount && pitcher && (
            <div className="empty">
              <div>No results. Adjust filters above.</div>
              <div className="sub">Try a different date, pitcher, or inning.</div>
            </div>
          )}

          {abGroups.map((g) => {
            const last = g.rows[g.rows.length - 1];
            const outcome = last?.result || '—';
            const pitches = g.rows.length;
            const header = `Inning ${g.inning} • ${g.batter}`;
            const open = openIds.has(g.id);
            return (
              <div key={g.id} className={`ab-group ${open ? 'open' : 'closed'}`}>
                <div className="ab-header" onClick={()=>toggleGroup(g.id)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' ') toggleGroup(g.id); }}>
                  <div className="ab-left">
                    <span className="caret">{open ? '▾' : '▸'}</span>
                    <span className="ab-title">{header}</span>
                  </div>
                  <div className="ab-right">
                    <span className="ab-summary">{pitches} pitches • Result: {outcome}</span>
                  </div>
                </div>

                {open && (
                  <div className="ab-body">
                    <div className="ab-table">
                      <div className="ab-row ab-head">
                        <div className="col col-idx">#</div>
                        <div className="col col-type">Type</div>
                        <div className="col col-num">Velo</div>
                        <div className="col col-num">Spin</div>
                        <div className="col col-num">Ext</div>
                        <div className="col col-num">IVB</div>
                        <div className="col col-num">HB</div>
                        <div className="col col-res">Result</div>
                      </div>
                      {g.rows.map((r, i) => {
                        const fam = pitchFamily(r.type);
                        const short = pitchShort(r.type);
                        const agg = seasonAggByType.get(r.type);
                        const b = getBench(BENCH_LEVEL, r.type);
                        const dv = b?.p50Velo != null && Number.isFinite(agg?.veloAvg) ? delta(agg.veloAvg, b.p50Velo) : null;
                        const di = b?.p50IVB != null && Number.isFinite(agg?.ivbAvg) ? delta(agg.ivbAvg, b.p50IVB) : null;
                        const benchText = (
                          <span style={{ color:'#94a3b8' }}>
                            {Number.isFinite(dv) ? `ΔV ${dv>=0?`+${dv.toFixed(1)}`:dv.toFixed(1)}`: ''}
                            {Number.isFinite(dv) && Number.isFinite(di) ? ' • ' : ''}
                            {Number.isFinite(di) ? `ΔIVB ${di>=0?`+${di.toFixed(1)}`:di.toFixed(1)}`: ''}
                          </span>
                        );
                        const parts = [];
                        if (Number.isFinite(agg?.veloAvg) && Number.isFinite(b?.p50Velo) && Number.isFinite(dv)) {
                          parts.push(`Velo\nPlayer: ${agg.veloAvg.toFixed(1)} mph\n${BENCH_LEVEL} p50: ${b.p50Velo.toFixed?.(1) ?? b.p50Velo} mph\nΔVelo: ${dv>=0?`+${dv.toFixed(1)}`:dv.toFixed(1)}`);
                        }
                        if (Number.isFinite(agg?.ivbAvg) && Number.isFinite(b?.p50IVB) && Number.isFinite(di)) {
                          parts.push(`IVB\nPlayer: ${agg.ivbAvg.toFixed(1)} in\n${BENCH_LEVEL} p50: ${b.p50IVB.toFixed?.(1) ?? b.p50IVB} in\nΔIVB: ${di>=0?`+${di.toFixed(1)}`:di.toFixed(1)}`);
                        }
                        const tipContent = parts.join('\n\n');
                        return (
                          <div key={r.id || i} className={`ab-row ${i % 2 ? 'odd' : 'even'}`}>
                            <div className="col col-idx">{r.pitchIndex}</div>
                            <div className="col col-type">
                              <Tooltip content={r.type}>
                                <span className="chip" style={chipStyle(fam)}>
                                  <span className="dot" style={{ width:8, height:8, borderRadius:999, background: chipStyle(fam).color, opacity:.9 }} />
                                  {short}
                                </span>
                              </Tooltip>
                            </div>
                            <div className="col col-num">{Number.isFinite(r.velo) ? r.velo.toFixed(1) : '—'}</div>
                            <div className="col col-num">{Number.isFinite(r.spin) ? Math.round(r.spin) : '—'}</div>
                            <div className="col col-num">{Number.isFinite(r.ext) ? r.ext.toFixed(1) : '—'}</div>
                            <div className="col col-num">{Number.isFinite(r.ivb) ? r.ivb.toFixed(1) : '—'}</div>
                            <div className="col col-num">{Number.isFinite(r.hb) ? r.hb.toFixed(1) : '—'}</div>
                            <div className="col col-res">
                              <span title={r.result || ''} className="truncate">{r.result || '—'}</span>
                              {FEATURE_BENCHMARK_BADGES && tipContent && (
                                <Tooltip content={tipContent}><span className="bench-note"> {benchText}</span></Tooltip>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        <aside className="gameSummary">
          <div className="gs-title">Game Summary</div>
          <div className="gs-sub">Filters: {pitcher || '—'} • {dateStr || '—'} • {inning && inning !== 'All' ? `Inning ${inning}` : 'All'}</div>
          <div className="gs-total">Total Pitches: <strong>{sidebar.total}</strong></div>
          <div className="gs-list">
            {sidebar.entries.map((e) => {
              const fam = pitchFamily(e.t);
              return (
                <div key={e.t} className="gs-item">
                  <span className="chip" style={chipStyle(fam)} title={e.t}>{pitchShort(e.t)}</span>
                  <span className="gs-count">{e.c}</span>
                  <span className="gs-avg">{Number.isFinite(e.avg) ? `${e.avg.toFixed(1)} mph` : '—'}</span>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}