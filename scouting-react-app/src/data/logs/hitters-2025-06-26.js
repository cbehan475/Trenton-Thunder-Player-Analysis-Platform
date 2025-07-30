const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Cutter", spinRate: 2448, ev: 74.5, la: 8, pitchHeight: 2.2, result: "Single" },
      { inning: 2, pitchType: "Sinker", spinRate: 2485, ev: 55.0, la: -55, pitchHeight: 2.1, result: "Single" },
      { inning: 3, pitchType: "Sinker", spinRate: 2542, ev: 88.8, la: 36, pitchHeight: 2.4, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2588, ev: 65.3, la: 54, pitchHeight: 3.8, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2323, ev: 74.8, la: 33, pitchHeight: 2.6, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Cutter", spinRate: 2417, ev: 66.3, la: 28, pitchHeight: 3.0, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2393, ev: 65.8, la: 87, pitchHeight: 2.5, result: "Pop Out" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2312, ev: 69.3, la: 25, pitchHeight: 3.2, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2300, ev: 82.7, la: 34, pitchHeight: 2.8, result: "Foul" },
      { inning: 4, pitchType: "Cutter", spinRate: 2195, ev: 87.8, la: 16, pitchHeight: 1.8, result: "Double" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 1, pitchType: "Changeup", spinRate: 1705, ev: 93.9, la: 10, pitchHeight: 2.4, result: "Single" },
      { inning: 3, pitchType: "Slider", spinRate: 2301, ev: 96.3, la: 12, pitchHeight: 2.7, result: "Single" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2301, ev: 74.3, la: 36, pitchHeight: 2.5, result: "Flyout" },
      { inning: 6, pitchType: "Slider", spinRate: 2624, ev: 94.2, la: -4, pitchHeight: 1.5, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2508, ev: 67.9, la: 46, pitchHeight: 2.4, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2469, ev: 74.9, la: 57, pitchHeight: 2.1, result: "Foul" },
      { inning: 2, pitchType: "Sinker", spinRate: 2496, ev: 81.9, la: 58, pitchHeight: 2.4, result: "Pop Out" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2585, ev: 92.7, la: 41, pitchHeight: 2.3, result: "Flyout" },
      { inning: 5, pitchType: "Changeup", spinRate: 1993, ev: 80.9, la: -35, pitchHeight: 2.2, result: "Field Error" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Cutter", spinRate: 2453, ev: 91.1, la: 39, pitchHeight: 2.6, result: "Sac Fly" },
      { inning: 4, pitchType: "Cutter", spinRate: 2204, ev: 83.3, la: 40, pitchHeight: 2.2, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2362, ev: 92.2, la: 11, pitchHeight: 3.3, result: "Single" },
      { inning: 6, pitchType: "Sinker", spinRate: 2394, ev: 85.8, la: 44, pitchHeight: 3.6, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2414, ev: 87.4, la: 58, pitchHeight: 3.5, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2653, ev: 76.3, la: 37, pitchHeight: 2.9, result: "Flyout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2331, ev: 72.8, la: 37, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2352, ev: 61.1, la: 50, pitchHeight: 2.4, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2408, ev: 81.3, la: 6, pitchHeight: 3.7, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2354, ev: 72.2, la: 71, pitchHeight: 2.8, result: "Foul" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2535, ev: 98.1, la: 52, pitchHeight: 2.2, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2274, ev: 66.3, la: 71, pitchHeight: 2.8, result: "Pop Out" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2364, ev: 54.1, la: -2, pitchHeight: 1.9, result: "Foul" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2455, ev: 79.8, la: 52, pitchHeight: 2.4, result: "Foul" },
      { inning: 2, pitchType: "Cutter", spinRate: 2520, ev: 74.8, la: 4, pitchHeight: 2.2, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2381, ev: 45.9, la: -41, pitchHeight: 2.1, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2353, ev: 73.5, la: 17, pitchHeight: 2.5, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2259, ev: 72.9, la: -6, pitchHeight: 2.1, result: "Forceout" }
    ]
  }
];

export default hittersData;
