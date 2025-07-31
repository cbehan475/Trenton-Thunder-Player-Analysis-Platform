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
import DevelopmentPagePitchers from './pages/DevelopmentPagePitchers';
import DevelopmentPageHitters from './pages/DevelopmentPageHitters';

const GAME_DATES = [
  { label: 'June 4, 2025 vs Williamsport', value: '2025-06-04' },
  // Add more dates as needed
];

function Home() {
  const theme = useTheme();
  const navy = '#102542';
  const gold = '#FFD600';
  const charcoal = '#23272F';
  const cards = [
    { label: 'Pitching Game Logs', path: '/pitching' },
    { label: 'Hitting Game Logs', path: '/hitting' },
    { label: 'Player Comparison to MLB Averages', path: '/comparison' },
    { label: 'Player Development Plans – Pitchers', path: '/development-pitchers' },
    { label: 'Player Development Plans – Hitters', path: '/development-hitters' },
  ];
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: navy }}>
      {/* Banner/Header */}
      <Box sx={{ width: '100%', bgcolor: charcoal, py: { xs: 3, md: 4 }, px: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 3, mb: 4 }}>
        <BoltIcon sx={{ fontSize: 60, color: gold, mr: 2 }} />
        <Typography variant="h3" sx={{ color: '#fff', fontWeight: 800, letterSpacing: 2, textShadow: '0 2px 8px #001f4d', fontFamily: 'Montserrat, Roboto, sans-serif' }}>
          Trenton Thunder Scouting App
        </Typography>
      </Box>
      {/* Subheading */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Typography variant="h5" align="center" sx={{ color: '#fff', mb: 2, fontWeight: 400, letterSpacing: 1, fontFamily: 'Montserrat, Roboto, sans-serif' }}>
          Data-driven insights for player development and in-game decision-making
        </Typography>
      </Container>
      {/* Feature Cards */}
      <Container maxWidth="md">
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          justifyContent="center"
          alignItems="stretch"
          sx={{ mt: 1, mb: 1 }}
        >
          {cards.map((card, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={card.label}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'stretch',
                mb: { xs: 2, sm: 0 },
              }}
            >
              <Card
                onClick={() => navigate(card.path)}
                sx={{
                  cursor: 'pointer',
                  bgcolor: '#23272F',
                  color: '#fff',
                  borderRadius: 4,
                  boxShadow: 6,
                  width: '100%',
                  maxWidth: 370,
                  minHeight: 130,
                  mx: { xs: 0, sm: 1, md: 2 },
                  my: { xs: 1, sm: 2 },
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.03)',
                    boxShadow: 12,
                    bgcolor: navy,
                    color: gold,
                  },
                }}
              >
                <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mb: 1, textAlign: 'center', fontFamily: 'Montserrat, Roboto, sans-serif' }}>
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
        <Route path="/development-pitchers" element={<DevelopmentPagePitchers />} />
        <Route path="/development-hitters" element={<DevelopmentPageHitters />} />
      </Routes>
    </Router>
  );
}