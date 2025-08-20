// src/data/scoutingReports.js
// Seed map for scouting reports. Local edits merge via localStorage.

export const SCOUTING_REPORTS = {
  // Jude Abbadessa — 643 Charts summer eval seed
  'jude-abbadessa': {
    pitcherId: 'jude-abbadessa',
    name: 'Jude Abbadessa',
    lastUpdated: new Date().toISOString(),

    // Overall
    overallFV: 45, // FV 45 (spot starter / multi-inning RP track)
    risk: 'Medium',
    roleProjection: 'Multi-inning RP / Spot Starter',

    // Pitches (usage from PDF pitch%; grades reflect present/future)
    pitches: {
      sinker:   { present: 45, future: 50, usage: 40.5, notes: '92.1 avg (94.3 max); ground-ball weapon (59.3% GB). Strike% 54.5; HB 15.4, IVB 9.7. Needs steadier zone feel and arm-side run harnessing for early count strikes.' },
      sweeper:  { present: 55, future: 60, usage: 31.2, notes: '82.0 avg (84.2 max); plus miss profile (54.5% whiff). Big sweep (-8.2 HB, 0.5 IVB). Put-away 41%. Primary chase/miss pitch; tighten quality in zone.' },
      fourSeam: { present: 50, future: 55, usage: 11.5, notes: '92.5 avg (94.4 max); ride piece (16.2 IVB, 9.8 HB) with better Strike% (63.8). Plays best above barrel; modest whiff (11.1%).' },
      cutter:   { present: 40, future: 45, usage: 11.1, notes: '83.0 avg (84.9 max); shorter action (HB -3.0, IVB 2.7). Hard-hit 33.3% on contact; fits as show-me vs LHH or sequencing bridge off sinker/sweeper.' }
    },

    // Overall tools (editable)
    tools: {
      command:     { present: 45, future: 50 },
      control:     { present: 45, future: 55 },
      athleticism: { present: 50, future: 55 },
      delivery:    { present: 50, future: 55 },
      fielding:    { present: null, future: null }
    },

    // Summary (editable)
    summary: 'Four-pitch RHP with ground-ball sinker (59% GB) and plus-miss sweeper (54% whiff). FB shows ride traits to play north; cutter is fourth. Present strike throwing is fringy on sinker; overall control trending up. Role fit leans multi-inning relief with chance to spot start if future command clicks; FV45, medium risk.'
  }
};
