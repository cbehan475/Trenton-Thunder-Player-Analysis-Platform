// src/lib/pitchLabel.js
// Shared pitch label normalization and mapping helpers.

// Normalize a raw label to MLB short code and full name.
export function normalizePitchLabel(input) {
  if (!input) return { code: 'OTH', full: 'Other' };
  const raw = String(input).trim();
  const lower = raw.toLowerCase();
  const map = [
    { codes: ['ff', 'four-seam', 'four seam', 'fourseam', '4-seam', '4 seam', 'fastball', 'fb'], code: 'FF', full: 'Four-Seam Fastball' },
    { codes: ['si', 'sinker', 'two-seam', 'two seam', '2-seam', '2 seam', 'two-seamer', '2seam', 'two seam fastball', 'ft'], code: 'SI', full: 'Sinker (Two-Seam)' },
    { codes: ['ct', 'cutter', 'cut'], code: 'CT', full: 'Cutter' },
    { codes: ['sl', 'slider'], code: 'SL', full: 'Slider' },
    { codes: ['sw', 'sweeper', 'sl-sweeper', 'sl sweeper', 'sweeping slider'], code: 'SW', full: 'Sweeper' },
    { codes: ['cb', 'curve', 'curveball', 'knuckle-curve', 'knuckle curve', 'kc'], code: 'CB', full: 'Curveball' },
    { codes: ['ch', 'change', 'changeup'], code: 'CH', full: 'Changeup' },
    { codes: ['spl', 'splitter', 'split', 'fs', 'forkball'], code: 'SPL', full: 'Splitter' },
    { codes: ['oth', 'other', 'eephus', 'gyro'], code: 'OTH', full: 'Other' },
  ];
  for (const m of map) {
    if (m.codes.includes(lower)) return { code: m.code, full: m.full };
  }
  const key = lower
    .replace(/[_\s-]+/g, '')
    .replace('fourseam', 'ff')
    .replace('twoseam', 'si')
    .replace('sinker', 'si')
    .replace('cutter', 'ct')
    .replace('slider', 'sl')
    .replace('sweeper', 'sw')
    .replace('curveball', 'cb')
    .replace('curve', 'cb')
    .replace('changeup', 'ch')
    .replace('splitter', 'spl')
    .replace('forkball', 'spl');
  if (key.startsWith('ff')) return { code: 'FF', full: 'Four-Seam Fastball' };
  if (key.startsWith('si')) return { code: 'SI', full: 'Sinker (Two-Seam)' };
  if (key.startsWith('ct')) return { code: 'CT', full: 'Cutter' };
  if (key.startsWith('sl') && !key.startsWith('spl')) return { code: 'SL', full: 'Slider' };
  if (key.startsWith('sw')) return { code: 'SW', full: 'Sweeper' };
  if (key.startsWith('cb') || key.startsWith('kc')) return { code: 'CB', full: 'Curveball' };
  if (key.startsWith('ch')) return { code: 'CH', full: 'Changeup' };
  if (key.startsWith('spl') || key.startsWith('fs')) return { code: 'SPL', full: 'Splitter' };
  return { code: 'OTH', full: raw };
}

// Map raw label to normalized code and flag if code is in the verified arsenal for a pitcher.
export function mapPitchLabel(rawLabel, pitcherId, arsenalMap) {
  const { code } = normalizePitchLabel(rawLabel);
  const allowed = pitcherId && arsenalMap ? arsenalMap[pitcherId]?.allowed : null;
  const inArsenal = allowed ? allowed.has(code) : true;
  return { code, inArsenal };
}
