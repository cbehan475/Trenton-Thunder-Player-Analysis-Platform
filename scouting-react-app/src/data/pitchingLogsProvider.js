// src/data/pitchingLogsProvider.js
// Returns all first-half pitch logs as a flat array using the existing manifest + adapter.

import ALL_PITCH_EVENTS from './logs/pitchingIndex.js';

/**
 * Shape of LogPitch (minimum):
 * {
 *   pitcherId: string,
 *   pitcherName: string,
 *   pitchType: string,
 *   velo: number,
 *   ivb: number,
 *   hb: number, // absolute inches
 *   ts?: string,
 * }
 */
export async function getAllFirstHalfLogs() {
  // ALL_PITCH_EVENTS is already flattened from manifest on import.
  // Adapt to the minimal shape; prefer existing ids/fields if present.
  const out = [];
  for (const e of ALL_PITCH_EVENTS) {
    if (!e) continue;
    const pitcherName = e.pitcher || e.pitcherName || e.name || '';
    if (!pitcherName) continue;
    const rawId = e.pitcherId || e.pitcher_id || e.pid || null;
    const pitcherId = rawId ? String(rawId) : String(pitcherName).trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const pitchType = e.pitchType || e.type || e.pitch || e.pitch_name || e.pitchClass || 'Unknown';
    const velo = toNum(e.velo ?? e.velocity ?? e.v ?? e.speed);
    const ivb = toNum(e.ivb ?? e.vert ?? e.rise);
    const hb = Math.abs(toNum(e.hb ?? e.horz ?? e.run));
    const ts = e.ts || e.time || e.timestamp || e.date || undefined;

    out.push({ pitcherId, pitcherName, pitchType, velo, ivb, hb, ts });
  }
  return out;
}

function toNum(v) {
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : null;
}
