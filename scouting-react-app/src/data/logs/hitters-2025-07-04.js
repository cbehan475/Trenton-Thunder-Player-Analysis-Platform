const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 3, pitchType: "Cutter", spinRate: 2485, ev: 89.1, la: 5, pitchHeight: 3.0, result: "Single" },
      { inning: 6, pitchType: "Sinker", spinRate: 2351, ev: 89.5, la: 6, pitchHeight: 1.8, result: "Single" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2369, ev: 69.1, la: -21, pitchHeight: 2.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 2, pitchType: "Cutter", spinRate: 2542, ev: 61.4, la: 37, pitchHeight: 3.4, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2431, ev: 72.1, la: 23, pitchHeight: 3.2, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2554, ev: 74.8, la: 60, pitchHeight: 2.6, result: "Pop Out" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2047, ev: 68.6, la: 58, pitchHeight: 3.3, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2234, ev: 84.4, la: 57, pitchHeight: 3.5, result: "Pop Out" },
      { inning: 6, pitchType: "Curveball", spinRate: 2514, ev: 81.6, la: 23, pitchHeight: 2.8, result: "Lineout" },
      { inning: 9, pitchType: "Slider", spinRate: 2444, ev: 83.8, la: 4, pitchHeight: 2.7, result: "Single" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 3, pitchType: "Changeup", spinRate: 1506, ev: 89.2, la: 23, pitchHeight: 3.1, result: "Lineout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2235, ev: 94.0, la: 36, pitchHeight: 3.1, result: "Flyout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2344, ev: 81.5, la: 49, pitchHeight: 1.8, result: "Pop Out" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2275, ev: 66.3, la: 50, pitchHeight: 2.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2298, ev: 98.8, la: -6, pitchHeight: 2.6, result: "Groundout" },
      { inning: 9, pitchType: "Curveball", spinRate: 2404, ev: 96.1, la: 25, pitchHeight: 2.5, result: "Double" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2348, ev: 86.4, la: 20, pitchHeight: 2.2, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2460, ev: 102.9, la: -9, pitchHeight: 2.0, result: "Single" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Cutter", spinRate: 2430, ev: 104.5, la: -31, pitchHeight: 3.3, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 1950, ev: 90.0, la: 37, pitchHeight: 2.4, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2060, ev: 78.1, la: 58, pitchHeight: 3.0, result: "Pop Out" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2402, ev: 69.7, la: 26, pitchHeight: 2.9, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2393, ev: 73.6, la: 15, pitchHeight: 2.8, result: "Foul" },
      { inning: 8, pitchType: "Curveball", spinRate: 2357, ev: 56.1, la: -35, pitchHeight: 2.1, result: "Groundout" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 8, pitchType: "Curveball", spinRate: 2346, ev: 99.9, la: 18, pitchHeight: 1.5, result: "Foul" },
      { inning: 8, pitchType: "Curveball", spinRate: 2462, ev: 64.7, la: -30, pitchHeight: 2.2, result: "Groundout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 4, pitchType: "Curveball", spinRate: 2683, ev: 84.8, la: 29, pitchHeight: 1.7, result: "Flyout" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 5, pitchType: "Curveball", spinRate: 2683, ev: 62.7, la: 28, pitchHeight: 2.2, result: "Foul" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2092, ev: 68.7, la: 65, pitchHeight: 3.8, result: "Foul" },
      { inning: 3, pitchType: "Cutter", spinRate: 2650, ev: 95.6, la: 4, pitchHeight: 2.3, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2392, ev: 86.5, la: 11, pitchHeight: 1.6, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2431, ev: 78.7, la: 73, pitchHeight: 2.7, result: "Pop Out" },
      { inning: 9, pitchType: "Slider", spinRate: 1219, ev: 71.7, la: 20, pitchHeight: 1.6, result: "Single" }
    ]
  }
];

export default hittersData;
