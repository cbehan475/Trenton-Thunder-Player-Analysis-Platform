import React, { useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { seedLogsByDate, getPitchersForDate, getInningsFor, getLogs } from '../data/logs/pitchingIndex.js';
import './PitchingLogsPage.css';
import { getBench, delta, BENCH_LEVEL, FEATURE_BENCHMARK_BADGES } from '../lib/benchmarks.js';
import pitching2025_06_04 from '../data/logs/pitching-2025-06-04.js';
import pitching2025_06_05 from '../data/logs/pitching-2025-06-05.js';
import pitching2025_06_06 from '../data/logs/pitching-2025-06-06.js';
import pitching2025_06_07 from '../data/logs/pitching-2025-06-07.js';
import pitching2025_06_08 from '../data/logs/pitching-2025-06-08.js';
import pitching2025_06_11 from '../data/logs/pitching-2025-06-11.js';
import pitching2025_06_12 from '../data/logs/pitching-2025-06-12.js';
import pitching2025_06_13 from '../data/logs/pitching-2025-06-13.js';
import pitching2025_06_14 from '../data/logs/pitching-2025-06-14.js';
import pitching2025_06_15 from '../data/logs/pitching-2025-06-15.js';
import pitching2025_06_18 from '../data/logs/pitching-2025-06-18.js';
import pitching2025_06_20 from '../data/logs/pitching-2025-06-20.js';
import pitching2025_06_21 from '../data/logs/pitching-2025-06-21.js';
import pitching2025_06_22 from '../data/logs/pitching-2025-06-22.js';
import pitching2025_06_24 from '../data/logs/pitching-2025-06-24.js';
import pitching2025_06_25 from '../data/logs/pitching-2025-06-25.js';
import pitching2025_06_26 from '../data/logs/pitching-2025-06-26.js';
import pitching2025_06_27 from '../data/logs/pitching-2025-06-27.js';
import pitching2025_06_28 from '../data/logs/pitching-2025-06-28.js';
import pitching2025_06_29 from '../data/logs/pitching-2025-06-29.js';
import pitching2025_07_01 from '../data/logs/pitching-2025-07-01.js';
import pitching2025_07_02 from '../data/logs/pitching-2025-07-02.js';
import pitching2025_07_03 from '../data/logs/pitching-2025-07-03.js';
import pitching2025_07_04 from '../data/logs/pitching-2025-07-04.js';
import pitching2025_07_05 from '../data/logs/pitching-2025-07-05.js';
import pitching2025_07_06 from '../data/logs/pitching-2025-07-06.js';
import pitching2025_07_08 from '../data/logs/pitching-2025-07-08.js';
import pitching2025_07_09 from '../data/logs/pitching-2025-07-09.js';
import pitching2025_07_11 from '../data/logs/pitching-2025-07-11.js';
import pitching2025_07_12 from '../data/logs/pitching-2025-07-12.js';

const GAME_DATES = [
  '2025-06-04',
  '2025-06-05',
  '2025-06-06',
  '2025-06-07',
  '2025-06-08',
  '2025-06-11',
  '2025-06-12',
  '2025-06-13',
  '2025-06-14',
  '2025-06-15',
  '2025-06-18',
  '2025-06-20',
  '2025-06-21',
  '2025-06-22',
  '2025-06-24',
  '2025-06-25',
  '2025-06-26',
  '2025-06-27',
  '2025-06-28',
  '2025-06-29',
  '2025-07-01',
  '2025-07-02',
  '2025-07-03',
  '2025-07-04',
  '2025-07-05',
  '2025-07-06',
  '2025-07-08',
  '2025-07-09',
  '2025-07-11',
  '2025-07-12',
];

const pitchingLogsMap = {
  '2025-06-04': pitching2025_06_04,
  '2025-06-05': pitching2025_06_05,
  '2025-06-06': pitching2025_06_06,
  '2025-06-07': pitching2025_06_07,
  '2025-06-08': pitching2025_06_08,
  '2025-06-11': pitching2025_06_11,
  '2025-06-12': pitching2025_06_12,
  '2025-06-13': pitching2025_06_13,
  '2025-06-14': pitching2025_06_14,
  '2025-06-15': pitching2025_06_15,
  '2025-06-18': pitching2025_06_18,
  '2025-06-20': pitching2025_06_20,
  '2025-06-21': pitching2025_06_21,
  '2025-06-22': pitching2025_06_22,
  '2025-06-24': pitching2025_06_24,
  '2025-06-25': pitching2025_06_25,
  '2025-06-26': pitching2025_06_26,
  '2025-06-27': pitching2025_06_27,
  '2025-06-28': pitching2025_06_28,
  '2025-06-29': pitching2025_06_29,
  '2025-07-01': pitching2025_07_01,
  '2025-07-02': pitching2025_07_02,
  '2025-07-03': pitching2025_07_03,
  '2025-07-04': pitching2025_07_04,
  '2025-07-05': pitching2025_07_05,
  '2025-07-06': pitching2025_07_06,
  '2025-07-08': pitching2025_07_08,
  '2025-07-09': pitching2025_07_09,
  '2025-07-11': pitching2025_07_11,
  '2025-07-12': pitching2025_07_12,
};

export default function PitchingLogsPage() {
  // State per spec
  const [dateStr, setDateStr] = useState(GAME_DATES[0]);
  const [pitcher, setPitcher] = useState('');
  const [inning, setInning] = useState('All');
  const [pitcherOptions, setPitcherOptions] = useState([]);
  const [inningOptions, setInningOptions] = useState(['All']);

  // Seed date → rows map on mount using existing modules
  useEffect(() => {
    seedLogsByDate({
      '2025-06-04': pitching2025_06_04,
      '2025-06-05': pitching2025_06_05,
      '2025-06-06': pitching2025_06_06,
      '2025-06-07': pitching2025_06_07,
      '2025-06-08': pitching2025_06_08,
      '2025-06-11': pitching2025_06_11,
      '2025-06-12': pitching2025_06_12,
      '2025-06-13': pitching2025_06_13,
      '2025-06-14': pitching2025_06_14,
      '2025-06-15': pitching2025_06_15,
      '2025-06-18': pitching2025_06_18,
      '2025-06-20': pitching2025_06_20,
      '2025-06-21': pitching2025_06_21,
      '2025-06-22': pitching2025_06_22,
      '2025-06-24': pitching2025_06_24,
      '2025-06-25': pitching2025_06_25,
      '2025-06-26': pitching2025_06_26,
      '2025-06-27': pitching2025_06_27,
      '2025-06-28': pitching2025_06_28,
      '2025-06-29': pitching2025_06_29,
      '2025-07-01': pitching2025_07_01,
      '2025-07-02': pitching2025_07_02,
      '2025-07-03': pitching2025_07_03,
      '2025-07-04': pitching2025_07_04,
      '2025-07-05': pitching2025_07_05,
      '2025-07-06': pitching2025_07_06,
      '2025-07-08': pitching2025_07_08,
      '2025-07-09': pitching2025_07_09,
      '2025-07-11': pitching2025_07_11,
      '2025-07-12': pitching2025_07_12,
    });
  }, []);

  // Refresh pitcher options when date changes; reset pitcher and inning
  useEffect(() => {
    const names = getPitchersForDate(dateStr);
    const preferred = [
      'Miguel Sime',
      'Jude Abbadessa',
      'Jarrette Bonet',
      'Andrew Ronne',
    ];
    const order = new Map(preferred.map((n, i) => [n, i]));
    const sorted = names.slice().sort((a, b) => {
      const ia = order.has(a) ? order.get(a) : Number.POSITIVE_INFINITY;
      const ib = order.has(b) ? order.get(b) : Number.POSITIVE_INFINITY;
      if (ia !== ib) return ia - ib;
      return a.localeCompare(b);
    });
    setPitcherOptions(sorted);
    setPitcher('');
    setInning('All');
    setInningOptions(['All']);
  }, [dateStr]);

  // Refresh inning options when date or pitcher changes; default to All if needed
  useEffect(() => {
    const inns = getInningsFor(dateStr, pitcher);
    setInningOptions(inns);
    if (!inns.includes(inning)) setInning('All');
  }, [dateStr, pitcher]);

  // Rows from single source of truth
  const rawRows = useMemo(() => getLogs(dateStr, pitcher, inning), [dateStr, pitcher, inning]);
  const gridRows = useMemo(
    () => rawRows.map((r, idx) => ({
      id: r.id ?? r.__id ?? idx + 1,
      pitch: idx + 1,
      type: r.type ?? r.pitchType ?? r.pitch ?? '—',
      velo: r.velo,
      spin: r.spin,
      ext: r.ext,
      ivb: r.ivb,
      hb: r.hb,
      result: r.result,
      batter: r.batter,
    })),
    [rawRows]
  );
  const rowsCount = gridRows.length;

  const columns = useMemo(() => ([
    { field: 'pitch', headerName: '#', width: 70, sortable: true },
    { field: 'type', headerName: 'Type', width: 120, sortable: true },
    { field: 'velo', headerName: 'Velo', width: 90, sortable: true, headerAlign: 'right', align: 'right' },
    { field: 'spin', headerName: 'Spin', width: 90, sortable: true, headerAlign: 'right', align: 'right' },
    { field: 'ext', headerName: 'Ext', width: 90, sortable: true, headerAlign: 'right', align: 'right' },
    { field: 'ivb', headerName: 'IVB', width: 90, sortable: true, headerAlign: 'right', align: 'right' },
    { field: 'hb', headerName: 'HB', width: 90, sortable: true, headerAlign: 'right', align: 'right' },
    { field: 'result', headerName: 'Result', width: 140, sortable: true },
    { field: 'batter', headerName: 'Batter', width: 160, sortable: true },
    {
      field: 'bench', headerName: 'Bench', width: 220, sortable: false,
      renderCell: (params) => {
        if (!FEATURE_BENCHMARK_BADGES) return null;
        const t = params.row?.type;
        const v = params.row?.velo;
        const i = params.row?.ivb;
        const b = getBench(BENCH_LEVEL, t);
        const dv = b?.p50Velo != null ? delta(v, b.p50Velo) : null;
        const di = b?.p50IVB != null ? delta(i, b.p50IVB) : null;
        if (!Number.isFinite(dv) && !Number.isFinite(di)) return null;
        const muted = { color:'#94a3b8', fontSize: 11 };
        return (
          <span style={muted}>
            {Number.isFinite(dv) ? `ΔVelo ${dv >= 0 ? `+${dv.toFixed(1)}` : dv.toFixed(1)}` : ''}
            {Number.isFinite(dv) && Number.isFinite(di) ? ' • ' : ''}
            {Number.isFinite(di) ? `ΔIVB ${di >= 0 ? `+${di.toFixed(1)}` : di.toFixed(1)}` : ''}
            {` vs ${BENCH_LEVEL}`}
          </span>
        );
      }
    }
  ]), []);

  return (
    <div className="pagePitchingLogs">
      <h1>Pitching Logs</h1>
      {FEATURE_BENCHMARK_BADGES && (
        <div style={{ display:'flex', justifyContent:'flex-end', marginTop:-8, marginBottom:8 }}>
          <div style={{ fontSize: 12, color:'#94a3b8' }}>Δ vs {BENCH_LEVEL} p50</div>
        </div>
      )}

      <div className="controls">
        <div className="field">
          <label className="gold">Date</label>
          <input
            type="date"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="gold">Select Pitcher</label>
          <select
            value={pitcher}
            onChange={(e) => setPitcher(e.target.value)}
          >
            {pitcherOptions.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label className="gold inningLabel">Inning</label>
          <select
            value={inning}
            onChange={(e) => setInning(e.target.value)}
            disabled={!pitcher && inningOptions.length <= 1}
          >
            {inningOptions.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="plogs-context">
        <div className="ctx-left">
          {pitcher || '—'} • {dateStr || '—'} • {inning && inning !== 'All' ? `Inning ${inning}` : 'All innings'}
        </div>
        <div className="ctx-right">Pitches: {rowsCount}</div>
      </div>

      <section className="dataGridContainer tableShell plogs-tablewrap">
        <div style={{ width: '100%' }}>
          <DataGrid
            autoHeight
            rows={gridRows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10, 25, 50]}
            disableSelectionOnClick
            disableColumnMenu
            disableColumnFilter
            disableColumnSelector
          />
        </div>

        {!rowsCount && pitcher && (
          <div className="empty">
            <div>No results. Adjust filters above.</div>
            <div className="sub">Try a different date, pitcher, or inning.</div>
          </div>
        )}
      </section>
    </div>
  );
}