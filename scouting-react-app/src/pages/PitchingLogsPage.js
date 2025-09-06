import React, { useMemo, useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Divider, Paper, Chip, LinearProgress, Button } from '@mui/material';
import { seedLogsByDate, getPitchersForDate, getInningsFor, getLogs } from '../data/logs/pitchingIndex.js';
import './PitchingLogsPage.css';
import AppSelect from '../components/ui/AppSelect.jsx';
import { getBench, delta, BENCH_LEVEL, FEATURE_BENCHMARK_BADGES } from '../lib/benchmarks.js';
import { getLogs as getAggLogs, summarizeSession as summarizeAggSession } from '../utils/pitchingAggregates';
import dataFirstHalf from '../data/arsenals/firstHalf.json';
import { buildArsenalMap } from '../lib/arsenalMap.js';
import { mapPitchLabel, normalizePitchLabel } from '../lib/pitchLabel.js';
import { classifyPitch, constrainedSuggest, verifyShape } from '../lib/pitchHeuristics.js';
import { updateOuting } from '../lib/reviewCache.js';
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
  if (s.includes('slider') || s === 'sl' || s.includes('sweeper') || s === 'sw') return 'breaking';
  if (s.includes('curve') || s === 'cu' || s === 'cb') return 'breaking';
  if (s.includes('change') || s === 'ch') return 'offspeed';
  if (s.includes('split') || s === 'spl' || s === 'fs') return 'offspeed';
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

 // --- Pro layout helpers (cards/tiles/sparkline) ---
 function Section({ title, right, children }) {
   return (
     <Card style={{ marginBottom: 12 }}>
       <CardContent>
         <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={1}>
           <Typography variant="h6" style={{ fontWeight: 700 }}>{title}</Typography>
           {right}
         </Box>
         <Divider style={{ marginBottom: 12 }} />
         {children}
       </CardContent>
     </Card>
   );
 }
 function Tile({ label, value, sub }) {
   return (
     <Paper elevation={1} style={{ padding: 12, textAlign: 'center' }}>
       <Typography variant="h6" style={{ fontWeight: 700 }}>{value ?? '—'}</Typography>
       <Typography variant="body2" style={{ opacity: 0.8 }}>{label}</Typography>
       {sub && <Typography variant="caption" style={{ opacity: 0.7 }}>{sub}</Typography>}
     </Paper>
   );
 }
 function Sparkline({ data, width=240, height=48 }) {
   const pts = (data||[]).filter(d=>d.v!=null);
   if (!pts.length) return <Typography variant="caption" style={{opacity:.7}}>no velo trend</Typography>;
   const xMin = Math.min(...pts.map(d=>d.inning)), xMax = Math.max(...pts.map(d=>d.inning));
   const yMin = Math.min(...pts.map(d=>d.v)), yMax = Math.max(...pts.map(d=>d.v));
   const sx = (x) => xMax===xMin ? width/2 : ((x - xMin) / (xMax - xMin)) * (width-8) + 4;
   const sy = (y) => yMax===yMin ? height/2 : height - ((y - yMin) / (yMax - yMin)) * (height-8) - 4;
   const path = pts.map((p,i)=> `${i?'L':'M'}${sx(p.inning)},${sy(p.v)}`).join(' ');
   return (
     <svg width={width} height={height} role="img" aria-label="Average velo by inning">
       <path d={path} fill="none" stroke="currentColor" strokeWidth="2" />
       {pts.map((p,i)=> <circle key={i} cx={sx(p.inning)} cy={sy(p.v)} r="2"/>) }
     </svg>
   );
 }

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
  const [compact, setCompact] = useState(false);
  const [showExt, setShowExt] = useState(false);
  const [useVerified, setUseVerified] = useState(true);

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

  // --- Pro summary from dependency-free aggregator ---
  const aggRows = useMemo(() => (dateStr && pitcher ? getAggLogs(dateStr, pitcher, inning) : []), [dateStr, pitcher, inning]);
  const aggSum = useMemo(() => (aggRows.length ? summarizeAggSession(aggRows) : null), [aggRows]);
  const usage = aggSum?.usage || [];
  const PrintButton = <Button variant="outlined" onClick={()=>window.print()}>Print Report</Button>;

  // Build arsenal map and name->playerId lookup
  const arsenalRows = dataFirstHalf;
  const arsenalMap = useMemo(() => buildArsenalMap(arsenalRows), [arsenalRows]);
  const nameToPid = useMemo(() => {
    const m = new Map();
    const arr = Array.isArray(arsenalRows) ? arsenalRows : [];
    for (const r of arr) {
      if (r?.name && r?.playerId) m.set(r.name, r.playerId);
    }
    return m;
  }, [arsenalRows]);
  const selectedPitcherId = useMemo(() => nameToPid.get(pitcher) || null, [nameToPid, pitcher]);

  // Compute FF velo avg independent of toggle using normalized raw labels
  const fbVeloAvg = useMemo(() => {
    const vels = [];
    for (const r of rawRows) {
      const rawT = r.type ?? r.pitchType ?? r.pitch ?? '—';
      const code = normalizePitchLabel(rawT).code;
      if (code === 'FF' && Number.isFinite(r.velo)) vels.push(r.velo);
    }
    if (!vels.length) return null;
    return vels.reduce((a,b)=>a+b,0)/vels.length;
  }, [rawRows]);

  // Group by consecutive batter within inning (At-Bat groups)
  const abGroups = useMemo(() => {
    const groups = [];
    let current = null;
    for (let i = 0; i < rawRows.length; i++) {
      const r = rawRows[i];
      const inn = r.inning ?? r.inn ?? '?';
      const bat = r.batter ?? r.hitter ?? 'Unknown';
      const type = r.pitchType ?? r.type ?? r.pitch ?? '—';
      const startNew = !current || current.inning !== inn || current.batter !== bat;
      if (startNew) {
        if (current) groups.push(current);
        current = { id: `${inn}-${bat}-${i}`, inning: inn, batter: bat, rows: [], startIndex: i };
      }
      current.rows.push({
        id: `${inn}-${bat}-${i}`,
        // pitch number strictly within the AB
        pitchIndex: current.rows.length + 1,
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
    // Dev-only sanity: ensure counts align
    if (process.env.NODE_ENV !== 'production') {
      const src = rawRows.length;
      const rendered = groups.reduce((a,g)=>a + g.rows.length, 0);
      if (src !== rendered) {
        // eslint-disable-next-line no-console
        console.warn('[PitchingLogs] Row count mismatch', { date: dateStr, pitcher, inning, src, rendered });
      }
    }
    return groups;
  }, [rawRows, dateStr, pitcher, inning]);

  // Expanded state per group (collapsed by default)
  const [openIds, setOpenIds] = useState(() => new Set());
  useEffect(() => {
    // Collapse all on filter change (default collapsed)
    setOpenIds(new Set());
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
    const veloList = new Map();
    let strikes = 0; // called + fouls (treating fouls as strikes)
    let swings = 0; let whiffs = 0; let fouls = 0; let inPlay = 0;
    let firstPitches = 0; let firstPitchStrikes = 0;
    let hardHits = 0; let anyEV = false;

    // helper to classify result strings
    const isStrike = (res) => {
      const s = String(res || '').toLowerCase();
      return s.includes('strike') || s.includes('foul');
    };
    const isSwingingStrike = (res) => {
      const s = String(res || '').toLowerCase();
      return s.includes('swinging strike') || s.includes('whiff');
    };
    const isFoul = (res) => String(res || '').toLowerCase().includes('foul');
    const isInPlay = (res) => {
      const s = String(res || '').toLowerCase();
      return s.includes('in play') || s.includes('put in play') || s.includes('ball in play') || s.includes('bip');
    };

    // per type aggregation
    for (const r of rawRows) {
      const rawT = r.type ?? r.pitchType ?? r.pitch ?? '—';
      const mapped = useVerified ? mapPitchLabel(rawT, selectedPitcherId, arsenalMap) : { code: rawT, inArsenal: true };
      let t = mapped.code;
      // If using verified labels, prefer constrained classifier suggestion for roll-up
      if (useVerified && selectedPitcherId) {
        const allowed = arsenalMap[selectedPitcherId]?.allowed || null;
        const suggested = constrainedSuggest({ velo: r.velo, ivb: r.ivb, hb: r.hb, spin: r.spin, fbVeloAvg, allowed });
        if (suggested) t = suggested;
      }
      counts.set(t, (counts.get(t) || 0) + 1);
      if (Number.isFinite(r.velo)) {
        if (!veloList.has(t)) veloList.set(t, []);
        veloList.get(t).push(r.velo);
      }
      if (isStrike(r.result)) strikes++;
      if (isFoul(r.result)) { fouls++; swings++; }
      if (isInPlay(r.result)) { inPlay++; swings++; }
      if (isSwingingStrike(r.result)) { whiffs++; swings++; }
      if (Number.isFinite(r.ev)) { anyEV = true; if (r.ev >= 95) hardHits++; }
    }

    // first-pitch strike from AB groups
    for (const g of abGroups) {
      if (!g.rows.length) continue;
      firstPitches++;
      if (isStrike(g.rows[0].result)) firstPitchStrikes++;
    }

    const entries = Array.from(counts.entries()).sort((a,b)=>{
      const af = pitchFamily(a[0]) === 'fastball' ? 0 : 1;
      const bf = pitchFamily(b[0]) === 'fastball' ? 0 : 1;
      if (af !== bf) return af - bf;
      return b[1] - a[1];
    }).map(([t, c]) => {
      const v = veloList.get(t) || [];
      const avg = v.length ? (v.reduce((s,n)=>s+n,0)/v.length) : null;
      const max = v.length ? Math.max(...v) : null;
      return { t, c, avg, max };
    });
    const total = rawRows.length;
    const strikePct = total ? (strikes / total) : null;
    const whiffPct = swings ? (whiffs / swings) : null;
    const fpsPct = firstPitches ? (firstPitchStrikes / firstPitches) : null;

    return { entries, total, strikePct, whiffPct, fpsPct, swings, firstPitches, hardHits: anyEV ? hardHits : null };
  }, [rawRows, abGroups, useVerified, selectedPitcherId, arsenalMap]);

  // Outing-level review telemetry (disagreement metrics)
  const outingReview = useMemo(() => {
    const total = rawRows.length;
    if (!total || !selectedPitcherId) return null;
    let disagreeCount = 0;
    let swVsSl = 0;
    let ctSuggest = 0;
    const allowed = arsenalMap[selectedPitcherId]?.allowed || new Set();
    for (const r of rawRows) {
      const rawT = r.type ?? r.pitchType ?? r.pitch ?? '—';
      const mappedCode = mapPitchLabel(rawT, selectedPitcherId, arsenalMap).code;
      const allowed = arsenalMap[selectedPitcherId]?.allowed || new Set();
      const suggested = constrainedSuggest({ velo: r.velo, ivb: r.ivb, hb: r.hb, spin: r.spin, fbVeloAvg, allowed });
      if (suggested && suggested !== mappedCode) disagreeCount++;
      if (mappedCode === 'SL' && suggested === 'SW') swVsSl++;
      // count CT suggestions even if not allowed
      const rawSuggest = classifyPitch({ velo: r.velo, ivb: r.ivb, hb: r.hb, spin: r.spin, fbVeloAvg });
      if (rawSuggest === 'CT' && !allowed.has('CT')) ctSuggest++;
    }
    const pct = (n) => (total ? (n / total) * 100 : 0);
    const disagreePct = pct(disagreeCount);
    const swVsSlPct = pct(swVsSl);
    const ctPct = pct(ctSuggest);

    // Determine status suggestion and notes
    let status = null;
    const notes = [];
    if (swVsSlPct >= 15) notes.push(`SW vs SL ${swVsSlPct.toFixed(0)}%`);
    if (ctPct >= 10 && !allowed.has('CT')) notes.push(`CT present ~${ctPct.toFixed(0)}%`);
    if (disagreePct >= 25 || (ctPct >= 10 && !allowed.has('CT'))) status = 'NEEDS REVIEW';
    else if (disagreePct >= 10 || swVsSlPct >= 15) status = 'VERIFY';

    return { total, disagreePct, swVsSlPct, ctPct, status, notes };
  }, [rawRows, selectedPitcherId, arsenalMap, fbVeloAvg]);

  // Persist to local review cache
  useEffect(() => {
    if (!selectedPitcherId || !dateStr || !outingReview) return;
    const { disagreePct, notes } = outingReview;
    updateOuting(selectedPitcherId, dateStr, Number(disagreePct.toFixed(1)), notes);
  }, [selectedPitcherId, dateStr, outingReview]);

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

        <div className="field" style={{ marginLeft: 'auto', display:'flex', gap:12, alignItems:'center' }}>
          <label className="gold" style={{ margin:0 }}>View</label>
          <label className="toggle"><input type="checkbox" checked={useVerified} onChange={(e)=>setUseVerified(e.target.checked)} /> Use verified arsenal labels</label>
          <label className="toggle"><input type="checkbox" checked={compact} onChange={(e)=>setCompact(e.target.checked)} /> Compact</label>
          <label className="toggle"><input type="checkbox" checked={showExt} onChange={(e)=>setShowExt(e.target.checked)} /> Show Ext</label>
        </div>
      </div>

      <div className="plogs-context">
        <div className="ctx-left">
          {pitcher || '—'} • {dateStr || '—'} • {inning && inning !== 'All' ? `Inning ${inning}` : 'All innings'}
        </div>
        <div className="ctx-right">Pitches: {rowsCount}</div>
      </div>

      {/* Pro summary cards */}
      <div className="pro-summary-cards" style={{ marginBottom: 16 }}>
        <Section title="Session Snapshot" right={PrintButton}>
          {aggSum ? (
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={2}><Tile label="Total Pitches" value={aggSum.totalPitches} /></Grid>
              <Grid item xs={6} sm={4} md={2}><Tile label="Strike%" value={typeof aggSum.strikePct === 'number' ? `${aggSum.strikePct}%` : '—'} /></Grid>
              <Grid item xs={6} sm={4} md={2}><Tile label="Whiff%" value={typeof aggSum.whiffPct === 'number' ? `${aggSum.whiffPct}%` : '—'} /></Grid>
              <Grid item xs={6} sm={4} md={2}><Tile label="FB Avg" value={aggSum.fbAvg != null ? `${aggSum.fbAvg} mph` : '—'} /></Grid>
              <Grid item xs={6} sm={4} md={2}><Tile label="FB Peak" value={aggSum.fbPeak != null ? `${aggSum.fbPeak} mph` : '—'} /></Grid>
              <Grid item xs={6} sm={4} md={2}><Tile label="Velo μ/σ" value={(aggSum.meanVelo!=null && aggSum.sdVelo!=null) ? `${aggSum.meanVelo}/${aggSum.sdVelo}` : '—'} sub="mph" /></Grid>
            </Grid>
          ) : (
            <Typography variant="body2">Pick a date and pitcher to view the session.</Typography>
          )}
        </Section>

        <Section title="Usage by Pitch">
          {usage.length ? (
            <Grid container spacing={2}>
              {usage.map(u => (
                <Grid item xs={12} key={u.type}>
                  <Box sx={{ display:'flex', alignItems:'center', gap:2 }}>
                    <Chip label={u.type} />
                    <Box sx={{ flex:1 }}>
                      <LinearProgress variant="determinate" value={Math.max(0, Math.min(100, u.pct))} />
                    </Box>
                    <Typography variant="body2" sx={{ width: 56, textAlign:'right' }}>{u.pct}%</Typography>
                    <Typography variant="caption" sx={{ opacity:.7, width: 80, textAlign:'right' }}>
                      {u.vAvg!=null ? `${u.vAvg} mph` : ''}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography variant="body2">No pitch-type usage computed.</Typography>
          )}
        </Section>

        <Section title="Average Velo by Inning">
          {aggSum?.veloTrend?.length ? (
            <Sparkline data={aggSum.veloTrend} />
          ) : (
            <Typography variant="body2">No inning-level velo trend.</Typography>
          )}
        </Section>
      </div>

      <div className="plogs-layout">
        <section className="plogs-groups">
          {!rowsCount && pitcher && (
            <div className="empty">
              <div>No results. Adjust filters above.</div>
              <div className="sub">Try a different date, pitcher, or inning.</div>
            </div>
          )}

          {abGroups.map((g, abIndex) => {
            const last = g.rows[g.rows.length - 1];
            const outcome = last?.result || '—';
            const pitches = g.rows.length;
            const header = `Inning ${g.inning} – `;
            const open = openIds.has(g.id);
            return (
              <div key={g.id} className={`ab-group ${open ? 'open' : 'closed'} ${compact ? 'compact' : ''}`}>
                <div className="ab-header" onClick={()=>toggleGroup(g.id)} role="button" tabIndex={0} onKeyDown={(e)=>{ if(e.key==='Enter' || e.key===' ') toggleGroup(g.id); }}>
                  <div className="ab-left">
                    <span className="caret">{open ? '▾' : '▸'}</span>
                    <span className="ab-title">{header}<span className="batter-dim">{g.batter}</span> <span className="result-bold">({outcome})</span></span>
                  </div>
                  <div className="ab-right">
                    <span className="ab-summary">{pitches} pitches • Result: {outcome}</span>
                  </div>
                </div>

                {open && (
                  <div className="ab-body">
                    <div className="ab-table">
                      <div className={`ab-row ab-head ${showExt ? 'with-ext' : 'no-ext'}`}>
                        <div className="col col-idx">#</div>
                        <div className="col col-type">Type</div>
                        <div className="col col-num">Velo</div>
                        <div className="col col-num">Spin</div>
                        {showExt && <div className="col col-num">Ext</div>}
                        <div className="col col-num">IVB</div>
                        <div className="col col-num">HB</div>
                        <div className="col col-res">Result</div>
                      </div>
                      {(() => {
                        const sourceRows = g.pitches || g.rows || [];
                        const mappedPitchRows = [...g.rows].sort((a,b)=>a.pitchIndex - b.pitchIndex);
                        const abKey = `${dateStr}-${g.inning}-${abIndex}`;
                        if (process.env.NODE_ENV !== 'production' && mappedPitchRows.length !== sourceRows.length) {
                          // eslint-disable-next-line no-console
                          console.warn('[AB RENDER] Mismatch', { abKey, rendered: mappedPitchRows.length, source: sourceRows.length });
                        }
                        return mappedPitchRows;
                      })().map((r, i) => {
                        const rawType = r.type;
                        let mapped = useVerified ? mapPitchLabel(rawType, selectedPitcherId, arsenalMap) : { code: pitchShort(rawType), inArsenal: true };
                        if (!mapped || !mapped.code) mapped = { code: 'UNK', inArsenal: false };
                        const short = mapped.code;
                        const fam = useVerified ? pitchFamily(short) : pitchFamily(rawType);
                        const allowed = selectedPitcherId ? (arsenalMap[selectedPitcherId]?.allowed || null) : null;
                        const suggested = allowed ? constrainedSuggest({ velo: r.velo, ivb: r.ivb, hb: r.hb, spin: r.spin, fbVeloAvg, allowed }) : null;
                        const disagree = suggested != null && suggested !== short;
                        // General shape guard via loose gates
                        const shape = useVerified ? verifyShape(short, { velo: r.velo, ivb: r.ivb, hb: r.hb, spin: r.spin, fbVeloAvg }) : { ok: true };
                        const shapeOff = useVerified && shape && shape.ok === false;
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
                          <div key={`${dateStr}-${g.inning}-${abIndex}-${r.pitchIndex}`} className={`ab-row ${i % 2 ? 'odd' : 'even'} ${showExt ? 'with-ext' : 'no-ext'}`}>
                            <div className="col col-idx">{r.pitchIndex}</div>
                            <div className="col col-type">
                              <Tooltip content={r.type}>
                                <span className="chip" style={{ ...chipStyle(fam), position:'relative' }}>
                                  <span className="dot" style={{ width:8, height:8, borderRadius:999, background: chipStyle(fam).color, opacity:.9 }} />
                                  {short}
                                  {useVerified && (mapped.inArsenal === false || shapeOff) && (
                                    <Tooltip content={mapped.inArsenal === false ? 'Not in verified arsenal' : `Not in verified shape${shape?.reason ? ` — ${shape.reason}` : ''}`}>
                                      <span style={{ position:'absolute', top:-3, right:-3, width:8, height:8, borderRadius:999, background:'#f59e0b', border:'1px solid rgba(0,0,0,.4)' }} />
                                    </Tooltip>
                                  )}
                                  {disagree && (
                                    <Tooltip content={`Metrics suggest ${suggested}`}>
                                      <span style={{ position:'absolute', bottom:-3, right:-3, width:9, height:9, borderRadius:999, border:'2px solid #facc15', background:'transparent' }} />
                                    </Tooltip>
                                  )}
                                </span>
                              </Tooltip>
                            </div>
                            <div className="col col-num">{Number.isFinite(r.velo) ? r.velo.toFixed(1) : '—'}</div>
                            <div className="col col-num">{Number.isFinite(r.spin) ? Math.round(r.spin) : '—'}</div>
                            {showExt && <div className="col col-num">{Number.isFinite(r.ext) ? r.ext.toFixed(1) : '—'}</div>}
                            <div className="col col-num">{Number.isFinite(r.ivb) ? r.ivb.toFixed(1) : '—'}</div>
                            <div className="col col-num">{Number.isFinite(r.hb) ? r.hb.toFixed(1) : '—'}</div>
                            <div className="col col-res">
                              <span title={r.result || ''} className="truncate result-bold">{r.result || '—'}</span>
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
          <div className="gs-metrics">
            <div className="gs-metric"><span>Strike %</span><strong>{Number.isFinite(sidebar.strikePct) ? `${(sidebar.strikePct*100).toFixed(1)}%` : '—'}</strong></div>
            <div className="gs-metric"><span>Whiff %</span><strong>{Number.isFinite(sidebar.whiffPct) ? `${(sidebar.whiffPct*100).toFixed(1)}%` : '—'}</strong></div>
            <div className="gs-metric"><span>1st-Pitch Strike %</span><strong>{Number.isFinite(sidebar.fpsPct) ? `${(sidebar.fpsPct*100).toFixed(1)}%` : '—'}</strong></div>
            {sidebar.hardHits != null && (<div className="gs-metric"><span>Hard-hit (95+)</span><strong>{sidebar.hardHits}</strong></div>)}
          </div>
          <div className="gs-list">
            {sidebar.entries.map((e) => {
              const fam = pitchFamily(e.t);
              return (
                <div key={e.t} className="gs-item">
                  <span className="chip" style={chipStyle(fam)} title={e.t}>{useVerified ? e.t : pitchShort(e.t)}</span>
                  <span className="gs-count">{e.c}</span>
                  <span className="gs-avg">{Number.isFinite(e.avg) ? `${e.avg.toFixed(1)} avg / ${Number.isFinite(e.max)?e.max.toFixed(1):'—'} max` : '—'}</span>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}