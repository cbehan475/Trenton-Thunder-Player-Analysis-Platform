// src/components/ScoutingGradeInput.jsx
import React from 'react';

// Simple input pair for MLB 20–80 grades (even numbers only)
// Props: { label, value: {present, future}, onChange({present, future}) }
// Props: { label, value:{present,future}, onChange, tooltip }
export default function ScoutingGradeInput({ label, value, onChange, tooltip }) {
  const present = value?.present ?? '';
  const future = value?.future ?? '';

  const enforceEven = (n) => {
    const v = Number(n);
    if (!Number.isFinite(v)) return '';
    const clamped = Math.max(20, Math.min(80, v));
    return clamped % 2 === 0 ? clamped : clamped + 1; // enforce even
  };

  const handle = (key) => (e) => {
    const val = enforceEven(e.target.value);
    onChange?.({ present, future, [key]: val === '' ? null : val });
  };

  const cellStyle = {
    display: 'flex', gap: 8, alignItems: 'center'
  };

  const inputStyle = {
    width: 80, minWidth: 80,
    background: '#122448', color: 'white', border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 8, padding: '6px 8px'
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
      <div style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }} title={tooltip}>{label}</div>
      <div style={cellStyle}>
        <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }} title={tooltip}>Present</label>
        <input type="number" min={20} max={80} step={2} value={present}
          onChange={handle('present')} style={inputStyle} title={tooltip} />
        <label style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }} title={tooltip}>Future</label>
        <input type="number" min={20} max={80} step={2} value={future}
          onChange={handle('future')} style={inputStyle} title={tooltip} />
      </div>
    </div>
  );
}
