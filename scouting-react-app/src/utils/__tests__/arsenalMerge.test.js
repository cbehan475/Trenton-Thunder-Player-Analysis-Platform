// src/utils/__tests__/arsenalMerge.test.js
import { getMergedArsenalForPitcher } from '../../utils/arsenalMerge.js';
import { normalizeCode } from '../../utils/pitchAggregates.js';
import { slugifyId } from '../../lib/scoutingReportsStore.js';

// Small helper fixtures
function buildLogs({ name, events }) {
  // events: array of { pitchType } or strings
  const out = [];
  for (const e of events) {
    if (typeof e === 'string') out.push({ pitcher: name, pitchType: e });
    else out.push({ pitcher: name, ...(e || {}) });
  }
  return out;
}

function buildOverrides({ key, codes }) {
  return { [String(key)]: codes.slice() };
}

describe('arsenalMerge.getMergedArsenalForPitcher()', () => {
  test('logs-first with override ordering', () => {
    const name = 'John Doe';
    const pid = name; // util matches logs by pitcherId string or its slug; pass the name here
    const logs = [
      ...buildLogs({ name, events: ['FF', 'SL', 'FF', 'CH'] }),
    ];
    // Override exists and should define final order (even if logs have different order)
    const overrides = buildOverrides({ key: pid, codes: ['CH', 'FF', 'SL'] });
    const merged = getMergedArsenalForPitcher(pid, logs, overrides);
    expect(merged.pitches).toEqual(['CH', 'FF', 'SL']);
    expect(merged.details.fromLogs.sort()).toEqual(['CH', 'FF', 'SL']);

    // If no override, logs list sorted A->Z by util
    const mergedNoOv = getMergedArsenalForPitcher(pid, logs, {});
    expect(mergedNoOv.pitches).toEqual(['CH', 'FF', 'SL']);
    expect(mergedNoOv.needsReview).toBe(false);
  });

  test('needsReview true when override differs (missing/extra)', () => {
    const name = 'Jane Smith';
    const pid = name;
    const logs = [
      ...buildLogs({ name, events: ['FF', 'SL'] }),
    ];
    // Override includes CH (missing in logs) and omits SL (extra in logs)
    const overrides = buildOverrides({ key: pid, codes: ['FF', 'CH'] });
    const merged = getMergedArsenalForPitcher(pid, logs, overrides);
    expect(merged.needsReview).toBe(true);
    expect(merged.details.missingInLogs).toEqual(['CH']);
    expect(merged.details.extraInLogs).toEqual(['SL']);
  });

  test('needsReview true when same label resolves to different normalized codes', () => {
    const name = 'Alias Case';
    const pid = name;
    // Logs use alias that normalizes to SI
    const logs = buildLogs({ name, events: ['Two-Seam', 'SI'] });
    // Override uses FT which normalizes to SI as well; no diff should result.
    const overrides1 = buildOverrides({ key: pid, codes: ['FT', 'SI'] });
    const merged1 = getMergedArsenalForPitcher(pid, logs, overrides1);
    expect(merged1.needsReview).toBe(false);

    // If override uses a code that normalizes differently (e.g., CT) while logs show SI
    const overrides2 = buildOverrides({ key: pid, codes: ['CT', 'SI'] });
    const merged2 = getMergedArsenalForPitcher(pid, logs, overrides2);
    // CT not in logs; should flag review with CT in missingInLogs
    expect(merged2.needsReview).toBe(true);
    expect(merged2.details.missingInLogs).toContain('CT');
    expect(merged2.details.fromOverride).toContain('CT');
  });

  test('slug mapping: favor exact name key over slug(name)', () => {
    const name = 'José Álvarez';
    const pid = name; // pass name as identifier
    const slug = slugifyId(name);

    const logs = [
      ...buildLogs({ name, events: ['FF', 'CH'] }),
    ];

    // Only override under slug key -> should be found
    const overrides1 = buildOverrides({ key: slug, codes: ['FF'] });
    const merged1 = getMergedArsenalForPitcher(pid, logs, overrides1);
    expect(merged1.pitches).toEqual(['FF']);

    // If both exact name and slug keys exist, exact name takes precedence
    const overrides2 = { ...overrides1, ...buildOverrides({ key: pid, codes: ['CH'] }) };
    const merged2 = getMergedArsenalForPitcher(pid, logs, overrides2);
    expect(merged2.pitches).toEqual(['CH']);
  });

  test('mergedDetails buckets include Override/Logs/Missing/Extra', () => {
    const name = 'Case Buckets';
    const pid = 'b-1';
    const logs = buildLogs({ name, events: ['FF', 'SL'] });
    const overrides = buildOverrides({ key: pid, codes: ['FF', 'CH'] });
    const merged = getMergedArsenalForPitcher(pid, logs, overrides);

    expect(Array.isArray(merged.details.fromLogs)).toBe(true);
    expect(Array.isArray(merged.details.fromOverride)).toBe(true);
    expect(Array.isArray(merged.details.missingInLogs)).toBe(true);
    expect(Array.isArray(merged.details.extraInLogs)).toBe(true);
  });
});
