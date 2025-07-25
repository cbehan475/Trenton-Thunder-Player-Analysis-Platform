const hittersData = [
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 7, pitchType: "Changeup", spinRate: 1607, ev: 67.2, la: -56, pitchHeight: 1.9, result: "Field Error" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 1656, ev: 94.9, la: -2, pitchHeight: 2.0, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2114, ev: 63.1, la: 8, pitchHeight: 3.1, result: "Lineout" },
      { inning: 3, pitchType: "Slider", spinRate: 2028, ev: 82.2, la: 30, pitchHeight: 2.5, result: "Flyout" },
      { inning: 6, pitchType: "Changeup", spinRate: 2226, ev: 68.3, la: 26, pitchHeight: 2.4, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 2185, ev: 77.2, la: 39, pitchHeight: 2.0, result: "Sac Fly" },
      { inning: 9, pitchType: "Curveball", spinRate: 2783, ev: 73.3, la: 18, pitchHeight: 1.3, result: "Single" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2169, ev: 95.6, la: 13, pitchHeight: 2.2, result: "Single" },
      { inning: 3, pitchType: "Sinker", spinRate: 1581, ev: 58.9, la: -66, pitchHeight: 2.2, result: "Groundout" },
      { inning: 6, pitchType: "Changeup", spinRate: 2191, ev: 97.2, la: 28, pitchHeight: 2.7, result: "Sac Fly" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 1703, ev: 72.4, la: 22, pitchHeight: 3.5, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2094, ev: 77.2, la: 1, pitchHeight: 2.2, result: "Single" },
      { inning: 5, pitchType: "Changeup", spinRate: 1598, ev: 64.4, la: -15, pitchHeight: 2.2, result: "Foul" },
      { inning: 5, pitchType: "Changeup", spinRate: 2215, ev: 84.6, la: 43, pitchHeight: 2.9, result: "Flyout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2221, ev: 45.3, la: 23, pitchHeight: 2.4, result: "Forceout" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 1674, ev: 83.4, la: 26, pitchHeight: 3.2, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 1770, ev: 86.1, la: 63, pitchHeight: 2.8, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 1513, ev: 96.0, la: 31, pitchHeight: 2.3, result: "Flyout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2226, ev: 75.1, la: -12, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2358, ev: 84.7, la: 24, pitchHeight: 1.7, result: "Foul" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 5, pitchType: "Changeup", spinRate: 2222, ev: 72.2, la: 55, pitchHeight: 3.0, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2174, ev: 73.7, la: 68, pitchHeight: 2.8, result: "Foul" }
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
      { inning: 1, pitchType: "Changeup", spinRate: 1675, ev: 71.4, la: 6, pitchHeight: 1.9, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 1635, ev: 77.3, la: 42, pitchHeight: 3.0, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1615, ev: 89.0, la: 28, pitchHeight: 2.3, result: "Flyout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 6, pitchType: "Changeup", spinRate: 2156, ev: 80.9, la: 36, pitchHeight: 2.0, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 2169, ev: 55.8, la: -46, pitchHeight: 2.1, result: "Groundout" },
      { inning: 7, pitchType: "Changeup", spinRate: 2063, ev: 73.3, la: 15, pitchHeight: 1.9, result: "Lineout" }
    ]
  },
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 5, pitchType: "Changeup", spinRate: 2193, ev: 55.9, la: -66, pitchHeight: 1.9, result: "Forceout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2342, ev: 91.2, la: 5, pitchHeight: 2.6, result: "Groundout" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 1610, ev: 88.3, la: -1, pitchHeight: 2.9, result: "Groundout" },
      { inning: 4, pitchType: "Slider", spinRate: 2237, ev: 73.1, la: 6, pitchHeight: 2.6, result: "Lineout" },
      { inning: 7, pitchType: "Changeup", spinRate: 2155, ev: 85.1, la: 15, pitchHeight: 2.8, result: "Single" }
    ]
  }
];

export default hittersData;
