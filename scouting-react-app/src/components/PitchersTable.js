import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { FormControl, InputLabel, Select, MenuItem, Box, Card, CardContent } from '@mui/material';

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

export function InningDropdown({ pitchersData, selectedPitcher, selectedInning, onInningChange }) {
  const innings = selectedPitcher && pitchersData[selectedPitcher] ? Object.keys(pitchersData[selectedPitcher]) : [];
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

export default function PitchersTable({ pitchersData, selectedPitcher, selectedInning, onPitcherChange, onInningChange }) {
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
    { field: 'pitch', headerName: '#', width: 70, sortable: true },
    { field: 'type', headerName: 'Type', width: 120, sortable: true },
    { field: 'velo', headerName: 'Velo', width: 90, sortable: true },
    { field: 'spin', headerName: 'Spin', width: 90, sortable: true },
    { field: 'ext', headerName: 'Ext', width: 90, sortable: true },
    { field: 'ivb', headerName: 'IVB', width: 90, sortable: true },
    { field: 'hb', headerName: 'HB', width: 90, sortable: true },
    { field: 'result', headerName: 'Result', width: 120, sortable: true },
    { field: 'batter', headerName: 'Batter', width: 150, sortable: true }
  ];

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
          <PitcherDropdown pitchersData={pitchersData} selectedPitcher={selectedPitcher} onPitcherChange={onPitcherChange} />
          <InningDropdown pitchersData={pitchersData} selectedPitcher={selectedPitcher} selectedInning={selectedInning} onInningChange={onInningChange} />
        </Box>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          disableSelectionOnClick
          sx={{
            background: '#fff',
            borderRadius: 2,
            '& .MuiDataGrid-columnHeaders': {
              position: 'sticky',
              top: 0,
              backgroundColor: 'background.paper',
              zIndex: 1,
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            },
            '& .MuiDataGrid-root': {
              overflowX: 'auto',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}