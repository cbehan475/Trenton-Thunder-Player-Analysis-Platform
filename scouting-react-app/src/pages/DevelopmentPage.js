import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BuildIcon from '@mui/icons-material/Build';
import StarIcon from '@mui/icons-material/Star';

export default function DevelopmentPage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 6, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" sx={{ color: '#FFD600', fontWeight: 700, mb: 4 }} align="center">
        Player Development Plans
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8} lg={6}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, mb: 4 }}>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#102542', mb: 1 }}>
                JuJu Stevens – Player Development Plan
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {/* Strengths */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1976d2', mb: 1 }}>
                  <CheckCircleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Strengths
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Handles offspeed pitches well, especially changeups and curveballs. High EV suggests good timing and barrel control." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sinker-heavy pitchers haven’t been able to consistently beat him; he’s showing ability to drive balls low in the zone." />
                  </ListItem>
                </List>
              </Box>

              {/* Focus Areas */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#e65100', mb: 1 }}>
                  <TrendingUpIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Development Focus Areas
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Improve swing decisions and pitch recognition vs. sliders and cutters — lower EVs and inconsistent contact." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Work on attacking elevated fastballs — frequent fouls or weak contact." />
                  </ListItem>
                </List>
              </Box>

              {/* Drills & Focus Work */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#388e3c', mb: 1 }}>
                  <BuildIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Drills & Focus Work
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Slider recognition reps in cage (machine or live arm)." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Fastball ladder drills for attacking up in the zone." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Front toss focusing on cutters in — work on staying inside and driving to gaps." />
                  </ListItem>
                </List>
              </Box>

              {/* Long-Term Goals */}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#7b1fa2', mb: 1 }}>
                  <StarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />Long-Term Goals
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Turn offspeed contact into more extra-base hits." />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Increase damage on breaking balls — make harder, more consistent contact." />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

