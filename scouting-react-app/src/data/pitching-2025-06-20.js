const pitchersData = {
  "Gavin King": {
    1: [
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2098, ivb: 18.5, hb: 9.8, ext: 5.9, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2196, ivb: 15.1, hb: 11.3, ext: 6.0, result: "Groundout", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2148, ivb: 17.1, hb: 10.7, ext: 5.8, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2046, ivb: 20.6, hb: 5.9, ext: 5.7, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2210, ivb: 17.2, hb: 11.9, ext: 5.7, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2043, ivb: 20.9, hb: 4.9, ext: 5.4, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2248, ivb: 16.9, hb: 11.1, ext: 5.9, result: "Strikeout", batter: "Javon Hernandez" },
      // Matthew Polk
      { pitchType: "Cutter", velo: 91.7, spin: 2284, ivb: 10.5, hb: 2.6, ext: 6.0, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2100, ivb: 12.9, hb: 8.4, ext: 6.0, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2141, ivb: 12.0, hb: 10.9, ext: 5.8, result: "Single", batter: "Matthew Polk" },
      // Dylan LaPointe
      { pitchType: "Sinker", velo: 94.1, spin: 2159, ivb: 15.2, hb: 14.2, ext: 5.8, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 82.6, spin: 2321, ivb: -5.3, hb: -0.7, ext: 5.2, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 1875, ivb: 15.3, hb: 12.8, ext: 5.8, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2144, ivb: 16.4, hb: 13.4, ext: 5.8, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 96.5, spin: 2146, ivb: 15.9, hb: 8.5, ext: 5.6, result: "Strikeout", batter: "Dylan LaPointe" }
    ],
    2: [
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2039, ivb: 16.2, hb: 6.8, ext: 5.9, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2175, ivb: 18.3, hb: 5.8, ext: 5.6, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 86.2, spin: 2226, ivb: 14.7, hb: 14.1, ext: 5.9, result: "Hit By Pitch", batter: "Quinn Bentley" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2195, ivb: 15.7, hb: 10.1, ext: 6.0, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2179, ivb: 13.5, hb: 11.7, ext: 5.8, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2409, ivb: 18.0, hb: 9.9, ext: 5.7, result: "Wild Pitch", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2409, ivb: 18.0, hb: 9.9, ext: 5.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2039, ivb: 16.9, hb: 9.0, ext: 5.6, result: "Walk", batter: "Cole Pladson" },
      // Eric Colaco
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2190, ivb: 13.2, hb: 7.6, ext: 6.0, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2139, ivb: 15.4, hb: 12.2, ext: 5.9, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 83.7, spin: 2489, ivb: -6.8, hb: -1.3, ext: 5.4, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 83.0, spin: 2381, ivb: -5.7, hb: 0.0, ext: 5.7, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 82.0, spin: 2315, ivb: -7.4, hb: -0.2, ext: 5.7, result: "Strikeout", batter: "Eric Colaco" },
      // Camden Ross
      { pitchType: "Cutter", velo: 88.4, spin: 2172, ivb: 3.6, hb: 1.3, ext: 5.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 93.7, spin: 2275, ivb: 12.2, hb: 11.5, ext: 5.8, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 81.4, spin: 2203, ivb: -5.8, hb: 0.4, ext: 5.5, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 1943, ivb: 18.1, hb: 9.7, ext: 5.7, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2132, ivb: 16.1, hb: 10.8, ext: 5.8, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 82.8, spin: 2410, ivb: -2.4, hb: -1.7, ext: 5.7, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 84.3, spin: 2397, ivb: -1.9, hb: -0.7, ext: 5.6, result: "Walk", batter: "Camden Ross" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2259, ivb: 15.0, hb: 12.1, ext: 5.9, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2093, ivb: 20.2, hb: 8.1, ext: 5.8, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.2, spin: 2394, ivb: -8.2, hb: 1.7, ext: 5.7, result: "Ball In Dirt", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2148, ivb: 20.2, hb: 7.6, ext: 5.7, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 94.3, spin: 2112, ivb: 13.5, hb: 13.3, ext: 6.1, result: "Strikeout", batter: "Landen Johnson" },
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2023, ivb: 15.2, hb: 9.4, ext: 5.8, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 1854, ivb: 14.3, hb: 8.6, ext: 5.9, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 96.0, spin: 1995, ivb: 14.8, hb: 6.3, ext: 5.8, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2025, ivb: 19.1, hb: 7.7, ext: 5.8, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Cutter", velo: 92.2, spin: 2268, ivb: 10.5, hb: 0.7, ext: 6.3, result: "Ball In Dirt", batter: "Matt Evans" },
      { pitchType: "Cutter", velo: 90.7, spin: 2300, ivb: 11.4, hb: 3.2, ext: 6.1, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2083, ivb: 15.8, hb: 10.8, ext: 5.8, result: "Groundout", batter: "Matt Evans" }
    ],
    3: [
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2256, ivb: 20.5, hb: 7.5, ext: 5.7, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2108, ivb: 17.1, hb: 4.7, ext: 5.9, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 91.0, spin: 2106, ivb: 13.0, hb: 14.2, ext: 5.9, result: "Pop Out", batter: "Javon Hernandez" },
      // Matthew Polk
      { pitchType: "Cutter", velo: 88.0, spin: 2314, ivb: 8.0, hb: 1.2, ext: 5.9, result: "Foul", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2171, ivb: 16.8, hb: 7.7, ext: 6.0, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2138, ivb: 14.2, hb: 10.5, ext: 6.1, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2103, ivb: 19.2, hb: 8.6, ext: 5.6, result: "Foul", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2172, ivb: 16.1, hb: 9.6, ext: 5.5, result: "Groundout", batter: "Matthew Polk" },
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2117, ivb: 18.1, hb: 11.5, ext: 5.7, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 81.8, spin: 2305, ivb: -5.0, hb: -0.2, ext: 5.6, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 84.6, spin: 2262, ivb: 4.9, hb: -1.6, ext: 6.0, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2170, ivb: 15.3, hb: 11.6, ext: 5.9, result: "Groundout", batter: "Dylan LaPointe" }
    ],
    4: [
      // Quinn Bentley
      { pitchType: "Sinker", velo: 91.0, spin: 2161, ivb: 13.1, hb: 15.9, ext: 5.9, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 91.7, spin: 2244, ivb: 13.9, hb: 16.0, ext: 5.9, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2116, ivb: 20.1, hb: 8.1, ext: 5.6, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2174, ivb: 19.5, hb: 7.2, ext: 5.5, result: "Walk", batter: "Quinn Bentley" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2211, ivb: 17.5, hb: 13.1, ext: 5.7, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2221, ivb: 18.0, hb: 7.7, ext: 5.7, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2185, ivb: 18.9, hb: 9.6, ext: 5.7, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Sinker", velo: 92.7, spin: 2110, ivb: 15.2, hb: 12.6, ext: 5.8, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2189, ivb: 20.4, hb: 9.1, ext: 5.8, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Sinker", velo: 93.0, spin: 2147, ivb: 15.0, hb: 12.7, ext: 5.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2153, ivb: 20.5, hb: 10.5, ext: 5.5, result: "Strikeout", batter: "Cole Pladson" },
      // Eric Colaco
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2256, ivb: 14.7, hb: 13.0, ext: 5.6, result: "Groundout", batter: "Eric Colaco" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2249, ivb: 19.5, hb: 10.3, ext: 5.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2149, ivb: 21.4, hb: 9.8, ext: 5.7, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2306, ivb: 21.3, hb: 11.0, ext: 5.7, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2207, ivb: 18.8, hb: 10.9, ext: 5.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2218, ivb: 22.2, hb: 9.1, ext: 5.5, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2223, ivb: 22.0, hb: 6.8, ext: 5.4, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2178, ivb: 21.1, hb: 8.1, ext: 5.5, result: "Walk", batter: "Camden Ross" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2239, ivb: 14.7, hb: 10.9, ext: 5.6, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2214, ivb: 16.2, hb: 7.3, ext: 5.6, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2207, ivb: 15.8, hb: 10.9, ext: 5.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2299, ivb: 22.3, hb: 8.5, ext: 5.7, result: "Ball In Dirt", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2169, ivb: 20.3, hb: 9.6, ext: 5.4, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2218, ivb: 19.3, hb: 4.0, ext: 5.7, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2164, ivb: 17.8, hb: 10.3, ext: 5.6, result: "Single", batter: "Landen Johnson" }
    ]
  },
  "Eddie Smink": {
    4: [
      // Matt Evans
      { pitchType: "Sinker", velo: 92.6, spin: 2183, ivb: 17.3, hb: 13.1, ext: 5.5, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 91.4, spin: 2106, ivb: 15.1, hb: 13.1, ext: 5.6, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 78.7, spin: 2516, ivb: -4.5, hb: -7.7, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 76.1, spin: 2340, ivb: -3.8, hb: -4.4, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 92.5, spin: 2212, ivb: 16.0, hb: 15.1, ext: 5.3, result: "Flyout", batter: "Matt Evans" }
    ],
    5: [
      // Javon Hernandez
      { pitchType: "Curveball", velo: 75.4, spin: 2364, ivb: -4.0, hb: -6.0, ext: 5.1, result: "Foul Bunt", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 78.9, spin: 2421, ivb: -3.1, hb: -3.4, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2228, ivb: 19.7, hb: 9.3, ext: 5.5, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 90.6, spin: 2100, ivb: 11.9, hb: 14.6, ext: 5.4, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 72.4, spin: 2227, ivb: -10.8, hb: -9.0, ext: 5.6, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 92.7, spin: 2083, ivb: 15.7, hb: 14.4, ext: 5.6, result: "Strikeout", batter: "Javon Hernandez" },
      // Matthew Polk
      { pitchType: "Curveball", velo: 77.0, spin: 2201, ivb: -6.8, hb: -4.4, ext: 5.4, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Curveball", velo: 76.9, spin: 2272, ivb: -3.6, hb: -5.6, ext: 5.4, result: "Swinging Strike", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2089, ivb: 18.2, hb: 12.1, ext: 5.5, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Curveball", velo: 77.3, spin: 2360, ivb: -1.6, hb: -3.4, ext: 5.3, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2131, ivb: 17.2, hb: 11.9, ext: 5.5, result: "Swinging Strike", batter: "Matthew Polk" },
      { pitchType: "Sinker", velo: 92.2, spin: 2113, ivb: 17.2, hb: 13.5, ext: 5.4, result: "Flyout", batter: "Matthew Polk" },
      // Dylan LaPointe
      { pitchType: "Sinker", velo: 91.4, spin: 2181, ivb: 13.2, hb: 15.6, ext: 5.6, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 77.1, spin: 2436, ivb: -4.8, hb: -7.6, ext: 5.2, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2177, ivb: 20.7, hb: 11.1, ext: 5.7, result: "Foul", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 90.4, spin: 2094, ivb: 12.2, hb: 14.2, ext: 5.5, result: "Lineout", batter: "Dylan LaPointe" }
    ]
  },
  "Kai Fyke": {
    6: [
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2263, ivb: 16.4, hb: 5.5, ext: 5.8, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2321, ivb: 11.8, hb: 6.3, ext: 5.6, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2347, ivb: 14.1, hb: 1.6, ext: 5.8, result: "Pop Out", batter: "Quinn Bentley" },
      // Cole Pladson
      { pitchType: "Slider", velo: 84.4, spin: 2816, ivb: -6.4, hb: -0.3, ext: 5.5, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 96.1, spin: 2407, ivb: 18.0, hb: 7.9, ext: 5.7, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2288, ivb: 12.1, hb: 3.4, ext: 5.9, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2308, ivb: 13.9, hb: 2.6, ext: 5.8, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2402, ivb: 13.2, hb: 2.9, ext: 5.8, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Cutter", velo: 89.9, spin: 1487, ivb: 9.5, hb: 4.0, ext: 5.6, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2241, ivb: 15.3, hb: 5.0, ext: 5.9, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Slider", velo: 84.1, spin: 2660, ivb: -5.7, hb: -4.5, ext: 5.3, result: "Strikeout", batter: "Cole Pladson" },
      // Eric Colaco
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2286, ivb: 14.1, hb: 4.4, ext: 5.7, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 83.5, spin: 2833, ivb: -11.4, hb: -5.2, ext: 5.3, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Slider", velo: 83.8, spin: 2889, ivb: -3.0, hb: -4.4, ext: 5.5, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2295, ivb: 12.3, hb: 6.5, ext: 5.9, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Slider", velo: 84.7, spin: 2752, ivb: -6.0, hb: -3.7, ext: 5.4, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Slider", velo: 84.6, spin: 2844, ivb: -4.5, hb: -1.8, ext: 5.4, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2278, ivb: 12.1, hb: 1.2, ext: 6.0, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2312, ivb: 17.1, hb: 7.8, ext: 5.8, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Slider", velo: 83.5, spin: 2819, ivb: -3.7, hb: -2.8, ext: 5.4, result: "Single", batter: "Eric Colaco" },
      // Camden Ross
      { pitchType: "Slider", velo: 83.7, spin: 2844, ivb: -4.9, hb: -2.2, ext: 5.3, result: "Ball In Dirt", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 84.1, spin: 2661, ivb: 3.8, hb: -7.2, ext: 5.3, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2326, ivb: 17.1, hb: 5.9, ext: 5.7, result: "Groundout", batter: "Camden Ross" }
    ]
  },
  "Aidan Weaver": {
    7: [
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 96.1, spin: 2199, ivb: 21.7, hb: 3.4, ext: 6.5, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2170, ivb: 14.0, hb: 5.0, ext: 6.5, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2135, ivb: 11.9, hb: 9.9, ext: 6.6, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2206, ivb: 8.9, hb: 3.8, ext: 6.6, result: "Groundout", batter: "Landen Johnson" },
      // Matt Evans
      { pitchType: "Slider", velo: 85.7, spin: 2238, ivb: 3.5, hb: -2.2, ext: 6.1, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 84.5, spin: 2250, ivb: -2.1, hb: -5.1, ext: 6.2, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 97.3, spin: 2203, ivb: 21.2, hb: 1.9, ext: 6.7, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 86.6, spin: 2301, ivb: 4.3, hb: -1.1, ext: 6.1, result: "Strikeout", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "Slider", velo: 85.7, spin: 2174, ivb: 2.9, hb: -4.8, ext: 6.1, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 85.6, spin: 2243, ivb: 2.9, hb: -2.2, ext: 6.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2229, ivb: 16.0, hb: 8.0, ext: 6.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 96.1, spin: 2287, ivb: 19.2, hb: 2.0, ext: 7.0, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 83.4, spin: 2282, ivb: 3.2, hb: -2.3, ext: 6.5, result: "Walk", batter: "Javon Hernandez" },
      // Matthew Polk
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2095, ivb: 17.8, hb: 13.4, ext: 6.5, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2185, ivb: 14.5, hb: 11.2, ext: 6.8, result: "Swinging Strike", batter: "Matthew Polk" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2191, ivb: 17.4, hb: 4.0, ext: 6.7, result: "Ball", batter: "Matthew Polk" },
      { pitchType: "Slider", velo: 86.4, spin: 2307, ivb: 2.7, hb: -2.6, ext: 6.1, result: "Pop Out", batter: "Matthew Polk" }
    ]
  },
  "Collin Bosley-Smith": {
    8: [
      // Dylan LaPointe
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2158, ivb: 19.9, hb: 2.4, ext: 6.0, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Slider", velo: 81.8, spin: 2682, ivb: -1.2, hb: -9.9, ext: 5.5, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2135, ivb: 19.0, hb: 4.3, ext: 6.0, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 81.3, spin: 2675, ivb: -4.3, hb: -12.9, ext: 5.3, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2163, ivb: 18.1, hb: 2.3, ext: 6.0, result: "Swinging Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2113, ivb: 18.9, hb: 6.7, ext: 6.1, result: "Strikeout", batter: "Dylan LaPointe" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2198, ivb: 18.8, hb: 5.0, ext: 6.0, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 85.7, spin: 1812, ivb: 7.4, hb: 17.6, ext: 6.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2125, ivb: 19.3, hb: 9.8, ext: 6.0, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Curveball", velo: 81.1, spin: 2648, ivb: -2.2, hb: -11.4, ext: 5.5, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2159, ivb: 18.9, hb: 3.9, ext: 6.1, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Curveball", velo: 79.8, spin: 2615, ivb: -6.1, hb: -14.1, ext: 5.4, result: "Strikeout", batter: "Quinn Bentley" },
      // Cole Pladson
      { pitchType: "Changeup", velo: 85.2, spin: 1598, ivb: 7.2, hb: 14.0, ext: 6.0, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2201, ivb: 18.2, hb: 5.3, ext: 5.9, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2249, ivb: 19.1, hb: 5.8, ext: 6.0, result: "Swinging Strike", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2174, ivb: 18.9, hb: 2.4, ext: 6.2, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 79.9, spin: 2651, ivb: -3.4, hb: -11.3, ext: 5.4, result: "Foul", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2184, ivb: 20.7, hb: 2.9, ext: 6.1, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Slider", velo: 82.6, spin: 2616, ivb: -3.5, hb: -12.2, ext: 5.4, result: "Walk", batter: "Cole Pladson" },
      // Eric Colaco
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2060, ivb: 21.0, hb: 1.3, ext: 6.0, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 80.0, spin: 2621, ivb: -3.8, hb: -12.4, ext: 5.4, result: "Called Strike", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 79.0, spin: 2580, ivb: -2.4, hb: -10.5, ext: 5.4, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2060, ivb: 16.8, hb: 7.9, ext: 5.9, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Curveball", velo: 78.4, spin: 2599, ivb: -0.1, hb: -14.7, ext: 5.5, result: "Ball", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2111, ivb: 15.1, hb: 7.0, ext: 6.0, result: "Foul", batter: "Eric Colaco" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2101, ivb: 18.7, hb: 4.4, ext: 6.1, result: "Walk", batter: "Eric Colaco" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2175, ivb: 19.1, hb: 4.9, ext: 5.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2207, ivb: 19.6, hb: 5.6, ext: 5.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2105, ivb: 19.7, hb: 2.2, ext: 6.0, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2115, ivb: 20.4, hb: 5.7, ext: 6.0, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2137, ivb: 23.2, hb: 2.0, ext: 5.9, result: "Swinging Strike", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2150, ivb: 19.5, hb: 2.0, ext: 6.0, result: "Strikeout", batter: "Camden Ross" }
    ]
  },
  "Cullen Horowicz": {
    9: [
      // Landen Johnson
      { pitchType: "Sinker", velo: 92.0, spin: 2242, ivb: 5.2, hb: 20.5, ext: 5.4, result: "Swinging Strike (Blocked)", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 91.6, spin: 2302, ivb: 6.2, hb: 21.6, ext: 5.5, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 90.7, spin: 2357, ivb: 14.4, hb: 17.0, ext: 5.6, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 92.6, spin: 2512, ivb: 15.4, hb: 15.4, ext: 5.3, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2513, ivb: 18.5, hb: 11.4, ext: 5.6, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Sinker", velo: 92.6, spin: 2329, ivb: 9.0, hb: 16.8, ext: 5.3, result: "Groundout", batter: "Landen Johnson" },
      // Matt Evans
      { pitchType: "Slider", velo: 81.3, spin: 2158, ivb: 1.6, hb: -0.3, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 90.8, spin: 2342, ivb: 15.1, hb: 16.7, ext: 5.7, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 89.9, spin: 2246, ivb: 14.3, hb: 15.1, ext: 5.7, result: "Lineout", batter: "Matt Evans" },
      // Javon Hernandez
      { pitchType: "Slider", velo: 80.9, spin: 2122, ivb: 3.7, hb: 1.9, ext: 5.7, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Sinker", velo: 90.5, spin: 2299, ivb: 10.3, hb: 20.2, ext: 5.6, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 83.5, spin: 2200, ivb: 3.6, hb: -1.8, ext: 5.7, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 81.3, spin: 2131, ivb: 1.4, hb: 0.5, ext: 5.5, result: "Strikeout", batter: "Javon Hernandez" }
    ]
  }
};

export default pitchersData;
