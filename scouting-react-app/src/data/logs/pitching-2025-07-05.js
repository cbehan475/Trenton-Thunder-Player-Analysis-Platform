const pitchersData = {
  "Tommy Case": {
    1: [
      // Javon Hernandez
      { pitchType: "Sinker", velo: 92.5, spin: 2387, ivb: 15.8, hb: 17.3, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 92.4, spin: 2410, ivb: 17.5, hb: 15.9, ext: 5.2, result: "Flyout", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Changeup", velo: 85.0, spin: 1516, ivb: 5.9, hb: 16.7, ext: 5.4, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 85.0, spin: 1779, ivb: 8.3, hb: 18.8, ext: 5.2, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 77.0, spin: 2832, ivb: -13.1, hb: -15.7, ext: 4.7, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 88.1, spin: 1626, ivb: 6.1, hb: 19.9, ext: 5.3, result: "Field Error", batter: "Harrison Didawick" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 78.4, spin: 2666, ivb: -2.6, hb: -10.6, ext: 4.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 92.8, spin: 2400, ivb: 18.8, hb: 16.6, ext: 5.2, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2326, ivb: 22.2, hb: 4.6, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 75.6, spin: 2584, ivb: -5.7, hb: -7.3, ext: 5.0, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2256, ivb: 20.9, hb: 10.9, ext: 5.1, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 75.7, spin: 2758, ivb: -13.1, hb: -15.1, ext: 4.9, result: "Walk", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2352, ivb: 19.1, hb: 11.5, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 85.3, spin: 1526, ivb: 8.5, hb: 14.5, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2340, ivb: 21.6, hb: 13.1, ext: 5.2, result: "Foul Tip", batter: "Landen Johnson" },
      { pitchType: "Curveball", velo: 77.8, spin: 2725, ivb: -13.9, hb: -12.6, ext: 4.8, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Curveball", velo: 74.8, spin: 2660, ivb: -14.6, hb: -13.0, ext: 4.8, result: "Strikeout", batter: "Landen Johnson" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2308, ivb: 20.1, hb: 11.0, ext: 5.3, result: "Foul Tip", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2414, ivb: 18.3, hb: 12.1, ext: 5.5, result: "Ball", batter: "Camden Ross" },
      { pitchType: "", velo: 78.8, spin: 2786, ivb: -14.3, hb: -10.7, ext: 4.7, result: "Wild Pitch", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 78.8, spin: 2786, ivb: -14.3, hb: -10.7, ext: 4.7, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2308, ivb: 19.2, hb: 10.4, ext: 5.3, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 77.8, spin: 2674, ivb: -2.8, hb: -6.3, ext: 5.1, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2457, ivb: 19.4, hb: 13.2, ext: 5.2, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2266, ivb: 16.1, hb: 12.5, ext: 5.4, result: "Strikeout", batter: "Camden Ross" }
    ],
    2: [
      // Hugh Pinkney
      { pitchType: "Curveball", velo: 77.4, spin: 2672, ivb: -12.6, hb: -15.1, ext: 4.8, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2442, ivb: 16.0, hb: 6.5, ext: 5.4, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 85.6, spin: 1682, ivb: 10.9, hb: 15.6, ext: 5.5, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2385, ivb: 18.9, hb: 7.4, ext: 5.4, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2430, ivb: 18.0, hb: 12.5, ext: 5.2, result: "Lineout", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Sinker", velo: 92.3, spin: 2379, ivb: 19.3, hb: 15.8, ext: 5.5, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2382, ivb: 21.3, hb: 12.4, ext: 5.5, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 75.6, spin: 2611, ivb: -11.5, hb: -16.1, ext: 5.0, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2289, ivb: 17.2, hb: 12.7, ext: 5.3, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2327, ivb: 22.0, hb: 12.5, ext: 5.4, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 92.0, spin: 2414, ivb: 18.9, hb: 13.4, ext: 5.3, result: "Strikeout", batter: "Matt Evans" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2329, ivb: 19.3, hb: 11.7, ext: 5.1, result: "Swinging Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2319, ivb: 17.7, hb: 12.1, ext: 5.2, result: "Lineout", batter: "Caden Shapiro" }
    ],
    3: [
      // Merik Carter
      { pitchType: "Changeup", velo: 83.2, spin: 1652, ivb: 11.7, hb: 15.8, ext: 5.6, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2432, ivb: 21.9, hb: 11.8, ext: 5.1, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Curveball", velo: 76.9, spin: 2782, ivb: -17.2, hb: -13.3, ext: 4.8, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Curveball", velo: 76.5, spin: 2619, ivb: -13.4, hb: -10.2, ext: 5.0, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2363, ivb: 20.9, hb: 6.9, ext: 5.3, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2386, ivb: 20.9, hb: 10.8, ext: 5.4, result: "Strikeout", batter: "Merik Carter" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2409, ivb: 19.0, hb: 10.1, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 77.9, spin: 2685, ivb: -8.8, hb: -6.5, ext: 5.0, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2459, ivb: 18.6, hb: 8.9, ext: 5.3, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2411, ivb: 21.2, hb: 8.0, ext: 5.3, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 77.9, spin: 2855, ivb: -14.6, hb: -11.1, ext: 4.8, result: "Strikeout", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2315, ivb: 20.8, hb: 8.7, ext: 5.3, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 75.4, spin: 2723, ivb: -12.5, hb: -16.3, ext: 4.9, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 83.0, spin: 1597, ivb: 5.0, hb: 13.4, ext: 5.6, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 76.1, spin: 2740, ivb: -13.4, hb: -9.7, ext: 4.9, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2384, ivb: 17.8, hb: 4.6, ext: 5.4, result: "Strikeout", batter: "Harrison Didawick" }
    ]
  },
  "Luke Delongchamp": {
    4: [
      // Ryan Rivera
      { pitchType: "Changeup", velo: 87.3, spin: 2081, ivb: 9.5, hb: 20.4, ext: 5.4, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Changeup", velo: 85.7, spin: 2053, ivb: 14.7, hb: 17.1, ext: 5.4, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 76.5, spin: 2187, ivb: 4.0, hb: -1.6, ext: 5.2, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Changeup", velo: 87.1, spin: 2143, ivb: 16.2, hb: 15.7, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Changeup", velo: 86.7, spin: 2109, ivb: 14.0, hb: 18.0, ext: 5.5, result: "Double", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Changeup", velo: 80.9, spin: 1635, ivb: 10.7, hb: 15.0, ext: 5.4, result: "Double", batter: "Landen Johnson" },
      // Camden Ross
      { pitchType: "Curveball", velo: 76.4, spin: 2189, ivb: 3.2, hb: -2.7, ext: 5.1, result: "Bunt Pop Out", batter: "Camden Ross" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 86.7, spin: 2046, ivb: 13.1, hb: 17.5, ext: 5.4, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 80.5, spin: 1678, ivb: 12.1, hb: 14.0, ext: 5.3, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 80.7, spin: 1680, ivb: 10.8, hb: 13.8, ext: 5.4, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 75.8, spin: 2203, ivb: 2.0, hb: -5.9, ext: 5.4, result: "Strikeout", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Curveball", velo: 74.9, spin: 2211, ivb: 5.2, hb: -0.6, ext: 5.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 86.8, spin: 2107, ivb: 13.8, hb: 15.7, ext: 5.6, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 81.0, spin: 1645, ivb: 12.5, hb: 17.0, ext: 5.6, result: "Single", batter: "Matt Evans" },
      // Caden Shapiro
      { pitchType: "Curveball", velo: 78.6, spin: 2208, ivb: 3.6, hb: 0.0, ext: 5.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 87.5, spin: 2137, ivb: 13.7, hb: 18.0, ext: 5.4, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 86.5, spin: 2098, ivb: 14.8, hb: 17.7, ext: 5.6, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 86.8, spin: 2109, ivb: 12.7, hb: 18.8, ext: 5.5, result: "Swinging Strike", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 81.3, spin: 1578, ivb: 10.6, hb: 13.8, ext: 5.5, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 87.9, spin: 2148, ivb: 10.4, hb: 19.0, ext: 5.4, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 81.0, spin: 1633, ivb: 11.1, hb: 16.1, ext: 5.6, result: "Walk", batter: "Caden Shapiro" },
      // Merik Carter
      { pitchType: "Sinker", velo: 88.3, spin: 2119, ivb: 12.0, hb: 18.7, ext: 5.5, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Changeup", velo: 87.1, spin: 2120, ivb: 13.5, hb: 11.7, ext: 5.7, result: "Swinging Strike", batter: "Merik Carter" },
      { pitchType: "Changeup", velo: 87.5, spin: 2159, ivb: 10.2, hb: 17.9, ext: 5.4, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Slider", velo: 77.7, spin: 2145, ivb: 5.4, hb: -0.7, ext: 5.4, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Changeup", velo: 85.9, spin: 2094, ivb: 9.6, hb: 16.4, ext: 5.5, result: "Flyout", batter: "Merik Carter" }
    ],
    5: [
      // Javon Hernandez
      { pitchType: "Changeup", velo: 85.5, spin: 1899, ivb: 12.9, hb: 15.6, ext: 5.5, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 77.2, spin: 2114, ivb: 3.9, hb: 0.9, ext: 5.3, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Changeup", velo: 87.1, spin: 2212, ivb: 12.5, hb: 18.4, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Changeup", velo: 79.5, spin: 1666, ivb: 13.5, hb: 10.8, ext: 5.6, result: "Strikeout", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Curveball", velo: 76.8, spin: 2117, ivb: -2.2, hb: -4.1, ext: 5.3, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 87.1, spin: 2116, ivb: 13.5, hb: 15.4, ext: 5.4, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 86.8, spin: 2097, ivb: 12.2, hb: 17.7, ext: 5.6, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 81.4, spin: 1683, ivb: 11.4, hb: 15.0, ext: 5.5, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 81.7, spin: 1756, ivb: 15.4, hb: 13.9, ext: 5.5, result: "Groundout", batter: "Harrison Didawick" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 77.1, spin: 2191, ivb: 1.0, hb: -2.0, ext: 5.6, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 76.7, spin: 2367, ivb: -1.4, hb: -4.2, ext: 5.5, result: "Double", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Sinker", velo: 87.9, spin: 2072, ivb: 11.7, hb: 18.7, ext: 5.4, result: "Foul Tip", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 87.4, spin: 2101, ivb: 14.0, hb: 16.8, ext: 5.5, result: "Flyout", batter: "Landen Johnson" }
    ],
    6: [
      // Camden Ross
      { pitchType: "Curveball", velo: 77.4, spin: 2246, ivb: 2.9, hb: 0.1, ext: 5.3, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 78.9, spin: 2200, ivb: 2.8, hb: -0.2, ext: 5.4, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Changeup", velo: 86.2, spin: 2189, ivb: 13.7, hb: 16.4, ext: 5.5, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Changeup", velo: 87.5, spin: 2193, ivb: 13.9, hb: 21.6, ext: 5.6, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Changeup", velo: 82.2, spin: 1667, ivb: 12.3, hb: 12.7, ext: 5.7, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 78.9, spin: 2113, ivb: 2.4, hb: -0.6, ext: 5.4, result: "Strikeout", batter: "Camden Ross" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 87.4, spin: 2055, ivb: 14.5, hb: 14.8, ext: 5.6, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 87.3, spin: 2117, ivb: 15.6, hb: 14.0, ext: 5.6, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 77.5, spin: 2281, ivb: 0.7, hb: -2.6, ext: 5.5, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 81.6, spin: 1760, ivb: 7.9, hb: 15.6, ext: 5.3, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 77.6, spin: 2202, ivb: 2.2, hb: -1.4, ext: 5.4, result: "Strikeout", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Changeup", velo: 86.8, spin: 2139, ivb: 13.3, hb: 14.9, ext: 5.5, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 80.6, spin: 1712, ivb: 8.0, hb: 14.4, ext: 5.6, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 80.4, spin: 1633, ivb: 14.7, hb: 10.5, ext: 5.8, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 87.3, spin: 1997, ivb: 10.8, hb: 16.1, ext: 5.6, result: "Groundout", batter: "Matt Evans" }
    ],
    7: [
      // Caden Shapiro
      { pitchType: "Changeup", velo: 85.5, spin: 1852, ivb: 9.3, hb: 17.9, ext: 5.4, result: "Single", batter: "Caden Shapiro" },
      // Merik Carter
      { pitchType: "Changeup", velo: 84.7, spin: 1961, ivb: 8.2, hb: 20.4, ext: 5.5, result: "Single", batter: "Merik Carter" },
      // Javon Hernandez
      { pitchType: "Curveball", velo: 77.4, spin: 2109, ivb: 4.1, hb: -1.6, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 77.8, spin: 2019, ivb: 2.5, hb: 1.2, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 77.1, spin: 2031, ivb: 2.4, hb: 0.3, ext: 5.3, result: "Forceout", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Curveball", velo: 76.9, spin: 2151, ivb: 1.8, hb: -0.7, ext: 5.4, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 85.9, spin: 2090, ivb: 10.7, hb: 18.8, ext: 5.6, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 81.5, spin: 1626, ivb: 12.0, hb: 12.4, ext: 5.3, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 76.3, spin: 2172, ivb: 1.7, hb: -1.9, ext: 5.1, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 80.4, spin: 1721, ivb: 15.1, hb: 13.3, ext: 5.4, result: "Groundout", batter: "Harrison Didawick" }
    ]
  },
  "Andrew Ronne": {
    7: [
      // Ryan Rivera
      { pitchType: "Slider", velo: 80.9, spin: 2638, ivb: -0.1, hb: -19.0, ext: 4.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2263, ivb: 16.4, hb: 8.7, ext: 5.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 81.6, spin: 2718, ivb: -5.4, hb: -19.7, ext: 5.1, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 81.6, spin: 2659, ivb: -4.2, hb: -19.1, ext: 4.9, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "", velo: 95.0, spin: 2219, ivb: 12.8, hb: 8.6, ext: 5.8, result: "Wild Pitch", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 95.0, spin: 2219, ivb: 12.8, hb: 8.6, ext: 5.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 81.8, spin: 2709, ivb: -4.1, hb: -19.9, ext: 5.0, result: "Walk", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "", velo: 92.3, spin: 2220, ivb: 12.7, hb: 7.0, ext: 5.8, result: "Stolen Base 2B", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2220, ivb: 12.7, hb: 7.0, ext: 5.8, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "", velo: 91.7, spin: 2127, ivb: 12.2, hb: 4.3, ext: 5.5, result: "Wild Pitch", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2127, ivb: 12.2, hb: 4.3, ext: 5.5, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Curveball", velo: 81.3, spin: 2712, ivb: -4.8, hb: -15.9, ext: 5.1, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 81.7, spin: 2641, ivb: -4.5, hb: -22.1, ext: 4.9, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 82.2, spin: 2668, ivb: -1.6, hb: -17.3, ext: 5.5, result: "Flyout", batter: "Landen Johnson" }
    ],
    8: [
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2072, ivb: 15.5, hb: 7.4, ext: 6.0, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2157, ivb: 10.4, hb: 4.6, ext: 5.8, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2279, ivb: 15.3, hb: 10.2, ext: 5.8, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2238, ivb: 16.7, hb: 8.1, ext: 5.8, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 84.9, spin: 2682, ivb: 0.4, hb: -13.0, ext: 5.4, result: "Strikeout", batter: "Dylan LaPointe" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2301, ivb: 10.8, hb: 2.7, ext: 5.5, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Sinker", velo: 89.9, spin: 1726, ivb: 11.3, hb: 17.3, ext: 5.6, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 83.8, spin: 2647, ivb: -1.2, hb: -15.3, ext: 5.3, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2123, ivb: 13.4, hb: 6.6, ext: 5.7, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2233, ivb: 15.1, hb: 5.9, ext: 5.8, result: "Walk", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2186, ivb: 14.4, hb: 8.1, ext: 5.8, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2114, ivb: 13.2, hb: 4.7, ext: 5.9, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 84.9, spin: 2626, ivb: 4.5, hb: -15.5, ext: 5.4, result: "Strikeout", batter: "Matt Evans" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2199, ivb: 12.7, hb: 9.4, ext: 5.8, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2230, ivb: 13.1, hb: 5.6, ext: 5.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 89.4, spin: 1655, ivb: 5.5, hb: 18.2, ext: 5.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2219, ivb: 15.2, hb: 9.5, ext: 5.9, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.1, spin: 2600, ivb: -0.4, hb: -14.7, ext: 5.4, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.3, spin: 2742, ivb: -2.4, hb: -20.3, ext: 5.5, result: "Walk", batter: "Caden Shapiro" },
      // Merik Carter
      { pitchType: "Sinker", velo: 92.3, spin: 2271, ivb: 12.7, hb: 10.9, ext: 5.8, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2178, ivb: 14.6, hb: 7.0, ext: 5.4, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Slider", velo: 82.3, spin: 2538, ivb: -0.4, hb: -15.8, ext: 5.9, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2237, ivb: 12.3, hb: 3.8, ext: 5.7, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Slider", velo: 83.9, spin: 2606, ivb: 3.1, hb: -13.9, ext: 5.6, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2157, ivb: 14.7, hb: 7.1, ext: 5.8, result: "Pop Out", batter: "Merik Carter" }
    ]
  },
  "JJ Almeda": {
    9: [
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 88.1, spin: 2295, ivb: 17.0, hb: 3.9, ext: 5.4, result: "Foul Bunt", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 76.3, spin: 2431, ivb: -3.4, hb: -5.5, ext: 4.9, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2265, ivb: 18.6, hb: 5.1, ext: 5.1, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 78.4, spin: 2494, ivb: 0.3, hb: -4.3, ext: 5.0, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 79.9, spin: 2468, ivb: 0.2, hb: -6.9, ext: 4.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 78.7, spin: 2549, ivb: -1.8, hb: -10.7, ext: 5.1, result: "Groundout", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Curveball", velo: 74.7, spin: 2365, ivb: -4.2, hb: -12.1, ext: 5.0, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 88.3, spin: 2285, ivb: 13.0, hb: 15.7, ext: 5.4, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 76.4, spin: 2409, ivb: -10.4, hb: -13.2, ext: 5.1, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 76.2, spin: 2360, ivb: -0.9, hb: -14.5, ext: 4.9, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 88.4, spin: 2337, ivb: 21.3, hb: 5.7, ext: 5.3, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 78.4, spin: 2526, ivb: 0.8, hb: -2.6, ext: 4.8, result: "Walk", batter: "Harrison Didawick" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 2284, ivb: 21.3, hb: 7.4, ext: 5.0, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 77.6, spin: 2411, ivb: -0.7, hb: -5.3, ext: 4.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "", velo: 78.6, spin: 2507, ivb: 0.7, hb: -3.7, ext: 4.6, result: "Stolen Base 2B", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 78.6, spin: 2507, ivb: 0.7, hb: -3.7, ext: 4.6, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 87.0, spin: 2323, ivb: 18.5, hb: 5.9, ext: 5.2, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 77.6, spin: 2573, ivb: -1.0, hb: -5.3, ext: 4.7, result: "Walk", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 87.0, spin: 2196, ivb: 18.0, hb: 9.8, ext: 5.1, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2322, ivb: 19.6, hb: 7.7, ext: 5.3, result: "Hit By Pitch", batter: "Landen Johnson" },
      // Dylan LaPointe
      { pitchType: "Curveball", velo: 78.3, spin: 2500, ivb: -0.3, hb: -7.8, ext: 4.6, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 78.8, spin: 2594, ivb: -0.7, hb: -5.3, ext: 5.1, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 78.1, spin: 2508, ivb: -1.3, hb: -5.6, ext: 4.9, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 79.5, spin: 2618, ivb: -4.3, hb: -5.3, ext: 4.8, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 87.9, spin: 2335, ivb: 17.4, hb: 7.1, ext: 5.3, result: "Strikeout", batter: "Dylan LaPointe" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 88.3, spin: 2381, ivb: 19.5, hb: 5.5, ext: 5.1, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 88.1, spin: 2323, ivb: 16.4, hb: 8.1, ext: 5.4, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 79.3, spin: 2559, ivb: -0.1, hb: -3.5, ext: 4.7, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 76.6, spin: 2419, ivb: 0.4, hb: -7.3, ext: 4.8, result: "Strikeout", batter: "Hugh Pinkney" }
    ]
  }
};

export default pitchersData;
