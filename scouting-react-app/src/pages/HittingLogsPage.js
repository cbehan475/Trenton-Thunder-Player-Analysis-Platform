import React, { useMemo, useRef, useState } from 'react';
import { Box, Typography, Grid, useMediaQuery, TextField, Button, Tooltip, Drawer, IconButton, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HittersTable from '../components/HittersTable';
import { filterRows, quickStats, resultClass } from '../lib/hitLogUtils';
import './HittingLogsPage.css';
import AppSelect from '../components/ui/AppSelect.jsx';
import EVLAScatter from "../components/charts/EVLAScatter";
import HardHitByInningBar from "../components/charts/HardHitByInningBar";

const GAME_DATES = [
  '2025-06-04',
  '2025-06-05',
  '2025-06-06',
  '2025-06-07',
  '2025-06-08',
  '2025-06-10',
  '2025-06-11',
  '2025-06-12',
  '2025-06-13',
  '2025-06-14',
  '2025-06-15',
  '2025-06-18',
  '2025-06-20',
  '2025-06-21',
  '2025-06-22',
  '2025-06-24',
  '2025-06-25',
  '2025-06-26',
  '2025-06-27',
  '2025-06-28',
  '2025-06-29',
  '2025-07-01',
  '2025-07-02',
  '2025-07-03',
  '2025-07-04',
  '2025-07-05',
  '2025-07-06',
  '2025-07-08',
  '2025-07-09',
  '2025-07-10',
  '2025-07-11',
  '2025-07-12',
].sort((a, b) => new Date(a) - new Date(b));

export default function HittingLogsPage() {
  const [selectedDate, setSelectedDate] = useState(GAME_DATES[0]);
  const [hittersData, setHittersData] = useState(null);
  const [selectedHitter, setSelectedHitter] = useState('All');
  const [selectedInning, setSelectedInning] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  React.useEffect(() => {
    async function loadData() {
      const module = await import(`../data/logs/hitters-${selectedDate}.js`);
      setHittersData(module.default);
      setSelectedHitter('All');
      setSelectedInning('All');
    }
    loadData();
  }, [selectedDate]);

  // Flatten to row-level for filtering/search and quick stats (derive-only)
  const allRows = useMemo(() => {
    if (!Array.isArray(hittersData)) return [];
    return hittersData.flatMap((hitter) =>
      hitter.atBats.map((ab, idx) => ({
        id: `${hitter.hitter}-${idx}`,
        date: selectedDate,
        hitter: hitter.hitter,
        inning: ab.inning,
        pitchType: ab.pitchType,
        spinRate: ab.spinRate,
        ev: ab.ev,
        la: ab.la,
        pitchHeight: ab.pitchHeight,
        result: ab.result,
      }))
    );
  }, [hittersData, selectedDate]);

  const rows = useMemo(() => filterRows(allRows, { hitter: selectedHitter, inning: selectedInning, q: query }), [allRows, selectedHitter, selectedInning, query]);
  const stats = useMemo(() => quickStats(rows), [rows]);
  const filterBarRef = useRef(null);
  const tableRows = rows;

  // Map result string to v2 chip class
  const chipClassFor = (res = '') => {
    const r = String(res).toLowerCase();
    if (/home/.test(r)) return 'chip-bad';
    if (/triple|double/.test(r)) return 'chip-ok'; // extra-base hits treated as positive
    if (/single|walk|hbp|reach/.test(r)) return 'chip-ok';
    if (/field\s*error|error/.test(r)) return 'chip-warn';
    if (/out|fly|ground|pop|line/.test(r)) return 'chip-neutral';
    return 'chip-neutral';
  };

  const handleClear = () => {
    setSelectedHitter('All');
    setSelectedInning('All');
    setQuery('');
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsOpen(true);
  };

  const downloadCsv = (rowsToExport) => {
    const columns = ['date','hitter','inning','pitchType','spinRate','ev','la','pitchHeight','result'];
    const esc = (v) => (v === null || v === undefined ? '' : String(v).replace(/"/g, '""'));
    const header = columns.join(',');
    const body = rowsToExport.map((r) => columns.map((c) => `"${esc(r[c])}"`).join(',')).join('\n');
    const blob = new Blob([header + '\n' + body], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hitting-logs-${selectedDate}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const hitterOptions = useMemo(() => {
    if (!Array.isArray(hittersData)) return ['All'];
    const names = Array.from(new Set(hittersData.map((h) => h.hitter))).sort((a, b) => a.localeCompare(b));
    return ['All', ...names];
  }, [hittersData]);

  const inningOptions = useMemo(() => ['All', 1, 2, 3, 4, 5, 6, 7, 8, 9], []);

  return (
    <Box className="hitting-logs-page pageHittingLogs" sx={{ width: '100%', minHeight: '100vh', py: isMobile ? 2 : 5 }}>
      <Typography
        component="h1"
        align="center"
        sx={{
          color: 'var(--color-gold)',
          fontWeight: 700,
          fontSize: isMobile ? 26 : 32,
          letterSpacing: 0.5,
          mt: isMobile ? 1 : 2,
          mb: isMobile ? 2 : 3,
        }}
      >
        Hitting Logs
      </Typography>
      {/* Top controls bar to mirror Pitching Logs: Date + Filters + Search + Actions */}
      <Box className="hl-top-controls">
        <div className="controls">
          <div className="field">
            <label className="gold">Date</label>
            <AppSelect
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              options={GAME_DATES}
              label=""
              formSx={{ minWidth: 170 }}
            />
          </div>

          <AppSelect
            value={selectedHitter}
            onChange={(e) => setSelectedHitter(e.target.value)}
            options={hitterOptions.map(name => ({ label: name, value: name }))}
            label="Hitter"
            formSx={{ minWidth: 200 }}
          />

          <AppSelect
            value={selectedInning}
            onChange={(e) => setSelectedInning(e.target.value)}
            options={inningOptions.map(inn => ({ label: String(inn), value: inn }))}
            label="Inning"
            formSx={{ minWidth: 130 }}
          />

          <TextField
            size="small"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hitter / pitch / result"
            inputProps={{ 'aria-label': 'Quick search' }}
            sx={{ minWidth: 260, flex: 1 }}
          />

          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleClear}
              sx={{
                height: 36,
                borderColor: 'var(--hl-gold)',
                color: 'var(--hl-gold)',
                '&:hover': { backgroundColor: 'rgba(255,176,0,0.10)', borderColor: 'var(--hl-gold)' },
              }}
            >
              Clear
            </Button>
            <Tooltip title={rows.length === 0 ? 'No rows to export' : ''}>
              <span>
                <Button
                  variant="contained"
                  size="small"
                  disabled={rows.length === 0}
                  onClick={() => downloadCsv(rows)}
                  sx={{
                    height: 36,
                    backgroundColor: 'var(--hl-gold)',
                    color: '#1b2231',
                    '&:hover': { backgroundColor: '#e5a300' },
                  }}
                >
                  Export CSV
                </Button>
              </span>
            </Tooltip>
          </Box>
        </div>
      </Box>
      <Grid
        container
        spacing={isMobile ? 1 : 2}
        justifyContent="center"
        alignItems="center"
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          mb: isMobile ? 2 : 3,
          px: isMobile ? 1 : 0,
        }}
      >
        {/* Date pills removed in favor of top-left selector for consistency */}
        {selectedDate && (
          <Grid item xs={12}>
            <Box className="stats-ribbon">
              <span className="stats-pill"><span className="dot" /><span className="label">PA</span><span className="value">{stats.pa}</span></span>
              <span className="stats-pill"><span className="dot" /><span className="label">Contact%</span><span className="value">{stats.contactPct}</span></span>
              <span className="stats-pill"><span className="dot" /><span className="label">Avg EV</span><span className="value">{stats.avgEV}</span></span>
              <span className="stats-pill"><span className="dot" /><span className="label">Max EV</span><span className="value">{stats.maxEV}</span></span>
              <span className="stats-pill"><span className="dot" /><span className="label">p50 LA</span><span className="value">{stats.p50LA}</span></span>
              <span className="stats-pill"><span className="dot" /><span className="label">Hard-Hit%</span><span className="value">{stats.hardHitPct}</span></span>
              <span className="stats-pill"><span className="dot" /><span className="label">BIP</span><span className="value">{stats.bip}</span></span>
            </Box>
          </Grid>
        )}
      </Grid>
      <Box
        sx={{
          maxWidth: 1100,
          mx: 'auto',
          bgcolor: 'var(--hl-panel)',
          borderRadius: 3,
          boxShadow: '0 6px 24px rgba(0,0,0,0.35)',
          p: isMobile ? 1 : 3,
          border: '1px solid var(--hl-border)',
          minHeight: 300,
        }}
      >
        {/* EV/LA scatter — uses the SAME rows as the table */}
        <div style={{ marginTop: 16, marginBottom: 24 }}>
          <EVLAScatter rows={tableRows} showFouls={true} title="EV vs LA (Sweet Spot ≥95 mph, 8–32°)" />
        </div>
        {/* Hard-Hit% by inning bar chart — filters apply to the same tableRows */}
        <div style={{ marginBottom: 24 }}>
          <HardHitByInningBar rows={tableRows} />
        </div>
        {hittersData && <HittersTable rows={rows} onRowClick={handleRowClick} selectedRowId={selectedRow?.id || null} />}
      </Box>

      <Drawer anchor="right" open={isOpen} onClose={() => { setIsOpen(false); setSelectedRow(null); }} PaperProps={{ sx: { width: '100%', maxWidth: 380, bgcolor: 'var(--hl-panel-2)', color: 'var(--hl-text)' } }}>
        <Box className="details-drawer" role="dialog" aria-label="Row details" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box className="drawer-header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {selectedRow ? `${selectedRow.hitter} — Inning ${selectedRow.inning}` : 'Details'}
            </Typography>
            <IconButton aria-label="Close" onClick={() => { setIsOpen(false); setSelectedRow(null); }} size="small" sx={{ color: '#cbd5e1' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: '#1f2937' }} />
          <Box sx={{ p: 2, display: 'grid', rowGap: 1.25 }}>
            <div className="kv"><span className="label">Date</span><span className="value">{selectedRow?.date}</span></div>
            <div className="kv"><span className="label">Pitch Type</span><span className="value">{selectedRow?.pitchType ?? '—'}</span></div>
            <div className="kv"><span className="label">Spin Rate</span><span className="value">{selectedRow?.spinRate == null ? '—' : `${Number(selectedRow.spinRate).toFixed(0)} rpm`}</span></div>
            <div className="kv"><span className="label">EV</span><span className="value">{selectedRow?.ev == null ? '—' : `${Number(selectedRow.ev).toFixed(1)} mph`}</span></div>
            <div className="kv"><span className="label">LA</span><span className="value">{selectedRow?.la == null ? '—' : `${Number(selectedRow.la).toFixed(0)}°`}</span></div>
            <div className="kv"><span className="label">Pitch Height</span><span className="value">{selectedRow?.pitchHeight == null ? '—' : Number(selectedRow.pitchHeight).toFixed(1)}</span></div>
            <div className="kv"><span className="label">Result</span><span className={`value result-chip ${selectedRow ? chipClassFor(selectedRow.result) : ''}`}>{selectedRow?.result ?? '—'}</span></div>
          </Box>
          <Box sx={{ mt: 'auto', p: 2, pt: 1, color: '#94a3b8', fontSize: 12 }}>
            Source: first-half logs. Values are recorded per plate appearance.
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
