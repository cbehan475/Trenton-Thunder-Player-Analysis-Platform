// src/pages/PitcherReports.js
import React, { useMemo, useState } from 'react';
import { buildPitcherReport } from '../utils/pitchReportEngine';

// Local sample data (kept here so we don't touch other pages/files)
const PITCHERS = [
  {
    name: 'Miguel Sime',
    pitches: [
      { type: 'Fastball',  velocity: '94–96 mph', ivb: 17, hb: 8,  command: 'Above-average' },
      { type: 'Slider',    velocity: '84–86 mph', ivb: -1, hb: 5,  command: 'Average' },
      { type: 'Changeup',  velocity: '86–88 mph', ivb: 10, hb: 15, command: 'Average' },
    ],
  },
  {
    name: 'Joe Ariola',
    pitches: [
      { type: 'Fastball',  velocity: '91–93 mph', ivb: 15, hb: 7,  command: 'Average' },
      { type: 'Curveball', velocity: '76–78 mph', ivb: -6, hb: 3,  command: 'Above-average' },
      { type: 'Changeup',  velocity: '82–84 mph', ivb: 9,  hb: 14, command: 'Average' },
    ],
  },
  {
    name: 'Andrew Ronne',
    pitches: [
      { type: 'Fastball',  velocity: '92–94 mph', ivb: 16, hb: 6,  command: 'Above-average' },
      { type: 'Slider',    velocity: '83–85 mph', ivb: 0,  hb: 7,  command: 'Average' },
      { type: 'Changeup',  velocity: '84–86 mph', ivb: 11, hb: 13, command: 'Average' },
    ],
  },
];

export default function PitcherReports() {
  const [name, setName] = useState(PITCHERS[0].name);

  const pitcher = useMemo(
    () => PITCHERS.find(p => p.name === name),
    [name]
  );

  const bullets = useMemo(() => buildPitcherReport(pitcher), [pitcher]);

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '32px 24px',
        background: 'linear-gradient(180deg, #0d1b2a 0%, #0b2d4d 100%)',
      }}
    >
      <h1
        style={{
          color: '#FFD166',
          margin: '0 0 16px 0',
          fontSize: '36px',
          fontWeight: 900,
          letterSpacing: '0.5px',
        }}
      >
        Pitcher Reports (beta)
      </h1>

      <p style={{ color: '#c7d3e3', margin: '0 0 16px 0' }}>
        Auto-generated notes by comparing pitcher metrics to MLB benchmarks.
      </p>

      <label htmlFor="pitcher" style={{ color: '#c7d3e3', marginRight: 8 }}>
        Select Pitcher:
      </label>
      <select
        id="pitcher"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{
          background: '#12243a',
          color: '#e9f1ff',
          border: '1px solid #1f3b5c',
          borderRadius: 8,
          padding: '8px 12px',
          marginBottom: 16,
        }}
      >
        {PITCHERS.map(p => (
          <option key={p.name} value={p.name}>{p.name}</option>
        ))}
      </select>

      <ul style={{ listStyle: 'disc', paddingLeft: 24, color: '#d9e6ff' }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ marginBottom: 8 }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
