// src/lib/arsenalMap.js
// Build a per-pitcher verified arsenal map from the Arsenals page rows.
// rows: entries from src/data/arsenals/firstHalf.json
// return shape: { [playerId]: { allowed: Set<'FF'|'SI'|'CT'|'SL'|'SW'|'CB'|'CH'|'SPL'>, status, statusNote, name, bt } }

export function buildArsenalMap(rows) {
  const arr = Array.isArray(rows) ? rows : [];
  const out = Object.create(null);
  for (const r of arr) {
    const pid = r?.playerId ?? r?.id ?? null;
    if (!pid) continue;
    const pitches = Array.isArray(r?.pitches) ? r.pitches : [];
    const allowed = new Set();
    for (const p of pitches) {
      const code = String(p || '').trim().toUpperCase();
      if (code) allowed.add(code);
    }
    out[pid] = {
      allowed,
      status: r?.status ?? null,
      statusNote: r?.statusNote ?? null,
      name: r?.name ?? null,
      bt: r?.bt ?? null,
    };
  }
  return out;
}
