import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FormControl, InputLabel, Select, MenuItem, Box, Card, CardContent, Tooltip, Button, Menu, Chip } from '@mui/material';
import { safeKey } from '../lib/safeKey';

// --- ID + field normalization helpers ---
export function getPid(row, i = 0) {
  const raw =
    row?.playerId ?? row?.pid ?? row?.id ??
    row?.PlayerID ?? row?.PlayerId ?? row?.PID ?? row?.Pid ??
    row?.player_id ?? row?.PLAYER_ID ?? row?.uid ?? row?.UUID ?? row?.uuid;
  // Treat NaN specially: if raw is numeric NaN or string 'NaN', ignore it
  let s = raw == null ? '' : String(raw).trim();
  if (typeof raw === 'number' && Number.isNaN(raw)) s = '';
  if (/^nan$/i.test(s)) s = '';
  return s !== '' ? s : `row-${i}`; // stable fallback
}

// Removed unused helpers to satisfy no-unused-vars lint (they can be reintroduced if needed)

export function PitcherDropdown({ pitchersData, selectedPitcher, onPitcherChange }) {
  const pitcherNames = Object.keys(pitchersData || {});
  return (
    <FormControl fullWidth size="small" sx={{ minWidth: 180, '& .MuiOutlinedInput-root': { bgcolor: 'white' } }}>
      <InputLabel id="pitcher-label">Pitcher</InputLabel>
      <Select
        labelId="pitcher-label"
        value={selectedPitcher || ''}
        label="Pitcher"
        onChange={(e) => onPitcherChange(e.target.value)}
      >
        {pitcherNames.map(name => (
          <MenuItem key={name} value={name}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// Normalize pitch labels to MLB short codes with full-name mapping
function normalizePitchLabel(input) {
  if (!input) return { code: 'OTH', full: 'Other' };
  const raw = String(input).trim();
  const lower = raw.toLowerCase();
  // Common aliases
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
  // Heuristics for raw keys like fourSeam, curveball, etc.
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
  if (key.startsWith('ff')) return { code: 'FF', full: 'Four-Seam' };
  if (key.startsWith('si')) return { code: 'SI', full: 'Sinker' };
  if (key.startsWith('ct')) return { code: 'CT', full: 'Cutter' };
  if (key.startsWith('sl') && !key.startsWith('spl')) return { code: 'SL', full: 'Slider' };
  if (key.startsWith('sw')) return { code: 'SW', full: 'Sweeper' };
  if (key.startsWith('cb') || key.startsWith('kc')) return { code: 'CB', full: 'Curveball' };
  if (key.startsWith('ch')) return { code: 'CH', full: 'Changeup' };
  if (key.startsWith('spl') || key.startsWith('fs')) return { code: 'SPL', full: 'Splitter' };
  return { code: 'OTH', full: raw };
}

// Expanded labels for tooltips
const FULL_LABELS = {
  FF: 'Four-Seam Fastball',
  SI: 'Sinker (Two-Seam)',
  CT: 'Cutter',
  SL: 'Slider',
  SW: 'Sweeper',
  CB: 'Curveball',
  CH: 'Changeup',
  SPL: 'Splitter',
  OTH: 'Other',
};

// Minimal empty state component (requested for no-data rendering)
function EmptyState({ message }) {
  return <div style={{ padding: 16, opacity: 0.8 }}>{message}</div>;
}

export function InningDropdown({ pitchersData, selectedPitcher, selectedInning, onInningChange }) {
  const innings = selectedPitcher && pitchersData[selectedPitcher]
    ? Object.keys(pitchersData[selectedPitcher]).sort((a, b) => Number(a) - Number(b))
    : [];

  return (
    <FormControl fullWidth size="small" sx={{ minWidth: 120, '& .MuiOutlinedInput-root': { bgcolor: 'white' } }}>
      <InputLabel id="inning-label">Inning</InputLabel>
      <Select
        labelId="inning-label"
        value={selectedInning || ''}
        label="Inning"
        onChange={(e) => onInningChange(e.target.value)}
        disabled={!selectedPitcher}
      >
        {innings.map(inn => (
          <MenuItem key={inn} value={inn}>{inn}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default function PitchersTable({
  // logs mode props
  pitchersData,
  selectedPitcher,
  selectedInning,
  onPitcherChange,
  onInningChange,
  onRowDoubleClick,
  // arsenals mode props
  mode = 'logs',
  arsenals,
  usageByCode,
  gradesByCode,
  statsByCode,
  selectedPlayerId,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  // Stable wrapper for double-click handler (passes through to prop if provided)
  const handleRowDouble = useCallback((params) => {
    if (typeof onRowDoubleClick === 'function') onRowDoubleClick(params);
  }, [onRowDoubleClick]);

  // Centralized rows/columns based on mode (single top-level hooks)
  // Dependencies reflect all values read inside this memo; keep in sync when logic changes.
  const rows = useMemo(() => {
    if (mode === 'arsenals') {
      const list = Array.isArray(arsenals) ? arsenals : [];
      return list.map((row, idx) => ({
        id: row.playerId ?? row.id ?? idx,
        playerId: row.playerId ?? row.id ?? idx,
        name: row.name ?? '-',
        bt: row.bt ?? '-',
        pitches: Array.isArray(row.pitches) ? row.pitches : [],
        status: row.status ?? null,
        statusNote: row.statusNote ?? null,
      }));
    }
    // logs mode (unchanged here)
    const data = Array.isArray(pitchersData) ? pitchersData : [];
    return data.map((pitch, idx) => ({
      id: `${selectedPitcher}-${selectedInning}-${idx}`,
      pitch: idx + 1,
      type: pitch.pitchType,
      velo: pitch.velo,
      spin: pitch.spin,
      ext: pitch.ext,
      ivb: pitch.ivb,
      hb: pitch.hb,
      result: pitch.result,
      batter: pitch.batter,
    }));
  }, [mode, arsenals, pitchersData, selectedPitcher, selectedInning]);

  // Sorting uses the selected "Sort pitch" (dropdown). Numeric columns read that pitch's aggregates; missing = — and sort last.
  // Column sorting: toggles asc/desc/reset; resets to arsenal JSON order on pitcher change
  const SORT_PITCH_OPTIONS = [
    { value: 'FF', label: 'FF' },
    { value: 'SI', label: 'SI/SNK' },
    { value: 'CT', label: 'FC' },
    { value: 'SL', label: 'SL' },
    { value: 'SW', label: 'SWP' },
    { value: 'CH', label: 'CH' },
    { value: 'CB', label: 'CB' },
  ];
  const [sortPitch, setSortPitch] = useState('FF');
  const [sortColumn, setSortColumn] = useState(null); // 'pitchType' | 'velo' | 'ivb' | 'hb' | 'spin' | 'usage' | 'grade' | 'n'
  const [sortDirection, setSortDirection] = useState(null); // 'asc' | 'desc' | null

  // Reset sort to default order on pitcher change
  useEffect(() => {
    if (mode === 'arsenals') {
      setSortColumn(null);
      setSortDirection(null);
    }
  }, [mode, selectedPlayerId]);

  const cycleSort = useCallback((colKey) => {
    setSortColumn((prevCol) => {
      if (prevCol !== colKey) {
        setSortDirection('asc');
        return colKey;
      }
      setSortDirection((prevDir) => {
        if (prevDir === 'asc') return 'desc';
        if (prevDir === 'desc') return null; // reset
        return 'asc';
      });
      // If resetting, also clear column
      return colKey;
    });
  }, []);

  // Value accessor per row for sorting based on selected sort pitch
  const getRowMetric = useCallback((row, key) => {
    const list = Array.isArray(row?.pitches) ? row.pitches : [];
    const hasPitch = list.some((p) => normalizePitchLabel(p).code === sortPitch);
    if (key === 'pitchType') return hasPitch ? sortPitch : null; // alpha
    if (!hasPitch) return null;
    switch (key) {
      case 'velo': {
        const v = statsByCode?.[sortPitch]?.avgVelo;
        return Number.isFinite(v) ? v : null;
      }
      case 'ivb': {
        const v = statsByCode?.[sortPitch]?.avgIVB;
        return Number.isFinite(v) ? v : null;
      }
      case 'hb': {
        const v = statsByCode?.[sortPitch]?.avgHB;
        return Number.isFinite(v) ? v : null;
      }
      case 'spin': {
        const v = statsByCode?.[sortPitch]?.avgSpin;
        return Number.isFinite(v) ? v : null;
      }
      case 'usage': {
        const v = usageByCode?.[sortPitch] ?? statsByCode?.[sortPitch]?.usagePct;
        return Number.isFinite(v) ? v : null;
      }
      case 'grade': {
        const v = gradesByCode?.[sortPitch];
        return Number.isFinite(v) ? v : null;
      }
      case 'n': {
        const v = statsByCode?.[sortPitch]?.n;
        return Number.isFinite(v) ? v : null;
      }
      default:
        return null;
    }
  }, [sortPitch, usageByCode, gradesByCode, statsByCode]);

  // Dependencies reflect all values read inside this memo; keep in sync when logic changes.
  const sortedRows = useMemo(() => {
    if (mode !== 'arsenals' || !sortColumn || !sortDirection) return rows;
    const arr = [...rows];
    const dir = sortDirection === 'asc' ? 1 : -1;
    arr.sort((a, b) => {
      const va = getRowMetric(a, sortColumn);
      const vb = getRowMetric(b, sortColumn);
      const aNull = va == null || Number.isNaN(va);
      const bNull = vb == null || Number.isNaN(vb);
      if (aNull && bNull) return 0;
      if (aNull) return 1;
      if (bNull) return -1;
      if (sortColumn === 'pitchType') return String(va).localeCompare(String(vb)) * dir;
      return (va === vb ? 0 : (va > vb ? 1 : -1)) * dir;
    });
    return arr;
  }, [rows, mode, sortColumn, sortDirection, getRowMetric]);

  // Dependencies reflect all values read inside this memo; keep in sync when logic changes.
  const columns = useMemo(() => {
    if (mode === 'arsenals') {
      // N = sample count from logs for this pitcherId/pitchType; tooltip shows aggregates for quick scouting context.
      const arrow = (key) => sortColumn === key ? (sortDirection === 'asc' ? ' ▲' : sortDirection === 'desc' ? ' ▼' : '') : '';
      return [
        { field: 'name', headerName: 'Name', flex: 1, minWidth: 160, sortable: false,
          valueGetter: (params) => params.row?.name ?? '-' },
        { field: 'bt', headerName: 'B/T', width: 100, align: 'right', headerAlign: 'right', sortable: false,
          valueGetter: (params) => params.row?.bt ?? '-' },
        {
          field: 'pitches', headerName: `Pitch Type${arrow('pitchType')}`, flex: 1, minWidth: 160, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('pitchType')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Pitch Type${arrow('pitchType')}`}
            </Box>
          ),
          renderCell: (params) => {
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const codes = [];
            const seen = new Set();
            for (const p of list) {
              const { code, full } = normalizePitchLabel(p);
              if (!seen.has(code)) { seen.add(code); codes.push({ code, full, raw: p }); }
            }
            return (
              <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end', width: '100%' }}>
                {codes.map(({ code, full, raw }, i) => (
                  <Tooltip key={safeKey(params.row.id, 'pitch', i, code, raw)} title={FULL_LABELS[code] ?? full ?? code} arrow>
                    <Chip label={code} size="small" sx={{ fontWeight: 700, height: 22 }} />
                  </Tooltip>
                ))}
              </Box>
            );
          }
        },
        {
          field: 'velo', headerName: `Velo${arrow('velo')}`, width: 90, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('velo')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Velo${arrow('velo')}`}
            </Box>
          ),
          renderCell: (params) => {
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const hasPitch = list.some((p) => normalizePitchLabel(p).code === sortPitch);
            const v = hasPitch ? statsByCode?.[sortPitch]?.avgVelo : null;
            return <span>{Number.isFinite(v) ? v.toFixed(1) : <span style={{ color: '#9ca3af' }}>—</span>}</span>;
          }
        },
        {
          field: 'ivb', headerName: `IVB${arrow('ivb')}`, width: 90, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('ivb')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`IVB${arrow('ivb')}`}
            </Box>
          ),
          renderCell: (params) => {
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const hasPitch = list.some((p) => normalizePitchLabel(p).code === sortPitch);
            const v = hasPitch ? statsByCode?.[sortPitch]?.avgIVB : null;
            return <span>{Number.isFinite(v) ? v.toFixed(1) : <span style={{ color: '#9ca3af' }}>—</span>}</span>;
          }
        },
        {
          field: 'hb', headerName: `HB${arrow('hb')}`, width: 90, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('hb')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`HB${arrow('hb')}`}
            </Box>
          ),
          renderCell: (params) => {
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const hasPitch = list.some((p) => normalizePitchLabel(p).code === sortPitch);
            const v = hasPitch ? statsByCode?.[sortPitch]?.avgHB : null;
            return <span>{Number.isFinite(v) ? v.toFixed(1) : <span style={{ color: '#9ca3af' }}>—</span>}</span>;
          }
        },
        {
          field: 'spin', headerName: `Spin${arrow('spin')}`, width: 100, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('spin')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Spin${arrow('spin')}`}
            </Box>
          ),
          renderCell: (params) => {
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const hasPitch = list.some((p) => normalizePitchLabel(p).code === sortPitch);
            const v = hasPitch ? statsByCode?.[sortPitch]?.avgSpin : null;
            return <span>{Number.isFinite(v) ? Math.round(v) : <span style={{ color: '#9ca3af' }}>—</span>}</span>;
          }
        },
        {
          field: 'usage', headerName: `Usage%${arrow('usage')}`, flex: 1, minWidth: 180, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('usage')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Usage%${arrow('usage')}`}
            </Box>
          ),
          renderCell: (params) => {
            // Guard: if no usage map (no logs) show em dash
            const has = usageByCode && typeof usageByCode === 'object';
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const codes = [];
            const seen = new Set();
            for (const p of list) {
              const { code } = normalizePitchLabel(p);
              if (!seen.has(code)) { seen.add(code); codes.push(code); }
            }
            if (!codes.length) return <span style={{ color: '#9ca3af' }}>—</span>;
            return (
              <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end', width: '100%' }}>
                {codes.map((code, i) => {
                  const val = has && usageByCode && Number.isFinite(usageByCode[code]) ? `${usageByCode[code]}%` : '—';
                  return (
                    <Chip key={safeKey(params.row.id, 'usage', i, code)} label={`${code} ${val}`} size="small" sx={{ height: 22 }} />
                  );
                })}
              </Box>
            );
          }
        },
        {
          field: 'grade', headerName: `Grade (20–80)${arrow('grade')}`, flex: 1, minWidth: 200, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('grade')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Grade (20–80)${arrow('grade')}`}
            </Box>
          ),
          renderCell: (params) => {
            const has = gradesByCode && typeof gradesByCode === 'object';
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const codes = [];
            const seen = new Set();
            for (const p of list) {
              const { code } = normalizePitchLabel(p);
              if (!seen.has(code)) { seen.add(code); codes.push(code); }
            }
            if (!codes.length) return <span style={{ color: '#9ca3af' }}>—</span>;
            return (
              <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end', width: '100%' }}>
                {codes.map((code, i) => {
                  const val = has && Number.isFinite(gradesByCode[code]) ? String(gradesByCode[code]) : '—';
                  const s = statsByCode && statsByCode[code] ? statsByCode[code] : null;
                  const lines = [];
                  if (s && Number.isFinite(s.avgVelo)) lines.push(`Avg Velo: ${s.avgVelo.toFixed(1)}`);
                  if (s && Number.isFinite(s.avgIVB)) lines.push(`Avg IVB: ${s.avgIVB.toFixed(1)}`);
                  if (s && Number.isFinite(s.avgHB)) lines.push(`Avg HB: ${s.avgHB.toFixed(1)}`);
                  if (s && Number.isFinite(s.avgSpin)) lines.push(`Avg Spin: ${Math.round(s.avgSpin)}`);
                  const usage = (s && Number.isFinite(s.usagePct)) ? `${s.usagePct}%` : (usageByCode && Number.isFinite(usageByCode[code]) ? `${usageByCode[code]}%` : null);
                  if (usage) lines.push(`Usage%: ${usage}`);
                  if (s && Number.isFinite(s.n)) lines.push(`N: ${s.n}`);
                  const title = lines.length ? (
                    <Box sx={{ whiteSpace: 'pre-line' }}>{lines.join('\n')}</Box>
                  ) : '—';
                  return (
                    <Tooltip key={safeKey(params.row.id, 'grade', i, code)} title={title} arrow>
                      <Chip label={`${code} ${val}`} size="small" sx={{ height: 22 }} />
                    </Tooltip>
                  );
                })}
              </Box>
            );
          }
        },
        {
          field: 'n', headerName: `N${arrow('n')}`, width: 110, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('n')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`N${arrow('n')}`}
            </Box>
          ),
          renderCell: (params) => {
            const list = Array.isArray(params?.row?.pitches) ? params.row.pitches : [];
            const codes = [];
            const seen = new Set();
            for (const p of list) {
              const { code } = normalizePitchLabel(p);
              if (!seen.has(code)) { seen.add(code); codes.push(code); }
            }
            if (!codes.length) return <span style={{ color: '#9ca3af' }}>—</span>;
            return (
              <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end', width: '100%' }}>
                {codes.map((code, i) => {
                  const s = statsByCode && statsByCode[code] ? statsByCode[code] : null;
                  const val = s && Number.isFinite(s.n) ? String(s.n) : '—';
                  return (
                    <Chip key={safeKey(params.row.id, 'n', i, code)} label={`${code} ${val}`} size="small" sx={{ height: 22 }} />
                  );
                })}
              </Box>
            );
          }
        },
        {
          field: 'status', headerName: 'Tags', width: 160, align: 'right', headerAlign: 'right', sortable: false,
          renderCell: (params) => {
            const s = params?.row?.status;
            const note = params?.row?.statusNote;
            if (!s) return <span style={{ color: '#9ca3af' }}>—</span>;
            const map = {
              VERIFIED: { bg: 'rgba(16,185,129,0.15)', color: '#059669', border: '1px solid rgba(5,150,105,0.35)' },
              VERIFY: { bg: 'rgba(245,158,11,0.15)', color: '#B45309', border: '1px solid rgba(180,83,9,0.35)' },
              'NEEDS REVIEW': { bg: 'rgba(239,68,68,0.15)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.35)' },
            };
            const style = map[s] || { bg: '#f3f4f6', color: '#6b7280', border: '1px solid rgba(0,0,0,0.08)' };
            const label = note && s !== 'VERIFIED' ? `${s} — ${note}` : s;
            return (
              <Chip label={label} size="small" sx={{ height: 22, bgcolor: style.bg, color: style.color, border: style.border, fontWeight: 700 }} />
            );
          }
        },
      ];
    }
    return [
      { field: 'pitch', headerName: '#', width: 64, sortable: true, align: 'right', headerAlign: 'right' },
      {
        field: 'type', headerName: 'Type', width: 90, sortable: true,
        renderCell: (params) => {
          const { code, full } = normalizePitchLabel(params?.value);
          return (
            <Tooltip title={FULL_LABELS[code] ?? full ?? code} arrow>
              <span style={{ fontWeight: 700 }}>{code}</span>
            </Tooltip>
          );
        }
      },
      { field: 'velo', headerName: 'Velo', width: 84, sortable: true, align: 'right', headerAlign: 'right' },
      { field: 'spin', headerName: 'Spin', width: 84, sortable: true, align: 'right', headerAlign: 'right' },
      { field: 'ext',  headerName: 'Ext',  width: 84, sortable: true, align: 'right', headerAlign: 'right' },
      { field: 'ivb',  headerName: 'IVB',  width: 84, sortable: true, align: 'right', headerAlign: 'right' },
      { field: 'hb',   headerName: 'HB',   width: 84, sortable: true, align: 'right', headerAlign: 'right' },
      { field: 'result', headerName: 'Result', width: 120, sortable: true },
      { field: 'batter', headerName: 'Batter', width: 150, sortable: true },
    ];
  }, [
    // top-level switches
    mode,
    // sort indicators and toggles
    sortColumn, sortDirection, cycleSort,
    // stats + selection used inside renderers
    sortPitch, statsByCode, usageByCode, gradesByCode,
  ]);

  // Prepare table content fragment for reuse in ternary below
  const tableContent = (
    <>
      {mode === 'arsenals' && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
          <FormControl size="small" sx={{ minWidth: 140 }}>
            <InputLabel id="sort-pitch-label">Sort pitch</InputLabel>
            <Select
              labelId="sort-pitch-label"
              aria-label="Sort pitch"
              value={sortPitch}
              label="Sort pitch"
              onChange={(e) => setSortPitch(e.target.value)}
            >
              {SORT_PITCH_OPTIONS.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
      <DataGrid
        autoHeight
        rows={mode === 'arsenals' ? sortedRows : rows}
        getRowId={(row) => row.id}
        columns={columns}
        pageSize={mode === 'arsenals' ? 25 : 10}
        rowsPerPageOptions={mode === 'arsenals' ? [25, 50, 100] : [10, 25, 50]}
        disableSelectionOnClick
        density="compact"
        rowHeight={34}
        columnHeaderHeight={38}
        onRowDoubleClick={handleRowDouble}
        sx={{
          background: '#fff',
          borderRadius: 2,
          '& .MuiDataGrid-columnHeaders': {
            position: 'sticky',
            top: 0,
            backgroundColor: 'background.paper',
            zIndex: 1,
          },
          '& .MuiDataGrid-row:hover': { backgroundColor: 'rgba(25, 118, 210, 0.08)' },
          '& .MuiDataGrid-row:nth-of-type(odd)': { backgroundColor: '#f9fafb' },
          '& .MuiDataGrid-cell': { fontSize: 13, py: 0.25 },
          '& .MuiDataGrid-columnHeadersInner': { fontSize: 12, fontWeight: 700 },
          '& .MuiDataGrid-root': { overflowX: 'auto' },
        }}
      />
    </>
  );

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
        {mode === 'logs' && (
          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <PitcherDropdown pitchersData={pitchersData} selectedPitcher={selectedPitcher} onPitcherChange={onPitcherChange} />
              <InningDropdown pitchersData={pitchersData} selectedPitcher={selectedPitcher} selectedInning={selectedInning} onInningChange={onInningChange} />
            </Box>
            <Box>
              <Button variant="outlined" size="small" onClick={handleMenuOpen} sx={{ textTransform: 'none' }}>
                Batch Fix
              </Button>
              <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <MenuItem onClick={handleMenuClose}>Remap 2-Seam → SI</MenuItem>
                <MenuItem onClick={handleMenuClose}>Merge SL/SW → SW</MenuItem>
                <MenuItem onClick={handleMenuClose}>Normalize FF/FT → FF</MenuItem>
                <MenuItem onClick={handleMenuClose}>Collapse misc. → OTH</MenuItem>
              </Menu>
            </Box>
          </Box>
        )}
        {/* Empty state vs table separated with logical && to avoid ternary parse issues */}
        {/* Show EmptyState only when in arsenals mode AND there are zero rows */}
        {mode === 'arsenals' && rows.length === 0 && (
          <EmptyState message="No arsenals loaded yet." />
        )}

        {/* Otherwise render the tableContent */}
        {!(mode === 'arsenals' && rows.length === 0) && <>{tableContent}</>}
      </CardContent>
    </Card>
  );
}