import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { fmtMph, fmtIn, fmtRpm, fmtPct, DASH } from '../utils/formatters.js';
import { FormControl, InputLabel, Select, MenuItem, Box, Card, CardContent, Tooltip, Button, Menu, MenuItem as MuiMenuItem, Chip, TextField, Checkbox, FormControlLabel, IconButton, Snackbar, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { safeKey } from '../lib/safeKey';
import { useNavigate } from 'react-router-dom';
import { writePitcherOverride, saveLocalNote, readLocalNote } from '../utils/arsenalWrite.js';

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

// Formatting moved to shared utils in ../utils/formatters.js

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
  const navigate = useNavigate();
  // Per-row action menu
  const [rowMenu, setRowMenu] = useState({ anchorEl: null, row: null });
  const menuOpen = Boolean(rowMenu.anchorEl);
  const handleMenuOpen = (e, row) => setRowMenu({ anchorEl: e.currentTarget, row });
  const handleMenuClose = () => setRowMenu({ anchorEl: null, row: null });

  // Local transient overrides for immediate UI reflect (by playerId)
  const [transientByPid, setTransientByPid] = useState({});

  // Snackbar for Undo
  const [snack, setSnack] = useState({ open: false, message: '', undo: null });

  // Note editor dialog
  const [noteDlg, setNoteDlg] = useState({ open: false, pid: '', name: '', text: '' });

  // Helper to read URL params once (lazy init)
  const readParams = () => {
    const sp = new URLSearchParams(window.location.search);
    return {
      sp: sp.get('sp') || 'FF',
      sc: sp.get('sc') || null,
      sd: sp.get('sd') || null,
      q:  sp.get('q')  || '',
      hand: (sp.get('hand') || 'all').toLowerCase(),
      has: sp.get('has') === '1',
      review: sp.get('review') === '1',
    };
  };
  // Initialize from URL via lazy useState; all code that reads table state must come after these declarations.
  const { sp, sc, sd, q, hand, has, review } = readParams();
  const [sortPitch, setSortPitch] = useState(() => sp);
  const [sortColumn, setSortColumn] = useState(() => sc);
  const [sortDirection, setSortDirection] = useState(() => sd);
  // Search filter: case-insensitive match on Name; debounced.
  const [searchText, setSearchText] = useState(() => q);
  // Hand filter (All/RHP/LHP) applies post-sort and persists via ?hand=.
  const [handFilter, setHandFilter] = useState(() => (hand === 'r' ? 'R' : hand === 'l' ? 'L' : 'all'));
  // Checkbox to keep only pitchers who throw the currently selected sortPitch; persists via ?has=1.
  const [hasSelectedOnly, setHasSelectedOnly] = useState(() => Boolean(has));
  // Checkbox to keep only pitchers that need review; persists via ?review=1
  const [needsReviewOnly, setNeedsReviewOnly] = useState(() => Boolean(review));
  const [debouncedSearch, setDebouncedSearch] = useState(searchText);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchText), 200);
    return () => clearTimeout(t);
  }, [searchText]);
  useEffect(() => {
    try { sessionStorage.setItem('arsenalsSearch', debouncedSearch); } catch {}
  }, [debouncedSearch]);
  // Sync Arsenals table state <-> URL (query params) for reload/share persistence.
  // Debounced URL updates when state changes (only include non-defaults)
  useEffect(() => {
    if (mode !== 'arsenals') return;
    const t = setTimeout(() => {
      const p = new URLSearchParams();
      if (sortPitch && sortPitch !== 'FF') p.set('sp', sortPitch);
      if (sortColumn) p.set('sc', String(sortColumn));
      if (sortDirection) p.set('sd', String(sortDirection));
      const qStr = (searchText || '').trim();
      if (qStr) p.set('q', qStr);
      if (handFilter && handFilter !== 'all') p.set('hand', handFilter);
      if (hasSelectedOnly) p.set('has', '1');
      if (needsReviewOnly) p.set('review', '1');
      const qs = p.toString();
      const url = qs ? `?${qs}` : window.location.pathname;
      window.history.replaceState(null, '', url);
    }, 200);
    return () => clearTimeout(t);
  }, [mode, sortPitch, sortColumn, sortDirection, searchText, handFilter, hasSelectedOnly, needsReviewOnly]);
  // Reset returns Arsenals table to default state (order, sort pitch, search).
  const handleReset = useCallback(() => {
    setSortColumn(null);
    setSortDirection(null);
    setSortPitch('FF');
    setSearchText('');
    setHandFilter('all');
    setHasSelectedOnly(false);
    setNeedsReviewOnly(false);
    try { sessionStorage.setItem('arsenalsSearch', ''); } catch {}
    try { window.scrollTo({ top: 0 }); } catch {}
    try { window.history.replaceState(null, '', window.location.pathname); } catch {}
  }, []);
  // Stable wrapper for double-click handler (passes through to prop if provided)
  const handleRowDouble = useCallback((params) => {
    if (typeof onRowDoubleClick === 'function') onRowDoubleClick(params);
  }, [onRowDoubleClick]);

  // Centralized rows/columns based on mode (single top-level hooks)
  // Dependencies reflect all values read inside this memo; keep in sync when logic changes.
  const rows = useMemo(() => {
    if (mode === 'arsenals') {
      const list = Array.isArray(arsenals) ? arsenals : [];
      return list.map((row, idx) => {
        const pid = row.playerId ?? row.id ?? idx;
        const t = transientByPid[String(pid)] || {};
        return ({
          id: row.playerId ?? row.id ?? idx,
          playerId: row.playerId ?? row.id ?? idx,
          name: row.name ?? '-',
          bt: row.bt ?? '-',
          pitches: Array.isArray(t.pitches) ? t.pitches : (Array.isArray(row.pitches) ? row.pitches : []),
          status: row.status ?? null,
          statusNote: row.statusNote ?? null,
          needsReview: typeof t.needsReview === 'boolean' ? t.needsReview : row.needsReview,
          mergedDetails: row.mergedDetails || null,
          reviewAction: t.reviewAction || row.reviewAction || null,
          reviewDate: t.reviewDate || row.reviewDate || null,
          // pass-through explicit lists for actions
          mergedPitches: row.mergedPitches || null,
          overridePitches: row.overridePitches || null,
        });
      });
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

  // Build per-pitcher aggregates for numeric cells in arsenals mode.
  // Dependencies reflect all values read inside this memo; keep in sync when logic changes.
  const aggregatesByPitcher = useMemo(() => {
    // Expect incoming shapes like:
    // statsByCode: { [playerId]: { [code]: { avgVelo, avgIVB, avgHB, avgSpin, usagePct, n } } }
    // usageByCode: { [playerId]: { [code]: number } }
    // gradesByCode: { [playerId]: { [code]: number } }
    const result = {};
    const players = new Set([
      ...Object.keys(statsByCode || {}),
      ...Object.keys(usageByCode || {}),
      ...Object.keys(gradesByCode || {}),
    ]);
    players.forEach((pid) => {
      const s = (statsByCode && statsByCode[pid]) || {};
      const u = (usageByCode && usageByCode[pid]) || {};
      const g = (gradesByCode && gradesByCode[pid]) || {};
      const codes = new Set([
        ...Object.keys(s || {}),
        ...Object.keys(u || {}),
        ...Object.keys(g || {}),
      ]);
      codes.forEach((code) => {
        const sv = s && s[code] ? s[code] : {};
        const up = u && Number.isFinite(u[code]) ? u[code] : (Number.isFinite(sv.usagePct) ? sv.usagePct : null);
        const gr = g && Number.isFinite(g[code]) ? g[code] : null;
        if (!result[pid]) result[pid] = {};
        result[pid][code] = {
          avgVelo: Number.isFinite(sv.avgVelo) ? sv.avgVelo : null,
          avgIVB: Number.isFinite(sv.avgIVB) ? sv.avgIVB : null,
          avgHB: Number.isFinite(sv.avgHB) ? sv.avgHB : null,
          avgSpin: Number.isFinite(sv.avgSpin) ? sv.avgSpin : null,
          usagePct: Number.isFinite(up) ? up : null,
          grade: Number.isFinite(gr) ? gr : null,
          sampleCount: Number.isFinite(sv.n) ? sv.n : null,
        };
      });
    });
    return result;
  }, [statsByCode, usageByCode, gradesByCode]);

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
  // States declared earlier via lazy init from URL

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
    const agg = aggregatesByPitcher?.[row?.playerId]?.[sortPitch];
    if (!agg) return null;
    switch (key) {
      case 'velo': return Number.isFinite(agg.avgVelo) ? agg.avgVelo : null;
      case 'ivb': return Number.isFinite(agg.avgIVB) ? agg.avgIVB : null;
      case 'hb': return Number.isFinite(agg.avgHB) ? agg.avgHB : null;
      case 'spin': return Number.isFinite(agg.avgSpin) ? agg.avgSpin : null;
      case 'usage': return Number.isFinite(agg.usagePct) ? agg.usagePct : null;
      case 'grade': return Number.isFinite(agg.grade) ? agg.grade : null;
      case 'n': return Number.isFinite(agg.sampleCount) ? agg.sampleCount : null;
      default: return null;
    }
  }, [sortPitch, aggregatesByPitcher]);

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

  // Apply filtering AFTER sorting (per requirements)
  const filteredRows = useMemo(() => {
    if (mode !== 'arsenals') return rows;
    const source = sortedRows;
    const q = (debouncedSearch || '').trim().toLowerCase();
    let out = source;
    if (q) {
      out = out.filter(r => String(r?.name ?? '').toLowerCase().includes(q));
    }
    // Apply hand filter if selected (use throw side from B/T, e.g., 'R/R' -> 'R')
    if (handFilter !== 'all') {
      out = out.filter(r => {
        const bt = String(r?.bt ?? '').toUpperCase();
        const throwSide = bt.split('/')[0]?.trim()?.charAt(0) || '';
        return throwSide === handFilter;
      });
    }
    // Apply has-selected-pitch-only filter
    if (hasSelectedOnly) {
      out = out.filter(r => {
        const list = Array.isArray(r?.pitches) ? r.pitches : [];
        const hasCode = list.some((p) => normalizePitchLabel(p).code === sortPitch);
        const agg = aggregatesByPitcher?.[r?.playerId]?.[sortPitch];
        return hasCode || !!agg;
      });
    }
    // Apply needs-review-only filter
    if (needsReviewOnly) {
      out = out.filter(r => !!r?.needsReview);
    }
    return out;
  }, [mode, rows, sortedRows, debouncedSearch, handFilter, hasSelectedOnly, needsReviewOnly, sortPitch, aggregatesByPitcher]);

  // CSV export mirrors current filtered/sorted view for the selected sortPitch.
  const handleDownloadCsv = useCallback(() => {
    if (mode !== 'arsenals') return;
    const headers = [
      'Pitcher ID',
      'Name',
      'B/T',
      'Pitches',
      'Selected Pitch',
      'Velo (mph)',
      'IVB (in)',
      'HB (in)',
      'Spin (rpm)',
      'Usage%',
      'Grade (20–80)',
      'N',
      'NeedsReview',
      'ReviewAction',
      'ReviewDate',
      'HasNote',
    ];
    const esc = (v) => {
      const s = v == null ? '' : String(v);
      // Quote if contains comma, quote, or newline
      if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
      return s;
    };
    const to1 = (v) => (Number.isFinite(v) ? v.toFixed(1) : '');
    const toInt = (v) => (Number.isFinite(v) ? String(Math.round(v)) : '');

    const lines = [];
    lines.push(headers.join(','));
    for (const r of filteredRows) {
      const pid = getPid(r, 0);
      const name = r?.name ?? '';
      const bt = r?.bt ?? '';
      const mergedList = Array.isArray(r?.pitches) ? r.pitches : [];
      const pitchesStr = mergedList.join(' ');
      const selected = sortPitch;
      const agg = aggregatesByPitcher?.[r?.playerId]?.[sortPitch] || {};
      const reviewAction = r?.reviewAction || 'None';
      const reviewDate = r?.reviewDate || '';
      const hasNote = readLocalNote(pid) ? '1' : '0';
      const rowOut = [
        pid,
        name,
        bt,
        pitchesStr,
        selected,
        to1(agg.avgVelo),
        to1(agg.avgIVB),
        to1(agg.avgHB),
        toInt(agg.avgSpin),
        to1(agg.usagePct),
        toInt(agg.grade),
        toInt(agg.sampleCount),
        r?.needsReview ? '1' : '0',
        reviewAction,
        reviewDate,
        hasNote,
      ].map(esc);
      lines.push(rowOut.join(','));
    }
    const csv = lines.join('\n');

    const pad = (n) => String(n).padStart(2, '0');
    const d = new Date();
    const ts = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}`;
    const hand = handFilter; // all|R|L
    const fname = `pitcher-arsenals_${sortPitch}_${hand}_${ts}.csv`;

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fname;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [mode, filteredRows, sortPitch, handFilter, aggregatesByPitcher]);

  // Dependencies reflect all values read inside this memo; keep in sync when logic changes.
  const columns = useMemo(() => {
    if (mode === 'arsenals') {
      // N = sample count from logs for this pitcherId/pitchType; tooltip shows aggregates for quick scouting context.
      const arrow = (key) => sortColumn === key ? (sortDirection === 'asc' ? ' ▲' : sortDirection === 'desc' ? ' ▼' : '') : '';
      return [
        { field: 'name', headerName: 'Name', flex: 1, minWidth: 160, sortable: false,
          renderCell: (params) => {
            const row = params?.row || {};
            const name = row?.name ?? '-';
            const pid = getPid(row, 0);
            // Clicking the Name navigates to that pitcher’s report using pitcherId.
            const go = (e) => {
              e?.stopPropagation?.();
              if (!pid || String(pid).startsWith('row-')) return;
              navigate(`/pitching/reports?pid=${encodeURIComponent(pid)}`);
            };
            const onKeyDown = (e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(e); }
            };
            return (
              <Box
                role="button"
                tabIndex={0}
                aria-label={`Open report for ${name}`}
                onClick={go}
                onKeyDown={onKeyDown}
                sx={{
                  color: 'primary.main',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  fontWeight: 700,
                }}
              >
                {name}
              </Box>
            );
          }
        },
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
                {codes.length === 0 && (
                  <span style={{ color: '#9ca3af' }}>No pitches</span>
                )}
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
          field: 'review', headerName: 'Review', width: 140, align: 'right', headerAlign: 'right', sortable: false,
          renderCell: (params) => {
            const needs = !!params?.row?.needsReview;
            const pid = getPid(params.row, 0);
            const note = readLocalNote(pid);
            if (!needs) {
              return (
                <Box sx={{ display:'flex', alignItems:'center', gap:0.5, justifyContent:'flex-end', width:'100%' }}>
                  {note && (
                    <Tooltip title={note.slice(0,200)} arrow>
                      <NoteAltIcon fontSize="small" sx={{ color:'#6b7280' }} />
                    </Tooltip>
                  )}
                  <span style={{ color: '#9ca3af' }}>—</span>
                </Box>
              );
            }
            const d = params?.row?.mergedDetails || {};
            const missing = (d.missingInLogs || []).join(', ');
            const extra = (d.extraInLogs || []).join(', ');
            const fromOv = (d.fromOverride || []).join(', ');
            const fromLg = (d.fromLogs || []).join(', ');
            const tip = [
              fromOv ? `Override: ${fromOv}` : '',
              fromLg ? `Logs: ${fromLg}` : '',
              missing ? `Missing in logs: ${missing}` : '',
              extra ? `Extra in logs: ${extra}` : '',
            ].filter(Boolean).join('\n');
            return (
              <Box sx={{ display:'flex', alignItems:'center', gap:0.5, justifyContent:'flex-end', width:'100%' }}>
                {note && (
                  <Tooltip title={note.slice(0,200)} arrow>
                    <NoteAltIcon fontSize="small" sx={{ color:'#6b7280' }} />
                  </Tooltip>
                )}
                <Tooltip title={<span style={{ whiteSpace: 'pre-line' }}>{tip}</span>} arrow>
                  <Chip label="NEEDS REVIEW" size="small" sx={{ height: 22, bgcolor: 'rgba(239,68,68,0.15)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.35)', fontWeight: 700 }} />
                </Tooltip>
              </Box>
            );
          }
        },
        {
          field: 'velo', headerName: `Velo (mph)${arrow('velo')}`, width: 110, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('velo')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Velo${arrow('velo')}`}
            </Box>
          ),
          renderCell: (params) => {
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg ? fmtMph(agg.avgVelo) : DASH;
            return <span>{out}</span>;
          }
        },
        {
          field: 'ivb', headerName: `IVB (in)${arrow('ivb')}`, width: 110, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('ivb')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`IVB${arrow('ivb')}`}
            </Box>
          ),
          renderCell: (params) => {
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg ? fmtIn(agg.avgIVB) : DASH;
            return <span>{out}</span>;
          }
        },
        {
          field: 'hb', headerName: `HB (in)${arrow('hb')}`, width: 110, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('hb')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`HB${arrow('hb')}`}
            </Box>
          ),
          renderCell: (params) => {
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg ? fmtIn(agg.avgHB) : DASH;
            return <span>{out}</span>;
          }
        },
        {
          field: 'spin', headerName: `Spin (rpm)${arrow('spin')}`, width: 120, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('spin')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Spin${arrow('spin')}`}
            </Box>
          ),
          renderCell: (params) => {
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg ? fmtRpm(agg.avgSpin) : DASH;
            return <span>{out}</span>;
          }
        },
        {
          field: 'usage', headerName: `Usage %${arrow('usage')}`, flex: 1, minWidth: 180, align: 'right', headerAlign: 'right', sortable: false,
          renderHeader: () => (
            <Box onClick={() => cycleSort('usage')} sx={{ cursor: 'pointer', userSelect: 'none', textAlign: 'right', width: '100%' }}>
              {`Usage%${arrow('usage')}`}
            </Box>
          ),
          renderCell: (params) => {
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg ? fmtPct(agg.usagePct) : DASH;
            return <span>{out}</span>;
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
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg && Number.isFinite(agg.grade) ? String(agg.grade) : null;
            return <span>{out ?? <span style={{ color: '#9ca3af' }}>—</span>}</span>;
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
            // Numeric cells read aggregates for the selected sortPitch; missing ⇒ em dash.
            const agg = aggregatesByPitcher?.[params?.row?.playerId]?.[sortPitch];
            const out = agg && Number.isFinite(agg.sampleCount) ? String(agg.sampleCount) : null;
            return <span>{out ?? <span style={{ color: '#9ca3af' }}>—</span>}</span>;
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
        {
          field: 'actions', headerName: 'Actions', width: 120, align: 'right', headerAlign: 'right', sortable: false,
          renderCell: (params) => {
            const onClickMenu = (e) => { e.stopPropagation(); handleMenuOpen(e, params.row); };
            const onEditNote = (e) => {
              e.stopPropagation();
              const pid = getPid(params.row, 0);
              setNoteDlg({ open: true, pid, name: params.row?.name ?? '', text: readLocalNote(pid) });
            };
            return (
              <Box sx={{ display:'flex', justifyContent:'flex-end', width:'100%', gap:0.5 }}>
                <Tooltip title="Edit note" arrow>
                  <IconButton size="small" onClick={onEditNote}>
                    <NoteAltIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <IconButton size="small" onClick={onClickMenu} aria-label="Row actions">
                  <MoreVertIcon fontSize="small" />
                </IconButton>
              </Box>
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
    sortPitch, statsByCode, usageByCode, gradesByCode, navigate,
  ]);

  // Prepare table content fragment for reuse in ternary below
  const tableContent = (
    <>
      {mode === 'arsenals' && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, gap: 2 }}>
          <TextField
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search pitcher…"
            aria-label="Search pitcher by name"
            sx={{ width: 260, '& .MuiOutlinedInput-root': { bgcolor: 'white' } }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <FormControl size="small" sx={{ minWidth: 110 }}>
              <InputLabel id="hand-filter-label">Hand</InputLabel>
              <Select
                labelId="hand-filter-label"
                aria-label="Filter by throwing hand"
                value={handFilter}
                label="Hand"
                onChange={(e) => setHandFilter(e.target.value)}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="R">RHP</MenuItem>
                <MenuItem value="L">LHP</MenuItem>
              </Select>
            </FormControl>
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
            <FormControlLabel
              sx={{ ml: 0.5 }}
              control={
                <Checkbox
                  size="small"
                  checked={hasSelectedOnly}
                  onChange={(e) => setHasSelectedOnly(e.target.checked)}
                  inputProps={{ 'aria-label': 'Show only pitchers who throw the selected pitch' }}
                />
              }
              label="Has selected pitch only"
            />
            <FormControlLabel
              sx={{ ml: 0.5 }}
              control={
                <Checkbox
                  size="small"
                  checked={needsReviewOnly}
                  onChange={(e) => setNeedsReviewOnly(e.target.checked)}
                  inputProps={{ 'aria-label': 'Show only pitchers that need review' }}
                />
              }
              label="Needs review only"
            />
            <Button variant="outlined" size="small" onClick={handleDownloadCsv} aria-label="Download current table as CSV" sx={{ textTransform: 'none' }}>
              Download CSV
            </Button>
            <Button variant="text" size="small" onClick={handleReset} aria-label="Reset table state" sx={{ textTransform: 'none', cursor: 'pointer' }}>
              Reset
            </Button>
          </Box>
        </Box>
      )}
      <DataGrid
        autoHeight
        rows={mode === 'arsenals' ? filteredRows : rows}
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

  // Row actions menu
  const handleRowAction = (action) => {
    const row = rowMenu.row;
    const pid = getPid(row, 0);
    const name = row?.name ?? '';
    const prevPitches = Array.isArray(row.pitches) ? [...row.pitches] : [];
    const prevReviewAction = row.reviewAction || 'None';
    const prevReviewDate = row.reviewDate || '';
    const prevNeedsReview = !!row.needsReview;
    // prefer stable string key of playerId, else slug(name)
    const key = pid && !String(pid).startsWith('row-') ? String(pid) : slugifyIdLocal(name);
    const note = readLocalNote(key);

    let targetPitches = [];
    let reviewAction = 'None';
    if (action === 'approveMerged') {
      targetPitches = Array.isArray(row.mergedPitches) && row.mergedPitches.length ? row.mergedPitches : (Array.isArray(row.pitches) ? row.pitches : []);
      reviewAction = 'ApprovedMerged';
    } else if (action === 'keepOverride') {
      targetPitches = Array.isArray(row.overridePitches) ? row.overridePitches : [];
      reviewAction = 'KeptOverride';
    } else {
      console.error(`Unknown row action: ${action}`);
      return;
    }

    // normalize to MLB codes (FF, SI, SL, CH, etc.)
    const codes = normalizeCodes(targetPitches);

    const doWrite = async () => {
      try {
        const res = await writePitcherOverride({ key, pitches: codes, sourceNote: note || '', reviewAction });
        const today = new Date().toISOString().split('T')[0];
        setTransientByPid((m) => ({
          ...m,
          [String(pid)]: { pitches: codes, needsReview: false, reviewAction, reviewDate: today },
        }));
        // compute prevPitches from file line if available, else fallback to captured prevPitches
        const filePrev = parseArsenalFromLine(res.previousLine || '')
          .map(String);
        const snapshotPrev = filePrev.length ? filePrev : normalizeCodes(prevPitches);
        setSnack({
          open: true,
          message: 'Saved — Undo',
          undo: {
            key,
            pid: String(pid),
            name,
            prevPitches: snapshotPrev,
            prevAction: prevReviewAction,
            prevDate: prevReviewDate,
            prevNeedsReview,
            prevNote: note || '',
          },
        });
      } catch (e) {
        setSnack({ open: true, message: 'Save failed', undo: null });
      }
    };

    doWrite();
  };

  // Row actions menu
  const handleMenuClose = () => setRowMenu({ anchorEl: null, row: null });

  // Row actions menu
  const menuOpen = Boolean(rowMenu.anchorEl);

  // Row actions menu
  const handleMenuOpen = (e, row) => setRowMenu({ anchorEl: e.currentTarget, row });

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
        {mode === 'logs' && (
          <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <PitcherDropdown pitchersData={pitchersData} selectedPitcher={selectedPitcher} onPitcherChange={onPitcherChange} />
              <InningDropdown pitchersData={pitchersData} selectedPitcher={selectedPitcher} selectedInning={selectedInning} onInningChange={onInningChange} />
            </Box>
            <Box />
          </Box>
        )}
        {/* Empty state vs table separated with logical && to avoid ternary parse issues */}
        {/* Show EmptyState only when in arsenals mode AND there are zero rows */}
        {mode === 'arsenals' && rows.length === 0 && (
          <EmptyState message="No arsenals loaded yet." />
        )}

        {/* Otherwise render the tableContent */}
        {!(mode === 'arsenals' && rows.length === 0) && <>{tableContent}</>}
        {/* Row actions menu */}
        <Menu anchorEl={rowMenu.anchorEl} open={menuOpen} onClose={handleMenuClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <MuiMenuItem onClick={() => handleRowAction('approveMerged')}>Approve merged list</MuiMenuItem>
          <MuiMenuItem onClick={() => handleRowAction('keepOverride')}>Mark as intentional (keep overrides)</MuiMenuItem>
        </Menu>
        {/* Note editor dialog */}
        <Dialog open={noteDlg.open} onClose={() => setNoteDlg(s => ({ ...s, open:false }))} maxWidth="sm" fullWidth>
          <DialogTitle>Edit note — {noteDlg.name}</DialogTitle>
          <DialogContent>
            <TextField
              multiline minRows={4} fullWidth autoFocus
              value={noteDlg.text}
              onChange={(e) => setNoteDlg(s => ({ ...s, text: e.target.value }))}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setNoteDlg(s => ({ ...s, open:false }))}>Cancel</Button>
            <Button onClick={() => {
              saveLocalNote(noteDlg.pid, noteDlg.text);
              setNoteDlg(s => ({ ...s, open:false }));
            }} variant="contained">Save</Button>
          </DialogActions>
        </Dialog>
        {/* Snackbar with Undo */}
        <Snackbar
          open={snack.open}
          autoHideDuration={10000}
          onClose={() => setSnack(s => ({ ...s, open:false }))}
          message={snack.message}
          action={
            <Button color="secondary" size="small" onClick={async () => {
              const u = snack.undo; if (!u) return;
              try {
                // restore note
                if (u.prevNote != null) saveLocalNote(u.key, u.prevNote);
                // write previous pitches back with reviewAction None
                await writePitcherOverride({ key: u.key, pitches: normalizeCodes(u.prevPitches), sourceNote: u.prevNote || '', reviewAction: 'None' });
                // restore UI state
                setTransientByPid((m) => ({
                  ...m,
                  [String(u.pid)]: { pitches: normalizeCodes(u.prevPitches), needsReview: u.prevNeedsReview, reviewAction: u.prevAction || 'None', reviewDate: u.prevDate || '' },
                }));
                setSnack(s => ({ ...s, open:false, undo: null, message: 'Reverted' }));
              } catch (e) {
                setSnack(s => ({ ...s, open:true, message: 'Undo failed', undo: null }));
              }
            }}>Undo</Button>
          }
        />
      </CardContent>
    </Card>
  );
}

// --- Helpers & actions ---
function normalizeCodes(list) {
  const out = [];
  const seen = new Set();
  for (const p of (Array.isArray(list) ? list : [])) {
    const code = normalizePitchLabel(p).code;
    if (!seen.has(code)) { seen.add(code); out.push(code); }
  }
  return out;
}

function slugifyIdLocal(s) {
  return String(s || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function parseArsenalFromLine(line) {
  try {
    const m = line.match(/arsenal:\s*\[([^\]]*)\]/);
    if (!m) return [];
    const arr = m[1]
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)
      .map(t => t.replace(/^"|"$/g, ''));
    return normalizeCodes(arr);
  } catch { return []; }
}

// Attach below component to access hooks' closures
// eslint-disable-next-line no-unused-vars
function useRowActionsAPI(ctx) {
  const { setTransientByPid, setSnack } = ctx;
  const iso = () => {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  };

  const doWrite = async (pid, name, pitches, reviewAction, noteText, opts={}) => {
    const key = pid && !String(pid).startsWith('row-') ? String(pid) : slugifyIdLocal(name);
    const codes = normalizeCodes(pitches);
    const prevNote = readLocalNote(key);
    if (noteText != null) saveLocalNote(key, noteText);
    try {
      const res = await writePitcherOverride({ key, pitches: codes, sourceNote: noteText || '', reviewAction });
      const today = iso();
      setTransientByPid((m) => ({
        ...m,
        [String(pid)]: { pitches: codes, needsReview: false, reviewAction, reviewDate: today },
      }));
      if (!opts.isUndo) {
        const prevPitches = parseArsenalFromLine(res.previousLine || '');
        setSnack({
          open: true,
          message: 'Saved — Undo',
          undo: { pid: String(pid), name, prevPitches, prevAction: 'None', prevNote },
        });
      }
    } catch (e) {
      setSnack({ open: true, message: 'Save failed', undo: null });
      // Revert note if we set it and failed
      if (noteText != null) saveLocalNote(key, prevNote);
    }
  };

  return { doWrite };
}