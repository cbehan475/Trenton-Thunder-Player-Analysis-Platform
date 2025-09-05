import React, { useMemo, useState } from 'react';
import {
  Box, Typography, Divider, Grid, Card, CardContent, TextField,
  MenuItem, Button, LinearProgress, Chip, Stack, Paper
} from '@mui/material';

/**
 * Data adapter:
 * - Tries to read your existing JSON shape later.
 * - For now returns safe mock so page renders without breaking.
 * - Replace TODOs to hook into your real logs (pitcher + date range).
 */
function usePDData(pitcher) {
  // TODO: read from your JSON once we wire it up
  const mock = {
    usage: [
      { pitch: 'FB', pct: 45 },
      { pitch: 'SL/SW', pct: 25 },
      { pitch: 'CH', pct: 15 },
      { pitch: 'SNK', pct: 10 },
      { pitch: 'CUT', pct: 5 },
    ],
    ivbHb: [
      { pitch: 'FB', ivb: 16, hb: -6 },
      { pitch: 'SL/SW', ivb: 2, hb: -14 },
      { pitch: 'CH', ivb: 8, hb: -15 },
      { pitch: 'SNK', ivb: 9, hb: 14 },
      { pitch: 'CUT', ivb: 12, hb: -2 },
    ],
    commandNotes: [
      { label: 'Glove Up', val: 18 },
      { label: 'Glove Down', val: 12 },
      { label: 'Arm Up', val: 22 },
      { label: 'Arm Down', val: 14 },
      { label: 'Middle', val: 34 },
    ],
    interventions: [
      'Hard in vs RHH; expand soft away late.',
      'Target 1–2" more HB on SNK via seam cue.',
      'Edge% goal 60%+ on breaker; reduce waste misses.',
    ],
    weekly: [
      { day: 'Mon', focus: 'Recovery + movement screen' },
      { day: 'Tue', focus: 'Plyo + FB carry (ramp to 80%)' },
      { day: 'Wed', focus: 'Bullpen: FB in, CH away, SW edge% ' },
      { day: 'Thu', focus: 'Light catch + feel for shapes' },
      { day: 'Fri', focus: 'Pre-start tune: 10–12 pitches' },
      { day: 'Sat', focus: 'Start day' },
      { day: 'Sun', focus: 'Recovery' },
    ],
    progress: [
      { date: '2025-08-01', note: 'Added CH depth; better arm speed' },
      { date: '2025-08-05', note: 'Sweeper edge% up to 58%' },
      { date: '2025-08-10', note: 'SNK HB +1.5"; GB% up' },
    ],
  };
  return mock;
}

const mockPitchers = ["Select a pitcher", "Jude Abbadessa", "Dosie Drakeford", "Isaac Fix"];

function Section({ title, children }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{title}</Typography>
        <Divider sx={{ mb: 2 }} />
        {children}
      </CardContent>
    </Card>
  );
}

function StatTile({ label, value, sub }) {
  return (
    <Paper elevation={1} sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>{value}</Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>{label}</Typography>
      {sub && <Typography variant="caption" sx={{ opacity: 0.7 }}>{sub}</Typography>}
    </Paper>
  );
}

export default function PitcherPDPlansPage() {
  const [pitcher, setPitcher] = useState(mockPitchers[0]);
  const data = usePDData(pitcher);

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      {/* Header */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>Pitcher Player Development Plans</Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Visual scaffold — safe by default. We’ll wire to your JSON next.
        </Typography>
      </Box>

      {/* Controls */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField select fullWidth label="Pitcher" value={pitcher}
            onChange={(e) => setPitcher(e.target.value)}>
            {mockPitchers.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <TextField type="date" fullWidth label="Start" InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <TextField type="date" fullWidth label="End" InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12} sm="auto">
          <Button variant="contained">Load</Button>
        </Grid>
      </Grid>

      {/* Overview tiles: quick banding */}
      <Section title="Overview Snapshot">
        <Grid container spacing={2}>
          {data.ivbHb.slice(0,3).map((row) => (
            <Grid item xs={12} sm={4} key={row.pitch}>
              <StatTile label={`${row.pitch} IVB/HB`} value={`${row.ivb}" / ${row.hb}"`} sub="approx bands" />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Usage bars */}
      <Section title="Usage by Pitch (visual)">
        <Grid container spacing={2}>
          {data.usage.map((u) => (
            <Grid item xs={12} key={u.pitch}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Chip label={u.pitch} />
                <Box sx={{ flex: 1 }}>
                  <LinearProgress variant="determinate" value={Math.max(0, Math.min(100, u.pct))} />
                </Box>
                <Typography variant="body2" sx={{ width: 40, textAlign: 'right' }}>{u.pct}%</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Command & miss pattern: simple 3x3 style grid */}
      <Section title="Command & Miss Pattern">
        <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
          Heuristic view of typical misses (to be replaced with game log zones).
        </Typography>
        <Grid container spacing={1}>
          {data.commandNotes.map((c) => (
            <Grid item xs={6} sm={4} md={2.4} key={c.label}>
              <Paper sx={{ p: 1.5, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>{c.label}</Typography>
                <Typography variant="body2">{c.val}%</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Intervention plan */}
      <Section title="Intervention Plan">
        <ul style={{ marginTop: 0 }}>
          {data.interventions.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </Section>

      {/* Weekly plan */}
      <Section title="Weekly Plan">
        <Grid container spacing={1}>
          {data.weekly.map((d) => (
            <Grid item xs={12} sm={6} md={3} key={d.day}>
              <Paper sx={{ p: 1.5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{d.day}</Typography>
                </Stack>
                <Typography variant="body2">{d.focus}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Progress log */}
      <Section title="Progress Log">
        <Stack spacing={1}>
          {data.progress.map((p, i) => (
            <Paper sx={{ p: 1.25 }} key={i}>
              <Typography variant="body2"><b>{p.date}:</b> {p.note}</Typography>
            </Paper>
          ))}
        </Stack>
      </Section>
    </Box>
  );
}
