// ---- imports (must be first) ----
import React, { useMemo, useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, Button, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import HITTERS_BY_DATE from '../data/logs/hittersByDate';
import { computeBattedBallMetrics, flattenEventsFromByDateMap } from '../lib/battedBallMetrics';
import applyBattedBallOverride from '../lib/battedBallOverrides';
import './BattedBallProfilePage.css';
// ---- end imports ----

// Helpers
const asDate = (s) => s;

// Display helpers
const showPct = (v) => (v == null ? '—' : `${v.toFixed(1)}%`);
const showNum1 = (v) => (v == null ? '—' : v.toFixed(1));
const showInt = (v) => (v == null ? '—' : String(v));

export default function BattedBallProfilePage() {
  const isMobile = useMediaQuery('(max-width:600px)');

  // Build flat events once from the by-date map
  const allEvents = useMemo(() => flattenEventsFromByDateMap(HITTERS_BY_DATE), []);
  const allDates = useMemo(() => Object.keys(HITTERS_BY_DATE || {}).sort(), []);
  const defaultStart = allDates[0] || '2025-01-01';
  const defaultEnd = allDates[allDates.length - 1] || defaultStart;

  const [startDate, setStartDate] = useState(defaultEnd);
  const [endDate, setEndDate] = useState(defaultEnd);

  // Build hitter list from filtered events to ensure coverage
  const filteredEvents = useMemo(() => allEvents.filter(e => e.date >= startDate && e.date <= endDate), [allEvents, startDate, endDate]);
  const hitterList = useMemo(() => Array.from(new Set(filteredEvents.map(e => e.hitter))).sort((a,b) => a.localeCompare(b)), [filteredEvents]);

  const [tab, setTab] = useState('per'); // 'per' | 'all'
  const isAllHitters = tab === 'all';
  const [hitterMenuOpen, setHitterMenuOpen] = useState(false);
  const [selectedHitter, setSelectedHitter] = useState(null); // null means 'All'
  useEffect(() => {
    // If selected hitter is no longer in range, clear to All (null)
    if (selectedHitter && !hitterList.includes(selectedHitter)) {
      setSelectedHitter(null);
    }
  }, [hitterList, selectedHitter]);

  // Ensure menu is closed when switching to All Hitters tab or disabling the control
  useEffect(() => {
    if (isAllHitters && hitterMenuOpen) {
      setHitterMenuOpen(false);
    }
  }, [isAllHitters, hitterMenuOpen]);

  // Aggregation
  const perMapAll = useMemo(() => computeBattedBallMetrics(filteredEvents, { dateRange: [startDate, endDate] }), [filteredEvents, startDate, endDate]);
  const perMapSelected = useMemo(() => computeBattedBallMetrics(filteredEvents, { dateRange: [startDate, endDate], hitter: selectedHitter || undefined }), [filteredEvents, startDate, endDate, selectedHitter]);

  // Data rows for All Hitters
  const [orderBy, setOrderBy] = useState('BIP');
  const [order, setOrder] = useState('desc');
  const handleSort = (col) => {
    if (orderBy === col) setOrder(order === 'asc' ? 'desc' : 'asc');
    else { setOrderBy(col); setOrder('desc'); }
  };
  const allRows = useMemo(() => {
    const rows = [];
    for (const name of hitterList) {
      const m = perMapAll.get(name) || { BIP: 0, GBpct: null, LDpct: null, FBpct: null, PUpct: null, avgEV: null, maxEV: null, avgLA: null, hardHitPct: null };
      const merged = applyBattedBallOverride(name, m) || m;
      rows.push({ name, ...merged });
    }
    rows.sort((a, b) => {
      if (orderBy === 'name') return a.name.localeCompare(b.name) * (order === 'asc' ? 1 : -1);
      const va = a[orderBy]; const vb = b[orderBy];
      const na = va == null ? -Infinity : va;
      const nb = vb == null ? -Infinity : vb;
      if (na === nb) return a.name.localeCompare(b.name);
      return (na > nb ? 1 : -1) * (order === 'asc' ? 1 : -1);
    });
    return rows;
  }, [perMapAll, hitterList, orderBy, order]);

  const selectedMetrics = useMemo(() => {
    if (!selectedHitter) return null;
    const base = perMapSelected.get(selectedHitter) || null;
    return applyBattedBallOverride(selectedHitter, base) || base;
  }, [perMapSelected, selectedHitter]);

  const clearFilters = () => {
    setStartDate(defaultEnd);
    setEndDate(defaultEnd);
    setSelectedHitter(null);
  };

  const exportCsv = () => {
    const cols = tab === 'all'
      ? ['Hitter','BIP','GB%','LD%','FB%','PU%','Avg EV','Max EV','Avg LA','Hard-Hit %']
      : ['BIP','GB%','LD%','FB%','PU%','Avg EV','Max EV','Avg LA','Hard-Hit %'];
    const esc = (v) => (v == null ? '' : String(v).replace(/"/g, '""'));
    let rowsOut = [];
    if (tab === 'all') {
      rowsOut = allRows.map(r => [r.name, r.BIP, r.GBpct, r.LDpct, r.FBpct, r.PUpct, r.avgEV, r.maxEV, r.avgLA, r.hardHitPct]);
    } else {
      const m = selectedMetrics || { BIP:0 };
      rowsOut = [[m.BIP, m.GBpct, m.LDpct, m.FBpct, m.PUpct, m.avgEV, m.maxEV, m.avgLA, m.hardHitPct]];
    }
    const header = cols.join(',');
    const body = rowsOut.map(r => r.map(esc).join(',')).join('\n');
    const blob = new Blob([header + '\n' + body], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `batted-ball-metrics-${startDate}-${endDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box className="pageBattedBall" sx={{ width: '100%', minHeight: '100vh', py: isMobile ? 2 : 5 }}>
      <Typography component="h1" align="center" sx={{ color: 'var(--color-gold)', fontWeight: 800, mb: isMobile ? 2 : 3, letterSpacing: 0.5 }}>
        Batted Ball Metrics
      </Typography>

      {/* Controls bar */}
      <Box className="bb-controls" role="region" aria-label="Filters">
        <div className="field">
          <label className="gold" htmlFor="bb-start">Start Date</label>
          <input id="bb-start" type="date" value={asDate(startDate)} max={endDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="field">
          <label className="gold" htmlFor="bb-end">End Date</label>
          <input id="bb-end" type="date" value={asDate(endDate)} min={startDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="field" aria-disabled={isAllHitters}>
          <label className="gold" htmlFor="bb-hitter">Hitter</label>
          <FormControl size="small" sx={{ minWidth: 220 }} disabled={isAllHitters}>
            <InputLabel id="bb-hitter-label">Hitter</InputLabel>
            <Select
              labelId="bb-hitter-label"
              id="bb-hitter"
              value={selectedHitter ?? ''}
              label="Hitter"
              open={hitterMenuOpen}
              onOpen={() => setHitterMenuOpen(true)}
              onClose={() => setHitterMenuOpen(false)}
              onChange={(e) => { setSelectedHitter(e.target.value || null); setHitterMenuOpen(false); }}
              displayEmpty
              renderValue={(v) => v || 'All'}
              MenuProps={{ disableScrollLock: true, slotProps: { paper: { sx: { zIndex: 1600 } } } }}
           >
              {hitterList.map((name) => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="bb-actions">
          <Button variant="outlined" size="small" onClick={clearFilters} sx={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}>Clear</Button>
          <Tooltip title="Export current view">
            <span>
              <Button variant="contained" size="small" onClick={exportCsv} sx={{ backgroundColor: 'var(--color-gold)', color: '#111', '&:hover': { backgroundColor: '#e5a300' } }}>Export CSV</Button>
            </span>
          </Tooltip>
        </div>
      </Box>

      {/* Tabs */}
      <div className="bb-tabs" role="tablist" aria-label="View Mode">
        <button className={`bb-tab ${!isAllHitters ? 'active' : ''}`} role="tab" aria-selected={!isAllHitters} onClick={() => setTab('per')}>Per Hitter</button>
        <button className={`bb-tab ${isAllHitters ? 'active' : ''}`} role="tab" aria-selected={isAllHitters} onClick={() => setTab('all')}>All Hitters</button>
      </div>

      {/* Summary for Per Hitter */}
      {tab === 'per' && (
        <div className="bb-summary" aria-live="polite">
          <span className="bb-pill"><span className="label">BIP</span><span className="value">{showInt(selectedMetrics?.BIP ?? 0)}</span></span>
          <span className="bb-pill"><span className="label">Avg EV</span><span className="value">{showNum1(selectedMetrics?.avgEV)}</span></span>
          <span className="bb-pill"><span className="label">Max EV</span><span className="value">{showNum1(selectedMetrics?.maxEV)}</span></span>
          <span className="bb-pill"><span className="label">Avg LA</span><span className="value">{showNum1(selectedMetrics?.avgLA)}</span></span>
          <span className="bb-pill"><span className="label">Hard-Hit %</span><span className="value">{showPct(selectedMetrics?.hardHitPct)}</span></span>
        </div>
      )}

      {/* Tables */}
      <div className="bb-tableShell" role="region" aria-label="Batted Ball Tables">
        {isAllHitters ? (
          <TableContainer>
            <Table size="small" aria-label="All Hitters Metrics">
              <TableHead>
                <TableRow>
                  <TableCell scope="col" onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>Hitter</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('BIP')} style={{ cursor: 'pointer' }} className="num">BIP</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('GBpct')} style={{ cursor: 'pointer' }} className="num">GB%</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('LDpct')} style={{ cursor: 'pointer' }} className="num">LD%</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('FBpct')} style={{ cursor: 'pointer' }} className="num">FB%</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('PUpct')} style={{ cursor: 'pointer' }} className="num">PU%</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('avgEV')} style={{ cursor: 'pointer' }} className="num">Avg EV</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('maxEV')} style={{ cursor: 'pointer' }} className="num">Max EV</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('avgLA')} style={{ cursor: 'pointer' }} className="num">Avg LA</TableCell>
                  <TableCell scope="col" onClick={() => handleSort('hardHitPct')} style={{ cursor: 'pointer' }} className="num">Hard-Hit %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allRows.map((r) => (
                  <TableRow key={r.name} hover>
                    <TableCell component="th" scope="row">{r.name}</TableCell>
                    <TableCell className="num">{showInt(r.BIP)}</TableCell>
                    <TableCell className="num">{showPct(r.GBpct)}</TableCell>
                    <TableCell className="num">{showPct(r.LDpct)}</TableCell>
                    <TableCell className="num">{showPct(r.FBpct)}</TableCell>
                    <TableCell className="num">{showPct(r.PUpct)}</TableCell>
                    <TableCell className="num">{showNum1(r.avgEV)}</TableCell>
                    <TableCell className="num">{showNum1(r.maxEV)}</TableCell>
                    <TableCell className="num">{showNum1(r.avgLA)}</TableCell>
                    <TableCell className="num">{showPct(r.hardHitPct)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer>
            <Table size="small" aria-label="Per Hitter Metrics">
              <TableHead>
                <TableRow>
                  <TableCell scope="col" className="num">BIP</TableCell>
                  <TableCell scope="col" className="num">GB%</TableCell>
                  <TableCell scope="col" className="num">LD%</TableCell>
                  <TableCell scope="col" className="num">FB%</TableCell>
                  <TableCell scope="col" className="num">PU%</TableCell>
                  <TableCell scope="col" className="num">Avg EV</TableCell>
                  <TableCell scope="col" className="num">Max EV</TableCell>
                  <TableCell scope="col" className="num">Avg LA</TableCell>
                  <TableCell scope="col" className="num">Hard-Hit %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow hover>
                  <TableCell className="num">{showInt(selectedMetrics?.BIP ?? 0)}</TableCell>
                  <TableCell className="num">{showPct(selectedMetrics?.GBpct)}</TableCell>
                  <TableCell className="num">{showPct(selectedMetrics?.LDpct)}</TableCell>
                  <TableCell className="num">{showPct(selectedMetrics?.FBpct)}</TableCell>
                  <TableCell className="num">{showPct(selectedMetrics?.PUpct)}</TableCell>
                  <TableCell className="num">{showNum1(selectedMetrics?.avgEV)}</TableCell>
                  <TableCell className="num">{showNum1(selectedMetrics?.maxEV)}</TableCell>
                  <TableCell className="num">{showNum1(selectedMetrics?.avgLA)}</TableCell>
                  <TableCell className="num">{showPct(selectedMetrics?.hardHitPct)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </Box>
  );
}
