// src/data/pitchersSeasonAggregates.js
// First-half season aggregates for pitchers (static placeholder data)
// HB values are absolute inches; IVB may be negative.

export const PITCHERS_SEASON_AGG = [
  {
    id: 'miguel-sime',
    name: 'Miguel Sime',
    pitches: {
      fourSeam:  { p50Velo: 96.0, p50IVB: 18.5, p50HB: 8.7,  n: 107 },
      slider:    { p50Velo: 83.4, p50IVB: -1.7, p50HB: 10.9, n: 41  },
      sinker:    { p50Velo: 93.2, p50IVB: 13.9, p50HB: 15.3, n: 34  },
      curveball: { p50Velo: 81.6, p50IVB: -11.1,p50HB: 8.5,  n: 22  },
      changeup:  { p50Velo: 86.3, p50IVB: 5.3,  p50HB: 13.9, n: 11  },
      cutter:    { p50Velo: 88.9, p50IVB: 6.5,  p50HB: 2.7,  n: 6   },
      // pitch types not thrown can be omitted
    }
  },
  // Add additional pitchers here
];
