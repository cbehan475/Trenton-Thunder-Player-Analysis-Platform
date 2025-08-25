// src/data/hitting/benchmarksByLevel.js
export const HITTING_BENCHMARKS_VERSION = 'v2024.1';
export const HITTING_BENCHMARKS_SOURCE = 'first-half aggregates — snapshot-X';

// Seed values; 1-dec precision. We'll refine later.
const HITTING_BENCHMARKS_BY_LEVEL = {
  MLB: {
    EV_AVG:      { range: [86.0, 92.0], p50: 88.4 },   // mph
    EV_MAX:      { range: [107.0, 115.0], p50: 111.0 },// mph
    HARD_HIT_PCT:{ range: [35.0, 45.0], p50: 39.0 },   // %
    LA_AVG:      { range: [8.0, 18.0],  p50: 12.0 },   // degrees
    CONTACT_PCT:   { range: [72.0, 80.0], p50: 75.0 }, // overall contact%
    ZCONTACT_PCT:  { range: [82.0, 90.0], p50: 86.0 }, // in-zone contact%
    WHIFF_PCT:     { range: [22.0, 30.0], p50: 26.0 }, // lower better
    CHASE_PCT:     { range: [22.0, 30.0], p50: 28.0 }, // lower better
    // Batted-ball mix (% of BIP)
    BB_GB_PCT: { range: [36.0, 50.0], p50: 42.0 },
    BB_LD_PCT: { range: [18.0, 26.0], p50: 22.0 },
    BB_FB_PCT: { range: [30.0, 40.0], p50: 34.0 },
    BB_PU_PCT: { range: [6.0, 10.0],  p50: 8.0  },
    // Barrel proxy (% of BIP with EV≥95 & 8–32°)
    BARREL_PCT: { range: [6.0, 12.0], p50: 8.0 },
  },
  AAA:  { EV_AVG:{range:[85.0,91.0],p50:87.8}, EV_MAX:{range:[106.0,114.0],p50:110.0}, HARD_HIT_PCT:{range:[33.0,43.0],p50:37.0}, LA_AVG:{range:[7.0,17.0],p50:11.0}, CONTACT_PCT:{range:[72.0,80.0],p50:75.0}, ZCONTACT_PCT:{range:[82.0,90.0],p50:86.0}, WHIFF_PCT:{range:[22.0,30.0],p50:26.0}, CHASE_PCT:{range:[22.0,30.0],p50:28.0}, BB_GB_PCT:{range:[36.0,50.0],p50:42.0}, BB_LD_PCT:{range:[18.0,26.0],p50:22.0}, BB_FB_PCT:{range:[30.0,40.0],p50:34.0}, BB_PU_PCT:{range:[6.0,10.0],p50:8.0}, BARREL_PCT:{range:[6.0,12.0],p50:8.0} },
  AA:   { EV_AVG:{range:[84.0,90.0],p50:87.0}, EV_MAX:{range:[104.0,112.0],p50:108.5}, HARD_HIT_PCT:{range:[31.0,41.0],p50:35.0}, LA_AVG:{range:[6.0,16.0],p50:10.0}, CONTACT_PCT:{range:[72.0,80.0],p50:75.0}, ZCONTACT_PCT:{range:[82.0,90.0],p50:86.0}, WHIFF_PCT:{range:[22.0,30.0],p50:26.0}, CHASE_PCT:{range:[22.0,30.0],p50:28.0}, BB_GB_PCT:{range:[36.0,50.0],p50:42.0}, BB_LD_PCT:{range:[18.0,26.0],p50:22.0}, BB_FB_PCT:{range:[30.0,40.0],p50:34.0}, BB_PU_PCT:{range:[6.0,10.0],p50:8.0}, BARREL_PCT:{range:[6.0,12.0],p50:8.0} },
  APLUS:{ EV_AVG:{range:[83.0,89.0],p50:86.2}, EV_MAX:{range:[103.0,111.0],p50:107.5}, HARD_HIT_PCT:{range:[30.0,40.0],p50:34.0}, LA_AVG:{range:[5.0,15.0],p50:9.0}, CONTACT_PCT:{range:[72.0,80.0],p50:75.0}, ZCONTACT_PCT:{range:[82.0,90.0],p50:86.0}, WHIFF_PCT:{range:[22.0,30.0],p50:26.0}, CHASE_PCT:{range:[22.0,30.0],p50:28.0}, BB_GB_PCT:{range:[36.0,50.0],p50:42.0}, BB_LD_PCT:{range:[18.0,26.0],p50:22.0}, BB_FB_PCT:{range:[30.0,40.0],p50:34.0}, BB_PU_PCT:{range:[6.0,10.0],p50:8.0}, BARREL_PCT:{range:[6.0,12.0],p50:8.0} },
};

export default HITTING_BENCHMARKS_BY_LEVEL;
