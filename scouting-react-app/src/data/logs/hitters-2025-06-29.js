const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 4, pitchType: "Sinker", spinRate: 2385, ev: 55.2, la: -53, pitchHeight: 2.5, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1845, ev: 61.8, la: 5, pitchHeight: 3.0, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2411, ev: 50.6, la: -68, pitchHeight: 2.5, result: "Single" },
      { inning: 3, pitchType: "Sinker", spinRate: 2451, ev: 75.8, la: -60, pitchHeight: 2.3, result: "Groundout" },
      { inning: 6, pitchType: "Slider", spinRate: 2369, ev: 61.8, la: 64, pitchHeight: 1.6, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Cutter", spinRate: 2327, ev: 68.7, la: 15, pitchHeight: 1.2, result: "Single" },
      { inning: 4, pitchType: "Cutter", spinRate: 2357, ev: 62.9, la: 85, pitchHeight: 1.7, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2618, ev: 87.9, la: 62, pitchHeight: 1.6, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2502, ev: 67.3, la: 37, pitchHeight: 2.3, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2599, ev: 43.1, la: -73, pitchHeight: 1.6, result: "Single" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2296, ev: 60.4, la: 46, pitchHeight: 3.1, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2388, ev: 81.1, la: -22, pitchHeight: 1.9, result: "Groundout" },
      { inning: 6, pitchType: "Changeup", spinRate: 1757, ev: 67.3, la: 31, pitchHeight: 3.2, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2481, ev: 57.8, la: -62, pitchHeight: 1.8, result: "Groundout" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2370, ev: 74.8, la: 26, pitchHeight: 2.3, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 2305, ev: 21.5, la: -74, pitchHeight: 0.9, result: "Single" },
      { inning: 3, pitchType: "Sinker", spinRate: 2258, ev: 94.8, la: 5, pitchHeight: 2.0, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2506, ev: 75.6, la: 16, pitchHeight: 2.6, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2260, ev: 76.1, la: 38, pitchHeight: 2.4, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2499, ev: 50.2, la: -24, pitchHeight: 2.2, result: "Groundout" },
      { inning: 3, pitchType: "Sinker", spinRate: 2344, ev: 77.0, la: 44, pitchHeight: 1.8, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2410, ev: 79.9, la: 35, pitchHeight: 2.8, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2228, ev: 84.3, la: 47, pitchHeight: 3.1, result: "Sac Fly" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 6, pitchType: "Changeup", spinRate: 1638, ev: 69.7, la: 73, pitchHeight: 2.5, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2088, ev: 79.6, la: 45, pitchHeight: 2.0, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2442, ev: 91.3, la: 23, pitchHeight: 2.6, result: "Lineout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2393, ev: 55.2, la: -47, pitchHeight: 2.0, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2484, ev: 89.1, la: 9, pitchHeight: 1.6, result: "Double" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 66.1, la: 30, pitchHeight: 2.3, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2244, ev: 67.6, la: 28, pitchHeight: 2.5, result: "Foul" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2514, ev: 57.2, la: -19, pitchHeight: 2.1, result: "Fielders Choice Out" },
      { inning: 3, pitchType: "Sinker", spinRate: 2374, ev: 82.7, la: 34, pitchHeight: 2.4, result: "Flyout" },
      { inning: 6, pitchType: "Sinker", spinRate: 1638, ev: 71.3, la: 33, pitchHeight: 2.7, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2385, ev: 96.1, la: -10, pitchHeight: 2.5, result: "Field Error" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2289, ev: 72.2, la: 67, pitchHeight: 3.0, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2290, ev: 87.3, la: 1, pitchHeight: 2.4, result: "Foul" },
      { inning: 7, pitchType: "Curveball", spinRate: 2209, ev: 102.3, la: 19, pitchHeight: 2.2, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2340, ev: 101.7, la: 33, pitchHeight: 2.6, result: "Flyout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2454, ev: 80.8, la: 4, pitchHeight: 3.1, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2025, ev: 58.4, la: 28, pitchHeight: 3.1, result: "Foul" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2527, ev: 78.5, la: 48, pitchHeight: 2.6, result: "Foul" },
      { inning: 2, pitchType: "Sinker", spinRate: 2459, ev: 81.4, la: 69, pitchHeight: 3.3, result: "Foul" },
      { inning: 2, pitchType: "Sinker", spinRate: 2364, ev: 82.1, la: -14, pitchHeight: 1.9, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2441, ev: 70.8, la: 61, pitchHeight: 3.0, result: "Pop Out" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2046, ev: 101.0, la: 11, pitchHeight: 1.8, result: "Single" },
      { inning: 8, pitchType: "Sinker", spinRate: 2396, ev: 82.0, la: 61, pitchHeight: 3.6, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2347, ev: 63.9, la: -16, pitchHeight: 3.2, result: "Groundout" }
    ]
  }
];

export default hittersData;
