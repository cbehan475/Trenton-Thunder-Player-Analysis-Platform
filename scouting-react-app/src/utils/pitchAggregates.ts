// Shared pitch aggregation utilities
// These helpers operate on arrays of pitch event objects with fields commonly found in our logs:
// { pitcher, pitchType/type/pitch/pitch_name/pitchClass, velo/velocity/v/speed, ivb/vert/rise, hb/horz/run, spin/rpm }

export type PitchEvent = {
  pitcher?: string;
  pitchType?: string;
  type?: string;
  pitch?: string;
  pitch_name?: string;
  pitchClass?: string;
  velo?: number; velocity?: number; v?: number; speed?: number;
  ivb?: number; vert?: number; rise?: number;
  hb?: number; horz?: number; run?: number;
  spin?: number; rpm?: number;
};

export type Summary = {
  velo: number | null;
  ivb: number | null;
  hb: number | null;
  spin: number | null;
  usagePct: number | null;
  grade: number | null;
  n: number;
};

export function normalizeCode(input: unknown): string {
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

function takeV(e: PitchEvent): number | undefined {
  return [e.velo, e.velocity, e.v, e.speed].map(Number).find(Number.isFinite) as number | undefined;
}
function takeIVB(e: PitchEvent): number | undefined {
  return [e.ivb, e.vert, e.rise].map(Number).find(Number.isFinite) as number | undefined;
}
function takeHB(e: PitchEvent): number | undefined {
  return [e.hb, e.horz, e.run].map(Number).find(Number.isFinite) as number | undefined;
}
function takeSpin(e: PitchEvent): number | undefined {
  return [e.spin, e.rpm].map(Number).find(Number.isFinite) as number | undefined;
}

export function filterByCode(pitches: PitchEvent[], pitchType: string): PitchEvent[] {
  const code = normalizeCode(pitchType);
  return pitches.filter(e => normalizeCode(e.pitchType ?? e.type ?? e.pitch ?? e.pitch_name ?? e.pitchClass ?? null) === code);
}

export function countN(pitches: PitchEvent[], pitchType: string): number {
  return filterByCode(pitches, pitchType).length;
}

export function avgVelo(pitches: PitchEvent[], pitchType: string): number | null {
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m) { const v = takeV(e); if (Number.isFinite(v)) { sum += v!; n++; } }
  return n ? (sum / n) : null;
}
export function avgIVB(pitches: PitchEvent[], pitchType: string): number | null {
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m) { const v = takeIVB(e); if (Number.isFinite(v)) { sum += v!; n++; } }
  return n ? (sum / n) : null;
}
export function avgHB(pitches: PitchEvent[], pitchType: string): number | null {
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m) { const v = takeHB(e); if (Number.isFinite(v)) { sum += v!; n++; } }
  return n ? (sum / n) : null;
}
export function avgSpin(pitches: PitchEvent[], pitchType: string): number | null {
  const m = filterByCode(pitches, pitchType);
  if (!m.length) return null;
  let sum = 0, n = 0;
  for (const e of m) { const v = takeSpin(e); if (Number.isFinite(v)) { sum += v!; n++; } }
  return n ? (sum / n) : null;
}

export function usagePercent(pitches: PitchEvent[], pitchType: string): number | null {
  const total = pitches.length;
  if (!total) return null;
  const n = countN(pitches, pitchType);
  return Number(((n / total) * 100).toFixed(1));
}

function roundTo5(x: number): number { return Math.max(20, Math.min(80, Math.round(x / 5) * 5)); }
function baseGradeFF(v: number | null): number { if (v == null) return 50; if (v >= 98) return 80; if (v >= 96) return 70; if (v >= 94) return 60; if (v >= 92) return 50; if (v >= 90) return 40; return 30; }

export function grade2080(pitches: PitchEvent[], pitchType: string): number | null {
  const code = normalizeCode(pitchType);
  // compute FF avg velo context for same pitcher
  const ffAvg = avgVelo(pitches, 'FF');
  const v = avgVelo(pitches, code);
  const ivb = avgIVB(pitches, code);
  const hb = avgHB(pitches, code);
  const spin = avgSpin(pitches, code);
  if (v == null && ivb == null && hb == null && spin == null) return null;
  if (code === 'FF') {
    let g = baseGradeFF(v);
    if (Number.isFinite(ivb as number)) { const i = ivb as number; if (i >= 17) g += 5; else if (i <= 12) g -= 5; }
    return roundTo5(g);
  }
  if (code === 'SI') {
    let g = 30; const hbMag = Number.isFinite(hb as number) ? Math.abs(hb as number) : -Infinity;
    if (hbMag >= 17) g = 70; else if (hbMag >= 14) g = 60; else if (hbMag >= 11) g = 50; else if (hbMag >= 8) g = 40; else g = 30;
    if ((Number.isFinite(ivb as number) && (ivb as number) <= 10) || (Number.isFinite(v as number) && (v as number) >= 94)) g += 5;
    return roundTo5(g);
  }
  if (code === 'CT') {
    let g = 50; const gap = (Number.isFinite(ffAvg as number) && Number.isFinite(v as number)) ? ((ffAvg as number) - (v as number)) : NaN;
    const hbAbs = Number.isFinite(hb as number) ? Math.abs(hb as number) : NaN;
    if (Number.isFinite(gap) && gap >= 2 && gap <= 4 && (Number.isFinite(hbAbs) ? hbAbs <= 5 : true)) g = 60;
    if ((Number.isFinite(v as number) && (v as number) >= 92) || (Number.isFinite(ivb as number) && (ivb as number) >= 8 && (ivb as number) <= 12)) g += 5;
    return roundTo5(g);
  }
  if (code === 'SL') {
    const sweep = Number.isFinite(hb as number) ? Math.abs(hb as number) : -Infinity; let g = 45;
    if (sweep >= 10) g = 60; else if (sweep >= 7) g = 55; else if (sweep >= 4) g = 50; else g = 45;
    if ((Number.isFinite(spin as number) && (spin as number) >= 2400) || (Number.isFinite(ivb as number) && (ivb as number) >= 0 && (ivb as number) <= 5)) g += 5;
    return roundTo5(g);
  }
  if (code === 'SW') {
    const sweep = Number.isFinite(hb as number) ? Math.abs(hb as number) : -Infinity; let g = 45;
    if (sweep >= 14) g = 70; else if (sweep >= 11) g = 60; else if (sweep >= 8) g = 55; else if (sweep >= 6) g = 50; else g = 45;
    if ((Number.isFinite(spin as number) && (spin as number) >= 2400) && (Number.isFinite(ivb as number) && (ivb as number) <= 3)) g += 5;
    return roundTo5(g);
  }
  if (code === 'CH') {
    let g = 50; if (Number.isFinite(hb as number) && (hb as number) >= 12) g += 5;
    const sep = Number.isFinite(ffAvg as number) && Number.isFinite(v as number) ? ((ffAvg as number) - (v as number)) : NaN;
    if (Number.isFinite(sep) && sep >= 8 && sep <= 12) g += 5; if (Number.isFinite(ivb as number) && (ivb as number) <= 8) g += 5;
    return Math.min(70, roundTo5(g));
  }
  if (code === 'CB') {
    const iv = Number.isFinite(ivb as number) ? (ivb as number) : Infinity; let g = 45;
    if (iv <= -10) g = 60; else if (iv <= -6) g = 55; else if (iv <= -3) g = 50; else g = 45;
    if (Number.isFinite(spin as number) && (spin as number) >= 2600) g += 5;
    return roundTo5(g);
  }
  return 50;
}

export function summarizePitchType(pitches: PitchEvent[], pitchType: string): Summary {
  const velo = avgVelo(pitches, pitchType);
  const ivb = avgIVB(pitches, pitchType);
  const hb = avgHB(pitches, pitchType);
  const spin = avgSpin(pitches, pitchType);
  const usagePct = usagePercent(pitches, pitchType);
  const grade = grade2080(pitches, pitchType);
  const n = countN(pitches, pitchType);
  return { velo, ivb, hb, spin, usagePct, grade, n };
}
