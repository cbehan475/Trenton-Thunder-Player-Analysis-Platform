import React, { useState } from 'react';
import { Box, Typography, Grid, useMediaQuery } from '@mui/material';
import HittersTable from '../components/HittersTable';
import HitterDropdown from '../components/HitterDropdown';
import InningDropdown from '../components/InningDropdown';
import { Button } from '@mui/material';

const GAME_DATES = [
  '2025-06-04',
  '2025-06-05',
  '2025-06-06',
  '2025-06-07',
  '2025-06-08',
  '2025-06-10',
  '2025-06-11',
  '2025-06-12',
  '2025-06-13',
  '2025-06-14',
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
  '2025-07-10',
  '2025-07-11',
  '2025-07-12',
].sort((a, b) => new Date(a) - new Date(b));

export default function HittingLogsPage() {
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [hittersData, setHittersData] = useState(null);
  const [selectedHitter, setSelectedHitter] = useState('');
  const [selectedInning, setSelectedInning] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  React.useEffect(() => {
    async function loadData() {
      const module = await import(`../data/logs/hitters-${selectedDate}.js`);
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
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center" alignItems="center">
            {GAME_DATES.map(date => (
              <Grid item key={date}>
                <Button
                  variant={selectedDate === date ? 'contained' : 'outlined'}
                  onClick={() => setSelectedDate(date)}
                  sx={{
                    minWidth: 68,
                    fontWeight: 600,
                    bgcolor: selectedDate === date ? '#FFD700' : undefined,
                    color: selectedDate === date ? '#001f4d' : '#001f4d',
                    borderColor: '#FFD700',
                    '&:hover': {
                      bgcolor: '#FFE066',
                      borderColor: '#FFD700',
                    },
                  }}
                >
                  {date.slice(5).replace('-', '-')}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {selectedDate && (
          <>
            <Grid item xs={12} sm={6} md={4}>
              <HitterDropdown
                hittersData={hittersData || []}
                selectedHitter={selectedHitter}
                onHitterChange={setSelectedHitter}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <InningDropdown
                hittersData={hittersData || []}
                selectedHitter={selectedHitter}
                selectedInning={selectedInning}
                onInningChange={setSelectedInning}
              />
            </Grid>
          </>
        )}
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
