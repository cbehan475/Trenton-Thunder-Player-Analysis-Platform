import React, { useMemo, useState, useCallback } from 'react';
import { Box, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody, Chip, Stack, Alert, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PitchersTable from '../components/PitchersTable';
import dataFirstHalf from '../data/arsenals/firstHalf.json';
import { getCache, getLatestOuting } from '../lib/reviewCache.js';
import { API_BASE } from '../lib/apiBase';

export default function ArsenalsPage() {
  const navigate = useNavigate();
  const [openBatchFix, setOpenBatchFix] = useState(false);
  const [arsenals, setArsenals] = useState(Array.isArray(dataFirstHalf) ? dataFirstHalf : []);
  const [proposals, setProposals] = useState({});
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'info' });

  // String-only, stable row id with fallback
  const getPid = useCallback((row, index = 0) => {
    const raw = row?.playerId ?? row?.pid ?? row?.id ?? row?.PlayerID ?? row?.PlayerId;
    const id = (raw !== undefined && raw !== null && String(raw).trim() !== '')
      ? String(raw)
      : `row-${index}`;
    return id;
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [aRes, pRes] = await Promise.allSettled([
        fetch(`${API_BASE}/arsenals`).then(r => r.ok ? r.json() : Promise.reject('arsenals')),
        fetch(`${API_BASE}/proposals`).then(r => r.ok ? r.json() : Promise.reject('proposals')),
      ]);

      // Arsenals
      if (aRes.status === 'fulfilled' && Array.isArray(aRes.value)) {
        setArsenals(aRes.value);
      } else {
        setArsenals(Array.isArray(dataFirstHalf) ? dataFirstHalf : []);
      }

      // Proposals
      if (pRes.status === 'fulfilled' && pRes.value && typeof pRes.value === 'object') {
        setProposals(pRes.value);
        const ids = Object.keys(pRes.value || {});
        console.log(`[proposals] count=${ids.length}`, ids.slice(0,3));
      } else {
        setProposals({});
      }
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => { fetchData(); }, [fetchData]);

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
    // Support both MUI DataGrid params and plain row objects
    const row = paramsOrRow?.row ?? paramsOrRow;
    const pid = getPid(row, row?._i ?? 0);
    if (!pid || String(pid).startsWith('row-')) return;
    navigate(`/pitching/reports?pid=${encodeURIComponent(pid)}`);
  }, [navigate, getPid]);

  const navy = '#0B1220';
  const gold = '#FFB300';

  const [tab, setTab] = useState(0); // 0 = Arsenals, 1 = Proposals

  const proposalsRows = useMemo(() => {
    return Object.entries(proposals || {}).map(([playerId, p]) => ({ playerId, ...p }));
  }, [proposals]);

  const toast = useCallback((message, severity = 'info') => setSnack({ open: true, message, severity }), []);

  const handleApply = useCallback(async (row) => {
    // Call API to apply
    try {
      const res = await fetch(`${API_BASE}/apply`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ playerId: row.playerId, suggested: row.suggested, notes: row.notes||[], support: row.support||{}, confidence: row.confidence }) });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      // Update in-memory arsenals
      setArsenals(prev => {
        const map = new Map(prev.map(p => [p.playerId, p]));
        map.set(data.row.playerId, data.row);
        return Array.from(map.values());
      });
      // Remove from proposals
      setProposals(prev => { const clone = { ...prev }; delete clone[row.playerId]; return clone; });
      toast('Applied. firstHalf.json updated • patch saved.', 'success');
    } catch (e) {
      toast(`Error applying: ${String(e)}`, 'error');
    }
  }, [toast]);

  const handleIgnore = useCallback(async (row) => {
    try {
      const res = await fetch(`${API_BASE}/ignore`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ playerId: row.playerId }) });
      if (!res.ok) throw new Error(await res.text());
      setProposals(prev => { const clone = { ...prev }; delete clone[row.playerId]; return clone; });
      toast('Ignored. Overrides updated.', 'success');
    } catch (e) {
      toast(`Error ignoring: ${String(e)}`, 'error');
    }
  }, [toast]);

  const handleApplyAll = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/apply-bulk`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      await fetchData();
      toast(`Applied ${data.applied}, Skipped ${data.skipped}.`, 'success');
    } catch (e) {
      toast(`Bulk apply failed: ${String(e)}`, 'error');
    }
  }, [fetchData, toast]);

  const handleIgnoreAll = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/ignore-bulk`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
      if (!res.ok) throw new Error(await res.text());
      await fetchData();
      toast('Ignored all visible proposals. Overrides updated.', 'success');
    } catch (e) {
      toast(`Bulk ignore failed: ${String(e)}`, 'error');
    }
  }, [fetchData, toast]);

  const handleRebatch = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/rebatch`, { method: 'POST' });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json().catch(()=>({}));
      // Immediately refresh proposals list from API
      try {
        const list = await fetch(`${API_BASE}/proposals`).then(r => r.ok ? r.json() : Promise.reject(new Error('proposals api')));
        setProposals(list || {});
        const n = Number.isFinite(data?.count) ? data.count : Object.keys(list||{}).length;
        toast(`Regenerated ${n} proposals`, 'success');
      } catch {
        // Dev fallback: read from local file if proxy/api unavailable
        try {
          const local = await import('../data/arsenals/proposals.json');
          const obj = (local && local.default) ? local.default : local;
          setProposals(obj || {});
          const n = Number.isFinite(data?.count) ? data.count : Object.keys(obj||{}).length;
          toast(`Regenerated ${n} proposals (local)`, 'warning');
        } catch (e2) {
          // As a last resort, refetch all
          await fetchData();
          const n = Number.isFinite(data?.count) ? data.count : Object.keys(proposals||{}).length;
          toast(`Regenerated ${n} proposals`, 'info');
        }
      }
    } catch (e) {
      toast(`Re-run failed: ${String(e)}`, 'error');
    }
  }, [fetchData, toast, proposals]);

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
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button size="small" variant="contained" onClick={handleApplyAll} disabled={!proposalsRows.length}>Apply All</Button>
              <Button size="small" variant="outlined" color="warning" onClick={handleIgnoreAll} disabled={!proposalsRows.length}>Ignore All</Button>
              <Box sx={{ flex: 1 }} />
              <Button size="small" variant="text" onClick={handleRebatch}>Re-run batch</Button>
            </Stack>
            {!proposalsRows.length ? (
              <Typography sx={{ color:'#6b7280' }}>No proposals. Try RE-RUN BATCH.</Typography>
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
                  {proposalsRows.map((row, i) => (
                    <TableRow key={getPid(row, i)}>
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
