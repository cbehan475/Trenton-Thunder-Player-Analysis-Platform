import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Grid, Box, Card, CardContent, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

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
import PitchingHub from './pages/PitchingHub';
import HittingHub from './pages/HittingHub';
import PlayerDevHub from './pages/PlayerDevHub';
import PitchTypeAnalysisPage from './pages/PitchTypeAnalysisPage';
import HittingPerformancePage from './pages/HittingPerformancePage';
import HittingBattedBallPage from './pages/HittingBattedBallPage';
import DevelopmentPage from './pages/DevelopmentPage';
import DevelopmentPagePitchers from './pages/DevelopmentPagePitchers';
import DevelopmentPageHitters from './pages/DevelopmentPageHitters';
import NavBar from './components/NavBar';


function Home() {
  const navy = '#0B1220';
  const gold = '#FFD600';
  return (
    <>
      <NavBar className="navbar" />
      <Box sx={{
        background: 'radial-gradient(1400px 900px at 50% -250px, #1a2b4a 0%, #0e1b34 55%, #0a1327 100%)',
        color: '#E9EEFF',
        minHeight: 'calc(100vh - 56px)'
      }}>
        <Container maxWidth="lg" className="container">
          {/* HERO */}
          <Box sx={{ pt: 1, pb: 1 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                display: 'inline-flex',
                alignItems: 'baseline',
                gap: 0,
                mt: 0,
                mb: 0.75,
                lineHeight: 1.05
              }}
            >
              <BoltIcon sx={{ color: '#FFB300', fontSize: '1.4em', transform: 'translateY(3px) translateX(-2px)' }} />
              Trenton Thunder Player Analysis Platform
            </Typography>

            <Typography
              variant="body1"
              sx={{
                maxWidth: 820,
                mx: 'auto',
                mt: 0.5, mb: 0.5,
                lineHeight: 1.45,
                color: '#fff',
                fontWeight: 400,
                fontFamily: 'Montserrat, Roboto, sans-serif',
                textAlign: 'center',
              }}
            >
              Complete first-half player performance analysis for the 2025 MLB Draft League season, including advanced metrics, player development plans, and comparisons to professional averages from Rookie Bail through the MLB through.
            </Typography>

            {/* 2025 SEASON pill */}
            <Box sx={{ mt: 0.25, mb: 0.75, display: 'flex', justifyContent: 'center' }}>
              <Box
                className="season-pill"
                sx={{
                  bgcolor: gold,
                  color: '#23272F',
                  fontWeight: 700,
                  borderRadius: 999,
                  px: 4,
                  py: 1.2,
                  fontSize: 22,
                  letterSpacing: 1,
                  fontFamily: 'Montserrat, Roboto, sans-serif',
                  boxShadow: 2,
                  display: 'inline-block',
                }}
              >
                2025 SEASON
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 0.5, pt: 0.5, pb: 1 }}>
            <Grid container spacing={{ xs: 1.5, md: 2 }} alignItems="stretch" justifyContent="center">
              {/* Pitching Analytics Card */}
              <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <Card sx={{
                  height: '100%',
                  minHeight: 168,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: '#fff'
                }}>
                  <CardContent sx={{ flexGrow: 1, p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EmojiObjectsIcon sx={{ color: gold, mr: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ color: '#23272F', fontWeight: 800, fontFamily: 'Montserrat, Roboto, sans-serif' }}>
                        Pitching Analytics
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ flexGrow: 1, pl: 3, color: '#23272F', fontSize: 17, fontWeight: 500, fontFamily: 'Montserrat, Roboto, sans-serif', mb: 0 }}>
                      <li>Pitching game logs</li>
                      <li>Pitch movement & control</li>
                      <li>Pitch type analysis</li>
                      <li>Player comparisons to pro averages</li>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              {/* Hitting Analytics Card */}
              <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <Card sx={{
                  height: '100%',
                  minHeight: 168,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: '#fff'
                }}>
                  <CardContent sx={{ flexGrow: 1, p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EmojiObjectsIcon sx={{ color: gold, mr: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ color: '#23272F', fontWeight: 800, fontFamily: 'Montserrat, Roboto, sans-serif' }}>
                        Hitting Analytics
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ flexGrow: 1, pl: 3, color: '#23272F', fontSize: 17, fontWeight: 500, fontFamily: 'Montserrat, Roboto, sans-serif', mb: 0 }}>
                      <li>Hitting game logs</li>
                      <li>Batting performance metrics</li>
                      <li>Batted ball profiles</li>
                      <li>Player comparisons to pro averages</li>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              {/* Player Development Card */}
              <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
                <Card sx={{
                  height: '100%',
                  minHeight: 168,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 1.5,
                  borderRadius: 2,
                  boxShadow: 3,
                  bgcolor: '#fff'
                }}>
                  <CardContent sx={{ flexGrow: 1, p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EmojiObjectsIcon sx={{ color: gold, mr: 1, fontSize: 28 }} />
                      <Typography variant="h6" sx={{ color: '#23272F', fontWeight: 800, fontFamily: 'Montserrat, Roboto, sans-serif' }}>
                        Player Development
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ flexGrow: 1, pl: 3, color: '#23272F', fontSize: 17, fontWeight: 500, fontFamily: 'Montserrat, Roboto, sans-serif', mb: 0 }}>
                      <li>Individual player dashboards</li>
                      <li>Custom hitter development plans</li>
                      <li>Custom pitcher development plans</li>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Hubs */}
        <Route path="/pitching" element={<PitchingHub />} />
        <Route path="/hitting" element={<HittingHub />} />
        <Route path="/player-development" element={<PlayerDevHub />} />

        {/* Pitching */}
        <Route path="/pitching/logs" element={<PitchingLogsPage />} />
        <Route path="/pitching/movement-control" element={<ComparisonPage />} />
        <Route path="/pitching/types" element={<PitchTypeAnalysisPage />} />

        {/* Hitting */}
        <Route path="/hitting/logs" element={<HittingLogsPage />} />
        <Route path="/hitting/performance" element={<HittingPerformancePage />} />
        <Route path="/hitting/batted-ball" element={<HittingBattedBallPage />} />

        {/* Player Dev */}
        <Route path="/player-development/pitchers" element={<PlayerDevPitchersPage />} />
        <Route path="/player-development/hitters" element={<PlayerDevHittersPage />} />
        <Route path="/player-development/comparisons" element={<PlayerComparisonTablePage />} />
        <Route path="/player-comparison-table" element={<PlayerComparisonTablePage />} />
        <Route path="/development-hitters" element={<DevelopmentPageHitters />} />
      </Routes>
    </Router>
  );
}