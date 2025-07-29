const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2404, ev: 69.7, la: 14, pitchHeight: 2.5, result: "Single" },
      { inning: 4, pitchType: "Cutter", spinRate: 2317, ev: 96.2, la: -7, pitchHeight: 2.5, result: "Grounded Into DP" },
      { inning: 6, pitchType: "Changeup", spinRate: 2337, ev: 66.9, la: 45, pitchHeight: 2.8, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2432, ev: 62.3, la: 18, pitchHeight: 3.3, result: "Double Play" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2360, ev: 66.6, la: 23, pitchHeight: 2.3, result: "Foul" },
      { inning: 1, pitchType: "Curveball", spinRate: 2493, ev: 52.0, la: 80, pitchHeight: 3.5, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2276, ev: 79.8, la: 52, pitchHeight: 2.9, result: "Flyout" },
      { inning: 5, pitchType: "Curveball", spinRate: 2032, ev: 91.2, la: 6, pitchHeight: 1.5, result: "Single" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2311, ev: 81.3, la: 34, pitchHeight: 2.8, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2440, ev: 64.5, la: 33, pitchHeight: 2.4, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2373, ev: 84.3, la: 5, pitchHeight: 3.4, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2200, ev: 90.0, la: 6, pitchHeight: 3.2, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2209, ev: 70.6, la: 41, pitchHeight: 2.4, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2155, ev: 63.5, la: -33, pitchHeight: 2.0, result: "Forceout" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2269, ev: 79.5, la: 17, pitchHeight: 2.8, result: "Foul" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 6, pitchType: "Slider", spinRate: 2615, ev: 67.8, la: 36, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2341, ev: 87.0, la: -22, pitchHeight: 2.8, result: "Single" },
      { inning: 4, pitchType: "Cutter", spinRate: 2535, ev: 63.1, la: 47, pitchHeight: 1.2, result: "Foul" },
      { inning: 4, pitchType: "Cutter", spinRate: 2326, ev: 61.8, la: -67, pitchHeight: 2.2, result: "Groundout" },
      { inning: 6, pitchType: "Sinker", spinRate: 2443, ev: 65.7, la: 48, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2030, ev: 87.3, la: 19, pitchHeight: 2.4, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2586, ev: 85.0, la: 6, pitchHeight: 2.4, result: "Single" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Curveball", spinRate: 2544, ev: 67.0, la: 20, pitchHeight: 3.7, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2293, ev: 88.8, la: 39, pitchHeight: 2.4, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2426, ev: 93.3, la: 29, pitchHeight: 2.6, result: "Flyout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2272, ev: 77.9, la: 45, pitchHeight: 2.8, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2293, ev: 74.5, la: 22, pitchHeight: 2.7, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2183, ev: 101.2, la: 22, pitchHeight: 2.5, result: "Triple" },
      { inning: 5, pitchType: "Sinker", spinRate: 2237, ev: 103.8, la: 4, pitchHeight: 2.3, result: "Groundout" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2360, ev: 69.0, la: 50, pitchHeight: 2.0, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2409, ev: 61.0, la: 8, pitchHeight: 2.7, result: "Groundout" },
      { inning: 3, pitchType: "Curveball", spinRate: 2356, ev: 38.0, la: -4, pitchHeight: 4.4, result: "Ball" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2301, ev: 94.7, la: 23, pitchHeight: 1.7, result: "Lineout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2427, ev: 92.1, la: -5, pitchHeight: 2.4, result: "Groundout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 9, pitchType: "Sweeper", spinRate: 2681, ev: 86.6, la: -52, pitchHeight: 1.1, result: "Foul" },
      { inning: 9, pitchType: "Sweeper", spinRate: 2660, ev: 82.3, la: 72, pitchHeight: 2.4, result: "Pop Out" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2509, ev: 76.9, la: 19, pitchHeight: 3.2, result: "Foul" },
      { inning: 3, pitchType: "Curveball", spinRate: 2345, ev: 94.3, la: 4, pitchHeight: 2.2, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2609, ev: 81.4, la: 37, pitchHeight: 3.3, result: "Swinging Strike" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2575, ev: 76.3, la: 38, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 53.3, la: -14, pitchHeight: 2.7, result: "Groundout" },
      { inning: 3, pitchType: "Curveball", spinRate: 2508, ev: 106.6, la: 17, pitchHeight: 2.5, result: "Double" },
      { inning: 5, pitchType: "Sinker", spinRate: 2156, ev: 100.3, la: 20, pitchHeight: 2.2, result: "Sac Fly" },
      { inning: 8, pitchType: "Sinker", spinRate: 2301, ev: 97.9, la: -9, pitchHeight: 2.1, result: "Groundout" }
    ]
  }
];

export default hittersData;