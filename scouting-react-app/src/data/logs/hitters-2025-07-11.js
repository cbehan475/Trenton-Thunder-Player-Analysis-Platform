const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 4, pitchType: "Cutter", spinRate: 2578, ev: 88.8, la: -3, pitchHeight: 2.7, result: "Groundout" },
      { inning: 5, pitchType: "Slider", spinRate: 2513, ev: 80.0, la: -23, pitchHeight: 1.9, result: "Groundout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2297, ev: 70.1, la: -28, pitchHeight: 3.3, result: "Groundout" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Cutter", spinRate: 2435, ev: 77.5, la: 70, pitchHeight: 2.6, result: "Pop Out" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2086, ev: 98.6, la: 10, pitchHeight: 2.7, result: "Single" },
      { inning: 4, pitchType: "Slider", spinRate: 2637, ev: 81.3, la: -3, pitchHeight: 1.9, result: "Groundout" },
      { inning: 6, pitchType: "Changeup", spinRate: 1823, ev: 73.2, la: -24, pitchHeight: 2.1, result: "Field Error" },
      { inning: 8, pitchType: "Changeup", spinRate: 1851, ev: 61.9, la: 32, pitchHeight: 1.8, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2521, ev: 67.4, la: 35, pitchHeight: 2.7, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2762, ev: 89.0, la: 22, pitchHeight: 2.6, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2598, ev: 76.3, la: -25, pitchHeight: 1.5, result: "Groundout" },
      { inning: 3, pitchType: "Slider", spinRate: 2612, ev: 91.9, la: 3, pitchHeight: 2.8, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2253, ev: 81.1, la: -46, pitchHeight: 2.5, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2406, ev: 71.6, la: 18, pitchHeight: 1.1, result: "Double" },
      { inning: 6, pitchType: "Changeup", spinRate: 1917, ev: 58.1, la: 50, pitchHeight: 1.9, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2334, ev: 73.9, la: 21, pitchHeight: 3.2, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 1162, ev: 66.3, la: 41, pitchHeight: 2.2, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2278, ev: 66.3, la: 56, pitchHeight: 3.6, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2328, ev: 75.2, la: -4, pitchHeight: 3.2, result: "Groundout" },
      { inning: 9, pitchType: "Cutter", spinRate: 2176, ev: 78.4, la: -13, pitchHeight: 2.5, result: "Groundout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 2681, ev: 97.3, la: -13, pitchHeight: 2.1, result: "Single" },
      { inning: 3, pitchType: "Cutter", spinRate: 2546, ev: 68.7, la: 36, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2316, ev: 58.9, la: 36, pitchHeight: 2.3, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2307, ev: 69.0, la: 31, pitchHeight: 2.6, result: "Single" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2136, ev: 79.9, la: 4, pitchHeight: 2.5, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2653, ev: 92.3, la: -33, pitchHeight: 1.9, result: "Single" },
      { inning: 3, pitchType: "Curveball", spinRate: 2696, ev: 99.8, la: 26, pitchHeight: 2.2, result: "Foul" },
      { inning: 5, pitchType: "Changeup", spinRate: 1682, ev: 92.2, la: -6, pitchHeight: 2.0, result: "Forceout" }
    ]
  },
  {
    hitter: "Jared Beebe",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2085, ev: 68.5, la: -52, pitchHeight: 2.8, result: "Groundout" },
      { inning: 3, pitchType: "Cutter", spinRate: 2476, ev: 103.1, la: 16, pitchHeight: 2.6, result: "Double" },
      { inning: 5, pitchType: "Sinker", spinRate: 2242, ev: 99.2, la: -9, pitchHeight: 2.0, result: "Field Error" },
      { inning: 7, pitchType: "Slider", spinRate: 2372, ev: 51.8, la: -13, pitchHeight: 2.8, result: "Groundout" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1922, ev: 68.4, la: 48, pitchHeight: 2.9, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2778, ev: 88.0, la: 59, pitchHeight: 2.2, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2100, ev: 91.9, la: -19, pitchHeight: 3.3, result: "Groundout" },
      { inning: 5, pitchType: "Cutter", spinRate: 2352, ev: 98.4, la: 14, pitchHeight: 2.8, result: "Double" },
      { inning: 6, pitchType: "Changeup", spinRate: 1864, ev: 76.0, la: -42, pitchHeight: 2.3, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2319, ev: 64.3, la: -51, pitchHeight: 1.6, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2261, ev: 73.7, la: 75, pitchHeight: 3.4, result: "Pop Out" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 4, pitchType: "Cutter", spinRate: 2508, ev: 70.0, la: -9, pitchHeight: 1.5, result: "Groundout" },
      { inning: 6, pitchType: "Changeup", spinRate: 1938, ev: 86.2, la: 21, pitchHeight: 2.0, result: "Lineout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2251, ev: 70.3, la: 24, pitchHeight: 2.6, result: "Foul" },
      { inning: 8, pitchType: "Changeup", spinRate: 1859, ev: 56.5, la: 18, pitchHeight: 1.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 5, pitchType: "Sinker", spinRate: 2261, ev: 52.0, la: -53, pitchHeight: 1.8, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2243, ev: 79.6, la: 7, pitchHeight: 2.7, result: "Foul" }
    ]
  }
];

export default hittersData;
