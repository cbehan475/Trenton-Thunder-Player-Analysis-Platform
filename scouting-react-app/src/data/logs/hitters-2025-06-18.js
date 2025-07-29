const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2268, ev: 96.7, la: -6, pitchHeight: 2.8, result: "Field Error" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2280, ev: 77.0, la: 39, pitchHeight: 3.1, result: "Flyout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2462, ev: 106.8, la: 7, pitchHeight: 2.4, result: "Double" },
      { inning: 7, pitchType: "Slider", spinRate: 2220, ev: 67.6, la: 50, pitchHeight: 2.2, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1668, ev: 92.0, la: 8, pitchHeight: 2.3, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2418, ev: 88.6, la: 10, pitchHeight: 2.1, result: "Single" },
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2373, ev: 72.9, la: -26, pitchHeight: 1.7, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 2295, ev: 72.2, la: 27, pitchHeight: 3.4, result: "Foul" },
      { inning: 1, pitchType: "Cutter", spinRate: 2535, ev: 62.2, la: 12, pitchHeight: 2.3, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2383, ev: 89.7, la: 57, pitchHeight: 2.0, result: "Flyout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 66.1, la: 37, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2066, ev: 56.2, la: 58, pitchHeight: 0.9, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2173, ev: 96.9, la: 33, pitchHeight: 2.1, result: "Home Run" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2295, ev: 68.4, la: 27, pitchHeight: 2.0, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2213, ev: 66.0, la: 56, pitchHeight: 2.3, result: "Pop Out" },
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 1, pitchType: "Curveball", spinRate: 2635, ev: 99.5, la: 9, pitchHeight: 3.1, result: "Lineout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2351, ev: 84.5, la: -9, pitchHeight: 2.5, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2027, ev: 97.0, la: 2, pitchHeight: 1.5, result: "Groundout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2170, ev: 62.3, la: 58, pitchHeight: 2.2, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2294, ev: 95.6, la: 22, pitchHeight: 1.7, result: "Lineout" },
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2138, ev: 41.9, la: -15, pitchHeight: 3.7, result: "Groundout" },
      { inning: 4, pitchType: "Changeup", spinRate: 1984, ev: 42.2, la: -15, pitchHeight: 0.7, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2088, ev: 71.3, la: 42, pitchHeight: 2.9, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2402, ev: 36.5, la: -39, pitchHeight: 0.7, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1819, ev: 74.1, la: 38, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1754, ev: 98.9, la: 12, pitchHeight: 3.2, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2503, ev: 36.6, la: -49, pitchHeight: 1.7, result: "Single" },
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Curveball", spinRate: 2633, ev: 54.0, la: -54, pitchHeight: 1.5, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2486, ev: 73.6, la: 58, pitchHeight: 2.9, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2331, ev: 68.9, la: 40, pitchHeight: 2.5, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2427, ev: 96.1, la: 23, pitchHeight: 2.6, result: "Home Run" },
      { inning: 7, pitchType: "Changeup", spinRate: 1817, ev: 66.5, la: 55, pitchHeight: 1.7, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2265, ev: 104.2, la: -1, pitchHeight: 2.6, result: "Groundout" },
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2292, ev: 36.7, la: -82, pitchHeight: 2.1, result: "Single" },
      { inning: 4, pitchType: "Sinker", spinRate: 1938, ev: 92.4, la: 66, pitchHeight: 2.9, result: "Pop Out" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2084, ev: 75.7, la: 3, pitchHeight: 2.0, result: "Single" },
      { inning: 7, pitchType: "Slider", spinRate: 2022, ev: 82.3, la: 10, pitchHeight: 1.9, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2069, ev: 38.4, la: -20, pitchHeight: 1.4, result: "Groundout" },
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2483, ev: 74.6, la: 57, pitchHeight: 1.7, result: "Pop Out" },
      { inning: 6, pitchType: "Changeup", spinRate: 1927, ev: 81.8, la: 13, pitchHeight: 2.4, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2446, ev: 50.5, la: 54, pitchHeight: 2.9, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2455, ev: 79.7, la: 11, pitchHeight: 2.7, result: "Single" },
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2244, ev: 83.9, la: 17, pitchHeight: 2.6, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2417, ev: 66.9, la: 60, pitchHeight: 2.6, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2380, ev: 86.7, la: 12, pitchHeight: 2.0, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2440, ev: 61.5, la: 16, pitchHeight: 1.7, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1912, ev: 66.1, la: 42, pitchHeight: 3.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2068, ev: 62.4, la: 66, pitchHeight: 2.9, result: "Pop Out" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2221, ev: 70.0, la: 19, pitchHeight: 3.5, result: "Single" },
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 2, pitchType: "Changeup", spinRate: 2004, ev: 77.4, la: -18, pitchHeight: 1.7, result: "Single" },
      { inning: 4, pitchType: "Sinker", spinRate: 2026, ev: 91.6, la: 50, pitchHeight: 2.5, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2057, ev: 67.6, la: -28, pitchHeight: 2.0, result: "Forceout" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2184, ev: 66.4, la: 59, pitchHeight: 3.2, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2049, ev: 79.8, la: -25, pitchHeight: 2.6, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 1978, ev: 85.8, la: 70, pitchHeight: 2.9, result: "Pop Out" },
    ]
  },
];

export default hittersData;
