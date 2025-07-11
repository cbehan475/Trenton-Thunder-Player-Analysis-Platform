import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import GameDateSelector from './components/GameDateSelector';
import PitchersTable from './components/PitchersTable';
import HittersTable from './components/HittersTable';

const GAME_DATES = ['2025-07-06']; // Add more dates as you add files

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
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [hittersData, setHittersData] = useState([]);
  const [pitchersData, setPitchersData] = useState({});
  const [selectedPitcher, setSelectedPitcher] = useState('');
  const [selectedInning, setSelectedInning] = useState('');
  const navigate = useNavigate();


  // Load data on date change
  useEffect(() => {
    fetch(`/data/hitters-${selectedDate}.json`)
      .then(r => r.ok ? r.json() : [])
      .then(data => setHittersData(Array.isArray(data) ? data : []))
      .catch(() => setHittersData([]));
    fetch(`/data/pitchers-${selectedDate}.json`)
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        setPitchersData(data && typeof data === 'object' ? data : {});
        const pitchers = Object.keys(data || {});
        setSelectedPitcher(pitchers[0] || '');
        setSelectedInning(pitchers[0] && data[pitchers[0]] ? Object.keys(data[pitchers[0]])[0] : '');
      })
      .catch(() => {
        setPitchersData({});
        setSelectedPitcher('');
        setSelectedInning('');
      });
  }, [selectedDate]);

  // Update inning when pitcher changes
  useEffect(() => {
    if (selectedPitcher && pitchersData[selectedPitcher]) {
      setSelectedInning(Object.keys(pitchersData[selectedPitcher])[0] || '');
    }
  }, [selectedPitcher, pitchersData]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: navy,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        py: { xs: 4, md: 8 },
      }}
    >
      {/* Lightning bolt icon */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <BoltIcon sx={{ fontSize: 64, color: gold, filter: 'drop-shadow(0 2px 8px #0007)' }} />
      </Box>
      {/* App Title */}
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: gold,
          fontWeight: 900,
          letterSpacing: 2,
          mb: 1,
          textShadow: '0 2px 12px #0008',
        }}
      >
        Trenton Thunder Scouting App
      </Typography>
      {/* Blurb */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: '#fff',
          maxWidth: 700,
          mx: 'auto',
          mb: { xs: 4, md: 6 },
          fontWeight: 400,
          opacity: 0.95,
          textShadow: '0 1px 8px #0006',
        }}
      >
        Built to track and display hitting and pitching data for the Trenton Thunder during the MLB Draft League season. It’s designed to assist with player development, scouting evaluations, and building game-specific reports.
      </Typography>
      {/* Feature Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          width: '100%',
          maxWidth: 1200,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        {cards.map((card, idx) => (
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
                border: `4px solid ${gold}`,
                borderRadius: 4,
                boxShadow: '0 6px 32px 0 #0006',
                transition: 'transform 0.15s, box-shadow 0.15s',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.04)',
                  boxShadow: `0 12px 48px 0 ${gold}99`,
                },
                mx: { xs: 0, md: 1 },
                my: { xs: 1.5, md: 0 },
              }}
              elevation={6}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    color: navy,
                    fontWeight: 700,
                    fontSize: { xs: 20, md: 22 },
                    letterSpacing: 1,
                  }}
                >
                  {card.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function PitchingLogsPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700 }}>Pitching Logs Page</Typography>
    </Box>
  );
}
function HittingLogsPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700 }}>Hitting Logs Page</Typography>
    </Box>
  );
}
function ComparisonPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700 }}>Player Comparison to MLB Averages Page</Typography>
    </Box>
  );
}
function DevelopmentPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700 }}>Player Development Plans Page</Typography>
    </Box>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pitching" element={<PitchingLogsPage />} />
        <Route path="/hitting" element={<HittingLogsPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
      </Routes>
    </Router>
  );
}
