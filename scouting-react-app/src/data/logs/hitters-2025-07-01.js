const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2430, ev: 68.9, la: 48, pitchHeight: 2.6, result: "Foul" },
      { inning: 2, pitchType: "Curveball", spinRate: 2264, ev: 59.0, la: -52, pitchHeight: 3.0, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2269, ev: 104.5, la: -39, pitchHeight: 2.8, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2343, ev: 52.2, la: -26, pitchHeight: 2.1, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2161, ev: 86.4, la: 9, pitchHeight: 2.5, result: "Lineout" },
      { inning: 4, pitchType: "Changeup", spinRate: 1366, ev: 87.1, la: -15, pitchHeight: 2.4, result: "Single" },
      { inning: 6, pitchType: "Curveball", spinRate: 2817, ev: 33.1, la: 23, pitchHeight: 2.3, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2853, ev: 51.6, la: 21, pitchHeight: 1.5, result: "Groundout" },
      { inning: 7, pitchType: "Sinker", spinRate: 1900, ev: 79.7, la: 3, pitchHeight: 3.0, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 1915, ev: 68.9, la: 31, pitchHeight: 3.6, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 1949, ev: 87.5, la: 12, pitchHeight: 2.6, result: "Single" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2405, ev: 82.7, la: 59, pitchHeight: 2.7, result: "Pop Out" },
      { inning: 4, pitchType: "Sinker", spinRate: 2312, ev: 82.5, la: -53, pitchHeight: 1.7, result: "Fielders Choice" },
      { inning: 7, pitchType: "Sinker", spinRate: 2378, ev: 82.2, la: -28, pitchHeight: 2.1, result: "Field Error" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 3, pitchType: "Cutter", spinRate: 1116, ev: 69.4, la: 71, pitchHeight: 2.7, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2403, ev: 67.9, la: 25, pitchHeight: 2.0, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2370, ev: 92.1, la: 3, pitchHeight: 2.3, result: "Triple" },
      { inning: 7, pitchType: "Sinker", spinRate: 2310, ev: 84.4, la: -1, pitchHeight: 3.3, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 2420, ev: 50.6, la: -5, pitchHeight: 2.6, result: "Single" },
      { inning: 8, pitchType: "Slider", spinRate: 2747, ev: 71.3, la: -20, pitchHeight: 1.9, result: "Groundout" },
      { inning: 9, pitchType: "Slider", spinRate: 2259, ev: 73.7, la: 77, pitchHeight: 1.6, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2077, ev: 71.3, la: 10, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Changeup", spinRate: 1351, ev: 65.3, la: -11, pitchHeight: 0.6, result: "Field Error" }
    ]
  },
  {
    hitter: "Logan Dawson",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2440, ev: 82.8, la: 48, pitchHeight: 2.6, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2622, ev: 67.2, la: 49, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2102, ev: 90.8, la: -1, pitchHeight: 1.4, result: "Groundout" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 6, pitchType: "Curveball", spinRate: 2784, ev: 67.8, la: 66, pitchHeight: 2.2, result: "Foul" },
      { inning: 7, pitchType: "Sinker", spinRate: 1983, ev: 100.9, la: -5, pitchHeight: 2.7, result: "Field Error" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 1791, ev: 98.1, la: -8, pitchHeight: 1.8, result: "Field Error" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2439, ev: 77.6, la: 3, pitchHeight: 2.3, result: "Single" },
      { inning: 3, pitchType: "Cutter", spinRate: 1104, ev: 86.5, la: -13, pitchHeight: 3.0, result: "Groundout" },
      { inning: 6, pitchType: "Sinker", spinRate: 2426, ev: 98.9, la: 13, pitchHeight: 3.1, result: "Double" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2366, ev: 97.7, la: 2, pitchHeight: 2.1, result: "Single" },
      { inning: 5, pitchType: "Curveball", spinRate: 2838, ev: 66.4, la: 70, pitchHeight: 2.6, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2625, ev: 66.4, la: 66, pitchHeight: 3.4, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2811, ev: 100.8, la: 15, pitchHeight: 2.1, result: "Double" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 1911, ev: 62.2, la: 46, pitchHeight: 2.5, result: "Foul" },
      { inning: 9, pitchType: "Changeup", spinRate: 1288, ev: 77.1, la: 47, pitchHeight: 2.1, result: "Flyout" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2315, ev: 70.3, la: -17, pitchHeight: 2.5, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2435, ev: 65.2, la: 63, pitchHeight: 2.9, result: "Foul" },
      { inning: 2, pitchType: "Cutter", spinRate: 1218, ev: 101.0, la: 7, pitchHeight: 3.0, result: "Lineout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2365, ev: 77.7, la: 19, pitchHeight: 2.8, result: "Single" },
      { inning: 5, pitchType: "Sinker", spinRate: 2430, ev: 77.0, la: -26, pitchHeight: 2.2, result: "Groundout" },
      { inning: 7, pitchType: "Sinker", spinRate: 2289, ev: 68.8, la: 53, pitchHeight: 2.5, result: "Foul" },
      { inning: 9, pitchType: "Changeup", spinRate: 1336, ev: 95.1, la: -6, pitchHeight: 2.7, result: "Triple" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2485, ev: 101.0, la: 26, pitchHeight: 2.1, result: "Double" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2402, ev: 91.7, la: 16, pitchHeight: 2.1, result: "Single" },
      { inning: 4, pitchType: "Sinker", spinRate: 2289, ev: 92.5, la: 19, pitchHeight: 2.8, result: "Single" },
      { inning: 6, pitchType: "Sinker", spinRate: 2390, ev: 76.2, la: 27, pitchHeight: 2.8, result: "Single" },
      { inning: 7, pitchType: "Sinker", spinRate: 2384, ev: 82.0, la: 5, pitchHeight: 3.2, result: "Foul" },
      { inning: 8, pitchType: "Sinker", spinRate: 2524, ev: 68.0, la: 48, pitchHeight: 1.8, result: "Foul" },
      { inning: 9, pitchType: "Changeup", spinRate: 1201, ev: 102.3, la: 22, pitchHeight: 1.1, result: "Double" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 8, pitchType: "Sinker", spinRate: 2552, ev: 62.9, la: 57, pitchHeight: 1.5, result: "Foul" },
      { inning: 9, pitchType: "Slider", spinRate: 2137, ev: 46.3, la: -4, pitchHeight: 2.0, result: "Field Error" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 6, pitchType: "Sinker", spinRate: 2412, ev: 59.5, la: -11, pitchHeight: 3.9, result: "Foul" }
    ]
  }
];

export default hittersData;
