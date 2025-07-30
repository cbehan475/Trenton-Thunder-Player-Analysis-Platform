const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 7, pitchType: "Sinker", spinRate: 2119, ev: 103.8, la: -3, pitchHeight: 2.1, result: "Single" },
      { inning: 8, pitchType: "Changeup", spinRate: 1835, ev: 91.6, la: 22, pitchHeight: 3.2, result: "Lineout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2478, ev: 64.3, la: 39, pitchHeight: 2.9, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2514, ev: 61.5, la: 26, pitchHeight: 2.4, result: "Foul" },
      { inning: 5, pitchType: "Curveball", spinRate: 2920, ev: 86.7, la: 29, pitchHeight: 1.7, result: "Flyout" },
      { inning: 7, pitchType: "Slider", spinRate: 2774, ev: 76.4, la: 25, pitchHeight: 1.3, result: "Double" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2327, ev: 67.3, la: 52, pitchHeight: 3.3, result: "Foul" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 2018, ev: 68.1, la: 17, pitchHeight: 2.0, result: "Lineout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2224, ev: 71.8, la: 57, pitchHeight: 2.4, result: "Pop Out" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 1977, ev: 33.9, la: -28, pitchHeight: 2.5, result: "Single" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2298, ev: 72.1, la: 45, pitchHeight: 2.5, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2023, ev: 62.9, la: -19, pitchHeight: 1.8, result: "Forceout" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2009, ev: 36.4, la: -53, pitchHeight: 2.9, result: "Foul" },
      { inning: 1, pitchType: "Changeup", spinRate: 2060, ev: 81.1, la: 46, pitchHeight: 2.8, result: "Flyout" },
      { inning: 3, pitchType: "Slider", spinRate: 2078, ev: 100.5, la: -8, pitchHeight: 2.6, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2481, ev: 75.2, la: 12, pitchHeight: 2.7, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2161, ev: 73.3, la: 12, pitchHeight: 2.4, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2540, ev: 68.4, la: 75, pitchHeight: 2.3, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 1749, ev: 93.6, la: -14, pitchHeight: 2.0, result: "Single" },
      { inning: 7, pitchType: "Changeup", spinRate: 1861, ev: 83.5, la: 68, pitchHeight: 2.2, result: "Pop Out" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2303, ev: 104.6, la: 30, pitchHeight: 3.1, result: "Home Run" },
      { inning: 3, pitchType: "Slider", spinRate: 2051, ev: 64.4, la: 57, pitchHeight: 2.5, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2137, ev: 51.7, la: -29, pitchHeight: 1.6, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2507, ev: 75.2, la: 17, pitchHeight: 2.6, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2935, ev: 57.2, la: -35, pitchHeight: 2.2, result: "Groundout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 7, pitchType: "Slider", spinRate: 2747, ev: 102.0, la: 5, pitchHeight: 2.3, result: "Single" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2334, ev: 75.0, la: 18, pitchHeight: 3.5, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 1955, ev: 84.0, la: -14, pitchHeight: 2.1, result: "Single" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 6, pitchType: "Curveball", spinRate: 2486, ev: 75.1, la: -1, pitchHeight: 1.9, result: "Single" },
      { inning: 7, pitchType: "Sinker", spinRate: 2387, ev: 73.8, la: 53, pitchHeight: 3.8, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 2356, ev: 74.3, la: 70, pitchHeight: 2.5, result: "Foul" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 1824, ev: 90.0, la: 27, pitchHeight: 2.8, result: "Flyout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2374, ev: 91.2, la: -6, pitchHeight: 2.7, result: "Groundout" },
      { inning: 6, pitchType: "Sinker", spinRate: 1988, ev: 79.9, la: 36, pitchHeight: 2.1, result: "Flyout" },
      { inning: 7, pitchType: "Sinker", spinRate: 2414, ev: 89.2, la: 64, pitchHeight: 2.3, result: "Pop Out" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 5, pitchType: "Sinker", spinRate: 2413, ev: 80.5, la: 22, pitchHeight: 1.4, result: "Single" },
      { inning: 6, pitchType: "", spinRate: 2024, ev: 84.5, la: 82, pitchHeight: 3.3, result: "Error" },
      { inning: 6, pitchType: "Sinker", spinRate: 2024, ev: 84.5, la: 82, pitchHeight: 3.3, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2280, ev: 25.9, la: -35, pitchHeight: 0.6, result: "Forceout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2437, ev: 99.9, la: 13, pitchHeight: 2.1, result: "Single" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 67.7, la: 69, pitchHeight: 2.3, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 1956, ev: 71.1, la: 69, pitchHeight: 3.6, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1986, ev: 87.4, la: 47, pitchHeight: 2.7, result: "Flyout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2338, ev: 57.1, la: 48, pitchHeight: 2.9, result: "Foul" }
    ]
  }
];

export default hittersData;
