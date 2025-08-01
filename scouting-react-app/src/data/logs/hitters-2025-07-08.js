const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2084, ev: 91.3, la: 15, pitchHeight: 1.6, result: "Single" },
      { inning: 7, pitchType: "Changeup", spinRate: 1975, ev: 78.6, la: 16, pitchHeight: 2.8, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2385, ev: 66.5, la: -30, pitchHeight: 2.2, result: "Groundout" },
      { inning: 3, pitchType: "Slider", spinRate: 2484, ev: 80.3, la: 43, pitchHeight: 2.5, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2194, ev: 67.7, la: 73, pitchHeight: 3.0, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 1212, ev: 61.9, la: -51, pitchHeight: 1.5, result: "Single" },
      { inning: 5, pitchType: "Slider", spinRate: 2433, ev: 65.5, la: 30, pitchHeight: 3.7, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2252, ev: 97.6, la: -2, pitchHeight: 2.9, result: "Single" },
      { inning: 7, pitchType: "Changeup", spinRate: 2239, ev: 72.5, la: 55, pitchHeight: 1.8, result: "Flyout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2267, ev: 75.9, la: 25, pitchHeight: 3.3, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2273, ev: 83.6, la: -19, pitchHeight: 2.2, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2158, ev: 73.0, la: 49, pitchHeight: 2.2, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2216, ev: 88.4, la: 33, pitchHeight: 3.0, result: "Sac Fly Double Play" },
      { inning: 8, pitchType: "Changeup", spinRate: 2212, ev: 74.6, la: 55, pitchHeight: 3.4, result: "Flyout" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2457, ev: 66.9, la: 53, pitchHeight: 2.4, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2450, ev: 69.8, la: 32, pitchHeight: 3.0, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2516, ev: 66.9, la: -14, pitchHeight: 2.5, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2229, ev: 81.6, la: 51, pitchHeight: 3.1, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2120, ev: 52.1, la: -70, pitchHeight: 1.3, result: "Single" },
      { inning: 8, pitchType: "Changeup", spinRate: 1829, ev: 61.2, la: -47, pitchHeight: 2.3, result: "Groundout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2226, ev: 77.1, la: 28, pitchHeight: 3.1, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2436, ev: 64.7, la: 28, pitchHeight: 2.9, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1788, ev: 96.5, la: -14, pitchHeight: 1.6, result: "Groundout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2356, ev: 68.6, la: 26, pitchHeight: 2.7, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2293, ev: 78.3, la: 64, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2309, ev: 100.8, la: -1, pitchHeight: 2.8, result: "Groundout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2393, ev: 74.6, la: -27, pitchHeight: 1.6, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2218, ev: 76.3, la: 15, pitchHeight: 2.6, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 2243, ev: 53.4, la: 6, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 2219, ev: 78.7, la: 57, pitchHeight: 3.2, result: "Pop Out" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2577, ev: 72.1, la: 46, pitchHeight: 1.7, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2456, ev: 75.9, la: 65, pitchHeight: 2.2, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2177, ev: 97.5, la: 24, pitchHeight: 2.0, result: "Triple" },
      { inning: 5, pitchType: "Cutter", spinRate: 2190, ev: 79.8, la: 1, pitchHeight: 2.8, result: "Foul" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2489, ev: 54.1, la: 50, pitchHeight: 1.9, result: "Pop Out" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2202, ev: 70.7, la: 22, pitchHeight: 2.1, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2360, ev: 66.5, la: 25, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2181, ev: 64.3, la: 48, pitchHeight: 3.5, result: "Foul" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2431, ev: 101.1, la: 22, pitchHeight: 2.9, result: "Double" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2246, ev: 56.8, la: 50, pitchHeight: 3.7, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 2350, ev: 105.4, la: 15, pitchHeight: 3.5, result: "Lineout" }
    ]
  }
];

export default hittersData;
