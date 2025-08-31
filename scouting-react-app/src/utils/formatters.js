// Shared formatting helpers for per-pitch stats (JS version)
// Use em-dash for empty/NA values
export const DASH = '—';

export function fmtDash(value) {
  if (value == null) return DASH;
  const n = Number(value);
  return Number.isFinite(n) ? String(value) : DASH;
}

export function fmtMph(n) {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

export function fmtIn(n) {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

export function fmtRpm(n) {
  const v = Number(n);
  return Number.isFinite(v) ? String(Math.round(v)) : DASH;
}

export function fmtPct(n) {
  const v = Number(n);
  return Number.isFinite(v) ? `${v.toFixed(1)}%` : DASH;
}

export function fmtGrade(n) {
  const v = Number(n);
  return Number.isFinite(v) ? String(Math.round(v)) : DASH;
}
