import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import GameDateSelector from './components/GameDateSelector';
import PitchersTable from './components/PitchersTable';
import HittersTable from './components/HittersTable';
import hittersData from './data/logs/hitters-2025-06-04.js';
import HittingLogsPage from './pages/HittingLogsPage';
import PitchingLogsPage from './pages/PitchingLogsPage';
import ComparisonPage from './pages/ComparisonPage';
import DevelopmentPage from './pages/DevelopmentPage';

const GAME_DATES = [
  { label: 'June 4, 2025 vs Williamsport', value: '2025-06-04' },
  // Add more dates as needed
];

function Home() {
  const theme = useTheme();
  const navy = '#102542';
  const gold = '#FFD600';
  const cards = [
    { label: 'Pitching Game Logs', path: '/pitching' },
    { label: 'Hitting Game Logs', path: '/hitting' },
    { label: 'Player Comparison to MLB Averages', path: '/comparison' },
    { label: 'Player Development Plans', path: '/development' },
  ];
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: navy, py: 6 }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
          <BoltIcon sx={{ fontSize: 70, color: gold, mb: 2 }} />
          <Typography variant="h3" sx={{ color: gold, fontWeight: 700, mb: 1, letterSpacing: 1 }} align="center">
            Trenton Thunder Scouting App
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff', mb: 2 }} align="center">
            Welcome! Select a feature below to view game logs, player comparisons, and development plans.
          </Typography>
        </Box>

        {/* First-Half Player Dashboard Section */}
        <Box sx={{ mb: 6, p: 3, bgcolor: '#fff', borderRadius: 3, boxShadow: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ color: navy, fontWeight: 700, mb: 1 }} align="center">
            First-Half Player Dashboard
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', mb: 2 }} align="center">
            Track game logs, development trends, and player insights from the first half of the 2025 MLB Draft League season.
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {/* Row 1 */}
            <Grid item xs={12} container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
                <Card sx={{ cursor: 'pointer', minWidth: 180, bgcolor: gold, color: navy, borderRadius: 2, boxShadow: 2, '&:hover': { boxShadow: 6, bgcolor: '#ffe066' } }} onClick={() => navigate('/hitting')}>
                  <CardContent>
                    <Typography variant="button" sx={{ fontWeight: 700 }} align="center">
                      View Hitting Logs
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
                <Card sx={{ cursor: 'pointer', minWidth: 180, bgcolor: gold, color: navy, borderRadius: 2, boxShadow: 2, '&:hover': { boxShadow: 6, bgcolor: '#ffe066' } }} onClick={() => navigate('/pitching')}>
                  <CardContent>
                    <Typography variant="button" sx={{ fontWeight: 700 }} align="center">
                      View Pitching Logs
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* Row 2 */}
            <Grid item xs={12} container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
                <Card sx={{ cursor: 'pointer', minWidth: 180, bgcolor: gold, color: navy, borderRadius: 2, boxShadow: 2, '&:hover': { boxShadow: 6, bgcolor: '#ffe066' } }} onClick={() => navigate('/development')}>
                  <CardContent>
                    <Typography variant="button" sx={{ fontWeight: 700 }} align="center">
                      View Player Dev Plans
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} display="flex" justifyContent="center">
                <Card sx={{ cursor: 'pointer', minWidth: 220, bgcolor: gold, color: navy, borderRadius: 2, boxShadow: 2, '&:hover': { boxShadow: 6, bgcolor: '#ffe066' } }} onClick={() => navigate('/comparison')}>
                  <CardContent>
                    <Typography variant="button" sx={{ fontWeight: 700 }} align="center">
                      Player Comparison to MLB Averages
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>



      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hitting" element={<HittingLogsPage />} />
        <Route path="/pitching" element={<PitchingLogsPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
      </Routes>
    </Router>
  );
}