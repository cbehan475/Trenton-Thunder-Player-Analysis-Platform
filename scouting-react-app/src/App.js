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
import PlayerDevPitchersPage from './pages/PlayerDevPitchersPage';
import PlayerDevHittersPage from './pages/PlayerDevHittersPage';
import PlayerComparisonTablePage from './pages/PlayerComparisonTablePage';
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
    { label: 'Player Development Plans – Pitchers', path: '/player-dev-pitchers' },
    { label: 'Player Development Plans – Hitters', path: '/player-dev-hitters' },
    { label: 'Player Comparison Table', path: '/player-comparison-table' },
  ];
  const navigate = useNavigate();
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: navy, pt: { xs: 3, md: 6 } }}>
      {/* Title with Gold Icon */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <BoltIcon sx={{ fontSize: 40, color: gold, mr: 1, mb: 0.5 }} />
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            fontWeight: 800,
            letterSpacing: 1,
            textAlign: 'center',
            fontFamily: 'Montserrat, Roboto, sans-serif',
            fontSize: { xs: 22, sm: 28, md: 34 },
            lineHeight: 1.12,
          }}
        >
          Trenton Thunder Player Development Platform
        </Typography>
      </Box>
      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{
          color: '#e0e0e0',
          fontWeight: 400,
          textAlign: 'center',
          fontSize: { xs: 15, sm: 17, md: 19 },
          mb: 5,
          fontFamily: 'Montserrat, Roboto, sans-serif',
        }}
      >
        Tools for player development, performance analysis, and in-game planning
      </Typography>
      {/* Button Grid */}
      <Container maxWidth="md">
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { md: '52vh' } }}
        >
          {/* First Row */}
          {[0, 1, 2].map(idx => (
            <Grid item xs={12} sm={4} md={4} key={cards[idx]?.label || `empty${idx}`} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
              {cards[idx] ? (
                <Card
                  onClick={() => navigate(cards[idx].path)}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: '#23272F',
                    color: '#fff',
                    borderRadius: 4,
                    boxShadow: 6,
                    width: '100%',
                    maxWidth: 320,
                    minHeight: 90,
                    mx: { xs: 0, sm: 1, md: 2 },
                    my: 1,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 1.5,
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.03)',
                      boxShadow: 12,
                      bgcolor: navy,
                      color: gold,
                    },
                  }}
                >
                  <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mb: 1, textAlign: 'center', fontFamily: 'Montserrat, Roboto, sans-serif', fontSize: { xs: 15, sm: 17, md: 19 } }}>
                      {cards[idx].label}
                    </Typography>
                  </CardContent>
                </Card>
              ) : null}
            </Grid>
          ))}
          {/* Second Row */}
          {[3, 4, 5].map(idx => (
            <Grid item xs={12} sm={4} md={4} key={cards[idx]?.label || `empty${idx}`} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'stretch' }}>
              {cards[idx] ? (
                <Card
                  onClick={() => navigate(cards[idx].path)}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: '#23272F',
                    color: '#fff',
                    borderRadius: 4,
                    boxShadow: 6,
                    width: '100%',
                    maxWidth: 320,
                    minHeight: 90,
                    mx: { xs: 0, sm: 1, md: 2 },
                    my: 1,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 1.5,
                    '&:hover': {
                      transform: 'translateY(-6px) scale(1.03)',
                      boxShadow: 12,
                      bgcolor: navy,
                      color: gold,
                    },
                  }}
                >
                  <CardContent sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mb: 1, textAlign: 'center', fontFamily: 'Montserrat, Roboto, sans-serif', fontSize: { xs: 15, sm: 17, md: 19 } }}>
                      {cards[idx].label}
                    </Typography>
                  </CardContent>
                </Card>
              ) : null}
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
        <Route path="/player-dev-pitchers" element={<PlayerDevPitchersPage />} />
        <Route path="/player-dev-hitters" element={<PlayerDevHittersPage />} />
        <Route path="/player-comparison-table" element={<PlayerComparisonTablePage />} />
        <Route path="/development-hitters" element={<DevelopmentPageHitters />} />
      </Routes>
    </Router>
  );
}