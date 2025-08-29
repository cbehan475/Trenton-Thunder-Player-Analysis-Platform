export function safeKey(...parts) {
  return parts
    .flatMap(p => (Array.isArray(p) ? p : [p]))
    .map(x => (x == null ? '' : String(x)))
    .map(s => s.trim())
    .map(s => (s === '' ? '_' : s))
    .join('-');
}
