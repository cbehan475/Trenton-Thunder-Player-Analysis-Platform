const hittersData = [
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2288, ev: 77.2, la: 15, pitchHeight: 3.1, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2254, ev: 93.2, la: 56, pitchHeight: 3.1, result: "Flyout" },
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2258, ev: 81.2, la: 64, pitchHeight: 3.7, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2304, ev: 70.5, la: -32, pitchHeight: 3.2, result: "Foul" },
      { inning: 4, pitchType: "Cutter", spinRate: 2162, ev: 89.4, la: -7, pitchHeight: 2.4, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2475, ev: 113.3, la: -22, pitchHeight: 1.7, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1730, ev: 70.9, la: 58, pitchHeight: 2.8, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2386, ev: 83.2, la: 5, pitchHeight: 2.2, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2463, ev: 67.8, la: -4, pitchHeight: 1.9, result: "Groundout" },
      { inning: 8, pitchType: "Changeup", spinRate: 2008, ev: 84.4, la: 63, pitchHeight: 2.5, result: "Pop Out" },
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2236, ev: 52.4, la: 60, pitchHeight: 2.8, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2477, ev: 85.2, la: 13, pitchHeight: 2.4, result: "Foul" },
      { inning: 7, pitchType: "Curveball", spinRate: 2543, ev: 94.2, la: 0, pitchHeight: 2.6, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2311, ev: 93.9, la: 19, pitchHeight: 2.6, result: "Lineout" },
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2162, ev: 73.5, la: -15, pitchHeight: 3.0, result: "Groundout" },
      { inning: 7, pitchType: "Changeup", spinRate: 1751, ev: 89.7, la: -9, pitchHeight: 2.2, result: "Field Error" },
      { inning: 8, pitchType: "Sinker", spinRate: 2186, ev: 103.0, la: 6, pitchHeight: 3.1, result: "Groundout" },
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2239, ev: 74.7, la: 63, pitchHeight: 3.8, result: "Foul" },
      { inning: 5, pitchType: "Curveball", spinRate: 2399, ev: 73.9, la: -51, pitchHeight: 2.5, result: "Single" },
      { inning: 7, pitchType: "Curveball", spinRate: 2465, ev: 101.3, la: 25, pitchHeight: 3.3, result: "Double" },
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2434, ev: 69.1, la: 19, pitchHeight: 2.8, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1625, ev: 91.4, la: 4, pitchHeight: 2.8, result: "Single" },
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 8, pitchType: "Changeup", spinRate: 1496, ev: 67.3, la: 51, pitchHeight: 2.2, result: "Foul" },
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2247, ev: 91.9, la: -17, pitchHeight: 2.3, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2286, ev: 62.7, la: 43, pitchHeight: 2.3, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2406, ev: 86.3, la: 49, pitchHeight: 2.4, result: "Flyout" },
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2222, ev: 69.3, la: 32, pitchHeight: 3.2, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2224, ev: 63.0, la: 46, pitchHeight: 3.7, result: "Foul" },
      { inning: 1, pitchType: "Curveball", spinRate: 2355, ev: 99.6, la: 9, pitchHeight: 1.9, result: "Single" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2216, ev: 92.4, la: 13, pitchHeight: 1.8, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 69.5, la: 9, pitchHeight: 3.4, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2313, ev: 84.8, la: 22, pitchHeight: 2.2, result: "Lineout" },
      { inning: 7, pitchType: "Sinker", spinRate: 2311, ev: 65.7, la: 8, pitchHeight: 1.8, result: "Groundout" },
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2128, ev: 59.2, la: 40, pitchHeight: 3.6, result: "Foul" },
      { inning: 1, pitchType: "Cutter", spinRate: 2250, ev: 67.9, la: 53, pitchHeight: 3.8, result: "Foul" },
      { inning: 1, pitchType: "Curveball", spinRate: 2370, ev: 94.7, la: -11, pitchHeight: 2.6, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2220, ev: 61.5, la: 56, pitchHeight: 3.5, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2245, ev: 76.5, la: 48, pitchHeight: 3.2, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2228, ev: 92.1, la: -25, pitchHeight: 2.4, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2331, ev: 90.7, la: 48, pitchHeight: 2.8, result: "Flyout" },
      { inning: 7, pitchType: "Curveball", spinRate: 2325, ev: 97.3, la: 5, pitchHeight: 2.3, result: "Forceout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2212, ev: 76.0, la: 5, pitchHeight: 2.8, result: "Forceout" },
    ]
  },
  {
    hitter: "Paulo Noris",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2118, ev: 88.2, la: 2, pitchHeight: 2.3, result: "Groundout" },
      { inning: 4, pitchType: "Cutter", spinRate: 2179, ev: 90.8, la: 9, pitchHeight: 2.7, result: "Grounded Into DP" },
    ]
  },
];

export default hittersData;
