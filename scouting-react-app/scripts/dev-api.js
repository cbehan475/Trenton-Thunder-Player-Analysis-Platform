/* eslint-disable */
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

function readJsonSafe(p, fallback = []) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return fallback; }
}

const SRC = path.join(__dirname, '..', 'src');
const ARSENALS_PATH = path.join(SRC, 'data', 'arsenals', 'firstHalf.json');     // adjust if your file is different
const PROPOSALS_PATH = path.join(SRC, 'data', 'arsenals', 'proposals.json');     // adjust if needed

// CORS for CRA on 3002
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.get('/api/arsenals', (_req, res) => res.json(readJsonSafe(ARSENALS_PATH, [])));
app.get('/api/proposals', (_req, res) => res.json(readJsonSafe(PROPOSALS_PATH, [])));
app.post('/api/rebatch', (_req, res) => {
  const proposals = readJsonSafe(PROPOSALS_PATH, []);
  const count = Array.isArray(proposals) ? proposals.length : Object.keys(proposals || {}).length;
  res.json({ ok: true, count });
});

const PORT = 4001;
app.listen(PORT, () => console.log(`Dev API running at http://localhost:${PORT}`));
