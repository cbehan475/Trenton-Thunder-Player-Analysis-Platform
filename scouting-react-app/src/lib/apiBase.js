// In dev we talk directly to 4001; in prod we use relative '/api'
export const API_BASE =
  process.env.NODE_ENV === 'development'
    ? (process.env.REACT_APP_API_BASE || 'http://localhost:4001/api')
    : '/api';
