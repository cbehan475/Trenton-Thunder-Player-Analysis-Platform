const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2071, ev: 97.3, la: -7, pitchHeight: 2.0, result: "Single" },
      { inning: 4, pitchType: "Curveball", spinRate: 2391, ev: 63.1, la: -49, pitchHeight: 1.6, result: "Groundout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2317, ev: 93.2, la: 23, pitchHeight: 2.1, result: "Double" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2299, ev: 66.4, la: 24, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Slider", spinRate: 2114, ev: 71.9, la: 25, pitchHeight: 1.6, result: "Single" },
      { inning: 3, pitchType: "Slider", spinRate: 2236, ev: 80.7, la: 56, pitchHeight: 2.4, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2160, ev: 83.2, la: 53, pitchHeight: 3.4, result: "Flyout" },
      { inning: 5, pitchType: "Curveball", spinRate: 2357, ev: 97.4, la: 4, pitchHeight: 2.6, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2282, ev: 88.2, la: 26, pitchHeight: 3.1, result: "Lineout" },
      { inning: 9, pitchType: "Sinker", spinRate: 2400, ev: 73.8, la: -42, pitchHeight: 2.5, result: "Grounded Into DP" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2088, ev: 91.6, la: 12, pitchHeight: 1.6, result: "Single" },
      { inning: 5, pitchType: "Curveball", spinRate: 2317, ev: 83.2, la: -28, pitchHeight: 2.5, result: "Single" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2257, ev: 65.2, la: 56, pitchHeight: 2.9, result: "Pop Out" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Slider", spinRate: 2096, ev: 77.1, la: 62, pitchHeight: 2.5, result: "Foul" },
      { inning: 2, pitchType: "Changeup", spinRate: 2015, ev: 84.0, la: -7, pitchHeight: 2.5, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2083, ev: 104.0, la: 17, pitchHeight: 2.0, result: "Lineout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2257, ev: 81.4, la: 5, pitchHeight: 3.6, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2215, ev: 84.4, la: 35, pitchHeight: 2.9, result: "Foul" },
      { inning: 8, pitchType: "Curveball", spinRate: 2517, ev: 75.5, la: 54, pitchHeight: 2.2, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2157, ev: 75.8, la: 53, pitchHeight: 3.6, result: "Foul" },
      { inning: 8, pitchType: "Changeup", spinRate: 1111, ev: 79.1, la: 54, pitchHeight: 3.5, result: "Pop Out" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2446, ev: 82.1, la: 34, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2293, ev: 64.8, la: 70, pitchHeight: 2.8, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2503, ev: 98.6, la: -6, pitchHeight: 3.2, result: "Groundout" },
      { inning: 8, pitchType: "Changeup", spinRate: 1657, ev: 95.7, la: 27, pitchHeight: 1.5, result: "Triple" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1999, ev: 85.1, la: 49, pitchHeight: 2.1, result: "Flyout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2022, ev: 67.0, la: 31, pitchHeight: 3.5, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2077, ev: 88.5, la: 30, pitchHeight: 2.7, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2267, ev: 74.2, la: 77, pitchHeight: 2.1, result: "Foul" },
      { inning: 3, pitchType: "Slider", spinRate: 2200, ev: 101.1, la: 23, pitchHeight: 2.8, result: "Home Run" },
      { inning: 4, pitchType: "Curveball", spinRate: 2366, ev: 87.7, la: 39, pitchHeight: 2.4, result: "Flyout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2213, ev: 100.2, la: 0, pitchHeight: 1.9, result: "Single" },
      { inning: 9, pitchType: "Sinker", spinRate: 2404, ev: 76.7, la: -41, pitchHeight: 2.0, result: "Single" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2188, ev: 75.2, la: 58, pitchHeight: 3.5, result: "Pop Out" },
      { inning: 5, pitchType: "Curveball", spinRate: 2414, ev: 64.6, la: 42, pitchHeight: 3.4, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2374, ev: 75.5, la: 64, pitchHeight: 3.1, result: "Foul" },
      { inning: 9, pitchType: "Sweeper", spinRate: 2536, ev: 85.1, la: -31, pitchHeight: 2.0, result: "Groundout" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2124, ev: 75.7, la: 0, pitchHeight: 1.9, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2126, ev: 86.3, la: -1, pitchHeight: 1.5, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 1869, ev: 76.2, la: 29, pitchHeight: 1.7, result: "Flyout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2110, ev: 72.9, la: 71, pitchHeight: 3.0, result: "Foul" },
      { inning: 5, pitchType: "Curveball", spinRate: 2512, ev: 98.2, la: 19, pitchHeight: 2.7, result: "Lineout" },
      { inning: 7, pitchType: "Curveball", spinRate: 2426, ev: 63.2, la: 53, pitchHeight: 2.0, result: "Foul" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 1995, ev: 64.5, la: 43, pitchHeight: 1.8, result: "Foul" },
      { inning: 2, pitchType: "Slider", spinRate: 2229, ev: 30.9, la: -10, pitchHeight: 2.3, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2112, ev: 94.1, la: 22, pitchHeight: 1.7, result: "Lineout" },
      { inning: 4, pitchType: "Curveball", spinRate: 2361, ev: 71.4, la: -35, pitchHeight: 1.8, result: "Groundout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2355, ev: 96.0, la: -1, pitchHeight: 2.6, result: "Groundout" }
    ]
  }
];

export default hittersData;
