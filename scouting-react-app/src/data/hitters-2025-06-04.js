const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2136, ev: 76.4, la: 26, pitchHeight: 2.9, result: "Single" },
      { inning: 6, pitchType: "Slider", spinRate: 2676, ev: 78.3, la: 28, pitchHeight: 2.8, result: "Sac Fly" },
      { inning: 8, pitchType: "Slider", spinRate: 2229, ev: 79.0, la: 31, pitchHeight: 2.2, result: "Flyout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2016, ev: 55.4, la: -58, pitchHeight: 2.5, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2196, ev: 63.2, la: 42, pitchHeight: 2.6, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2131, ev: 84.9, la: -35, pitchHeight: 3.1, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2503, ev: 69.8, la: 26, pitchHeight: 3.5, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2978, ev: 62.7, la: 31, pitchHeight: 2.5, result: "Foul" },
      { inning: 7, pitchType: "Slider", spinRate: 2656, ev: 96.9, la: -6, pitchHeight: 2.6, result: "Groundout" },
      { inning: 9, pitchType: "Slider", spinRate: 2246, ev: 86.6, la: 31, pitchHeight: 2.8, result: "Flyout" }
    ]
  },
  {
    hitter: "Cole Leach",
    atBats: [
      { inning: 5, pitchType: "Slider", spinRate: 2217, ev: 61.6, la: -77, pitchHeight: 2.0, result: "Forceout" }
    ]
  },
  {
    hitter: "Taylor Belza",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2133, ev: 87.6, la: 21, pitchHeight: 2.6, result: "Lineout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2222, ev: 99.3, la: -1, pitchHeight: 2.7, result: "Groundout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2277, ev: 91.4, la: 60, pitchHeight: 2.7, result: "Pop Out" },
      { inning: 4, pitchType: "Slider", spinRate: 2163, ev: 101.3, la: -6, pitchHeight: 1.6, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 2206, ev: 67.7, la: 9, pitchHeight: 1.9, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2152, ev: 81.9, la: 36, pitchHeight: 3.0, result: "Flyout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2124, ev: 62.4, la: 57, pitchHeight: 3.3, result: "Pop Out" },
      { inning: 6, pitchType: "Slider", spinRate: 2853, ev: 58.8, la: 59, pitchHeight: 2.5, result: "Foul" },
      { inning: 8, pitchType: "Changeup", spinRate: 1406, ev: 99.4, la: -10, pitchHeight: 2.4, result: "Groundout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2272, ev: 65.0, la: 44, pitchHeight: 1.3, result: "Pop Out" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2195, ev: 97.6, la: -6, pitchHeight: 3.6, result: "Double" },
      { inning: 6, pitchType: "Slider", spinRate: 2844, ev: 90.5, la: -1, pitchHeight: 2.7, result: "Groundout" },
      { inning: 8, pitchType: "Slider", spinRate: 2354, ev: 84.7, la: -5, pitchHeight: 2.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2025, ev: 104.4, la: -5, pitchHeight: 2.3, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2195, ev: 62.5, la: -58, pitchHeight: 3.2, result: "Field Error" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1923, ev: 102.8, la: 36, pitchHeight: 2.8, result: "Sac Fly" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2445, ev: 76.0, la: 61, pitchHeight: 4.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2397, ev: 80.1, la: 7, pitchHeight: 2.7, result: "Single" },
      { inning: 8, pitchType: "Sinker", spinRate: 2239, ev: 80.1, la: 71, pitchHeight: 2.2, result: "Field Error" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2198, ev: 91.6, la: -6, pitchHeight: 1.7, result: "Groundout" },
      { inning: 5, pitchType: "Slider", spinRate: 2140, ev: 82.8, la: 76, pitchHeight: 3.6, result: "Foul" },
      { inning: 5, pitchType: "Changeup", spinRate: 1301, ev: 96.0, la: 26, pitchHeight: 2.4, result: "Flyout" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2424, ev: 73.8, la: 33, pitchHeight: 2.8, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2509, ev: 72.8, la: 24, pitchHeight: 3.8, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2129, ev: 59.8, la: -33, pitchHeight: 3.2, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2189, ev: 79.9, la: 59, pitchHeight: 1.9, result: "Foul" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 4, pitchType: "Changeup", spinRate: 1286, ev: 72.6, la: -71, pitchHeight: 1.8, result: "Groundout" },
      { inning: 6, pitchType: "Slider", spinRate: 2735, ev: 76.2, la: 50, pitchHeight: 3.1, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2473, ev: 67.4, la: 35, pitchHeight: 3.0, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2776, ev: 54.5, la: 61, pitchHeight: 3.4, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2207, ev: 88.0, la: -26, pitchHeight: 2.5, result: "Single" }
    ]
  }
];

export default hittersData;