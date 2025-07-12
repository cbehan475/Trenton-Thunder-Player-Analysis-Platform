import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import GameDateSelector from './components/GameDateSelector';
import PitchersTable from './components/PitchersTable';
import HittersTable from './components/HittersTable';
import hittersData from './data/hitters-2025-06-04';
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
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.label}>
              <Card
                onClick={() => navigate(card.path)}
                sx={{
                  cursor: 'pointer',
                  minHeight: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#fff',
                  boxShadow: 6,
                  borderRadius: 3,
                  transition: 'transform 0.15s',
                  '&:hover': {
                    transform: 'scale(1.04)',
                    boxShadow: 12,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: navy, fontWeight: 600 }} align="center">
                    {card.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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