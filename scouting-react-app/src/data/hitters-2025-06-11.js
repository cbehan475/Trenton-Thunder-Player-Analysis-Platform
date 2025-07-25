const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2116, ev: 72.0, la: 48, pitchHeight: 3.1, result: "Foul" },
      { inning: 2, pitchType: "Cutter", spinRate: 2286, ev: 53.2, la: 53, pitchHeight: 2.6, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2427, ev: 79.1, la: -14, pitchHeight: 3.3, result: "Groundout" },
      { inning: 6, pitchType: "Cutter", spinRate: 2384, ev: 60.7, la: -48, pitchHeight: 2.5, result: "Groundout" },
      { inning: 9, pitchType: "Slider", spinRate: 2682, ev: 57.7, la: 29, pitchHeight: 1.8, result: "Single" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2124, ev: 108.1, la: 17, pitchHeight: 2.1, result: "Double" },
      { inning: 5, pitchType: "Sinker", spinRate: 2462, ev: 81.8, la: -53, pitchHeight: 1.6, result: "Groundout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2261, ev: 66.9, la: 21, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 8, pitchType: "Slider", spinRate: 2556, ev: 68.6, la: 6, pitchHeight: 2.0, result: "Foul" },
      { inning: 8, pitchType: "Sinker", spinRate: 2162, ev: 71.2, la: 12, pitchHeight: 3.3, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2626, ev: 66.5, la: 62, pitchHeight: 2.6, result: "Foul" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 3, pitchType: "Cutter", spinRate: 2127, ev: 58.7, la: -73, pitchHeight: 2.0, result: "Single" },
      { inning: 4, pitchType: "Slider", spinRate: 1775, ev: 90.3, la: 72, pitchHeight: 3.2, result: "Pop Out" },
      { inning: 7, pitchType: "Sinker", spinRate: 2225, ev: 80.8, la: -11, pitchHeight: 2.5, result: "Groundout" },
      { inning: 9, pitchType: "Slider", spinRate: 2631, ev: 78.1, la: 44, pitchHeight: 2.7, result: "Sac Fly" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2160, ev: 82.4, la: 6, pitchHeight: 2.7, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2069, ev: 72.1, la: 62, pitchHeight: 3.1, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2086, ev: 99.0, la: 44, pitchHeight: 2.2, result: "Home Run" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 3, pitchType: "Curveball", spinRate: 2544, ev: 97.0, la: 17, pitchHeight: 0.9, result: "Single" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2075, ev: 99.5, la: 14, pitchHeight: 1.9, result: "Single" },
      { inning: 7, pitchType: "Slider", spinRate: 2583, ev: 78.2, la: 40, pitchHeight: 1.6, result: "Foul" },
      { inning: 7, pitchType: "Cutter", spinRate: 2343, ev: 71.7, la: 35, pitchHeight: 2.2, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2550, ev: 103.7, la: 24, pitchHeight: 2.3, result: "Flyout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 1, pitchType: "Cutter", spinRate: 2310, ev: 85.1, la: -28, pitchHeight: 1.7, result: "Groundout" },
      { inning: 3, pitchType: "Cutter", spinRate: 2346, ev: 74.6, la: 43, pitchHeight: 1.4, result: "Foul" }
    ]
  },
  {
    hitter: "Justin Fogel",
    atBats: [
      { inning: 6, pitchType: "Slider", spinRate: 2646, ev: 86.6, la: 23, pitchHeight: 1.9, result: "Lineout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2280, ev: 65.0, la: 29, pitchHeight: 1.2, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2209, ev: 97.3, la: 5, pitchHeight: 1.5, result: "Single" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2266, ev: 67.7, la: 0, pitchHeight: 2.7, result: "Ball" },
      { inning: 7, pitchType: "Cutter", spinRate: 2431, ev: 93.7, la: 21, pitchHeight: 2.1, result: "Lineout" },
      { inning: 9, pitchType: "Changeup", spinRate: 1893, ev: 77.5, la: -2, pitchHeight: 4.1, result: "Ball" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2280, ev: 97.6, la: 12, pitchHeight: 2.8, result: "Double" },
      { inning: 4, pitchType: "Cutter", spinRate: 2109, ev: 69.8, la: 54, pitchHeight: 2.9, result: "Flyout" }
    ]
  },
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2266, ev: 43.0, la: -18, pitchHeight: 3.3, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2195, ev: 59.8, la: 52, pitchHeight: 3.2, result: "Foul" },
      { inning: 6, pitchType: "Cutter", spinRate: 2407, ev: 70.2, la: 46, pitchHeight: 3.1, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2502, ev: 50.5, la: -11, pitchHeight: 1.7, result: "Groundout" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2085, ev: 75.5, la: -6, pitchHeight: 2.5, result: "Grounded Into DP" },
      { inning: 5, pitchType: "Sinker", spinRate: 2424, ev: 69.1, la: -5, pitchHeight: 2.7, result: "Foul" }
    ]
  }
];

export default hittersData;