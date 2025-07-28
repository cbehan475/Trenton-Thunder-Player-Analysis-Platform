const pitchersData = {
  "Gavin King": {
    1: [
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2267, ivb: 10.5, hb: 11.9, ext: 6.1, result: "Single", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2284, ivb: 18.9, hb: 8.6, ext: 5.8, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2307, ivb: 20.0, hb: 6.9, ext: 5.7, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2343, ivb: 14.4, hb: 11.6, ext: 6.1, result: "Hit By Pitch", batter: "Khi Holiday" },
      // Cardell Thibodeaux
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2147, ivb: 19.3, hb: 14.0, ext: 5.7, result: "Flyout", batter: "Cardell Thibodeaux" },
      // Seth Farni
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2241, ivb: 20.8, hb: 8.0, ext: 5.7, result: "Swinging Strike", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2215, ivb: 19.7, hb: 7.4, ext: 5.7, result: "Swinging Strike", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2102, ivb: 20.0, hb: 5.9, ext: 5.8, result: "Flyout", batter: "Seth Farni" },
      // Daniel Stewart
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2117, ivb: 15.7, hb: 5.9, ext: 5.6, result: "Single", batter: "Daniel Stewart" },
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2057, ivb: 18.8, hb: 9.0, ext: 5.7, result: "Caught Stealing 3B", batter: "JC Vanek" }
    ],
    2: [
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2155, ivb: 13.0, hb: 12.8, ext: 6.0, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2087, ivb: 18.6, hb: 7.3, ext: 5.8, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 1993, ivb: 17.1, hb: 8.1, ext: 5.7, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2053, ivb: 14.8, hb: 15.3, ext: 5.9, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2007, ivb: 15.3, hb: 14.3, ext: 5.8, result: "Walk", batter: "JC Vanek" },
      // Keegan Rodin
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2223, ivb: 17.8, hb: 12.0, ext: 5.8, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2085, ivb: 17.7, hb: 7.1, ext: 5.8, result: "Lineout", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2309, ivb: 18.4, hb: 9.6, ext: 5.7, result: "Foul", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2233, ivb: 22.1, hb: 4.4, ext: 5.5, result: "Single", batter: "Ty Powell" },
      // Trey Fenderson
      { pitchType: "", velo: 92.1, spin: 2157, ivb: 19.3, hb: 8.2, ext: 5.7, result: "Wild Pitch", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2157, ivb: 19.3, hb: 8.2, ext: 5.7, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2205, ivb: 21.2, hb: 7.7, ext: 5.6, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2140, ivb: 21.3, hb: 7.9, ext: 5.5, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2052, ivb: 18.9, hb: 7.2, ext: 5.7, result: "Walk", batter: "Trey Fenderson" },
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2090, ivb: 14.2, hb: 10.2, ext: 5.9, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Changeup", velo: 87.3, spin: 1916, ivb: 9.5, hb: 13.4, ext: 5.9, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2325, ivb: 20.8, hb: 9.0, ext: 5.8, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2278, ivb: 20.6, hb: 3.6, ext: 5.6, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2364, ivb: 17.8, hb: 4.8, ext: 5.5, result: "Pop Out", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2197, ivb: 20.7, hb: 10.0, ext: 5.5, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2120, ivb: 19.5, hb: 5.5, ext: 5.5, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2150, ivb: 22.0, hb: 5.8, ext: 5.6, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Changeup", velo: 86.1, spin: 1795, ivb: 11.9, hb: 12.7, ext: 6.0, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 81.1, spin: 2292, ivb: -6.9, hb: -1.8, ext: 5.3, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 82.0, spin: 2322, ivb: -5.7, hb: -2.3, ext: 5.4, result: "Ball In Dirt", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2207, ivb: 20.7, hb: 7.8, ext: 5.7, result: "Walk", batter: "Khi Holiday" },
      // Cardell Thibodeaux
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2299, ivb: 19.9, hb: 5.5, ext: 5.6, result: "Ball", batter: "Cardell Thibodeaux" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2144, ivb: 21.6, hb: 7.0, ext: 5.7, result: "Flyout", batter: "Cardell Thibodeaux" }
    ],
    3: [
      // Seth Farni
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2173, ivb: 17.5, hb: 10.8, ext: 5.6, result: "Swinging Strike", batter: "Seth Farni" },
      { pitchType: "Cutter", velo: 86.3, spin: 2195, ivb: 7.7, hb: 0.6, ext: 5.8, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2024, ivb: 20.0, hb: 6.4, ext: 5.5, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 1966, ivb: 18.1, hb: 9.4, ext: 5.8, result: "Groundout", batter: "Seth Farni" },
      // Daniel Stewart
      { pitchType: "Cutter", velo: 86.1, spin: 2188, ivb: 10.9, hb: -2.4, ext: 5.9, result: "Swinging Strike", batter: "Daniel Stewart" },
      { pitchType: "Cutter", velo: 87.6, spin: 2230, ivb: 8.6, hb: 4.2, ext: 6.0, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2087, ivb: 19.2, hb: 9.2, ext: 5.8, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2240, ivb: 21.9, hb: 2.6, ext: 5.6, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 80.1, spin: 2341, ivb: -11.6, hb: -2.3, ext: 5.4, result: "Single", batter: "Daniel Stewart" },
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2120, ivb: 21.0, hb: 9.0, ext: 5.6, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2027, ivb: 20.8, hb: 6.8, ext: 5.4, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2082, ivb: 21.0, hb: 8.3, ext: 5.5, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Cutter", velo: 88.1, spin: 2133, ivb: 10.6, hb: -2.2, ext: 5.8, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 84.4, spin: 1796, ivb: 8.4, hb: 14.2, ext: 5.7, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2104, ivb: 18.9, hb: 10.2, ext: 5.5, result: "Flyout", batter: "JC Vanek" },
      // Keegan Rodin
      { pitchType: "Cutter", velo: 88.1, spin: 2124, ivb: 11.9, hb: 3.8, ext: 5.9, result: "Single", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2167, ivb: 17.1, hb: 10.8, ext: 5.6, result: "Flyout", batter: "Ty Powell" }
    ],
    4: [
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2251, ivb: 21.2, hb: 5.1, ext: 5.5, result: "Swinging Strike", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2209, ivb: 20.1, hb: 8.1, ext: 5.5, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2210, ivb: 19.7, hb: 8.9, ext: 5.4, result: "Strikeout", batter: "Trey Fenderson" },
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2244, ivb: 21.3, hb: 2.9, ext: 5.1, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2079, ivb: 16.9, hb: 10.9, ext: 5.6, result: "Lineout", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Cutter", velo: 88.6, spin: 2107, ivb: 13.7, hb: 4.8, ext: 5.7, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 79.8, spin: 2296, ivb: -6.6, hb: 3.4, ext: 4.9, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 80.0, spin: 2315, ivb: -7.9, hb: 1.7, ext: 5.2, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2219, ivb: 22.3, hb: 4.4, ext: 5.4, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2094, ivb: 21.1, hb: 1.2, ext: 5.4, result: "Strikeout", batter: "Khi Holiday" }
    ],
    5: [
      // Cardell Thibodeaux
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 1908, ivb: 16.9, hb: 7.3, ext: 5.5, result: "Ball", batter: "Cardell Thibodeaux" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2178, ivb: 19.1, hb: 8.0, ext: 5.6, result: "Called Strike", batter: "Cardell Thibodeaux" },
      { pitchType: "Curveball", velo: 81.1, spin: 2319, ivb: -5.0, hb: -0.2, ext: 5.0, result: "Ball", batter: "Cardell Thibodeaux" },
      { pitchType: "Sinker", velo: 91.2, spin: 2298, ivb: 14.4, hb: 14.4, ext: 5.6, result: "Ball", batter: "Cardell Thibodeaux" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2168, ivb: 21.5, hb: 9.5, ext: 5.5, result: "Walk", batter: "Cardell Thibodeaux" },
      // Seth Farni
      { pitchType: "", velo: 90.2, spin: 2141, ivb: 21.1, hb: 8.2, ext: 5.5, result: "Stolen Base 2B", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2141, ivb: 21.1, hb: 8.2, ext: 5.5, result: "Called Strike", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2195, ivb: 21.8, hb: 9.2, ext: 5.6, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Cutter", velo: 90.2, spin: 2299, ivb: 12.1, hb: 2.0, ext: 5.9, result: "Flyout", batter: "Seth Farni" },
      // Daniel Stewart
      { pitchType: "Curveball", velo: 81.6, spin: 2280, ivb: -7.6, hb: -0.4, ext: 5.0, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2045, ivb: 20.9, hb: 1.5, ext: 5.6, result: "Swinging Strike", batter: "Daniel Stewart" },
      { pitchType: "", velo: 91.1, spin: 2222, ivb: 19.4, hb: 14.6, ext: 5.8, result: "Wild Pitch", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2222, ivb: 19.4, hb: 14.6, ext: 5.8, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2096, ivb: 21.9, hb: 2.0, ext: 5.6, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2160, ivb: 20.5, hb: 0.2, ext: 5.4, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Cutter", velo: 86.6, spin: 2182, ivb: 8.2, hb: 1.0, ext: 5.9, result: "Single", batter: "Daniel Stewart" },
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2075, ivb: 18.3, hb: 7.3, ext: 5.7, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 84.4, spin: 1777, ivb: 12.0, hb: 17.6, ext: 5.8, result: "Ball In Dirt", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2158, ivb: 18.5, hb: 11.7, ext: 5.9, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2222, ivb: 23.8, hb: 4.2, ext: 5.7, result: "Ball In Dirt", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2076, ivb: 19.4, hb: 9.3, ext: 5.7, result: "Pop Out", batter: "JC Vanek" },
      // Keegan Rodin
      { pitchType: "Cutter", velo: 87.7, spin: 2208, ivb: 11.5, hb: 4.2, ext: 5.8, result: "Groundout", batter: "Keegan Rodin" }
    ]
  },
  "Paulo Noris": {
    6: [
      // Ty Powell
      { pitchType: "Cutter", velo: 84.8, spin: 1983, ivb: 16.4, hb: 3.4, ext: 5.9, result: "Called Strike", batter: "Ty Powell" },
      { pitchType: "Changeup", velo: 76.2, spin: 2113, ivb: 3.4, hb: 18.3, ext: 5.7, result: "Single", batter: "Ty Powell" },
      // Trey Fenderson
      { pitchType: "Curveball", velo: 78.1, spin: 1932, ivb: 3.7, hb: 2.1, ext: 5.4, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 73.4, spin: 1872, ivb: -7.3, hb: -10.0, ext: 5.3, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 84.4, spin: 1983, ivb: 19.0, hb: 6.3, ext: 5.7, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Cutter", velo: 84.7, spin: 1811, ivb: 15.6, hb: 6.1, ext: 5.9, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "", velo: 84.4, spin: 2007, ivb: 16.0, hb: 2.9, ext: 5.9, result: "Stolen Base 2B", batter: "Trey Fenderson" },
      { pitchType: "Cutter", velo: 84.4, spin: 2007, ivb: 16.0, hb: 2.9, ext: 5.9, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 77.4, spin: 1921, ivb: 2.2, hb: -7.6, ext: 5.5, result: "Single", batter: "Trey Fenderson" },
      // Max Johnson
      { pitchType: "Cutter", velo: 84.3, spin: 1898, ivb: 19.0, hb: 4.1, ext: 5.9, result: "Foul Bunt", batter: "Max Johnson" },
      { pitchType: "", velo: 85.3, spin: 1988, ivb: 21.9, hb: 4.7, ext: 5.8, result: "Stolen Base 2B", batter: "Max Johnson" },
      { pitchType: "Cutter", velo: 85.3, spin: 1988, ivb: 21.9, hb: 4.7, ext: 5.8, result: "Swinging Strike", batter: "Max Johnson" },
      { pitchType: "Changeup", velo: 77.6, spin: 2003, ivb: 7.6, hb: 16.7, ext: 5.8, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Curveball", velo: 75.3, spin: 1822, ivb: -8.5, hb: -3.9, ext: 5.2, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Cutter", velo: 86.2, spin: 2006, ivb: 17.2, hb: 3.0, ext: 5.8, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Changeup", velo: 77.1, spin: 2058, ivb: 12.3, hb: 17.2, ext: 5.7, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Cutter", velo: 84.7, spin: 1870, ivb: 14.2, hb: 2.2, ext: 5.8, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Curveball", velo: 78.1, spin: 1961, ivb: 2.0, hb: 2.7, ext: 5.3, result: "Ball In Dirt", batter: "Max Johnson" },
      { pitchType: "Changeup", velo: 76.4, spin: 2027, ivb: 8.4, hb: 16.7, ext: 5.7, result: "Walk", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 85.0, spin: 2047, ivb: 18.0, hb: 5.8, ext: 6.1, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Cutter", velo: 85.3, spin: 2044, ivb: 18.2, hb: 4.7, ext: 5.9, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 73.3, spin: 1905, ivb: -9.9, hb: -10.7, ext: 5.1, result: "Swinging Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 74.6, spin: 1951, ivb: -8.6, hb: -10.4, ext: 5.0, result: "Ball In Dirt", batter: "Khi Holiday" },
      { pitchType: "Cutter", velo: 84.3, spin: 1992, ivb: 17.9, hb: 2.7, ext: 6.0, result: "Forceout", batter: "Khi Holiday" },
      // Cardell Thibodeaux
      { pitchType: "", velo: 84.1, spin: 2127, ivb: 21.0, hb: 6.4, ext: 5.8, result: "Stolen Base 2B", batter: "Cardell Thibodeaux" },
      { pitchType: "Four-Seam Fastball", velo: 84.1, spin: 2127, ivb: 21.0, hb: 6.4, ext: 5.8, result: "Called Strike", batter: "Cardell Thibodeaux" },
      { pitchType: "Changeup", velo: 78.3, spin: 2007, ivb: 4.4, hb: 18.7, ext: 5.8, result: "Single", batter: "Cardell Thibodeaux" },
      // Seth Farni
      { pitchType: "Four-Seam Fastball", velo: 85.1, spin: 1959, ivb: 19.6, hb: 6.1, ext: 5.7, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Curveball", velo: 72.3, spin: 1997, ivb: -6.8, hb: -9.6, ext: 5.0, result: "Called Strike", batter: "Seth Farni" },
      { pitchType: "Curveball", velo: 72.7, spin: 1929, ivb: -0.9, hb: -6.7, ext: 5.2, result: "Strikeout", batter: "Seth Farni" },
      // Daniel Stewart
      { pitchType: "Curveball", velo: 72.9, spin: 2019, ivb: 2.9, hb: -8.3, ext: 5.2, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "", velo: 83.8, spin: 1881, ivb: 16.0, hb: 3.2, ext: 5.9, result: "Stolen Base 2B", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 83.8, spin: 1881, ivb: 16.0, hb: 3.2, ext: 5.9, result: "Called Strike", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 82.8, spin: 1855, ivb: 15.9, hb: 2.2, ext: 5.9, result: "Called Strike", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 74.7, spin: 1996, ivb: 0.8, hb: -3.8, ext: 5.1, result: "Ball In Dirt", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 74.6, spin: 1738, ivb: 3.0, hb: -0.3, ext: 5.2, result: "Single", batter: "Daniel Stewart" },
      // JC Vanek
      { pitchType: "Slider", velo: 83.1, spin: 1818, ivb: 13.9, hb: 3.1, ext: 5.8, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 83.6, spin: 1899, ivb: 14.9, hb: 3.1, ext: 5.8, result: "Double", batter: "JC Vanek" },
      // Keegan Rodin
      { pitchType: "Curveball", velo: 73.5, spin: 1878, ivb: -6.1, hb: -6.1, ext: 5.1, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 83.8, spin: 1981, ivb: 14.5, hb: 4.9, ext: 5.8, result: "Foul Tip", batter: "Keegan Rodin" },
      { pitchType: "Changeup", velo: 84.5, spin: 2045, ivb: 16.1, hb: 5.6, ext: 5.8, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 77.0, spin: 1896, ivb: 3.6, hb: 2.5, ext: 5.5, result: "Ball In Dirt", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 83.0, spin: 2023, ivb: 18.0, hb: 2.3, ext: 6.0, result: "Single", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Curveball", velo: 74.5, spin: 1991, ivb: -3.4, hb: -2.7, ext: 5.3, result: "Called Strike", batter: "Ty Powell" },
      { pitchType: "", velo: 76.2, spin: 1964, ivb: 2.2, hb: 17.7, ext: 5.7, result: "Stolen Base 2B", batter: "Ty Powell" },
      { pitchType: "Changeup", velo: 76.2, spin: 1964, ivb: 2.2, hb: 17.7, ext: 5.7, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Slider", velo: 84.2, spin: 1812, ivb: 9.4, hb: 4.7, ext: 5.7, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Slider", velo: 83.5, spin: 1916, ivb: 9.8, hb: 5.1, ext: 5.9, result: "Called Strike", batter: "Ty Powell" }
    ]
  },
  "Eddie Smink": {
    6: [
      // Ty Powell
      { pitchType: "Sinker", velo: 90.7, spin: 1770, ivb: 14.7, hb: 12.9, ext: 5.6, result: "Strikeout", batter: "Ty Powell" }
    ],
    7: [
      // Trey Fenderson
      { pitchType: "Sinker", velo: 89.1, spin: 2045, ivb: 14.4, hb: 12.9, ext: 5.4, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 78.1, spin: 2258, ivb: -0.6, hb: -4.3, ext: 4.9, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 88.3, spin: 2099, ivb: 18.9, hb: 16.2, ext: 5.6, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 69.6, spin: 2269, ivb: -13.4, hb: -15.7, ext: 5.4, result: "Double", batter: "Trey Fenderson" },
      // Max Johnson
      { pitchType: "Sinker", velo: 87.4, spin: 1915, ivb: 12.5, hb: 16.3, ext: 5.5, result: "Called Strike", batter: "Max Johnson" },
      { pitchType: "Changeup", velo: 87.0, spin: 1907, ivb: 16.6, hb: 14.4, ext: 5.4, result: "Lineout", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Sinker", velo: 87.5, spin: 2091, ivb: 11.8, hb: 14.7, ext: 5.4, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 76.6, spin: 2345, ivb: 0.5, hb: -5.1, ext: 5.1, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 2001, ivb: 16.1, hb: 12.3, ext: 5.7, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 87.7, spin: 2054, ivb: 17.4, hb: 8.0, ext: 5.6, result: "Swinging Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 67.9, spin: 2309, ivb: -13.7, hb: -14.4, ext: 4.9, result: "Ball In Dirt", batter: "Khi Holiday" },
      { pitchType: "Changeup", velo: 87.0, spin: 2045, ivb: 13.9, hb: 14.0, ext: 5.5, result: "Groundout", batter: "Khi Holiday" },
      // Cardell Thibodeaux
      { pitchType: "Four-Seam Fastball", velo: 87.3, spin: 1987, ivb: 16.7, hb: 12.9, ext: 5.8, result: "Foul", batter: "Cardell Thibodeaux" },
      { pitchType: "Sinker", velo: 88.0, spin: 1938, ivb: 13.6, hb: 15.1, ext: 5.7, result: "Foul", batter: "Cardell Thibodeaux" },
      { pitchType: "Curveball", velo: 78.5, spin: 1368, ivb: 2.1, hb: 8.4, ext: 5.2, result: "Ball", batter: "Cardell Thibodeaux" },
      { pitchType: "Sinker", velo: 89.0, spin: 2028, ivb: 12.8, hb: 14.5, ext: 5.6, result: "Foul", batter: "Cardell Thibodeaux" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2091, ivb: 17.6, hb: 9.5, ext: 5.6, result: "Ball", batter: "Cardell Thibodeaux" },
      { pitchType: "Sinker", velo: 90.2, spin: 2142, ivb: 9.3, hb: 15.5, ext: 5.5, result: "Strikeout", batter: "Cardell Thibodeaux" }
    ]
  },
  "Jarrette Bonet": {
    8: [
      // Seth Farni
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2276, ivb: 19.3, hb: 8.5, ext: 5.6, result: "Foul Tip", batter: "Seth Farni" },
      { pitchType: "Changeup", velo: 85.1, spin: 2079, ivb: 14.2, hb: 12.2, ext: 5.8, result: "Called Strike", batter: "Seth Farni" },
      { pitchType: "Slider", velo: 82.0, spin: 2333, ivb: -0.7, hb: -9.6, ext: 5.1, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2297, ivb: 19.9, hb: 9.3, ext: 5.8, result: "Strikeout", batter: "Seth Farni" },
      // Daniel Stewart
      { pitchType: "Slider", velo: 80.7, spin: 2378, ivb: 2.0, hb: -9.6, ext: 5.2, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2229, ivb: 19.0, hb: 9.3, ext: 5.2, result: "Double", batter: "Daniel Stewart" },
      // JC Vanek
      { pitchType: "Sinker", velo: 92.6, spin: 2315, ivb: 8.9, hb: 16.9, ext: 5.4, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2281, ivb: 18.3, hb: 11.7, ext: 5.6, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Cutter", velo: 88.4, spin: 2198, ivb: 8.4, hb: 5.1, ext: 5.4, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2431, ivb: 17.3, hb: 11.3, ext: 5.9, result: "Strikeout", batter: "JC Vanek" },
      // Keegan Rodin
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2323, ivb: 21.4, hb: 8.9, ext: 5.8, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 83.7, spin: 2461, ivb: 3.6, hb: -5.9, ext: 5.2, result: "Ball In Dirt", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2335, ivb: 17.2, hb: 12.1, ext: 5.5, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2288, ivb: 21.1, hb: 10.4, ext: 5.6, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2332, ivb: 19.7, hb: 9.4, ext: 5.8, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2309, ivb: 18.9, hb: 9.9, ext: 6.0, result: "Strikeout", batter: "Keegan Rodin" }
    ]
  },
  "Clayton Johnson": {
    9: [
      // Ty Powell
      { pitchType: "Sinker", velo: 94.1, spin: 2293, ivb: 14.6, hb: 13.1, ext: 6.8, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2257, ivb: 17.9, hb: 9.4, ext: 7.1, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 94.3, spin: 2285, ivb: 18.1, hb: 12.7, ext: 7.0, result: "Foul", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 88.6, spin: 2218, ivb: 7.8, hb: 19.1, ext: 6.7, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2210, ivb: 15.4, hb: 10.1, ext: 6.8, result: "Strikeout", batter: "Ty Powell" },
      // Trey Fenderson
      { pitchType: "Sinker", velo: 94.2, spin: 2153, ivb: 13.4, hb: 11.6, ext: 7.0, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 94.7, spin: 2085, ivb: 14.7, hb: 12.4, ext: 6.8, result: "Swinging Strike", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 83.9, spin: 2213, ivb: -5.6, hb: -8.9, ext: 6.2, result: "Strikeout", batter: "Trey Fenderson" },
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 1954, ivb: 14.7, hb: 11.2, ext: 6.9, result: "Called Strike", batter: "Max Johnson" },
      { pitchType: "Sinker", velo: 95.3, spin: 2144, ivb: 14.0, hb: 13.2, ext: 6.9, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2089, ivb: 17.9, hb: 10.3, ext: 6.8, result: "Strikeout", batter: "Max Johnson" }
    ]
  }
};

export default pitchersData;

    