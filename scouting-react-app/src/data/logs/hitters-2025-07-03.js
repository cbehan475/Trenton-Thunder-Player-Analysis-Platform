const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Slider", spinRate: 2436, ev: 61.9, la: -19, pitchHeight: 1.8, result: "Groundout" },
      { inning: 6, pitchType: "Sinker", spinRate: 2279, ev: 66.3, la: -52, pitchHeight: 3.0, result: "Groundout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2079, ev: 72.5, la: 61, pitchHeight: 3.3, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 70.4, la: 37, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2270, ev: 94.1, la: -4, pitchHeight: 2.5, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2101, ev: 77.2, la: 51, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2115, ev: 91.6, la: 7, pitchHeight: 1.4, result: "Field Error" },
      { inning: 6, pitchType: "Sinker", spinRate: 2311, ev: 80.7, la: 22, pitchHeight: 1.8, result: "Double" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2302, ev: 74.4, la: 33, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2520, ev: 97.7, la: 40, pitchHeight: 2.1, result: "Flyout" },
      { inning: 5, pitchType: "Sinker", spinRate: 2490, ev: 75.0, la: 11, pitchHeight: 3.0, result: "Foul" },
      { inning: 5, pitchType: "Curveball", spinRate: 2491, ev: 101.4, la: -1, pitchHeight: 2.3, result: "Groundout" },
      { inning: 7, pitchType: "Slider", spinRate: 2431, ev: 68.4, la: 5, pitchHeight: 3.3, result: "Foul" },
      { inning: 7, pitchType: "Curveball", spinRate: 2369, ev: 97.9, la: 36, pitchHeight: 2.6, result: "Home Run" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2494, ev: 61.2, la: -32, pitchHeight: 1.7, result: "Field Error" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2476, ev: 99.2, la: 23, pitchHeight: 2.8, result: "Double" },
      { inning: 4, pitchType: "Sinker", spinRate: 2146, ev: 80.0, la: 21, pitchHeight: 2.4, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2366, ev: 73.4, la: 66, pitchHeight: 3.0, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2346, ev: 101.1, la: 0, pitchHeight: 2.3, result: "Groundout" },
      { inning: 7, pitchType: "Slider", spinRate: 2398, ev: 46.6, la: 1, pitchHeight: 2.7, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2179, ev: 87.8, la: 25, pitchHeight: 2.9, result: "Sac Fly" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2496, ev: 75.9, la: 7, pitchHeight: 2.0, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2298, ev: 97.5, la: -4, pitchHeight: 3.4, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2204, ev: 97.4, la: 11, pitchHeight: 2.6, result: "Single" },
      { inning: 7, pitchType: "Curveball", spinRate: 2211, ev: 72.1, la: 76, pitchHeight: 2.5, result: "Pop Out" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2374, ev: 78.3, la: 11, pitchHeight: 3.1, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2461, ev: 83.9, la: 50, pitchHeight: 2.8, result: "Foul" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2338, ev: 73.2, la: 20, pitchHeight: 2.3, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2446, ev: 68.3, la: 52, pitchHeight: 3.6, result: "Foul" },
      { inning: 5, pitchType: "Sinker", spinRate: 2250, ev: 94.1, la: -5, pitchHeight: 3.1, result: "Single" },
      { inning: 7, pitchType: "Sinker", spinRate: 2138, ev: 98.0, la: 41, pitchHeight: 2.8, result: "Flyout" },
      { inning: 9, pitchType: "Curveball", spinRate: 2826, ev: 93.9, la: 41, pitchHeight: 2.5, result: "Sac Fly" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 4, pitchType: "Slider", spinRate: 2521, ev: 87.6, la: -10, pitchHeight: 1.8, result: "Foul" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2231, ev: 75.3, la: 31, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2252, ev: 63.6, la: 41, pitchHeight: 3.5, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2132, ev: 94.2, la: 1, pitchHeight: 2.3, result: "Field Error" },
      { inning: 4, pitchType: "Sinker", spinRate: 2246, ev: 94.7, la: 35, pitchHeight: 2.5, result: "Flyout" },
      { inning: 6, pitchType: "Changeup", spinRate: 1882, ev: 104.2, la: 8, pitchHeight: 2.6, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2109, ev: 85.5, la: 24, pitchHeight: 2.5, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2146, ev: 72.7, la: 19, pitchHeight: 1.8, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2210, ev: 93.8, la: 47, pitchHeight: 3.5, result: "Sac Fly" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2424, ev: 69.6, la: -41, pitchHeight: 2.5, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2153, ev: 75.5, la: 20, pitchHeight: 2.4, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2448, ev: 100.9, la: 8, pitchHeight: 2.2, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2276, ev: 77.1, la: 11, pitchHeight: 2.9, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 1880, ev: 97.9, la: 33, pitchHeight: 2.3, result: "Sac Fly Double Play" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2319, ev: 74.6, la: 43, pitchHeight: 2.5, result: "Flyout" }
    ]
  }
];

export default hittersData;
