// src/utils/arsenalWrite.js
// Client-side helper to persist pitcher override lists via dev server endpoint
// and provide an immediate in-memory update path for UI responsiveness.

export async function writePitcherOverride({ key, pitches, sourceNote, reviewAction }) {
  if (!key || !Array.isArray(pitches)) {
    throw new Error('key and pitches[] required');
  }
  const body = { key: String(key), pitches: pitches.map(String), sourceNote: sourceNote || '', reviewAction: reviewAction || null };
  const res = await fetch('/api/arsenals/writeOverride', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const msg = await res.text().catch(()=>res.statusText);
    throw new Error(`writeOverride failed: ${res.status} ${msg}`);
  }
  const data = await res.json();
  return data; // { ok, playerId, keyUsed, writtenPath, previousEntry }
}

export function getNoteKeyFor(pidOrName) {
  const s = String(pidOrName || '').trim();
  return 'arsenalNote:' + s.toLowerCase().replace(/\s+/g, '-');
}

export function saveLocalNote(pidOrName, text) {
  try {
    const k = getNoteKeyFor(pidOrName);
    if (text && text.trim()) {
      localStorage.setItem(k, text.trim());
    } else {
      localStorage.removeItem(k);
    }
  } catch {}
}

export function readLocalNote(pidOrName) {
  try {
    const k = getNoteKeyFor(pidOrName);
    return localStorage.getItem(k) || '';
  } catch { return ''; }
}
