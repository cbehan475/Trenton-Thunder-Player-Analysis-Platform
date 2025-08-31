// Shared formatting helpers for per-pitch stats
// Use em-dash for empty/NA values
export const DASH = '—';

// Generic dash: if v is null/undefined/NaN, return em dash; otherwise return the original value (preserving type)
export function fmtDash<T>(v: T | null | undefined): string | T {
  if (v == null) return DASH;
  // If it's a number, ensure finite
  if (typeof v === 'number') return Number.isFinite(v) ? v : (DASH as unknown as T);
  // If it's a string that parses to NaN, treat as dash
  const n = Number(v as unknown as any);
  return Number.isNaN(n) ? (DASH as unknown as T) : v;
}

export function fmtMph(n: number | null): string {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

export function fmtIn(n: number | null): string {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

// Feet (e.g., extension)
export function fmtFt(n: number | null): string {
  const v = Number(n);
  return Number.isFinite(v) ? v.toFixed(1) : DASH;
}

export function fmtRpm(n: number | null): string {
  const v = Number(n);
  return Number.isFinite(v) ? String(Math.round(v)) : DASH;
}

// n is already a percentage value (e.g., 37.5), not a fraction
export function fmtPct(n: number | null): string {
  const v = Number(n);
  return Number.isFinite(v) ? `${v.toFixed(1)}%` : DASH;
}

export function fmtGrade(n: number | null): string {
  const v = Number(n);
  return Number.isFinite(v) ? String(Math.round(v)) : DASH;
}

