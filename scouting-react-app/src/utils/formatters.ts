// Shared formatting helpers for per-pitch stats
// Use em-dash for empty/NA values
export const DASH = '—';

export function fmtDash(value: unknown): string {
  if (value == null) return DASH;
  const n = Number(value);
  return Number.isFinite(n) ? String(value) : DASH;
}

export function fmtMph(n: unknown): string {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

export function fmtIn(n: unknown): string {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

export function fmtRpm(n: unknown): string {
  const v = Number(n);
  return Number.isFinite(v) ? String(Math.round(v)) : DASH;
}

export function fmtPct(n: unknown): string {
  const v = Number(n);
  return Number.isFinite(v) ? `${v.toFixed(1)}%` : DASH;
}

export function fmtGrade(n: unknown): string {
  const v = Number(n);
  return Number.isFinite(v) ? String(Math.round(v)) : DASH;
}
