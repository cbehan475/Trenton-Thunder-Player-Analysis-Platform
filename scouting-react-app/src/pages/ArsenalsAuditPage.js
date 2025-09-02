 import React, { useMemo, useCallback, useState } from 'react';
import { Container, Typography, Alert, Button, Stack, Snackbar } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PitchersTable, { getPid } from '../components/PitchersTable';
import pitcherArsenals from '../data/pitcherArsenals';
import ALL_PITCH_EVENTS from '../data/logs/pitchingIndex.js';
import { summarizePitchType, normalizeCode } from '../utils/pitchAggregates.js';
import { getMergedArsenalForPitcher } from '../utils/arsenalMerge.js';
import { slugifyId } from '../lib/scoutingReportsStore.js';
import { getLatestOuting } from '../lib/reviewCache.js';

export default function ArsenalsAuditPage() {
  const isProd = process.env.NODE_ENV === 'production';
  const navigate = useNavigate();
  const [snack, setSnack] = useState({ open: false, message: '' });

  // Always call hooks; guard within callbacks to avoid conditional hooks
  const banner = useMemo(() => (
    <Alert severity={isProd ? 'error' : 'info'} sx={{ mb: 2 }}>
      {isProd ? 'This page is disabled in production.' : 'Development-only: Arsenal Audit tools are available here.'}
    </Alert>
  ), [isProd]);

  // Build overrides map once; if prod, return empty to avoid extra work
  const OVERRIDES_MAP = useMemo(() => {
    if (isProd) return {};
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
  }, [isProd]);

  // Base rows from JSON; static transform is ok in prod too
  const baseArsenals = useMemo(() => {
    return (Array.isArray(pitcherArsenals) ? pitcherArsenals : []).map((p) => ({
      playerId: p.playerId,
      name: p.name,
      bt: p.handedness ? `-/${p.handedness}` : null,
      pitches: Array.isArray(p.arsenal) ? p.arsenal : [],
    }));
  }, []);

  // Merge telemetry + compute merged arsenal details for audit; if prod, return empty
  const rowsForDisplay = useMemo(() => {
    if (isProd) return [];
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
        const d = new Date(latest.date);
        const md = isNaN(d) ? latest.date : `${d.getMonth()+1}/${d.getDate()}`;
        const pct = (latest.disagreePct != null) ? `${latest.disagreePct}%` : '';
        const hint = latest.notes && latest.notes.length ? latest.notes[0] : 'disagree';
        note = `${md}: ${hint}${pct ? ` ${pct}` : ''}`;
      }
      const pid = String(row.playerId);
      const merged = getMergedArsenalForPitcher(pid, ALL_PITCH_EVENTS, OVERRIDES_MAP);
      out.push({
        ...row,
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
  }, [isProd, baseArsenals, OVERRIDES_MAP]);

  // Build maps for ALL pitchers used by PitchersTable aggregates; if prod, return empties
  const { statsByCodeAll, usageByCodeAll, gradesByCodeAll } = useMemo(() => {
    if (isProd) return { statsByCodeAll: {}, usageByCodeAll: {}, gradesByCodeAll: {} };

    const statsByCodeAll = Object.create(null);
    const usageByCodeAll = Object.create(null);
    const gradesByCodeAll = Object.create(null);

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
      statsByCodeAll[pid] = stats;
      usageByCodeAll[pid] = usage;
      gradesByCodeAll[pid] = grades;
    }

    return { statsByCodeAll, usageByCodeAll, gradesByCodeAll };
  }, [isProd]);

  // Hardened filteredRows builder (always returns an array)
  const filteredRows = useMemo(() => {
    const base = Array.isArray(rowsForDisplay) ? rowsForDisplay : [];
    // No external filters here yet; return base, but ensure array type
    return Array.isArray(base) ? base : [];
  }, [rowsForDisplay]);

  const handleRowDoubleClick = useCallback((paramsOrRow) => {
    const row = paramsOrRow?.row ?? paramsOrRow;
    const pid = row?.pid || getPid(row, row?._i ?? 0);
    if (!pid || String(pid).startsWith('row-')) return;
    navigate(`/pitching/reports?pid=${encodeURIComponent(pid)}`);
  }, [navigate]);

  // Parent-level reset hook: currently no external filters on this page,
  // but we surface a callback to satisfy PitchersTable's contract and UX.
  const handleResetFromTable = useCallback(() => {
    setSnack({ open: true, message: 'Table reset' });
  }, []);

  // Single return; conditionally render content
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: 800 }}>Arsenal Audit (Dev)</Typography>
        <Stack direction="row" spacing={1}>
          <Button component={RouterLink} to="/pitching/arsenals" variant="outlined">Back to Arsenals</Button>
        </Stack>
      </Stack>
      {banner}

      {!isProd && (
        <PitchersTable
          mode="arsenals"
          arsenals={Array.isArray(filteredRows) ? filteredRows : []}
          statsByCode={typeof statsByCodeAll === 'object' ? statsByCodeAll : {}}
          usageByCode={typeof usageByCodeAll === 'object' ? usageByCodeAll : {}}
          gradesByCode={typeof gradesByCodeAll === 'object' ? gradesByCodeAll : {}}
          selectedPlayerId={null}
          csvFileName="arsenals-audit.csv"
          onReset={handleResetFromTable}
        />
      )}

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={()=>setSnack(s=>({ ...s, open:false }))} message={snack.message} />
    </Container>
  );
}
