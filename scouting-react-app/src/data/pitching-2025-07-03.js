const pitchersData = {
  "John Carver": {
    1: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2247, ivb: 20.3, hb: 11.3, ext: 5.8, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2129, ivb: 19.2, hb: 6.5, ext: 5.8, result: "Hit By Pitch", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Slider", velo: 82.2, spin: 2310, ivb: 2.2, hb: -1.7, ext: 5.4, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2266, ivb: 19.1, hb: 8.3, ext: 5.7, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2251, ivb: 20.6, hb: 9.3, ext: 5.7, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2295, ivb: 19.1, hb: 10.9, ext: 5.7, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2235, ivb: 19.2, hb: 10.8, ext: 5.6, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2332, ivb: 17.5, hb: 13.0, ext: 5.6, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2354, ivb: 17.2, hb: 7.6, ext: 5.6, result: "Walk", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 82.1, spin: 2547, ivb: 6.8, hb: -1.5, ext: 5.6, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2319, ivb: 18.5, hb: 9.6, ext: 5.6, result: "Foul", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 83.0, spin: 1409, ivb: 5.9, hb: 15.8, ext: 5.7, result: "Swinging Strike", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 84.5, spin: 1384, ivb: 1.7, hb: 16.4, ext: 5.8, result: "Foul", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 85.6, spin: 1660, ivb: 5.7, hb: 17.4, ext: 5.6, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 84.6, spin: 1644, ivb: 6.0, hb: 17.7, ext: 5.8, result: "Ball In Dirt", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2255, ivb: 18.6, hb: 9.0, ext: 5.7, result: "Walk", batter: "Sam Parker" },
      // Dawson Willis
      { pitchType: "Sinker", velo: 92.8, spin: 2245, ivb: 13.7, hb: 16.5, ext: 5.6, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 82.4, spin: 2464, ivb: 3.5, hb: -3.4, ext: 5.6, result: "Double", batter: "Dawson Willis" },
      // Truitt Madonna
      { pitchType: "Slider", velo: 82.7, spin: 2524, ivb: 1.4, hb: -2.0, ext: 5.6, result: "Called Strike", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 83.6, spin: 2434, ivb: 2.2, hb: -2.5, ext: 5.5, result: "Called Strike", batter: "Truitt Madonna" },
      { pitchType: "Changeup", velo: 83.1, spin: 1331, ivb: 8.6, hb: 15.0, ext: 5.7, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2138, ivb: 14.0, hb: 9.6, ext: 6.1, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 82.9, spin: 2512, ivb: 2.8, hb: -5.8, ext: 5.4, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Changeup", velo: 84.4, spin: 1406, ivb: 7.1, hb: 13.5, ext: 6.0, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2352, ivb: 19.0, hb: 9.3, ext: 5.6, result: "Single", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2341, ivb: 17.9, hb: 9.9, ext: 5.8, result: "Pop Out", batter: "Tervell Johnson" },
      // Taj Bates
      { pitchType: "Slider", velo: 82.7, spin: 2417, ivb: 1.1, hb: -2.2, ext: 5.7, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Changeup", velo: 84.0, spin: 1444, ivb: 4.1, hb: 21.1, ext: 5.7, result: "Ball In Dirt", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 90.5, spin: 2307, ivb: 16.6, hb: 12.7, ext: 6.1, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2289, ivb: 16.7, hb: 12.9, ext: 5.7, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 81.8, spin: 2507, ivb: 5.2, hb: 1.5, ext: 5.6, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 82.3, spin: 2438, ivb: 4.7, hb: 0.4, ext: 5.7, result: "Walk", batter: "Taj Bates" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2347, ivb: 18.4, hb: 9.4, ext: 5.9, result: "Single", batter: "Anthony Diaz" },
      // Caden Merritt
      { pitchType: "Slider", velo: 82.3, spin: 2379, ivb: 5.4, hb: 4.9, ext: 5.7, result: "Called Strike", batter: "Caden Merritt" },
      { pitchType: "Slider", velo: 81.9, spin: 2493, ivb: 2.7, hb: -2.2, ext: 5.8, result: "Called Strike", batter: "Caden Merritt" },
      { pitchType: "Slider", velo: 82.5, spin: 2508, ivb: -2.1, hb: -4.1, ext: 5.8, result: "Forceout", batter: "Caden Merritt" },
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2317, ivb: 19.3, hb: 13.4, ext: 5.7, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 82.5, spin: 1447, ivb: 3.9, hb: 17.1, ext: 5.8, result: "Groundout", batter: "Trey Lipsey" }
    ],
    2: [
      // Eddie Hacopian
      { pitchType: "Slider", velo: 82.0, spin: 2461, ivb: 2.4, hb: -2.2, ext: 5.7, result: "Bunt Groundout", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Changeup", velo: 84.1, spin: 1449, ivb: 11.9, hb: 15.8, ext: 5.8, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2279, ivb: 18.3, hb: 13.1, ext: 5.6, result: "Groundout", batter: "Sam Parker" },
      // Dawson Willis
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2248, ivb: 20.1, hb: 13.0, ext: 5.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 80.3, spin: 2271, ivb: -0.2, hb: -5.6, ext: 5.7, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 79.6, spin: 2415, ivb: 3.7, hb: -9.3, ext: 5.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2191, ivb: 15.3, hb: 11.9, ext: 6.0, result: "Walk", batter: "Dawson Willis" },
      // Truitt Madonna
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2264, ivb: 19.5, hb: 11.5, ext: 5.7, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Changeup", velo: 83.8, spin: 1504, ivb: 12.7, hb: 9.2, ext: 5.8, result: "Ball In Dirt", batter: "Truitt Madonna" },
      { pitchType: "Sinker", velo: 89.9, spin: 2262, ivb: 14.1, hb: 17.0, ext: 5.8, result: "Double", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Slider", velo: 80.9, spin: 2345, ivb: -0.1, hb: -4.3, ext: 5.8, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 81.7, spin: 2393, ivb: 1.2, hb: -3.7, ext: 5.9, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Sinker", velo: 89.1, spin: 2294, ivb: 14.4, hb: 16.2, ext: 5.9, result: "Flyout", batter: "Tervell Johnson" }
    ],
    3: [
      // Taj Bates
      { pitchType: "Slider", velo: 83.6, spin: 2414, ivb: 6.5, hb: 0.3, ext: 5.6, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 84.0, spin: 2479, ivb: 2.4, hb: -0.4, ext: 5.6, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2406, ivb: 16.0, hb: 10.2, ext: 5.8, result: "Swinging Strike", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 82.7, spin: 2514, ivb: 1.9, hb: -1.8, ext: 5.7, result: "Flyout", batter: "Taj Bates" },
      // Anthony Diaz
      { pitchType: "Changeup", velo: 84.1, spin: 1590, ivb: 3.6, hb: 18.3, ext: 5.7, result: "Swinging Strike", batter: "Anthony Diaz" },
      { pitchType: "Changeup", velo: 84.1, spin: 1499, ivb: 4.4, hb: 14.7, ext: 5.7, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2292, ivb: 15.5, hb: 8.6, ext: 5.7, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2287, ivb: 17.8, hb: 12.2, ext: 5.6, result: "Triple", batter: "Anthony Diaz" },
      // Caden Merritt
      { pitchType: "Slider", velo: 81.1, spin: 2539, ivb: 0.8, hb: -4.8, ext: 5.6, result: "Double", batter: "Caden Merritt" }
    ]
  },
  "Kai Fyke": {
    3: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2122, ivb: 15.2, hb: 5.8, ext: 5.7, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2069, ivb: 16.5, hb: 2.7, ext: 6.1, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 80.5, spin: 2719, ivb: -8.4, hb: 0.4, ext: 5.7, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "", velo: 93.3, spin: 2076, ivb: 17.3, hb: 3.2, ext: 5.8, result: "Wild Pitch", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2076, ivb: 17.3, hb: 3.2, ext: 5.8, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2165, ivb: 18.9, hb: 6.1, ext: 6.1, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2098, ivb: 12.1, hb: 8.7, ext: 5.9, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2029, ivb: 11.6, hb: 7.2, ext: 5.9, result: "Single", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "", velo: 91.8, spin: 2063, ivb: 12.7, hb: 6.9, ext: 6.0, result: "Stolen Base 2B", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2063, ivb: 12.7, hb: 6.9, ext: 6.0, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 80.8, spin: 2721, ivb: -5.1, hb: -2.7, ext: 5.9, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2120, ivb: 16.9, hb: 6.5, ext: 5.9, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2007, ivb: 14.5, hb: 5.1, ext: 6.0, result: "Swinging Strike", batter: "Eddie Hacopian" },
      { pitchType: "Cutter", velo: 89.4, spin: 2290, ivb: 11.3, hb: 1.3, ext: 6.2, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2105, ivb: 15.3, hb: 8.3, ext: 5.9, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.9, spin: 2654, ivb: -2.8, hb: -0.2, ext: 5.9, result: "Ball In Dirt", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 83.2, spin: 2750, ivb: -2.6, hb: -3.6, ext: 5.8, result: "Walk", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Curveball", velo: 79.7, spin: 2729, ivb: -4.9, hb: -2.1, ext: 5.9, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Curveball", velo: 80.1, spin: 2733, ivb: -2.6, hb: -1.9, ext: 5.8, result: "Home Run", batter: "Sam Parker" },
      // Dawson Willis
      { pitchType: "Sinker", velo: 90.5, spin: 2100, ivb: 13.3, hb: 13.4, ext: 6.1, result: "Groundout", batter: "Dawson Willis" },
      // Truitt Madonna
      { pitchType: "Curveball", velo: 79.4, spin: 2730, ivb: -6.4, hb: -2.5, ext: 5.8, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2101, ivb: 17.1, hb: 10.0, ext: 5.9, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Sinker", velo: 90.0, spin: 2095, ivb: 10.0, hb: 12.1, ext: 5.9, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Sinker", velo: 90.1, spin: 2018, ivb: 8.0, hb: 10.4, ext: 6.1, result: "Flyout", batter: "Truitt Madonna" }
    ],
    4: [
      // Tervell Johnson
      { pitchType: "Sinker", velo: 89.7, spin: 2058, ivb: 10.4, hb: 14.6, ext: 6.2, result: "Swinging Strike", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 79.8, spin: 2636, ivb: -7.9, hb: -3.2, ext: 5.7, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 82.0, spin: 2724, ivb: -3.2, hb: -3.3, ext: 5.8, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2198, ivb: 17.2, hb: 7.2, ext: 6.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Sinker", velo: 91.4, spin: 2137, ivb: 10.7, hb: 13.7, ext: 6.1, result: "Groundout", batter: "Tervell Johnson" },
      // Taj Bates
      { pitchType: "Slider", velo: 81.3, spin: 2663, ivb: -3.6, hb: -1.4, ext: 5.9, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 89.2, spin: 2094, ivb: 12.3, hb: 11.7, ext: 6.0, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 90.9, spin: 2110, ivb: 13.3, hb: 12.1, ext: 5.9, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 82.4, spin: 2737, ivb: -2.3, hb: -3.6, ext: 5.9, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2264, ivb: 14.2, hb: 3.3, ext: 6.2, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2220, ivb: 15.8, hb: 1.2, ext: 6.0, result: "Walk", batter: "Taj Bates" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2155, ivb: 14.7, hb: 8.5, ext: 6.0, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Changeup", velo: 85.5, spin: 1384, ivb: 7.3, hb: 15.4, ext: 6.2, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "", velo: 91.4, spin: 2204, ivb: 13.6, hb: 8.8, ext: 6.2, result: "Wild Pitch", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2204, ivb: 13.6, hb: 8.8, ext: 6.2, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Curveball", velo: 80.7, spin: 2645, ivb: -6.8, hb: -1.9, ext: 6.0, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 82.9, spin: 2648, ivb: -3.7, hb: -1.4, ext: 5.7, result: "Walk", batter: "Anthony Diaz" },
      // Caden Merritt
      { pitchType: "Sinker", velo: 91.3, spin: 2135, ivb: 8.0, hb: 12.0, ext: 6.2, result: "Ball", batter: "Caden Merritt" },
      { pitchType: "Sinker", velo: 91.6, spin: 2150, ivb: 10.3, hb: 14.1, ext: 6.1, result: "Called Strike", batter: "Caden Merritt" },
      { pitchType: "Curveball", velo: 81.0, spin: 2683, ivb: -5.1, hb: -1.7, ext: 5.9, result: "Called Strike", batter: "Caden Merritt" },
      { pitchType: "Sinker", velo: 94.0, spin: 2232, ivb: 14.0, hb: 12.6, ext: 6.2, result: "Forceout", batter: "Caden Merritt" },
      // Trey Lipsey
      { pitchType: "Sinker", velo: 92.5, spin: 2110, ivb: 5.9, hb: 16.3, ext: 6.2, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2165, ivb: 20.9, hb: 10.7, ext: 6.2, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2100, ivb: 17.7, hb: 13.1, ext: 5.8, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 85.8, spin: 1356, ivb: 3.6, hb: 9.4, ext: 6.1, result: "Strikeout", batter: "Trey Lipsey" }
    ],
    5: [
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2057, ivb: 15.9, hb: 11.6, ext: 5.9, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Sinker", velo: 88.8, spin: 2137, ivb: 13.8, hb: 12.7, ext: 5.9, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 80.2, spin: 2640, ivb: -4.6, hb: -2.2, ext: 5.9, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Sinker", velo: 91.4, spin: 2194, ivb: 13.3, hb: 12.9, ext: 5.8, result: "Single", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Curveball", velo: 79.0, spin: 2602, ivb: -6.8, hb: -1.5, ext: 5.8, result: "Ball", batter: "Sam Parker" },
      { pitchType: "", velo: 83.3, spin: 1401, ivb: 1.6, hb: 10.8, ext: 6.1, result: "Caught Stealing 2B", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 83.3, spin: 1401, ivb: 1.6, hb: 10.8, ext: 6.1, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Curveball", velo: 81.2, spin: 2736, ivb: -4.9, hb: -0.7, ext: 5.6, result: "Groundout", batter: "Sam Parker" },
      // Dawson Willis
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2156, ivb: 19.9, hb: 8.9, ext: 5.9, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 81.7, spin: 2676, ivb: -1.1, hb: 0.9, ext: 5.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2260, ivb: 15.5, hb: 2.8, ext: 6.2, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2189, ivb: 16.1, hb: 2.4, ext: 5.8, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2218, ivb: 14.9, hb: 8.7, ext: 6.1, result: "Flyout", batter: "Dawson Willis" }
    ]
  },
  "Ryan Calvert": {
    6: [
      // Truitt Madonna
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2276, ivb: 17.7, hb: 11.2, ext: 6.2, result: "Called Strike", batter: "Truitt Madonna" },
      { pitchType: "Curveball", velo: 77.1, spin: 2422, ivb: -10.2, hb: -10.7, ext: 6.1, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2266, ivb: 15.9, hb: 9.2, ext: 6.3, result: "Called Strike", batter: "Truitt Madonna" },
      { pitchType: "Curveball", velo: 78.5, spin: 2619, ivb: -20.0, hb: -4.7, ext: 5.8, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2227, ivb: 14.3, hb: 9.5, ext: 6.2, result: "Single", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2288, ivb: 20.0, hb: 10.9, ext: 6.3, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2259, ivb: 16.5, hb: 10.4, ext: 6.3, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 84.3, spin: 2267, ivb: 8.0, hb: -3.9, ext: 6.3, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2206, ivb: 17.9, hb: 10.8, ext: 6.4, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 76.9, spin: 2625, ivb: -14.9, hb: -6.2, ext: 5.9, result: "Strikeout", batter: "Tervell Johnson" },
      // Taj Bates
      { pitchType: "Slider", velo: 83.2, spin: 2177, ivb: 7.2, hb: -2.0, ext: 6.2, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2265, ivb: 13.5, hb: 12.5, ext: 6.5, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2233, ivb: 19.2, hb: 9.0, ext: 6.5, result: "Swinging Strike", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2250, ivb: 19.5, hb: 8.0, ext: 6.4, result: "Strikeout Double Play", batter: "Taj Bates" }
    ],
    7: [
      // Anthony Diaz
      { pitchType: "Curveball", velo: 76.4, spin: 2557, ivb: -7.3, hb: -10.6, ext: 5.7, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Sinker", velo: 90.1, spin: 2220, ivb: 13.6, hb: 14.0, ext: 6.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Curveball", velo: 76.1, spin: 2489, ivb: -12.7, hb: -10.6, ext: 5.7, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2180, ivb: 15.0, hb: 5.4, ext: 6.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 83.9, spin: 2292, ivb: 4.2, hb: -3.5, ext: 6.0, result: "Strikeout", batter: "Anthony Diaz" },
      // Caden Merritt
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2239, ivb: 16.3, hb: 7.7, ext: 6.7, result: "Ball", batter: "Caden Merritt" },
      { pitchType: "Curveball", velo: 76.4, spin: 2438, ivb: -14.0, hb: -10.9, ext: 6.0, result: "Ball", batter: "Caden Merritt" },
      { pitchType: "Slider", velo: 81.7, spin: 2184, ivb: 8.5, hb: -4.0, ext: 6.0, result: "Ball", batter: "Caden Merritt" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2180, ivb: 17.5, hb: 10.8, ext: 6.4, result: "Called Strike", batter: "Caden Merritt" },
      { pitchType: "Four-Seam Fastball", velo: 89.2, spin: 2219, ivb: 17.4, hb: 10.7, ext: 6.2, result: "Called Strike", batter: "Caden Merritt" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2274, ivb: 18.5, hb: 8.6, ext: 6.7, result: "Strikeout", batter: "Caden Merritt" },
      // Trey Lipsey
      { pitchType: "Changeup", velo: 78.7, spin: 1588, ivb: 7.4, hb: 16.1, ext: 6.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 90.3, spin: 2303, ivb: 14.0, hb: 15.2, ext: 6.2, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 75.9, spin: 2372, ivb: -12.0, hb: -5.2, ext: 5.9, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Cutter", velo: 84.1, spin: 2193, ivb: 12.5, hb: -1.1, ext: 6.3, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 78.3, spin: 2715, ivb: -12.8, hb: -9.6, ext: 5.9, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2149, ivb: 17.0, hb: 6.2, ext: 6.6, result: "Walk", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 1983, ivb: 15.8, hb: 9.8, ext: 6.4, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 76.9, spin: 2423, ivb: -10.3, hb: -3.6, ext: 6.0, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.8, spin: 2160, ivb: 9.3, hb: -2.6, ext: 6.3, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "", velo: 90.3, spin: 2220, ivb: 16.9, hb: 11.3, ext: 6.5, result: "Stolen Base 2B", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2220, ivb: 16.9, hb: 11.3, ext: 6.5, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 89.2, spin: 2106, ivb: 14.3, hb: 8.9, ext: 6.6, result: "Strikeout", batter: "Eddie Hacopian" }
    ]
  },
  "JJ Almeda": {
    8: [
      // Sam Parker
      { pitchType: "Slider", velo: 88.3, spin: 2301, ivb: 14.5, hb: 7.2, ext: 5.6, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 81.2, spin: 2521, ivb: -0.1, hb: -5.4, ext: 5.4, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 81.4, spin: 2570, ivb: -2.3, hb: -7.8, ext: 5.3, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2426, ivb: 15.9, hb: 7.1, ext: 6.1, result: "Double", batter: "Sam Parker" },
      // Dawson Willis
      { pitchType: "Slider", velo: 80.4, spin: 2482, ivb: 0.4, hb: -0.9, ext: 5.2, result: "Foul Bunt", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 87.6, spin: 2364, ivb: 16.6, hb: 2.4, ext: 5.9, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 80.2, spin: 2511, ivb: 1.2, hb: -4.6, ext: 5.3, result: "Single", batter: "Dawson Willis" },
      // Truitt Madonna
      { pitchType: "Slider", velo: 80.6, spin: 2519, ivb: -0.7, hb: -2.2, ext: 5.4, result: "Ball In Dirt", batter: "Truitt Madonna" },
      { pitchType: "Cutter", velo: 88.3, spin: 2372, ivb: 17.1, hb: 3.0, ext: 5.9, result: "Swinging Strike", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2490, ivb: 15.1, hb: 5.9, ext: 6.1, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 81.2, spin: 2646, ivb: 0.2, hb: -0.1, ext: 5.2, result: "Ball In Dirt", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 80.8, spin: 2591, ivb: 4.3, hb: -2.3, ext: 5.4, result: "Swinging Strike", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 80.4, spin: 2699, ivb: 0.6, hb: -4.7, ext: 5.3, result: "Strikeout", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Curveball", velo: 80.1, spin: 2661, ivb: -1.4, hb: -2.2, ext: 5.3, result: "Swinging Strike (Blocked)", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 79.3, spin: 2712, ivb: -1.5, hb: -7.4, ext: 5.5, result: "Swinging Strike (Blocked)", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 77.8, spin: 2585, ivb: 2.1, hb: -6.1, ext: 5.2, result: "Strikeout", batter: "Tervell Johnson" },
      // Taj Bates
      { pitchType: "Curveball", velo: 78.9, spin: 2651, ivb: -0.4, hb: -9.6, ext: 5.7, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Curveball", velo: 80.0, spin: 2754, ivb: -3.7, hb: -9.5, ext: 5.4, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 80.6, spin: 2694, ivb: 1.5, hb: -6.1, ext: 5.4, result: "Ball In Dirt", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 80.8, spin: 2609, ivb: -0.4, hb: -3.1, ext: 5.5, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 81.7, spin: 2681, ivb: -0.6, hb: -5.8, ext: 5.3, result: "Strikeout", batter: "Taj Bates" }
    ]
  },
  "Andrew Ronne": {
    9: [
      // Anthony Diaz
      { pitchType: "Sinker", velo: 94.3, spin: 2401, ivb: 14.2, hb: 15.8, ext: 6.6, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 81.0, spin: 2589, ivb: -2.9, hb: -16.6, ext: 6.0, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2118, ivb: 13.3, hb: 7.7, ext: 6.7, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2274, ivb: 12.7, hb: 7.7, ext: 6.6, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2331, ivb: 16.3, hb: 8.8, ext: 6.5, result: "Strikeout", batter: "Anthony Diaz" },
      // Caden Merritt
      { pitchType: "Curveball", velo: 82.8, spin: 2672, ivb: -7.1, hb: -13.6, ext: 6.0, result: "Lineout", batter: "Caden Merritt" },
      // Trey Lipsey
      { pitchType: "Sinker", velo: 96.7, spin: 2352, ivb: 11.4, hb: 10.6, ext: 6.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 83.1, spin: 2719, ivb: -6.2, hb: -14.8, ext: 5.8, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 82.3, spin: 2711, ivb: -8.8, hb: -12.0, ext: 6.0, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2405, ivb: 12.1, hb: 5.7, ext: 6.5, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 96.8, spin: 2345, ivb: 15.5, hb: 6.4, ext: 6.4, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 96.7, spin: 2304, ivb: 14.1, hb: 6.1, ext: 6.5, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 83.4, spin: 2601, ivb: -4.5, hb: -17.5, ext: 6.1, result: "Strikeout", batter: "Trey Lipsey" }
    ]
  }
};

export default pitchersData;
