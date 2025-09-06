/**
 * Aggregations for Pitching Game Logs page
 * - Derives per-game, per-inning, and per-pitch-type summaries from existing log files.
 * - Zero external deps. Defensive against missing fields.
 */
const ctx = require.context('../data/logs', false, /^\.\/pitching-\d{4}-\d{2}-\d{2}\.js$/);

function num(v) {
  if (v == null) return null;
  const n = typeof v === 'string' ? parseFloat(v) : v;
  return Number.isFinite(n) ? n : null;
}
function bool(v) {
  if (v === true || v === false) return v;
  if (v == null) return false;
  const s = String(v).toLowerCase();
  return s === 'true' || s === 'y' || s === 'yes' || s === '1';
}
function pitchKey(raw) {
  if (!raw) return 'UNK';
  const s = String(raw).trim().toLowerCase();
  if (['fb','ff','fourseam','four-seam','four seam','fastball','heater'].includes(s)) return 'FB';
  if (['sinker','snk','two-seam','2s','2-seam'].includes(s)) return 'SNK';
  if (['cutter','cut','ct'].includes(s)) return 'CUT';
  if (['sweeper','sw','swep'].includes(s)) return 'SL/SW';
  if (['slider','sl'].includes(s)) return 'SL';
  if (['curve','curveball','cb','knuckle-curve','kc'].includes(s)) return 'CB';
  if (['change','changeup','ch','chg'].includes(s)) return 'CH';
  return raw.toString().toUpperCase();
}

function flattenModule(mod, dateStr) {
  const items = [];
  const root = mod && (mod.default ?? mod);
  if (root && typeof root === 'object' && !Array.isArray(root)) {
    for (const [pitcherName, innings] of Object.entries(root)) {
      if (!innings || typeof innings !== 'object' || Array.isArray(innings)) continue;
      for (const [inningStr, arr] of Object.entries(innings)) {
        if (!Array.isArray(arr)) continue;
        const inningNum = Number(inningStr);
        for (const row of arr) {
          if (row && typeof row === 'object') {
            items.push({ ...row, pitcher: pitcherName, inning: Number.isFinite(inningNum) ? inningNum : inningStr, __dateGuess: dateStr });
          }
        }
      }
    }
    if (items.length) return items;
  }
  // Fallbacks: arrays on default or named exports, or arrays nested within named export objects
  const candidates = [];
  if (Array.isArray(root)) candidates.push(root);
  for (const [k, v] of Object.entries(mod || {})) {
    if (k === 'default') continue;
    if (Array.isArray(v)) candidates.push(v);
    else if (v && typeof v === 'object') {
      for (const vv of Object.values(v)) if (Array.isArray(vv)) candidates.push(vv);
    }
  }
  for (const arr of candidates) {
    for (const row of arr) {
      if (row && typeof row === 'object') items.push({ ...row, __dateGuess: dateStr });
    }
  }
  return items;
}

function loadAll() {
  const rows = [];
  ctx.keys().forEach((key) => {
    const m = key.match(/pitching-(\d{4}-\d{2}-\d{2})/);
    const dateStr = m ? m[1] : null;
    let mod;
    try { mod = ctx(key); } catch { return; }
    const items = flattenModule(mod, dateStr);
    for (const row of items) {
      if (!row || typeof row !== 'object') continue;
      const pitcher = (row.pitcher || row.Pitcher || row.name || row.player || '').toString().trim();
      const inning = row.inning ?? row.Inning ?? row.ip ?? null;
      const type = pitchKey(row.pitchType ?? row.type ?? row.pitch ?? row.tag);
      const velo = num(row.velo ?? row.velocity ?? row.v ?? row.v_mph);
      const res = String(row.result ?? row.res ?? '').toLowerCase();
      const strikeDerived = res.includes('strike') || res.includes('foul');
      const whiffDerived = res.includes('swinging strike') || res.includes('whiff');
      const inPlayDerived = res.includes('in play') || res.includes('put in play') || res.includes('ball in play') || res.includes('bip');
      const swingDerived = res.includes('swing');
      const whiff = bool(row.whiff ?? row.swing_miss ?? row.isWhiff) || whiffDerived;
      const strike = bool(row.strike ?? row.called_strike ?? row.cs ?? row.isStrike) || strikeDerived;
      const calledStr = bool(row.called_strike ?? row.isCalledStrike) || res.includes('called strike');
      const swinging = bool(row.swing ?? row.isSwing) || swingDerived;
      const inPlay = bool(row.inPlay ?? row.in_play) || inPlayDerived;
      rows.push({ date: dateStr, pitcher, inning, type, velo, whiff, strike, calledStr, swinging, inPlay });
    }
  });
  return rows;
}

export function getDates() {
  const keys = ctx.keys();
  const dates = [];
  keys.forEach(k => {
    const m = k.match(/pitching-(\d{4}-\d{2}-\d{2})/);
    if (m) dates.push(m[1]);
  });
  dates.sort();
  return dates;
}

export function getPitchersForDate(dateStr) {
  const rows = loadAll().filter(r => r.date === dateStr);
  const set = new Set();
  rows.forEach(r => { if (r.pitcher) set.add(r.pitcher); });
  return Array.from(set).sort();
}

export function getInningsFor(dateStr, pitcher) {
  const rows = loadAll().filter(r => r.date === dateStr && r.pitcher === pitcher);
  const set = new Set();
  rows.forEach(r => { if (r.inning != null) set.add(String(r.inning)); });
  return Array.from(set).sort((a,b)=> Number(a)-Number(b));
}

export function getLogs(dateStr, pitcher, inning = null) {
  let rows = loadAll().filter(r => r.date === dateStr && r.pitcher === pitcher);
  if (inning != null && inning !== '' && inning !== 'All') {
    rows = rows.filter(r => String(r.inning) === String(inning));
  }
  return rows;
}

export function summarizeSession(rows) {
  const total = rows.length || 1;
  const velos = rows.map(r => r.velo).filter(v => v != null);
  const fbOnly = rows.filter(r => r.type === 'FB');
  const fbAvg = fbOnly.length ? (fbOnly.map(r=>r.velo).filter(v=>v!=null).reduce((a,b)=>a+b,0)/fbOnly.map(r=>r.velo).filter(v=>v!=null).length) : null;
  const fbPeak = fbOnly.length ? Math.max(...fbOnly.map(r=>r.velo).filter(v=>v!=null)) : null;

  const strikeCount = rows.filter(r => r.strike).length;
  const whiffCount  = rows.filter(r => r.whiff).length;

  // per pitch-type summary
  const byType = {};
  for (const r of rows) {
    const k = r.type || 'UNK';
    byType[k] ??= { count: 0, veloSum: 0, veloN: 0 };
    byType[k].count += 1;
    if (r.velo != null) { byType[k].veloSum += r.velo; byType[k].veloN += 1; }
  }
  const usage = Object.entries(byType).map(([type, agg]) => ({
    type,
    pct: Math.round((agg.count / rows.length) * 1000) / 10,
    vAvg: agg.veloN ? Math.round((agg.veloSum/agg.veloN)*10)/10 : null
  })).sort((a,b)=> b.pct - a.pct);

  // tiny sparkline data (avg velo by inning, simple)
  const byInning = {};
  for (const r of rows) {
    const key = String(r.inning ?? '');
    if (!key) continue;
    byInning[key] ??= { vSum:0, n:0 };
    if (r.velo != null) { byInning[key].vSum += r.velo; byInning[key].n += 1; }
  }
  const veloTrend = Object.entries(byInning).map(([inn, o]) => ({ inning: Number(inn), v: o.n ? o.vSum/o.n : null }))
                   .sort((a,b)=> a.inning - b.inning);

  const mean = velos.length ? (velos.reduce((a,b)=>a+b,0)/velos.length) : null;
  const stdev = velos.length>1 ? Math.sqrt(velos.reduce((s,v)=> s + Math.pow(v-mean,2),0)/ (velos.length-1)) : null;

  return {
    totalPitches: rows.length,
    strikePct: Math.round((strikeCount/total)*100),
    whiffPct: Math.round((whiffCount/total)*100),
    fbAvg: fbAvg != null ? Math.round(fbAvg*10)/10 : null,
    fbPeak: fbPeak != null ? Math.round(fbPeak*10)/10 : null,
    usage,
    veloTrend,
    meanVelo: mean!=null ? Math.round(mean*10)/10 : null,
    sdVelo: stdev!=null ? Math.round(stdev*10)/10 : null
  };
}
