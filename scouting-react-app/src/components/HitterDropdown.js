import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function HitterDropdown({ hittersData, selectedHitter, onHitterChange }) {
  const hitterNames = hittersData ? hittersData.map(h => h.hitter) : [];
  return (
    <FormControl fullWidth size="small" sx={{ minWidth: 180, '& .MuiOutlinedInput-root': { bgcolor: 'white' } }}>
      <InputLabel id="hitter-label">Hitter</InputLabel>
      <Select
        labelId="hitter-label"
        value={selectedHitter || ''}
        label="Hitter"
        onChange={e => onHitterChange(e.target.value)}
      >
        {hitterNames.map(name => (
          <MenuItem key={name} value={name}>{name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
