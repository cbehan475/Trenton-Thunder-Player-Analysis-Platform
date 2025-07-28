const pitchersData = {
  "Jude Abbadessa": {
    1: [
      // Ryan Rivera
      { pitchType: "Sinker", velo: 91.4, spin: 1912, ivb: 6.2, hb: 15.1, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 91.9, spin: 1946, ivb: 8.1, hb: 16.3, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 91.3, spin: 2010, ivb: 8.7, hb: 11.1, ext: 5.5, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 91.1, spin: 1892, ivb: 10.6, hb: 14.6, ext: 5.3, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 91.6, spin: 1979, ivb: 9.1, hb: 9.6, ext: 5.2, result: "Single", batter: "Ryan Rivera" },
      // Matt Evans
      { pitchType: "Sinker", velo: 92.2, spin: 2036, ivb: 12.3, hb: 14.4, ext: 5.1, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 83.6, spin: 2272, ivb: 1.7, hb: -2.8, ext: 4.7, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 82.9, spin: 2225, ivb: 3.5, hb: -3.6, ext: 4.8, result: "Forceout", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 86.1, spin: 1896, ivb: 3.9, hb: 16.4, ext: 5.7, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 83.0, spin: 2307, ivb: 1.4, hb: -4.0, ext: 5.0, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 86.5, spin: 1982, ivb: 3.2, hb: 12.0, ext: 5.7, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 82.6, spin: 2121, ivb: 9.6, hb: -4.4, ext: 4.6, result: "Ball In Dirt", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 1972, ivb: 12.5, hb: 6.4, ext: 5.2, result: "Ball In Dirt", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 85.5, spin: 1863, ivb: 8.1, hb: 14.0, ext: 5.6, result: "Walk", batter: "Hugh Pinkney" },
      // Harrison Didawick
      { pitchType: "Sinker", velo: 92.4, spin: 2044, ivb: 7.1, hb: 15.2, ext: 5.2, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 92.2, spin: 2092, ivb: 7.9, hb: 15.3, ext: 5.6, result: "Ball In Dirt", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 93.0, spin: 2085, ivb: 10.0, hb: 14.7, ext: 5.2, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 92.3, spin: 2025, ivb: 12.2, hb: 11.3, ext: 5.3, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 82.2, spin: 2263, ivb: 4.8, hb: -1.2, ext: 4.8, result: "Walk", batter: "Harrison Didawick" },
      // Carmelo Musacchia
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2026, ivb: 13.2, hb: 8.1, ext: 5.2, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Sinker", velo: 92.6, spin: 2000, ivb: 10.5, hb: 14.5, ext: 5.2, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2032, ivb: 15.4, hb: 9.9, ext: 5.1, result: "Foul", batter: "Carmelo Musacchia" },
      { pitchType: "Sinker", velo: 92.4, spin: 2033, ivb: 11.1, hb: 14.2, ext: 5.3, result: "Called Strike", batter: "Carmelo Musacchia" },
      { pitchType: "Sinker", velo: 93.0, spin: 2034, ivb: 12.1, hb: 14.0, ext: 5.3, result: "Single", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Slider", velo: 83.1, spin: 2257, ivb: 0.6, hb: -3.3, ext: 4.9, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 92.1, spin: 2012, ivb: 7.0, hb: 16.8, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 91.4, spin: 2082, ivb: 11.0, hb: 14.8, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 92.3, spin: 2162, ivb: 9.9, hb: 17.9, ext: 5.4, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 93.1, spin: 2129, ivb: 12.5, hb: 12.5, ext: 5.6, result: "Sac Fly", batter: "Javon Hernandez" },
      // Camden Ross
      { pitchType: "Slider", velo: 83.5, spin: 2244, ivb: -3.0, hb: -3.4, ext: 4.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 83.0, spin: 2223, ivb: 3.5, hb: -6.7, ext: 4.7, result: "Swinging Strike", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 92.4, spin: 2162, ivb: 11.5, hb: 16.4, ext: 5.1, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 83.9, spin: 2267, ivb: -2.5, hb: -3.3, ext: 4.8, result: "Ball In Dirt", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 82.8, spin: 2245, ivb: -1.4, hb: -5.4, ext: 4.7, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 92.2, spin: 2228, ivb: 11.4, hb: 16.7, ext: 5.4, result: "Flyout", batter: "Camden Ross" }
    ],
    2: [
      // Caden Shapiro
      { pitchType: "Sinker", velo: 91.5, spin: 2073, ivb: 13.1, hb: 14.8, ext: 5.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 92.9, spin: 2150, ivb: 9.9, hb: 18.1, ext: 5.2, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 85.9, spin: 2010, ivb: 7.6, hb: 12.4, ext: 5.5, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 81.1, spin: 2179, ivb: 7.5, hb: -6.2, ext: 4.6, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 82.8, spin: 2139, ivb: 4.7, hb: 0.0, ext: 4.6, result: "Pop Out", batter: "Caden Shapiro" },
      // Landen Johnson
      { pitchType: "Changeup", velo: 85.9, spin: 1738, ivb: 6.7, hb: 11.9, ext: 5.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 92.3, spin: 1995, ivb: 9.6, hb: 16.0, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 91.4, spin: 1962, ivb: 11.5, hb: 13.9, ext: 5.5, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.5, spin: 2094, ivb: 1.9, hb: -2.2, ext: 5.0, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.1, spin: 2132, ivb: 3.8, hb: 0.5, ext: 4.8, result: "Strikeout", batter: "Landen Johnson" },
      // Ryan Rivera
      { pitchType: "Slider", velo: 82.1, spin: 2190, ivb: 2.4, hb: -5.0, ext: 4.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 82.6, spin: 2180, ivb: 5.1, hb: -0.7, ext: 4.7, result: "Swinging Strike (Blocked)", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 82.5, spin: 2199, ivb: 2.0, hb: -5.5, ext: 5.0, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 81.8, spin: 2144, ivb: 1.7, hb: -4.2, ext: 4.9, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 93.3, spin: 2037, ivb: 15.3, hb: 12.6, ext: 5.2, result: "Strikeout", batter: "Ryan Rivera" }
    ],
    3: [
      // Matt Evans
      { pitchType: "Sinker", velo: 91.6, spin: 2039, ivb: 9.4, hb: 15.2, ext: 5.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 91.1, spin: 2022, ivb: 8.5, hb: 15.9, ext: 5.4, result: "Single", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Sinker", velo: 91.1, spin: 2060, ivb: 12.6, hb: 12.6, ext: 5.4, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Sinker", velo: 90.2, spin: 2112, ivb: 6.8, hb: 15.7, ext: 5.4, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 81.5, spin: 2337, ivb: 5.8, hb: -4.4, ext: 4.8, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 82.5, spin: 2204, ivb: 0.2, hb: -3.2, ext: 5.0, result: "Ball In Dirt", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 81.9, spin: 2243, ivb: 2.2, hb: -4.2, ext: 4.7, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Sinker", velo: 91.3, spin: 2049, ivb: 10.5, hb: 15.4, ext: 5.4, result: "Strikeout", batter: "Hugh Pinkney" },
      // Harrison Didawick
      { pitchType: "Sinker", velo: 91.5, spin: 1976, ivb: 10.4, hb: 14.9, ext: 5.5, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 85.0, spin: 1998, ivb: 6.7, hb: 16.9, ext: 5.7, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 81.2, spin: 2331, ivb: 2.9, hb: -8.1, ext: 4.7, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 92.1, spin: 2085, ivb: 5.7, hb: 17.3, ext: 5.4, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 81.2, spin: 2222, ivb: 5.7, hb: -7.7, ext: 4.7, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 81.7, spin: 2288, ivb: 5.6, hb: -5.7, ext: 4.8, result: "Strikeout", batter: "Harrison Didawick" },
      // Carmelo Musacchia
      { pitchType: "Sinker", velo: 91.9, spin: 2044, ivb: 8.7, hb: 15.6, ext: 5.2, result: "Missed Bunt", batter: "Carmelo Musacchia" },
      { pitchType: "Slider", velo: 81.6, spin: 2110, ivb: 6.9, hb: -1.7, ext: 4.8, result: "Foul", batter: "Carmelo Musacchia" },
      { pitchType: "Slider", velo: 83.1, spin: 2149, ivb: 1.3, hb: -2.4, ext: 5.1, result: "Flyout", batter: "Carmelo Musacchia" }
    ]
  },
  "Caden Spivey": {
    4: [
      // Javon Hernandez
      { pitchType: "Sinker", velo: 92.2, spin: 2180, ivb: 11.3, hb: 15.0, ext: 5.6, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 92.1, spin: 2188, ivb: 11.2, hb: 12.0, ext: 5.9, result: "Flyout", batter: "Javon Hernandez" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2247, ivb: 18.0, hb: 4.6, ext: 5.8, result: "Swinging Strike", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 79.2, spin: 2589, ivb: -5.8, hb: -9.7, ext: 5.0, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2220, ivb: 13.8, hb: 8.9, ext: 5.8, result: "Strikeout", batter: "Camden Ross" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2114, ivb: 12.6, hb: 10.5, ext: 6.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2263, ivb: 15.8, hb: 11.3, ext: 5.9, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2288, ivb: 16.1, hb: 10.6, ext: 5.8, result: "Single", batter: "Caden Shapiro" },
      // Landen Johnson
      { pitchType: "Curveball", velo: 79.5, spin: 2506, ivb: -0.5, hb: -9.6, ext: 5.3, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 84.3, spin: 2588, ivb: 2.0, hb: -1.9, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2303, ivb: 16.3, hb: 5.8, ext: 6.0, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2439, ivb: 17.0, hb: 3.6, ext: 6.0, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2298, ivb: 15.8, hb: 6.9, ext: 6.1, result: "Walk", batter: "Landen Johnson" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 76.8, spin: 2524, ivb: -2.5, hb: -12.7, ext: 4.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 78.3, spin: 2583, ivb: -3.7, hb: -8.1, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2139, ivb: 13.2, hb: 10.2, ext: 6.0, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 77.2, spin: 2502, ivb: -4.3, hb: -14.9, ext: 5.0, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Cutter", velo: 88.2, spin: 2364, ivb: 10.9, hb: 7.4, ext: 5.8, result: "Groundout", batter: "Ryan Rivera" }
    ],
    5: [
      // Matt Evans
      { pitchType: "Curveball", velo: 75.4, spin: 2383, ivb: -1.3, hb: -11.5, ext: 5.2, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 90.6, spin: 2037, ivb: 13.1, hb: 13.0, ext: 6.1, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 92.6, spin: 2089, ivb: 11.3, hb: 13.0, ext: 5.9, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2336, ivb: 17.3, hb: 8.2, ext: 5.9, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 90.8, spin: 2209, ivb: 12.7, hb: 14.3, ext: 6.2, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 79.9, spin: 2628, ivb: -0.2, hb: -7.0, ext: 5.1, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2350, ivb: 16.6, hb: 6.2, ext: 6.0, result: "Strikeout", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2320, ivb: 12.3, hb: 3.3, ext: 6.0, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 79.5, spin: 2610, ivb: -3.0, hb: -5.0, ext: 5.3, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2352, ivb: 15.8, hb: 2.7, ext: 6.1, result: "Groundout", batter: "Hugh Pinkney" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2171, ivb: 16.2, hb: 9.9, ext: 6.2, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 78.7, spin: 2616, ivb: -1.3, hb: -4.5, ext: 5.3, result: "Lineout", batter: "Harrison Didawick" }
    ]
  },
  "Chris Billingsley": {
    6: [
      // Carmelo Musacchia
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2268, ivb: 15.5, hb: 6.9, ext: 5.6, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2166, ivb: 14.5, hb: 2.3, ext: 5.8, result: "Swinging Strike", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2166, ivb: 14.6, hb: 1.4, ext: 5.9, result: "Foul", batter: "Carmelo Musacchia" },
      { pitchType: "Slider", velo: 85.4, spin: 2706, ivb: 3.6, hb: -10.8, ext: 5.1, result: "Strikeout", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Sinker", velo: 94.1, spin: 2120, ivb: 9.7, hb: 12.0, ext: 5.9, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 80.0, spin: 2724, ivb: -6.5, hb: -13.7, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2335, ivb: 12.9, hb: 1.9, ext: 5.9, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2239, ivb: 12.7, hb: 6.3, ext: 5.8, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2203, ivb: 11.9, hb: 3.9, ext: 5.9, result: "Strikeout", batter: "Javon Hernandez" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2284, ivb: 11.4, hb: 5.9, ext: 5.8, result: "Groundout", batter: "Camden Ross" }
    ],
    7: [
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2169, ivb: 14.2, hb: 4.2, ext: 5.8, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 92.2, spin: 2038, ivb: 6.6, hb: 12.5, ext: 5.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2236, ivb: 14.1, hb: 6.5, ext: 5.8, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Cutter", velo: 86.2, spin: 1223, ivb: 11.0, hb: 6.7, ext: 5.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.1, spin: 2749, ivb: -2.7, hb: -8.6, ext: 5.4, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 93.6, spin: 2050, ivb: 7.6, hb: 13.6, ext: 5.9, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2234, ivb: 10.2, hb: 7.2, ext: 6.4, result: "Lineout", batter: "Caden Shapiro" },
      // Landen Johnson
      { pitchType: "Curveball", velo: 80.5, spin: 2746, ivb: -8.5, hb: -13.4, ext: 5.2, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.6, spin: 2803, ivb: 1.0, hb: -13.0, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2317, ivb: 13.7, hb: 1.0, ext: 5.7, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2287, ivb: 10.5, hb: 7.1, ext: 6.0, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Curveball", velo: 83.8, spin: 2848, ivb: -8.7, hb: -13.0, ext: 5.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2264, ivb: 13.0, hb: 2.0, ext: 6.1, result: "Lineout", batter: "Landen Johnson" },
      // Ryan Rivera
      { pitchType: "Slider", velo: 83.0, spin: 2585, ivb: 3.7, hb: -12.0, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2218, ivb: 10.8, hb: 0.3, ext: 6.1, result: "Swinging Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 82.0, spin: 2851, ivb: -5.8, hb: -17.0, ext: 5.3, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Cutter", velo: 86.4, spin: 2744, ivb: 0.2, hb: -10.5, ext: 5.1, result: "Strikeout", batter: "Ryan Rivera" }
    ],
    8: [
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2261, ivb: 14.4, hb: 5.1, ext: 5.8, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 81.3, spin: 2644, ivb: -2.9, hb: -11.3, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2273, ivb: 15.0, hb: 5.2, ext: 6.0, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2271, ivb: 14.4, hb: 3.7, ext: 6.0, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2208, ivb: 14.7, hb: 4.0, ext: 6.1, result: "Flyout", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Slider", velo: 81.5, spin: 2805, ivb: -1.8, hb: -6.7, ext: 5.1, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2158, ivb: 11.8, hb: 0.9, ext: 6.0, result: "Single", batter: "Hugh Pinkney" },
      // Harrison Didawick
      { pitchType: "Sinker", velo: 90.4, spin: 1949, ivb: 8.7, hb: 12.5, ext: 5.9, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 91.2, spin: 2053, ivb: 6.9, hb: 13.9, ext: 6.0, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 91.5, spin: 2037, ivb: 11.1, hb: 11.3, ext: 6.0, result: "Ball In Dirt", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2087, ivb: 14.5, hb: 7.2, ext: 5.7, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2122, ivb: 13.7, hb: 4.5, ext: 6.0, result: "Walk", batter: "Harrison Didawick" }
    ]
  },
  "Andrew Ronne": {
    8: [
      // Carmelo Musacchia
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2192, ivb: 13.0, hb: 7.2, ext: 6.1, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Slider", velo: 82.6, spin: 2652, ivb: -3.7, hb: -14.1, ext: 5.4, result: "Foul", batter: "Carmelo Musacchia" },
      { pitchType: "Curveball", velo: 81.2, spin: 2575, ivb: -7.0, hb: -14.5, ext: 5.4, result: "Called Strike", batter: "Carmelo Musacchia" },
      { pitchType: "Slider", velo: 82.0, spin: 2650, ivb: -2.4, hb: -13.8, ext: 5.2, result: "Strikeout", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Slider", velo: 83.3, spin: 2608, ivb: -5.5, hb: -14.2, ext: 5.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2212, ivb: 14.9, hb: 5.4, ext: 5.9, result: "Pop Out", batter: "Javon Hernandez" }
    ]
  },
  "Jarrette Bonet": {
    9: [
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2323, ivb: 13.8, hb: 8.8, ext: 6.0, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 96.2, spin: 2351, ivb: 14.9, hb: 11.8, ext: 5.9, result: "Swinging Strike", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 95.7, spin: 2328, ivb: 14.7, hb: 10.9, ext: 5.7, result: "Strikeout", batter: "Camden Ross" },
      // Caden Shapiro
      { pitchType: "Sinker", velo: 95.9, spin: 2302, ivb: 15.8, hb: 10.0, ext: 6.1, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2337, ivb: 16.3, hb: 10.1, ext: 5.9, result: "Swinging Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2291, ivb: 14.2, hb: 8.9, ext: 6.1, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2228, ivb: 15.7, hb: 10.1, ext: 5.7, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Cutter", velo: 86.9, spin: 2440, ivb: 2.0, hb: -10.8, ext: 5.7, result: "Flyout", batter: "Caden Shapiro" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2254, ivb: 12.3, hb: 9.3, ext: 5.8, result: "Groundout", batter: "Landen Johnson" }
    ]
  }
};

export default pitchersData;



