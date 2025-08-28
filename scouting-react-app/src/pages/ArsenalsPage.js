import React, { useMemo, useState, useCallback } from 'react';
import { Box, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody, Chip, Stack, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PitchersTable from '../components/PitchersTable';
import dataFirstHalf from '../data/arsenals/firstHalf.json';
import proposalsData from '../data/arsenals/proposals.json';
import overridesData from '../data/arsenals/overrides.json';
import { getCache, getLatestOuting } from '../lib/reviewCache.js';

export default function ArsenalsPage() {
  const navigate = useNavigate();
  const [openBatchFix, setOpenBatchFix] = useState(false);

  const arsenals = useMemo(() => Array.isArray(dataFirstHalf) ? dataFirstHalf : [], []);

  // Merge review cache telemetry into displayed status per precedence
  const rowsForDisplay = useMemo(() => {
    const cache = getCache();
    const out = [];
    for (const row of arsenals) {
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
  }, [arsenals]);

  const handleRowDoubleClick = useCallback((paramsOrRow) => {
    const row = paramsOrRow?.row ?? paramsOrRow; // support either signature
    const pid = row?.playerId;
    if (!pid) return;
    navigate(`/pitching/reports?pid=${encodeURIComponent(pid)}`);
  }, [navigate]);

  const navy = '#0B1220';
  const gold = '#FFB300';

  const [tab, setTab] = useState(0); // 0 = Arsenals, 1 = Proposals

  const proposals = useMemo(() => proposalsData || {}, []);
  const proposalsRows = useMemo(() => {
    return Object.entries(proposals).map(([playerId, p]) => ({ playerId, ...p }));
  }, [proposals]);

  function downloadJson(obj, filename) {
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
  }

  const handleApply = useCallback((row) => {
    const ts = new Date();
    const stamp = `${ts.getFullYear()}${String(ts.getMonth()+1).padStart(2,'0')}${String(ts.getDate()).padStart(2,'0')}-${String(ts.getHours()).padStart(2,'0')}${String(ts.getMinutes()).padStart(2,'0')}`;
    const patch = { [row.playerId]: { suggested: row.suggested, notes: row.notes||[], support: row.support||{}, confidence: row.confidence } };
    downloadJson(patch, `patch-${stamp}.json`);
  }, []);

  const handleIgnore = useCallback((row) => {
    const update = { [row.playerId]: { ...(overridesData?.[row.playerId]||{}), ignore: true } };
    const ts = new Date();
    const stamp = `${ts.getFullYear()}${String(ts.getMonth()+1).padStart(2,'0')}${String(ts.getDate()).padStart(2,'0')}-${String(ts.getHours()).padStart(2,'0')}${String(ts.getMinutes()).padStart(2,'0')}`;
    downloadJson(update, `overrides-update-${stamp}.json`);
  }, []);

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
        <Tabs value={tab} onChange={(_,v)=>setTab(v)} sx={{ mb: 2 }}>
          <Tab label="Arsenals" />
          <Tab label={`Proposals${proposalsRows.length?` (${proposalsRows.length})`:''}`} />
        </Tabs>

        {tab === 0 && (
          !arsenals.length ? (
            <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, textAlign: 'center', color: '#6b7280' }}>
              No arsenals loaded yet.
            </Box>
          ) : (
            <PitchersTable mode="arsenals" arsenals={rowsForDisplay} onRowDoubleClick={handleRowDoubleClick} />
          )
        )}

        {tab === 1 && (
          <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 2 }}>
            <Alert severity="info" sx={{ mb: 2 }}>
              Display-only. Use the buttons to download a patch or overrides update. Then run:
              <code> node scripts/applyArsenalPatch.js --patch src/data/arsenals/patches/PATCH_FILE.json</code> or
              <code> node scripts/applyArsenalPatch.js --merge-overrides SRC_FILE.json</code>
            </Alert>
            {!proposalsRows.length ? (
              <Typography sx={{ color:'#6b7280' }}>No proposals.</Typography>
            ) : (
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Player</TableCell>
                    <TableCell>Current</TableCell>
                    <TableCell>Suggested</TableCell>
                    <TableCell>Confidence</TableCell>
                    <TableCell>Notes</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {proposalsRows.map((row) => (
                    <TableRow key={row.playerId}>
                      <TableCell>{row.playerId}</TableCell>
                      <TableCell>{(row.current||[]).map(p => (<Chip key={p} size="small" label={p} sx={{ mr: .5 }} />))}</TableCell>
                      <TableCell>{(row.suggested||[]).map(p => (<Chip key={p} size="small" color="primary" variant="outlined" label={p} sx={{ mr: .5 }} />))}</TableCell>
                      <TableCell>{row.confidence != null ? (row.confidence*100).toFixed(0)+'%' : '—'}</TableCell>
                      <TableCell>{(row.notes||[]).join(' • ')}</TableCell>
                      <TableCell align="right">
                        <Stack direction="row" spacing={1} justifyContent="flex-end">
                          <Button size="small" variant="contained" onClick={()=>handleApply(row)}>Apply</Button>
                          <Button size="small" variant="text" color="warning" onClick={()=>handleIgnore(row)}>Ignore</Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Box>
        )}
      </Container>

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
