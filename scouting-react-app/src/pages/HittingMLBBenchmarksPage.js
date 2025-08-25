// src/pages/HittingMLBBenchmarksPage.js
import React, { useMemo, useState } from 'react';
import HITTERS_BY_DATE from '../data/logs/hittersByDate';
import HITTING_BENCHMARKS_BY_LEVEL, { HITTING_BENCHMARKS_VERSION, HITTING_BENCHMARKS_SOURCE } from '../data/hitting/benchmarksByLevel';
import OVERRIDES from '../data/overrides/battedBallMetricsOverrides';
import { flattenEventsFromByDateMap } from '../lib/battedBallMetrics';
import { computeHitterCoreP50 } from '../lib/hittingBenchmarks';

const gold = '#FFB800';

const styles = {
  wrap: { maxWidth: 1180, margin: '0 auto', padding: '28px 16px 36px' },
  headerRow: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 8 },
  title: { color: gold, fontSize: 36, fontWeight: 900, letterSpacing: 0.5, margin: 0 },
  sub: { color: 'var(--muted)', margin: '4px 0 18px 0' },
  meta: { color: 'var(--muted)', margin: '2px 0 16px 0', fontSize: 12 },
  controls: { display: 'inline-flex', gap: 8, alignItems: 'center', color: 'var(--text)' },
  select: { background:'#1e1e1e', color:'#ffffff', border:'1px solid rgba(255,255,255,0.25)', borderRadius:8, padding:'8px 12px', fontWeight:700 },
  cardsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14, alignItems: 'stretch' },
  card: () => ({
    background: 'var(--panel)', color: 'var(--text)', borderRadius: 12, padding: 14,
    border: '1px solid var(--panel-border)',
    boxShadow: '0 8px 18px rgba(0,0,0,0.35)',
    position: 'relative', transition: 'transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease',
  }),
  cardHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  cardName: { fontWeight: 900, color: gold, letterSpacing: 0.2 },
  badge: { display: 'inline-block', padding: '3px 8px', borderRadius: 999, background: 'rgba(255,184,0,0.12)', color: gold, fontWeight: 800, fontSize: 12 },
  pctBadge: { display: 'inline-block', padding: '2px 6px', borderRadius: 999, background: 'rgba(148,163,184,0.15)', color: 'var(--muted)', fontWeight: 800, fontSize: 11 },
  cardBodyRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', color: 'var(--text)', marginTop: 6 },
  small: { color: 'var(--muted)', fontSize: 12 },
  tableWrap: { marginTop: 16, overflowX: 'auto', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)' },
  table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 680 },
  th: { position: 'sticky', top: 0, background: 'rgba(10,18,30,0.65)', color: 'var(--text)', textAlign: 'left', fontWeight: 900, padding: '10px 12px', backdropFilter: 'blur(3px)' },
  td: { color: 'var(--text)', padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.07)' },
  footnote: { marginTop: 10, color: 'var(--muted)', fontSize: 12 },
};

const isName = (v) => typeof v === 'string' && !/^\d+$/.test(v);
const norm = (s) => (s || '').trim().replace(/\s+/g, ' ');
const normLower = (s) => norm(s).toLowerCase();

const METRICS = [
  { key: 'EV_AVG', label: 'Exit Velocity (Avg)', unit: 'mph' },
  { key: 'EV_MAX', label: 'Max EV', unit: 'mph' },
  { key: 'HARD_HIT_PCT', label: 'Hard-Hit %', unit: '%' },
  { key: 'LA_AVG', label: 'Launch Angle (Avg)', unit: '°' },
];

export default function HittingMLBBenchmarksPage() {
  // Level options and mapping for display
  const rawLevels = Object.keys(HITTING_BENCHMARKS_BY_LEVEL || {});
  const levelOptions = ['MLB','AAA','AA','APLUS'].filter(l => rawLevels.includes(l));
  const [selectedLevel, setSelectedLevel] = useState(levelOptions.includes('MLB') ? 'MLB' : (levelOptions[0] || 'MLB'));

  // Build union of hitters from events + overrides
  const allEvents = useMemo(() => flattenEventsFromByDateMap(HITTERS_BY_DATE), []);
  const allDates = useMemo(() => Object.keys(HITTERS_BY_DATE || {}).sort(), []);
  const dateRange = useMemo(() => {
    const start = allDates[0] || null;
    const end = allDates[allDates.length - 1] || start;
    return [start, end];
  }, [allDates]);

  const findCanonical = (name) => {
    const n = normLower(name);
    const fromEvents = allEvents.find(e => normLower(e.hitter) === n)?.hitter;
    const fromOverride = Object.keys(OVERRIDES).find(k => normLower(k) === n);
    return fromEvents ?? fromOverride ?? name;
  };

  const hitterOptions = useMemo(() => {
    const fromEvents = new Set(allEvents.map(e => normLower(e.hitter)));
    const fromOverrides = new Set(Object.keys(OVERRIDES).map(k => normLower(k)));
    const union = new Set([ ...fromEvents, ...fromOverrides ]);
    const canonicals = Array.from(union).map(n => findCanonical(n));
    const seen = new Set();
    const out = [];
    for (const c of canonicals) {
      const key = normLower(c);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(c);
    }
    return out.filter(isName).sort((a,b)=>a.localeCompare(b));
  }, [allEvents]);

  const [selectedHitter, setSelectedHitter] = useState('');

  const level = HITTING_BENCHMARKS_BY_LEVEL[selectedLevel] || {};

  const player = useMemo(() => {
    if (!selectedHitter) return null;
    return computeHitterCoreP50(HITTERS_BY_DATE, selectedHitter, dateRange);
  }, [selectedHitter, dateRange]);

  const fmtBand = (band, unit) => {
    if (!Array.isArray(band) || band.length !== 2) return '—';
    const [a,b] = band;
    if (a == null || b == null) return '—';
    return unit === '%'
      ? `${a.toFixed(1)}–${b.toFixed(1)} %`
      : unit === '°'
        ? `${a.toFixed(1)}–${b.toFixed(1)} °`
        : `${a.toFixed(1)}–${b.toFixed(1)} mph`;
  };
  const fmtVal = (v, unit) => v==null? '—' : (unit==='%'? `${v.toFixed(1)}%` : unit==='°'? `${v.toFixed(1)} °` : `${v.toFixed(1)}`);
  const sign = (v) => (v>0?`+${v}`:`${v}`);

  return (
    <div className={`mlb-benchmarks-page preset-pro-dark`}
      style={{
        '--bg-grad-top': '#0A0C10',
        '--bg-grad-bottom': '#111827',
        '--panel': 'rgba(20, 26, 36, 0.85)',
        '--panel-border': 'rgba(255, 184, 0, 0.18)',
        '--text': '#E5E7EB',
        '--muted': '#94A3B8',
        '--accent': gold,
        minHeight: '100vh',
        background: 'linear-gradient(180deg, var(--bg-grad-top) 0%, var(--bg-grad-bottom) 100%)',
      }}
    >
      <style>{`
        .mlb-benchmarks-page select { background-color: #1e1e1e; color: #ffffff; }
        .mlb-benchmarks-page select option { background-color: #1e1e1e; color: #ffffff; }
        .mlb-benchmarks-page select option:hover,
        .mlb-benchmarks-page select option:checked { background-color: #d4af37; color: #000000; }
      `}</style>
      <div style={styles.wrap}>
        {/* Header */}
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.title}>Hitters MLB Benchmarks</h1>
            <div style={styles.sub}>Core batted-ball references: Avg EV, Max EV, Hard-Hit %, Avg LA.</div>
            <div style={styles.meta}>
              Benchmarks: {selectedLevel} ranges • version {HITTING_BENCHMARKS_VERSION}
              <div style={{ marginTop: 4 }}>
                <span style={{ color:'var(--muted)' }}>Source: {HITTING_BENCHMARKS_SOURCE}</span>
              </div>
            </div>
          </div>
          {/* Controls */}
          <div style={styles.controls} aria-label="Level Selector">
            <span style={{ fontSize: 12, color: 'var(--muted)' }}>Level:</span>
            <select value={selectedLevel} onChange={(e)=>setSelectedLevel(e.target.value)} style={styles.select} aria-label="Level">
              {levelOptions.map((lvl) => (
                <option key={lvl} value={lvl}>{lvl === 'APLUS' ? 'A+' : lvl}</option>
              ))}
            </select>
            <span style={{ fontSize: 12, color: 'var(--muted)', marginLeft: 10 }}>Compare Hitter:</span>
            <select value={selectedHitter} onChange={(e)=>setSelectedHitter(e.target.value)} style={styles.select} aria-label="Compare Hitter">
              <option value="">None</option>
              {hitterOptions.map(name => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cards */}
        <div style={styles.cardsGrid}>
          {METRICS.map(m => {
            const row = level[m.key] || {};
            const u = m.unit;
            const playerVal = player ? (
              m.key === 'EV_AVG' ? player.evAvg :
              m.key === 'EV_MAX' ? player.evMax :
              m.key === 'HARD_HIT_PCT' ? player.hardHitPct :
              player.laAvg
            ) : null;
            const delta = (playerVal!=null && row.p50!=null) ? +(playerVal - row.p50).toFixed(1) : null;
            return (
              <div key={m.key} style={styles.card()}
                   onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 24px rgba(0,0,0,0.45)'; }}
                   onMouseLeave={(e)=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 8px 18px rgba(0,0,0,0.35)'; }}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardName}>{m.label}</div>
                  <span style={styles.badge}>{selectedLevel === 'APLUS' ? 'A+' : selectedLevel}</span>
                </div>
                <div style={styles.cardBodyRow}><span className="lbl" style={styles.small}>Level Range</span><span>{fmtBand(row.range, u)}</span></div>
                <div style={styles.cardBodyRow}><span className="lbl" style={styles.small}>Level p50</span><span>{fmtVal(row.p50, u)}</span></div>
                {player && (
                  <>
                    <div style={styles.cardBodyRow}><span className="lbl" style={styles.small}>Player (p50)</span><span>{fmtVal(playerVal, u)}</span></div>
                    <div style={{ marginTop:6 }}>
                      <span style={styles.pctBadge}>{delta!=null ? `Δ vs Level ${sign(delta)}` : '—'}</span>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div style={styles.tableWrap}>
          <table aria-label="Hitters MLB Benchmarks" style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Metric</th>
                <th style={styles.th}>Level Range</th>
                <th style={styles.th}>Level p50</th>
                {selectedHitter && <th style={styles.th}>Player (p50)</th>}
                {selectedHitter && <th style={styles.th}>Δ vs {selectedLevel==='APLUS'?'A+':selectedLevel} p50</th>}
              </tr>
            </thead>
            <tbody>
              {METRICS.map(m => {
                const r = level[m.key] || {};
                const u = m.unit;
                const playerVal = player ? (
                  m.key === 'EV_AVG' ? player.evAvg :
                  m.key === 'EV_MAX' ? player.evMax :
                  m.key === 'HARD_HIT_PCT' ? player.hardHitPct :
                  player.laAvg
                ) : null;
                const delta = (playerVal!=null && r.p50!=null) ? +(playerVal - r.p50).toFixed(1) : null;
                return (
                  <tr key={`row-${m.key}`}>
                    <th style={styles.td} scope="row">{m.label}</th>
                    <td style={styles.td}>{fmtBand(r.range, u)}</td>
                    <td style={styles.td}>{fmtVal(r.p50, u)}</td>
                    {selectedHitter && <td style={styles.td}>{fmtVal(playerVal, u)}</td>}
                    {selectedHitter && <td style={styles.td}>{delta!=null ? sign(delta) : '—'}</td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={styles.footnote}>
          These are read-only directional references; p50 approximations use available event and override data.
        </div>
      </div>
    </div>
  );
}
