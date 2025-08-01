const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Slider", spinRate: 2436, ev: 64.1, la: 49, pitchHeight: 3.1, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1958, ev: 84.4, la: 2, pitchHeight: 2.1, result: "Grounded Into DP" },
      { inning: 8, pitchType: "Sinker", spinRate: 2003, ev: 82.7, la: 12, pitchHeight: 2.6, result: "Lineout" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2368, ev: 80.1, la: 40, pitchHeight: 2.7, result: "Foul" },
      { inning: 1, pitchType: "Changeup", spinRate: 1119, ev: 101.9, la: -52, pitchHeight: 2.5, result: "Foul" },
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2382, ev: 68.9, la: 12, pitchHeight: 1.8, result: "Forceout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2195, ev: 71.1, la: 71, pitchHeight: 2.6, result: "Foul" },
      { inning: 6, pitchType: "Slider", spinRate: 2196, ev: 88.3, la: 25, pitchHeight: 2.0, result: "Lineout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2486, ev: 71.7, la: 17, pitchHeight: 3.0, result: "Foul" },
      { inning: 1, pitchType: "Slider", spinRate: 2544, ev: 119.4, la: -16, pitchHeight: 2.0, result: "Groundout" },
      { inning: 3, pitchType: "Curveball", spinRate: 2632, ev: 44.9, la: -19, pitchHeight: 2.6, result: "Groundout" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2026, ev: 102.6, la: 8, pitchHeight: 2.2, result: "Single" },
      { inning: 9, pitchType: "Sinker", spinRate: 2010, ev: 60.5, la: 39, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 1946, ev: 73.4, la: 73, pitchHeight: 3.0, result: "Foul" },
      { inning: 9, pitchType: "Sinker", spinRate: 1974, ev: 93.8, la: -20, pitchHeight: 3.0, result: "Foul" }
    ]
  },
  {
    hitter: "Evin Sullivan",
    atBats: [
      { inning: 2, pitchType: "Curveball", spinRate: 2720, ev: 53.8, la: -51, pitchHeight: 1.6, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1981, ev: 66.0, la: 34, pitchHeight: 3.0, result: "Foul" },
      { inning: 7, pitchType: "Cutter", spinRate: 2216, ev: 69.1, la: 51, pitchHeight: 2.3, result: "Foul" }
    ]
  },
  {
    hitter: "Jared Beebe",
    atBats: [
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2469, ev: 75.3, la: 17, pitchHeight: 3.1, result: "Foul" },
      { inning: 1, pitchType: "Four-Seam Fastball", spinRate: 2464, ev: 56.4, la: 46, pitchHeight: 3.0, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2436, ev: 68.1, la: 35, pitchHeight: 2.7, result: "Foul" },
      { inning: 4, pitchType: "Four-Seam Fastball", spinRate: 2533, ev: 95.0, la: 10, pitchHeight: 3.1, result: "Single" },
      { inning: 6, pitchType: "Four-Seam Fastball", spinRate: 2042, ev: 83.4, la: 10, pitchHeight: 2.1, result: "Lineout" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2368, ev: 66.7, la: 8, pitchHeight: 2.7, result: "Foul" },
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2337, ev: 73.8, la: 15, pitchHeight: 1.7, result: "Foul" },
      { inning: 4, pitchType: "Changeup", spinRate: 1226, ev: 73.9, la: -4, pitchHeight: 2.2, result: "Grounded Into DP" },
      { inning: 7, pitchType: "Sinker", spinRate: 1871, ev: 95.7, la: 10, pitchHeight: 2.6, result: "Lineout" }
    ]
  },
  {
    hitter: "Jaden Sheffield",
    atBats: [
      { inning: 3, pitchType: "Four-Seam Fastball", spinRate: 2483, ev: 102.7, la: 13, pitchHeight: 2.4, result: "Single" },
      { inning: 8, pitchType: "Sinker", spinRate: 1917, ev: 81.0, la: 37, pitchHeight: 2.4, result: "Double" }
    ]
  },
  {
    hitter: "Jayden Melendez",
    atBats: [
      { inning: 3, pitchType: "Slider", spinRate: 2472, ev: 87.8, la: 49, pitchHeight: 2.4, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2169, ev: 77.1, la: 79, pitchHeight: 2.0, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2167, ev: 79.8, la: -24, pitchHeight: 1.8, result: "Groundout" },
      { inning: 8, pitchType: "Sinker", spinRate: 1999, ev: 64.1, la: 40, pitchHeight: 2.5, result: "Foul" },
      { inning: 8, pitchType: "Changeup", spinRate: 1519, ev: 70.2, la: 35, pitchHeight: 1.8, result: "Foul" },
      { inning: 8, pitchType: "Sinker", spinRate: 1979, ev: 91.7, la: -12, pitchHeight: 1.6, result: "Groundout" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 2, pitchType: "Four-Seam Fastball", spinRate: 2475, ev: 86.7, la: 40, pitchHeight: 2.5, result: "Flyout" }
    ]
  }
];

export default hittersData;
