const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1978, ev: 74.9, la: 38, pitchHeight: 2.7, result: "Single" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 1952, ev: 78.0, la: -21, pitchHeight: 2.1, result: "Groundout" },
      { inning: 6, pitchType: "Slider", spinRate: 1715, ev: 70.6, la: 8, pitchHeight: 2.3, result: "Single" },
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1902, ev: 62.4, la: 46, pitchHeight: 2.2, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1957, ev: 75.3, la: 15, pitchHeight: 3.7, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 1969, ev: 92.4, la: 24, pitchHeight: 2.6, result: "Double" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1826, ev: 64.5, la: 54, pitchHeight: 2.5, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 1616, ev: 84.9, la: 19, pitchHeight: 2.9, result: "Single" },
      { inning: 6, pitchType: "Slider", spinRate: 1675, ev: 85.8, la: 35, pitchHeight: 3.2, result: "Flyout" },
      { inning: 8, pitchType: "Curveball", spinRate: 2073, ev: 71.4, la: 52, pitchHeight: 2.4, result: "Pop Out" },
      { inning: 9, pitchType: "Sinker", spinRate: 2169, ev: 51.8, la: -36, pitchHeight: 3.1, result: "Field Error" },
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2126, ev: 81.2, la: 6, pitchHeight: 2.8, result: "Foul" },
      { inning: 8, pitchType: "Sinker", spinRate: 2103, ev: 91.6, la: 18, pitchHeight: 1.8, result: "Lineout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2389, ev: 75.6, la: 18, pitchHeight: 2.3, result: "Foul" },
      { inning: 9, pitchType: "Cutter", spinRate: 2379, ev: 71.6, la: 69, pitchHeight: 2.5, result: "Foul" },
      { inning: 9, pitchType: "Curveball", spinRate: 2301, ev: 78.8, la: -31, pitchHeight: 2.3, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2145, ev: 33.1, la: -4, pitchHeight: 2.8, result: "Foul" },
      { inning: 9, pitchType: "Curveball", spinRate: 2004, ev: 69.0, la: 2, pitchHeight: 1.6, result: "Foul" },
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2040, ev: 82.6, la: 66, pitchHeight: 3.6, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2132, ev: 79.2, la: -27, pitchHeight: 2.8, result: "Groundout" },
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 7, pitchType: "Sinker", spinRate: 2287, ev: 71.9, la: -63, pitchHeight: 2.2, result: "Groundout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2394, ev: 54.6, la: 19, pitchHeight: 2.5, result: "Single" },
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2065, ev: 78.3, la: 7, pitchHeight: 3.1, result: "Foul" },
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 9, pitchType: "Sinker", spinRate: 2335, ev: 70.0, la: 33, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2082, ev: 70.8, la: 19, pitchHeight: 3.2, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2242, ev: 91.5, la: -8, pitchHeight: 1.9, result: "Single" },
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2284, ev: 87.4, la: 13, pitchHeight: 1.5, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2322, ev: 104.8, la: 10, pitchHeight: 2.2, result: "Double" },
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 4, pitchType: "Changeup", spinRate: 1953, ev: 87.7, la: 14, pitchHeight: 2.3, result: "Single" },
      { inning: 5, pitchType: "Changeup", spinRate: 1757, ev: 103.0, la: 11, pitchHeight: 2.4, result: "Single" },
      { inning: 8, pitchType: "Cutter", spinRate: 2523, ev: 54.1, la: -39, pitchHeight: 1.7, result: "Field Error" },
      { inning: 9, pitchType: "Sinker", spinRate: 2334, ev: 78.8, la: 17, pitchHeight: 3.2, result: "Foul" },
      { inning: 9, pitchType: "Cutter", spinRate: 2543, ev: 76.5, la: 44, pitchHeight: 2.6, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2220, ev: 100.2, la: 26, pitchHeight: 1.9, result: "Double" },
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 1, pitchType: "Changeup", spinRate: 2113, ev: 78.3, la: 72, pitchHeight: 3.6, result: "Foul" },
      { inning: 1, pitchType: "Changeup", spinRate: 1974, ev: 84.6, la: 45, pitchHeight: 2.6, result: "Sac Fly" },
      { inning: 3, pitchType: "Changeup", spinRate: 2053, ev: 67.0, la: 26, pitchHeight: 2.8, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1928, ev: 88.8, la: -3, pitchHeight: 2.8, result: "Single" },
      { inning: 7, pitchType: "Sinker", spinRate: 2274, ev: 101.6, la: 16, pitchHeight: 2.1, result: "Lineout" },
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1869, ev: 74.7, la: 58, pitchHeight: 3.0, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2001, ev: 70.2, la: 34, pitchHeight: 2.8, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 2066, ev: 87.1, la: 2, pitchHeight: 2.4, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2045, ev: 106.9, la: 20, pitchHeight: 2.0, result: "Lineout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1868, ev: 70.4, la: 29, pitchHeight: 1.7, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1860, ev: 77.2, la: 5, pitchHeight: 1.9, result: "Forceout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2341, ev: 104.3, la: 25, pitchHeight: 1.4, result: "Double" },
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2071, ev: 46.7, la: -55, pitchHeight: 2.0, result: "Groundout" },
      { inning: 4, pitchType: "Changeup", spinRate: 1969, ev: 72.6, la: 18, pitchHeight: 3.5, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 1968, ev: 57.2, la: 40, pitchHeight: 2.2, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 1930, ev: 65.2, la: 32, pitchHeight: 3.6, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1992, ev: 45.0, la: -16, pitchHeight: 2.3, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1970, ev: 68.0, la: 31, pitchHeight: 3.4, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1930, ev: 69.8, la: 16, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2024, ev: 70.2, la: 54, pitchHeight: 2.1, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1974, ev: 57.9, la: 13, pitchHeight: 3.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1975, ev: 77.7, la: 69, pitchHeight: 2.9, result: "Pop Out" },
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 5, pitchType: "Changeup", spinRate: 1746, ev: 70.9, la: 58, pitchHeight: 2.1, result: "Foul" },
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 9, pitchType: "Sinker", spinRate: 2423, ev: 78.0, la: -12, pitchHeight: 2.5, result: "Groundout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2349, ev: 95.5, la: 39, pitchHeight: 2.3, result: "Flyout" },
    ]
  },
];

export default hittersData;
