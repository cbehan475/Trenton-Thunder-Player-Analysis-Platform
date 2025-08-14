import React, { useMemo, useState } from 'react';

const pageStyles = {
  page: { minHeight: '100vh', background: '#0D47A1' },
  wrap: { maxWidth: 1100, margin: '0 auto', padding: '40px 20px' },
  title: { color: '#FFD700', fontSize: '36px', fontWeight: 900, marginBottom: 8, letterSpacing: 0.5 },
  sub: { color: 'rgba(255,255,255,0.85)', marginBottom: 22 },
  selectRow: { display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 },
  label: { color: 'rgba(255,255,255,0.9)', fontWeight: 700 },
  select: {
    background: 'rgba(10,20,40,0.7)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)',
    padding: '10px 12px', borderRadius: 8, minWidth: 220, outline: 'none'
  },
  card: {
    background: 'linear-gradient(180deg, rgba(25,55,99,0.96), rgba(18,42,84,0.95))',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 10px 24px rgba(0,0,0,0.35)', borderRadius: 14, padding: 18
  },
  cardTitle: { color: 'rgba(255,255,255,0.95)', fontSize: 18, fontWeight: 800, marginBottom: 12 },
  tableWrap: { overflowX: 'auto' },
  table: {
    width: '100%', borderCollapse: 'separate', borderSpacing: 0, tableLayout: 'fixed',
    borderRadius: 10, overflow: 'hidden'
  },
  th: {
    background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.95)',
    fontWeight: 800, textAlign: 'left', padding: '12px 14px', whiteSpace: 'nowrap'
  },
  td: {
    color: 'rgba(255,255,255,0.92)', padding: '12px 14px', borderTop: '1px solid rgba(255,255,255,0.08)',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
  },
  badge: (color) => ({
    display: 'inline-block', padding: '4px 10px', borderRadius: 999,
    background: color.bg, color: color.fg, fontWeight: 800, fontSize: 12
  }),
  // Slightly larger badge for MLB Benchmark visibility
  badgeBenchmark: (color) => ({
    display: 'inline-block', padding: '6px 12px', borderRadius: 999,
    background: color.bg, color: color.fg, fontWeight: 900, fontSize: 14, lineHeight: 1
  }),
  legend: { marginTop: 12, color: 'rgba(255,255,255,0.7)', fontSize: 13 }
};

// Color palette for benchmark badges
const COLORS = {
  above: { bg: 'rgba(22,163,74,0.18)', fg: '#86EFAC' },   // green
  avg:   { bg: 'rgba(234,179,8,0.18)',  fg: '#FDE68A' },   // yellow
  below: { bg: 'rgba(239,68,68,0.18)',  fg: '#FCA5A5' }    // red
};

// Simple MLB benchmark bands (illustrative)
const MLB_BENCHMARKS = {
  Fastball: { ivb: { above: 16, avgMin: 12 }, hbAbs: null },      // IVB >=16 above, 12–15 avg
  Slider:   { ivb: { above: 2,  avgMin: -3 }, hbAbs: { above: 7, avgMin: 3 } },
  Curveball:{ ivb: { above: -2, avgMin: -8 }, hbAbs: { above: 5, avgMin: 2 } },
  Changeup: { ivb: { above: 11, avgMin: 7 },  hbAbs: { above: 13, avgMin: 8 } }
};

function classifyBenchmark(pitchType, ivbValue, hbValue) {
  const b = MLB_BENCHMARKS[pitchType];
  if (!b) return { label: '—', color: COLORS.avg };

  // Use absolute HB when band provided
  const hb = b.hbAbs ? Math.abs(hbValue) : hbValue;

  // Score IVB and HB separately, then take the lower (stricter) result.
  const ivbScore =
    ivbValue >= b.ivb.above ? 'above' :
    ivbValue >= b.ivb.avgMin ? 'avg' : 'below';

  let hbScore = 'avg';
  if (b.hbAbs) {
    hbScore =
      hb >= b.hbAbs.above ? 'above' :
      hb >= b.hbAbs.avgMin ? 'avg' : 'below';
  }

  const rank = { above: 3, avg: 2, below: 1 };
  const final = rank[ivbScore] < rank[hbScore] ? ivbScore : hbScore;

  return {
    label:
      final === 'above' ? 'Above Avg' :
      final === 'avg'   ? 'MLB Avg'   : 'Below Avg',
    color: COLORS[final]
  };
}

// Static mock data (unchanged)
const PITCHERS = [
  {
    name: 'Miguel Sime',
    pitches: [
      { type: 'Fastball',  velo: '94–96 mph', ivb: 17, hb: 8,  cmd: 'Above-average' },
      { type: 'Slider',    velo: '84–86 mph', ivb: -1, hb: 5,  cmd: 'Average' },
      { type: 'Changeup',  velo: '86–88 mph', ivb: 10, hb: 15, cmd: 'Average' }
    ]
  },
  {
    name: 'Joe Ariola',
    pitches: [
      { type: 'Fastball',  velo: '91–93 mph', ivb: 15, hb: 7,  cmd: 'Average' },
      { type: 'Curveball', velo: '76–78 mph', ivb: -6, hb: 3,  cmd: 'Above-average' },
      { type: 'Changeup',  velo: '82–84 mph', ivb: 9,  hb: 14, cmd: 'Average' }
    ]
  },
  {
    name: 'Andrew Ronne',
    pitches: [
      { type: 'Fastball',  velo: '92–94 mph', ivb: 16, hb: 6,  cmd: 'Above-average' },
      { type: 'Slider',    velo: '83–85 mph', ivb: 0,  hb: 7,  cmd: 'Average' },
      { type: 'Changeup',  velo: '84–86 mph', ivb: 11, hb: 13, cmd: 'Average' }
    ]
  }
];

export default function PitchControlMovement() {
  const [selected, setSelected] = useState(PITCHERS[0].name);
  const pitcher = useMemo(
    () => PITCHERS.find(p => p.name === selected) ?? PITCHERS[0],
    [selected]
  );

  return (
    <div style={pageStyles.page}>
      <div style={pageStyles.wrap}>
      <h1 style={pageStyles.title}>Pitch Control &amp; Movement</h1>
      <div style={pageStyles.sub}>
        Velocity ranges, induced vertical break (IVB), horizontal break (HB), and command grades.
      </div>

      <div className="selector-row">
        <label htmlFor="pitcherSelect" className="selector-label">Select Pitcher:</label>
        <select
          id="pitcherSelect"
          className="pitcher-select"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {PITCHERS.map(p => (
            <option key={p.name} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>

      <div style={pageStyles.card}>
        <div style={pageStyles.cardTitle}>{pitcher.name}</div>
        <div style={pageStyles.tableWrap}>
          <table style={pageStyles.table}>
            <colgroup>
              <col style={{ width: '22%' }} />
              <col style={{ width: '20%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '16%' }} />
              <col style={{ width: '18%' }} /> {/* MLB Benchmark */}
            </colgroup>
            <thead>
              <tr>
                <th style={pageStyles.th}>Pitch Type</th>
                <th style={pageStyles.th}>Velocity</th>
                <th style={pageStyles.th}>IVB</th>
                <th style={pageStyles.th}>HB</th>
                <th style={pageStyles.th}>Command</th>
                <th style={pageStyles.th}>MLB Benchmark</th>
              </tr>
            </thead>
            <tbody>
              {pitcher.pitches.map((row, idx) => {
                const bench = classifyBenchmark(row.type, row.ivb, row.hb);
                const cmdColor =
                  row.cmd === 'Above-average' ? COLORS.above :
                  row.cmd === 'Average'        ? COLORS.avg   : COLORS.below;

                return (
                  <tr key={idx}>
                    <td style={pageStyles.td}>{row.type}</td>
                    <td style={pageStyles.td}>{row.velo}</td>
                    <td style={pageStyles.td}>{row.ivb} in</td>
                    <td style={pageStyles.td}>{row.hb} in</td>
                    <td style={pageStyles.td}>
                      <span style={pageStyles.badge(cmdColor)}>{row.cmd}</span>
                    </td>
                    <td style={pageStyles.td}>
                      <span style={pageStyles.badgeBenchmark(bench.color)}>{bench.label}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div style={pageStyles.legend}>
          MLB benchmark labels consider IVB (and absolute HB when relevant) for each pitch type.
          <span style={{ marginLeft: 10, color: COLORS.above.fg }}>Above Avg</span> ·
          <span style={{ marginLeft: 10, color: COLORS.avg.fg }}>MLB Avg</span> ·
          <span style={{ marginLeft: 10, color: COLORS.below.fg }}>Below Avg</span>
        </div>
      </div>
      </div>
    </div>
  );
}
