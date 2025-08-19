// src/lib/formatters.js
export const fmt = {
  mph: (v) => (v == null || Number.isNaN(Number(v)) ? '—' : `${Number(v).toFixed(1)}`),
  deg: (v) => (v == null || Number.isNaN(Number(v)) ? '—' : `${Number(v).toFixed(0)}`),
  in1: (v) => (v == null || Number.isNaN(Number(v)) ? '—' : `${Number(v).toFixed(1)}`),
  text: (v) => (v == null || v === '' ? '—' : String(v)),
};
