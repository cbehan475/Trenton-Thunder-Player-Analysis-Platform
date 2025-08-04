import React, { useState, useMemo } from 'react';
import { Box, Typography, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import hittersData from '../data/logs/hitters-2025-07-12';

const LEVELS = ["MLB", "AAA", "AA", "A+", "A"];
const LEAGUE_PLACEHOLDER = {
  atBats: 100,
  strikeouts: 20,
  walks: 10,
  avgEV: 87.5,
  avgLA: 13.2,
  obp: 0.340,
  slg: 0.420,
  ops: 0.760
};

function calcPlayerStats(atBats) {
  const abCount = atBats.length;
  let totalEV = 0, totalLA = 0;
  atBats.forEach(ab => {
    totalEV += ab.ev || 0;
    totalLA += ab.la || 0;
  });
  const avgEV = abCount ? (totalEV / abCount).toFixed(1) : '-';
  const avgLA = abCount ? (totalLA / abCount).toFixed(1) : '-';
  // All other stats remain as placeholders
  return {
    atBats: '-',
    strikeouts: '-',
    walks: '-',
    avgEV,
    avgLA,
    obp: '-',
    slg: '-',
    ops: '-'
  };
}

export default function ComparisonPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(hittersData[0]?.hitter || '');
  const [selectedLevel, setSelectedLevel] = useState(LEVELS[0]);

  const playerList = useMemo(() => hittersData.map(h => h.hitter), []);
  const playerStats = useMemo(() => {
    const player = hittersData.find(h => h.hitter === selectedPlayer);
    if (!player) return null;
    return calcPlayerStats(player.atBats);
  }, [selectedPlayer]);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
        <Grid item xs={12} sm={5} md={4}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel sx={{ color: '#FFD600' }}>Player</InputLabel>
            <Select
              value={selectedPlayer}
              label="Player"
              onChange={e => setSelectedPlayer(e.target.value)}
              sx={{ color: '#FFD600', bgcolor: '#1A2233', borderRadius: 1 }}
              MenuProps={{ PaperProps: { sx: { bgcolor: '#23272F', color: '#FFD600' } } }}
            >
              {playerList.map(name => <MenuItem key={name} value={name}>{name}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel sx={{ color: '#FFD600' }}>Comparison Level</InputLabel>
            <Select
              value={selectedLevel}
              label="Comparison Level"
              onChange={e => setSelectedLevel(e.target.value)}
              sx={{ color: '#FFD600', bgcolor: '#1A2233', borderRadius: 1 }}
              MenuProps={{ PaperProps: { sx: { bgcolor: '#23272F', color: '#FFD600' } } }}
            >
              {LEVELS.map(level => <MenuItem key={level} value={level}>{level}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ maxWidth: 700, mx: 'auto', bgcolor: '#1A2233', borderRadius: 2, boxShadow: 3, p: { xs: 1, sm: 3 } }}>
        <TableContainer component={Paper} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
          <Table size="small" sx={{ minWidth: 300 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Metric</TableCell>
                <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>Player Value</TableCell>
                <TableCell sx={{ color: '#FFD600', fontWeight: 700 }}>League Average ({selectedLevel})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Total At-Bats</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.atBats ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.atBats}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Total Strikeouts (K)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.strikeouts ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.strikeouts}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Total Walks (BB)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.walks ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.walks}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Average Exit Velocity (EV)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.avgEV ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.avgEV}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Average Launch Angle (LA)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.avgLA ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.avgLA}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>On-Base % (OBP)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.obp ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.obp}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>Slugging % (SLG)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.slg ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.slg}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: '#fff' }}>OPS (OBP + SLG)</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{playerStats?.ops ?? '-'}</TableCell>
                <TableCell sx={{ color: '#FFD600' }}>{LEAGUE_PLACEHOLDER.ops}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
