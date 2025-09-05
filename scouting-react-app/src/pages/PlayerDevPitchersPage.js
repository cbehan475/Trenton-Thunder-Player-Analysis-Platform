import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Stack,
} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import AppSelect from '../components/ui/AppSelect.jsx';

export default function PlayerDevPitchersPage() {
  const [selectedPitcher, setSelectedPitcher] = React.useState('');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <BoltIcon sx={{ color: '#F1C83B', fontSize: 36 }} />
          <Typography variant="h4" sx={{ color: '#F1C83B', fontWeight: 800 }}>
            Player Development Plans – Pitchers
          </Typography>
        </Stack>

        {/* Overview blurb */}
        <Typography variant="body1" sx={{ color: '#E6EDF7', mb: 3 }}>
          Use this page to view custom development plans for pitchers.
        </Typography>

        {/* Pitcher selector */}
        <Box sx={{ maxWidth: 420, mb: 4 }}>
          <AppSelect
            value={selectedPitcher}
            onChange={(e) => setSelectedPitcher(e.target.value)}
            options={[]}
            fullWidth
            placeholder="Select Pitcher"
            size="medium"
          />
        </Box>

        <Grid container spacing={3}>
          {/* Notes from Coordinator */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>
              <CardContent>
                <Typography variant="overline" sx={{ color: '#F1C83B', fontWeight: 800 }}>
                  Notes from Coordinator
                </Typography>
                <Typography variant="body2" sx={{ color: '#E6EDF7', mt: 1 }}>
                  Custom notes from pitching coordinator go here
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Current Focus Areas */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>
              <CardContent>
                <Typography variant="overline" sx={{ color: '#F1C83B', fontWeight: 800 }}>
                  Current Focus Areas
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3, color: '#E6EDF7', '& li': { mb: 0.5 } }}>
                  <li>Command</li>
                  <li>Pitch design</li>
                  <li>Workload management</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Individual Plans */}
          <Grid item xs={12}>
            <Card sx={{ bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>
              <CardContent>
                <Typography variant="overline" sx={{ color: '#F1C83B', fontWeight: 800 }}>
                  Individual Plans
                </Typography>
                <Typography variant="body2" sx={{ color: '#9FB3CE', mb: 2 }}>
                  Dynamic cards/tables per pitcher will render here.
                </Typography>
                <Grid container spacing={2}>
                  {[1, 2, 3].map((k) => (
                    <Grid item xs={12} md={4} key={k}>
                      <Box
                        sx={{
                          border: '1px dashed rgba(255,255,255,0.2)',
                          borderRadius: 1,
                          p: 2,
                          color: '#E6EDF7',
                        }}
                      >
                        <Typography variant="subtitle2" sx={{ mb: 1, color: '#E6EDF7' }}>
                          Plan Card Placeholder #{k}
                        </Typography>
                        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)', mb: 1 }} />
                        <Box component="ul" sx={{ pl: 3, m: 0 }}>
                          <li>Command</li>
                          <li>Pitch Design</li>
                          <li>Workload</li>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Benchmarks */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>
              <CardContent>
                <Typography variant="overline" sx={{ color: '#F1C83B', fontWeight: 800 }}>
                  Benchmarks
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3, color: '#E6EDF7', '& li': { mb: 0.5 } }}>
                  <li>Fastball zone % &gt; 60%</li>
                  <li>Slider usage % &gt; 20%</li>
                  <li>Avg FB velo. 94–96 mph</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Notes / Goals */}
          <Grid item xs={12} md={6}>
            <Card sx={{ bgcolor: 'transparent', border: '1px solid rgba(255,255,255,0.12)' }}>
              <CardContent>
                <Typography variant="overline" sx={{ color: '#F1C83B', fontWeight: 800 }}>
                  Goals
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3, color: '#E6EDF7', '& li': { mb: 0.5 } }}>
                  <li>Improve fastball command</li>
                  <li>Refine offspeed usage</li>
                  <li>Increase fastball velocity</li>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
