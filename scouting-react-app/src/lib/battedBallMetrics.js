// src/lib/battedBallMetrics.js
// Pure aggregation utilities for Batted Ball Metrics, built from hitter event logs

import { isBIP } from './hitLogUtils';

// Classify LA bands used across the app
export function classifyLABand(la) {
  const v = Number(la);
  if (!Number.isFinite(v)) return null;
  if (v < 10) return 'GB';
  if (v < 25) return 'LD';
  if (v < 50) return 'FB';
  return 'PU';
}

function round1(n) {
  return Number.isFinite(n) ? Math.round(n * 10) / 10 : null;
}

function pct1(n, d) {
  if (!d) return null;
  return Math.round((n / d) * 1000) / 10;
}

// Filter events by date range and optional hitter
export function filterEvents(events = [], { dateRange, hitter }) {
  const [start, end] = dateRange || [null, null];
  return (events || []).filter((e) => {
    if (start && e.date < start) return false;
    if (end && e.date > end) return false;
    if (hitter && e.hitter !== hitter) return false;
    return true;
  });
}

// Compute metrics per hitter using LA bands and shared isBIP
// Returns Map<hitter, metrics>
export function computeBattedBallMetrics(events = [], { dateRange, hitter } = {}) {
  const filtered = filterEvents(events, { dateRange, hitter });

  // Group by hitter
  const byHitter = new Map();
  for (const ev of filtered) {
    const name = ev.hitter || 'Unknown';
    if (!byHitter.has(name)) byHitter.set(name, []);
    byHitter.get(name).push(ev);
  }
  // If a specific hitter was requested but no events matched the range, ensure we still output a zero row.
  if (hitter && !byHitter.has(hitter)) {
    byHitter.set(hitter, []);
  }

  const out = new Map();
  for (const [name, list] of byHitter.entries()) {
    // BIP subset by result
    const bipEvents = list.filter((e) => isBIP(e.result));
    const BIP = bipEvents.length;

    let gb = 0, ld = 0, fb = 0, pu = 0;
    let evSum = 0, evCount = 0, laSum = 0, laCount = 0, maxEV = -Infinity, hh = 0;

    for (const e of bipEvents) {
      const ev = Number(e.ev);
      const la = Number(e.la);
      if (Number.isFinite(ev)) {
        evSum += ev; evCount++;
        if (ev >= 95) hh++;
        if (ev > maxEV) maxEV = ev;
      }
      if (Number.isFinite(la)) {
        laSum += la; laCount++;
        const band = classifyLABand(la);
        if (band === 'GB') gb++;
        else if (band === 'LD') ld++;
        else if (band === 'FB') fb++;
        else if (band === 'PU') pu++;
      }
    }

    const metrics = {
      BIP,
      GBpct: BIP ? pct1(gb, BIP) : null,
      LDpct: BIP ? pct1(ld, BIP) : null,
      FBpct: BIP ? pct1(fb, BIP) : null,
      PUpct: BIP ? pct1(pu, BIP) : null,
      avgEV: evCount ? round1(evSum / evCount) : null,
      maxEV: maxEV === -Infinity ? null : round1(maxEV),
      avgLA: laCount ? round1(laSum / laCount) : null,
      hardHitPct: BIP ? pct1(hh, BIP) : null,
      // raw counts if needed later
      _raw: { gb, ld, fb, pu, hh, evCount, laCount },
    };

    out.set(name, metrics);
  }

  return out;
}

// Build a flattened events array from a hitters-by-date map
// Expects map in shape: { 'YYYY-MM-DD': { [hitterName]: { atBats: [...] } | [...] | {rows:[...]}} }
export function flattenEventsFromByDateMap(byDate = {}) {
  const all = [];
  for (const date of Object.keys(byDate)) {
    const day = byDate[date] || {};
    for (const hitterName of Object.keys(day)) {
      const mod = day[hitterName];
      let rows = [];
      if (!mod) rows = [];
      else if (Array.isArray(mod)) rows = mod;
      else if (Array.isArray(mod.atBats)) rows = mod.atBats;
      else if (Array.isArray(mod.rows)) rows = mod.rows;
      else if (typeof mod === 'object') {
        // Collect any array fields
        for (const k of Object.keys(mod)) {
          const v = mod[k];
          if (Array.isArray(v)) rows.push(...v);
        }
      }
      for (const r of rows) {
        all.push({
          date,
          hitter: r?.hitter ?? hitterName,
          inning: r?.inning,
          pitchType: r?.pitchType,
          ev: r?.ev,
          la: r?.la,
          result: r?.result,
        });
      }
    }
  }
  return all;
}
