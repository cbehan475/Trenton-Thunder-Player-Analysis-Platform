// Reconciliation utilities for pitcher override keys
// NOTE: This module can run in two environments:
// - Node (CLI): uses fs to update files atomically
// - Browser (dev UI): calls a dev-only server API to perform the write

/* eslint-disable no-useless-escape */
export function slugify(str) {
  if (!str) return '';
  return String(str).toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function levenshtein(a, b) {
  a = String(a || '');
  b = String(b || '');
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

// logs: ALL_PITCH_EVENTS-style array; overrides: pitcherArsenals array
export function findNameMismatches({ logs, overrides }) {
  const out = [];
  const byLogName = new Map(); // nameFromLogs -> set(playerIdFromLogs)
  const byPidToName = new Map(); // pid -> nameFromLogs (first seen)

  for (const e of (Array.isArray(logs) ? logs : [])) {
    const name = e?.pitcher ? String(e.pitcher) : '';
    const pid = e?.playerId != null ? String(e.playerId) : null;
    if (!name) continue;
    if (!byLogName.has(name)) byLogName.set(name, new Set());
    if (pid) byLogName.get(name).add(pid);
    if (pid && !byPidToName.has(pid)) byPidToName.set(pid, name);
  }

  for (const ov of (Array.isArray(overrides) ? overrides : [])) {
    const playerId = ov?.playerId != null ? String(ov.playerId) : undefined;
    const overrideName = String(ov?.name || '');
    const overrideKey = String(playerId ?? slugify(overrideName));

    const fromLogsName = playerId ? byPidToName.get(playerId) : undefined;
    if (!fromLogsName) {
      // No logs pid match; try suggest by name distance
      let best = { nameFromLogs: '', playerIdFromLogs: undefined, distance: Infinity };
      for (const [nm, pids] of byLogName.entries()) {
        const d = levenshtein(slugify(nm), slugify(overrideName));
        if (d < best.distance) best = { nameFromLogs: nm, playerIdFromLogs: Array.from(pids)[0], distance: d };
      }
      if (best.distance <= 2) {
        out.push({ overrideKey, overrideName, playerId, suggestedMatch: best, reason: 'No exact pid match; close name match found' });
      } else {
        out.push({ overrideKey, overrideName, playerId, suggestedMatch: null, reason: 'No matching pid in logs' });
      }
      continue;
    }

    // We have a logs name for this pid; compare slugs
    const slugOv = slugify(overrideName);
    const slugLog = slugify(fromLogsName);
    if (slugOv !== slugLog) {
      const distance = levenshtein(slugOv, slugLog);
      out.push({
        overrideKey,
        overrideName,
        playerId,
        suggestedMatch: { nameFromLogs: fromLogsName, distance, playerIdFromLogs: playerId },
        reason: 'Name slug mismatch vs logs',
      });
    }
  }

  return out;
}

// Attempt to detect Node (CLI) environment
function isNode() {
  return typeof process !== 'undefined' && process.versions && process.versions.node;
}

// Node-side implementation: update src/data/pitcherArsenals.js atomically
async function fixOverrideKeyNode({ fromKey, toKey, playerId }) {
  const fs = await import('fs');
  const fsp = await import('fs/promises');
  const path = await import('path');
  const root = process.cwd();
  const filePath = path.resolve(root, 'scouting-react-app/src/data/pitcherArsenals.js');
  const tmpPath = filePath + '.tmp';
  const date = new Date().toISOString().split('T')[0];

  const text = await fsp.readFile(filePath, 'utf8');
  const lines = text.split(/\r?\n/);
  let changed = false;
  const newLines = lines.map((line) => {
    // Replace object key (playerId or slug) in the array of objects
    // We match: playerId: "fromKey" OR slug fallback inside comment, but primary is playerId field
    if (line.includes(`playerId: ${JSON.stringify(String(fromKey))}`)) {
      changed = true;
      return line.replace(
        `playerId: ${JSON.stringify(String(fromKey))}`,
        `playerId: ${JSON.stringify(String(toKey))}`
      ) + ` // key fixed ${date}`;
    }
    return line;
  });

  if (!changed) {
    // Try replacing slug-based keys (if any custom format)
    const pattern = new RegExp(`slug:\\s*${JSON.stringify(String(fromKey)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
    for (let i = 0; i < newLines.length; i++) {
      if (pattern.test(newLines[i])) {
        newLines[i] = newLines[i].replace(pattern, `slug: ${JSON.stringify(String(toKey))}`) + ` // key fixed ${date}`;
        changed = true;
        break;
      }
    }
  }

  if (!changed) return { changed: false, message: 'Key not found' };

  await fsp.writeFile(tmpPath, newLines.join('\n'));
  await fsp.rename(tmpPath, filePath);
  return { changed: true, message: 'Key updated', filePath };
}

// Browser-side: call dev-only API
async function fixOverrideKeyApi({ fromKey, toKey, playerId }) {
  const res = await fetch('http://localhost:5001/api/arsenals/fixOverrideKey', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fromKey: String(fromKey), toKey: String(toKey), playerId: playerId != null ? String(playerId) : undefined }),
  });
  if (!res.ok) throw new Error('Fix API failed');
  return res.json();
}

export async function fixOverrideKey({ fromKey, toKey, playerId }) {
  if (isNode()) {
    return await fixOverrideKeyNode({ fromKey, toKey, playerId });
  }
  return await fixOverrideKeyApi({ fromKey, toKey, playerId });
}
