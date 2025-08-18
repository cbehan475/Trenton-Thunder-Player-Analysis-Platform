// src/lib/validateBenchmarks.js
// Non-throwing validation for pitching benchmarks dataset.
// Returns an array of human-readable warning strings.

export function validateBenchmarks(benchmarksObj) {
  const warnings = [];
  if (!benchmarksObj || typeof benchmarksObj !== 'object') {
    warnings.push('Benchmarks object is missing or not an object.');
    return warnings;
  }

  const levels = Object.keys(benchmarksObj);
  if (levels.length === 0) {
    warnings.push('No levels found in benchmarks dataset.');
  }

  const expectedPitchKeys = ['fourSeam','sinker','slider','curveball','changeup','cutter','sweeper'];

  for (const level of levels) {
    const levelBlock = benchmarksObj[level];
    if (!levelBlock || typeof levelBlock !== 'object') {
      warnings.push(`[${level}] Missing or invalid level block.`);
      continue;
    }

    // Gentle warning if a whole pitch type is missing at a level
    for (const pk of expectedPitchKeys) {
      if (!(pk in levelBlock)) {
        warnings.push(`[${level}] Missing pitch type: ${pk}`);
      }
    }

    for (const [pitchType, data] of Object.entries(levelBlock)) {
      if (!data || typeof data !== 'object') {
        warnings.push(`[${level} • ${pitchType}] Missing data object.`);
        continue;
      }

      const { velo, ivb, hb } = data;

      // velo must be [min,max] with min <= max if present
      if (velo != null) {
        if (!Array.isArray(velo) || velo.length !== 2) {
          warnings.push(`[${level} • ${pitchType}] velo must be [min,max] array when provided.`);
        } else {
          const [min, max] = velo;
          if (typeof min !== 'number' || typeof max !== 'number') {
            warnings.push(`[${level} • ${pitchType}] velo bounds must be numbers.`);
          } else if (min > max) {
            warnings.push(`[${level} • ${pitchType}] velo min (${min}) > max (${max}).`);
          }
        }
      }

      // hb must be >= 0 if present
      if (hb != null) {
        if (typeof hb !== 'number') {
          warnings.push(`[${level} • ${pitchType}] hb must be a number when provided.`);
        } else if (hb < 0) {
          warnings.push(`[${level} • ${pitchType}] hb is negative (${hb}); expected absolute inches (>= 0).`);
        }
      }

      // ivb signed is OK; if present must be a number
      if (ivb != null && typeof ivb !== 'number') {
        warnings.push(`[${level} • ${pitchType}] ivb must be a number when provided (can be negative).`);
      }
    }
  }

  return warnings;
}
