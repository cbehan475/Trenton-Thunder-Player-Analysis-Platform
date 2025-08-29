// Guarded WebSocket initializer for dev
// Reads REACT_APP_WS_ENABLED to decide whether to connect
const ENABLE_WS = process.env.REACT_APP_WS_ENABLED === 'true';

export function initSocket() {
  if (!ENABLE_WS) return null;
  try {
    const origin = window.location.origin.replace('http', 'ws');
    const ws = new WebSocket(`${origin}/ws`);
    // Add handlers as needed
    // ws.onopen = () => console.debug('WS connected');
    // ws.onmessage = (evt) => { /* ... */ };
    // ws.onerror = (err) => console.error('WS error', err);
    // ws.onclose = () => console.debug('WS closed');
    return ws;
  } catch (e) {
    // Defensive: never crash app due to WS
    // console.error('WS init failed:', e);
    return null;
  }
}
