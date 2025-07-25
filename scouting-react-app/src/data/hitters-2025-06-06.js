const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 9, pitchType: "Curveball", spinRate: 2312, ev: 80.1, la: 8, pitchHeight: 2.7, result: "Grounded Into DP" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2109, ev: 73.6, la: -9, pitchHeight: 2.2, result: "Groundout" },
      { inning: 4, pitchType: "Slider", spinRate: 2581, ev: 62.7, la: 37, pitchHeight: 1.8, result: "Foul" }
    ]
  },
  {
    hitter: "Cole Leach",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2091, ev: 33.7, la: -63, pitchHeight: 1.6, result: "Groundout" },
      { inning: 9, pitchType: "Changeup", spinRate: 1607, ev: 106.1, la: 8, pitchHeight: 2.0, result: "Double" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2080, ev: 85.8, la: 41, pitchHeight: 2.2, result: "Flyout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2146, ev: 85.5, la: 34, pitchHeight: 3.2, result: "Flyout" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 8, pitchType: "Changeup", spinRate: 2180, ev: 61.0, la: -31, pitchHeight: 1.5, result: "Groundout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 3, pitchType: "Curveball", spinRate: 2753, ev: 35.8, la: -30, pitchHeight: 1.4, result: "Groundout" },
      { inning: 5, pitchType: "Curveball", spinRate: 2698, ev: 22.6, la: -33, pitchHeight: 1.2, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2086, ev: 101.8, la: 19, pitchHeight: 2.9, result: "Foul" },
      { inning: 2, pitchType: "Changeup", spinRate: 1795, ev: 33.6, la: -55, pitchHeight: 1.4, result: "Groundout" },
      { inning: 5, pitchType: "Sinker", spinRate: 2014, ev: 87.1, la: 12, pitchHeight: 1.8, result: "Single" },
      { inning: 7, pitchType: "Sinker", spinRate: 2095, ev: 89.6, la: 45, pitchHeight: 2.5, result: "Flyout" },
      { inning: 9, pitchType: "Changeup", spinRate: 1561, ev: 48.0, la: -22, pitchHeight: 2.3, result: "Single" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1959, ev: 101.9, la: -7, pitchHeight: 2.6, result: "Single" },
      { inning: 3, pitchType: "Curveball", spinRate: 2704, ev: 82.4, la: -22, pitchHeight: 2.3, result: "Foul" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2143, ev: 76.9, la: -6, pitchHeight: 2.4, result: "Foul" },
      { inning: 4, pitchType: "Curveball", spinRate: 2611, ev: 82.7, la: -20, pitchHeight: 2.4, result: "Groundout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2322, ev: 94.5, la: -1, pitchHeight: 2.5, result: "Single" },
      { inning: 9, pitchType: "Curveball", spinRate: 2316, ev: 81.9, la: 50, pitchHeight: 2.7, result: "Flyout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 8, pitchType: "Curveball", spinRate: 2191, ev: 76.4, la: 36, pitchHeight: 2.5, result: "Flyout" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 7, pitchType: "Changeup", spinRate: 1687, ev: 89.9, la: 0, pitchHeight: 1.9, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1602, ev: 78.0, la: 75, pitchHeight: 3.4, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1386, ev: 86.5, la: 4, pitchHeight: 2.6, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1324, ev: 100.0, la: 19, pitchHeight: 1.4, result: "Double" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 2667, ev: 67.0, la: -20, pitchHeight: 2.0, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2669, ev: 104.6, la: 7, pitchHeight: 1.4, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2177, ev: 74.6, la: 27, pitchHeight: 3.6, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2593, ev: 85.2, la: 46, pitchHeight: 2.2, result: "Flyout" },
      { inning: 9, pitchType: "Changeup", spinRate: 1540, ev: 82.8, la: 64, pitchHeight: 2.2, result: "Foul" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2173, ev: 65.0, la: 73, pitchHeight: 2.0, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1742, ev: 62.9, la: 17, pitchHeight: 2.9, result: "Field Error" }
    ]
  }
];

export default hittersData;
