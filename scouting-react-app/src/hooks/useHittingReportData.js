// src/hooks/useHittingReportData.js
// Use shared hitting store and robust matching for per-hitter filtering
import { useMemo } from 'react';
import { isBIP } from '../lib/hitLogUtils';
import { useHittingStore } from '../state/hittingStore';

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

function eventHitterId(e) {
  return (
    e?.hitterId ?? e?.batterId ?? e?.playerId ?? e?.hitter?.id ?? e?.batter?.id ?? null
  );
}

function eventHitterName(e) {
  return (
    e?.batter_name ??
    e?.batterName ??
    e?.playerName ??
    e?.hitterName ??
    e?.hitter?.name ??
    e?.batter?.name ??
    e?.name ??
    null
  );
}

function matchesSelected(e, selected) {
  if (!selected) return false;
  // Prefer ID match
  const eid = eventHitterId(e);
  if (eid != null && selected.id != null && String(eid) === String(selected.id)) return true;
  // Fallback: case-insensitive name match
  const en = eventHitterName(e);
  if (
    en &&
    selected.name &&
    String(en).trim().toLowerCase() === String(selected.name).trim().toLowerCase()
  ) {
    return true;
  }
  return false;
}

export function useHittingReportData() {
  // Pull the same state the Batted Ball page uses
  const { selectedHitter, perHitter, filteredEvents } = useHittingStore();

  const reportEvents = useMemo(() => {
    let base = Array.isArray(filteredEvents) ? filteredEvents : [];
    if (perHitter && selectedHitter) {
      base = base.filter((e) => matchesSelected(e, selectedHitter));
    }
    return base.filter(isBIP);
  }, [filteredEvents, perHitter, selectedHitter]);

  const logsCount = Array.isArray(filteredEvents) ? filteredEvents.length : 0;
  const bipCount = reportEvents.length;
  const fallbackName = deriveNameFromEvents(reportEvents);
  const hitterName =
    selectedHitter?.name ?? fallbackName ?? (perHitter ? 'Hitter' : 'All Hitters');

  return {
    hitterName,
    selectedHitter,
    perHitter,
    filteredEvents,
    reportEvents,
    logsCount,
    bipCount,
  };
}
