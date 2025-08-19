// src/lib/hitLogUtils.js
// Derive-safe utilities for the current date slice

export function filterRows(rows, { hitter, inning, q }) {
  let out = rows;
  if (hitter && hitter !== 'All') out = out.filter((r) => r.hitter === hitter);
  if (inning && inning !== 'All') out = out.filter((r) => String(r.inning) === String(inning));
  if (q && q.trim()) {
    const qq = q.trim().toLowerCase();
    out = out.filter(
      (r) =>
        (r.hitter ?? '').toLowerCase().includes(qq) ||
        (r.pitchType ?? '').toLowerCase().includes(qq) ||
        (r.result ?? '').toLowerCase().includes(qq)
    );
  }
  return out;
}

// Quick stats for a set of rows (null-safe)
export function quickStats(rows) {
  const pa = rows.length;
  if (pa === 0) {
    return { pa: 0, contactPct: '—', avgEV: '—', maxEV: '—', p50LA: '—', hardHitPct: '—', bip: 0 };
  }
  const evs = rows.map((r) => Number(r.ev)).filter((n) => Number.isFinite(n));
  const las = rows.map((r) => Number(r.la)).filter((n) => Number.isFinite(n));
  const contactRows = rows.filter((r) => !String(r.result ?? '').toLowerCase().includes('strike'));
  const bipRows = rows.filter((r) => {
    const res = String(r.result ?? '').toLowerCase();
    // very simple BIP proxy: has a batted-ball result keyword
    return /(single|double|triple|home|ground|fly|line|pop|field|error|force|sac|out)/.test(res);
  });
  const hardHit = evs.filter((v) => v >= 95).length;

  const avg = evs.length ? evs.reduce((a, b) => a + b, 0) / evs.length : null;
  const max = evs.length ? Math.max(...evs) : null;
  const p50 = (vals) => {
    if (!vals.length) return null;
    const s = [...vals].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  };

  return {
    pa,
    contactPct: contactRows.length ? ((contactRows.length / pa) * 100).toFixed(1) + '%' : '—',
    avgEV: avg == null ? '—' : avg.toFixed(1),
    maxEV: max == null ? '—' : max.toFixed(1),
    p50LA: las.length ? p50(las).toFixed(0) : '—',
    hardHitPct: evs.length ? ((hardHit / evs.length) * 100).toFixed(1) + '%' : '—',
    bip: bipRows.length,
  };
}

// Chip color by result (pro, muted)
export function resultClass(result = '') {
  const r = String(result).toLowerCase();
  if (/home/.test(r)) return 'chip-hr';
  if (/triple/.test(r)) return 'chip-3b';
  if (/double/.test(r)) return 'chip-2b';
  if (/single/.test(r)) return 'chip-1b';
  if (/walk/.test(r) || /hbp/.test(r)) return 'chip-walk';
  if (/strike/.test(r)) return 'chip-k';
  if (/ground/.test(r)) return 'chip-gb';
  if (/fly|pop/.test(r)) return 'chip-fb';
  return 'chip-neutral';
}
