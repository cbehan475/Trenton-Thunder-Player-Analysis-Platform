import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function InningDropdown({ hittersData, selectedHitter, selectedInning, onInningChange }) {
  const innings = selectedHitter && hittersData
    ? (hittersData.find(h => h.hitter === selectedHitter)?.atBats.map(atBat => atBat.inning) || [])
    : [];
  const uniqueInnings = Array.from(new Set(innings)).sort((a, b) => a - b);

  return (
    <FormControl fullWidth size="small" sx={{ minWidth: 120, '& .MuiOutlinedInput-root': { bgcolor: 'white' } }}>
      <InputLabel id="inning-label">Inning</InputLabel>
      <Select
        labelId="inning-label"
        value={selectedInning || ''}
        label="Inning"
        onChange={e => onInningChange(e.target.value)}
        disabled={!selectedHitter}
      >
        {uniqueInnings.map(inn => (
          <MenuItem key={inn} value={inn}>{inn}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
