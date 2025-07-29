const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2495, ev: 93.0, la: 19, pitchHeight: 2.8, result: "Lineout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2346, ev: 69.2, la: 35, pitchHeight: 3.3, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2289, ev: 87.2, la: 34, pitchHeight: 3.0, result: "Flyout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2442, ev: 77.7, la: 58, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2369, ev: 75.4, la: -74, pitchHeight: 2.7, result: "Groundout" },
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2489, ev: 69.8, la: 5, pitchHeight: 2.8, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2435, ev: 66.5, la: 37, pitchHeight: 3.2, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2480, ev: 69.3, la: 48, pitchHeight: 3.3, result: "Flyout" },
      { inning: 2, pitchType: "Slider", spinRate: 2521, ev: 76.8, la: 24, pitchHeight: 1.7, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2580, ev: 85.4, la: 76, pitchHeight: 2.5, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2587, ev: 71.2, la: 9, pitchHeight: 2.6, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2372, ev: 79.3, la: 4, pitchHeight: 2.4, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2287, ev: 68.0, la: 61, pitchHeight: 2.1, result: "Foul" },
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2390, ev: 69.6, la: 58, pitchHeight: 3.2, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2388, ev: 53.1, la: -13, pitchHeight: 2.3, result: "Single" },
      { inning: 8, pitchType: "Slider", spinRate: 2482, ev: 83.6, la: 16, pitchHeight: 2.8, result: "Single" },
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2346, ev: 92.9, la: 33, pitchHeight: 3.4, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2325, ev: 74.7, la: -47, pitchHeight: 3.1, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2404, ev: 110.2, la: -2, pitchHeight: 2.0, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2444, ev: 92.1, la: 39, pitchHeight: 2.4, result: "Flyout" },
      { inning: 8, pitchType: "Curveball", spinRate: 2557, ev: 95.0, la: 8, pitchHeight: 1.7, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2787, ev: 86.7, la: 27, pitchHeight: 1.5, result: "Field Error" },
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2396, ev: 71.8, la: 6, pitchHeight: 3.0, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2019, ev: 79.1, la: 68, pitchHeight: 2.8, result: "Pop Out" },
      { inning: 5, pitchType: "Sinker", spinRate: 2242, ev: 100.3, la: 25, pitchHeight: 2.3, result: "Double" },
      { inning: 8, pitchType: "Slider", spinRate: 2510, ev: 64.9, la: 27, pitchHeight: 2.4, result: "Foul" },
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 2333, ev: 77.0, la: 36, pitchHeight: 1.9, result: "Sac Fly" },
      { inning: 4, pitchType: "Slider", spinRate: 2721, ev: 90.5, la: 34, pitchHeight: 2.3, result: "Flyout" },
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 1677, ev: 99.1, la: -10, pitchHeight: 2.7, result: "Single" },
      { inning: 4, pitchType: "Sinker", spinRate: 2417, ev: 82.5, la: 41, pitchHeight: 3.2, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2558, ev: 66.8, la: 32, pitchHeight: 3.2, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2283, ev: 78.4, la: -54, pitchHeight: 3.0, result: "Single" },
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2432, ev: 105.5, la: 15, pitchHeight: 2.1, result: "Lineout" },
      { inning: 5, pitchType: "Slider", spinRate: 2579, ev: 94.4, la: 20, pitchHeight: 1.9, result: "Foul" },
      { inning: 5, pitchType: "Slider", spinRate: 2633, ev: 99.8, la: 5, pitchHeight: 1.3, result: "Single" },
      { inning: 7, pitchType: "Changeup", spinRate: 1526, ev: 75.8, la: 60, pitchHeight: 3.2, result: "Pop Out" },
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 9, pitchType: "Slider", spinRate: 2210, ev: 73.2, la: 8, pitchHeight: 1.8, result: "Groundout" },
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2467, ev: 98.1, la: -30, pitchHeight: 1.9, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2332, ev: 102.0, la: 11, pitchHeight: 2.6, result: "Single" },
      { inning: 3, pitchType: "Sinker", spinRate: 2044, ev: 95.6, la: 62, pitchHeight: 2.9, result: "Pop Out" },
      { inning: 8, pitchType: "Sinker", spinRate: 2136, ev: 81.4, la: 45, pitchHeight: 2.4, result: "Foul" },
    ]
  },
];

export default hittersData;
