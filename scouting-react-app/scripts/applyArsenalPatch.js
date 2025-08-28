#!/usr/bin/env node
/**
 * scripts/applyArsenalPatch.js
 *
 * Apply a proposals patch to firstHalf.json or merge overrides updates.
 *
 * Usage:
 *  - Apply patch of suggested arsenals:
 *      node scripts/applyArsenalPatch.js --patch path/to/patch.json
 *  - Merge overrides updates (e.g., ignore flags):
 *      node scripts/applyArsenalPatch.js --merge-overrides path/to/overrides-update.json
 */

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = { patch: null, mergeOverrides: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--patch') args.patch = argv[++i];
    else if (a === '--merge-overrides') args.mergeOverrides = argv[++i];
  }
  return args;
}

function readJson(abs, fallback) {
  try {
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

function writeJson(abs, obj) {
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, JSON.stringify(obj, null, 2));
}

function applyPatch(patchPath) {
  const firstHalfPath = path.join('src', 'data', 'arsenals', 'firstHalf.json');
  const firstHalf = readJson(firstHalfPath, []);
  const patch = readJson(patchPath, {});

  const byId = new Map(firstHalf.map(p => [p.playerId, p]));
  for (const [playerId, payload] of Object.entries(patch)) {
    const row = byId.get(playerId);
    if (!row) {
      // Create a new entry if player not found
      byId.set(playerId, { playerId, name: playerId, team: '', position: '', pitches: payload.suggested || [] });
      continue;
    }
    row.pitches = Array.isArray(payload.suggested) ? payload.suggested : row.pitches;
    row.status = 'verified';
    const noteBits = [];
    if (Array.isArray(payload.notes) && payload.notes.length) noteBits.push(`notes: ${payload.notes.join('; ')}`);
    if (payload.confidence != null) noteBits.push(`conf: ${payload.confidence}`);
    if (payload.support && payload.support.games != null) noteBits.push(`games: ${payload.support.games}`);
    row.statusNote = `Batch apply ${new Date().toISOString()} ${noteBits.join(' | ')}`;
  }

  const merged = Array.from(byId.values());
  writeJson(firstHalfPath, merged);
  console.log(`Updated ${firstHalfPath} with ${Object.keys(patch).length} player(s).`);
}

function mergeOverrides(updatePath) {
  const overridesPath = path.join('src', 'data', 'arsenals', 'overrides.json');
  const existing = readJson(overridesPath, {});
  const update = readJson(updatePath, {});

  for (const [pid, val] of Object.entries(update)) {
    existing[pid] = { ...(existing[pid] || {}), ...val };
  }
  writeJson(overridesPath, existing);
  console.log(`Merged overrides into ${overridesPath}.`);
}

function main() {
  const { patch, mergeOverrides: mo } = parseArgs(process.argv);
  if (!patch && !mo) {
    console.error('Specify --patch or --merge-overrides');
    process.exit(1);
  }
  if (patch) applyPatch(patch);
  if (mo) mergeOverrides(mo);
}

if (require.main === module) main();
