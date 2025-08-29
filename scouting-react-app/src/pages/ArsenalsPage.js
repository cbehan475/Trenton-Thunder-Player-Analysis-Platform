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

  // Usage% is computed from logs keyed by pitcherId; source of truth for arsenal is src/data/pitcherArsenals.json
  const usageByCode = useMemo(() => {
    const pid = String(selectedPlayerId || '');
    if (!pid) return null;
    // Build name -> playerId map from source-of-truth JSON
    const nameToPid = new Map();
    for (const r of Array.isArray(pitcherArsenals) ? pitcherArsenals : []) {
      if (r?.name && r?.playerId != null) nameToPid.set(String(r.name), String(r.playerId));
    }
    // Local lightweight normalizer to MLB-like short codes
    const norm = (input) => {
      if (!input) return 'OTH';
      const raw = String(input).trim().toLowerCase();
      const al = [
        { keys: ['ff','four-seam','four seam','fourseam','4-seam','4 seam','fastball','fb'], out: 'FF' },
        { keys: ['si','sinker','two-seam','two seam','2-seam','2 seam','2seam','ft'], out: 'SI' },
        { keys: ['ct','cutter','cut'], out: 'CT' },
        { keys: ['sl','slider'], out: 'SL' },
        { keys: ['sw','sweeper','sl-sweeper','sl sweeper','sweeping slider'], out: 'SW' },
        { keys: ['cb','curve','curveball','knuckle-curve','knuckle curve','kc'], out: 'CB' },
        { keys: ['ch','change','changeup'], out: 'CH' },
        { keys: ['spl','splitter','split','fs','forkball'], out: 'SPL' },
      ];
      for (const m of al) if (m.keys.includes(raw)) return m.out;
      const key = raw
        .replace(/[_\s-]+/g, '')
        .replace('fourseam','ff').replace('twoseam','si').replace('sinker','si')
        .replace('cutter','ct').replace('slider','sl').replace('sweeper','sw')
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
    // Filter logs to those mapping to this pitcherId
    const rows = (Array.isArray(ALL_PITCH_EVENTS) ? ALL_PITCH_EVENTS : []).filter((e) => {
      const name = e?.pitcher ? String(e.pitcher) : '';
      const mapped = name ? nameToPid.get(name) : undefined;
      return mapped && String(mapped) === pid;
    });
    if (!rows.length) return null;
    const counts = new Map();
    let total = 0;
    for (const e of rows) {
      const type = e?.pitchType || e?.type || e?.pitch || e?.pitch_name || e?.pitchClass || null;
      const code = norm(type);
      if (!code || code === 'OTH') { continue; }
      counts.set(code, (counts.get(code) || 0) + 1);
      total += 1;
    }
    if (!total) return null;
    const out = Object.create(null);
    for (const [code, n] of counts.entries()) {
      out[code] = Number(((n / total) * 100).toFixed(1));
    }
    return out;
  }, [selectedPlayerId]);

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
              <PitchersTable mode="arsenals" arsenals={rowsForDisplay} onRowDoubleClick={handleRowDoubleClick} usageByCode={usageByCode} selectedPlayerId={selectedPlayerId} />
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
