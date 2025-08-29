import React, { useState } from 'react';
import { safeKey } from '../lib/safeKey';
import { Box, Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemText, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import StarIcon from '@mui/icons-material/Star';
import playerDevData from '../data/logs/playerDevData.js';

export default function DevelopmentPagePitchers() {
  const [selectedPitcher, setSelectedPitcher] = useState(playerDevData[0]?.name || '');
  const pitcher = playerDevData.find(p => p.name === selectedPitcher);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700, mb: 4 }} align="center">
        Player Development Plans – Pitchers
      </Typography>
      <FormControl sx={{ mb: 4, minWidth: 260 }} variant="outlined">
        <InputLabel id="pitcher-select-label" sx={{ color: '#FFD600', bgcolor: '#fff', px: 0.5 }} shrink>
          Select Pitcher
        </InputLabel>
        <Select
          labelId="pitcher-select-label"
          value={selectedPitcher}
          label="Select Pitcher"
          onChange={e => setSelectedPitcher(e.target.value)}
          sx={{ bgcolor: '#fff', borderRadius: 2, fontWeight: 600 }}
        >
          {playerDevData.map(p => (
            <MenuItem value={p.name} key={p.name}>{p.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, mb: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#102542', mb: 1 }}>
                {pitcher?.name} – Player Development Plan
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* Strengths */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1976d2', mb: 1 }}>
                  <CheckCircleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Strengths
                </Typography>
                <List dense>
                  {pitcher?.strengths.map((item, idx) => (
                    <ListItem key={safeKey('strength', pitcher?.name, idx, item)}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>

              {/* Focus Areas */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#e65100', mb: 1 }}>
                  <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Development Focus Areas
                </Typography>
                <List dense>
                  {pitcher?.focusAreas.map((item, idx) => (
                    <ListItem key={safeKey('focus', pitcher?.name, idx, item)}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>

              {/* Drills & Focus Work */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#388e3c', mb: 1 }}>
                  <BuildIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Drills & Focus Work
                </Typography>
                <List dense>
                  {pitcher?.drills.map((item, idx) => (
                    <ListItem key={safeKey('drill', pitcher?.name, idx, item)}><ListItemText primary={item} /></ListItem>
                  ))}
                </List>
              </Box>

              {/* Long-Term Goals */}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#7b1fa2', mb: 1 }}>
                  <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Long-Term Goals
                </Typography>
                <List dense>
                  {pitcher?.longTermGoals.map((item, idx) => (
                    <ListItem key={safeKey('goal', pitcher?.name, idx, item)}><ListItemText primary={item} /></ListItem>
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
