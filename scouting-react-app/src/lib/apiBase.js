// dev + prod safe default: same-origin '/api' unless overridden
export const API_BASE = (process.env.REACT_APP_API_BASE || '/api').trim();
