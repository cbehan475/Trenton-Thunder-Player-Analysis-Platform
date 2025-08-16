import React, { useMemo, useState } from 'react';
import { getAllPitcherNames, getPitchingMetricsFor, getPitchingLogStats } from '../data/logs/pitchingIndex';

// ---- SAMPLE DATA (fallback only if logs have no match) ----
const SAMPLE = {
  'Miguel Sime': [
    { type: 'Fastball',  velo: '94–96 mph', ivb: 17, hb: 8,  command: 'Above-average' },
    { type: 'Slider',    velo: '84–86 mph', ivb: -1, hb: 5,  command: 'Average' },
    { type: 'Changeup',  velo: '86–88 mph', ivb: 10, hb: 15, command: 'Average' },
  ],
  'Joe Ariola': [
    { type: 'Fastball',  velo: '91–93 mph', ivb: 15, hb: 7,  command: 'Average' },
    { type: 'Curveball', velo: '76–78 mph', ivb: -6, hb: 3,  command: 'Above-average' },
    { type: 'Changeup',  velo: '82–84 mph', ivb: 9,  hb: 14, command: 'Average' },
  ],
  'Andrew Ronne': [
    { type: 'Fastball',  velo: '92–94 mph', ivb: 16, hb: 6,  command: 'Above-average' },
    { type: 'Slider',    velo: '83–85 mph', ivb: 0,  hb: 7,  command: 'Average' },
    { type: 'Changeup',  velo: '84–86 mph', ivb: 11, hb: 13, command: 'Average' },
  ],
};

// ------- Tiny benchmark helper (same labels you’ve been using) -------
function mlbBenchmarkLabel(pitch) {
  const t = pitch.type.toLowerCase();
  const ivb = Number(pitch.ivb) || 0;
  if (t.includes('fastball') || t.includes('curve')) return ivb >= 15 ? 'Above Avg' : 'MLB Avg';
  if (t.includes('change')) return ivb >= 10 ? 'Above Avg' : 'MLB Avg';
  return 'MLB Avg';
}

function buildBullets(name, pitches) {
  const lines = [];
  lines.push(`${name}: summary of pitch traits vs MLB benchmarks.`);
  pitches.forEach((p) => {
    const ivbTxt = typeof p.ivb === 'number' ? `${p.ivb >= 0 ? '+' : ''}${p.ivb}" IVB` : `${p.ivb} IVB`;
    const hbTxt  = typeof p.hb  === 'number' ? `${p.hb}" HB` : `${p.hb} HB`;
    lines.push(`${p.type} — ${p.velo}, ${ivbTxt}, ${hbTxt}; command: ${p.command} (bench: ${mlbBenchmarkLabel(p)}).`);
  });
  const fb = pitches.find(p => p.type.toLowerCase().includes('fastball'));
  if (fb && Number(fb.ivb) >= 15) lines.push('Overall: Fastball carries in the zone; offspeed around MLB average.');
  return lines;
}

export default function PitcherReports() {
  const namesFromLogs = getAllPitcherNames();
  const pickerNames = namesFromLogs.length ? namesFromLogs : Object.keys(SAMPLE);

  const [selectedName, setSelectedName] = useState(pickerNames[0] || '');

  // Debug/telemetry
  const stats = getPitchingLogStats();
  const options = namesFromLogs;
  const usingLogs = Array.isArray(options) && options.length > 0;
  // Optional console for verification
  // eslint-disable-next-line no-console
  console.log('[PitcherReports] names from logs:', options, 'stats:', stats);

  const pitches = useMemo(() => {
    // Try real logs first
    const rows = getPitchingMetricsFor(selectedName);
    if (rows && rows.length) {
      // rows look like {type, velo, ivb, hb, command}
      return rows;
    }
    // Fallback to sample for the three pitchers
    return SAMPLE[selectedName] || [];
  }, [selectedName]);

  const bullets = useMemo(() => buildBullets(selectedName, pitches), [selectedName, pitches]);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg,#0e2d56,#0b4a8f 55%,#0b67c7)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h1 style={{ color: '#FFD600', fontWeight: 900, letterSpacing: 0.5, marginBottom: 8 }}>
          Pitcher Reports
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: 0 }}>
          Auto-generated notes by comparing pitcher metrics to MLB benchmarks.
        </p>

        {/* Picker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 16px' }}>
          <label htmlFor="reportPitcher" style={{ color: 'white', fontWeight: 600 }}>Select Pitcher:</label>
          <select
            id="reportPitcher"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            style={{
              background: '#152e57', color: 'white', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 8, padding: '10px 12px', minWidth: 220
            }}
          >
            {pickerNames.length ? (
              pickerNames.map((n) => <option key={n} value={n}>{n}</option>)
            ) : (
              <option value="" disabled>(no pitcher names found)</option>
            )}
          </select>

          <span
            title={usingLogs ? `${stats.files} files • ${stats.entries} entries` : 'Using local sample rows'}
            style={{
              marginLeft: 8,
              padding: '4px 8px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 800,
              border: `1px solid ${usingLogs ? 'rgba(88,199,119,0.7)' : 'rgba(255,214,0,0.7)'}`,
              background: usingLogs ? 'rgba(88,199,119,0.18)' : 'rgba(255,214,0,0.18)',
              color: usingLogs ? '#58c777' : '#FFD600',
            }}
          >
            {usingLogs ? `Logs: ${stats.files} • ${stats.entries}` : 'Sample data'}
          </span>
        </div>

        {/* Content */}
        {pitches && pitches.length ? (
          <div style={{
            background: 'linear-gradient(180deg, rgba(15,40,77,0.95), rgba(15,40,77,0.85))',
            border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12,
            boxShadow: '0 10px 28px rgba(0,0,0,0.35)', padding: 16, color: 'white'
          }}>
            <div style={{ fontWeight: 800, marginBottom: 12 }}>{selectedName}</div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                <colgroup>
                  <col style={{ width: '24%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '14%' }} />
                  <col style={{ width: '14%' }} />
                  <col style={{ width: '18%' }} />
                  <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                    {['Pitch Type', 'Velocity', 'IVB', 'HB', 'Command', 'MLB Benchmark'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)', fontWeight: 700 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pitches.map((p) => (
                    <tr key={p.type} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '10px 12px' }}>{p.type}</td>
                      <td style={{ padding: '10px 12px' }}>{p.velo}</td>
                      <td style={{ padding: '10px 12px' }}>{typeof p.ivb === 'number' ? `${p.ivb} in` : p.ivb}</td>
                      <td style={{ padding: '10px 12px' }}>{typeof p.hb  === 'number' ? `${p.hb} in`  : p.hb}</td>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: p.command === 'Above-average' ? '#58c777' : p.command === 'Average' ? '#f5c04f' : '#f56b6b' }}>
                        {p.command}
                      </td>
                      <td style={{ padding: '10px 12px' }}>
                        <span style={{
                          display: 'inline-block', padding: '4px 8px', borderRadius: 999,
                          background: mlbBenchmarkLabel(p) === 'Above Avg' ? 'rgba(88,199,119,0.18)' : 'rgba(255,214,0,0.18)',
                          border: `1px solid ${mlbBenchmarkLabel(p) === 'Above Avg' ? 'rgba(88,199,119,0.7)' : 'rgba(255,214,0,0.7)'}`,
                          color: mlbBenchmarkLabel(p) === 'Above Avg' ? '#58c777' : '#FFD600',
                          fontSize: 13, fontWeight: 800
                        }}>
                          {mlbBenchmarkLabel(p)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bullets */}
            <div style={{ marginTop: 18, paddingTop: 12, borderTop: '1px dashed rgba(255,255,255,0.15)' }}>
              <div style={{ fontWeight: 800, marginBottom: 6, color: 'rgba(255,255,255,0.9)' }}>Scouting-style report</div>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                { (bullets).map((line, idx) => (
                  <li key={idx} style={{ margin: '6px 0', lineHeight: 1.35, color: 'rgba(255,255,255,0.9)' }}>{line}</li>
                )) }
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ color: 'rgba(255,255,255,0.85)', marginTop: 16 }}>
            Report template is ready — metrics mapping for <strong>{selectedName || 'this player'}</strong> will be connected in the next step.
          </div>
        )}
      </div>
    </div>
  );
}
