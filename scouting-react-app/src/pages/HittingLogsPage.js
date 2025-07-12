import React, { useState } from 'react';
import HittersTable from '../components/HittersTable';
import hittersData from '../data/hitters-2025-06-04';
import GameDateSelector from '../components/GameDateSelector';
import { Box, Typography } from '@mui/material';

const GAME_DATES = [
  { label: 'June 4, 2025 vs Williamsport', value: '2025-06-04' },
  // Add more dates as needed
];

export default function HittingLogsPage() {
  // For now, only one date is supported. Future: load by date.
  const [selectedDate] = useState(GAME_DATES[0].value);
  // If more dates/files, use selectedDate to load correct data
  return (
    <Box sx={{ bgcolor: '#102542', minHeight: '100vh', py: 4 }}>
      <Typography variant="h4" align="center" sx={{ color: '#FFD600', mb: 2, fontWeight: 700 }}>
        Hitting Logs - {GAME_DATES.find(d => d.value === selectedDate)?.label}
      </Typography>
      {/* Future: <GameDateSelector ... /> */}
      <Box sx={{ maxWidth: 1100, mx: 'auto', bgcolor: '#fff', borderRadius: 3, p: 2 }}>
        <HittersTable hittersData={hittersData} />
      </Box>
    </Box>
  );
}
