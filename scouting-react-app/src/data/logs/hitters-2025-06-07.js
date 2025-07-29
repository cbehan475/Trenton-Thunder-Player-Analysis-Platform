const hittersData = [
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 1213, ev: 104.7, la: 4, pitchHeight: null, result: "Lineout" },
      { inning: 4, pitchType: "Sinker", spinRate: 1331, ev: 92.1, la: 37, pitchHeight: null, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 1614, ev: 106.7, la: -7, pitchHeight: null, result: "Forceout" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2131, ev: 71.0, la: 39, pitchHeight: null, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2142, ev: 96.7, la: -3, pitchHeight: null, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2442, ev: 61.7, la: -22, pitchHeight: null, result: "Field Error" },
      { inning: 6, pitchType: "Changeup", spinRate: 2156, ev: 76.3, la: 5, pitchHeight: null, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 2156, ev: 60.8, la: 8, pitchHeight: null, result: "Forceout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 6, pitchType: "Slider", spinRate: 2060, ev: 89.6, la: 8, pitchHeight: null, result: "Lineout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2086, ev: 76.5, la: 75, pitchHeight: null, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2086, ev: 92.1, la: -37, pitchHeight: null, result: "Single" }
    ]
  },
  {
    hitter: "Cole Leach",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2091, ev: 33.7, la: -63, pitchHeight: null, result: "Groundout" },
      { inning: 9, pitchType: "Changeup", spinRate: 1607, ev: 106.1, la: 8, pitchHeight: null, result: "Double" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 4, pitchType: "Sinker", spinRate: 2030, ev: 73.1, la: 23, pitchHeight: null, result: "Called Strike" },
      { inning: 5, pitchType: "Changeup", spinRate: 2044, ev: 98.1, la: 0, pitchHeight: null, result: "Groundout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2084, ev: 60.1, la: -69, pitchHeight: null, result: "Single" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2107, ev: 51.4, la: -51, pitchHeight: null, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2131, ev: 75.1, la: -42, pitchHeight: null, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2145, ev: 105.6, la: 3, pitchHeight: null, result: "Single" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2173, ev: 65.0, la: 73, pitchHeight: null, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1742, ev: 62.9, la: 17, pitchHeight: null, result: "Field Error" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Curveball", spinRate: 2135, ev: 64.8, la: 10, pitchHeight: null, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2136, ev: 67.2, la: -35, pitchHeight: null, result: "Groundout" },
      { inning: 4, pitchType: "Changeup", spinRate: 2134, ev: 80.0, la: 5, pitchHeight: null, result: "Foul" },
      { inning: 5, pitchType: "Curveball", spinRate: 2148, ev: 71.9, la: -25, pitchHeight: null, result: "Foul" },
      { inning: 5, pitchType: "Changeup", spinRate: 2148, ev: 54.0, la: -60, pitchHeight: null, result: "Groundout" },
      { inning: 7, pitchType: "Sinker", spinRate: 2167, ev: 97.3, la: 4, pitchHeight: null, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2188, ev: 83.4, la: 52, pitchHeight: null, result: "Flyout" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2119, ev: 96.5, la: 1, pitchHeight: null, result: "Single" },
      { inning: 4, pitchType: "Changeup", spinRate: 2135, ev: 90.0, la: 26, pitchHeight: null, result: "Double" },
      { inning: 6, pitchType: "Changeup", spinRate: 2154, ev: 71.8, la: 38, pitchHeight: null, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 2154, ev: 91.9, la: 26, pitchHeight: null, result: "Double" },
      { inning: 7, pitchType: "Slider", spinRate: 2168, ev: 43.5, la: -1, pitchHeight: null, result: "Groundout" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2020, ev: 81.6, la: 38, pitchHeight: null, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 2036, ev: 81.3, la: -3, pitchHeight: null, result: "Groundout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2105, ev: 92.8, la: 31, pitchHeight: null, result: "Flyout" },
      { inning: 3, pitchType: "Sinker", spinRate: 2122, ev: 60.2, la: 60, pitchHeight: null, result: "Double Play" },
      { inning: 5, pitchType: "Curveball", spinRate: 2143, ev: 86.8, la: 16, pitchHeight: null, result: "Single" },
      { inning: 7, pitchType: "Slider", spinRate: 2171, ev: 65.8, la: 33, pitchHeight: null, result: "Single" }
    ]
  },
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 8, pitchType: "Curveball", spinRate: 2181, ev: 59.6, la: 61, pitchHeight: null, result: "Foul" },
      { inning: 8, pitchType: "Changeup", spinRate: 2181, ev: 72.2, la: 6, pitchHeight: null, result: "Foul" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 6, pitchType: "Changeup", spinRate: 2159, ev: 49.8, la: 29, pitchHeight: null, result: "Single" },
      { inning: 7, pitchType: "Sinker", spinRate: 2173, ev: 76.6, la: 12, pitchHeight: null, result: "Lineout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2185, ev: 90.8, la: -19, pitchHeight: null, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2185, ev: 96.8, la: 11, pitchHeight: null, result: "Forceout" }
    ]
  }
];

export default hittersData;
