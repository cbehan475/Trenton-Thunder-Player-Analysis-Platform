import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemText, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import StarIcon from '@mui/icons-material/Star';
import playerDevHittersData from '../data/logs/playerDevHittersData.js';

export default function DevelopmentPageHitters() {
  const [selectedHitter, setSelectedHitter] = useState(playerDevHittersData[0]?.name || '');
  const hitter = playerDevHittersData.find(h => h.name === selectedHitter);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700, mb: 4 }} align="center">
        Player Development Plans – Hitters
      </Typography>
      <FormControl sx={{ mb: 4, minWidth: 260 }} variant="outlined">
        <InputLabel id="hitter-select-label" sx={{ color: '#FFD600', bgcolor: '#fff', px: 0.5 }} shrink>
          Select Hitter
        </InputLabel>
        <Select
          labelId="hitter-select-label"
          value={selectedHitter}
          label="Select Hitter"
          onChange={e => setSelectedHitter(e.target.value)}
          sx={{ bgcolor: '#fff', borderRadius: 2, fontWeight: 600 }}
        >
          {playerDevHittersData.map(h => (
            <MenuItem value={h.name} key={h.name}>{h.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, mb: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#102542', mb: 1 }}>
                {hitter?.name} – Player Development Plan
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* Strengths */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1976d2', mb: 1 }}>
                  <CheckCircleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Strengths
                </Typography>
                <List dense>
                  {hitter?.strengths.map((item, idx) => (
                    <ListItem key={idx}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>

              {/* Focus Areas */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#e65100', mb: 1 }}>
                  <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Development Focus Areas
                </Typography>
                <List dense>
                  {hitter?.focusAreas.map((item, idx) => (
                    <ListItem key={idx}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>

              {/* Drills & Focus Work */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#388e3c', mb: 1 }}>
                  <BuildIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Drills & Focus Work
                </Typography>
                <List dense>
                  {hitter?.drills.map((item, idx) => (
                    <ListItem key={idx}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>

              {/* Long-Term Goals */}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#7b1fa2', mb: 1 }}>
                  <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Long-Term Goals
                </Typography>
                <List dense>
                  {hitter?.longTermGoals.map((item, idx) => (
                    <ListItem key={idx}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
