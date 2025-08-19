// src/pages/PitcherReportsPage.js
import React, { useEffect, useMemo, useState } from 'react';
import ScoutingGradeInput from '../components/ScoutingGradeInput.jsx';
import { PITCH_KEYS, loadReport, saveReport, downloadJSON, pitchAutoContext, slugifyId } from '../lib/scoutingReportsStore.js';
import { PITCHERS_SEASON_AGG } from '../data/pitchersSeasonAggregates.js';
import { getAllPitcherNames, getPitchingLogStats } from '../data/logs/pitchingIndex.js';
import { fmt } from '../lib/formatters.js';
import { BENCH_LEVEL, benchP50, fmtSigned } from '../lib/benchmarks.js';

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
  const pitcherOptions = usePitcherOptions();
  const [selected, setSelected] = useState(pitcherOptions[0]?.id || '');
  const stats = getPitchingLogStats();

  // Load/merge report for selected pitcher
  const report = useMemo(() => (selected ? loadReport(selected) : null), [selected]);
  const [draft, setDraft] = useState(report);
  useEffect(() => { setDraft(report); }, [report]);

  const onPitchField = (key, field, value) => {
    setDraft((d) => ({
      ...d,
      pitches: {
        ...(d?.pitches||{}),
        [key]: { present: d?.pitches?.[key]?.present ?? null, future: d?.pitches?.[key]?.future ?? null, usage: d?.pitches?.[key]?.usage ?? null, notes: d?.pitches?.[key]?.notes ?? '',
                  [field]: value }
      }
    }));
  };

  const onTool = (toolKey, val) => {
    setDraft((d) => ({ ...d, tools: { ...(d?.tools||{}), [toolKey]: val } }));
  };

  const save = () => {
    const saved = saveReport({ ...(draft||{}), pitcherId: selected });
    setDraft(saved);
  };

  const exportJSON = () => {
    if (!draft) return;
    downloadJSON(`${selected}-scouting-report.json`, draft);
  };

  const printPDF = () => { window.print(); };

  const leftPitchKeys = useMemo(() => defaultPitchOrder.filter(k => (draft?.pitches && k in draft.pitches) || true), [draft]);

  const styles = useMemo(() => ({
    root: {
      '--bg-top': '#0A0C10', '--bg-bottom': '#111827', '--panel': 'rgba(20,26,36,0.9)', '--border': 'rgba(255,214,0,0.18)', '--text': '#E5E7EB', '--muted': '#94A3B8'
    },
    wrap: { maxWidth: 1200, margin:'0 auto', padding:'24px 16px 48px' },
    headerRow: { display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, marginBottom:8 },
    title: { color: gold, fontWeight:900, letterSpacing:0.4, fontSize:32, margin:0 },
    sub: { color: 'var(--muted)', marginTop:4 },
    controls: { display:'flex', gap:8, alignItems:'center' },
    select: { background:'rgba(0,0,0,0.25)', color:'var(--text)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:8, padding:'8px 10px', fontWeight:800 },
    btn: { background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.18)', color:'var(--text)', borderRadius:8, padding:'8px 10px', fontWeight:800, fontSize:12, cursor:'pointer' },
    grid: { display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:16, alignItems:'start', marginTop:12 },
    panel: { background:'var(--panel)', border:'1px solid var(--border)', borderRadius:12, padding:12, color:'var(--text)' },
    label: { color:'var(--muted)', fontSize:12 },
    h2: { color: gold, fontWeight:900, margin:'4px 0 8px' },
    table: { width:'100%', borderCollapse:'collapse' },
    th: { textAlign:'left', color:'var(--text)', padding:'8px 8px', borderBottom:'1px solid rgba(255,255,255,0.12)' },
    td: { color:'var(--text)', padding:'8px 8px', borderTop:'1px solid rgba(255,255,255,0.08)' },
    guide: { color:'var(--muted)', fontSize:12, marginTop:6 },
  }), []);

  const guide = '20 Poor • 30 Well-below • 40 Below • 50 Avg • 60 Above • 70 Plus-plus • 80 Elite';

  return (
    <div className="pitcher-reports-page" style={{ ...styles.root, minHeight:'100vh', background:'linear-gradient(180deg, var(--bg-top), var(--bg-bottom))' }}>
      <style>{`@media print{ .no-print{ display:none!important } .print-only{ display:block!important } body{ background:#fff } .pitcher-reports-page{ background:#fff } } .print-only{ display:none }`}</style>
      <div style={styles.wrap}>
        {/* Header */}
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.title}>Pitcher Scouting Reports (20–80)</h1>
            <div style={styles.sub}>Editable MLB-style scouting report with pitch-by-pitch grades and auto context from season aggregates.</div>
            <div style={{ ...styles.sub, fontSize:12 }}>Logs: {stats.files} games · {stats.entries} pitches</div>
          </div>
          <div className="no-print" style={styles.controls}>
            <select value={selected} onChange={(e)=>setSelected(e.target.value)} style={styles.select} aria-label="Select Pitcher">
              {pitcherOptions.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
            <button type="button" style={styles.btn} onClick={save}>Save</button>
            <button type="button" style={styles.btn} onClick={exportJSON}>Download JSON</button>
            <button type="button" style={styles.btn} onClick={printPDF}>Export PDF</button>
          </div>
        </div>

        {/* Grid */}
        <div style={styles.grid}>
          {/* Left: Auto context cards */}
          <div>
            <div style={styles.h2}>Pitch Context</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:12 }}>
              {defaultPitchOrder.map((k) => (
                <PitchMetricCard key={k} pidOrName={selected} pitchKey={k} />
              ))}
            </div>
          </div>

          {/* Right: Editable form */}
          <div>
            <div style={{ ...styles.panel }}>
              <div style={styles.h2}>Pitch Grades</div>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>Pitch</th>
                    <th style={styles.th}>Present</th>
                    <th style={styles.th}>Future</th>
                    <th style={styles.th}>Usage %</th>
                    <th style={styles.th}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {defaultPitchOrder.map((k) => {
                    const row = draft?.pitches?.[k] || { present:null, future:null, usage:null, notes:'' };
                    return (
                      <tr key={`row-${k}`}>
                        <td style={styles.td}>{pitchDisplay[k] || k}</td>
                        <td style={styles.td}>
                          <input type="number" min={20} max={80} step={2} value={row.present ?? ''}
                            onChange={(e)=>onPitchField(k,'present', e.target.value === '' ? null : Number(e.target.value))}
                            style={{ width:70, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 8px' }} />
                        </td>
                        <td style={styles.td}>
                          <input type="number" min={20} max={80} step={2} value={row.future ?? ''}
                            onChange={(e)=>onPitchField(k,'future', e.target.value === '' ? null : Number(e.target.value))}
                            style={{ width:70, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 8px' }} />
                        </td>
                        <td style={styles.td}>
                          <input type="number" min={0} max={100} step={1} value={row.usage ?? ''}
                            onChange={(e)=>onPitchField(k,'usage', e.target.value === '' ? null : Number(e.target.value))}
                            style={{ width:70, background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 8px' }} />
                        </td>
                        <td style={styles.td}>
                          <input type="text" value={row.notes || ''}
                            onChange={(e)=>onPitchField(k,'notes', e.target.value)}
                            style={{ width:'100%', background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 8px' }} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div style={styles.guide}>{guide}</div>
            </div>

            <div style={{ ...styles.panel, marginTop:12 }}>
              <div style={styles.h2}>Overall Tools</div>
              <div style={{ display:'grid', gap:10 }}>
                <ScoutingGradeInput label="Command" value={draft?.tools?.command} onChange={(v)=>onTool('command', v)} />
                <ScoutingGradeInput label="Control" value={draft?.tools?.control} onChange={(v)=>onTool('control', v)} />
                <ScoutingGradeInput label="Athleticism" value={draft?.tools?.athleticism} onChange={(v)=>onTool('athleticism', v)} />
                <ScoutingGradeInput label="Delivery" value={draft?.tools?.delivery} onChange={(v)=>onTool('delivery', v)} />
                <ScoutingGradeInput label="Fielding" value={draft?.tools?.fielding} onChange={(v)=>onTool('fielding', v)} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12, marginTop:12 }}>
                <div>
                  <div style={styles.label}>Overall FV (20–80)</div>
                  <input type="number" min={20} max={80} step={2} value={draft?.overallFV ?? ''}
                    onChange={(e)=>setDraft(d=>({ ...d, overallFV: e.target.value===''?null:Number(e.target.value) }))}
                    style={{ width:'100%', background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 8px' }} />
                </div>
                <div>
                  <div style={styles.label}>Risk</div>
                  <select value={draft?.risk || 'Medium'}
                    onChange={(e)=>setDraft(d=>({ ...d, risk: e.target.value }))}
                    style={{ width:'100%', background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'8px 10px', fontWeight:800 }}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <div style={styles.label}>Role Projection</div>
                  <input type="text" value={draft?.roleProjection || ''}
                    onChange={(e)=>setDraft(d=>({ ...d, roleProjection: e.target.value }))}
                    style={{ width:'100%', background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 8px' }} />
                </div>
              </div>
            </div>

            <div style={{ ...styles.panel, marginTop:12 }}>
              <div style={styles.h2}>Summary</div>
              <textarea rows={4} value={draft?.summary || ''}
                onChange={(e)=>setDraft(d=>({ ...d, summary: e.target.value }))}
                style={{ width:'100%', background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'8px' }} />
              <div style={{ ...styles.h2, marginTop:12 }}>Development Plan</div>
              <textarea rows={4} value={draft?.devPlan || ''}
                onChange={(e)=>setDraft(d=>({ ...d, devPlan: e.target.value }))}
                style={{ width:'100%', background:'#122448', color:'white', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'8px' }} />
            </div>

            <div style={{ ...styles.panel, marginTop:12 }}>
              <div style={styles.h2}>Rendered Report</div>
              <div style={{ color:'var(--text)' }}>
                <strong>{pitcherOptions.find(p=>p.id===selected)?.name || selected}</strong>{draft?.overallFV ? ` • FV ${draft.overallFV}` : ''}{draft?.risk ? ` • Risk ${draft.risk}` : ''}{draft?.roleProjection ? ` • Role ${draft.roleProjection}` : ''}
              </div>
              {draft?.summary && (
                <div style={{ marginTop:6, whiteSpace:'pre-wrap' }}>{draft.summary}</div>
              )}
              {draft?.devPlan && (
                <div style={{ marginTop:10 }}>
                  <div style={{ color: gold, fontWeight:900, marginBottom:4 }}>Dev Plan</div>
                  <div style={{ whiteSpace:'pre-wrap' }}>{draft.devPlan}</div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
