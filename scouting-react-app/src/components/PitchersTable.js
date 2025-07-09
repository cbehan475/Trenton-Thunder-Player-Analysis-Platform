import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

export default function PitchersTable({ pitchersData, selectedPitcher, selectedInning, onPitcherChange, onInningChange }) {
  const pitcherNames = Object.keys(pitchersData || {});
  const innings = selectedPitcher && pitchersData[selectedPitcher] ? Object.keys(pitchersData[selectedPitcher]) : [];
  const rows = useMemo(() => {
    if (!selectedPitcher || !selectedInning || !pitchersData[selectedPitcher] || !pitchersData[selectedPitcher][selectedInning]) return [];
    return pitchersData[selectedPitcher][selectedInning].map((pitch, idx) => ({ id: idx + 1, ...pitch }));
  }, [pitchersData, selectedPitcher, selectedInning]);

  const columns = [
    { field: 'pitch', headerName: '#', width: 70, sortable: true },
    { field: 'type', headerName: 'Type', width: 120, sortable: true },
    { field: 'velo', headerName: 'Velo', width: 90, sortable: true },
    { field: 'spin', headerName: 'Spin', width: 90, sortable: true },
    { field: 'ivb', headerName: 'IVB', width: 90, sortable: true },
    { field: 'hb', headerName: 'HB', width: 90, sortable: true },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel id="pitcher-label">Pitcher</InputLabel>
          <Select
            labelId="pitcher-label"
            value={selectedPitcher || ''}
            label="Pitcher"
            onChange={e => onPitcherChange(e.target.value)}
          >
            {pitcherNames.map(name => (
              <MenuItem key={name} value={name}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="inning-label">Inning</InputLabel>
          <Select
            labelId="inning-label"
            value={selectedInning || ''}
            label="Inning"
            onChange={e => onInningChange(e.target.value)}
            disabled={!selectedPitcher}
          >
            {innings.map(inn => (
              <MenuItem key={inn} value={inn}>{inn}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
        disableSelectionOnClick
        sx={{ background: '#fff', borderRadius: 2 }}
      />
    </Box>
  );
}
