const hittersData = [
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2429, ev: 99.3, la: 18, pitchHeight: 2.6, result: "Lineout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2445, ev: 63.9, la: -21, pitchHeight: 3.5, result: "Field Error" },
      { inning: 6, pitchType: "Cutter", spinRate: 2373, ev: 71.0, la: 4, pitchHeight: 1.9, result: "Single" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2423, ev: 68.5, la: 61, pitchHeight: 2.0, result: "Foul Tip" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2254, ev: 101.0, la: -10, pitchHeight: 2.5, result: "Groundout" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2447, ev: 58.0, la: 33, pitchHeight: 2.5, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2397, ev: 63.0, la: 53, pitchHeight: 1.2, result: "Foul" },
      { inning: 3, pitchType: "Curveball", spinRate: 2612, ev: 81.0, la: 58, pitchHeight: 1.9, result: "Pop Out" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2285, ev: 88.3, la: 16, pitchHeight: 2.9, result: "Double" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2309, ev: 57.1, la: -62, pitchHeight: 2.3, result: "Field Error" }
    ]
  },
  {
    hitter: "Brayden Fraasman",
    atBats: [
      { inning: 9, pitchType: "Sinker", spinRate: 2213, ev: 59.8, la: 33, pitchHeight: 3.6, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2143, ev: 95.3, la: 26, pitchHeight: 2.9, result: "Flyout" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2557, ev: 72.9, la: 16, pitchHeight: 2.6, result: "Foul" },
      { inning: 4, pitchType: "Cutter", spinRate: 2444, ev: 73.5, la: 55, pitchHeight: 1.7, result: "Foul" },
      { inning: 4, pitchType: "Curveball", spinRate: 2702, ev: 66.1, la: 59, pitchHeight: 2.3, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2385, ev: 78.5, la: 14, pitchHeight: 3.8, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2555, ev: 61.7, la: 12, pitchHeight: 3.4, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2535, ev: 64.9, la: 43, pitchHeight: 2.2, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2387, ev: 69.9, la: 61, pitchHeight: 3.3, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2231, ev: 77.6, la: 38, pitchHeight: 1.5, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2241, ev: 47.9, la: -45, pitchHeight: 1.7, result: "Groundout" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 2, pitchType: "Cutter", spinRate: 2561, ev: 64.6, la: -18, pitchHeight: 2.0, result: "Groundout" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2455, ev: 77.6, la: -2, pitchHeight: 2.5, result: "Groundout" },
      { inning: 8, pitchType: "Sinker", spinRate: 2220, ev: 85.3, la: 51, pitchHeight: 2.6, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2132, ev: 77.2, la: 41, pitchHeight: 3.2, result: "Foul" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2265, ev: 79.9, la: 7, pitchHeight: 2.5, result: "Foul" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2459, ev: 83.9, la: 17, pitchHeight: 3.2, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2370, ev: 89.1, la: 62, pitchHeight: 2.1, result: "Pop Out" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2480, ev: 56.3, la: 6, pitchHeight: 1.9, result: "Foul" }
    ]
  },
  {
    hitter: "Carsten Sabathia III",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2352, ev: 71.2, la: 59, pitchHeight: 3.1, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2341, ev: 88.9, la: 33, pitchHeight: 3.3, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2431, ev: 63.2, la: 51, pitchHeight: 3.3, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2521, ev: 79.6, la: 53, pitchHeight: 3.6, result: "Foul" },
      { inning: 6, pitchType: "Sinker", spinRate: 2545, ev: 68.3, la: 21, pitchHeight: 1.6, result: "Foul" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2516, ev: 104.3, la: 22, pitchHeight: 2.4, result: "Double" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2274, ev: 73.4, la: 66, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 2106, ev: 89.0, la: -21, pitchHeight: 3.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2234, ev: 59.2, la: 55, pitchHeight: 3.2, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2439, ev: 91.0, la: -9, pitchHeight: 2.8, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2336, ev: 73.9, la: 36, pitchHeight: 3.1, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2263, ev: 69.1, la: 25, pitchHeight: 2.4, result: "Foul" },
      { inning: 5, pitchType: "Cutter", spinRate: 2110, ev: 86.0, la: 30, pitchHeight: 3.7, result: "Flyout" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2509, ev: 69.3, la: 79, pitchHeight: 3.5, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2512, ev: 73.7, la: 17, pitchHeight: 3.6, result: "Foul" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2474, ev: 84.8, la: 55, pitchHeight: 2.5, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2443, ev: 68.8, la: 46, pitchHeight: 2.0, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2283, ev: 99.6, la: 36, pitchHeight: 1.5, result: "Flyout" },
      { inning: 6, pitchType: "Curveball", spinRate: 2619, ev: 79.7, la: 4, pitchHeight: 1.7, result: "Foul" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2292, ev: 91.2, la: 37, pitchHeight: 1.8, result: "Double" },
      { inning: 8, pitchType: "Sinker", spinRate: 2118, ev: 80.0, la: 48, pitchHeight: 2.7, result: "Flyout" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 3, pitchType: "Cutter", spinRate: 2536, ev: 84.0, la: 38, pitchHeight: 1.8, result: "Flyout" }
    ]
  }
];

export default hittersData;
