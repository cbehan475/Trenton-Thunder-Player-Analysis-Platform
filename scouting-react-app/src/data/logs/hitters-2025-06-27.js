const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 1909, ev: 74.7, la: 45, pitchHeight: 2.2, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2026, ev: 65.2, la: 39, pitchHeight: 4.1, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2007, ev: 66.1, la: 57, pitchHeight: 2.8, result: "Foul" },
      { inning: 5, pitchType: "Changeup", spinRate: 1929, ev: 96.5, la: -2, pitchHeight: 2.2, result: "Groundout" },
      { inning: 7, pitchType: "Slider", spinRate: 2624, ev: 59.4, la: 8, pitchHeight: 2.0, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2485, ev: 68.4, la: 34, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2723, ev: 54.1, la: 44, pitchHeight: 1.7, result: "Pop Out" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Changeup", spinRate: 1911, ev: 67.7, la: 33, pitchHeight: 3.4, result: "Foul" },
      { inning: 1, pitchType: "Sinker", spinRate: 2022, ev: 81.5, la: 18, pitchHeight: 2.1, result: "Lineout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 1866, ev: 84.2, la: 36, pitchHeight: 2.2, result: "Flyout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1908, ev: 99.3, la: 24, pitchHeight: 2.0, result: "Flyout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2425, ev: 75.0, la: 67, pitchHeight: 1.9, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2379, ev: 62.2, la: 49, pitchHeight: 3.5, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 1857, ev: 68.4, la: 66, pitchHeight: 2.5, result: "Pop Out" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2373, ev: 60.6, la: 54, pitchHeight: 3.2, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2213, ev: 79.7, la: 8, pitchHeight: 2.0, result: "Groundout" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 2, pitchType: "Changeup", spinRate: 1819, ev: 79.6, la: 31, pitchHeight: 2.7, result: "Sac Fly" },
      { inning: 5, pitchType: "Sinker", spinRate: 1982, ev: 71.1, la: 50, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 2430, ev: 71.9, la: 25, pitchHeight: 3.2, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2577, ev: 72.5, la: 58, pitchHeight: 3.5, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2618, ev: 82.8, la: 44, pitchHeight: 3.5, result: "Flyout" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 3, pitchType: "Changeup", spinRate: 1945, ev: 77.4, la: -16, pitchHeight: 3.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 1966, ev: 81.5, la: 55, pitchHeight: 2.4, result: "Pop Out" },
      { inning: 3, pitchType: "Slider", spinRate: 1880, ev: 64.7, la: 82, pitchHeight: 2.1, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2439, ev: 104.7, la: -14, pitchHeight: 3.0, result: "Groundout" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2024, ev: 78.1, la: 49, pitchHeight: 3.0, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 1936, ev: 74.3, la: 71, pitchHeight: 2.7, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1955, ev: 78.0, la: 75, pitchHeight: 3.1, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1969, ev: 98.4, la: 15, pitchHeight: 2.6, result: "Single" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2269, ev: 98.5, la: 24, pitchHeight: 4.0, result: "Flyout" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Changeup", spinRate: 1970, ev: 64.5, la: -28, pitchHeight: 1.4, result: "Foul" },
      { inning: 2, pitchType: "Changeup", spinRate: 1963, ev: 77.5, la: 69, pitchHeight: 2.4, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 1893, ev: 35.4, la: -37, pitchHeight: 1.4, result: "Groundout" },
      { inning: 7, pitchType: "Changeup", spinRate: 1836, ev: 100.6, la: 10, pitchHeight: 1.9, result: "Lineout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2381, ev: 75.7, la: 76, pitchHeight: 3.5, result: "Pop Out" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 7, pitchType: "Changeup", spinRate: 1996, ev: 88.6, la: 37, pitchHeight: 2.3, result: "Foul" },
      { inning: 7, pitchType: "Curveball", spinRate: 1797, ev: 72.1, la: -29, pitchHeight: 2.2, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 2201, ev: 69.6, la: 20, pitchHeight: 2.8, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 2062, ev: 80.5, la: 14, pitchHeight: 2.0, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 1857, ev: 88.7, la: 18, pitchHeight: 3.0, result: "Single" },
      { inning: 9, pitchType: "Cutter", spinRate: 2421, ev: 56.2, la: -44, pitchHeight: 1.8, result: "Groundout" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 1932, ev: 91.4, la: 36, pitchHeight: 2.4, result: "Flyout" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 2, pitchType: "Changeup", spinRate: 1917, ev: 68.3, la: 70, pitchHeight: 2.7, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1899, ev: 74.8, la: 6, pitchHeight: 3.5, result: "Foul" }
    ]
  }
];

export default hittersData;
