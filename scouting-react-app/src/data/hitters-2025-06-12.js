const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2058, ev: 86.6, la: 6, pitchHeight: 2.8, result: "Single" },
      { inning: 4, pitchType: "Sinker", spinRate: 2381, ev: 89.7, la: 34, pitchHeight: 1.9, result: "Flyout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2491, ev: 44.7, la: -71, pitchHeight: 0.9, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2392, ev: 52.5, la: -56, pitchHeight: 2.4, result: "Groundout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2096, ev: 89.6, la: 29, pitchHeight: 3.4, result: "Foul" },
      { inning: 3, pitchType: "Curveball", spinRate: 2388, ev: 72.0, la: 48, pitchHeight: 2.4, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1780, ev: 62.2, la: -6, pitchHeight: 1.2, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 74.4, la: 46, pitchHeight: 3.3, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2351, ev: 92.5, la: 0, pitchHeight: 3.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 5, pitchType: "Sinker", spinRate: 2205, ev: 68.1, la: 16, pitchHeight: 2.6, result: "Foul" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Changeup", spinRate: 1793, ev: 90.9, la: 16, pitchHeight: 2.4, result: "Single" },
      { inning: 3, pitchType: "Changeup", spinRate: 2019, ev: 83.3, la: -7, pitchHeight: 1.6, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2413, ev: 77.0, la: 16, pitchHeight: 3.3, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2380, ev: 68.7, la: 28, pitchHeight: 2.6, result: "Foul" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2169, ev: 67.2, la: 38, pitchHeight: 2.1, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2176, ev: 85.0, la: -9, pitchHeight: 2.8, result: "Foul" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Changeup", spinRate: 1873, ev: 102.7, la: 10, pitchHeight: 2.1, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2458, ev: 79.3, la: 2, pitchHeight: 2.5, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2177, ev: 91.8, la: 15, pitchHeight: 1.8, result: "Double" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2366, ev: 72.0, la: 45, pitchHeight: 2.2, result: "Ball" },
      { inning: 9, pitchType: "Slider", spinRate: 2212, ev: 95.5, la: 34, pitchHeight: 2.2, result: "Flyout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 4, pitchType: "Curveball", spinRate: 2777, ev: 86.2, la: -9, pitchHeight: 1.7, result: "Foul" }
    ]
  },
  {
    hitter: "Justin Fogel",
    atBats: [
      { inning: 2, pitchType: "Changeup", spinRate: 1862, ev: 77.9, la: 45, pitchHeight: 2.3, result: "Flyout" },
      { inning: 3, pitchType: "Changeup", spinRate: 1814, ev: 67.7, la: -29, pitchHeight: 2.0, result: "Forceout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2097, ev: 78.6, la: 6, pitchHeight: 3.3, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2067, ev: 71.9, la: 26, pitchHeight: 3.1, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2064, ev: 78.4, la: 41, pitchHeight: 2.9, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2379, ev: 87.1, la: 16, pitchHeight: 2.0, result: "Single" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2138, ev: 84.8, la: 33, pitchHeight: 2.7, result: "Sac Fly" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Changeup", spinRate: 1655, ev: 81.2, la: 18, pitchHeight: 2.0, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1836, ev: 75.3, la: -6, pitchHeight: 2.0, result: "Foul" },
      { inning: 3, pitchType: "Curveball", spinRate: 2163, ev: 48.3, la: 72, pitchHeight: 3.0, result: "Foul" },
      { inning: 3, pitchType: "Curveball", spinRate: 2484, ev: 71.0, la: 22, pitchHeight: 1.8, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2243, ev: 70.7, la: 15, pitchHeight: 3.4, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2946, ev: 63.0, la: 46, pitchHeight: 1.7, result: "Pop Out" }
    ]
  },
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2313, ev: 65.2, la: 0, pitchHeight: 2.6, result: "Groundout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2362, ev: 71.5, la: 63, pitchHeight: 2.9, result: "Foul" }
    ]
  }
];

export default hittersData;