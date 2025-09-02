import React, { useState, useMemo } from 'react';
import { Box, Typography, MenuItem, Select, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Switch, FormControlLabel } from '@mui/material';
import Grid from '@mui/material/Grid';
import { BarChart, Bar, XAxis, YAxis, Tooltip as ReTooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';
import hittersData from '../data/logs/hittersDataAllFirstHalf';

const LEVELS = ["MLB", "AAA", "AA", "A+", "A"];
// MLB averages for a typical 32-game stretch (approximate, based on per-season MLB averages scaled to 32 games)
const LEAGUE_PLACEHOLDER = {
  atBats: 120,           // ~3.75 AB/game x 32
  strikeouts: 30,        // ~0.94 K/game x 32
  walks: 12,             // ~0.38 BB/game x 32
  avgEV: 88.4,           // MLB Statcast average
  avgLA: 12.1,           // MLB Statcast average
  obp: 0.318,            // MLB OBP
  slg: 0.410,            // MLB SLG
  ops: 0.728             // MLB OPS
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

const METRIC_DESCRIPTIONS = {
  atBats: 'Total official at-bats (does not include walks or sacrifices)',
  strikeouts: 'Strikeouts (K): Number of times the player struck out',
  walks: 'Walks (BB): Number of times the player walked',
  avgEV: 'EV: Average exit velocity (mph) on batted balls',
  avgLA: 'LA: Average launch angle (degrees) on batted balls',
  obp: 'OBP: On-base percentage',
  slg: 'SLG: Slugging percentage',
  ops: 'OPS: On-base plus slugging percentage',
};

function getBetterValue(metric, playerVal, leagueVal) {
  // For these, higher is better:
  const higherIsBetter = ['avgEV', 'avgLA', 'obp', 'slg', 'ops'];
  // For these, lower is better:
  const lowerIsBetter = ['strikeouts'];
  if (playerVal === '-' || leagueVal === '-') return null;
  if (higherIsBetter.includes(metric)) {
    return Number(playerVal) > Number(leagueVal) ? 'player' : (Number(playerVal) < Number(leagueVal) ? 'league' : null);
  }
  if (lowerIsBetter.includes(metric)) {
    return Number(playerVal) < Number(leagueVal) ? 'player' : (Number(playerVal) > Number(leagueVal) ? 'league' : null);
  }
  return null;
}

export default function ComparisonPage() {
  const [selectedPlayer, setSelectedPlayer] = useState(hittersData[0]?.hitter || '');
  const [selectedLevel, setSelectedLevel] = useState(LEVELS[0]);
  const [showChart, setShowChart] = useState(true);

  const playerList = useMemo(() => hittersData.map(h => h.hitter), []);
  const playerStats = useMemo(() => {
    const player = hittersData.find(h => h.hitter === selectedPlayer);
    if (!player) return null;
    return calcPlayerStats(player.atBats);
  }, [selectedPlayer]);

  // Prepare metrics for chart
  const chartMetrics = [
    { key: 'avgEV', label: 'EV (mph)' },
    { key: 'avgLA', label: 'LA (°)' },
    { key: 'obp', label: 'OBP' },
    { key: 'slg', label: 'SLG' },
    { key: 'ops', label: 'OPS' },
  ];
  const chartData = chartMetrics.map(m => ({
    metric: m.label,
    Player: playerStats?.[m.key] === '-' ? null : Number(playerStats[m.key]),
    League: LEAGUE_PLACEHOLDER[m.key] === '-' ? null : Number(LEAGUE_PLACEHOLDER[m.key]),
  }));

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 1 }}>
        <Grid xs={12} sm={5} md={4}>
          <Typography variant="subtitle2" sx={{ color: '#FFD600', fontWeight: 700, mb: 0.5 }}>Select Player</Typography>
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
        <Grid xs={12} sm={5} md={4}>
          <Typography variant="subtitle2" sx={{ color: '#FFD600', fontWeight: 700, mb: 0.5 }}>Select Comparison Level</Typography>
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
        <Grid xs={12} sm={2} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FormControlLabel
            control={<Switch checked={showChart} onChange={e => setShowChart(e.target.checked)} sx={{ color: '#FFD600' }} />}
            label={<Typography sx={{ color: '#FFD600', fontWeight: 600, fontSize: 13 }}>Show Metrics Chart</Typography>}
            sx={{ ml: 1 }}
          />
        </Grid>
      </Grid>
      <Box sx={{ maxWidth: 700, mx: 'auto', bgcolor: '#1A2233', borderRadius: 2, boxShadow: 3, p: { xs: 1, sm: 2 } }}>
        <TableContainer component={Paper} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
          <Table size="small" sx={{ minWidth: 300 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#FFD600', fontWeight: 700, py: 0.5, px: 1.5 }}>Metric</TableCell>
                <TableCell sx={{ color: '#FFD600', fontWeight: 700, py: 0.5, px: 1.5, textAlign: 'center' }}>Player Value</TableCell>
                <TableCell sx={{ color: '#FFD600', fontWeight: 700, py: 0.5, px: 1.5, textAlign: 'center' }}>League Avg ({selectedLevel})</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { key: 'atBats', label: 'Total At-Bats' },
                { key: 'strikeouts', label: 'Total Strikeouts (K)' },
                { key: 'walks', label: 'Total Walks (BB)' },
                { key: 'avgEV', label: 'Average Exit Velocity (EV)' },
                { key: 'avgLA', label: 'Average Launch Angle (LA)' },
                { key: 'obp', label: 'On-Base % (OBP)' },
                { key: 'slg', label: 'Slugging % (SLG)' },
                { key: 'ops', label: 'OPS (OBP + SLG)' },
              ].map(row => {
                const playerVal = playerStats?.[row.key] ?? '-';
                const leagueVal = LEAGUE_PLACEHOLDER[row.key];
                const better = getBetterValue(row.key, playerVal, leagueVal);
                return (
                  <TableRow key={row.key} sx={{ '&:hover': { bgcolor: '#23304A' } }}>
                    <Tooltip title={METRIC_DESCRIPTIONS[row.key]} arrow placement="right">
                      <TableCell sx={{ color: '#fff', fontWeight: 500, py: 0.5, px: 1.5 }}>{row.label}</TableCell>
                    </Tooltip>
                    <TableCell sx={{
                      color: better === 'player' ? '#00e676' : '#FFD600',
                      fontWeight: better === 'player' ? 700 : 600,
                      bgcolor: better === 'player' ? 'rgba(0,230,118,0.08)' : 'inherit',
                      textAlign: 'center',
                      py: 0.5, px: 1.5,
                      borderRight: '1px solid #23272F',
                    }}>{playerVal}</TableCell>
                    <TableCell sx={{
                      color: better === 'league' ? '#00b0ff' : '#FFD600',
                      fontWeight: better === 'league' ? 700 : 600,
                      bgcolor: better === 'league' ? 'rgba(0,176,255,0.08)' : 'inherit',
                      textAlign: 'center',
                      py: 0.5, px: 1.5,
                    }}>{leagueVal}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {showChart && (
          <Box sx={{ mt: 2, height: 220, bgcolor: 'rgba(16,37,66,0.92)', borderRadius: 2, p: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#FFD600', fontWeight: 600, mb: 1 }}>
              Batting Metrics Comparison
            </Typography>
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
                <XAxis type="number" domain={[0, 'dataMax + 0.1']} tick={{ fill: '#FFD600', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="metric" tick={{ fill: '#FFD600', fontWeight: 600, fontSize: 13 }} width={80} axisLine={false} tickLine={false} />
                <ReTooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} contentStyle={{ background: '#1A2233', border: '1px solid #FFD600', color: '#FFD600', fontWeight: 600 }} />
                <Legend wrapperStyle={{ color: '#FFD600', fontWeight: 600, fontSize: 13 }} />
                <Bar dataKey="Player" fill="#FFD600" barSize={18} radius={[8, 8, 8, 8]}>
                  <LabelList dataKey="Player" position="right" formatter={v => v !== null ? v : '-'} fill="#FFD600" fontWeight={700} fontSize={13} />
                </Bar>
                <Bar dataKey="League" fill="#00b0ff" barSize={18} radius={[8, 8, 8, 8]}>
                  <LabelList dataKey="League" position="right" formatter={v => v !== null ? v : '-'} fill="#00b0ff" fontWeight={700} fontSize={13} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
}
