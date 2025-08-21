// src/pages/PitcherReportsPage.js
import React, { useEffect, useMemo, useState, useRef } from 'react';
import { produce } from 'immer';
import ScoutingGradeInput from '../components/ScoutingGradeInput.jsx';
import FVBadge from '../components/FVBadge.jsx';
import { loadReport, saveReport, downloadJSON, importJSON, pitchAutoContext, slugifyId } from '../lib/scoutingReportsStore.js';
import { PITCHERS_SEASON_AGG } from '../data/pitchersSeasonAggregates.js';
import ALL_PITCH_EVENTS, { getAllPitcherNames, getPitchingLogStats } from '../data/logs/pitchingIndex.js';
import { fmt } from '../lib/formatters.js';
import { BENCH_LEVEL, benchP50 } from '../lib/benchmarks.js';
import '../styles/print-report.css';

const gold = '#FFD600';

const defaultPitchOrder = ['fourSeam','sinker','slider','curveball','sweeper','changeup','cutter','other'];
const pitchDisplay = {
  fourSeam: 'Four-Seam',
  sinker: 'Sinker',
  slider: 'Slider',
  curveball: 'Curveball',
  sweeper: 'Sweeper',
  changeup: 'Changeup',
  cutter: 'Cutter',
  other: 'Other',
};

function usePitcherOptions() {
  // Prefer season aggregates list if available, else fall back to names from logs
  const aggList = (PITCHERS_SEASON_AGG || []).map(p => ({ id: p.id, name: p.name }));
  const logNames = getAllPitcherNames();
  let base = aggList.length ? aggList : logNames.map(n => ({ id: slugifyId(n), name: n }));
  // Sort by last name
  base = base.sort((a,b) => {
    const al = a.name.trim().split(/\s+/).pop().toLowerCase();
    const bl = b.name.trim().split(/\s+/).pop().toLowerCase();
    return al.localeCompare(bl);
  });
  return base;
}

function PitchMetricCard({ pidOrName, pitchKey }) {
  const ctx = pitchAutoContext(pidOrName, pitchKey);
  const bench = benchP50(BENCH_LEVEL, pitchKey);
  return (
    <div style={{ background:'rgba(20,26,36,0.9)', border:'1px solid rgba(255,214,0,0.18)', borderRadius:12, padding:12 }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div style={{ color: gold, fontWeight:900 }}>{pitchDisplay[pitchKey] || pitchKey}</div>
        <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>
          {`Velo ${ctx?.dV!=null ? (ctx.dV>0?`+${ctx.dV.toFixed(1)}`:ctx.dV.toFixed(1)) : '—'} • IVB ${ctx?.dIVB!=null ? (ctx.dIVB>0?`+${ctx.dIVB.toFixed(1)}`:ctx.dIVB.toFixed(1)) : '—'}`}
        </span>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', marginTop:6, color:'#E5E7EB' }}>
        <div>
          <div style={{ fontSize:12, color:'#94A3B8' }}>p50 Velo</div>
          <div>{ctx?.velo!=null ? `${fmt.mph(ctx.velo)} mph` : '—'}</div>
        </div>
        <div>
          <div style={{ fontSize:12, color:'#94A3B8' }}>p50 IVB</div>
          <div>{ctx?.ivb!=null ? `${fmt.in1(ctx.ivb)} in` : '—'}</div>
        </div>
        <div>
          <div style={{ fontSize:12, color:'#94A3B8' }}>p50 HB</div>
          <div>{ctx?.hb!=null ? `${fmt.in1(ctx.hb)} in` : '—'}</div>
        </div>
      </div>
      {bench && (
        <div style={{ marginTop:8, color:'#94A3B8', fontSize:12 }}>
          MLB p50: {bench.veloP50!=null?`${fmt.mph(bench.veloP50)} mph`:'—'} • {bench.ivbP50!=null?`${fmt.in1(bench.ivbP50)}" IVB`:'—'} • {bench.hbP50!=null?`${fmt.in1(bench.hbP50)}" HB`:'—'}
        </div>
      )}
    </div>
  );
}

export default function PitcherReportsPage() {
  const summaryRef = useRef(null);
  const pitcherOptions = usePitcherOptions();
  const [selected, setSelected] = useState(pitcherOptions[0]?.id || '');
  const stats = getPitchingLogStats();

  const displayName = useMemo(() => (pitcherOptions.find(p=>p.id===selected)?.name || selected), [pitcherOptions, selected]);
  const pitcherId = selected;

  // Compute a safe empty report up-front to avoid TDZ / undefined on first render
  const emptyReport = useMemo(() => {
    const pitches = {};
    for (const k of defaultPitchOrder) pitches[k] = { present: null, future: null, usage: null, notes: '' };
    return {
      pitcherId,
      name: displayName || pitcherId,
      lastUpdated: null,
      overallFV: null,
      risk: 'Medium',
      roleProjection: '',
      tools: { command: {present:null,future:null}, control: {present:null,future:null}, athleticism: {present:null,future:null}, delivery: {present:null,future:null}, fielding: {present:null,future:null} },
      pitches,
      summary: '',
      devPlan: ''
    };
  }, [pitcherId, displayName]);

  // Load/merge report for selected pitcher early (tolerate id vs name slug)
  const scoutReport = useMemo(() => {
    if (!pitcherId) return emptyReport;
    const seeded = loadReport(pitcherId, displayName);
    return seeded || emptyReport;
  }, [pitcherId, displayName, emptyReport]);

  // Jude Abbadessa: merge scout-style defaults without overwriting user edits
  const isJude = useMemo(() => {
    const sid = slugifyId(pitcherId || '');
    const sname = slugifyId(displayName || '');
    return sid === 'jude-abbadessa' || sname === 'jude-abbadessa';
  }, [pitcherId, displayName]);

  const enrichedReport = useMemo(() => {
    if (!isJude) return scoutReport;
    const base = { ...(scoutReport || emptyReport) };
    base.pitches = { ...(base.pitches || {}) };
    // Helper to set pitch fields only if missing
    const setPitch = (k, present, future, notes) => {
      const cur = base.pitches[k] || { present: null, future: null, usage: base.pitches[k]?.usage ?? null, notes: '' };
      base.pitches[k] = {
        present: cur.present ?? present,
        future: cur.future ?? future,
        usage: cur.usage ?? null,
        notes: (cur.notes && cur.notes.length ? cur.notes : notes) || ''
      };
    };
    setPitch('fourSeam', 40, 45, 'Firm velo; below avg ride; used sparingly');
    setPitch('sinker', 45, 50, 'Heavy usage; armside run; groundball shape');
    setPitch('sweeper', 55, 60, '82.0 avg (84.2 max); plus miss pitch');
    setPitch('changeup', 40, 45, 'Flashes fade; inconsistent execution');
    setPitch('cutter', 40, 45, '83.0 avg (84.9 max); shorter action');
    // Ensure slider/curveball are not considered (no grades, no notes)
    if (base.pitches.slider) base.pitches.slider = { present: null, future: null, usage: null, notes: '' };
    if (base.pitches.curveball) base.pitches.curveball = { present: null, future: null, usage: null, notes: '' };
    // Summary default
    const defaultSummary = 'Abbadessa relies on a Sinker/Sweeper mix with heavy usage of the sinker to generate weak contact. Sweeper is his best pitch with above-average projection. Fastball and cutter are secondary looks, while the changeup remains a work in progress. Profiles as a depth starter or middle reliever with potential to miss bats when the sweeper is on.';
    base.summary = (base.summary && base.summary.trim().length) ? base.summary : defaultSummary;
    return base;
  }, [isJude, scoutReport, emptyReport]);

  // Declare the initial state object above the useState call
  const initialReport = enrichedReport;

  // Draft state mirrors the current report and is editable
  const [draft, setDraft] = useState(initialReport);
  useEffect(() => { setDraft(enrichedReport); }, [enrichedReport]);

  // Autosize the Summary textarea to avoid scrollbars
  useEffect(() => {
    const el = summaryRef.current;
    if (el && el instanceof HTMLTextAreaElement) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [draft?.summary, selected]);

  // Compute Usage % per pitch from logs for selected pitcher (read-only)
  const usagePct = useMemo(() => {
    if (!displayName) return {};
    const normalize = (s) => {
      const x = String(s||'').toUpperCase().trim();
      // Canonical map for common tags/codes
      if (/(^|\b)(FF|FA|FOUR[- ]?SEAM|4S|FASTBALL|FB)(\b|$)/.test(x)) return 'fourSeam';
      if (/(^|\b)(SI|SNK|SINKER|TWO[- ]?SEAM|2S|2-SEAM)(\b|$)/.test(x)) return 'sinker';
      if (/(^|\b)(SW|SWEEPER|SLD[- ]?SW|GYRO[- ]?SWEEPER)(\b|$)/.test(x)) return 'sweeper';
      if (/(^|\b)(CH|CHANGEUP|SPL)(\b|$)/.test(x)) return 'changeup';
      if (/(^|\b)(FC|CT|CUTTER)(\b|$)/.test(x)) return 'cutter';
      if (/(^|\b)(CU|CB|KC|CURVEBALL|CURVE)(\b|$)/.test(x)) return 'curveball';
      if (/(^|\b)(SL|SLIDER)(\b|$)/.test(x)) return 'slider';
      return null;
    };
    const counts = Object.create(null);
    let total = 0;
    for (const e of ALL_PITCH_EVENTS) {
      if (e?.pitcher !== displayName) continue;
      const key = normalize(e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass);
      if (!key) continue;
      counts[key] = (counts[key] || 0) + 1;
      total += 1;
    }
    if (!total) return {};
    const pct = {};
    for (const k of Object.keys(counts)) pct[k] = Math.round((counts[k] / total) * 1000) / 10; // 1-decimal
    return pct;
  }, [displayName]);

  // Merge seeded usage (from report) over log-derived usage for display/filters
  const mergedUsage = useMemo(() => {
    const base = { ...usagePct };
    const seed = scoutReport?.pitches || {};
    for (const k of Object.keys(seed)) {
      const u = seed[k]?.usage;
      if (Number.isFinite(u)) base[k] = u;
    }
    // For Jude, ensure slider/curveball are zeroed so rows never render
    if (isJude) {
      base.slider = 0;
      base.curveball = 0;
    }
    return base;
  }, [usagePct, scoutReport, isJude]);

  // Autosave: debounce 500ms after last change
  const [lastSavedAt, setLastSavedAt] = useState(null);
  const autosaveTimer = useRef(null);
  useEffect(() => {
    if (!draft || !selected) return;
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      try {
        saveReport({ ...draft, pitcherId: selected });
        setLastSavedAt(new Date());
      } catch (e) {
        // swallow autosave errors; explicit Save remains available
      }
    }, 500);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
  }, [draft, selected]);

  const onPitchField = (key, field, value) => {
    setDraft(prev => produce(prev, d => {
      const cur = d.pitches?.[key] || { present: null, future: null, usage: null, notes: '' };
      if (!d.pitches) d.pitches = {};
      d.pitches[key] = {
        present: cur.present ?? null,
        future: cur.future ?? null,
        usage: cur.usage ?? null,
        notes: cur.notes ?? '',
        [field]: value,
      };
    }));
  };

  const onTool = (toolKey, val) => {
    setDraft(prev => produce(prev, d => {
      if (!d.tools) d.tools = {};
      d.tools[toolKey] = val;
    }));
  };

  const save = () => {
    const saved = saveReport({ ...(draft||{}), pitcherId: selected });
    setDraft(saved);
    setLastSavedAt(new Date());
  };

  const exportJSON = () => {
    if (!draft) return;
    downloadJSON(`${selected}-scouting-report.json`, draft);
  };

  const printPDF = () => { window.print(); };

  // Ensure re-render when draft changes; left column shows all default pitch keys for now

  const styles = useMemo(() => ({
    root: {
      '--bg-top': '#0A0C10', '--bg-bottom': '#111827', '--panel': 'rgba(20,26,36,0.9)', '--border': 'rgba(255,214,0,0.18)', '--text': '#E5E7EB', '--muted': '#94A3B8'
    },
    wrap: { maxWidth: 1200, margin:'0 auto', padding:'20px 14px 36px' },
    headerRow: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, marginBottom:6 },
    title: { color: gold, fontWeight:900, letterSpacing:0.4, fontSize:30, margin:0 },
    sub: { color: 'var(--muted)', marginTop:2 },
    controls: { display:'flex', gap:8, alignItems:'center', position:'relative', zIndex:1000 },
    savedNote: { textAlign:'right', color:'#9CA3AF', fontSize:11, marginTop:4 },
    select: { background:'rgba(0,0,0,0.25)', color:'var(--text)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:8, padding:'8px 10px', fontWeight:800, outlineColor: gold },
    btn: { background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.18)', color:'var(--text)', borderRadius:8, padding:'8px 10px', fontWeight:800, fontSize:12, cursor:'pointer', outlineColor: gold },
    grid: { display:'grid', gridTemplateColumns:'1fr 1.25fr', gap:12, alignItems:'start', marginTop:8 },
    panel: { background:'var(--panel)', border:'1px solid var(--border)', borderRadius:12, padding:10, color:'var(--text)' },
    label: { color:'var(--muted)', fontSize:12 },
    h2: { color: gold, fontWeight:900, margin:'2px 0 6px' },
    table: { width:'100%', borderCollapse:'collapse' },
    th: { position:'sticky', top:0, background:'rgba(20,26,36,0.95)', textAlign:'left', color:'var(--text)', padding:'4px 8px', borderBottom:'1px solid rgba(255,255,255,0.12)' },
    td: { color:'var(--text)', padding:'4px 8px', borderTop:'1px solid rgba(255,255,255,0.08)' },
    guide: { color:'var(--muted)', fontSize:12, marginTop:4 },
  }), []);

  const guide = '20 Poor • 30 Well-below • 40 Below • 50 Avg • 60 Above • 70 Plus-plus • 80 Elite';

  // Compute suggested FV from future mix + command/control
  const suggestedFV = useMemo(() => {
    const f = (k) => draft?.pitches?.[k]?.future ?? null;
    const best = (arr) => {
      const vals = arr.map(f).filter(v => Number.isFinite(v));
      if (!vals.length) return null;
      return Math.max(...vals);
    };
    const fb = best(['fourSeam','sinker','cutter']);
    const brk = best(['slider','curveball','sweeper']);
    const off = best(['changeup','other']);
    const cmd = draft?.tools?.command?.future ?? null;
    const ctl = draft?.tools?.control?.future ?? null;
    const parts = [];
    if (Number.isFinite(fb)) parts.push(fb * 0.35);
    if (Number.isFinite(brk)) parts.push(brk * 0.25);
    if (Number.isFinite(off)) parts.push(off * 0.15);
    if (Number.isFinite(cmd)) parts.push(cmd * 0.15);
    if (Number.isFinite(ctl)) parts.push(ctl * 0.10);
    if (!parts.length) return null;
    const raw = parts.reduce((a,b)=>a+b,0);
    const even = Math.round(raw / 2) * 2;
    return Math.max(20, Math.min(80, even));
  }, [draft]);

  const handedness = useMemo(() => {
    const name = pitcherOptions.find(p=>p.id===selected)?.name || '';
    const s = String(name).toUpperCase();
    if (/(\bLHP\b|\(LHP\)|LEFT-HANDED|LEFTY)/.test(s)) return 'LHP';
    if (/(\bRHP\b|\(RHP\)|RIGHT-HANDED|RIGHTY)/.test(s)) return 'RHP';
    return 'RHP';
  }, [selected, pitcherOptions]);

  return (
    <div className="pitcher-reports-page" style={{ ...styles.root, minHeight:'100vh', background:'linear-gradient(180deg, var(--bg-top), var(--bg-bottom))' }}>
      <style>{`@media print{ .no-print{ display:none!important } .pitcher-reports-page{ background:#fff } }`}</style>
      <style>{`
        .overall-meta{ display:grid; grid-template-columns: minmax(180px,1fr) 200px minmax(220px,1.2fr); gap:12px; align-items:center; margin-top:8px; }
        .overall-meta .fv-field select,
        .overall-meta .risk-field select,
        .overall-meta .role-field input{ height:40px; line-height:40px; min-width:0; }
        .overall-tools .section-label{ display:flex; align-items:baseline; gap:8px; }
        .gradesTable .notesCell{ white-space: normal; overflow-wrap: anywhere; word-break: break-word; vertical-align: top; min-height:44px; }
      `}</style>
      <div style={styles.wrap} className="report-wrap">
        {/* Report Header */}
        <div style={{ ...styles.headerRow, marginBottom: 10 }} className="section">
          <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
              <h1 style={styles.title}>{pitcherOptions.find(p=>p.id===selected)?.name || selected}</h1>
              <FVBadge handedness={handedness} fv={suggestedFV ?? null} size="md" />
            </div>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
              <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>Risk: {draft?.risk || 'Medium'}</span>
              <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>Role: {draft?.roleProjection || '—'}</span>
              <span style={{ display:'inline-block', padding:'2px 8px', borderRadius:999, background:'rgba(148,163,184,0.15)', color:'#94A3B8', fontWeight:800, fontSize:11 }}>Logs: {stats.files} games • {stats.entries} pitches</span>
            </div>
          </div>
          <div className="no-print" style={{ display:'flex', flexDirection:'column', alignItems:'flex-end' }}>
            <div style={styles.controls}>
              <select value={selected} onChange={(e)=>setSelected(e.target.value)} style={styles.select} aria-label="Select Pitcher">
                {pitcherOptions.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              <button type="button" style={styles.btn} onClick={save}>Save</button>
              <button type="button" style={styles.btn} onClick={exportJSON}>Download JSON</button>
              <label className="no-print" style={{ ...styles.btn, display:'inline-flex', alignItems:'center', cursor:'pointer' }}>
                Import JSON
                <input type="file" accept="application/json" style={{ display:'none' }}
                  onChange={async (e)=>{
                    const file = e.target.files && e.target.files[0]; if (!file) return;
                    try {
                      await importJSON(file, (pid, obj) => {
                        const merged = { ...(draft||{}), ...(obj||{}), pitcherId: pid };
                        setDraft(merged);
                        const saved = saveReport(merged);
                        setDraft(saved);
                        setLastSavedAt(new Date());
                      });
                    } catch(err) {
                      alert((err && err.message) || 'Import failed');
                    } finally {
                      e.target.value = '';
                    }
                  }} />
              </label>
              <button type="button" style={styles.btn} onClick={printPDF}>Export PDF</button>
            </div>
            <div style={styles.savedNote} aria-live="polite">
              {lastSavedAt ? `Saved • ${lastSavedAt.toLocaleTimeString()}` : ' '}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {/* Left: Auto context cards (visible only if usage > 0) */}
          <div>
            <div style={styles.h2}>Pitch Context</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 }}>
              {defaultPitchOrder.filter(k => (mergedUsage[k] ?? 0) > 0).map((k) => (
                <PitchMetricCard key={k} pidOrName={selected} pitchKey={k} />
              ))}
            </div>
          </div>

          {/* Right: Editable form */}
          <div>
            <div style={{ ...styles.panel }} className="no-print section">
              <div style={styles.h2}>Pitch Grades</div>
              <table style={styles.table} className="gradesTable">
                <thead>
                  <tr>
                    <th style={styles.th}>Pitch</th>
                    <th style={styles.th} title={guide}>Present</th>
                    <th style={styles.th} title={guide}>Future</th>
                    <th style={styles.th}>Usage %</th>
                    <th style={styles.th}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {defaultPitchOrder.filter((k) => {
                    const row = draft?.pitches?.[k] || {};
                    const hasGrade = (row.present != null) || (row.future != null);
                    const u = draft?.pitches?.[k]?.usage ?? mergedUsage[k];
                    return (Number(u) > 0) || hasGrade;
                  }).map((k) => {
                    const row = draft?.pitches?.[k] || {};
                    const guide = '20–80 even grades, P/F';
                    return (
                      <tr key={`row-${k}`}>
                        <td style={styles.td}>{pitchDisplay[k] || k}</td>
                        <td style={styles.td}>
                          <input type="number" min={20} max={80} step={2} value={row.present ?? ''}
                            onChange={(e)=>onPitchField(k,'present', e.target.value === '' ? null : Number(e.target.value))}
                            title={guide}
                            style={{ width:80, minWidth:80, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'4px 8px', outlineColor: gold }} />
                        </td>
                        <td style={styles.td}>
                          <input type="number" min={20} max={80} step={2} value={row.future ?? ''}
                            onChange={(e)=>onPitchField(k,'future', e.target.value === '' ? null : Number(e.target.value))}
                            title={guide}
                            style={{ width:80, minWidth:80, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'4px 8px', outlineColor: gold }} />
                        </td>
                        <td style={styles.td}>{ mergedUsage[k] != null ? `${Number(mergedUsage[k]).toFixed(1)}` : '—' }</td>
                        <td style={styles.td} className="notesCell">
                          <textarea
                            value={row.notes || ''}
                            onChange={(e)=>{
                              // autosize
                              const el = e.target;
                              el.style.height = 'auto';
                              el.style.height = `${el.scrollHeight}px`;
                              onPitchField(k,'notes', e.target.value);
                            }}
                            rows={1}
                            style={{
                              width:'100%',
                              minWidth:160,
                              background:'#122448',
                              color:'white',
                              border:'1px solid rgba(255,255,255,0.12)',
                              borderRadius:8,
                              padding:'4px 8px',
                              outlineColor: gold,
                              resize:'none',
                              overflow:'hidden',
                              whiteSpace:'pre-wrap',
                              wordBreak:'break-word',
                              lineHeight:1.35,
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="no-print" style={styles.guide}>{guide}</div>
            </div>

            {/* Print-only condensed grades */}
            <div className="print-only section" style={{ ...styles.panel }}>
              <div style={styles.h2}>Pitch Grades</div>
              <table style={{ width:'100%', borderCollapse:'collapse' }} className="gradesTable">
                <thead>
                  <tr>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>Pitch</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>P</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>F</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>Usage</th>
                    <th style={{ textAlign:'left', padding:'4px 6px', borderBottom:'1px solid rgba(0,0,0,0.2)' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {defaultPitchOrder.filter((k) => {
                    const row = draft?.pitches?.[k] || {};
                    const hasGrade = (row.present != null) || (row.future != null);
                    const u = mergedUsage[k];
                    return (Number(u) > 0) || hasGrade;
                  }).map((k) => {
                    const row = draft?.pitches?.[k] || {};
                    const p = row.present ?? '—';
                    const f = row.future ?? '—';
                    const u = mergedUsage[k] != null ? `${Number(mergedUsage[k]).toFixed(1)}%` : '—';
                    const n = row.notes || '';
                    return (
                      <tr key={`prow-${k}`}>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{pitchDisplay[k] || k}</td>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{p}</td>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{f}</td>
                        <td style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{u}</td>
                        <td className="notesCell" style={{ padding:'4px 6px', borderTop:'1px solid rgba(0,0,0,0.1)' }}>{n}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Print-only condensed tools */}
            <div className="print-only section pb-before" style={{ ...styles.panel }}>
              <div style={styles.h2}>Overall Tools</div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:8 }}>
                {['command','control','athleticism','delivery','fielding'].map((k)=>{
                  const val = draft?.tools?.[k] || {};
                  return (
                    <div key={`pt-${k}`} style={{ padding:'6px 8px', border:'1px solid rgba(0,0,0,0.15)', borderRadius:8 }}>
                      <div style={{ fontWeight:800, fontSize:12, color:'#111827', textTransform:'capitalize' }}>{k}</div>
                      <div style={{ fontSize:12 }}>P {val.present ?? '—'} • F {val.future ?? '—'}</div>
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop:8 }}>
                <span style={{ marginRight:8 }}><strong>FV:</strong> {draft?.overallFV ?? '—'}</span>
                <span style={{ marginRight:8 }}><strong>Risk:</strong> {draft?.risk || 'Medium'}</span>
                <span><strong>Role:</strong> {draft?.roleProjection || '—'}</span>
              </div>
            </div>

            <div style={{ ...styles.panel, marginTop:10 }} className="no-print section">
              <div style={styles.h2}>Summary</div>
              <div style={{ marginTop:6, padding:10, borderRadius:10, background:'rgba(148,163,184,0.10)', overflow:'hidden' }}>
                <textarea
                  ref={summaryRef}
                  rows={4}
                  value={draft?.summary || ''}
                  onChange={(e)=>setDraft(prev => produce(prev, d => { d.summary = e.target.value; }))}
                  style={{
                    width:'100%',
                    background:'transparent',
                    color:'white',
                    border:'none',
                    outline:'none',
                    padding:0,
                    boxSizing:'border-box',
                    whiteSpace:'pre-wrap',
                    wordBreak:'break-word',
                    lineHeight:1.5,
                    overflow:'hidden',
                    resize:'none',
                  }}
                />
              </div>
            </div>

            {/* Print-only Summary */}
            <div className="print-only section" style={{ ...styles.panel, marginTop:10 }}>
              <div style={styles.h2}>Summary</div>
              <div style={{ whiteSpace:'pre-wrap', lineHeight:1.4 }}>{draft?.summary || '—'}</div>
            </div>

            <div style={{ ...styles.panel, marginTop:10 }} className="section pb-before">
              <div style={styles.h2}>Rendered Report</div>
              <div style={{ color:'var(--text)', lineHeight: 1.5 }}>
                {(() => {
                  const name = pitcherOptions.find(p=>p.id===selected)?.name || selected;
                  const cmd = draft?.tools?.command || {};
                  const role = draft?.roleProjection || '—';
                  const risk = draft?.risk || 'Medium';
                  const fv = draft?.overallFV ?? '—';
                  const pCmd = cmd.present ?? '—';
                  const fCmd = cmd.future ?? '—';
                  // Simple mix guess from entered pitches with usage
                  const mix = defaultPitchOrder
                    .filter(k => (draft?.pitches?.[k]?.usage ?? 0) > 0)
                    .sort((a,b)=> (draft?.pitches?.[b]?.usage||0) - (draft?.pitches?.[a]?.usage||0))
                    .slice(0,3)
                    .map(k => (pitchDisplay[k] || k).split('-')[0])
                    .join('/');
                  const mixText = mix ? `${mix} mix; ` : '';
                  return (
                    <p>
                      <strong>{name}</strong> — {mixText}present command {pCmd}, future {fCmd}. Role: {role}. FV {fv} (Risk {risk}).
                    </p>
                  );
                })()}
              </div>
              {draft?.summary && (
                <div style={{ marginTop:6, whiteSpace:'pre-wrap', lineHeight:1.5 }}>{draft.summary}</div>
              )}
              {/* Dev Plan removed */}
            </div>

          </div>
        </div>
        {/* Print footer with generated label */}
        <div className="print-only print-footer">Generated by Trenton Thunder Player Analysis Platform</div>
      </div>
    </div>
  );
}
