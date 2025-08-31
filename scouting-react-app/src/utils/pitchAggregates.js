// Shared pitch aggregation utilities (JS version)
export function normalizeCode(input) {
  if (!input) return 'OTH';
  const raw = String(input).trim().toLowerCase();
  const al = [
    { keys: ['ff','four-seam','four seam','fourseam','4-seam','4 seam','fastball','fb'], out: 'FF' },
    { keys: ['si','sinker','two-seam','two seam','2-seam','2 seam','2seam','ft'], out: 'SI' },
    { keys: ['ct','cutter','cut','fc'], out: 'CT' },
    { keys: ['sl','slider'], out: 'SL' },
    { keys: ['sw','sweeper','sl-sweeper','sl sweeper','sweeping slider','swp'], out: 'SW' },
    { keys: ['cb','curve','curveball','knuckle-curve','knuckle curve','kc'], out: 'CB' },
    { keys: ['ch','change','changeup'], out: 'CH' },
    { keys: ['spl','splitter','split','fs','forkball'], out: 'SPL' },
  ];
  for (const m of al) if (m.keys.includes(raw)) return m.out;
  const key = raw
    .replace(/[_\s-]+/g, '')
    .replace('fourseam','ff').replace('twoseam','si').replace('sinker','si')
    .replace('cutter','ct').replace('fc','ct').replace('slider','sl').replace('sweeper','sw')
    .replace('curveball','cb').replace('curve','cb').replace('changeup','ch')
    .replace('splitter','spl').replace('forkball','spl');
  if (key.startsWith('ff')) return 'FF';
  if (key.startsWith('si')) return 'SI';
  if (key.startsWith('ct')) return 'CT';
  if (key.startsWith('sl') && !key.startsWith('spl')) return 'SL';
  if (key.startsWith('sw')) return 'SW';
  if (key.startsWith('cb') || key.startsWith('kc')) return 'CB';
  if (key.startsWith('ch')) return 'CH';
  if (key.startsWith('spl') || key.startsWith('fs')) return 'SPL';
  return 'OTH';
}

function takeV(e){ return [e?.velo,e?.velocity,e?.v,e?.speed].map(Number).find(Number.isFinite); }
function takeIVB(e){ return [e?.ivb,e?.vert,e?.rise].map(Number).find(Number.isFinite); }
function takeHB(e){ return [e?.hb,e?.horz,e?.run].map(Number).find(Number.isFinite); }
function takeSpin(e){ return [e?.spin,e?.rpm].map(Number).find(Number.isFinite); }

export function filterByCode(pitches, pitchType){
  const code = normalizeCode(pitchType);
  return pitches.filter(e => normalizeCode(e?.pitchType ?? e?.type ?? e?.pitch ?? e?.pitch_name ?? e?.pitchClass ?? null) === code);
}

export function countN(pitches, pitchType){
  return filterByCode(pitches, pitchType).length;
}

export function avgVelo(pitches, pitchType){
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m){ const v = takeV(e); if (Number.isFinite(v)) { sum += v; n++; } }
  return n ? (sum / n) : null;
}
export function avgIVB(pitches, pitchType){
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m){ const v = takeIVB(e); if (Number.isFinite(v)) { sum += v; n++; } }
  return n ? (sum / n) : null;
}
export function avgHB(pitches, pitchType){
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m){ const v = takeHB(e); if (Number.isFinite(v)) { sum += v; n++; } }
  return n ? (sum / n) : null;
}
export function avgSpin(pitches, pitchType){
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m){ const v = takeSpin(e); if (Number.isFinite(v)) { sum += v; n++; } }
  return n ? (sum / n) : null;
}

export function usagePercent(pitches, pitchType){
  const total = pitches.length;
  if (!total) return null;
  const n = countN(pitches, pitchType);
  return Number(((n / total) * 100).toFixed(1));
}

function roundTo5(x){ return Math.max(20, Math.min(80, Math.round(x / 5) * 5)); }
function baseGradeFF(v){ if (v == null) return 50; if (v >= 98) return 80; if (v >= 96) return 70; if (v >= 94) return 60; if (v >= 92) return 50; if (v >= 90) return 40; return 30; }

export function grade2080(pitches, pitchType){
  const code = normalizeCode(pitchType);
  const ffAvg = avgVelo(pitches, 'FF');
  const v = avgVelo(pitches, code);
  const ivb = avgIVB(pitches, code);
  const hb = avgHB(pitches, code);
  const spin = avgSpin(pitches, code);
  if (v == null && ivb == null && hb == null && spin == null) return null;
  if (code === 'FF'){
    let g = baseGradeFF(v);
    if (Number.isFinite(ivb)) { if (ivb >= 17) g += 5; else if (ivb <= 12) g -= 5; }
    return roundTo5(g);
  }
  if (code === 'SI'){
    let g = 30; const hbMag = Number.isFinite(hb) ? Math.abs(hb) : -Infinity;
    if (hbMag >= 17) g = 70; else if (hbMag >= 14) g = 60; else if (hbMag >= 11) g = 50; else if (hbMag >= 8) g = 40; else g = 30;
    if ((Number.isFinite(ivb) && ivb <= 10) || (Number.isFinite(v) && v >= 94)) g += 5;
    return roundTo5(g);
  }
  if (code === 'CT'){
    let g = 50; const gap = (Number.isFinite(ffAvg) && Number.isFinite(v)) ? (ffAvg - v) : NaN;
    const hbAbs = Number.isFinite(hb) ? Math.abs(hb) : NaN;
    if (Number.isFinite(gap) && gap >= 2 && gap <= 4 && (Number.isFinite(hbAbs) ? hbAbs <= 5 : true)) g = 60;
    if ((Number.isFinite(v) && v >= 92) || (Number.isFinite(ivb) && ivb >= 8 && ivb <= 12)) g += 5;
    return roundTo5(g);
  }
  if (code === 'SL'){
    const sweep = Number.isFinite(hb) ? Math.abs(hb) : -Infinity; let g = 45;
    if (sweep >= 10) g = 60; else if (sweep >= 7) g = 55; else if (sweep >= 4) g = 50; else g = 45;
    if ((Number.isFinite(spin) && spin >= 2400) || (Number.isFinite(ivb) && ivb >= 0 && ivb <= 5)) g += 5;
    return roundTo5(g);
  }
  if (code === 'SW'){
    const sweep = Number.isFinite(hb) ? Math.abs(hb) : -Infinity; let g = 45;
    if (sweep >= 14) g = 70; else if (sweep >= 11) g = 60; else if (sweep >= 8) g = 55; else if (sweep >= 6) g = 50; else g = 45;
    if ((Number.isFinite(spin) && spin >= 2400) && (Number.isFinite(ivb) && ivb <= 3)) g += 5;
    return roundTo5(g);
  }
  if (code === 'CH'){
    let g = 50; if (Number.isFinite(hb) && hb >= 12) g += 5;
    const sep = Number.isFinite(ffAvg) && Number.isFinite(v) ? (ffAvg - v) : NaN;
    if (Number.isFinite(sep) && sep >= 8 && sep <= 12) g += 5; if (Number.isFinite(ivb) && ivb <= 8) g += 5;
    return Math.min(70, roundTo5(g));
  }
  if (code === 'CB'){
    const iv = Number.isFinite(ivb) ? ivb : Infinity; let g = 45;
    if (iv <= -10) g = 60; else if (iv <= -6) g = 55; else if (iv <= -3) g = 50; else g = 45;
    if (Number.isFinite(spin) && spin >= 2600) g += 5;
    return roundTo5(g);
  }
  return 50;
}

export function summarizePitchType(pitches, pitchType){
  const velo = avgVelo(pitches, pitchType);
  const ivb = avgIVB(pitches, pitchType);
  const hb = avgHB(pitches, pitchType);
  const spin = avgSpin(pitches, pitchType);
  const usagePct = usagePercent(pitches, pitchType);
  const grade = grade2080(pitches, pitchType);
  const n = countN(pitches, pitchType);
  return { velo, ivb, hb, spin, usagePct, grade, n };
}
