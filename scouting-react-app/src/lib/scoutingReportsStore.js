// src/lib/scoutingReportsStore.js
// Simple storage helpers for MLB 20–80 scouting reports.
// - Seeds from src/data/scoutingReports.js
// - Merges with localStorage edits under key `scoutingReport:{pitcherId}`

import { SCOUTING_REPORTS } from '../data/scoutingReports.js';
import { getPitcherSeasonAgg, benchP50, BENCH_LEVEL, fmtSigned } from './benchmarks.js';
import ALL_PITCH_EVENTS from '../data/logs/pitchingIndex.js';

const PITCH_KEYS = [
  'fourSeam', 'sinker', 'slider', 'curveball', 'sweeper', 'changeup', 'cutter', 'other'
];

export const EVEN_STEPS = [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80];

export function slugifyId(nameOrId) {
  if (!nameOrId) return '';
  return String(nameOrId).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function lsKey(pitcherId) { return `scoutingReport:${pitcherId}`; }

export function loadSeedFor(pitcherIdOrName) {
  const pid = slugifyId(pitcherIdOrName);
  const src = SCOUTING_REPORTS;
  if (!src) return null;
  // Object map path
  if (!Array.isArray(src) && typeof src === 'object') {
    if (src[pid]) return { ...src[pid] };
    // search values by pitcherId or name slug
    const vals = Object.values(src);
    const hit = vals.find(r => slugifyId(r?.pitcherId) === pid || slugifyId(r?.name) === pid);
    return hit ? { ...hit } : null;
  }
  // Array path (legacy)
  if (Array.isArray(src)) {
    return src.find(r => slugifyId(r?.pitcherId) === pid || slugifyId(r?.name) === pid) || null;
  }
  return null;
}

export function loadLocalFor(pitcherId) {
  try {
    const raw = localStorage.getItem(lsKey(slugifyId(pitcherId)));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function mergeReport(seed, local) {
  if (!seed && !local) return null;
  return { ...(seed || {}), ...(local || {}), tools: { ...(seed?.tools||{}), ...(local?.tools||{}) }, pitches: { ...(seed?.pitches||{}), ...(local?.pitches||{}) } };
}

export function saveReport(report) {
  if (!report || !report.pitcherId) return;
  const copy = { ...report, lastUpdated: new Date().toISOString().slice(0,10) };
  localStorage.setItem(lsKey(slugifyId(report.pitcherId)), JSON.stringify(copy));
  return copy;
}

// Build a blank/default report using available pitches from season aggregates if present.
export function getDefaultReportForPitcher(nameOrId) {
  const pid = slugifyId(nameOrId);
  const pitches = {};
  for (const key of PITCH_KEYS) {
    const agg = getPitcherSeasonAgg(pid, key) || getPitcherSeasonAgg(nameOrId, key);
    if (agg) pitches[key] = { present: null, future: null };
  }
  return {
    pitcherId: pid,
    name: String(nameOrId),
    lastUpdated: new Date().toISOString().slice(0,10),
    overallFV: null,
    risk: 'Medium',
    roleProjection: '',
    tools: { command: {present:null,future:null}, control: {present:null,future:null}, athleticism: {present:null,future:null}, delivery: {present:null,future:null}, fielding: {present:null,future:null} },
    pitches,
    summary: '',
    devPlan: ''
  };
}

export function loadReport(pitcherIdOrName, displayName) {
  const pid = slugifyId(pitcherIdOrName);
  // Try by id, then by provided display name (fallback for id/name mismatch)
  const seed = loadSeedFor(pid) || (displayName ? loadSeedFor(displayName) : null) || loadSeedFor(pitcherIdOrName);
  const local = loadLocalFor(pid) || loadLocalFor(pitcherIdOrName);
  const merged = mergeReport(seed || getDefaultReportForPitcher(pitcherIdOrName), local);
  return merged;
}

export function downloadJSON(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click(); URL.revokeObjectURL(url);
}

// Import a single report JSON file. Expects shape to include pitcherId.
export async function importJSON(file, onLoad) {
  const text = await file.text();
  const obj = JSON.parse(text);
  const pid = slugifyId(obj.pitcherId || obj.id || obj.name || '');
  if (!pid) throw new Error('Invalid report: missing pitcherId');
  if (typeof onLoad === 'function') onLoad(pid, obj);
}

// Canonicalize free-form pitch tags to internal keys
function canonKey(s) {
  const x = String(s||'').toUpperCase().trim();
  if (/(^|\b)(FF|FA|FOUR[- ]?SEAM|4S|FASTBALL|FB)(\b|$)/.test(x)) return 'fourSeam';
  if (/(^|\b)(SI|SNK|SINKER|TWO[- ]?SEAM|2S|2-SEAM)(\b|$)/.test(x)) return 'sinker';
  if (/(^|\b)(SW|SWEEPER|SLD[- ]?SW|GYRO[- ]?SWEEPER)(\b|$)/.test(x)) return 'sweeper';
  if (/(^|\b)(CH|CHANGEUP|SPL)(\b|$)/.test(x)) return 'changeup';
  if (/(^|\b)(FC|CT|CUTTER)(\b|$)/.test(x)) return 'cutter';
  if (/(^|\b)(CU|CB|KC|CURVEBALL|CURVE)(\b|$)/.test(x)) return 'curveball';
  if (/(^|\b)(SL|SLIDER)(\b|$)/.test(x)) return 'slider';
  return null;
}

function num(v) { return typeof v === 'number' ? v : Number(v); }
function median(arr) {
  const xs = arr.filter((n) => Number.isFinite(n)).slice().sort((a,b)=>a-b);
  if (!xs.length) return null;
  return xs[Math.floor(xs.length/2)];
}

export function pitchAutoContext(pidOrName, pitchKey) {
  // Try season aggregates first
  const agg = getPitcherSeasonAgg(pidOrName, pitchKey);
  let velo = agg?.p50Velo ?? null;
  let ivb  = agg?.p50IVB  ?? null;
  let hb   = agg?.p50HB   ?? null;

  // Fallback to raw logs p50 medians if aggregates missing
  if (velo == null && ivb == null && hb == null && ALL_PITCH_EVENTS && pidOrName) {
    const needle = String(pidOrName);
    const want = String(pitchKey);
    const rows = [];
    for (const e of ALL_PITCH_EVENTS) {
      if (e?.pitcher !== needle) continue;
      const t = canonKey(e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass);
      if (!t || t !== want) continue;
      const v = num(e.velo ?? e.velocity ?? e.v ?? e.speed);
      const i = num(e.ivb ?? e.vert ?? e.rise);
      const h = num(e.hb  ?? e.horz ?? e.run);
      rows.push({ v, i, h });
    }
    if (rows.length) {
      velo = median(rows.map(r=>r.v));
      ivb  = median(rows.map(r=>r.i));
      hb   = median(rows.map(r=>r.h));
    }
  }

  const bench = benchP50(BENCH_LEVEL, pitchKey);
  const dv = bench?.veloP50 != null ? (velo!=null ? velo - bench.veloP50 : null) : null;
  const di = bench?.ivbP50  != null ? (ivb!=null  ? ivb  - bench.ivbP50  : null) : null;
  const dh = bench?.hbP50   != null ? (hb!=null   ? hb   - bench.hbP50   : null) : null;
  return { velo, ivb, hb, dV: dv, dIVB: di, dHB: dh };
}

export { PITCH_KEYS, fmtSigned };
