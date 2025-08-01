const hittersData = [
  {
    hitter: "Rowan Masse",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2455, ev: 45.2, la: -34, pitchHeight: 3.2, result: "Forceout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2118, ev: 75.8, la: -9, pitchHeight: 3.9, result: "Groundout" },
      { inning: 8, pitchType: "Cutter", spinRate: 2289, ev: 76.1, la: 18, pitchHeight: 2.3, result: "Foul" }
    ]
  },
  {
    hitter: "Aaron Whitley",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2317, ev: 42.9, la: -83, pitchHeight: 2.5, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2381, ev: 75.3, la: 27, pitchHeight: 3.1, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2449, ev: 67.3, la: 27, pitchHeight: 2.8, result: "Foul" },
      { inning: 4, pitchType: "Slider", spinRate: 2345, ev: 76.6, la: 21, pitchHeight: 2.1, result: "Single" },
      { inning: 5, pitchType: "Changeup", spinRate: 1772, ev: 83.4, la: -4, pitchHeight: 2.6, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2169, ev: 85.6, la: 36, pitchHeight: 3.1, result: "Flyout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2114, ev: 87.9, la: 55, pitchHeight: 2.7, result: "Flyout" }
    ]
  },
  {
    hitter: "Michael Whooley",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2315, ev: 71.9, la: 77, pitchHeight: 3.6, result: "Foul" },
      { inning: 2, pitchType: "Sinker", spinRate: 2321, ev: 42.6, la: -44, pitchHeight: 1.7, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2208, ev: 66.4, la: 47, pitchHeight: 3.3, result: "Sac Fly" },
      { inning: 9, pitchType: "Slider", spinRate: 2610, ev: 92.6, la: 23, pitchHeight: 2.7, result: "Lineout" }
    ]
  },
  {
    hitter: "Aaron Graeber",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2369, ev: 102.1, la: 16, pitchHeight: 1.8, result: "Lineout" },
      { inning: 4, pitchType: "Changeup", spinRate: 883, ev: 100.3, la: 9, pitchHeight: 1.8, result: "Single" },
      { inning: 6, pitchType: "Slider", spinRate: 2444, ev: 91.3, la: 50, pitchHeight: 2.4, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2520, ev: 71.0, la: 71, pitchHeight: 2.2, result: "Pop Out" },
      { inning: 9, pitchType: "Slider", spinRate: 2516, ev: 63.6, la: 59, pitchHeight: 2.2, result: "Foul" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2352, ev: 72.6, la: 52, pitchHeight: 3.4, result: "Foul" }
    ]
  },
  {
    hitter: "Jakob Poturnak",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2394, ev: 69.1, la: 33, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Curveball", spinRate: 2157, ev: 92.5, la: 24, pitchHeight: 2.8, result: "Lineout" }
    ]
  },
  {
    hitter: "Harry Genth",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2334, ev: 54.0, la: -47, pitchHeight: 1.9, result: "Groundout" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 1968, ev: 68.1, la: 57, pitchHeight: 3.4, result: "Foul" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2074, ev: 60.3, la: -66, pitchHeight: 2.8, result: "Groundout" },
      { inning: 8, pitchType: "Four-Seam Fastball", spinRate: 2003, ev: 69.8, la: 34, pitchHeight: 2.9, result: "Foul" }
    ]
  },
  {
    hitter: "John Schroeder",
    atBats: [
      { inning: 2, pitchType: "Sinker", spinRate: 2387, ev: 59.3, la: -19, pitchHeight: 1.6, result: "Groundout" },
      { inning: 4, pitchType: "Sinker", spinRate: 2266, ev: 72.4, la: 42, pitchHeight: 2.7, result: "Foul" },
      { inning: 7, pitchType: "Four-Seam Fastball", spinRate: 2031, ev: 91.3, la: -5, pitchHeight: 2.2, result: "Groundout" },
      { inning: 9, pitchType: "Four-Seam Fastball", spinRate: 2324, ev: 84.8, la: -11, pitchHeight: 2.2, result: "Groundout" }
    ]
  },
  {
    hitter: "JuJu Stevens",
    atBats: [
      { inning: 1, pitchType: "Sinker", spinRate: 2405, ev: 75.1, la: 16, pitchHeight: 2.9, result: "Foul" },
      { inning: 4, pitchType: "Sinker", spinRate: 2428, ev: 100.1, la: 15, pitchHeight: 1.7, result: "Single" },
      { inning: 6, pitchType: "Curveball", spinRate: 2677, ev: 79.6, la: 67, pitchHeight: 2.9, result: "Foul" },
      { inning: 6, pitchType: "Curveball", spinRate: 2698, ev: 91.5, la: 23, pitchHeight: 1.7, result: "Lineout" },
      { inning: 8, pitchType: "Slider", spinRate: 2434, ev: 105.2, la: 18, pitchHeight: 2.3, result: "Foul" },
      { inning: 8, pitchType: "Slider", spinRate: 2483, ev: 23.5, la: -59, pitchHeight: 1.1, result: "Groundout" }
    ]
  },
  {
    hitter: "Danny Corona",
    atBats: [
      { inning: 3, pitchType: "Sinker", spinRate: 2407, ev: 71.2, la: 44, pitchHeight: 2.8, result: "Foul" },
      { inning: 3, pitchType: "Sinker", spinRate: 2410, ev: 98.7, la: 11, pitchHeight: 3.1, result: "Single" },
      { inning: 5, pitchType: "Four-Seam Fastball", spinRate: 2009, ev: 102.6, la: 20, pitchHeight: 2.4, result: "Double" },
      { inning: 7, pitchType: "Changeup", spinRate: 1793, ev: 69.9, la: 64, pitchHeight: 2.4, result: "Foul" },
      { inning: 7, pitchType: "Changeup", spinRate: 1910, ev: 67.0, la: -14, pitchHeight: 2.0, result: "Groundout" }
    ]
  }
];

export default hittersData;
