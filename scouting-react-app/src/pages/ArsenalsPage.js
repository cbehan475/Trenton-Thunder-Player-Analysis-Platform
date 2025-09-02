import React, { useMemo, useState, useCallback } from 'react';
import { Box, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Snackbar, FormControl, InputLabel, Select, MenuItem, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PitchersTable from '../components/PitchersTable';
import { getPid } from '../components/PitchersTable';
import pitcherArsenals from '../data/pitcherArsenals';
import ALL_PITCH_EVENTS from '../data/logs/pitchingIndex.js';
import { summarizePitchType, normalizeCode } from '../utils/pitchAggregates.js';
import { getMergedArsenalForPitcher } from '../utils/arsenalMerge.js';
import { slugifyId } from '../lib/scoutingReportsStore.js';
import { getCache, getLatestOuting } from '../lib/reviewCache.js';

export default function ArsenalsPage() {
  const navigate = useNavigate();
  const [openBatchFix, setOpenBatchFix] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'info' });
  const [selectedPlayerId, setSelectedPlayerId] = useState('');

  // using shared getPid from PitchersTable


  // Build overrides map once at module/component scope
  const OVERRIDES_MAP = useMemo(() => {
    try {
      return Object.fromEntries(
        (Array.isArray(pitcherArsenals) ? pitcherArsenals : []).map((p) => [
          String(p.playerId ?? slugifyId(p.name)),
          Array.isArray(p.arsenal) ? p.arsenal : [],
        ])
      );
    } catch {
      return {};
    }
  }, []);

  // Merge review cache telemetry into displayed status per precedence
  // Base rows from JSON; merged pitches and needsReview injected below
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
    // Simple log version for memoization: total entries length
    const logVersion = Array.isArray(ALL_PITCH_EVENTS) ? ALL_PITCH_EVENTS.length : 0;
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
      // Compute merged arsenal (logs-first with overrides); preserve override order
      const pid = String(row.playerId);
      const merged = getMergedArsenalForPitcher(pid, ALL_PITCH_EVENTS, OVERRIDES_MAP);
      out.push({
        ...row,
        // Use merged pitches (already normalized codes or normalized via util)
        pitches: merged?.pitches || [],
        needsReview: !!merged?.needsReview,
        mergedDetails: merged?.details || null,
        mergedPitches: Array.isArray(merged?.pitches) ? merged.pitches : [],
        overridePitches: Array.isArray(OVERRIDES_MAP[pid]) ? OVERRIDES_MAP[pid] : [],
        status,
        statusNote: note,
        _logVersion: logVersion,
      });
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

  // Build maps for ALL pitchers using shared utils: statsByCodeAll, usageByCodeAll, gradesByCodeAll
  const { statsByCodeAll, usageByCodeAll, gradesByCodeAll } = useMemo(() => {
    const nameToPid = new Map();
    for (const r of (Array.isArray(pitcherArsenals) ? pitcherArsenals : [])) {
      if (r?.name && r?.playerId != null) nameToPid.set(String(r.name), String(r.playerId));
    }
    const statsByCodeAll = Object.create(null);
    const usageByCodeAll = Object.create(null);
    const gradesByCodeAll = Object.create(null);

    // Group pitch events by pitcher name for quick filtering
    const pitchesByName = new Map();
    for (const e of (Array.isArray(ALL_PITCH_EVENTS) ? ALL_PITCH_EVENTS : [])) {
      const name = e?.pitcher ? String(e.pitcher) : '';
      if (!name) continue;
      if (!pitchesByName.has(name)) pitchesByName.set(name, []);
      pitchesByName.get(name).push(e);
    }

    for (const p of (Array.isArray(pitcherArsenals) ? pitcherArsenals : [])) {
      const pid = String(p.playerId);
      const name = String(p.name);
      const declared = (p.arsenal || []).map(normalizeCode).filter(c => c && c !== 'OTH');
      const pitches = pitchesByName.get(name) || [];
      const total = pitches.length;
      const stats = Object.create(null);
      const usage = Object.create(null);
      const grades = Object.create(null);
      for (const code of declared) {
        const s = summarizePitchType(pitches, code);
        stats[code] = {
          n: s.n,
          avgVelo: s.velo,
          avgIVB: s.ivb,
          avgHB: s.hb,
          avgSpin: s.spin,
          usagePct: s.usagePct,
        };
        usage[code] = s.usagePct;
        if (Number.isFinite(s.grade)) grades[code] = s.grade;
      }
      if (total) {
        statsByCodeAll[pid] = stats;
        usageByCodeAll[pid] = usage;
        gradesByCodeAll[pid] = grades;
      }
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
                arsenals={Array.isArray(rowsForDisplay) ? rowsForDisplay : []}
                statsByCode={typeof statsByCodeAll === 'object' ? statsByCodeAll : {}}
                usageByCode={typeof usageByCodeAll === 'object' ? usageByCodeAll : {}}
                gradesByCode={typeof gradesByCodeAll === 'object' ? gradesByCodeAll : {}}
                selectedPlayerId={selectedPlayerId || null}
                csvFileName="pitcher-arsenals.csv"
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
