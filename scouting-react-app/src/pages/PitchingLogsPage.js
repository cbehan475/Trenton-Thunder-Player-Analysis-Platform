import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import PitchersTable, { PitcherDropdown, InningDropdown } from '../components/PitchersTable';
import GameDateDropdown from '../components/GameDateDropdown';
import pitching2025_06_04 from '../data/logs/pitching-2025-06-04.js';
import pitching2025_06_05 from '../data/logs/pitching-2025-06-05.js';
import pitching2025_06_06 from '../data/logs/pitching-2025-06-06.js';
import pitching2025_06_07 from '../data/logs/pitching-2025-06-07.js';
import pitching2025_06_08 from '../data/logs/pitching-2025-06-08.js';
import pitching2025_06_11 from '../data/logs/pitching-2025-06-11.js';
import pitching2025_06_12 from '../data/logs/pitching-2025-06-12.js';
import pitching2025_06_13 from '../data/logs/pitching-2025-06-13.js';
import pitching2025_06_15 from '../data/logs/pitching-2025-06-15.js';
import pitching2025_06_18 from '../data/logs/pitching-2025-06-18.js';
import pitching2025_06_20 from '../data/logs/pitching-2025-06-20.js';
import pitching2025_06_21 from '../data/logs/pitching-2025-06-21.js';
import pitching2025_06_22 from '../data/logs/pitching-2025-06-22.js';
import pitching2025_06_24 from '../data/logs/pitching-2025-06-24.js';
import pitching2025_06_25 from '../data/logs/pitching-2025-06-25.js';
import pitching2025_06_26 from '../data/logs/pitching-2025-06-26.js';
import pitching2025_06_27 from '../data/logs/pitching-2025-06-27.js';
import pitching2025_06_28 from '../data/logs/pitching-2025-06-28.js';
import pitching2025_06_29 from '../data/logs/pitching-2025-06-29.js';
import pitching2025_07_01 from '../data/logs/pitching-2025-07-01.js';
import pitching2025_07_02 from '../data/logs/pitching-2025-07-02.js';
import pitching2025_07_03 from '../data/logs/pitching-2025-07-03.js';
import pitching2025_07_04 from '../data/logs/pitching-2025-07-04.js';
import pitching2025_07_05 from '../data/logs/pitching-2025-07-05.js';
import pitching2025_07_06 from '../data/logs/pitching-2025-07-06.js';
import pitching2025_07_08 from '../data/logs/pitching-2025-07-08.js';
import pitching2025_07_09 from '../data/logs/pitching-2025-07-09.js';
import pitching2025_07_11 from '../data/logs/pitching-2025-07-11.js';
import pitching2025_07_12 from '../data/logs/pitching-2025-07-12.js';

const GAME_DATES = [
  '2025-06-04',
  '2025-06-05',
  '2025-06-06',
  '2025-06-07',
  '2025-06-08',
  '2025-06-11',
  '2025-06-12',
  '2025-06-13',
  '2025-06-15',
  '2025-06-18',
  '2025-06-20',
  '2025-06-21',
  '2025-06-22',
  '2025-06-24',
  '2025-06-25',
  '2025-06-26',
  '2025-06-27',
  '2025-06-28',
  '2025-06-29',
  '2025-07-01',
  '2025-07-02',
  '2025-07-03',
  '2025-07-04',
  '2025-07-05',
  '2025-07-06',
  '2025-07-08',
  '2025-07-09',
  '2025-07-11',
  '2025-07-12',
];

const pitchingLogsMap = {
  '2025-06-04': pitching2025_06_04,
  '2025-06-05': pitching2025_06_05,
  '2025-06-06': pitching2025_06_06,
  '2025-06-07': pitching2025_06_07,
  '2025-06-08': pitching2025_06_08,
  '2025-06-11': pitching2025_06_11,
  '2025-06-12': pitching2025_06_12,
  '2025-06-13': pitching2025_06_13,
  '2025-06-15': pitching2025_06_15,
  '2025-06-18': pitching2025_06_18,
  '2025-06-20': pitching2025_06_20,
  '2025-06-21': pitching2025_06_21,
  '2025-06-22': pitching2025_06_22,
  '2025-06-24': pitching2025_06_24,
  '2025-06-25': pitching2025_06_25,
  '2025-06-26': pitching2025_06_26,
  '2025-06-27': pitching2025_06_27,
  '2025-06-28': pitching2025_06_28,
  '2025-06-29': pitching2025_06_29,
  '2025-07-01': pitching2025_07_01,
  '2025-07-02': pitching2025_07_02,
  '2025-07-03': pitching2025_07_03,
  '2025-07-04': pitching2025_07_04,
  '2025-07-05': pitching2025_07_05,
  '2025-07-06': pitching2025_07_06,
  '2025-07-08': pitching2025_07_08,
  '2025-07-09': pitching2025_07_09,
  '2025-07-11': pitching2025_07_11,
  '2025-07-12': pitching2025_07_12,
};

export default function PitchingLogsPage() {
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [pitchersData, setPitchersData] = useState(null);
  const [selectedPitcher, setSelectedPitcher] = useState('');
  const [selectedInning, setSelectedInning] = useState('');

  React.useEffect(() => {
    async function loadData() {
      if (pitchingLogsMap[selectedDate]) {
        setPitchersData(pitchingLogsMap[selectedDate]);
      } else {
        // File does not exist, clear data or show error
        setPitchersData(null);
      }
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