import React from 'react';
import { Box, Typography } from '@mui/material';

export default function DevelopmentPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700 }}>Player Development Plans Page</Typography>
    </Box>
  );
}
