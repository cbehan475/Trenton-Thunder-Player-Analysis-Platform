const pitchersData = {
  "Jude Abbadessa": {
    1: [
      // Carlos Castillo
      { pitchType: "Sinker", velo: 93.2, spin: 2023, ivb: 11.4, hb: 14.7, ext: 5.4, result: "Ball", batter: "Carlos Castillo" },
      { pitchType: "Sinker", velo: 93.0, spin: 1934, ivb: 7.1, hb: 15.8, ext: 5.4, result: "Ball", batter: "Carlos Castillo" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2010, ivb: 11.0, hb: 9.3, ext: 5.3, result: "Called Strike", batter: "Carlos Castillo" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 1982, ivb: 10.1, hb: 9.1, ext: 5.4, result: "Foul", batter: "Carlos Castillo" },
      { pitchType: "Slider", velo: 82.1, spin: 2197, ivb: -4.7, hb: -9.0, ext: 4.9, result: "Strikeout", batter: "Carlos Castillo" },
      // Ryan Kennell
      { pitchType: "Curveball", velo: 82.2, spin: 2299, ivb: -8.3, hb: -8.1, ext: 4.8, result: "Single", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Sinker", velo: 93.0, spin: 2152, ivb: 6.9, hb: 15.9, ext: 5.5, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 87.0, spin: 1973, ivb: 8.0, hb: 14.8, ext: 5.8, result: "Grounded Into DP", batter: "Boston Smith" }
    ],
    2: [
      // Matthew Bardowell
      { pitchType: "Slider", velo: 81.6, spin: 2207, ivb: 4.7, hb: -7.2, ext: 4.7, result: "Groundout", batter: "Matthew Bardowell" },
      // Jack Lausch
      { pitchType: "Curveball", velo: 79.5, spin: 2294, ivb: -2.8, hb: -13.0, ext: 4.5, result: "Ball", batter: "Jack Lausch" },
      { pitchType: "Sinker", velo: 92.1, spin: 2113, ivb: 7.1, hb: 15.8, ext: 5.5, result: "Swinging Strike", batter: "Jack Lausch" },
      { pitchType: "Slider", velo: 81.9, spin: 2154, ivb: -4.1, hb: -9.2, ext: 4.9, result: "Ball", batter: "Jack Lausch" },
      { pitchType: "Sinker", velo: 92.2, spin: 2058, ivb: 3.5, hb: 14.9, ext: 5.3, result: "Foul", batter: "Jack Lausch" },
      { pitchType: "Changeup", velo: 87.5, spin: 1970, ivb: -0.4, hb: 13.2, ext: 5.6, result: "Ball", batter: "Jack Lausch" },
      { pitchType: "Sinker", velo: 93.0, spin: 2115, ivb: 13.5, hb: 13.4, ext: 5.3, result: "Walk", batter: "Jack Lausch" },
      // Matt Ilgenfritz
      { pitchType: "", velo: 82.3, spin: 2314, ivb: 0.5, hb: -8.0, ext: 4.9, result: "Stolen Base 2B", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.3, spin: 2314, ivb: 0.5, hb: -8.0, ext: 4.9, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.6, spin: 2280, ivb: 0.1, hb: -8.3, ext: 4.7, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.6, spin: 2287, ivb: -4.0, hb: -8.8, ext: 4.9, result: "Strikeout", batter: "Matt Ilgenfritz" },
      // Armani Newton
      { pitchType: "Changeup", velo: 85.9, spin: 1867, ivb: 0.8, hb: 17.1, ext: 5.7, result: "Ball In Dirt", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 81.7, spin: 2276, ivb: -4.0, hb: -9.8, ext: 4.7, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 93.4, spin: 2154, ivb: 8.0, hb: 13.5, ext: 5.3, result: "Ball In Dirt", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 93.1, spin: 2278, ivb: 10.2, hb: 11.4, ext: 5.6, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 92.9, spin: 2224, ivb: 10.5, hb: 12.2, ext: 5.5, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 93.1, spin: 2154, ivb: 10.9, hb: 16.2, ext: 5.3, result: "Strikeout", batter: "Armani Newton" }
    ],
    3: [
      // Amman Dewberry
      { pitchType: "Slider", velo: 81.1, spin: 2249, ivb: -1.0, hb: -9.0, ext: 4.6, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 82.0, spin: 2211, ivb: 5.2, hb: -6.6, ext: 4.7, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 92.4, spin: 2078, ivb: 6.1, hb: 15.0, ext: 5.7, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2049, ivb: 11.3, hb: 8.5, ext: 5.4, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 1951, ivb: 11.2, hb: 8.1, ext: 5.7, result: "Walk", batter: "Amman Dewberry" },
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2058, ivb: 11.8, hb: 9.7, ext: 5.5, result: "Called Strike", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 82.8, spin: 2408, ivb: -3.8, hb: -10.6, ext: 4.9, result: "Foul", batter: "Jordan Peyton" },
      { pitchType: "Curveball", velo: 82.0, spin: 2310, ivb: -2.6, hb: -11.1, ext: 4.6, result: "Strikeout", batter: "Jordan Peyton" },
      // Carlos Castillo
      { pitchType: "Sinker", velo: 92.7, spin: 2047, ivb: 13.0, hb: 11.7, ext: 5.7, result: "Single", batter: "Carlos Castillo" },
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2033, ivb: 12.4, hb: 9.8, ext: 5.8, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 83.2, spin: 2206, ivb: -2.2, hb: -8.1, ext: 5.0, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 82.0, spin: 2242, ivb: -2.8, hb: -10.5, ext: 4.7, result: "Single", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Slider", velo: 82.1, spin: 2336, ivb: -2.7, hb: -11.5, ext: 4.6, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 93.2, spin: 2239, ivb: 12.4, hb: 14.5, ext: 5.5, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.9, spin: 2120, ivb: 10.9, hb: 14.6, ext: 5.3, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 82.6, spin: 2301, ivb: 1.4, hb: -9.3, ext: 5.0, result: "Walk", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Sinker", velo: 93.4, spin: 1985, ivb: 12.4, hb: 13.1, ext: 5.8, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Sinker", velo: 92.4, spin: 1987, ivb: 13.1, hb: 12.4, ext: 5.7, result: "Grounded Into DP", batter: "Matthew Bardowell" }
    ],
    4: [
      // Jack Lausch
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2110, ivb: 10.6, hb: 9.0, ext: 5.7, result: "Groundout", batter: "Jack Lausch" },
      // Matt Ilgenfritz
      { pitchType: "Slider", velo: 81.1, spin: 2194, ivb: -0.8, hb: -5.9, ext: 4.9, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2054, ivb: 13.7, hb: 7.1, ext: 5.6, result: "Groundout", batter: "Matt Ilgenfritz" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2053, ivb: 13.2, hb: 9.8, ext: 5.4, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Changeup", velo: 87.7, spin: 2114, ivb: 0.1, hb: 18.9, ext: 5.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2147, ivb: 15.5, hb: 8.4, ext: 5.3, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 93.6, spin: 2219, ivb: 10.6, hb: 18.0, ext: 5.5, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 83.5, spin: 2246, ivb: 1.7, hb: -5.2, ext: 4.9, result: "Strikeout", batter: "Armani Newton" }
    ],
    5: [
      // Amman Dewberry
      { pitchType: "Sinker", velo: 93.1, spin: 2133, ivb: 11.3, hb: 13.2, ext: 5.3, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 81.9, spin: 2232, ivb: -1.8, hb: -7.4, ext: 4.8, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 92.6, spin: 2139, ivb: 7.6, hb: 16.4, ext: 5.4, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 91.8, spin: 2089, ivb: 9.5, hb: 14.2, ext: 5.8, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 90.7, spin: 1977, ivb: 7.5, hb: 16.7, ext: 5.5, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 90.3, spin: 1993, ivb: 9.5, hb: 14.6, ext: 5.6, result: "Foul", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 91.2, spin: 1933, ivb: 12.9, hb: 11.9, ext: 5.6, result: "Strikeout", batter: "Amman Dewberry" },
      // Jordan Peyton
      { pitchType: "Sinker", velo: 92.5, spin: 1995, ivb: 11.2, hb: 14.1, ext: 5.5, result: "Single", batter: "Jordan Peyton" },
      // Carlos Castillo
      { pitchType: "Slider", velo: 81.7, spin: 2260, ivb: -0.2, hb: -12.2, ext: 4.8, result: "Ball", batter: "Carlos Castillo" },
      { pitchType: "Sinker", velo: 92.4, spin: 2056, ivb: 10.9, hb: 12.7, ext: 5.7, result: "Grounded Into DP", batter: "Carlos Castillo" }
    ],
    6: [
      // Ryan Kennell
      { pitchType: "Sinker", velo: 92.7, spin: 2075, ivb: 11.9, hb: 13.5, ext: 5.4, result: "Foul", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 80.7, spin: 2291, ivb: -3.2, hb: -11.4, ext: 5.1, result: "Flyout", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Changeup", velo: 86.1, spin: 2076, ivb: 8.3, hb: 17.1, ext: 5.6, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.4, spin: 2089, ivb: 11.8, hb: 16.1, ext: 5.4, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 91.9, spin: 2083, ivb: 12.2, hb: 13.3, ext: 5.5, result: "Flyout", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2035, ivb: 13.3, hb: 9.8, ext: 5.4, result: "Swinging Strike", batter: "Matthew Bardowell" },
      { pitchType: "Slider", velo: 82.0, spin: 2205, ivb: -1.1, hb: -8.7, ext: 5.2, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Slider", velo: 81.4, spin: 2236, ivb: -0.7, hb: -12.1, ext: 5.0, result: "Swinging Strike", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2057, ivb: 15.7, hb: 11.7, ext: 5.6, result: "Field Error", batter: "Matthew Bardowell" },
      // Jack Lausch
      { pitchType: "Sinker", velo: 92.2, spin: 2102, ivb: 10.6, hb: 14.7, ext: 5.5, result: "Foul", batter: "Jack Lausch" },
      { pitchType: "Slider", velo: 82.4, spin: 2268, ivb: 1.6, hb: -6.6, ext: 4.8, result: "Ball In Dirt", batter: "Jack Lausch" },
      { pitchType: "Slider", velo: 82.5, spin: 2247, ivb: 1.6, hb: -7.6, ext: 4.8, result: "Pop Out", batter: "Jack Lausch" }
    ]
  },
  "Aidan Weaver": {
    7: [
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 96.7, spin: 2163, ivb: 17.0, hb: 5.0, ext: 6.4, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 97.6, spin: 2254, ivb: 18.5, hb: 0.8, ext: 6.4, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 98.5, spin: 2275, ivb: 15.4, hb: 11.9, ext: 6.4, result: "Strikeout", batter: "Matt Ilgenfritz" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 96.9, spin: 2203, ivb: 18.3, hb: 3.9, ext: 6.5, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 96.8, spin: 2201, ivb: 11.8, hb: 8.9, ext: 6.5, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2154, ivb: 7.8, hb: -1.4, ext: 6.4, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 96.9, spin: 2221, ivb: 10.8, hb: 10.7, ext: 6.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2106, ivb: 15.9, hb: 2.3, ext: 6.4, result: "Triple", batter: "Armani Newton" },
      // Amman Dewberry
      { pitchType: "Slider", velo: 87.2, spin: 2155, ivb: 1.3, hb: -1.9, ext: 6.3, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Changeup", velo: 81.2, spin: 1764, ivb: 3.2, hb: 11.1, ext: 6.4, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 1914, ivb: 11.9, hb: 5.3, ext: 6.5, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2148, ivb: 15.9, hb: 5.8, ext: 6.2, result: "Single", batter: "Amman Dewberry" },
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 96.8, spin: 2232, ivb: 15.3, hb: 5.4, ext: 6.4, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2234, ivb: 12.3, hb: 8.4, ext: 6.5, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 87.2, spin: 2220, ivb: 3.1, hb: -2.6, ext: 6.4, result: "Ball In Dirt", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2177, ivb: 7.4, hb: 14.5, ext: 6.3, result: "Walk", batter: "Jordan Peyton" },
      // Carlos Castillo
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 1914, ivb: 13.8, hb: 5.2, ext: 6.5, result: "Called Strike", batter: "Carlos Castillo" },
      { pitchType: "Slider", velo: 87.6, spin: 2045, ivb: 2.8, hb: -1.6, ext: 6.5, result: "Ball In Dirt", batter: "Carlos Castillo" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2002, ivb: 12.3, hb: 7.6, ext: 6.4, result: "Swinging Strike", batter: "Carlos Castillo" },
      { pitchType: "Four-Seam Fastball", velo: 96.6, spin: 2044, ivb: 13.5, hb: 8.5, ext: 6.2, result: "Grounded Into DP", batter: "Carlos Castillo" }
    ]
  },
  "Luke Delongchamp": {
    8: [
      // Ryan Kennell
      { pitchType: "Sinker", velo: 87.8, spin: 1920, ivb: 11.9, hb: 16.5, ext: 5.7, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Changeup", velo: 87.0, spin: 1967, ivb: 9.8, hb: 15.3, ext: 5.7, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Changeup", velo: 87.1, spin: 2074, ivb: 12.1, hb: 17.7, ext: 5.7, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Changeup", velo: 80.5, spin: 1430, ivb: 10.9, hb: 13.4, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Changeup", velo: 86.5, spin: 2002, ivb: 7.8, hb: 17.4, ext: 5.7, result: "Walk", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Changeup", velo: 81.7, spin: 1605, ivb: 14.3, hb: 12.1, ext: 5.8, result: "Forceout", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Curveball", velo: 78.5, spin: 1996, ivb: 2.1, hb: -1.0, ext: 5.9, result: "Groundout", batter: "Matthew Bardowell" },
      // Jack Lausch
      { pitchType: "Changeup", velo: 80.8, spin: 1554, ivb: 13.5, hb: 13.0, ext: 5.9, result: "Called Strike", batter: "Jack Lausch" },
      { pitchType: "", velo: 82.1, spin: 1583, ivb: 8.4, hb: 15.8, ext: 5.7, result: "Wild Pitch", batter: "Jack Lausch" },
      { pitchType: "Changeup", velo: 82.1, spin: 1583, ivb: 8.4, hb: 15.8, ext: 5.7, result: "Ball", batter: "Jack Lausch" },
      { pitchType: "Sinker", velo: 89.1, spin: 1916, ivb: 16.0, hb: 16.4, ext: 5.7, result: "Ball", batter: "Jack Lausch" },
      { pitchType: "Changeup", velo: 81.1, spin: 1483, ivb: 12.8, hb: 13.4, ext: 5.6, result: "Foul", batter: "Jack Lausch" },
      { pitchType: "Sinker", velo: 88.8, spin: 2068, ivb: 14.5, hb: 16.7, ext: 5.8, result: "Ball", batter: "Jack Lausch" },
      { pitchType: "Changeup", velo: 81.7, spin: 1526, ivb: 9.9, hb: 11.4, ext: 5.6, result: "Walk", batter: "Jack Lausch" },
      // Matt Ilgenfritz
      { pitchType: "Curveball", velo: 77.8, spin: 2082, ivb: 0.9, hb: -2.0, ext: 5.8, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 78.9, spin: 2199, ivb: 2.1, hb: -1.5, ext: 5.9, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Changeup", velo: 80.8, spin: 1504, ivb: 11.0, hb: 10.8, ext: 5.8, result: "Ball In Dirt", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 79.2, spin: 2160, ivb: 1.2, hb: 0.9, ext: 5.9, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Curveball", velo: 77.0, spin: 2217, ivb: 2.3, hb: -1.6, ext: 5.4, result: "Strikeout", batter: "Matt Ilgenfritz" }
    ]
  },
  "Cooper McGrath": {
    9: [
      // Armani Newton
      { pitchType: "Cutter", velo: 87.2, spin: 2730, ivb: 2.1, hb: -0.8, ext: 6.5, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Cutter", velo: 86.6, spin: 2607, ivb: 3.6, hb: -1.5, ext: 6.6, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 92.6, spin: 2548, ivb: 5.1, hb: 8.1, ext: 6.4, result: "Strikeout", batter: "Armani Newton" },
      // Amman Dewberry
      { pitchType: "Sinker", velo: 93.1, spin: 2587, ivb: 9.5, hb: 5.2, ext: 6.4, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Cutter", velo: 87.3, spin: 2605, ivb: 1.2, hb: -1.4, ext: 6.6, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Cutter", velo: 87.4, spin: 2636, ivb: 0.0, hb: -1.8, ext: 6.5, result: "Groundout", batter: "Amman Dewberry" },
      // Jordan Peyton
      { pitchType: "Sinker", velo: 91.8, spin: 2474, ivb: 11.9, hb: 10.7, ext: 6.7, result: "Called Strike", batter: "Jordan Peyton" },
      { pitchType: "Cutter", velo: 87.5, spin: 2582, ivb: 1.3, hb: 0.3, ext: 6.6, result: "Foul", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2616, ivb: 9.3, hb: 2.3, ext: 6.5, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 82.4, spin: 2750, ivb: 1.5, hb: -15.1, ext: 6.4, result: "Foul", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 82.0, spin: 2840, ivb: -2.9, hb: -16.2, ext: 6.1, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Cutter", velo: 87.2, spin: 2661, ivb: -1.6, hb: -3.1, ext: 6.5, result: "Flyout", batter: "Jordan Peyton" }
    ]
  }
};

export default pitchersData;
