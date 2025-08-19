/* scripts/genPitchingAggregates.mjs
 * Generate a frozen JSON snapshot of first-half pitcher aggregates from logs.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Import the aggregator (uses manifest + index to read logs)
import { buildPitchersSeasonAggregates } from '../src/lib/aggregatePitchers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const data = buildPitchersSeasonAggregates();
  // Stable order: sort by pitcher last name
  data.sort((a, b) => {
    const al = String(a?.name || '').trim().split(/\s+/).pop().toLowerCase();
    const bl = String(b?.name || '').trim().split(/\s+/).pop().toLowerCase();
    return al.localeCompare(bl);
  });

  const outPath = resolve(__dirname, '../src/data/pitchersSeasonAggregates.json');
  await writeFile(outPath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`[genPitchingAggregates] Wrote ${data.length} pitchers -> ${outPath}`);
}

main().catch((err) => {
  console.error('[genPitchingAggregates] Failed:', err);
  process.exitCode = 1;
});
