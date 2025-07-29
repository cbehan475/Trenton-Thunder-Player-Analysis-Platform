const pitchersData = {
  "Chris Billingsley": {
    1: [
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2199, ivb: 20.2, hb: 4.0, ext: 5.5, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2102, ivb: 15.5, hb: 9.6, ext: 5.7, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2334, ivb: 15.3, hb: 7.0, ext: 6.0, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 84.8, spin: 2774, ivb: -2.7, hb: -16.7, ext: 5.1, result: "Strikeout", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2325, ivb: 16.8, hb: 10.6, ext: 5.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2204, ivb: 19.3, hb: 8.6, ext: 5.7, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2289, ivb: 15.8, hb: 7.4, ext: 5.9, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2202, ivb: 16.8, hb: 7.7, ext: 5.8, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2240, ivb: 18.9, hb: 4.0, ext: 6.0, result: "Walk", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Curveball", velo: 80.3, spin: 2782, ivb: -7.5, hb: -16.5, ext: 5.3, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2116, ivb: 15.4, hb: 9.7, ext: 5.7, result: "Grounded Into DP", batter: "Hugh Pinkney" }
    ],
    2: [
      // Landen Johnson
      { pitchType: "Slider", velo: 83.8, spin: 2722, ivb: 2.7, hb: -10.0, ext: 5.5, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 86.2, spin: 1583, ivb: 9.5, hb: 8.8, ext: 5.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 84.4, spin: 2789, ivb: 5.4, hb: -9.0, ext: 5.4, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2289, ivb: 15.8, hb: 4.9, ext: 6.0, result: "Strikeout", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Changeup", velo: 84.1, spin: 1424, ivb: 9.6, hb: 10.7, ext: 5.6, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2367, ivb: 17.6, hb: 3.2, ext: 5.8, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2283, ivb: 17.0, hb: 3.2, ext: 5.9, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2247, ivb: 13.3, hb: 4.9, ext: 5.9, result: "Walk", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2134, ivb: 18.6, hb: 2.6, ext: 5.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2104, ivb: 15.9, hb: 1.6, ext: 5.9, result: "Foul Bunt", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2142, ivb: 19.9, hb: 6.8, ext: 5.7, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 84.5, spin: 2735, ivb: -3.1, hb: -8.6, ext: 5.0, result: "Single", batter: "Ryan Rivera" },
      // Merik Carter
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2098, ivb: 13.7, hb: 6.4, ext: 5.8, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2170, ivb: 12.7, hb: 5.4, ext: 5.9, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2147, ivb: 17.8, hb: 5.6, ext: 5.7, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2136, ivb: 17.9, hb: 6.2, ext: 5.6, result: "Walk", batter: "Merik Carter" },
      // Caden Shapiro
      { pitchType: "Slider", velo: 83.1, spin: 2795, ivb: 7.7, hb: -8.8, ext: 5.3, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.8, spin: 2804, ivb: -2.0, hb: -14.3, ext: 5.3, result: "Swinging Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 97.2, spin: 2293, ivb: 17.6, hb: 5.4, ext: 5.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 84.6, spin: 2859, ivb: 5.7, hb: -16.7, ext: 5.2, result: "Strikeout", batter: "Caden Shapiro" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2269, ivb: 16.9, hb: 4.3, ext: 5.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 81.0, spin: 2669, ivb: 3.3, hb: -13.9, ext: 5.3, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2193, ivb: 15.2, hb: 8.6, ext: 5.6, result: "Hit By Pitch", batter: "Camden Ross" },
      // Matt Evans
      { pitchType: "Slider", velo: 82.5, spin: 2578, ivb: -0.3, hb: -7.0, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2247, ivb: 12.8, hb: 2.8, ext: 5.9, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 94.0, spin: 2091, ivb: 11.5, hb: 13.5, ext: 5.7, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 82.8, spin: 2761, ivb: 2.9, hb: -11.3, ext: 5.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2173, ivb: 17.3, hb: 4.9, ext: 5.8, result: "Walk", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2196, ivb: 17.2, hb: 2.2, ext: 5.9, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2274, ivb: 16.6, hb: 5.5, ext: 6.0, result: "Lineout", batter: "Javon Hernandez" }
    ],
    3: [
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2189, ivb: 13.0, hb: 2.7, ext: 6.1, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 81.8, spin: 2653, ivb: -1.9, hb: -12.6, ext: 5.3, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2279, ivb: 15.2, hb: 2.7, ext: 6.0, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 85.8, spin: 2872, ivb: -2.2, hb: -7.0, ext: 5.2, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2142, ivb: 17.9, hb: 4.5, ext: 5.8, result: "Strikeout", batter: "Hugh Pinkney" },
      // Landen Johnson
      { pitchType: "Slider", velo: 85.3, spin: 2884, ivb: 4.8, hb: -10.1, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 85.0, spin: 2830, ivb: 1.6, hb: -12.6, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2193, ivb: 14.0, hb: 6.5, ext: 5.9, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2295, ivb: 16.4, hb: 5.8, ext: 6.0, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2204, ivb: 12.8, hb: 4.3, ext: 5.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2245, ivb: 14.4, hb: 8.0, ext: 5.8, result: "Walk", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2192, ivb: 15.3, hb: 8.6, ext: 6.0, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Slider", velo: 84.1, spin: 2599, ivb: -1.2, hb: -6.5, ext: 5.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2218, ivb: 16.6, hb: 5.7, ext: 5.9, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Slider", velo: 85.0, spin: 2876, ivb: -5.6, hb: -15.7, ext: 5.2, result: "Strikeout", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2236, ivb: 18.0, hb: 8.4, ext: 5.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2190, ivb: 15.3, hb: 5.8, ext: 5.7, result: "Pop Out", batter: "Ryan Rivera" }
    ],
    4: [
      // Merik Carter
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2115, ivb: 15.7, hb: 7.5, ext: 5.6, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2209, ivb: 16.6, hb: 6.8, ext: 5.9, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 86.1, spin: 1495, ivb: 8.5, hb: 8.4, ext: 5.4, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Changeup", velo: 86.2, spin: 1705, ivb: 6.5, hb: 10.6, ext: 5.6, result: "Flyout", batter: "Merik Carter" },
      // Caden Shapiro
      { pitchType: "Changeup", velo: 85.4, spin: 1764, ivb: 13.6, hb: 9.4, ext: 5.5, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2234, ivb: 18.9, hb: 2.2, ext: 5.7, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2202, ivb: 14.1, hb: 10.1, ext: 5.7, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2194, ivb: 15.3, hb: 8.6, ext: 5.8, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.8, spin: 2720, ivb: 0.2, hb: -15.8, ext: 5.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2275, ivb: 14.9, hb: 6.6, ext: 6.0, result: "Strikeout", batter: "Caden Shapiro" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2111, ivb: 16.6, hb: 7.6, ext: 5.7, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2255, ivb: 12.1, hb: 9.8, ext: 5.7, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2325, ivb: 19.0, hb: 7.1, ext: 5.2, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 84.2, spin: 2843, ivb: -0.9, hb: -18.2, ext: 5.2, result: "Strikeout", batter: "Camden Ross" }
    ],
    5: [
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2108, ivb: 21.3, hb: 2.5, ext: 5.5, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 84.3, spin: 2665, ivb: 0.4, hb: -7.9, ext: 4.9, result: "Single", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "", velo: 79.7, spin: 2564, ivb: -2.9, hb: -11.2, ext: 5.4, result: "Stolen Base 2B", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 79.7, spin: 2564, ivb: -2.9, hb: -11.2, ext: 5.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2128, ivb: 15.9, hb: 8.4, ext: 5.7, result: "Sac Bunt", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 84.9, spin: 1629, ivb: 10.5, hb: 11.2, ext: 5.6, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 81.7, spin: 2728, ivb: 3.8, hb: -13.6, ext: 5.2, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2329, ivb: 18.2, hb: 11.0, ext: 6.0, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2154, ivb: 13.8, hb: 3.6, ext: 5.7, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 80.9, spin: 2631, ivb: 3.1, hb: -12.3, ext: 5.2, result: "Walk", batter: "Hugh Pinkney" }
    ]
  },
  "Kai Fyke": {
    5: [
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2090, ivb: 15.2, hb: 10.8, ext: 5.2, result: "Sac Fly", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2177, ivb: 16.6, hb: 6.3, ext: 5.2, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 83.7, spin: 1387, ivb: 4.7, hb: 8.7, ext: 5.3, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 85.4, spin: 1417, ivb: 3.6, hb: 15.6, ext: 5.3, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Curveball", velo: 80.3, spin: 2763, ivb: -6.4, hb: -4.3, ext: 5.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2184, ivb: 18.6, hb: 7.4, ext: 5.4, result: "Walk", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 79.6, spin: 2701, ivb: -7.2, hb: -6.3, ext: 5.2, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2156, ivb: 12.0, hb: 7.6, ext: 5.4, result: "Forceout", batter: "Ryan Rivera" }
    ],
    6: [
      // Merik Carter
      { pitchType: "Four-Seam Fastball", velo: 87.9, spin: 2110, ivb: 13.5, hb: 7.6, ext: 5.5, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2118, ivb: 16.7, hb: 9.5, ext: 5.3, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2155, ivb: 17.5, hb: 10.1, ext: 5.2, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Slider", velo: 81.7, spin: 2597, ivb: -3.4, hb: -4.1, ext: 5.1, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2054, ivb: 12.5, hb: 8.5, ext: 5.2, result: "Walk", batter: "Merik Carter" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2154, ivb: 16.4, hb: 10.6, ext: 5.4, result: "Pop Out", batter: "Caden Shapiro" },
      // Camden Ross
      { pitchType: "Curveball", velo: 78.7, spin: 2607, ivb: -6.4, hb: -1.2, ext: 5.0, result: "Ball", batter: "Camden Ross" },
      { pitchType: "", velo: 89.0, spin: 2097, ivb: 12.6, hb: 9.8, ext: 5.6, result: "Stolen Base 2B", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 89.0, spin: 2097, ivb: 12.6, hb: 9.8, ext: 5.6, result: "Ball", batter: "Camden Ross" },
      { pitchType: "", velo: 79.8, spin: 2649, ivb: -3.6, hb: -1.2, ext: 5.2, result: "Stolen Base 3B", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 79.8, spin: 2649, ivb: -3.6, hb: -1.2, ext: 5.2, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 88.3, spin: 2073, ivb: 14.4, hb: 8.5, ext: 5.5, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2076, ivb: 13.5, hb: 8.1, ext: 5.6, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2220, ivb: 18.4, hb: 10.3, ext: 5.6, result: "Walk", batter: "Camden Ross" },
      // Matt Evans
      { pitchType: "Slider", velo: 81.1, spin: 2705, ivb: -3.1, hb: -1.1, ext: 5.2, result: "Ball", batter: "Matt Evans" },
      { pitchType: "", velo: 88.5, spin: 2144, ivb: 14.0, hb: 10.2, ext: 5.3, result: "Stolen Base 2B", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2144, ivb: 14.0, hb: 10.2, ext: 5.3, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2115, ivb: 13.5, hb: 8.4, ext: 5.5, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 81.5, spin: 2579, ivb: -2.1, hb: -1.9, ext: 5.2, result: "Sac Fly", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "Curveball", velo: 78.2, spin: 2567, ivb: -6.7, hb: -1.5, ext: 5.2, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 78.5, spin: 2575, ivb: -4.9, hb: -2.3, ext: 5.1, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2157, ivb: 14.9, hb: 9.3, ext: 5.3, result: "Groundout", batter: "Javon Hernandez" }
    ]
  },
  "Cooper McGrath": {
    7: [
      // Hugh Pinkney
      { pitchType: "Sinker", velo: 91.4, spin: 2508, ivb: 9.4, hb: 11.8, ext: 5.8, result: "Groundout", batter: "Hugh Pinkney" },
      // Landen Johnson
      { pitchType: "Slider", velo: 85.8, spin: 2537, ivb: 3.0, hb: -1.9, ext: 5.8, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 85.5, spin: 2428, ivb: 0.5, hb: -0.9, ext: 5.9, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 91.7, spin: 2430, ivb: 9.9, hb: 8.1, ext: 5.8, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 91.8, spin: 2463, ivb: 11.2, hb: 6.1, ext: 5.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 85.9, spin: 2715, ivb: 0.8, hb: -3.5, ext: 5.8, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2512, ivb: 9.8, hb: 6.0, ext: 6.0, result: "Strikeout", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2463, ivb: 10.2, hb: 5.8, ext: 6.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2435, ivb: 10.7, hb: 6.2, ext: 6.2, result: "Single", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Slider", velo: 86.0, spin: 2463, ivb: 1.0, hb: -1.6, ext: 6.0, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "", velo: 92.5, spin: 2451, ivb: 10.9, hb: 8.4, ext: 6.1, result: "Stolen Base 2B", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 92.5, spin: 2451, ivb: 10.9, hb: 8.4, ext: 6.1, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 92.8, spin: 2333, ivb: 8.6, hb: 12.8, ext: 6.2, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 93.2, spin: 2577, ivb: 9.2, hb: 11.9, ext: 6.1, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 93.1, spin: 2486, ivb: 10.1, hb: 12.6, ext: 6.1, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Cutter", velo: 88.0, spin: 2576, ivb: 2.6, hb: -2.6, ext: 5.7, result: "Hit By Pitch", batter: "Ryan Rivera" },
      // Merik Carter
      { pitchType: "Sinker", velo: 93.6, spin: 2456, ivb: 10.8, hb: 11.2, ext: 5.9, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Slider", velo: 85.7, spin: 2502, ivb: 0.3, hb: -0.6, ext: 5.7, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Sinker", velo: 94.0, spin: 2565, ivb: 8.9, hb: 9.6, ext: 5.8, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 87.4, spin: 2578, ivb: 3.7, hb: -0.9, ext: 6.2, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 87.1, spin: 2792, ivb: -0.3, hb: -2.0, ext: 5.8, result: "Flyout", batter: "Merik Carter" }
    ]
  },
  "Jarrette Bonet": {
    8: [
      // Caden Shapiro
      { pitchType: "Sinker", velo: 94.9, spin: 2302, ivb: 11.4, hb: 16.8, ext: 5.7, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2323, ivb: 17.5, hb: 10.7, ext: 5.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Cutter", velo: 90.2, spin: 2260, ivb: 6.6, hb: 2.6, ext: 5.3, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 87.8, spin: 2265, ivb: 13.6, hb: 11.6, ext: 5.3, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 88.7, spin: 2148, ivb: 10.8, hb: 17.9, ext: 5.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Cutter", velo: 89.6, spin: 2277, ivb: 5.7, hb: 3.2, ext: 5.4, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2174, ivb: 17.2, hb: 8.6, ext: 5.6, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2311, ivb: 16.9, hb: 9.6, ext: 5.5, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2255, ivb: 18.8, hb: 12.3, ext: 5.5, result: "Pop Out", batter: "Caden Shapiro" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2375, ivb: 11.7, hb: 2.8, ext: 5.2, result: "Flyout", batter: "Camden Ross" },
      // Matt Evans
      { pitchType: "Sinker", velo: 95.4, spin: 2287, ivb: 17.8, hb: 15.0, ext: 5.4, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 85.7, spin: 2651, ivb: 2.8, hb: -7.8, ext: 5.1, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 94.8, spin: 2230, ivb: 12.7, hb: 17.2, ext: 5.3, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 95.8, spin: 2272, ivb: 14.2, hb: 16.5, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2272, ivb: 19.3, hb: 10.8, ext: 5.7, result: "Strikeout", batter: "Matt Evans" }
    ],
    9: [
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2176, ivb: 17.1, hb: 9.3, ext: 5.2, result: "Single", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2206, ivb: 19.3, hb: 7.6, ext: 5.6, result: "Flyout", batter: "Hugh Pinkney" },
      // Landen Johnson
      { pitchType: "Changeup", velo: 87.1, spin: 2229, ivb: 8.6, hb: 19.6, ext: 5.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2241, ivb: 18.9, hb: 9.3, ext: 5.4, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.0, spin: 2534, ivb: 4.7, hb: -7.9, ext: 5.1, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2225, ivb: 18.6, hb: 8.9, ext: 5.7, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 94.2, spin: 2294, ivb: 13.5, hb: 14.8, ext: 5.3, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Cutter", velo: 90.1, spin: 2227, ivb: 3.8, hb: 0.1, ext: 5.1, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2209, ivb: 18.6, hb: 8.5, ext: 5.5, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 88.4, spin: 2279, ivb: 9.7, hb: 17.5, ext: 5.4, result: "Strikeout", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Sinker", velo: 87.7, spin: 2220, ivb: 10.0, hb: 17.6, ext: 5.3, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 92.8, spin: 2262, ivb: 11.1, hb: 17.0, ext: 5.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2168, ivb: 17.0, hb: 12.4, ext: 5.5, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2200, ivb: 16.3, hb: 11.4, ext: 5.5, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Cutter", velo: 90.4, spin: 2235, ivb: 6.2, hb: 2.4, ext: 5.3, result: "Walk", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2268, ivb: 19.1, hb: 11.6, ext: 5.4, result: "Single", batter: "Ryan Rivera" },
      // Merik Carter
      { pitchType: "Sinker", velo: 94.3, spin: 2345, ivb: 10.7, hb: 19.4, ext: 5.2, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Sinker", velo: 88.2, spin: 2248, ivb: 9.8, hb: 16.6, ext: 5.2, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 90.2, spin: 2255, ivb: 5.5, hb: 2.7, ext: 5.2, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Sinker", velo: 95.0, spin: 2128, ivb: 17.4, hb: 12.0, ext: 5.5, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 1944, ivb: 16.2, hb: 8.8, ext: 5.5, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2208, ivb: 18.5, hb: 11.1, ext: 5.4, result: "Strikeout", batter: "Merik Carter" }
    ]
  }
};

export default pitchersData;
