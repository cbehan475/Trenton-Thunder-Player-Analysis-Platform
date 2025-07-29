const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 1917, ev: 63.2, la: 53, pitchHeight: 3.2, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 1907, ev: 86.6, la: -24, pitchHeight: 1.7, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2001, ev: 81.0, la: -10, pitchHeight: 2.8, result: "Groundout" },
      { inning: 3, pitchType: "Slider", spinRate: 1964, ev: 94.7, la: 35, pitchHeight: 2.7, result: "Flyout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2105, ev: 70.9, la: 69, pitchHeight: 3.4, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2052, ev: 75.1, la: 66, pitchHeight: 3.0, result: "Pop Out" },
      { inning: 7, pitchType: "Sinker", spinRate: 2213, ev: 69.0, la: 43, pitchHeight: 2.9, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2747, ev: 90.8, la: 21, pitchHeight: 3.5, result: "Lineout" },
      { inning: 9, pitchType: "Slider", spinRate: 2526, ev: 97.3, la: 1, pitchHeight: 3.8, result: "Groundout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2044, ev: 74.8, la: 68, pitchHeight: 3.6, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2059, ev: 96.5, la: -11, pitchHeight: 2.6, result: "Groundout" },
      { inning: 6, pitchType: "Slider", spinRate: 2970, ev: 64.1, la: 76, pitchHeight: 3.1, result: "Foul" }
    ]
  },
  {
    hitter: "Cole Leach",
    atBats: [
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2224, ev: 97.0, la: 19, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2106, ev: 74.2, la: 17, pitchHeight: 3.4, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 1991, ev: 98.6, la: 5, pitchHeight: 2.9, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1988, ev: 67.7, la: 31, pitchHeight: 2.1, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2020, ev: 86.5, la: 23, pitchHeight: 1.1, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2077, ev: 74.0, la: 48, pitchHeight: 3.6, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 1585, ev: 95.4, la: 26, pitchHeight: 2.2, result: "Flyout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 1935, ev: 92.6, la: 29, pitchHeight: 2.2, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 1917, ev: 94.0, la: 20, pitchHeight: 2.1, result: "Lineout" },
      { inning: 5, pitchType: "Slider", spinRate: 1976, ev: 84.5, la: 19, pitchHeight: 1.9, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 2297, ev: 89.0, la: 22, pitchHeight: 2.5, result: "Lineout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2361, ev: 86.8, la: 14, pitchHeight: 2.3, result: "Single" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 1917, ev: 74.0, la: 23, pitchHeight: 3.0, result: "Double" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2073, ev: 79.2, la: 65, pitchHeight: 3.2, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 1976, ev: 65.7, la: -16, pitchHeight: 2.0, result: "Groundout" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 1497, ev: 59.0, la: -49, pitchHeight: 2.7, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1999, ev: 70.3, la: 44, pitchHeight: 2.5, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2003, ev: 77.6, la: -32, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2718, ev: 72.4, la: -8, pitchHeight: 3.0, result: "Groundout" },
      { inning: 9, pitchType: "Slider", spinRate: 2780, ev: 94.8, la: 11, pitchHeight: 3.0, result: "Single" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2200, ev: 85.8, la: -7, pitchHeight: 2.5, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 2159, ev: 59.3, la: 40, pitchHeight: 3.6, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2046, ev: 77.1, la: -3, pitchHeight: 2.0, result: "Single" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2067, ev: 92.3, la: 17, pitchHeight: 3.0, result: "Single" },
      { inning: 8, pitchType: "Changeup", spinRate: 2008, ev: 103.2, la: 22, pitchHeight: 2.0, result: "Home Run" },
      { inning: 9, pitchType: "Slider", spinRate: 2734, ev: 84.1, la: 32, pitchHeight: 2.3, result: "Flyout" }
    ]
  },
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 1967, ev: 61.4, la: 32, pitchHeight: 3.7, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2088, ev: 72.1, la: -31, pitchHeight: 2.2, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1963, ev: 42.9, la: -4, pitchHeight: 2.7, result: "Ball" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2066, ev: 86.4, la: 6, pitchHeight: 3.0, result: "Double" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2306, ev: 74.2, la: 14, pitchHeight: 3.7, result: "Single" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 9, pitchType: "Slider", spinRate: 2685, ev: 98.6, la: 11, pitchHeight: 3.1, result: "Single" }
    ]
  },
];

export default hittersData;