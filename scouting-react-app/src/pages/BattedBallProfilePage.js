// ---- imports (must be first) ----
import React, { useMemo, useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import HITTERS_BY_DATE from '../data/logs/hittersByDate';
import { flattenEventsFromByDateMap } from '../lib/battedBallMetrics';
import { isBIP } from '../lib/hitLogUtils';
import './BattedBallProfilePage.css';
import HitterSummary from '../components/HitterSummary';
import HitterGrades from '../components/HitterGrades';
import TopBattedBalls from '../components/TopBattedBalls';
import HitterScoutingCard from '../components/HitterScoutingCard';
// ---- end imports ----

// Helpers
const norm = (s) => (s || '').trim().replace(/\s+/g, ' ');
const normLower = (s) => norm(s).toLowerCase();
const isName = (v) => typeof v === 'string' && !/^\d+$/.test(v);

export default function BattedBallProfilePage() {
  // Build flat events once from the by-date map
  const allEvents = useMemo(() => flattenEventsFromByDateMap(HITTERS_BY_DATE), []);
  const allDates = useMemo(() => Object.keys(HITTERS_BY_DATE || {}).sort(), []);

  // Fixed dataset: first-half of available dates
  const firstHalfRange = useMemo(() => {
    if (allDates.length === 0) return [null, null];
    const mid = Math.max(1, Math.floor(allDates.length / 2));
    return [allDates[0], allDates[mid - 1]];
  }, [allDates]);

  const filteredEvents = useMemo(() => {
    const [start, end] = firstHalfRange;
    if (!start || !end) return [];
    return allEvents.filter((e) => e.date >= start && e.date <= end);
  }, [allEvents, firstHalfRange]);

  // Hitter list from filtered events
  const hitterList = useMemo(() => {
    const fromEvents = new Set(filteredEvents.map((e) => normLower(e.hitter)));
    const out = Array.from(fromEvents).map((n) => {
      const match = filteredEvents.find((e) => normLower(e.hitter) === n);
      return match?.hitter || n;
    });
    return out.filter(isName).sort((a, b) => a.localeCompare(b));
  }, [filteredEvents]);

  const [selectedHitter, setSelectedHitter] = useState(hitterList[0] || '');
  useEffect(() => {
    if (!selectedHitter || !hitterList.includes(selectedHitter)) {
      setSelectedHitter(hitterList[0] || '');
    }
  }, [hitterList]);

  // Events for selected hitter (BIP-only)
  const reportEvents = useMemo(() => {
    const pool = Array.isArray(filteredEvents) ? filteredEvents : [];
    const sliced = selectedHitter ? pool.filter((e) => normLower(e.hitter) === normLower(selectedHitter)) : pool;
    return sliced.filter((e) => isBIP(e.result));
  }, [filteredEvents, selectedHitter]);

  const logsCount = useMemo(() => filteredEvents.filter((e) => normLower(e.hitter) === normLower(selectedHitter)).length, [filteredEvents, selectedHitter]);
  const bipCount = reportEvents.length;
  const headerTitle = selectedHitter || 'Hitter';

  return (
    <Box className="pageBattedBall" sx={{ width: '100%', minHeight: '100vh', py: 4 }}>
      {/* Header */}
      <div className="mx-auto max-w-6xl px-3">
        <div className="rounded-2xl bg-slate-900/80 ring-1 ring-white/10 px-4 py-4 mb-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">Hitter Reports ⚡</div>
          <div className="text-xl font-semibold tracking-tight">{headerTitle}</div>
        </div>

        {/* Controls: hitter dropdown at top */}
        <div className="mb-4 flex items-center gap-3">
          <FormControl size="small" sx={{ minWidth: 240 }}>
            <InputLabel id="bb-hitter-label">Hitter</InputLabel>
            <Select
              labelId="bb-hitter-label"
              id="bb-hitter"
              value={selectedHitter || ''}
              label="Hitter"
              onChange={(e) => setSelectedHitter(e.target.value)}
              MenuProps={{ disableScrollLock: true }}
            >
              {hitterList.map((name) => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Content grid: three columns per mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column: Summary */}
          <div className="flex flex-col gap-4">
            <HitterSummary events={reportEvents} title="SUMMARY" />
          </div>

          {/* Middle column: Scouting Grades */}
          <div className="flex flex-col gap-4">
            <HitterGrades events={reportEvents} title="SCOUTING GRADES (PRESENT)" />
          </div>

          {/* Right column: Scouting Summary */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 h-full">
              <div className="text-sm font-semibold mb-2">SCOUTING SUMMARY</div>
              <HitterScoutingCard
                events={reportEvents}
                logsCount={logsCount}
                bipCount={bipCount}
                hitterName={selectedHitter}
                title=""
              />
            </div>
          </div>
        </div>

        {/* Full width: Top Batted Balls */}
        <div className="mt-4">
          <TopBattedBalls events={reportEvents} title="Top Batted Balls (By EV)" limit={5} />
        </div>
      </div>
    </Box>
  );
}

