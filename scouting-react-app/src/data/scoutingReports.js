// src/data/scoutingReports.js
// Seed map for scouting reports. Local edits merge via localStorage.

export const SCOUTING_REPORTS = {
  // Jude Abbadessa — 643 Charts summer eval seed
  'jude-abbadessa': {
    pitcherId: 'jude-abbadessa',
    name: 'Jude Abbadessa',
    lastUpdated: new Date().toISOString(),

    // Overall
    overallFV: 30,
    risk: 'Medium',
    roleProjection: 'Relief — Sinker/Sweeper',

    // Pitches (usage from PDF pitch%; grades reflect present/future)
    pitches: {
      fourSeam: { present: 40, future: 45, usage: 10.2, notes: 'Below-avg ride; modest bat-miss. Plays best up in the zone to change eye level.' },
      sinker:   { present: 45, future: 50, usage: 41.9, notes: 'Heavy arm-side run; ground-ball pitch. Strike quality varies but flashes usable.' },
      sweeper:  { present: 55, future: 60, usage: 38.3, notes: '82–85 mph with plus sweep; primary swing-and-miss weapon.' },
      changeup: { present: 40, future: 45, usage: 5.6,  notes: 'Firm; occasional fade vs LHH. Developing but not a consistent weapon yet.' },
      cutter:   { present: 40, future: 45, usage: 4.0,  notes: '83–85 mph; shorter action; situational vs LHH.' }
    },

    // Overall tools (editable)
    tools: {
      command:     { present: 40, future: 45 },
      control:     { present: 45, future: 55 },
      athleticism: { present: 50, future: 55 },
      delivery:    { present: 50, future: 55 },
      fielding:    { present: null, future: null }
    },

    // Summary (editable)
    summary: 'Right-hander with a sinker/sweeper foundation. Sinker drives ground-ball contact; sweeper is the out pitch with above-avg future. Four-seam used sparingly as a look-changer. Changeup and cutter are usable tertiary options with room to grow. Command is presently below-avg but trends workable. Best fit is a relief role where the sinker/sweeper combo can play up against better hitters. Risk: Medium. FV: 30.'
  }
};
