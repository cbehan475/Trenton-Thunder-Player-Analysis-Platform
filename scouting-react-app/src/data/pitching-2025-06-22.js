const pitchersData = {
  "Joe Ariola": {
    1: [
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2208, ivb: 18.5, hb: -7.5, ext: 5.2, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2151, ivb: 20.0, hb: -8.8, ext: 5.1, result: "Flyout", batter: "Ryan Rivera" },
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2219, ivb: 20.6, hb: -8.9, ext: 5.1, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 80.7, spin: 2720, ivb: -17.9, hb: 6.9, ext: 5.2, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 81.0, spin: 2700, ivb: -16.8, hb: 7.3, ext: 5.1, result: "Strikeout", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2279, ivb: 20.8, hb: -4.3, ext: 5.4, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2113, ivb: 19.0, hb: -6.5, ext: 5.2, result: "Lineout", batter: "Hugh Pinkney" }
    ],
    2: [
      // Harrison Didawick
      { pitchType: "Curveball", velo: 80.6, spin: 2662, ivb: -16.7, hb: 5.6, ext: 4.8, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2089, ivb: 18.9, hb: -9.6, ext: 5.2, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2003, ivb: 17.4, hb: -9.4, ext: 5.0, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2062, ivb: 18.4, hb: -9.9, ext: 5.2, result: "Lineout", batter: "Harrison Didawick" },
      // Carmelo Musacchia
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2153, ivb: 19.3, hb: -8.1, ext: 5.2, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Curveball", velo: 79.7, spin: 2563, ivb: -17.4, hb: 9.3, ext: 4.7, result: "Called Strike", batter: "Carmelo Musacchia" },
      { pitchType: "Curveball", velo: 80.3, spin: 2672, ivb: -18.0, hb: 8.4, ext: 4.7, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 1960, ivb: 17.5, hb: -6.5, ext: 5.2, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2158, ivb: 21.2, hb: -8.2, ext: 5.2, result: "Single", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2197, ivb: 20.5, hb: -7.8, ext: 5.1, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 93.7, spin: 2196, ivb: 20.9, hb: -10.7, ext: 5.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 81.2, spin: 2636, ivb: -15.7, hb: 3.8, ext: 5.3, result: "Ball In Dirt", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2267, ivb: 21.3, hb: -9.5, ext: 5.3, result: "Groundout", batter: "Javon Hernandez" },
      // Dylan LaPointe
      { pitchType: "Curveball", velo: 80.2, spin: 2723, ivb: -15.6, hb: 8.5, ext: 5.2, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 79.5, spin: 2644, ivb: -18.0, hb: 7.4, ext: 4.9, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 80.9, spin: 2759, ivb: -20.5, hb: 5.1, ext: 4.9, result: "Strikeout", batter: "Dylan LaPointe" }
    ],
    3: [
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2002, ivb: 15.9, hb: -8.7, ext: 5.2, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2080, ivb: 19.3, hb: -9.6, ext: 5.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 86.6, spin: 2111, ivb: 8.0, hb: 1.6, ext: 5.3, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Curveball", velo: 81.2, spin: 2666, ivb: -17.0, hb: 3.6, ext: 5.0, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Curveball", velo: 80.4, spin: 2572, ivb: -16.7, hb: 5.9, ext: 5.2, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2040, ivb: 17.8, hb: -9.4, ext: 5.3, result: "Groundout", batter: "Caden Shapiro" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2207, ivb: 22.6, hb: -10.3, ext: 5.2, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Slider", velo: 86.2, spin: 2115, ivb: 7.0, hb: 2.1, ext: 5.3, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Curveball", velo: 78.9, spin: 2553, ivb: -17.8, hb: 6.6, ext: 5.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2056, ivb: 18.7, hb: -9.3, ext: 5.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 1907, ivb: 19.5, hb: -8.2, ext: 5.1, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Curveball", velo: 80.5, spin: 2628, ivb: -15.7, hb: 3.8, ext: 5.1, result: "Groundout", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 79.6, spin: 2609, ivb: -14.3, hb: 5.4, ext: 5.4, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 81.2, spin: 983, ivb: -4.1, hb: -7.2, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2077, ivb: 16.3, hb: -5.9, ext: 5.2, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2158, ivb: 19.0, hb: -6.5, ext: 5.2, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2155, ivb: 19.4, hb: -6.3, ext: 5.2, result: "Strikeout", batter: "Ryan Rivera" }
    ]
  },
  "Clayton Johnson": {
    5: [
      // Carmelo Musacchia
      { pitchType: "Sinker", velo: 94.4, spin: 2148, ivb: 12.3, hb: 11.9, ext: 7.2, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2005, ivb: 16.4, hb: 7.7, ext: 6.9, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2078, ivb: 15.8, hb: 7.6, ext: 7.1, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2147, ivb: 16.4, hb: 7.1, ext: 7.2, result: "Walk", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Sinker", velo: 93.7, spin: 2065, ivb: 11.4, hb: 13.1, ext: 6.9, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2293, ivb: 14.2, hb: 10.7, ext: 7.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 83.7, spin: 2224, ivb: -11.2, hb: -12.0, ext: 6.1, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 83.7, spin: 2224, ivb: -11.2, hb: -12.0, ext: 6.1, result: "Wild Pitch", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 94.8, spin: 2168, ivb: 11.3, hb: 14.7, ext: 6.7, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2163, ivb: 16.8, hb: 6.6, ext: 7.0, result: "Walk", batter: "Javon Hernandez" },
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2001, ivb: 15.1, hb: 9.3, ext: 7.0, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 94.3, spin: 2263, ivb: 11.0, hb: 13.8, ext: 7.1, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 94.1, spin: 2191, ivb: 10.3, hb: 13.3, ext: 7.0, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 93.1, spin: 2076, ivb: 7.4, hb: 14.2, ext: 7.1, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 94.5, spin: 2170, ivb: 8.7, hb: 14.7, ext: 7.1, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 94.4, spin: 2237, ivb: 13.6, hb: 12.2, ext: 7.0, result: "Walk", batter: "Dylan LaPointe" }
    ]
  },
  "Eddie Smink": {
    5: [
      // Caden Shapiro
      { pitchType: "Sinker", velo: 87.7, spin: 1996, ivb: 7.1, hb: 15.0, ext: 5.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 1963, ivb: 11.7, hb: 9.2, ext: 5.3, result: "Foul Bunt", batter: "Caden Shapiro" },
      { pitchType: "Changeup", velo: 87.2, spin: 1982, ivb: 10.1, hb: 16.2, ext: 5.2, result: "Foul Bunt", batter: "Caden Shapiro" },
      { pitchType: "Curveball", velo: 76.9, spin: 1490, ivb: 1.9, hb: 9.9, ext: 5.3, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 88.9, spin: 1965, ivb: 9.5, hb: 13.4, ext: 5.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 89.6, spin: 2033, ivb: 8.6, hb: 14.2, ext: 5.8, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Sinker", velo: 88.0, spin: 1888, ivb: 11.3, hb: 12.6, ext: 5.9, result: "Walk", batter: "Caden Shapiro" },
      // Quinn Bentley
      { pitchType: "Sinker", velo: 88.8, spin: 1925, ivb: 11.2, hb: 14.9, ext: 5.4, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 79.8, spin: 1505, ivb: 6.7, hb: 11.1, ext: 5.4, result: "Ball In Dirt", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 87.9, spin: 1906, ivb: 12.4, hb: 13.0, ext: 5.5, result: "Sac Fly", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 68.4, spin: 2227, ivb: -15.1, hb: -12.1, ext: 5.9, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Sinker", velo: 88.1, spin: 1908, ivb: 11.9, hb: 11.7, ext: 5.6, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 1873, ivb: 11.7, hb: 11.7, ext: 5.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 88.1, spin: 2017, ivb: 17.0, hb: 13.4, ext: 5.5, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 75.6, spin: 2264, ivb: -2.8, hb: -3.5, ext: 5.3, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Changeup", velo: 87.0, spin: 1834, ivb: 9.8, hb: 14.0, ext: 5.9, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2017, ivb: 14.6, hb: 6.3, ext: 5.5, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 2053, ivb: 16.6, hb: 12.6, ext: 5.7, result: "Walk", batter: "Ryan Rivera" },
      // Matt Evans
      { pitchType: "Changeup", velo: 87.3, spin: 1958, ivb: 12.0, hb: 13.4, ext: 5.6, result: "Sac Fly", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Sinker", velo: 90.0, spin: 2140, ivb: 11.9, hb: 14.9, ext: 5.6, result: "Ball In Dirt", batter: "Hugh Pinkney" },
      { pitchType: "Sinker", velo: 89.2, spin: 2075, ivb: 11.1, hb: 13.3, ext: 5.6, result: "Pop Out", batter: "Hugh Pinkney" }
    ]
  },
  "Kai Fyke": {
    6: [
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2122, ivb: 12.8, hb: 7.5, ext: 5.4, result: "Flyout", batter: "Harrison Didawick" },
      // Carmelo Musacchia
      { pitchType: "Curveball", velo: 79.8, spin: 2626, ivb: -3.7, hb: -1.6, ext: 5.5, result: "Bunt Groundout", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Curveball", velo: 80.1, spin: 2612, ivb: -5.8, hb: -0.6, ext: 5.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Cutter", velo: 91.0, spin: 2149, ivb: 8.7, hb: 3.3, ext: 5.7, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 82.0, spin: 2626, ivb: -2.6, hb: -4.2, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2199, ivb: 12.1, hb: 6.8, ext: 5.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2208, ivb: 13.5, hb: 6.7, ext: 5.7, result: "Walk", batter: "Javon Hernandez" },
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2042, ivb: 11.4, hb: 6.7, ext: 5.6, result: "Flyout", batter: "Dylan LaPointe" }
    ]
  },
  "Aidan Weaver": {
    7: [
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 1943, ivb: 6.1, hb: 1.2, ext: 6.6, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2143, ivb: 13.5, hb: 8.6, ext: 6.6, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2046, ivb: 11.6, hb: 6.0, ext: 6.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2007, ivb: 10.1, hb: 5.7, ext: 6.7, result: "Field Error", batter: "Caden Shapiro" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 1955, ivb: 11.4, hb: 9.0, ext: 6.3, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 1990, ivb: 7.1, hb: 6.8, ext: 6.6, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 80.8, spin: 1559, ivb: 0.3, hb: 12.3, ext: 6.1, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 1866, ivb: 9.8, hb: 8.9, ext: 6.7, result: "Strikeout", batter: "Quinn Bentley" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 1996, ivb: 13.1, hb: 4.8, ext: 6.4, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 1883, ivb: 10.0, hb: 6.5, ext: 6.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 80.5, spin: 1817, ivb: -0.7, hb: 10.3, ext: 6.2, result: "Ball In Dirt", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 1873, ivb: 12.4, hb: 7.0, ext: 6.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 1837, ivb: 14.2, hb: 7.5, ext: 6.3, result: "Walk", batter: "Landen Johnson" },
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 1939, ivb: 10.3, hb: 9.1, ext: 6.5, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 1893, ivb: 13.2, hb: 9.0, ext: 6.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 1892, ivb: 13.3, hb: 6.2, ext: 6.5, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2006, ivb: 7.8, hb: 11.9, ext: 6.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 86.8, spin: 2164, ivb: -0.2, hb: -2.1, ext: 6.0, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 1884, ivb: 14.9, hb: 7.3, ext: 6.4, result: "Groundout", batter: "Matt Evans" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 1878, ivb: 13.5, hb: 5.8, ext: 6.4, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2093, ivb: 9.2, hb: 8.7, ext: 6.5, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 81.8, spin: 1766, ivb: -1.7, hb: 12.8, ext: 6.0, result: "Ball In Dirt", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2097, ivb: 10.1, hb: 10.0, ext: 6.6, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 80.3, spin: 1727, ivb: -2.2, hb: 11.1, ext: 6.1, result: "Strikeout", batter: "Hugh Pinkney" }
    ]
  },
  "Andrew Ronne": {
    8: [
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2044, ivb: 10.7, hb: 8.2, ext: 6.0, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 81.9, spin: 2701, ivb: 0.6, hb: -14.8, ext: 5.6, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 82.6, spin: 2471, ivb: -2.2, hb: -15.0, ext: 5.7, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 77.3, spin: 2014, ivb: -18.5, hb: -3.7, ext: 5.0, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 83.3, spin: 2702, ivb: -1.0, hb: -17.6, ext: 5.3, result: "Strikeout", batter: "Harrison Didawick" },
      // Carmelo Musacchia
      { pitchType: "Curveball", velo: 82.6, spin: 2587, ivb: -7.2, hb: -11.8, ext: 5.5, result: "Called Strike", batter: "Carmelo Musacchia" },
      { pitchType: "Curveball", velo: 81.3, spin: 2464, ivb: -5.4, hb: -16.0, ext: 5.3, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Sinker", velo: 94.8, spin: 2273, ivb: 12.3, hb: 11.2, ext: 6.0, result: "Ball", batter: "Carmelo Musacchia" },
      { pitchType: "Slider", velo: 83.0, spin: 2713, ivb: 0.3, hb: -11.5, ext: 5.4, result: "Flyout", batter: "Carmelo Musacchia" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2316, ivb: 13.8, hb: 8.9, ext: 5.8, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2329, ivb: 13.5, hb: 8.1, ext: 5.7, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Cutter", velo: 85.5, spin: 2719, ivb: 2.4, hb: -13.4, ext: 5.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 84.7, spin: 2696, ivb: -2.2, hb: -14.2, ext: 5.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2328, ivb: 15.1, hb: 4.8, ext: 6.0, result: "Strikeout", batter: "Javon Hernandez" }
    ]
  },
  "Collin Bosley-Smith": {
    9: [
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2259, ivb: 20.3, hb: 6.6, ext: 5.7, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 82.1, spin: 2600, ivb: 3.7, hb: -10.4, ext: 5.4, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2104, ivb: 20.2, hb: 6.3, ext: 5.6, result: "Strikeout", batter: "Dylan LaPointe" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2130, ivb: 18.4, hb: 8.1, ext: 5.9, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2119, ivb: 19.0, hb: 8.4, ext: 5.8, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2220, ivb: 20.6, hb: 7.2, ext: 5.7, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2129, ivb: 18.6, hb: 6.2, ext: 5.6, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2252, ivb: 22.0, hb: 6.5, ext: 5.7, result: "Foul", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2237, ivb: 21.5, hb: 5.8, ext: 5.9, result: "Flyout", batter: "Caden Shapiro" },
      // Eric Colaco
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2267, ivb: 21.4, hb: 5.5, ext: 5.7, result: "Called Strike", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2250, ivb: 20.3, hb: 11.0, ext: 5.7, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2155, ivb: 19.5, hb: 5.4, ext: 5.8, result: "Flyout", batter: "Eric Colaco" }
    ]
  }
};

export default pitchersData;
