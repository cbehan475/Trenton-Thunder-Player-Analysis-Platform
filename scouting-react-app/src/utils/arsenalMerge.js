// src/utils/arsenalMerge.js
// Logs-first arsenal merge with optional verified overrides and needsReview flag.

import { normalizeCode } from './pitchAggregates.js';
// Local slugify to avoid cross-imports from store in CLI/server contexts
function slugifyId(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * @typedef {Object} MergedArsenal
 * @property {string} pitcherId
 * @property {string[]} pitches
 * @property {boolean} needsReview
 * @property {{
 *  fromLogs: string[]
 *  fromOverride?: string[]
 *  missingInLogs: string[]
 *  extraInLogs: string[]
 * }} details
 */

/**
 * Collect unique normalized pitch codes from logs for a given pitcher id/name.
 * - Matches on exact pitcher name OR slugified name to provided pitcherId for robustness.
 * - Normalizes pitch labels to internal codes via normalizeCode (e.g., "4-Seam" -> "FF").
 *
 * @param {string} pitcherId
 * @param {Array<any>} logs flat array of pitch events
 * @returns {string[]} unique pitch codes from logs (sorted A→Z)
 */
export function getPitchTypesFromLogs(pitcherId, logs) {
  if (!logs || !Array.isArray(logs)) return [];
  const pid = slugifyId(pitcherId);
  const codes = new Set();
  for (const e of logs) {
    const name = e?.pitcher != null ? String(e.pitcher) : '';
    if (!name) continue;
    if (name === pitcherId || slugifyId(name) === pid) {
      const raw = e?.pitchType ?? e?.type ?? e?.pitch ?? e?.pitch_name ?? e?.pitchClass ?? null;
      const code = normalizeCode(raw);
      if (code) codes.add(code);
    }
  }
  return Array.from(codes).sort();
}

/**
 * Merge logs-first arsenal with optional verified overrides and disagreement flag.
 *
 * Rules:
 * - fromLogs = unique pitch codes from logs for that pitcherId
 * - fromOverride = overrides[pitcherId] if present, else undefined (values normalized to codes)
 * - pitches = fromOverride ?? fromLogs
 * - missingInLogs = (fromOverride ?? []).filter(p => !fromLogs.includes(p))
 * - extraInLogs = fromLogs.filter(p => !(fromOverride ?? fromLogs).includes(p))
 * - needsReview = true if override exists and (missingInLogs.length > 0 || extraInLogs.length > 0)
 * - Stability: if override exists, preserve its order (after normalization & de-dupe); else sort logs A→Z
 *
 * @param {string} pitcherId
 * @param {Array<any>} logs flat array of pitch events
 * @param {Record<string, string[]>} overrides map of pitcherId -> array of pitch labels/codes
 * @returns {MergedArsenal}
 */
export function getMergedArsenalForPitcher(pitcherId, logs, overrides) {
  const fromLogs = getPitchTypesFromLogs(pitcherId, logs);

  // Prepare override list if provided; normalize to codes and de-dupe, preserve order.
  const rawOv = (overrides && (overrides[pitcherId] || overrides[slugifyId(pitcherId)])) || undefined;
  const fromOverride = Array.isArray(rawOv)
    ? rawOv.reduce((acc, item) => {
        const code = normalizeCode(item);
        if (code && !acc.includes(code)) acc.push(code);
        return acc;
      }, [])
    : undefined;

  const pitches = fromOverride ? fromOverride.slice() : fromLogs.slice().sort();
  const missingInLogs = (fromOverride || []).filter((p) => !fromLogs.includes(p));
  const extraInLogs = fromLogs.filter((p) => !(fromOverride || fromLogs).includes(p));
  const needsReview = Boolean(fromOverride && (missingInLogs.length > 0 || extraInLogs.length > 0));

  /** @type {MergedArsenal} */
  const result = {
    pitcherId: String(pitcherId),
    pitches,
    needsReview,
    details: {
      fromLogs,
      fromOverride,
      missingInLogs,
      extraInLogs,
    },
  };
  return result;
}
