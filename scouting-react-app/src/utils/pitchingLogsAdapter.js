/**
 * Loads and normalizes pitching logs from src/data/logs/pitching-*.js
 * Output per entry: { date, pitcher, inning, pitchType, ivb, hb }
 * Then provides aggregate helpers for usage% and avg IVB/HB.
 */

// CRA/Webpack-friendly context import:
const ctx = require.context('../data/logs', false, /^\.\/pitching-\d{4}-\d{2}-\d{2}\.js$/);

function coerceNum(v) {
  if (v == null) return null;
  const n = typeof v === 'string' ? parseFloat(v) : v;
  return Number.isFinite(n) ? n : null;
}

function normPitchType(raw) {
  if (!raw) return 'UNK';
  const s = String(raw).trim().toLowerCase();
  // Broader, includes-based normalization to catch variants
  const has = (w) => s.includes(w);
  if (s === 'fb' || s === 'ff' || has('fastball') || has('four seam') || has('four-seam') || s === 'fourseam' || s === 'heater') return 'FB';
  if (s === 'snk' || s === '2s' || has('sinker') || has('two-seam') || has('two seam') || s === '2-seam') return 'SNK';
  if (s === 'ct' || has('cutter') || has('cut')) return 'CUT';
  if (s === 'sl' || s === 'slider') return 'SL';
  if (s === 'sw' || has('sweep')) return 'SL/SW';
  if (s === 'cb' || has('curve') || has('knuckle-curve') || s === 'kc') return 'CB';
  if (s === 'ch' || s === 'chg' || has('change')) return 'CH';
  return raw.toString().toUpperCase();
}

function pluck(obj, keys) {
  for (const k of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, k)) return obj[k];
  }
  return undefined;
}

function flattenModule(mod, dateGuess) {
  const items = [];
  const root = mod && (mod.default ?? mod);

  // Primary: repository shape { "Pitcher Name": { inningNumber: [ { pitch… }, … ] }, … }
  if (root && typeof root === 'object' && !Array.isArray(root)) {
    for (const [pitcherName, innings] of Object.entries(root)) {
      if (!innings || typeof innings !== 'object' || Array.isArray(innings)) continue;
      for (const [inningStr, arr] of Object.entries(innings)) {
        if (!Array.isArray(arr)) continue;
        const inningNum = Number(inningStr);
        for (const row of arr) {
          if (row && typeof row === 'object') {
            items.push({ ...row, pitcher: pitcherName, inning: Number.isFinite(inningNum) ? inningNum : inningStr, __dateGuess: dateGuess });
          }
        }
      }
    }
    if (items.length) return items;
  }

  // Fallbacks: arrays on default or named exports, or arrays nested within named export objects
  const candidates = [];
  if (Array.isArray(mod?.default)) candidates.push(mod.default);
  for (const [k, v] of Object.entries(mod || {})) {
    if (k === 'default') continue;
    if (Array.isArray(v)) candidates.push(v);
  }
  for (const [k, v] of Object.entries(mod || {})) {
    if (k === 'default') continue;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      for (const vv of Object.values(v)) {
        if (Array.isArray(vv)) candidates.push(vv);
      }
    }
  }
  for (const arr of candidates) {
    for (const row of arr) {
      if (row && typeof row === 'object') {
        items.push({ ...row, __dateGuess: dateGuess });
      }
    }
  }
  return items;
}

export function loadAllPitchingLogs() {
  const rows = [];
  ctx.keys().forEach((key) => {
    // key is like "./pitching-2025-06-06.js"
    const m = key.match(/pitching-(\d{4}-\d{2}-\d{2})/);
    const dateStr = m ? m[1] : null;
    let mod;
    try {
      mod = ctx(key);
    } catch (e) {
      // ignore broken modules
      return;
    }
    const items = flattenModule(mod, dateStr);

    for (const r of items) {
      const pitcher = pluck(r, ['pitcher', 'Pitcher', 'name', 'hitter', 'player']) || '';
      const inning  = pluck(r, ['inning', 'Inning', 'ip']) ?? null;

      const rawType = pluck(r, ['pitchType', 'type', 'pitch', 'tag']);
      const pitchType = normPitchType(rawType);

      const ivb = coerceNum(pluck(r, ['ivb', 'IVB', 'inducedVerticalBreak', 'verticalBreak', 'vb']));
      const hb  = coerceNum(pluck(r, ['hb', 'HB', 'horizontalBreak', 'hbreak', 'hbearing', 'hbearingIn']));
      const px  = coerceNum(pluck(r, ['px', 'plate_x', 'x']));
      const pz  = coerceNum(pluck(r, ['pz', 'plate_z', 'z']));
      const zoneVal = coerceNum(pluck(r, ['zone', 'Zone']));

      rows.push({
        date: r.__dateGuess || null,
        pitcher: String(pitcher).trim(),
        inning: inning,
        pitchType,
        ivb,
        hb,
        px: px ?? null,
        pz: pz ?? null,
        zone: Number.isFinite(zoneVal) ? Math.round(zoneVal) : null,
      });
    }
  });
  return rows;
}

export function getPitcherRows(pitcherName) {
  const all = loadAllPitchingLogs();
  const nameLc = String(pitcherName || '').trim().toLowerCase();
  return all.filter(r => r.pitcher && r.pitcher.toLowerCase() === nameLc);
}

export function listPitchers() {
  const all = loadAllPitchingLogs();
  const seen = new Set();
  const names = [];
  for (const r of all) {
    if (!r.pitcher) continue;
    const key = r.pitcher.trim().toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      names.push(r.pitcher.trim());
    }
  }
  // Sort by last, first if comma present; otherwise by name
  names.sort((a,b)=>{
    const na = a.includes(',') ? a.split(',')[0].trim() : a;
    const nb = b.includes(',') ? b.split(',')[0].trim() : b;
    return na.localeCompare(nb);
  });
  return names;
}
export function summarizeUsageAndShape(pitcherName) {
  const rows = getPitcherRows(pitcherName);
  const byPitch = new Map();

  for (const r of rows) {
    const key = r.pitchType || 'UNK';
    if (!byPitch.has(key)) byPitch.set(key, { count: 0, ivbSum: 0, ivbN: 0, hbSum: 0, hbN: 0 });
    const agg = byPitch.get(key);
    agg.count += 1;
    if (typeof r.ivb === 'number') { agg.ivbSum += r.ivb; agg.ivbN += 1; }
    if (typeof r.hb === 'number')  { agg.hbSum  += r.hb;  agg.hbN  += 1; }
  }

  const total = Array.from(byPitch.values()).reduce((a, b) => a + b.count, 0) || 1;

  const usage = [];
  const ivbHb = [];

  for (const [pitch, agg] of byPitch.entries()) {
    const pct = Math.round((agg.count / total) * 1000) / 10; // one decimal
    usage.push({ pitch, pct });
    ivbHb.push({
      pitch,
      ivb: agg.ivbN ? Math.round((agg.ivbSum / agg.ivbN) * 10) / 10 : 0,
      hb:  agg.hbN  ? Math.round((agg.hbSum  / agg.hbN)  * 10) / 10 : 0,
    });
  }

  // Order: FB, SNK, CUT, SL/SW, SL, CB, CH, others
  const order = ['FB','SNK','CUT','SL/SW','SL','CB','CH'];
  const idx = (p) => {
    const i = order.indexOf(p.pitch || p);
    return i === -1 ? 999 : i;
  };
  usage.sort((a,b)=> idx(a)-idx(b) || b.pct - a.pct);
  ivbHb.sort((a,b)=> idx(a)-idx(b));

  return { usage, ivbHb, totalPitches: rows.length, hasData: rows.length > 0 };
}

// --- Command & Miss Pattern ---
// Accepts multiple shapes your logs might use:
//  - zone: 1..9 (classic 3×3), or 0/10+ for out of zone (ignored in grid)
//  - px/pz OR plate_x/plate_z OR x/z numeric locations (feet)
// We approximate Arm/Glove using px sign (positive=glove, negative=arm) — good enough without handedness fields.
function num(v) { const n = typeof v === 'string' ? parseFloat(v) : v; return Number.isFinite(n) ? n : null; }
function getPx(obj) { return num(obj.px ?? obj.plate_x ?? obj.x); }
function getPz(obj) { return num(obj.pz ?? obj.plate_z ?? obj.z); }
function getZone(obj) { const z = num(obj.zone ?? obj.Zone); return Number.isInteger(z) ? z : null; }

// Map px/pz to a 3x3 bin index (row 0..2 top->bottom, col 0..2 left->right from catcher view)
// Bounds chosen to be reasonable defaults; adjust if your data uses different scales.
const X_BOUNDS = [-0.85, -0.28, 0.28, 0.85];
const Z_BOUNDS = [  3.50,  2.70, 2.30, 1.50]; // top->bottom
function binFromPxPz(px, pz) {
  if (px == null || pz == null) return null;
  const col = px < X_BOUNDS[1] ? 0 : px <= X_BOUNDS[2] ? 1 : 2;
  const row = pz > Z_BOUNDS[1] ? 0 : pz >= Z_BOUNDS[2] ? 1 : 2;
  return { row, col };
}

// Map 1..9 zone codes (1=high in?) into 3x3 indices.
// We’ll accept the common "1..9 = top-left to bottom-right" mapping:
// 1 2 3
// 4 5 6
// 7 8 9
function binFromZoneCode(z) {
  if (!z || z < 1 || z > 9) return null;
  const row = Math.floor((z - 1) / 3);       // 0..2
  const col = (z - 1) % 3;                   // 0..2
  return { row, col };
}

export function summarizeCommandAndMiss(pitcherName) {
  const rows = getPitcherRows(pitcherName);
  const grid = [ [0,0,0], [0,0,0], [0,0,0] ];
  let totalInGrid = 0;
  let up=0, down=0, arm=0, glove=0;

  for (const r of rows) {
    const zc = getZone(r);
    const px = getPx(r);
    const pz = getPz(r);

    // 3x3 bin
    const bin = zc ? binFromZoneCode(zc) : binFromPxPz(px, pz);
    if (bin) {
      grid[bin.row][bin.col] += 1;
      totalInGrid += 1;
    }
    // Miss summary (approx): Up/Down via pz; Arm/Glove via px
    if (pz != null) {
      if (pz > 2.7) up++; else if (pz < 2.3) down++;
    }
    if (px != null) {
      if (px > 0) glove++; else if (px < 0) arm++;
    }
  }

  const pct = (n, d) => d ? Math.round((n / d) * 100) : 0;
  // Normalize grid to percents (of pitches that landed in 1..9 or computed bins)
  const gridPct = grid.map(row => row.map(n => pct(n, totalInGrid)));
  // Edge zones are corners and horizontals: indices (0,0),(0,2),(1,0),(1,2),(2,0),(2,2)
  let edgeCount = 0;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if ((r === 0 && c === 0) || (r === 0 && c === 2) || (r === 1 && c === 0) || (r === 1 && c === 2) || (r === 2 && c === 0) || (r === 2 && c === 2)) {
        edgeCount += grid[r][c];
      }
    }
  }
  const miss = {
    up: pct(up, up+down || 1),
    down: pct(down, up+down || 1),
    glove: pct(glove, glove+arm || 1),
    arm: pct(arm, glove+arm || 1),
    sample: rows.length,
  };
  const edgePct = pct(edgeCount, totalInGrid);
  const inZonePct = pct(totalInGrid, rows.length || 1);
  return { gridPct, miss, edgePct, inZonePct, hasData: rows.length > 0, inGrid: totalInGrid };
}
