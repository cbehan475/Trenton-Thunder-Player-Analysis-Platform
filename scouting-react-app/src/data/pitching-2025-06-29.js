const pitchersData = {
  "Joe Ariola": {
    1: [
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2288, ivb: 20.4, hb: -3.7, ext: 4.9, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2374, ivb: 21.3, hb: -4.5, ext: 4.8, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2316, ivb: 20.7, hb: -10.5, ext: 4.6, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 82.2, spin: 1193, ivb: 1.5, hb: -6.8, ext: 4.6, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 80.4, spin: 2685, ivb: -17.5, hb: 6.6, ext: 5.0, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 80.3, spin: 2728, ivb: -15.2, hb: 7.8, ext: 4.8, result: "Strikeout", batter: "Matt Evans" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2404, ivb: 22.3, hb: -6.5, ext: 4.8, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 78.5, spin: 2605, ivb: -16.9, hb: 10.9, ext: 4.6, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2272, ivb: 22.8, hb: -5.1, ext: 4.7, result: "Swinging Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2349, ivb: 21.7, hb: -11.7, ext: 4.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 80.8, spin: 2655, ivb: -16.6, hb: 5.7, ext: 4.5, result: "Groundout", batter: "Ryan Rivera" },
      // Harrison Didawick
      { pitchType: "Slider", velo: 86.8, spin: 2305, ivb: 9.0, hb: 4.4, ext: 5.1, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2362, ivb: 24.8, hb: -4.8, ext: 4.9, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2346, ivb: 26.3, hb: -4.2, ext: 4.8, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2194, ivb: 21.3, hb: -5.5, ext: 5.0, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2103, ivb: 21.1, hb: -5.9, ext: 4.8, result: "Strikeout", batter: "Harrison Didawick" }
    ],
    2: [
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2237, ivb: 22.2, hb: -6.4, ext: 4.7, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2271, ivb: 24.0, hb: -5.8, ext: 4.6, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 80.6, spin: 2645, ivb: -13.5, hb: 1.6, ext: 4.6, result: "Strikeout", batter: "Dylan LaPointe" },
      // Dan Tauken
      { pitchType: "Curveball", velo: 80.2, spin: 2553, ivb: -13.9, hb: 4.4, ext: 4.5, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "Slider", velo: 81.7, spin: 1055, ivb: 2.9, hb: -6.5, ext: 4.7, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2351, ivb: 25.0, hb: -7.1, ext: 4.8, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2219, ivb: 24.7, hb: -8.9, ext: 4.8, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 79.8, spin: 2575, ivb: -17.2, hb: 1.8, ext: 4.9, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2217, ivb: 24.0, hb: -10.7, ext: 4.6, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 79.7, spin: 2620, ivb: -15.8, hb: 6.0, ext: 4.7, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2271, ivb: 23.9, hb: -6.3, ext: 4.8, result: "Single", batter: "Dan Tauken" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2291, ivb: 23.0, hb: -5.9, ext: 4.7, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2253, ivb: 22.3, hb: -7.1, ext: 4.7, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Changeup", velo: 81.5, spin: 992, ivb: 1.2, hb: -8.0, ext: 4.8, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Changeup", velo: 82.7, spin: 1164, ivb: 4.8, hb: -13.3, ext: 4.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2222, ivb: 22.7, hb: -7.8, ext: 4.8, result: "Flyout", batter: "Camden Ross" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2201, ivb: 21.7, hb: -9.8, ext: 4.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2216, ivb: 21.4, hb: -7.4, ext: 4.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2187, ivb: 21.9, hb: -9.7, ext: 4.8, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2320, ivb: 23.5, hb: -7.5, ext: 4.7, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2269, ivb: 25.1, hb: -6.8, ext: 4.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 81.0, spin: 2623, ivb: -15.3, hb: 2.1, ext: 4.6, result: "Walk", batter: "Cole Pladson" },
      // Merik Carter
      { pitchType: "Sinker", velo: 90.8, spin: 2223, ivb: 22.2, hb: -11.6, ext: 4.7, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Curveball", velo: 80.5, spin: 2665, ivb: -16.8, hb: 3.0, ext: 4.8, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2214, ivb: 24.2, hb: -7.5, ext: 4.7, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Slider", velo: 87.3, spin: 2231, ivb: 9.5, hb: -3.4, ext: 5.0, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2325, ivb: 24.3, hb: -5.1, ext: 4.8, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2242, ivb: 22.8, hb: -10.8, ext: 4.7, result: "Lineout", batter: "Merik Carter" }
    ],
    3: [
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2242, ivb: 20.2, hb: -7.9, ext: 4.5, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 2193, ivb: 11.5, hb: 0.9, ext: 5.1, result: "Lineout", batter: "Caden Shapiro" },
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2285, ivb: 22.3, hb: -7.3, ext: 4.7, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 80.0, spin: 2685, ivb: -13.2, hb: 6.3, ext: 4.6, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2291, ivb: 22.4, hb: -6.6, ext: 4.7, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 80.6, spin: 1060, ivb: 8.9, hb: -7.5, ext: 4.7, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 80.5, spin: 2533, ivb: -13.7, hb: 5.1, ext: 4.7, result: "Groundout", batter: "Matt Evans" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 79.3, spin: 2516, ivb: -15.3, hb: 0.1, ext: 4.6, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 78.7, spin: 2552, ivb: -15.4, hb: 7.0, ext: 4.8, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 80.8, spin: 2616, ivb: -12.8, hb: 2.0, ext: 4.6, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 80.5, spin: 1126, ivb: 0.7, hb: -5.7, ext: 4.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 79.8, spin: 2577, ivb: -14.1, hb: 4.2, ext: 4.6, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2240, ivb: 19.7, hb: -7.5, ext: 4.7, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2365, ivb: 23.4, hb: -8.6, ext: 4.7, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2203, ivb: 11.3, hb: -0.3, ext: 5.1, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 80.0, spin: 2543, ivb: -10.6, hb: 3.7, ext: 4.5, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 92.0, spin: 2363, ivb: 22.4, hb: -9.6, ext: 4.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 80.7, spin: 2584, ivb: -13.4, hb: 4.5, ext: 4.6, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2243, ivb: 19.4, hb: -9.0, ext: 4.9, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 89.6, spin: 2167, ivb: 21.5, hb: -13.9, ext: 4.8, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2185, ivb: 21.9, hb: -9.8, ext: 4.8, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2147, ivb: 20.3, hb: -6.5, ext: 4.8, result: "Double", batter: "Ryan Rivera" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2230, ivb: 24.4, hb: -9.2, ext: 4.7, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 85.6, spin: 2138, ivb: 8.9, hb: 4.3, ext: 5.1, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2181, ivb: 18.7, hb: -9.8, ext: 5.0, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 87.0, spin: 2166, ivb: 8.9, hb: 1.2, ext: 5.1, result: "Groundout", batter: "Harrison Didawick" }
    ]
  },
  "John Carver": {
    4: [
      // Dylan LaPointe
      { pitchType: "Sinker", velo: 91.9, spin: 2317, ivb: 17.9, hb: 13.6, ext: 5.2, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 83.7, spin: 2522, ivb: 3.3, hb: -3.3, ext: 5.0, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2277, ivb: 19.3, hb: 5.0, ext: 5.3, result: "Strikeout", batter: "Dylan LaPointe" },
      // Dan Tauken
      { pitchType: "Changeup", velo: 83.6, spin: 1422, ivb: 5.0, hb: 14.1, ext: 5.3, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 82.1, spin: 1634, ivb: 0.8, hb: 17.9, ext: 5.3, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 84.0, spin: 1543, ivb: 2.6, hb: 15.0, ext: 5.2, result: "Swinging Strike", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2350, ivb: 18.9, hb: 7.7, ext: 5.2, result: "Strikeout", batter: "Dan Tauken" },
      // Camden Ross
      { pitchType: "Slider", velo: 84.5, spin: 2531, ivb: 4.2, hb: -1.2, ext: 5.1, result: "Swinging Strike", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 83.5, spin: 2582, ivb: 0.0, hb: -4.6, ext: 5.0, result: "Groundout", batter: "Camden Ross" }
    ]
  },
  "Paulo Noris": {
    5: [
      // Cole Pladson
      { pitchType: "Curveball", velo: 76.7, spin: 1871, ivb: 2.6, hb: 18.3, ext: 5.5, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Cutter", velo: 85.7, spin: 2054, ivb: 18.1, hb: 3.1, ext: 5.5, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Cutter", velo: 85.0, spin: 2109, ivb: 17.9, hb: 4.7, ext: 5.6, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Cutter", velo: 85.2, spin: 2131, ivb: 17.1, hb: 4.9, ext: 5.8, result: "Walk", batter: "Cole Pladson" },
      // Merik Carter
      { pitchType: "Curveball", velo: 76.5, spin: 1870, ivb: 3.7, hb: 15.2, ext: 5.5, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Changeup", velo: 76.9, spin: 1945, ivb: 3.1, hb: 16.7, ext: 5.6, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 84.7, spin: 1927, ivb: 16.6, hb: 5.6, ext: 5.7, result: "Called Strike", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 85.2, spin: 1786, ivb: 14.8, hb: 3.8, ext: 5.8, result: "Foul", batter: "Merik Carter" },
      { pitchType: "Changeup", velo: 77.5, spin: 2103, ivb: 11.7, hb: 16.1, ext: 5.3, result: "Ball", batter: "Merik Carter" },
      { pitchType: "Cutter", velo: 85.1, spin: 1999, ivb: 17.4, hb: 1.8, ext: 5.6, result: "Flyout", batter: "Merik Carter" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 86.3, spin: 2010, ivb: 18.7, hb: 8.8, ext: 5.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Cutter", velo: 85.5, spin: 1905, ivb: 15.0, hb: 3.8, ext: 5.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 85.6, spin: 2205, ivb: 19.6, hb: 6.2, ext: 5.7, result: "Pop Out", batter: "Caden Shapiro" },
      // Matt Evans
      { pitchType: "Cutter", velo: 84.7, spin: 1935, ivb: 15.1, hb: 3.6, ext: 5.7, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 84.9, spin: 2066, ivb: 19.9, hb: 6.8, ext: 5.7, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Cutter", velo: 85.0, spin: 2071, ivb: 17.7, hb: 5.5, ext: 5.5, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 76.9, spin: 1974, ivb: 3.9, hb: 16.4, ext: 5.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 75.5, spin: 1745, ivb: 4.9, hb: -4.5, ext: 5.0, result: "Pop Out", batter: "Matt Evans" }
    ],
    6: [
      // Ryan Rivera
      { pitchType: "Cutter", velo: 84.8, spin: 2080, ivb: 18.2, hb: 4.3, ext: 5.8, result: "Single", batter: "Ryan Rivera" },
      // Harrison Didawick
      { pitchType: "Curveball", velo: 77.7, spin: 1823, ivb: 5.2, hb: -0.2, ext: 5.0, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Cutter", velo: 84.8, spin: 2096, ivb: 19.2, hb: 5.0, ext: 5.8, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 76.5, spin: 1879, ivb: 5.8, hb: -1.5, ext: 5.3, result: "Single", batter: "Harrison Didawick" },
      // Landen Johnson
      { pitchType: "Cutter", velo: 84.5, spin: 2031, ivb: 18.6, hb: 4.5, ext: 5.7, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Curveball", velo: 76.9, spin: 2052, ivb: 1.6, hb: 16.3, ext: 5.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 84.8, spin: 2103, ivb: 18.4, hb: 5.9, ext: 5.8, result: "Pop Out", batter: "Landen Johnson" },
      // Dan Tauken
      { pitchType: "Changeup", velo: 78.3, spin: 2115, ivb: 4.9, hb: 18.0, ext: 5.3, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 84.5, spin: 2188, ivb: 18.5, hb: 6.7, ext: 5.6, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 77.3, spin: 2009, ivb: 5.1, hb: 15.5, ext: 5.4, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 75.7, spin: 2104, ivb: 1.4, hb: 15.5, ext: 5.4, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 77.4, spin: 1954, ivb: 2.6, hb: -3.2, ext: 5.0, result: "Walk", batter: "Dan Tauken" }
    ]
  },
  "Andrew Ronne": {
    6: [
      // Camden Ross
      { pitchType: "Slider", velo: 83.3, spin: 2558, ivb: -3.4, hb: -17.5, ext: 5.1, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 92.7, spin: 2386, ivb: 11.6, hb: 11.6, ext: 5.5, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2238, ivb: 11.2, hb: 8.6, ext: 5.8, result: "Swinging Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2277, ivb: 11.7, hb: 6.7, ext: 5.6, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 81.8, spin: 2543, ivb: -7.6, hb: -13.9, ext: 5.1, result: "Strikeout", batter: "Camden Ross" },
      // Cole Pladson
      { pitchType: "Slider", velo: 82.7, spin: 2581, ivb: -3.6, hb: -8.8, ext: 5.3, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2266, ivb: 15.9, hb: 7.6, ext: 5.5, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Slider", velo: 82.8, spin: 2674, ivb: -4.6, hb: -10.7, ext: 5.4, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2330, ivb: 15.9, hb: 9.6, ext: 5.7, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2226, ivb: 11.9, hb: 5.3, ext: 5.5, result: "Walk", batter: "Cole Pladson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2144, ivb: 14.0, hb: 5.7, ext: 5.9, result: "Pop Out", batter: "Quinn Bentley" }
    ],
    7: [
      // Caden Shapiro
      { pitchType: "Sinker", velo: 92.7, spin: 2208, ivb: 12.4, hb: 13.3, ext: 5.8, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 87.2, spin: 1994, ivb: 4.5, hb: 21.2, ext: 5.4, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Curveball", velo: 76.6, spin: 1455, ivb: 9.8, hb: 8.7, ext: 5.8, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.2, spin: 2589, ivb: -0.1, hb: -10.0, ext: 5.5, result: "Hit By Pitch", batter: "Caden Shapiro" },
      // Matt Evans
      { pitchType: "Slider", velo: 82.5, spin: 2534, ivb: -4.8, hb: -17.5, ext: 5.2, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2142, ivb: 12.7, hb: 5.5, ext: 5.8, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2207, ivb: 13.7, hb: 10.1, ext: 5.8, result: "Grounded Into DP", batter: "Matt Evans" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2269, ivb: 14.4, hb: 8.4, ext: 5.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2274, ivb: 13.8, hb: 7.4, ext: 5.7, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2309, ivb: 15.1, hb: 9.5, ext: 5.6, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 84.9, spin: 2755, ivb: -3.9, hb: -17.2, ext: 5.6, result: "Strikeout", batter: "Ryan Rivera" }
    ]
  },
  "Aidan Weaver": {
    8: [
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 1993, ivb: 12.1, hb: 11.0, ext: 6.5, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2062, ivb: 18.6, hb: 7.8, ext: 6.1, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 1912, ivb: 10.3, hb: 10.0, ext: 6.4, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 1931, ivb: 13.9, hb: 12.8, ext: 6.5, result: "Flyout", batter: "Javon Hernandez" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 1964, ivb: 12.2, hb: 11.7, ext: 6.6, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2179, ivb: 16.8, hb: 9.3, ext: 6.1, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.7, spin: 2072, ivb: 0.2, hb: -0.5, ext: 5.5, result: "Groundout", batter: "Landen Johnson" },
      // Dan Tauken
      { pitchType: "Changeup", velo: 79.1, spin: 1729, ivb: 3.6, hb: 15.6, ext: 6.1, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2181, ivb: 16.0, hb: 8.6, ext: 6.2, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2108, ivb: 14.9, hb: 9.6, ext: 6.4, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Slider", velo: 85.0, spin: 2210, ivb: 1.3, hb: -3.5, ext: 5.7, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2136, ivb: 15.9, hb: 10.5, ext: 6.1, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Slider", velo: 81.8, spin: 2165, ivb: -3.3, hb: -0.7, ext: 5.8, result: "Strikeout", batter: "Dan Tauken" }
    ],
    9: [
      // Camden Ross
      { pitchType: "Slider", velo: 83.3, spin: 2313, ivb: 0.8, hb: -1.9, ext: 5.6, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2092, ivb: 16.5, hb: 6.5, ext: 6.2, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2044, ivb: 14.7, hb: 6.3, ext: 6.2, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2196, ivb: 13.6, hb: 10.1, ext: 6.5, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 84.3, spin: 2134, ivb: -1.0, hb: -2.2, ext: 5.5, result: "Single", batter: "Camden Ross" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2131, ivb: 11.3, hb: 9.0, ext: 6.5, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 1991, ivb: 9.0, hb: 11.3, ext: 6.2, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2103, ivb: 12.1, hb: 9.0, ext: 6.3, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2035, ivb: 11.6, hb: 10.7, ext: 6.2, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 1993, ivb: 12.8, hb: 5.7, ext: 6.1, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2180, ivb: 12.8, hb: 9.1, ext: 6.3, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 80.8, spin: 1799, ivb: -0.1, hb: 13.7, ext: 5.7, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 79.6, spin: 1682, ivb: 2.5, hb: 16.7, ext: 5.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 1980, ivb: 15.2, hb: 4.8, ext: 6.2, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 1922, ivb: 10.5, hb: 9.5, ext: 6.3, result: "Flyout", batter: "Cole Pladson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 1991, ivb: 9.2, hb: 11.0, ext: 6.3, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "", velo: 93.7, spin: 2009, ivb: 8.5, hb: 14.7, ext: 6.0, result: "Wild Pitch", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2009, ivb: 8.5, hb: 14.7, ext: 6.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 1969, ivb: 16.3, hb: 9.8, ext: 6.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2053, ivb: 12.5, hb: 12.4, ext: 6.1, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2047, ivb: 11.4, hb: 11.4, ext: 6.1, result: "Walk", batter: "Quinn Bentley" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2017, ivb: 10.9, hb: 10.2, ext: 6.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2017, ivb: 7.3, hb: 6.5, ext: 6.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2077, ivb: 9.5, hb: 13.6, ext: 6.4, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2141, ivb: 14.7, hb: 8.7, ext: 6.3, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 79.3, spin: 1792, ivb: -0.3, hb: 13.3, ext: 6.0, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2077, ivb: 20.0, hb: 2.5, ext: 6.1, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2038, ivb: 13.3, hb: 8.2, ext: 6.1, result: "Strikeout", batter: "Caden Shapiro" }
    ]
  },
  "Cooper McGrath": {
    9: [
      // Matt Evans
      { pitchType: "Sinker", velo: 91.6, spin: 2490, ivb: 10.5, hb: 9.5, ext: 5.8, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 91.6, spin: 2508, ivb: 10.5, hb: 9.6, ext: 6.0, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 84.5, spin: 2395, ivb: -0.2, hb: -3.2, ext: 5.9, result: "Strikeout", batter: "Matt Evans" }
    ]
  }
};

export default pitchersData;
