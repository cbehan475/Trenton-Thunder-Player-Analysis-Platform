const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2103, ev: 64.5, la: 52, pitchHeight: 2.1, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2037, ev: 54.2, la: 42, pitchHeight: 3.3, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 2038, ev: 89.3, la: 0, pitchHeight: 2.8, result: "Groundout" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2005, ev: 86.1, la: 36, pitchHeight: 2.4, result: "Flyout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2002, ev: 63.7, la: 25, pitchHeight: 2.5, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2378, ev: 71.9, la: 16, pitchHeight: 3.3, result: "Foul" },
      { inning: 9, pitchType: "Changeup", spinRate: 2175, ev: 66.1, la: 20, pitchHeight: 2.4, result: "Single" }
    ]
  },
  {
    hitter: "Paulo Noris",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2098, ev: 77.1, la: 51, pitchHeight: 3.0, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2216, ev: 72.0, la: 53, pitchHeight: 3.1, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2235, ev: 78.6, la: -17, pitchHeight: 2.8, result: "Single" },
      { inning: 6, pitchType: "Sinker", spinRate: 2235, ev: 68.9, la: 33, pitchHeight: 2.9, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2167, ev: 79.9, la: 0, pitchHeight: 3.0, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2443, ev: 82.9, la: 37, pitchHeight: 3.5, result: "Flyout" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2096, ev: 102.1, la: -1, pitchHeight: 2.4, result: "Forceout" },
      { inning: 4, pitchType: "Sinker", spinRate: 1974, ev: 79.0, la: -26, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 1990, ev: 73.3, la: -50, pitchHeight: 2.3, result: "Groundout" },
      { inning: 6, pitchType: "Changeup", spinRate: 2129, ev: 88.2, la: 43, pitchHeight: 3.1, result: "Sac Fly" },
      { inning: 8, pitchType: "Sinker", spinRate: 2354, ev: 89.4, la: -6, pitchHeight: 3.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2039, ev: 73.7, la: -15, pitchHeight: 2.3, result: "Groundout" },
      { inning: 2, pitchType: "Sinker", spinRate: 2087, ev: 77.0, la: 63, pitchHeight: 3.3, result: "Pop Out" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1995, ev: 82.3, la: 27, pitchHeight: 2.4, result: "Lineout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2146, ev: 91.7, la: 10, pitchHeight: 2.5, result: "Lineout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2381, ev: 95.1, la: 48, pitchHeight: 2.8, result: "Flyout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2026, ev: 79.1, la: 28, pitchHeight: 3.2, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 1953, ev: 100.2, la: 4, pitchHeight: 2.1, result: "Single" },
      { inning: 7, pitchType: "Slider", spinRate: 2178, ev: 74.2, la: 55, pitchHeight: 3.2, result: "Pop Out" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2008, ev: 80.9, la: 7, pitchHeight: 2.3, result: "Double" },
      { inning: 7, pitchType: "Slider", spinRate: 2257, ev: 47.6, la: 25, pitchHeight: 1.7, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2514, ev: 90.3, la: -20, pitchHeight: 2.0, result: "Foul" },
      { inning: 9, pitchType: "Changeup", spinRate: 2050, ev: 72.1, la: 62, pitchHeight: 2.6, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2269, ev: 62.5, la: 51, pitchHeight: 1.7, result: "Foul" }
    ]
  },
  {
    hitter: "Jared Beebe",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2176, ev: 96.6, la: -18, pitchHeight: 2.3, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2051, ev: 100.0, la: 4, pitchHeight: 3.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2328, ev: 84.9, la: 16, pitchHeight: 2.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2100, ev: 92.6, la: -2, pitchHeight: 2.9, result: "Single" },
      { inning: 8, pitchType: "Sinker", spinRate: 2412, ev: 74.6, la: -30, pitchHeight: 2.1, result: "Foul" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2055, ev: 75.3, la: 12, pitchHeight: 2.6, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 2128, ev: 75.1, la: 21, pitchHeight: 3.1, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 1945, ev: 102.5, la: 13, pitchHeight: 2.2, result: "Single" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2135, ev: 93.1, la: -5, pitchHeight: 2.6, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2127, ev: 85.8, la: 51, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Curveball", spinRate: 2542, ev: 85.9, la: -13, pitchHeight: 2.5, result: "Groundout" },
      { inning: 6, pitchType: "Changeup", spinRate: 2287, ev: 67.2, la: 21, pitchHeight: 1.5, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2051, ev: 64.8, la: 40, pitchHeight: 2.9, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2412, ev: 101.4, la: 15, pitchHeight: 2.7, result: "Lineout" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2188, ev: 84.5, la: 33, pitchHeight: 2.0, result: "Single" },
      { inning: 3, pitchType: "Sinker", spinRate: 2186, ev: 73.5, la: 62, pitchHeight: 1.8, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2120, ev: 74.2, la: 56, pitchHeight: 2.1, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2266, ev: 70.5, la: 21, pitchHeight: 2.0, result: "Foul" }
    ]
  }
];

export default hittersData;
