import React, { useMemo, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FormControl, InputLabel, Select, MenuItem, Box, Card, CardContent, Tooltip, Button, Menu, Chip } from '@mui/material';

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
    { codes: ['ff', 'four-seam', 'four seam', 'fourseam', '4-seam', '4 seam', 'fastball', 'fb'], code: 'FF', full: 'Four-Seam' },
    { codes: ['si', 'sinker', 'two-seam', 'two seam', '2-seam', '2 seam', 'two-seamer', '2seam', 'two seam fastball', 'ft'], code: 'SI', full: 'Sinker' },
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
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // --- Arsenals (compact) mode ---
  if (mode === 'arsenals') {
    const rows = useMemo(() => {
      const arr = Array.isArray(arsenals) ? arsenals : [];
      return arr.map((r, idx) => ({
        id: r.playerId || r.name || idx + 1,
        playerId: r.playerId,
        name: r.name,
        bt: r.bt,
        pitches: Array.isArray(r.pitches) ? r.pitches : [],
        status: r.status,
        statusNote: r.statusNote,
      }));
    }, [arsenals]);

    const columns = [
      { field: 'name', headerName: 'Name', flex: 1.2, minWidth: 160, sortable: true },
      { field: 'bt', headerName: 'B/T', width: 84, align: 'right', headerAlign: 'right', sortable: true },
      {
        field: 'pitches', headerName: 'Pitches', flex: 1, minWidth: 160, align: 'right', headerAlign: 'right', sortable: false,
        renderCell: (params) => {
          const list = Array.isArray(params.value) ? params.value : [];
          // normalize to MLB short codes and merge duplicates (view-only)
          const codes = [];
          const seen = new Set();
          for (const p of list) {
            const { code, full } = normalizePitchLabel(p);
            if (!seen.has(code)) {
              seen.add(code);
              codes.push({ code, full });
            }
          }
          return (
            <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end', width: '100%' }}>
              {codes.map(({ code, full }) => (
                <Tooltip key={code} title={full} arrow>
                  <Chip label={code} size="small" sx={{ fontWeight: 700, height: 22 }} />
                </Tooltip>
              ))}
            </Box>
          );
        }
      },
      {
        field: 'tags', headerName: 'Tags', width: 160, align: 'right', headerAlign: 'right', sortable: false,
        valueGetter: (params) => ({ status: params.row.status, note: params.row.statusNote }),
        renderCell: (params) => {
          const s = params.value?.status;
          const note = params.value?.note;
          if (!s) return <span style={{ color: '#9ca3af' }}>—</span>;
          const map = {
            VERIFIED: { bg: 'rgba(16,185,129,0.15)', color: '#059669', border: '1px solid rgba(5,150,105,0.35)' },
            VERIFY: { bg: 'rgba(245,158,11,0.15)', color: '#B45309', border: '1px solid rgba(180,83,9,0.35)' },
            'NEEDS REVIEW': { bg: 'rgba(239,68,68,0.15)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.35)' },
          };
          const style = map[s] || { bg: '#f3f4f6', color: '#6b7280', border: '1px solid rgba(0,0,0,0.08)' };
          const label = note && s !== 'VERIFIED' ? `${s} — ${note}` : s;
          return (
            <Chip label={label} size="small" sx={{
              height: 22,
              bgcolor: style.bg,
              color: style.color,
              border: style.border,
              fontWeight: 700,
            }} />
          );
        }
      },
    ];

    return (
      <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
        <CardContent>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={25}
            rowsPerPageOptions={[25, 50, 100]}
            disableSelectionOnClick
            density="compact"
            rowHeight={34}
            columnHeaderHeight={38}
            onRowDoubleClick={onRowDoubleClick}
            sx={{
              background: '#fff',
              borderRadius: 2,
              '& .MuiDataGrid-row:hover': { backgroundColor: 'rgba(25, 118, 210, 0.08)' },
              '& .MuiDataGrid-row:nth-of-type(odd)': { backgroundColor: '#f9fafb' },
              '& .MuiDataGrid-cell': { fontSize: 13, py: 0.25 },
              '& .MuiDataGrid-columnHeadersInner': { fontSize: 12, fontWeight: 700 },
              '& .MuiDataGrid-root': { overflowX: 'auto' },
            }}
          />
        </CardContent>
      </Card>
    );
  }

  // --- Default: logs mode ---
  const rows = useMemo(() => {
    if (!selectedPitcher || !selectedInning || !pitchersData[selectedPitcher] || !pitchersData[selectedPitcher][selectedInning]) return [];
    return pitchersData[selectedPitcher][selectedInning].map((pitch, idx) => ({
      id: idx + 1,
      pitch: idx + 1,
      type: pitch.pitchType,
      velo: pitch.velo,
      spin: pitch.spin,
      ext: pitch.ext,
      ivb: pitch.ivb,
      hb: pitch.hb,
      result: pitch.result,
      batter: pitch.batter
    }));
  }, [pitchersData, selectedPitcher, selectedInning]);

  const columns = [
    { field: 'pitch', headerName: '#', width: 64, sortable: true, align: 'right', headerAlign: 'right' },
    {
      field: 'type', headerName: 'Type', width: 90, sortable: true,
      renderCell: (params) => {
        const { code, full } = normalizePitchLabel(params.value);
        return (
          <Tooltip title={full} arrow>
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

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
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
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          disableSelectionOnClick
          density="compact"
          rowHeight={34}
          columnHeaderHeight={38}
          onRowDoubleClick={onRowDoubleClick}
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
            '& .MuiDataGrid-root': {
              overflowX: 'auto',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}