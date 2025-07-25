const hittersData = [
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2074, ev: 100.6, la: 12, pitchHeight: 2.8, result: "Single" },
      { inning: 4, pitchType: "Curveball", spinRate: 2195, ev: 74.5, la: -17, pitchHeight: 2.3, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1925, ev: 71.4, la: -33, pitchHeight: 1.6, result: "Groundout" },
      { inning: 3, pitchType: "Changeup", spinRate: 1940, ev: 96.4, la: 12, pitchHeight: 2.6, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2063, ev: 75.0, la: 13, pitchHeight: 3.3, result: "Foul" },
      { inning: 7, pitchType: "Curveball", spinRate: 2587, ev: 99.7, la: -1, pitchHeight: 2.0, result: "Grounded Into DP" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 1875, ev: 87.5, la: 55, pitchHeight: 2.7, result: "Foul" },
      { inning: 2, pitchType: "Changeup", spinRate: 1998, ev: 100.6, la: 19, pitchHeight: 2.6, result: "Lineout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2087, ev: 78.5, la: 3, pitchHeight: 2.9, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 8, pitchType: "Slider", spinRate: 2122, ev: 64.8, la: 18, pitchHeight: 1.8, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 1968, ev: 34.7, la: 54, pitchHeight: 2.6, result: "Pop Out" },
      { inning: 9, pitchType: "Sinker", spinRate: 1777, ev: 56.9, la: -33, pitchHeight: 2.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 9, pitchType: "Sinker", spinRate: 1890, ev: 101.8, la: 0, pitchHeight: 2.5, result: "Single" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 6, pitchType: "Curveball", spinRate: 2525, ev: 66.8, la: 18, pitchHeight: 2.1, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 1840, ev: 70.0, la: 59, pitchHeight: 2.5, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2017, ev: 78.4, la: 43, pitchHeight: 3.2, result: "Flyout" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1989, ev: 70.9, la: 46, pitchHeight: 2.9, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2119, ev: 109.7, la: -23, pitchHeight: 1.7, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2284, ev: 69.2, la: 79, pitchHeight: 1.8, result: "Foul" },
      { inning: 1, pitchType: "Changeup", spinRate: 2067, ev: 61.4, la: 73, pitchHeight: 3.2, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 2018, ev: 62.8, la: 46, pitchHeight: 2.3, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2090, ev: 90.3, la: -4, pitchHeight: 2.1, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 2043, ev: 73.2, la: -35, pitchHeight: 2.0, result: "Groundout" },
      { inning: 5, pitchType: "Changeup", spinRate: 1960, ev: 73.9, la: -28, pitchHeight: 1.6, result: "Field Error" }
    ]
  },
  {
    hitter: "Justin Fogel",
    atBats: [
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2392, ev: 67.6, la: -3, pitchHeight: 3.3, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2553, ev: 76.9, la: 45, pitchHeight: 3.6, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2394, ev: 62.2, la: 45, pitchHeight: 3.2, result: "Foul" },
      { inning: 6, pitchType: "Changeup", spinRate: 1546, ev: 77.5, la: -58, pitchHeight: 2.8, result: "Single" },
      { inning: 8, pitchType: "Sinker", spinRate: 1918, ev: 94.7, la: -7, pitchHeight: 2.3, result: "Groundout" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 1800, ev: 81.2, la: 52, pitchHeight: 2.0, result: "Flyout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 3, pitchType: "Slider", spinRate: 2230, ev: 46.2, la: 76, pitchHeight: 2.4, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1967, ev: 92.2, la: -9, pitchHeight: 1.7, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2065, ev: 73.2, la: -42, pitchHeight: 2.7, result: "Groundout" }
    ]
  },
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 6, pitchType: "Sinker", spinRate: 2382, ev: 74.5, la: 33, pitchHeight: 3.0, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2536, ev: 91.1, la: 7, pitchHeight: 1.9, result: "Double Play" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 4, pitchType: "Slider", spinRate: 2092, ev: 86.3, la: 47, pitchHeight: 2.4, result: "Flyout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2013, ev: 95.5, la: 6, pitchHeight: 2.3, result: "Single" }
    ]
  }
];

export default hittersData;