import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function GameDateSelector({ dates, selectedDate, onChange }) {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel id="game-date-label">Game Date</InputLabel>
      <Select
        labelId="game-date-label"
        value={selectedDate}
        label="Game Date"
        onChange={e => onChange(e.target.value)}
      >
        {dates.map(date => (
          <MenuItem key={date} value={date}>{date}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
