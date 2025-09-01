#!/usr/bin/env node
// scripts/auditArsenals.mjs
// Node ESM script to audit merged arsenals vs overrides using existing utilities.

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve project-relative import paths
const projRoot = path.resolve(__dirname, '..');

async function main() {
  // Dynamic imports from src (ESM modules)
  const [arsenalMergeMod, logsMod, arsenalsMod] = await Promise.all([
    import(path.join(projRoot, 'src', 'utils', 'arsenalMerge.js')),
    import(path.join(projRoot, 'src', 'data', 'logs', 'pitchingIndex.js')),
    import(path.join(projRoot, 'src', 'data', 'pitcherArsenals.js')),
  ]);

  const { getMergedArsenalForPitcher } = arsenalMergeMod;
  const ALL_PITCH_EVENTS = logsMod.default;
  const slugifyId = (s) => String(s || '').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const pitcherArsenals = arsenalsMod.default || [];

  const overridesMap = Object.fromEntries(
    (Array.isArray(pitcherArsenals) ? pitcherArsenals : []).map((p) => [
      String(p.playerId ?? slugifyId(p.name)),
      Array.isArray(p.arsenal) ? p.arsenal : [],
    ])
  );

  let needs = 0;
  for (const row of pitcherArsenals) {
    const idKey = String(row.playerId ?? slugifyId(row.name));
    const pidForLogs = String(row.name || row.playerId);
    const merged = getMergedArsenalForPitcher(pidForLogs, ALL_PITCH_EVENTS, overridesMap);
    if (merged?.needsReview) {
      needs++;
      const d = merged.details || {};
      const name = row.name || pid;
      const fromOv = (d.fromOverride || []).join(' ');
      const fromLg = (d.fromLogs || []).join(' ');
      const missing = (d.missingInLogs || []).join(' ');
      const extra = (d.extraInLogs || []).join(' ');
      console.log(`[NEEDS REVIEW] ${name} | Override: ${fromOv} | Logs: ${fromLg} | Missing in logs: ${missing || '-'} | Extra in logs: ${extra || '-'}`);
    }
  }

  if (needs === 0) {
    console.log('All pitchers verified. No reviews needed.');
    process.exit(0);
  } else {
    console.log(`\nTotal needing review: ${needs}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error('Audit failed:', e?.stack || String(e));
  process.exit(2);
});
