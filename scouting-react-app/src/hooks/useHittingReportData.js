// src/hooks/useHittingReportData.js
// ---- imports (mirror what BattedBallProfilePage uses for this logic) ----
import { useMemo, useState, useEffect } from 'react';
import HITTERS_BY_DATE from '../data/logs/hittersByDate';
import { flattenEventsFromByDateMap } from '../lib/battedBallMetrics';
import OVERRIDES from '../data/overrides/battedBallMetricsOverrides';
import { isBIP } from '../lib/hitLogUtils';
// ---- end imports ----

// Local helpers (copied from BattedBallProfilePage to preserve exact behavior)
const norm = (s) => (s || '').trim().replace(/\s+/g, ' ');
const normLower = (s) => norm(s).toLowerCase();
const isName = (v) => typeof v === 'string' && !/^\d+$/.test(v);

// Derive a displayable hitter name from the first event that contains one
function deriveNameFromEvents(events = []) {
  for (const e of events) {
    const name =
      e?.batter_name ??
      e?.batterName ??
      e?.playerName ??
      e?.hitterName ??
      e?.hitter?.name ??
      e?.batter?.name ??
      e?.name ??
      null;
    if (name && String(name).trim()) return String(name).trim();
  }
  return null;
}

export function useHittingReportData() {
  // Build flat events once from the by-date map
  const allEvents = useMemo(() => flattenEventsFromByDateMap(HITTERS_BY_DATE), []);
  const allDates = useMemo(() => Object.keys(HITTERS_BY_DATE || {}).sort(), []);
  const defaultStart = allDates[0] || '2025-01-01';
  const defaultEnd = allDates[allDates.length - 1] || defaultStart;

  const [startDate, setStartDate] = useState(defaultEnd);
  const [endDate, setEndDate] = useState(defaultEnd);

  // Build filtered events within range
  const filteredEvents = useMemo(
    () => allEvents.filter((e) => e.date >= startDate && e.date <= endDate),
    [allEvents, startDate, endDate]
  );

  // Build union of hitters from events and overrides using normalization, but keep canonical display
  const findCanonical = (name) => {
    const n = normLower(name);
    const fromEvents = filteredEvents.find((e) => normLower(e.hitter) === n)?.hitter;
    const fromOverride = Object.keys(OVERRIDES).find((k) => normLower(k) === n);
    return fromEvents ?? fromOverride ?? name;
  };

  const hitterList = useMemo(() => {
    const fromEvents = new Set(filteredEvents.map((e) => normLower(e.hitter)));
    const fromOverrides = new Set(Object.keys(OVERRIDES).map((k) => normLower(k)));
    const union = new Set([...fromEvents, ...fromOverrides]);
    const canonicals = Array.from(union).map((n) => findCanonical(n));
    // De-dupe canonicals by normalized form and sort by display
    const seen = new Set();
    const out = [];
    for (const c of canonicals) {
      const key = normLower(c);
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(c);
    }
    // Filter to valid names (defensive) and sort
    return out.filter(isName).sort((a, b) => a.localeCompare(b));
  }, [filteredEvents]);

  // Mirror the tab logic to produce perHitter flag
  const [tab, setTab] = useState('per'); // 'per' | 'all'
  const isAllHitters = tab === 'all';

  // Selected hitter management identical to page
  const [selectedHitter, setSelectedHitter] = useState(null); // null means 'All'
  const [hitterMenuOpen, setHitterMenuOpen] = useState(false);
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

  // Safe BIP-only sample for summaries/grades/lists
  const reportEvents = useMemo(() => {
    const pool = Array.isArray(filteredEvents) ? filteredEvents : [];
    const sliced = isAllHitters ? pool : pool.filter((e) => (selectedHitter ? e.hitter === selectedHitter : true));
    return sliced.filter((e) => isBIP(e.result));
  }, [filteredEvents, isAllHitters, selectedHitter]);

  const logsCount = Array.isArray(filteredEvents) ? filteredEvents.length : 0;
  const bipCount = reportEvents.length;
  const perHitter = !isAllHitters;
  const fallbackName = deriveNameFromEvents(reportEvents);
  const hitterName = selectedHitter ?? fallbackName ?? (perHitter ? 'Hitter' : 'All Hitters');

  return {
    // state mirrors
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    tab,
    setTab,
    selectedHitter,
    setSelectedHitter,
    hitterList,

    // derived
    hitterName,
    perHitter,
    filteredEvents,
    reportEvents,
    logsCount,
    bipCount,
  };
}
