// src/components/FVBadge.jsx
import React from 'react';

function bandColor(fv) {
  const n = Number(fv);
  if (!Number.isFinite(n)) return { bg: 'rgba(148,163,184,0.15)', fg: '#E5E7EB', border: 'rgba(255,214,0,0.35)' };
  if (n < 40) return { bg: 'rgba(148,163,184,0.12)', fg: '#9CA3AF', border: 'rgba(255,214,0,0.35)' };
  if (n < 55) return { bg: 'rgba(17,24,39,0.6)', fg: '#E5E7EB', border: 'rgba(255,214,0,0.65)' };
  return { bg: 'rgba(16,185,129,0.18)', fg: '#10B981', border: 'rgba(16,185,129,0.6)' }; // greenish for >=55
}

// Props: { fv, handedness, size }
// Back-compat: also accept { value } if fv is not provided
export default function FVBadge({ fv, handedness, size='md', title='FV', value }) {
  const fvVal = fv ?? value;
  const { bg, fg, border } = bandColor(fvVal);
  const pad = size === 'sm' ? '2px 8px' : size === 'lg' ? '6px 12px' : '4px 10px';
  const font = size === 'sm' ? 11 : size === 'lg' ? 14 : 12;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: pad, borderRadius: 999,
      background: bg, color: fg, border: `1px solid ${border}`,
      fontWeight: 900, letterSpacing: 0.3, fontSize: font
    }} aria-label={`Future Value ${fvVal}`}>
      {handedness && (
        <span style={{ opacity: 0.85, marginRight: 4 }}>{handedness}</span>
      )}
      <span style={{ opacity: 0.85 }}>{title}</span>
      <span style={{ color: '#FFD600' }}>{fvVal ?? '—'}</span>
    </span>
  );
}
