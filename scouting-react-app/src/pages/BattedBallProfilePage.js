// ---- imports (must be first) ----
import React, { useMemo, useState, useEffect } from 'react';
import HITTERS_BY_DATE from '../data/logs/hittersByDate';
import { flattenEventsFromByDateMap } from '../lib/battedBallMetrics';
import { isBIP } from '../lib/hitLogUtils';
import './BattedBallProfilePage.css';
// New presentational components
import HitterHeader from '../components/hitterReports/HitterHeader';
import SummaryTiles from '../components/hitterReports/SummaryTiles';
import GradesTiles from '../components/hitterReports/GradesTiles';
import ScoutingBlurb from '../components/hitterReports/ScoutingBlurb';
import TopBattedBallsTable from '../components/hitterReports/TopBattedBallsTable';
// Metrics/logic utilities (existing logic)
import { computeHitterSummary } from '../utils/hitterMetrics';
import { computeBattedBallMix } from '../utils/battedBall';
import { computeHitterGrades } from '../utils/grades';
import { buildHitterBlurb } from '../utils/hitterBlurb';
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

  // Build hitter dropdown options
  const hitterOptions = useMemo(() => (hitterList || []).map((name) => ({ value: name, label: name })), [hitterList]);
  const selectedOption = useMemo(() => ({ value: selectedHitter || '', label: selectedHitter || '' }), [selectedHitter]);
  const setSelectedByValue = (val) => setSelectedHitter(val);

  // Summary metrics (existing logic)
  const { avgEV, avgLA, hhPct } = useMemo(() => computeHitterSummary(reportEvents), [reportEvents]);

  // Grades (existing logic & rounding/caps inside util)
  const grades = useMemo(() => {
    const { pct } = computeBattedBallMix(reportEvents);
    const s = computeHitterSummary(reportEvents);
    return computeHitterGrades({ avgEV: s.avgEV, hhPct: s.hhPct, mix: pct, bip: s.bip });
  }, [reportEvents]);

  // Scouting blurb text (existing blurb builder)
  const scoutingText = useMemo(() => {
    const s = computeHitterSummary(reportEvents);
    const { pct } = computeBattedBallMix(reportEvents);
    return buildHitterBlurb({ ...s, mix: pct });
  }, [reportEvents]);

  // Top batted balls rows (top 5 by EV)
  const topBattedBalls = useMemo(() => {
    const getEV = (e) => Number(e?.ev ?? e?.EV ?? e?.exitVelo ?? NaN);
    const getLA = (e) => Number(e?.la ?? e?.LA ?? e?.launchAngle ?? NaN);
    const getResult = (e) => e?.result ?? e?.playResult ?? e?.battedBallType ?? e?.bb_type ?? '';
    const rows = (reportEvents || [])
      .map((e) => ({ ev: getEV(e), la: getLA(e), result: getResult(e) }))
      .filter((r) => Number.isFinite(r.ev) && Number.isFinite(r.la));
    rows.sort((a, b) => b.ev - a.ev);
    return rows.slice(0, 5).map((r) => ({ ev: Number(r.ev.toFixed?.(1) ?? r.ev), la: Number(r.la.toFixed?.(1) ?? r.la), result: r.result || '—' }));
  }, [reportEvents]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-6">
      <HitterHeader
        title="Hitter Reports"
        hitter={selectedOption}
        onChangeHitter={(val) => setSelectedByValue(val)}
        hitterOptions={hitterOptions}
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <SummaryTiles
            avgEV={avgEV}
            avgLA={avgLA}
            hhPct={hhPct}
            sample={`BIP ${bipCount} • HH% uses ≥95 mph`}
          />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <GradesTiles
            rawPower={grades.rawPower}
            impact={grades.impact}
            gamePower={grades.gamePower}
          />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <ScoutingBlurb text={scoutingText} />
        </div>

        <div className="col-span-12">
          <TopBattedBallsTable rows={topBattedBalls} />
        </div>
      </div>
    </div>
  );
}

