const pitchersData = {
  "Gavin King": {
    1: [
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2183, ivb: 23.3, hb: 5.7, ext: 5.4, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2130, ivb: 16.6, hb: 9.4, ext: 5.6, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2228, ivb: 22.0, hb: 6.9, ext: 5.4, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2219, ivb: 20.3, hb: 5.0, ext: 5.4, result: "Walk", batter: "Harrison Didawick" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2063, ivb: 19.5, hb: 3.9, ext: 5.5, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2203, ivb: 21.9, hb: 7.1, ext: 5.6, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Cutter", velo: 88.5, spin: 2140, ivb: 9.1, hb: 2.2, ext: 5.9, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 79.3, spin: 2285, ivb: -1.5, hb: -4.3, ext: 5.5, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Cutter", velo: 87.6, spin: 2216, ivb: 9.5, hb: 1.8, ext: 5.7, result: "Strikeout", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2112, ivb: 21.3, hb: 4.9, ext: 5.5, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Cutter", velo: 88.4, spin: 2174, ivb: 8.9, hb: 3.6, ext: 5.9, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Cutter", velo: 87.1, spin: 1987, ivb: 5.8, hb: 0.3, ext: 5.9, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 1796, ivb: 15.1, hb: 8.6, ext: 5.5, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Cutter", velo: 86.5, spin: 2118, ivb: 7.8, hb: -1.0, ext: 5.9, result: "Walk", batter: "Hugh Pinkney" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2078, ivb: 20.0, hb: 5.8, ext: 5.5, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2228, ivb: 22.6, hb: 7.0, ext: 5.5, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2072, ivb: 21.2, hb: 8.8, ext: 5.6, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Cutter", velo: 89.1, spin: 2203, ivb: 8.4, hb: 4.1, ext: 6.0, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2045, ivb: 20.1, hb: 7.5, ext: 5.6, result: "Walk", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2255, ivb: 17.3, hb: 9.2, ext: 5.7, result: "Double", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2226, ivb: 12.5, hb: 6.6, ext: 5.9, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2217, ivb: 21.4, hb: 8.7, ext: 5.5, result: "Single", batter: "Ryan Rivera" },
      // Dan Tauken
      { pitchType: "Changeup", velo: 84.9, spin: 1739, ivb: 13.4, hb: 11.7, ext: 5.9, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2039, ivb: 18.3, hb: 7.5, ext: 5.6, result: "Lineout", batter: "Dan Tauken" },
      // Cole Pladson
      { pitchType: "Changeup", velo: 84.2, spin: 2026, ivb: 11.3, hb: 15.1, ext: 5.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2173, ivb: 19.6, hb: 10.3, ext: 5.5, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 85.5, spin: 1894, ivb: 12.5, hb: 10.4, ext: 5.9, result: "Stolen Base 2B", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 85.5, spin: 1894, ivb: 12.5, hb: 10.4, ext: 5.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2249, ivb: 22.6, hb: 8.7, ext: 5.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2209, ivb: 22.1, hb: 7.5, ext: 5.6, result: "Walk", batter: "Cole Pladson" },
      // Dylan LaPointe
      { pitchType: "Cutter", velo: 88.8, spin: 2210, ivb: 11.7, hb: 1.3, ext: 6.1, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 79.3, spin: 2188, ivb: -4.8, hb: -3.0, ext: 5.4, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 80.7, spin: 2246, ivb: -1.4, hb: -2.7, ext: 5.4, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 80.8, spin: 2214, ivb: -3.1, hb: -7.5, ext: 5.6, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2159, ivb: 20.8, hb: 6.2, ext: 5.4, result: "Walk", batter: "Dylan LaPointe" },
      // Harrison Didawick (2nd PA)
      { pitchType: "Changeup", velo: 84.8, spin: 2054, ivb: 14.4, hb: 14.1, ext: 6.0, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Cutter", velo: 88.4, spin: 2314, ivb: 14.8, hb: 4.2, ext: 6.0, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 84.0, spin: 1862, ivb: 12.4, hb: 16.6, ext: 5.7, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2026, ivb: 23.0, hb: 4.5, ext: 5.5, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 77.5, spin: 2073, ivb: -10.7, hb: -4.7, ext: 5.1, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 79.1, spin: 2157, ivb: -6.1, hb: -1.3, ext: 5.5, result: "Groundout", batter: "Harrison Didawick" }
    ],
    2: [
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2226, ivb: 19.4, hb: 9.6, ext: 5.6, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2265, ivb: 19.4, hb: 10.2, ext: 5.6, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 2232, ivb: 17.6, hb: 3.2, ext: 6.1, result: "Double", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 82.7, spin: 2009, ivb: 10.8, hb: 19.3, ext: 6.1, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2199, ivb: 19.4, hb: 8.4, ext: 5.4, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 83.8, spin: 1877, ivb: 9.8, hb: 11.3, ext: 6.0, result: "Groundout", batter: "Hugh Pinkney" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2115, ivb: 21.0, hb: 3.9, ext: 5.4, result: "Field Error", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Changeup", velo: 84.1, spin: 1976, ivb: 9.3, hb: 15.2, ext: 6.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 84.3, spin: 1985, ivb: 12.5, hb: 12.8, ext: 6.1, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2249, ivb: 23.8, hb: 7.6, ext: 5.5, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2189, ivb: 21.2, hb: 9.0, ext: 5.3, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Curveball", velo: 80.4, spin: 2272, ivb: -4.3, hb: -2.0, ext: 5.3, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2233, ivb: 20.8, hb: 7.6, ext: 5.5, result: "Strikeout", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 80.2, spin: 2136, ivb: -3.9, hb: -3.1, ext: 5.4, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 78.3, spin: 2144, ivb: -7.7, hb: -2.5, ext: 5.5, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2165, ivb: 20.6, hb: 8.0, ext: 5.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2235, ivb: 20.6, hb: 7.7, ext: 5.5, result: "Single", batter: "Ryan Rivera" },
      // Dan Tauken
      { pitchType: "Changeup", velo: 84.2, spin: 1939, ivb: 14.7, hb: 10.7, ext: 6.0, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 89.6, spin: 2195, ivb: 16.8, hb: 11.5, ext: 5.7, result: "Stolen Base 2B", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2195, ivb: 16.8, hb: 11.5, ext: 5.7, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2241, ivb: 24.0, hb: 10.2, ext: 5.7, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2191, ivb: 22.3, hb: 10.8, ext: 5.5, result: "Walk", batter: "Dan Tauken" }
    ]
  },
  "Paulo Noris": {
    2: [
      // Cole Pladson
      { pitchType: "Cutter", velo: 85.9, spin: 2230, ivb: 20.4, hb: 4.0, ext: 5.9, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 75.9, spin: 2011, ivb: 4.6, hb: 18.6, ext: 5.7, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 77.9, spin: 2043, ivb: 8.8, hb: 16.8, ext: 5.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 79.4, spin: 1880, ivb: 6.5, hb: 15.8, ext: 5.6, result: "Strikeout", batter: "Cole Pladson" }
    ],
    3: [
      // Dylan LaPointe
      { pitchType: "Slider", velo: 83.7, spin: 1969, ivb: 14.7, hb: 0.2, ext: 5.7, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 73.7, spin: 1721, ivb: -5.3, hb: -10.4, ext: 5.0, result: "Flyout", batter: "Dylan LaPointe" },
      // Harrison Didawick
      { pitchType: "Cutter", velo: 86.0, spin: 2056, ivb: 16.7, hb: 5.2, ext: 5.8, result: "Groundout", batter: "Harrison Didawick" },
      // Javon Hernandez
      { pitchType: "Curveball", velo: 77.6, spin: 1914, ivb: -0.1, hb: -4.3, ext: 5.3, result: "Foul Bunt", batter: "Javon Hernandez" },
      { pitchType: "Cutter", velo: 85.6, spin: 2023, ivb: 14.5, hb: 3.7, ext: 5.8, result: "Swinging Strike", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 75.6, spin: 1759, ivb: -11.9, hb: -13.2, ext: 4.9, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 74.4, spin: 1798, ivb: -10.3, hb: -11.4, ext: 5.1, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 84.6, spin: 1938, ivb: 15.8, hb: 5.2, ext: 6.1, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Changeup", velo: 83.2, spin: 1977, ivb: 18.5, hb: 5.5, ext: 6.0, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Cutter", velo: 84.2, spin: 2043, ivb: 14.5, hb: 1.7, ext: 6.1, result: "Walk", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 84.0, spin: 2051, ivb: 17.6, hb: 5.8, ext: 5.7, result: "Flyout", batter: "Hugh Pinkney" }
    ]
  },
  "John Carver": {
    4: [
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2185, ivb: 17.0, hb: 8.6, ext: 5.3, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 85.8, spin: 1796, ivb: 0.3, hb: 17.8, ext: 5.2, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 85.7, spin: 1831, ivb: 2.7, hb: 15.8, ext: 5.2, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2143, ivb: 17.2, hb: 7.0, ext: 5.3, result: "Flyout", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Changeup", velo: 85.3, spin: 1830, ivb: 2.9, hb: 17.1, ext: 5.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2177, ivb: 17.0, hb: 11.8, ext: 5.2, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2282, ivb: 15.5, hb: 10.1, ext: 5.3, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 85.6, spin: 1870, ivb: 4.7, hb: 16.6, ext: 5.3, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2143, ivb: 17.0, hb: 9.3, ext: 5.3, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 84.7, spin: 1896, ivb: 0.0, hb: 16.6, ext: 5.2, result: "Strikeout", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2186, ivb: 19.4, hb: 8.8, ext: 5.3, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 85.3, spin: 2432, ivb: 2.6, hb: -2.8, ext: 5.3, result: "Swinging Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2223, ivb: 17.7, hb: 7.3, ext: 5.3, result: "Groundout", batter: "Ryan Rivera" }
    ],
    5: [
      // Dan Tauken
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2190, ivb: 17.3, hb: 11.2, ext: 5.3, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2093, ivb: 14.1, hb: 12.1, ext: 5.2, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2124, ivb: 15.8, hb: 9.5, ext: 5.3, result: "Swinging Strike", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 84.1, spin: 1769, ivb: 2.6, hb: 19.1, ext: 5.2, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2241, ivb: 20.8, hb: 10.3, ext: 5.3, result: "Swinging Strike", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2212, ivb: 18.2, hb: 12.2, ext: 5.2, result: "Single", batter: "Dan Tauken" },
      // Cole Pladson
      { pitchType: "Changeup", velo: 85.2, spin: 1521, ivb: 1.5, hb: 17.7, ext: 5.2, result: "Missed Bunt", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 84.8, spin: 1665, ivb: 4.3, hb: 19.1, ext: 5.2, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2200, ivb: 20.0, hb: 8.6, ext: 5.3, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 82.8, spin: 1508, ivb: 2.8, hb: 16.8, ext: 5.4, result: "Grounded Into DP", batter: "Cole Pladson" },
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2201, ivb: 18.3, hb: 10.2, ext: 5.2, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 81.2, spin: 2496, ivb: -1.7, hb: -8.2, ext: 5.0, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2248, ivb: 15.7, hb: 12.0, ext: 5.3, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2243, ivb: 18.7, hb: 9.1, ext: 5.4, result: "Strikeout", batter: "Dylan LaPointe" }
    ]
  },
  "Clayton Johnson": {
    6: [
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2326, ivb: 17.1, hb: 9.4, ext: 6.9, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2321, ivb: 20.6, hb: 1.4, ext: 6.9, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2345, ivb: 20.1, hb: 3.9, ext: 6.9, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2313, ivb: 18.8, hb: 5.4, ext: 6.9, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2277, ivb: 20.6, hb: 5.8, ext: 6.9, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2407, ivb: 20.0, hb: 7.6, ext: 7.0, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2262, ivb: 18.7, hb: 5.1, ext: 7.0, result: "Flyout", batter: "Harrison Didawick" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2254, ivb: 17.2, hb: 9.4, ext: 6.8, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2410, ivb: 20.0, hb: 10.3, ext: 6.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 83.6, spin: 2082, ivb: -10.6, hb: -11.0, ext: 6.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2428, ivb: 17.6, hb: 6.0, ext: 6.9, result: "Swinging Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2276, ivb: 19.5, hb: 8.4, ext: 6.9, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 82.9, spin: 2142, ivb: -5.3, hb: -18.4, ext: 6.3, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2339, ivb: 17.7, hb: 3.8, ext: 7.0, result: "Single", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2119, ivb: 17.9, hb: 5.7, ext: 7.0, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2109, ivb: 16.1, hb: 7.2, ext: 6.8, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2318, ivb: 19.3, hb: 7.4, ext: 6.8, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2124, ivb: 17.0, hb: 6.5, ext: 6.9, result: "Grounded Into DP", batter: "Hugh Pinkney" }
    ],
    7: [
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2266, ivb: 19.2, hb: 11.8, ext: 7.0, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2210, ivb: 19.1, hb: -3.3, ext: 6.9, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2318, ivb: 17.3, hb: 4.5, ext: 6.9, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2410, ivb: 13.7, hb: 6.4, ext: 6.8, result: "Home Run", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 96.5, spin: 2394, ivb: 19.4, hb: 3.7, ext: 6.9, result: "Hit By Pitch", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "", velo: 93.2, spin: 2319, ivb: 20.4, hb: 4.0, ext: 6.9, result: "Wild Pitch", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2319, ivb: 20.4, hb: 4.0, ext: 6.9, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2233, ivb: 14.5, hb: 2.7, ext: 6.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2433, ivb: 18.3, hb: 4.1, ext: 6.9, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 83.5, spin: 2171, ivb: -7.6, hb: -12.5, ext: 6.2, result: "Swinging Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2340, ivb: 18.6, hb: 3.8, ext: 7.1, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 83.6, spin: 2389, ivb: -11.1, hb: -10.9, ext: 6.1, result: "Walk", batter: "Ryan Rivera" }
    ]
  },
  "Andrew Ronne": {
    7: [
      // Dan Tauken
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2175, ivb: 15.0, hb: 8.3, ext: 5.9, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2287, ivb: 14.5, hb: 9.1, ext: 5.7, result: "Flyout", batter: "Dan Tauken" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2039, ivb: 15.0, hb: 7.1, ext: 5.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 80.6, spin: 2587, ivb: -4.2, hb: -24.3, ext: 4.9, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 80.5, spin: 2645, ivb: -6.0, hb: -17.0, ext: 5.2, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Changeup", velo: 87.0, spin: 1946, ivb: 14.7, hb: 15.9, ext: 5.5, result: "Strikeout", batter: "Cole Pladson" },
      // Dylan LaPointe
      { pitchType: "Slider", velo: 82.4, spin: 2587, ivb: -3.2, hb: -17.1, ext: 5.1, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2173, ivb: 14.9, hb: 8.0, ext: 5.7, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "", velo: 0, spin: 0, ivb: 0, hb: 0, ext: 0, result: "Strikeout", batter: "Dylan LaPointe" }
    ]
  },
  "Collin Bosley-Smith": {
    8: [
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2290, ivb: 24.4, hb: 7.8, ext: 5.6, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2145, ivb: 22.6, hb: 4.4, ext: 5.5, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 82.2, spin: 1672, ivb: 11.0, hb: 13.3, ext: 5.8, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 84.2, spin: 1598, ivb: 8.3, hb: 11.9, ext: 5.8, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2190, ivb: 20.9, hb: 8.6, ext: 5.7, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 82.2, spin: 2536, ivb: 3.0, hb: -12.7, ext: 5.1, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2163, ivb: 22.8, hb: 7.0, ext: 5.8, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2236, ivb: 17.9, hb: 5.9, ext: 5.7, result: "Lineout", batter: "Harrison Didawick" },
      // Javon Hernandez
      { pitchType: "Slider", velo: 82.0, spin: 2566, ivb: -0.7, hb: -9.9, ext: 5.2, result: "Single", batter: "Javon Hernandez" },
      // Hugh Pinkney
      { pitchType: "", velo: 81.4, spin: 1680, ivb: 8.9, hb: 16.1, ext: 6.0, result: "Stolen Base 2B", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 81.4, spin: 1680, ivb: 8.9, hb: 16.1, ext: 6.0, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2098, ivb: 22.3, hb: 6.7, ext: 5.7, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2073, ivb: 20.8, hb: 7.8, ext: 5.5, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 81.7, spin: 1614, ivb: 7.9, hb: 13.4, ext: 5.8, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "", velo: 81.3, spin: 2479, ivb: 2.2, hb: -14.0, ext: 5.0, result: "Stolen Base 3B", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 81.3, spin: 2479, ivb: 2.2, hb: -14.0, ext: 5.0, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2087, ivb: 22.0, hb: 6.5, ext: 5.7, result: "Strikeout", batter: "Hugh Pinkney" },
      // Landen Johnson
      { pitchType: "Slider", velo: 80.5, spin: 2592, ivb: 1.1, hb: -10.2, ext: 5.4, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2264, ivb: 21.5, hb: 4.0, ext: 5.8, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2278, ivb: 19.7, hb: 6.7, ext: 5.7, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 83.1, spin: 1448, ivb: 8.1, hb: 17.7, ext: 6.0, result: "Single", batter: "Landen Johnson" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2123, ivb: 23.3, hb: 4.6, ext: 5.6, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2254, ivb: 22.2, hb: 6.8, ext: 5.8, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 81.7, spin: 1441, ivb: 10.1, hb: 14.2, ext: 6.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2139, ivb: 23.4, hb: 6.8, ext: 5.7, result: "Single", batter: "Quinn Bentley" },
      // Ryan Rivera
      { pitchType: "Slider", velo: 81.0, spin: 2414, ivb: -1.5, hb: -8.7, ext: 5.3, result: "Single", batter: "Ryan Rivera" },
      // Dan Tauken
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2079, ivb: 20.7, hb: 5.1, ext: 5.7, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "", velo: 81.3, spin: 1679, ivb: 7.9, hb: 16.3, ext: 5.7, result: "Wild Pitch", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 81.3, spin: 1679, ivb: 7.9, hb: 16.3, ext: 5.7, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2046, ivb: 20.7, hb: 4.6, ext: 5.8, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 79.8, spin: 2387, ivb: 1.0, hb: -9.9, ext: 5.3, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2121, ivb: 21.8, hb: 5.9, ext: 5.6, result: "Walk", batter: "Dan Tauken" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2128, ivb: 21.3, hb: 6.4, ext: 5.7, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 79.7, spin: 2457, ivb: 2.7, hb: -16.1, ext: 5.3, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 81.2, spin: 2445, ivb: -1.6, hb: -6.9, ext: 5.2, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2185, ivb: 23.7, hb: 3.9, ext: 5.8, result: "Strikeout", batter: "Cole Pladson" }
    ]
  },
  "Aidan Weaver": {
    9: [
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2141, ivb: 12.7, hb: 5.7, ext: 6.5, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 84.5, spin: 2205, ivb: -3.1, hb: -4.8, ext: 6.0, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 86.1, spin: 2240, ivb: -1.1, hb: -6.7, ext: 6.3, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2156, ivb: 14.1, hb: 7.8, ext: 6.7, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 84.2, spin: 2146, ivb: -2.0, hb: -4.9, ext: 5.9, result: "Flyout", batter: "Dylan LaPointe" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2234, ivb: 12.7, hb: 9.1, ext: 6.6, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2237, ivb: 15.5, hb: 9.3, ext: 6.4, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2229, ivb: 15.5, hb: 7.8, ext: 6.5, result: "Groundout", batter: "Harrison Didawick" },
      // Javon Hernandez
      { pitchType: "Slider", velo: 85.7, spin: 2285, ivb: 1.3, hb: -3.0, ext: 5.8, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 83.8, spin: 2263, ivb: -3.6, hb: -4.3, ext: 5.7, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 96.0, spin: 2263, ivb: 10.7, hb: 13.8, ext: 6.7, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2198, ivb: 13.3, hb: 8.9, ext: 6.5, result: "Strikeout", batter: "Javon Hernandez" }
    ]
  }
};

export default pitchersData;
