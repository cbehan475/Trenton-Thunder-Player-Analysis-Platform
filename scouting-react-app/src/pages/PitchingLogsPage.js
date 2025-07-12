import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import pitchersData from '../data/pitching-2025-06-04';
import PitchersTable from '../components/PitchersTable';

export default function PitchingLogsPage() {
  const [selectedPitcher, setSelectedPitcher] = useState('');
  const [selectedInning, setSelectedInning] = useState('');

  const handlePitcherChange = (pitcher) => {
    setSelectedPitcher(pitcher);
    setSelectedInning('');
  };

  const handleInningChange = (inning) => {
    setSelectedInning(inning);
  };

  return (
    <>
      <Typography variant="h4" sx={{ color: '#FF6F00', mb: 2 }}>
        Pitching Logs - June 4, 2025 vs Williamsport
      </Typography>
      <Box sx={{ maxWidth: 1100, mx: 'auto', bgcolor: '#fff', borderRadius: 3, p: 2 }}>
        <PitchersTable
          pitchersData={pitchersData}
          selectedPitcher={selectedPitcher}
          selectedInning={selectedInning}
          onPitcherChange={handlePitcherChange}
          onInningChange={handleInningChange}
        />
      </Box>
    </>
  );
}