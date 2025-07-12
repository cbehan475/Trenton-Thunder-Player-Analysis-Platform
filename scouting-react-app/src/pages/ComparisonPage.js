import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ComparisonPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700 }}>Player Comparison to MLB Averages Page</Typography>
    </Box>
  );
}
