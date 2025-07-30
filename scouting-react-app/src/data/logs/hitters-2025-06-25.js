const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Changeup", spinRate: 1493, ev: 54.1, la: -32, pitchHeight: 1.6, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1518, ev: 62.7, la: 29, pitchHeight: 2.0, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2385, ev: 66.6, la: -21, pitchHeight: 2.1, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2285, ev: 81.8, la: -3, pitchHeight: 3.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2145, ev: 87.8, la: 37, pitchHeight: 2.0, result: "Flyout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2212, ev: 68.0, la: -34, pitchHeight: 2.2, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2298, ev: 76.7, la: -19, pitchHeight: 2.2, result: "Groundout" },
      { inning: 7, pitchType: "Slider", spinRate: 2503, ev: 63.8, la: 39, pitchHeight: 2.5, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2847, ev: 100.9, la: -1, pitchHeight: 2.4, result: "Single" },
      { inning: 9, pitchType: "Sinker", spinRate: 2193, ev: 18.7, la: -9, pitchHeight: 0.9, result: "Ball" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2280, ev: 90.3, la: -26, pitchHeight: 2.7, result: "Forceout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2172, ev: 83.5, la: 10, pitchHeight: 2.8, result: "Lineout" },
      { inning: 3, pitchType: "Changeup", spinRate: 1738, ev: 94.0, la: -3, pitchHeight: 2.6, result: "Groundout" },
      { inning: 6, pitchType: "Cutter", spinRate: 2202, ev: 75.1, la: 78, pitchHeight: 2.6, result: "Pop Out" },
      { inning: 9, pitchType: "Sinker", spinRate: 2204, ev: 66.5, la: 28, pitchHeight: 2.0, result: "Foul" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2048, ev: 66.3, la: 35, pitchHeight: 2.8, result: "Single" },
      { inning: 3, pitchType: "Changeup", spinRate: 2130, ev: 94.3, la: 36, pitchHeight: 2.9, result: "Flyout" },
      { inning: 6, pitchType: "Changeup", spinRate: 2302, ev: 93.4, la: 6, pitchHeight: 2.8, result: "Double" },
      { inning: 7, pitchType: "Sinker", spinRate: 2288, ev: 95.2, la: -17, pitchHeight: 2.6, result: "Foul" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2202, ev: 58.8, la: 64, pitchHeight: 3.8, result: "Foul" },
      { inning: 2, pitchType: "Cutter", spinRate: 2226, ev: 60.2, la: -22, pitchHeight: 2.1, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2330, ev: 76.6, la: 52, pitchHeight: 2.4, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2312, ev: 96.5, la: 29, pitchHeight: 3.4, result: "Flyout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2104, ev: 74.4, la: 25, pitchHeight: 3.2, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2563, ev: 72.6, la: 55, pitchHeight: 2.8, result: "Foul" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2153, ev: 89.8, la: 23, pitchHeight: 2.8, result: "Lineout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2332, ev: 69.0, la: 17, pitchHeight: 2.3, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1726, ev: 59.6, la: 56, pitchHeight: 1.4, result: "Foul" },
      { inning: 8, pitchType: "Cutter", spinRate: 2343, ev: 68.7, la: -26, pitchHeight: 2.4, result: "Groundout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 9, pitchType: "Slider", spinRate: 2457, ev: 103.3, la: 11, pitchHeight: 2.3, result: "Single" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 8, pitchType: "Cutter", spinRate: 2360, ev: 71.8, la: 12, pitchHeight: 2.4, result: "Foul" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2100, ev: 75.4, la: 56, pitchHeight: 2.6, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2120, ev: 71.0, la: 38, pitchHeight: 2.6, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1414, ev: 101.5, la: 8, pitchHeight: 1.7, result: "Single" },
      { inning: 6, pitchType: "Slider", spinRate: 2344, ev: 71.7, la: 9, pitchHeight: 2.3, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1691, ev: 97.6, la: 29, pitchHeight: 1.6, result: "Home Run" },
      { inning: 7, pitchType: "Slider", spinRate: 2628, ev: 75.9, la: 60, pitchHeight: 1.8, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2169, ev: 61.6, la: -68, pitchHeight: 2.2, result: "Groundout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2192, ev: 66.8, la: 25, pitchHeight: 2.7, result: "Foul" },
      { inning: 2, pitchType: "Cutter", spinRate: 2244, ev: 58.1, la: 68, pitchHeight: 2.6, result: "Pop Out" },
      { inning: 9, pitchType: "Sinker", spinRate: 2281, ev: 66.4, la: 54, pitchHeight: 2.2, result: "Foul" },
      { inning: 9, pitchType: "Cutter", spinRate: 2376, ev: 80.3, la: -12, pitchHeight: 2.8, result: "Groundout" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2026, ev: 73.3, la: 15, pitchHeight: 2.3, result: "Foul" },
      { inning: 1, pitchType: "Curveball", spinRate: 2158, ev: 84.3, la: 26, pitchHeight: 2.0, result: "Lineout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2159, ev: 78.2, la: 51, pitchHeight: 2.7, result: "Flyout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2264, ev: 81.7, la: 63, pitchHeight: 2.4, result: "Pop Out" }
    ]
  }
];

export default hittersData;
