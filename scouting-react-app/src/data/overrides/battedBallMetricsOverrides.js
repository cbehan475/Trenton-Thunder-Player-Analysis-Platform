// src/data/overrides/battedBallMetricsOverrides.js
// Keyed overrides for vetted batted ball metrics (6-4-3 style)
// Names must match app hitter strings exactly.

const BATTED_BALL_METRICS_OVERRIDES = {
  "Aaron Graeber": {
    bip: 50,
    gb: 43.5,
    ld: 23.2,
    fb: 17.5,
    pu: 15.8,
    avgEv: 88.2,
    maxEv: 104.8,
    avgLa: 14.1,
    hardHit: 37.3,
  },
  "Aaron Whitley": {
    bip: 95,
    gb: 54.8,
    ld: 22.1,
    fb: 18.9,
    pu: 4.2,
    avgEv: 78.4,
    maxEv: 99.3,
    avgLa: 3.6,
    hardHit: 13.7,
  },
  // Add more hitters here as needed
};

export default BATTED_BALL_METRICS_OVERRIDES;
