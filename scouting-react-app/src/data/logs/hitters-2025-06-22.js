const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2316, ev: 65.3, la: -33, pitchHeight: 1.9, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2315, ev: 70.4, la: 21, pitchHeight: 2.0, result: "Foul" },
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2280, ev: 62.9, la: -28, pitchHeight: 2.0, result: "Single" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2409, ev: 71.0, la: 19, pitchHeight: 1.9, result: "Foul" },
      { inning: 3, pitchType: "Curveball", spinRate: 2598, ev: 86.7, la: -10, pitchHeight: 2.5, result: "Foul" },
      { inning: 3, pitchType: "Changeup", spinRate: 1300, ev: 39.4, la: -49, pitchHeight: 1.3, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2087, ev: 70.2, la: -47, pitchHeight: 3.1, result: "Single" },
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2277, ev: 77.4, la: 11, pitchHeight: 3.0, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2137, ev: 71.9, la: 22, pitchHeight: 2.4, result: "Foul" },
      { inning: 1, pitchType: "Curveball", spinRate: 2601, ev: 51.8, la: -62, pitchHeight: 2.5, result: "Groundout" },
      { inning: 3, pitchType: "Curveball", spinRate: 2464, ev: 75.2, la: 61, pitchHeight: 3.1, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2258, ev: 96.4, la: 40, pitchHeight: 1.7, result: "Sac Fly" },
      { inning: 5, pitchType: "Cutter", spinRate: 2563, ev: 70.1, la: -30, pitchHeight: 1.6, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2167, ev: 80.5, la: 85, pitchHeight: 3.0, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2186, ev: 86.4, la: 19, pitchHeight: 1.6, result: "Single" },
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2472, ev: 103.5, la: -4, pitchHeight: 2.1, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2531, ev: 60.9, la: -33, pitchHeight: 1.4, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2465, ev: 101.8, la: -19, pitchHeight: 2.8, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2175, ev: 95.1, la: -2, pitchHeight: 1.6, result: "Field Error" },
      { inning: 8, pitchType: "Sinker", spinRate: 2129, ev: 70.1, la: 35, pitchHeight: 3.6, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2479, ev: 63.0, la: -52, pitchHeight: 1.8, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2646, ev: 87.8, la: 13, pitchHeight: 1.7, result: "Single" },
      { inning: 9, pitchType: "Cutter", spinRate: 2471, ev: 69.1, la: 63, pitchHeight: 2.8, result: "Foul" },
      { inning: 9, pitchType: "Cutter", spinRate: 2532, ev: 97.3, la: 15, pitchHeight: 3.0, result: "Lineout" },
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Cutter", spinRate: 2589, ev: 74.6, la: 28, pitchHeight: 2.0, result: "Single" },
      { inning: 4, pitchType: "Curveball", spinRate: 2660, ev: 97.0, la: -5, pitchHeight: 1.7, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2339, ev: 76.2, la: 58, pitchHeight: 2.0, result: "Pop Out" },
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2322, ev: 72.8, la: 29, pitchHeight: 2.4, result: "Foul" },
      { inning: 1, pitchType: "Changeup", spinRate: 1315, ev: 73.0, la: -23, pitchHeight: 1.9, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2156, ev: 90.2, la: 60, pitchHeight: 2.8, result: "Field Error" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2307, ev: 86.7, la: 16, pitchHeight: 2.6, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2350, ev: 73.7, la: 34, pitchHeight: 3.7, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2303, ev: 102.7, la: -23, pitchHeight: 3.1, result: "Groundout" },
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2194, ev: 70.8, la: -26, pitchHeight: 2.6, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2348, ev: 103.5, la: 4, pitchHeight: 2.7, result: "Single" },
      { inning: 6, pitchType: "Cutter", spinRate: 2232, ev: 75.0, la: 80, pitchHeight: 2.8, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2337, ev: 88.6, la: 40, pitchHeight: 3.1, result: "Flyout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2337, ev: 96.8, la: 27, pitchHeight: 2.5, result: "Triple" },
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2286, ev: 73.6, la: 41, pitchHeight: 2.7, result: "Flyout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2474, ev: 74.4, la: 13, pitchHeight: 2.8, result: "Foul" },
      { inning: 4, pitchType: "Curveball", spinRate: 2717, ev: 66.3, la: 1, pitchHeight: 2.0, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2378, ev: 81.1, la: 6, pitchHeight: 3.2, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2306, ev: 64.7, la: 53, pitchHeight: 2.5, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2189, ev: 91.9, la: 33, pitchHeight: 2.0, result: "Flyout" },
      { inning: 9, pitchType: "Cutter", spinRate: 2372, ev: 79.8, la: 33, pitchHeight: 2.5, result: "Double" },
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2149, ev: 72.9, la: 18, pitchHeight: 2.8, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2527, ev: 75.1, la: -40, pitchHeight: 2.4, result: "Forceout" },
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2114, ev: 46.9, la: -14, pitchHeight: 1.7, result: "Groundout" },
      { inning: 9, pitchType: "Cutter", spinRate: 2459, ev: 103.2, la: 20, pitchHeight: 3.2, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2270, ev: 94.9, la: 32, pitchHeight: 2.4, result: "Flyout" },
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2273, ev: 83.1, la: 79, pitchHeight: 3.3, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2291, ev: 106.4, la: 19, pitchHeight: 2.2, result: "Lineout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2265, ev: 98.5, la: 22, pitchHeight: 3.2, result: "Lineout" },
      { inning: 6, pitchType: "Sinker", spinRate: 2166, ev: 88.6, la: 3, pitchHeight: 3.2, result: "Single" },
      { inning: 8, pitchType: "Slider", spinRate: 2734, ev: 36.2, la: 4, pitchHeight: 2.0, result: "Groundout" },
    ]
  },
];

export default hittersData;
