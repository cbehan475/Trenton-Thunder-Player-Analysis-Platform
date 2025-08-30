import React, { useMemo, useState, useCallback } from 'react';
import { Box, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Snackbar, FormControl, InputLabel, Select, MenuItem, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PitchersTable from '../components/PitchersTable';
import { getPid } from '../components/PitchersTable';
import pitcherArsenals from '../data/pitcherArsenals';
import ALL_PITCH_EVENTS from '../data/logs/pitchingIndex.js';
import { getCache, getLatestOuting } from '../lib/reviewCache.js';

export default function ArsenalsPage() {
  const navigate = useNavigate();
  const [openBatchFix, setOpenBatchFix] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'info' });
  const [selectedPlayerId, setSelectedPlayerId] = useState('');

  // using shared getPid from PitchersTable


  // Merge review cache telemetry into displayed status per precedence
  // Build rows from the new JSON only (single source of truth)
  const baseArsenals = useMemo(() => {
    return (Array.isArray(pitcherArsenals) ? pitcherArsenals : []).map((p) => ({
      playerId: p.playerId,
      name: p.name,
      bt: p.handedness ? `-/${p.handedness}` : null,
      pitches: Array.isArray(p.arsenal) ? p.arsenal : [],
    }));
  }, []);

  const rowsForDisplay = useMemo(() => {
    const cache = getCache();
    const out = [];
    for (const row of baseArsenals) {
      const latest = getLatestOuting(row?.playerId);
      let status = row?.status || null;
      let note = row?.statusNote || '';
      if (latest) {
        const needs = (latest.disagreePct >= 25) || (latest.notes||[]).some(n => /^CT present/i.test(n));
        const verify = (latest.disagreePct >= 10) || (latest.notes||[]).some(n => /SW vs SL/i.test(n));
        if (row?.status === 'VERIFIED') {
          if (needs) { status = 'NEEDS REVIEW'; }
        } else if (needs) {
          status = 'NEEDS REVIEW';
        } else if (verify) {
          status = 'VERIFY';
        }
        // Tooltip-style note: "M/D: <dominant note or 'disagree'> <pct>%"
        const d = new Date(latest.date);
        const md = isNaN(d) ? latest.date : `${d.getMonth()+1}/${d.getDate()}`;
        const pct = (latest.disagreePct != null) ? `${latest.disagreePct}%` : '';
        const hint = latest.notes && latest.notes.length ? latest.notes[0] : 'disagree';
        note = `${md}: ${hint}${pct ? ` ${pct}` : ''}`;
      }
      out.push({ ...row, status, statusNote: note });
    }
    return out;
  }, [baseArsenals]);

  const handleRowDoubleClick = useCallback((paramsOrRow) => {
    // Support both MUI DataGrid params and plain row objects
    const row = paramsOrRow?.row ?? paramsOrRow;
    const pid = row?.pid || getPid(row, row?._i ?? 0);
    if (!pid || String(pid).startsWith('row-')) return;
    navigate(`/pitching/reports?pid=${encodeURIComponent(pid)}`);
  }, [navigate]);

  const navy = '#0B1220';
  const gold = '#FFB300';

  // Single-tab page now; proposals removed.

  // Find selected pitcher from new JSON by playerId (string-compare for safety)
  const selectedPitcher = useMemo(() => {
    if (!selectedPlayerId) return null;
    return pitcherArsenals.find((p) => String(p.playerId) === String(selectedPlayerId)) || null;
  }, [selectedPlayerId]);

  // Build maps for ALL pitchers: statsByCodeAll, usageByCodeAll, gradesByCodeAll
  const { statsByCodeAll, usageByCodeAll, gradesByCodeAll } = useMemo(() => {
    const nameToPid = new Map();
    for (const r of Array.isArray(pitcherArsenals) ? pitcherArsenals : []) {
      if (r?.name && r?.playerId != null) nameToPid.set(String(r.name), String(r.playerId));
    }
    const norm = (input) => {
      if (!input) return 'OTH';
      const raw = String(input).trim().toLowerCase();
      const al = [
        { keys: ['ff','four-seam','four seam','fourseam','4-seam','4 seam','fastball','fb'], out: 'FF' },
        { keys: ['si','sinker','two-seam','two seam','2-seam','2 seam','2seam','ft'], out: 'SI' },
        { keys: ['ct','cutter','cut','fc'], out: 'CT' },
        { keys: ['sl','slider'], out: 'SL' },
        { keys: ['sw','sweeper','sl-sweeper','sl sweeper','sweeping slider','swp'], out: 'SW' },
        { keys: ['cb','curve','curveball','knuckle-curve','knuckle curve','kc'], out: 'CB' },
        { keys: ['ch','change','changeup'], out: 'CH' },
        { keys: ['spl','splitter','split','fs','forkball'], out: 'SPL' },
      ];
      for (const m of al) if (m.keys.includes(raw)) return m.out;
      const key = raw
        .replace(/[_\s-]+/g, '')
        .replace('fourseam','ff').replace('twoseam','si').replace('sinker','si')
        .replace('cutter','ct').replace('fc','ct').replace('slider','sl').replace('sweeper','sw')
        .replace('curveball','cb').replace('curve','cb').replace('changeup','ch')
        .replace('splitter','spl').replace('forkball','spl');
      if (key.startsWith('ff')) return 'FF';
      if (key.startsWith('si')) return 'SI';
      if (key.startsWith('ct')) return 'CT';
      if (key.startsWith('sl') && !key.startsWith('spl')) return 'SL';
      if (key.startsWith('sw')) return 'SW';
      if (key.startsWith('cb') || key.startsWith('kc')) return 'CB';
      if (key.startsWith('ch')) return 'CH';
      if (key.startsWith('spl') || key.startsWith('fs')) return 'SPL';
      return 'OTH';
    };

    // Aggregate sums by playerId and code
    const sums = new Map(); // pid -> code -> { n, sv, si, sh, ss }
    const totals = new Map(); // pid -> total n
    for (const e of (Array.isArray(ALL_PITCH_EVENTS) ? ALL_PITCH_EVENTS : [])) {
      const name = e?.pitcher ? String(e.pitcher) : '';
      const pid = nameToPid.get(name);
      if (!pid) continue;
      const code = norm(e?.pitchType || e?.type || e?.pitch || e?.pitch_name || e?.pitchClass || null);
      if (!code || code === 'OTH') continue;
      const velo = Number(e?.velo ?? e?.velocity ?? e?.v ?? e?.speed);
      const ivb  = Number(e?.ivb ?? e?.vert ?? e?.rise);
      const hb   = Number(e?.hb ?? e?.horz ?? e?.run);
      const spin = Number(e?.spin ?? e?.rpm);
      if (!sums.has(pid)) sums.set(pid, new Map());
      const m = sums.get(pid);
      if (!m.has(code)) m.set(code, { n: 0, sv: 0, si: 0, sh: 0, ss: 0 });
      const a = m.get(code);
      a.n += 1;
      if (Number.isFinite(velo)) a.sv += velo;
      if (Number.isFinite(ivb)) a.si += ivb;
      if (Number.isFinite(hb)) a.sh += hb;
      if (Number.isFinite(spin)) a.ss += spin;
      totals.set(pid, (totals.get(pid) || 0) + 1);
    }

    // Produce per-player stats with averages and usage%
    const statsByCodeAll = Object.create(null);
    const usageByCodeAll = Object.create(null);
    for (const [pid, codesMap] of sums) {
      const total = totals.get(pid) || 0;
      if (!total) continue;
      const stats = Object.create(null);
      const usage = Object.create(null);
      for (const [code, a] of codesMap) {
        const n = a.n || 1;
        stats[code] = {
          n,
          avgVelo: a.sv / n,
          avgIVB: a.si / n,
          avgHB: a.sh / n,
          avgSpin: a.ss / n,
          usagePct: Number(((n / total) * 100).toFixed(1)),
        };
        usage[code] = stats[code].usagePct;
      }
      statsByCodeAll[pid] = stats;
      usageByCodeAll[pid] = usage;
    }

    // Grades per player based on averages
    function roundTo5(x) { return Math.max(20, Math.min(80, Math.round(x / 5) * 5)); }
    function baseGradeFF(v) {
      if (v >= 98) return 80; if (v >= 96) return 70; if (v >= 94) return 60; if (v >= 92) return 50; if (v >= 90) return 40; return 30;
    }
    function gradePitch(pitchType, avgVelo, avgIVB, avgHB, avgSpin, ffV) {
      const t = pitchType;
      if (t === 'FF') {
        let g = baseGradeFF(avgVelo);
        if (Number.isFinite(avgIVB)) { if (avgIVB >= 17) g += 5; else if (avgIVB <= 12) g -= 5; }
        return roundTo5(g);
      }
      if (t === 'SI') {
        let g = 30;
        const hbMag = Number.isFinite(avgHB) ? Math.abs(avgHB) : -Infinity;
        if (hbMag >= 17) g = 70; else if (hbMag >= 14) g = 60; else if (hbMag >= 11) g = 50; else if (hbMag >= 8) g = 40; else g = 30;
        if ((Number.isFinite(avgIVB) && avgIVB <= 10) || (Number.isFinite(avgVelo) && avgVelo >= 94)) g += 5;
        return roundTo5(g);
      }
      if (t === 'CT') {
        let g = 50;
        const gap = (Number.isFinite(ffV) && Number.isFinite(avgVelo)) ? (ffV - avgVelo) : NaN;
        const hbAbs = Number.isFinite(avgHB) ? Math.abs(avgHB) : NaN;
        if (Number.isFinite(gap) && gap >= 2 && gap <= 4 && (Number.isFinite(hbAbs) ? hbAbs <= 5 : true)) g = 60;
        if ((Number.isFinite(avgVelo) && avgVelo >= 92) || (Number.isFinite(avgIVB) && avgIVB >= 8 && avgIVB <= 12)) g += 5;
        return roundTo5(g);
      }
      if (t === 'SL') {
        const sweep = Number.isFinite(avgHB) ? Math.abs(avgHB) : -Infinity;
        let g = 45;
        if (sweep >= 10) g = 60; else if (sweep >= 7) g = 55; else if (sweep >= 4) g = 50; else g = 45;
        if ((Number.isFinite(avgSpin) && avgSpin >= 2400) || (Number.isFinite(avgIVB) && avgIVB >= 0 && avgIVB <= 5)) g += 5;
        return roundTo5(g);
      }
      if (t === 'SW') {
        const sweep = Number.isFinite(avgHB) ? Math.abs(avgHB) : -Infinity;
        let g = 45;
        if (sweep >= 14) g = 70; else if (sweep >= 11) g = 60; else if (sweep >= 8) g = 55; else if (sweep >= 6) g = 50; else g = 45;
        if ((Number.isFinite(avgSpin) && avgSpin >= 2400) && (Number.isFinite(avgIVB) && avgIVB <= 3)) g += 5;
        return roundTo5(g);
      }
      if (t === 'CH') {
        let g = 50;
        if (Number.isFinite(avgHB) && avgHB >= 12) g += 5;
        const sep = Number.isFinite(ffV) && Number.isFinite(avgVelo) ? (ffV - avgVelo) : NaN;
        if (Number.isFinite(sep) && sep >= 8 && sep <= 12) g += 5;
        if (Number.isFinite(avgIVB) && avgIVB <= 8) g += 5;
        return Math.min(70, roundTo5(g));
      }
      if (t === 'CB') {
        const ivb = Number.isFinite(avgIVB) ? avgIVB : Infinity;
        let g = 45;
        if (ivb <= -10) g = 60; else if (ivb <= -6) g = 55; else if (ivb <= -3) g = 50; else g = 45;
        if (Number.isFinite(avgSpin) && avgSpin >= 2600) g += 5;
        return roundTo5(g);
      }
      return 50;
    }

    const gradesByCodeAll = Object.create(null);
    for (const [pid, stats] of Object.entries(statsByCodeAll)) {
      let ffAvgVelo = null;
      let fastest = { code: null, avgV: -Infinity };
      for (const [code, v] of Object.entries(stats)) {
        const avgV = v.avgVelo;
        if (code === 'FF') ffAvgVelo = avgV;
        if (Number.isFinite(avgV) && avgV > fastest.avgV) fastest = { code, avgV };
      }
      if (!Number.isFinite(ffAvgVelo)) ffAvgVelo = fastest.avgV;
      const grades = Object.create(null);
      for (const [code, v] of Object.entries(stats)) {
        const g = gradePitch(code, v.avgVelo, v.avgIVB, v.avgHB, v.avgSpin, ffAvgVelo);
        if (Number.isFinite(g)) grades[code] = g;
      }
      gradesByCodeAll[pid] = grades;
    }

    return { statsByCodeAll, usageByCodeAll, gradesByCodeAll };
  }, []);

  // Proposals-related actions removed.

  return (
    <div>
      <Box sx={{
        background: navy,
        color: '#E9EEFF',
        py: 1,
        borderBottom: '3px solid ' + gold,
        mb: 2,
      }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography component="h1" sx={{ fontSize: 22, fontWeight: 800 }}>Pitcher Arsenals</Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" size="small" onClick={()=>setOpenBatchFix(true)} sx={{ textTransform: 'none', color:'#E9EEFF', borderColor:'rgba(233,238,255,0.35)' }}>
              Batch Fix
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
          <>
            <Box sx={{ display:'flex', gap:2, alignItems:'center', mb: 2 }}>
              <FormControl size="small" sx={{ minWidth: 260 }}>
                <InputLabel id="arsenal-pitcher-label">Select Pitcher</InputLabel>
                <Select
                  labelId="arsenal-pitcher-label"
                  label="Select Pitcher"
                  value={selectedPlayerId}
                  onChange={(e)=>setSelectedPlayerId(e.target.value)}
                >
                  {pitcherArsenals
                    .slice()
                    .sort((a,b)=>String(a.name).localeCompare(String(b.name)))
                    .map(p => (
                      <MenuItem key={p.playerId} value={String(p.playerId)}>
                        {p.name} ({p.handedness})
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>

            {selectedPitcher && (
              <Box sx={{ p:2, mb:2, bgcolor:'#fff', borderRadius:2, border:'1px solid rgba(0,0,0,0.06)' }}>
                <Typography variant="h6" sx={{ fontWeight:800, mb:1 }}>
                  {selectedPitcher.name} ({selectedPitcher.handedness})
                </Typography>
                <ul style={{ margin:0, paddingLeft: '1.25rem' }}>
                  {selectedPitcher.arsenal.map((pitch, idx) => (
                    <li key={idx}>{pitch}</li>
                  ))}
                </ul>
              </Box>
            )}

            {!rowsForDisplay.length ? (
              <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, textAlign: 'center', color: '#6b7280' }}>
                No arsenals loaded yet.
              </Box>
            ) : (
              <PitchersTable
                mode="arsenals"
                arsenals={rowsForDisplay}
                onRowDoubleClick={handleRowDoubleClick}
                usageByCode={usageByCodeAll}
                gradesByCode={gradesByCodeAll}
                statsByCode={statsByCodeAll}
                selectedPlayerId={selectedPlayerId}
              />
            )}
          </>

        
      </Container>

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={()=>setSnack(s=>({ ...s, open:false }))} message={snack.message} />

      <Dialog open={openBatchFix} onClose={()=>setOpenBatchFix(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Batch Fix (Coming soon)</DialogTitle>
        <DialogContent>
          <Typography sx={{ color:'#6b7280', mb: 2 }}>
            This feature will let you normalize/merge pitch labels across rows.
          </Typography>
          <Box sx={{ display:'flex', flexDirection:'column', gap: 1.5 }}>
            <Button variant="outlined" disabled>Remap 2-Seam → SI</Button>
            <Button variant="outlined" disabled>Merge SL/SW → SW</Button>
            <Button variant="outlined" disabled>Normalize FF/FT → FF</Button>
            <Button variant="outlined" disabled>Collapse misc. → OTH</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenBatchFix(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
