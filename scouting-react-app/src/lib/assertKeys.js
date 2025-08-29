// src/lib/assertKeys.js
// Dev-only helper to surface accidental NaN keys
export function assertNotNaNKey(k, ctx = '') {
  if (typeof k === 'number' && Number.isNaN(k)) {
    // eslint-disable-next-line no-console
    console.error('[key NaN]', { ctx, k, stack: new Error().stack });
  }
  return k;
}
