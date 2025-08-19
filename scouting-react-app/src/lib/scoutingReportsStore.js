// src/lib/scoutingReportsStore.js
// Simple storage helpers for MLB 20–80 scouting reports.
// - Seeds from src/data/scoutingReports.js
// - Merges with localStorage edits under key `scoutingReport:{pitcherId}`

import { SCOUTING_REPORTS } from '../data/scoutingReports.js';
import { getPitcherSeasonAgg, benchP50, BENCH_LEVEL, fmtSigned } from './benchmarks.js';

const PITCH_KEYS = [
  'fourSeam', 'sinker', 'slider', 'curveball', 'sweeper', 'changeup', 'cutter', 'other'
];

export const EVEN_STEPS = [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80];

export function slugifyId(nameOrId) {
  if (!nameOrId) return '';
  return String(nameOrId).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function lsKey(pitcherId) { return `scoutingReport:${pitcherId}`; }

export function loadSeedFor(pitcherId) {
  const pid = slugifyId(pitcherId);
  return (SCOUTING_REPORTS || []).find(r => slugifyId(r.pitcherId) === pid || slugifyId(r.name) === pid) || null;
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

export function loadReport(pitcherIdOrName) {
  const pid = slugifyId(pitcherIdOrName);
  const seed = loadSeedFor(pid) || loadSeedFor(pitcherIdOrName);
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

export function pitchAutoContext(pidOrName, pitchKey) {
  const agg = getPitcherSeasonAgg(pidOrName, pitchKey);
  const bench = benchP50(BENCH_LEVEL, pitchKey);
  const velo = agg?.p50Velo ?? null;
  const ivb  = agg?.p50IVB  ?? null;
  const hb   = agg?.p50HB   ?? null;
  const dv = bench?.veloP50 != null ? (velo!=null ? velo - bench.veloP50 : null) : null;
  const di = bench?.ivbP50  != null ? (ivb!=null  ? ivb  - bench.ivbP50  : null) : null;
  const dh = bench?.hbP50   != null ? (hb!=null   ? hb   - bench.hbP50   : null) : null;
  return { velo, ivb, hb, dV: dv, dIVB: di, dHB: dh };
}

export { PITCH_KEYS, fmtSigned };
