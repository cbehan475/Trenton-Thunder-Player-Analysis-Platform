const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 6, pitchType: "Slider", spinRate: 2719, ev: 64.1, la: 45, pitchHeight: 3.4, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2118, ev: 62.1, la: 2, pitchHeight: 2.7, result: "Groundout" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2422, ev: 89.7, la: 43, pitchHeight: 2.2, result: "Flyout" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2357, ev: 95.3, la: -20, pitchHeight: 2.8, result: "Fielders Choice Out" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2245, ev: 78.0, la: 8, pitchHeight: 2.4, result: "Groundout" },
      { inning: 7, pitchType: "Sinker", spinRate: 2131, ev: 77.9, la: 48, pitchHeight: 3.2, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2431, ev: 74.0, la: 19, pitchHeight: 3.4, result: "Single" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2389, ev: 91.6, la: 42, pitchHeight: 3.2, result: "Flyout" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 1, pitchType: "Changeup", spinRate: 1830, ev: 96.4, la: 29, pitchHeight: 1.8, result: "Flyout" },
      { inning: 3, pitchType: "Cutter", spinRate: 2236, ev: 90.6, la: -14, pitchHeight: 2.2, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2280, ev: 62.1, la: -56, pitchHeight: 1.9, result: "Groundout" },
      { inning: 7, pitchType: "Sinker", spinRate: 2107, ev: 65.4, la: 54, pitchHeight: 3.4, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 2114, ev: 76.5, la: 34, pitchHeight: 3.3, result: "Flyout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2314, ev: 82.4, la: 38, pitchHeight: 2.9, result: "Flyout" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2279, ev: 75.0, la: 15, pitchHeight: 2.3, result: "Foul" },
      { inning: 2, pitchType: "Cutter", spinRate: 2237, ev: 71.9, la: 24, pitchHeight: 3.0, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2310, ev: 83.0, la: 40, pitchHeight: 2.3, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2706, ev: 65.5, la: -35, pitchHeight: 2.0, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2591, ev: 60.9, la: 48, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2364, ev: 33.6, la: -44, pitchHeight: 2.5, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2316, ev: 49.6, la: -39, pitchHeight: 1.8, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2797, ev: 48.3, la: -41, pitchHeight: 0.8, result: "Groundout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2456, ev: 76.0, la: 33, pitchHeight: 3.1, result: "Flyout" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2295, ev: 94.4, la: 7, pitchHeight: 2.0, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2157, ev: 95.7, la: 1, pitchHeight: 2.1, result: "Single" },
      { inning: 3, pitchType: "Cutter", spinRate: 1980, ev: 109.9, la: 1, pitchHeight: 2.4, result: "Grounded Into DP" },
      { inning: 6, pitchType: "Sinker", spinRate: 2050, ev: 72.8, la: 32, pitchHeight: 1.8, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2232, ev: 74.5, la: 71, pitchHeight: 3.4, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2731, ev: 75.6, la: 68, pitchHeight: 1.7, result: "Pop Out" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 4, pitchType: "Sinker", spinRate: 2323, ev: 93.4, la: 32, pitchHeight: 2.6, result: "Flyout" },
      { inning: 6, pitchType: "Sinker", spinRate: 2154, ev: 99.8, la: 18, pitchHeight: 1.9, result: "Double" },
      { inning: 8, pitchType: "Sinker", spinRate: 2506, ev: 77.8, la: -50, pitchHeight: 3.6, result: "Double Play" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 7, pitchType: "Sinker", spinRate: 2092, ev: 91.9, la: 33, pitchHeight: 1.7, result: "Flyout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2495, ev: 96.3, la: 17, pitchHeight: 2.1, result: "Lineout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2513, ev: 95.0, la: -11, pitchHeight: 2.5, result: "Single" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 2, pitchType: "Cutter", spinRate: 2244, ev: 78.6, la: 24, pitchHeight: 1.6, result: "Single" },
      { inning: 4, pitchType: "Sinker", spinRate: 2304, ev: 66.7, la: -8, pitchHeight: 1.8, result: "Groundout" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2144, ev: 79.0, la: 47, pitchHeight: 2.1, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2098, ev: 78.3, la: -22, pitchHeight: 1.9, result: "Groundout" }
    ]
  }
];

export default hittersData;
