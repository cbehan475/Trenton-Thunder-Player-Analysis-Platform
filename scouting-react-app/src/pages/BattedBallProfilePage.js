// ---- imports (must be first) ----
import React, { useMemo, useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, Stack, Button, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import HITTERS_BY_DATE from '../data/logs/hittersByDate';
// ---- end imports ----

// 1st-half constants and helpers
const FIRST_HALF_START = '2025-06-04';
const FIRST_HALF_END = '2025-07-12';

// Defensive helper: pick display name for a hitter's row array
function pickHitterName(rows = [], fallbackKey) {
  try {
    if (!Array.isArray(rows)) rows = [];
    const counts = new Map();
    for (const r of rows) {
      const cand = String(
        (r && (r.hitter ?? r.Hitter ?? r.name ?? r.player)) ?? ''
      ).trim();
      if (!cand) continue;
      counts.set(cand, (counts.get(cand) || 0) + 1);
    }
    if (counts.size) {
      return [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
    }
    return String(fallbackKey ?? '');
  } catch {
    return String(fallbackKey ?? '');
  }
}

function buildHitterNameMap(firstHalf) {
  const map = {};
  for (const key of Object.keys(firstHalf || {})) {
    map[key] = pickHitterName(firstHalf[key], key);
  }
  return map;
}

// Normalize a hitter's day into a flat array of row objects
function normalizeHittersDay(mod, fallbackKey) {
  const fallback = String(fallbackKey ?? '');
  const detected =
    (mod && (mod.hitter ?? mod.Hitter ?? mod.name ?? mod.player)) || '';

  const addName = (rows) =>
    (rows || []).map(r => ({
      ...r,
      hitter: (r?.hitter ?? (detected || fallback)),
    }));

  if (!mod) return [];
  if (Array.isArray(mod)) return addName(mod);
  if (Array.isArray(mod.rows)) return addName(mod.rows);
  if (Array.isArray(mod.atBats)) return addName(mod.atBats);
  if (typeof mod === 'object') {
    const out = [];
    for (const k of Object.keys(mod)) {
      const v = mod[k];
      if (Array.isArray(v)) out.push(...addName(v));
    }
    return out;
  }
  return [];
}

function inRange(dateStr, start, end) {
  return dateStr >= start && dateStr <= end;
}

function collectFirstHalfRows(MAP, start, end) {
  const perHitter = {};
  for (const date of Object.keys(MAP || {})) {
    if (date < start || date > end) continue;
    const day = MAP[date] || {};
    for (const hitterName of Object.keys(day)) {
      // Convert whatever shape the module has into flat rows
      let rows = normalizeHittersDay(day[hitterName], hitterName);
      if (!Array.isArray(rows)) rows = [];
      if (!perHitter[hitterName]) perHitter[hitterName] = [];
      // Safe spread – rows is guaranteed an array now
      perHitter[hitterName].push(...rows);
    }
  }
  return perHitter;
}

function summarizeHitter(rows = []) {
  if (!rows.length) {
    return { BIP:0, GBpct:0, LDpct:0, FBpct:0, PUpct:0, avgEV:0, maxEV:0, avgLA:0, hardHitPct:0 };
  }
  const bip = rows.length;
  let gb=0, ld=0, fb=0, pu=0, evSum=0, laSum=0, hh=0, maxEV=-Infinity;

  for (const r of rows) {
    const ev = Number(r.ev ?? r.EV ?? 0);
    const la = Number(r.la ?? r.LA ?? 0);
    evSum += ev; laSum += la;
    if (ev >= 95) hh++;
    if (ev > maxEV) maxEV = ev;

    // LA bins
    if (la < 10) gb++;
    else if (la < 25) ld++;
    else if (la < 40) fb++;
    else pu++;
  }
  const pct = n => bip ? Math.round((n / bip) * 1000) / 10 : 0;
  return {
    BIP: bip,
    GBpct: pct(gb),
    LDpct: pct(ld),
    FBpct: pct(fb),
    PUpct: pct(pu),
    avgEV: +(evSum / bip).toFixed(1),
    maxEV: maxEV === -Infinity ? 0 : +maxEV.toFixed(1),
    avgLA: +(laSum / bip).toFixed(1),
    hardHitPct: pct(hh),
  };
}

export default function BattedBallProfilePage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  // 1st-half data and summary state
  const firstHalf = useMemo(
    () => collectFirstHalfRows(HITTERS_BY_DATE, FIRST_HALF_START, FIRST_HALF_END),
    []
  );
  const hitterNameMap = useMemo(() => buildHitterNameMap(firstHalf), [firstHalf]);

  // Step 2: Merge all rows by display name
  const mergedRowsByName = useMemo(() => {
    const map = {};
    for (const key of Object.keys(firstHalf || {})) {
      const name = hitterNameMap[key] || String(key);
      if (!map[name]) map[name] = [];
      map[name].push(...(firstHalf[key] || []));
    }
    return map;
  }, [firstHalf, hitterNameMap]);

  // Step 4: Unique display names, sorted
  const displayNamesSorted = useMemo(() => {
    const names = Object.keys(mergedRowsByName || {});
    names.sort((a, b) => a.localeCompare(b));
    return names;
  }, [mergedRowsByName]);

  // selectedHitter stores the display name
  const [selectedHitter, setSelectedHitter] = useState(displayNamesSorted[0] || '');
  useEffect(() => {
    if (!selectedHitter && displayNamesSorted.length) {
      setSelectedHitter(displayNamesSorted[0]);
    }
    if (selectedHitter && !mergedRowsByName[selectedHitter] && displayNamesSorted.length) {
      setSelectedHitter(displayNamesSorted[0]);
    }
  }, [displayNamesSorted, selectedHitter, mergedRowsByName]);

  // View mode
  const [showAll, setShowAll] = useState(false);
  // Sorting for "All Hitters"
  const [orderBy, setOrderBy] = useState('hardHitPct');
  const [order, setOrder] = useState('desc');
  const handleSort = (col) => {
    if (orderBy === col) setOrder(order === 'asc' ? 'desc' : 'asc');
    else { setOrderBy(col); setOrder('desc'); }
  };

  const selectedSummary = useMemo(() => {
    return summarizeHitter(mergedRowsByName[selectedHitter] || []);
  }, [mergedRowsByName, selectedHitter]);

  const allSummaries = useMemo(() => {
    const arr = displayNamesSorted.map(name => ({
      name,
      ...summarizeHitter(mergedRowsByName[name] || [])
    }));
    arr.sort((a, b) => {
      if (orderBy === 'name') return a.name.localeCompare(b.name) * (order === 'asc' ? 1 : -1);
      const va = a[orderBy]; const vb = b[orderBy];
      if (va === vb) return 0;
      return (va > vb ? 1 : -1) * (order === 'asc' ? 1 : -1);
    });
    return arr;
  }, [mergedRowsByName, displayNamesSorted, orderBy, order]);

  return (
    <Box sx={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(180deg, #0A0C10 0%, #111827 100%)', py: isMobile ? 2 : 5 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        sx={{
          color: '#F5B301',
          fontWeight: 800,
          mb: isMobile ? 2 : 4,
          letterSpacing: 0.5,
        }}
      >
        Batted Ball Metrics
      </Typography>

      {/* Toggle buttons */}
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Button
          style={{
            padding: '6px 18px',
            borderRadius: 20,
            border: showAll ? '1px solid #ccc' : '2px solid #FFD600',
            background: showAll ? '#f8f8f8' : '#FFD600',
            color: showAll ? '#444' : '#23304A',
            fontWeight: 700,
            cursor: 'pointer',
            outline: 'none',
          }}
          onClick={() => setShowAll(false)}
        >
          Per Hitter
        </Button>
        <Button
          style={{
            padding: '6px 18px',
            borderRadius: 20,
            border: !showAll ? '1px solid #ccc' : '2px solid #FFD600',
            background: !showAll ? '#f8f8f8' : '#FFD600',
            color: !showAll ? '#444' : '#23304A',
            fontWeight: 700,
            cursor: 'pointer',
            outline: 'none',
          }}
          onClick={() => setShowAll(true)}
        >
          All Hitters
        </Button>
      </Stack>

      {/* Hitter dropdown, only if not showAll */}
      {!showAll && (
        <FormControl sx={{ minWidth: 220, mb: 3 }} size="small">
          <InputLabel>Hitter</InputLabel>
          <Select labelId="hitter-label" value={selectedHitter} label="Hitter" onChange={(e) => setSelectedHitter(e.target.value)}>
            {displayNamesSorted.map(name => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Table(s) */}
      <Box sx={{ maxWidth: 1100, mx: 'auto', mt: 2 }}>
        {showAll ? (
          <TableContainer sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>Hitter {orderBy === 'name' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('BIP')} style={{ cursor: 'pointer' }}>BIP {orderBy === 'BIP' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('GBpct')} style={{ cursor: 'pointer' }}>GB% {orderBy === 'GBpct' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('LDpct')} style={{ cursor: 'pointer' }}>LD% {orderBy === 'LDpct' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('FBpct')} style={{ cursor: 'pointer' }}>FB% {orderBy === 'FBpct' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('PUpct')} style={{ cursor: 'pointer' }}>PU% {orderBy === 'PUpct' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('avgEV')} style={{ cursor: 'pointer' }}>Avg EV {orderBy === 'avgEV' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('maxEV')} style={{ cursor: 'pointer' }}>Max EV {orderBy === 'maxEV' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('avgLA')} style={{ cursor: 'pointer' }}>Avg LA {orderBy === 'avgLA' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                  <TableCell onClick={() => handleSort('hardHitPct')} style={{ cursor: 'pointer' }}>Hard-Hit % {orderBy === 'hardHitPct' ? (order === 'asc' ? '▲' : '▼') : ''}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allSummaries.map(row => (
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.BIP}</TableCell>
                    <TableCell>{row.GBpct}%</TableCell>
                    <TableCell>{row.LDpct}%</TableCell>
                    <TableCell>{row.FBpct}%</TableCell>
                    <TableCell>{row.PUpct}%</TableCell>
                    <TableCell>{row.avgEV}</TableCell>
                    <TableCell>{row.maxEV}</TableCell>
                    <TableCell>{row.avgLA}</TableCell>
                    <TableCell>{row.hardHitPct}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>BIP</TableCell>
                  <TableCell align="right">GB%</TableCell>
                  <TableCell align="right">LD%</TableCell>
                  <TableCell align="right">FB%</TableCell>
                  <TableCell align="right">PU%</TableCell>
                  <TableCell align="right">Avg EV</TableCell>
                  <TableCell align="right">Max EV</TableCell>
                  <TableCell align="right">Avg LA</TableCell>
                  <TableCell align="right">Hard-Hit %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{selectedSummary.BIP}</TableCell>
                  <TableCell align="right">{selectedSummary.GBpct}%</TableCell>
                  <TableCell align="right">{selectedSummary.LDpct}%</TableCell>
                  <TableCell align="right">{selectedSummary.FBpct}%</TableCell>
                  <TableCell align="right">{selectedSummary.PUpct}%</TableCell>
                  <TableCell align="right">{selectedSummary.avgEV}</TableCell>
                  <TableCell align="right">{selectedSummary.maxEV}</TableCell>
                  <TableCell align="right">{selectedSummary.avgLA}</TableCell>
                  <TableCell align="right">{selectedSummary.hardHitPct}%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
}
