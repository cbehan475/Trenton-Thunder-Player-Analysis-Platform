import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import HittersTable from '../components/HittersTable';
import GameDateDropdown from '../components/GameDateDropdown';
import HitterDropdown from '../components/HitterDropdown';
import InningDropdown from '../components/InningDropdown';

const GAME_DATES = ['2025-06-04', '2025-06-05', '2025-06-06', '2025-06-07', '2025-06-08', '2025-06-10', '2025-06-11', '2025-06-12', '2025-06-13']; // Added June 13, 2025 for dropdown and data loading.

export default function HittingLogsPage() {
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [hittersData, setHittersData] = useState(null);
  const [selectedHitter, setSelectedHitter] = useState('');
  const [selectedInning, setSelectedInning] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  React.useEffect(() => {
    async function loadData() {
      const module = await import(`../data/hitters-${selectedDate}.js`);
      setHittersData(module.default);
      setSelectedHitter('');
      setSelectedInning('');
    }
    loadData();
  }, [selectedDate]);

  // Filter for table
  let filteredData = hittersData;
  if (selectedHitter) {
    filteredData = hittersData?.filter(h => h.hitter === selectedHitter) || [];
    if (selectedInning) {
      filteredData = filteredData.map(h => ({
        ...h,
        atBats: h.atBats.filter(atBat => atBat.inning === Number(selectedInning))
      }));
    }
  }

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
        Hitting Logs
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
          <HitterDropdown
            hittersData={hittersData || []}
            selectedHitter={selectedHitter}
            onHitterChange={setSelectedHitter}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <InningDropdown
            hittersData={hittersData || []}
            selectedHitter={selectedHitter}
            selectedInning={selectedInning}
            onInningChange={setSelectedInning}
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
        {hittersData && <HittersTable hittersData={filteredData} />}
      </Box>
    </Box>
  );
}
