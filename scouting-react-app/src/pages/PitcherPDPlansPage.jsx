import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Divider, Grid, Card, CardContent, TextField,
  MenuItem, Button, LinearProgress, Chip, Stack, Paper
} from '@mui/material';
import { summarizeUsageAndShape, listPitchers, summarizeCommandAndMiss } from '../utils/pitchingLogsAdapter';

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

function useQueryParamName() {
  // minimal query param read/write without new deps
  const get = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('name') || '';
  };
  const set = (name) => {
    const params = new URLSearchParams(window.location.search);
    if (name) params.set('name', name);
    else params.delete('name');
    const url = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', url);
  };
  return { get, set };
}

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
  const qp = useQueryParamName();
  const [allPitchers, setAllPitchers] = useState([]);
  const [pitcher, setPitcher] = useState(qp.get() || "Jude Abbadessa");
  const [agg, setAgg] = useState({ usage: [], ivbHb: [], totalPitches: 0, hasData: false, loading: true });
  const [cmd, setCmd] = useState({ gridPct: [[0,0,0],[0,0,0],[0,0,0]], miss: {up:0,down:0,glove:0,arm:0,sample:0}, hasData:false, inGrid:0, loading:true });
  const data = usePDData(pitcher);

  useEffect(() => {
    // Populate pitcher list from logs
    try {
      const names = listPitchers();
      setAllPitchers(names);
      // If URL name is present but not in list (case mismatch), try to find closest match
      const fromUrl = qp.get();
      if (fromUrl && names.length) {
        const exact = names.find(n => n.toLowerCase() === fromUrl.toLowerCase());
        if (exact && exact !== pitcher) setPitcher(exact);
      }
    } catch (e) {
      console.error('Failed to list pitchers', e);
      setAllPitchers([]);
    }
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (pitcher) {
      qp.set(pitcher);
      try {
        setAgg(a => ({ ...a, loading: true }));
        const s = summarizeUsageAndShape(pitcher) || { usage: [], ivbHb: [], totalPitches: 0, hasData: false };
        setAgg({ ...s, loading: false });
        setCmd(c => ({ ...c, loading: true }));
        const csum = summarizeCommandAndMiss(pitcher) || { gridPct: [[0,0,0],[0,0,0],[0,0,0]], miss:{up:0,down:0,glove:0,arm:0,sample:0}, hasData:false, inGrid:0 };
        setCmd({ ...csum, loading: false });
      } catch (e) {
        console.error('Failed to summarize logs:', e);
        setAgg({ usage: [], ivbHb: [], totalPitches: 0, hasData: false, loading: false });
        setCmd({ gridPct: [[0,0,0],[0,0,0],[0,0,0]], miss:{up:0,down:0,glove:0,arm:0,sample:0}, hasData:false, inGrid:0, loading:false });
      }
    } else {
      setAgg({ usage: [], ivbHb: [], totalPitches: 0, hasData: false, loading: false });
      setCmd({ gridPct: [[0,0,0],[0,0,0],[0,0,0]], miss:{up:0,down:0,glove:0,arm:0,sample:0}, hasData:false, inGrid:0, loading:false });
    }
  }, [pitcher]);

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
            {allPitchers.length === 0 && <MenuItem value={pitcher}>{pitcher}</MenuItem>}
            {allPitchers.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
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
        {agg.loading ? (
          <Typography variant="body2">Loading pitcher summaries…</Typography>
        ) : agg.hasData ? (
          <Grid container spacing={2}>
            {agg.ivbHb.slice(0,3).map((row) => (
              <Grid item xs={12} sm={4} key={row.pitch}>
                <StatTile label={`${row.pitch} IVB/HB`} value={`${row.ivb}" / ${row.hb}"`} sub={`${agg.totalPitches} pitches`} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2">No logs found yet for this pitcher.</Typography>
        )}
      </Section>

      {/* Usage bars */}
      <Section title="Usage by Pitch (visual)">
        {agg.loading ? (
          <Typography variant="body2">Calculating usage…</Typography>
        ) : agg.hasData ? (
          <Grid container spacing={2}>
            {agg.usage.map((u) => (
              <Grid item xs={12} key={u.pitch}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Chip label={u.pitch} />
                  <Box sx={{ flex: 1 }}>
                    <LinearProgress variant="determinate" value={Math.max(0, Math.min(100, u.pct))} />
                  </Box>
                  <Typography variant="body2" sx={{ width: 48, textAlign: 'right' }}>{u.pct}%</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2">No usage yet — select a pitcher with logged pitches.</Typography>
        )}
      </Section>

      {/* Command & miss pattern: 3x3 grid + miss chips */}
      <Section title="Command & Miss Pattern">
        {cmd.loading ? (
          <Typography variant="body2">Building zone map…</Typography>
        ) : cmd.hasData ? (
          <>
            <Grid container spacing={1} sx={{ mb: 1 }}>
              {cmd.gridPct.map((row, rIdx) => (
                <Grid item xs={12} key={rIdx}>
                  <Grid container spacing={1}>
                    {row.map((val, cIdx) => (
                      <Grid item xs={4} key={cIdx}>
                        <Paper sx={{ p: 1.5, textAlign: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>{val}%</Typography>
                          <Typography variant="caption" sx={{ opacity: 0.7 }}>zone {rIdx*3 + cIdx + 1}</Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
              <Chip label={`Up ${cmd.miss.up}%`} />
              <Chip label={`Down ${cmd.miss.down}%`} />
              <Chip label={`Glove ${cmd.miss.glove}%`} />
              <Chip label={`Arm ${cmd.miss.arm}%`} />
              <Chip label={`Samples ${cmd.miss.sample}`} variant="outlined" />
            </Stack>
            <Typography variant="caption" sx={{ mt: 1, display: 'block', opacity: 0.7 }}>
              Note: Arm/Glove estimated via horizontal sign; improves with handedness.
            </Typography>
          </>
        ) : (
          <Typography variant="body2">No location/zone data found for this pitcher yet.</Typography>
        )}
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
