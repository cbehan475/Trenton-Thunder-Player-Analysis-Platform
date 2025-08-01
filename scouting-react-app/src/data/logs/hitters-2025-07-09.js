const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 4, pitchType: "Slider", spinRate: 2109, ev: 94.4, la: 10, pitchHeight: 1.8, result: "Double" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2176, ev: 85.1, la: 10, pitchHeight: 3.1, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2505, ev: 67.1, la: 50, pitchHeight: 2.1, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2529, ev: 90.2, la: 4, pitchHeight: 2.7, result: "Single" },
      { inning: 3, pitchType: "Curveball", spinRate: 2728, ev: 78.2, la: -18, pitchHeight: 2.5, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2135, ev: 75.4, la: 13, pitchHeight: 3.2, result: "Single" },
      { inning: 7, pitchType: "Slider", spinRate: 1923, ev: 58.8, la: 10, pitchHeight: 2.3, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2137, ev: 61.1, la: -34, pitchHeight: 2.7, result: "Groundout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2605, ev: 61.4, la: 64, pitchHeight: 2.3, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2504, ev: 89.6, la: 19, pitchHeight: 2.8, result: "Single" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2161, ev: 77.0, la: 33, pitchHeight: 3.2, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2149, ev: 79.0, la: 32, pitchHeight: 3.5, result: "Foul" },
      { inning: 1, pitchType: "Curveball", spinRate: 2729, ev: 83.8, la: 29, pitchHeight: 1.8, result: "Flyout" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2198, ev: 72.5, la: 20, pitchHeight: 2.3, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2463, ev: 75.1, la: 27, pitchHeight: 2.2, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2518, ev: 76.5, la: 19, pitchHeight: 2.3, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2507, ev: 73.4, la: -32, pitchHeight: 1.5, result: "Single" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2469, ev: 78.8, la: -49, pitchHeight: 2.5, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2337, ev: 73.3, la: 67, pitchHeight: 3.4, result: "Foul" },
      { inning: 4, pitchType: "Curveball", spinRate: 2787, ev: 61.4, la: -65, pitchHeight: 2.2, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2351, ev: 94.7, la: 11, pitchHeight: 3.3, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2085, ev: 77.8, la: 74, pitchHeight: 2.7, result: "Pop Out" },
      { inning: 8, pitchType: "Sinker", spinRate: 2291, ev: 91.5, la: 44, pitchHeight: 2.0, result: "Flyout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2430, ev: 103.2, la: 2, pitchHeight: 1.8, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2045, ev: 75.1, la: 9, pitchHeight: 3.1, result: "Foul" },
      { inning: 5, pitchType: "Changeup", spinRate: 1578, ev: 77.5, la: -43, pitchHeight: 1.8, result: "Groundout" },
      { inning: 6, pitchType: "Slider", spinRate: 2144, ev: 107.3, la: 16, pitchHeight: 2.1, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1495, ev: 66.8, la: -31, pitchHeight: 1.6, result: "Forceout" }
    ]
  },
  {
    hitter: "Jared Beebe",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2426, ev: 81.5, la: -1, pitchHeight: 2.6, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2050, ev: 99.4, la: 10, pitchHeight: 1.9, result: "Single" },
      { inning: 7, pitchType: "Slider", spinRate: 1871, ev: 86.6, la: -3, pitchHeight: 2.3, result: "Single" },
      { inning: 9, pitchType: "Changeup", spinRate: 1747, ev: 80.3, la: 57, pitchHeight: 2.6, result: "Pop Out" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2684, ev: 98.7, la: 33, pitchHeight: 1.8, result: "Flyout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2368, ev: 70.0, la: 48, pitchHeight: 2.1, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2485, ev: 96.4, la: 20, pitchHeight: 1.8, result: "Double" },
      { inning: 5, pitchType: "Changeup", spinRate: 1462, ev: 86.5, la: 71, pitchHeight: 2.7, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2143, ev: 90.2, la: 45, pitchHeight: 1.8, result: "Flyout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2246, ev: 78.6, la: 11, pitchHeight: 2.7, result: "Foul" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2497, ev: 73.3, la: -42, pitchHeight: 1.4, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2049, ev: 83.9, la: 56, pitchHeight: 3.1, result: "Foul" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2406, ev: 58.3, la: -38, pitchHeight: 2.2, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2502, ev: 75.2, la: 16, pitchHeight: 3.7, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2257, ev: 69.5, la: 42, pitchHeight: 3.1, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 1962, ev: 72.5, la: 72, pitchHeight: 2.8, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 1833, ev: 67.4, la: 59, pitchHeight: 3.2, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2259, ev: 80.9, la: -15, pitchHeight: 2.8, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2013, ev: 73.9, la: 7, pitchHeight: 3.3, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1947, ev: 94.1, la: 27, pitchHeight: 3.0, result: "Sac Fly" }
    ]
  }
];

export default hittersData;
