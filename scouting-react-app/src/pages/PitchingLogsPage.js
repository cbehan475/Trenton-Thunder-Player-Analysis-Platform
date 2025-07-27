import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import PitchersTable, { PitcherDropdown, InningDropdown } from '../components/PitchersTable';
import GameDateDropdown from '../components/GameDateDropdown';

const GAME_DATES = ['2025-06-04', '2025-06-05', '2025-06-06', '2025-06-07', '2025-06-08']; // Added June 8, 2025 for dropdown and data loading.

export default function PitchingLogsPage() {
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [pitchersData, setPitchersData] = useState(null);
  const [selectedPitcher, setSelectedPitcher] = useState('');
  const [selectedInning, setSelectedInning] = useState('');

  React.useEffect(() => {
    async function loadData() {
      const module = await import(`../data/pitching-${selectedDate}.js`);
      setPitchersData(module.default);
      setSelectedPitcher('');
      setSelectedInning('');
    }
    loadData();
  }, [selectedDate]);

  const handlePitcherChange = (pitcher) => {
    setSelectedPitcher(pitcher);
    setSelectedInning('');
  };

  const handleInningChange = (inning) => {
    setSelectedInning(inning);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', bgcolor: '#f5f6fa', py: isMobile ? 2 : 5 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        sx={{
          color: '#FFD700',
          textShadow: '0 2px 8px #001f4d, 0 1px 0 #001f4d',
          fontWeight: 700,
          mb: isMobile ? 2 : 4,
          letterSpacing: 1.5,
        }}
      >
        Pitching Logs
      </Typography>

      <Grid
        container
        spacing={isMobile ? 1 : 3}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          mb: isMobile ? 2 : 4,
          px: isMobile ? 1 : 0,
        }}
      >
        <Grid item xs={12} sm={4}>
          <GameDateDropdown dates={GAME_DATES} selectedDate={selectedDate} onChange={setSelectedDate} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PitcherDropdown
            pitchersData={pitchersData || {}}
            selectedPitcher={selectedPitcher}
            onPitcherChange={handlePitcherChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InningDropdown
            pitchersData={pitchersData || {}}
            selectedPitcher={selectedPitcher}
            selectedInning={selectedInning}
            onInningChange={handleInningChange}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          bgcolor: '#fff',
          borderRadius: 4,
          boxShadow: '0 2px 12px 0 rgba(0,32,91,0.08)',
          p: isMobile ? 1 : 4,
          border: '1px solid #e0e0e0',
          minHeight: 300,
        }}
      >
        {pitchersData && (
          <PitchersTable
            pitchersData={pitchersData}
            selectedPitcher={selectedPitcher}
            selectedInning={selectedInning}
            onPitcherChange={handlePitcherChange}
            onInningChange={handleInningChange}
          />
        )}
      </Box>
    </Box>
  );
}