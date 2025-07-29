const pitchersData = {
  "Jude Abbadessa": {
    1: [
      // Max Hartman
      { pitchType: "Sinker", velo: 92.0, spin: 1989, ivb: 8.9, hb: 13.9, ext: 5.2, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 91.4, spin: 1946, ivb: 8.1, hb: 15.7, ext: 5.2, result: "Triple", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Slider", velo: 82.3, spin: 2155, ivb: 1.1, hb: -7.5, ext: 4.9, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Sinker", velo: 92.1, spin: 2053, ivb: 10.9, hb: 15.3, ext: 5.3, result: "Foul Tip", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 82.5, spin: 2060, ivb: 8.6, hb: -1.1, ext: 4.6, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 1894, ivb: 20.4, hb: 6.3, ext: 5.2, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 1889, ivb: 17.1, hb: 5.0, ext: 5.6, result: "Passed Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 1889, ivb: 17.1, hb: 5.0, ext: 5.6, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Sinker", velo: 92.0, spin: 1963, ivb: 5.9, hb: 16.2, ext: 5.3, result: "Walk", batter: "Khi Holiday" },
      // Chase Heath
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2014, ivb: 17.0, hb: 10.0, ext: 5.5, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 92.2, spin: 2018, ivb: 10.8, hb: 13.5, ext: 5.5, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 93.1, spin: 2027, ivb: 10.7, hb: 12.2, ext: 5.4, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 82.4, spin: 2286, ivb: 6.5, hb: -11.4, ext: 4.6, result: "Caught Stealing 2B", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 82.4, spin: 2286, ivb: 6.5, hb: -11.4, ext: 4.6, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 83.3, spin: 2124, ivb: 3.9, hb: -8.4, ext: 4.8, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 82.7, spin: 2227, ivb: 5.6, hb: -7.9, ext: 4.7, result: "Strikeout", batter: "Chase Heath" },
      // Michal Sindelka
      { pitchType: "Slider", velo: 81.9, spin: 2299, ivb: 1.4, hb: -13.6, ext: 4.6, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 92.1, spin: 1998, ivb: 14.9, hb: 15.1, ext: 5.4, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 91.7, spin: 1902, ivb: 9.1, hb: 17.7, ext: 5.3, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 92.3, spin: 1877, ivb: 10.5, hb: 18.4, ext: 5.5, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 92.1, spin: 1995, ivb: 9.6, hb: 17.4, ext: 5.3, result: "Walk", batter: "Michal Sindelka" },
      // JC Vanek
      { pitchType: "Slider", velo: 84.3, spin: 2207, ivb: 6.5, hb: -4.3, ext: 4.6, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 83.9, spin: 2199, ivb: -0.3, hb: -3.8, ext: 4.7, result: "Ball In Dirt", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 83.4, spin: 2284, ivb: -3.2, hb: -7.0, ext: 4.7, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 92.0, spin: 2042, ivb: 4.3, hb: 15.9, ext: 5.3, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 92.2, spin: 2003, ivb: 7.5, hb: 14.1, ext: 5.3, result: "Walk", batter: "JC Vanek" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 83.6, spin: 2141, ivb: -3.4, hb: -3.8, ext: 4.6, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 92.4, spin: 2082, ivb: 12.6, hb: 11.6, ext: 5.6, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 92.4, spin: 2083, ivb: 8.7, hb: 13.9, ext: 5.6, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 92.8, spin: 1994, ivb: 8.1, hb: 15.0, ext: 5.6, result: "Swinging Strike", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 92.7, spin: 2030, ivb: 11.3, hb: 14.2, ext: 5.3, result: "Flyout", batter: "Trey Fenderson" }
    ],
    2: [
      // Seth Farni
      { pitchType: "Sinker", velo: 91.4, spin: 1982, ivb: 6.5, hb: 17.2, ext: 5.1, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Sinker", velo: 90.8, spin: 2038, ivb: 15.4, hb: 13.5, ext: 5.2, result: "Called Strike", batter: "Seth Farni" },
      { pitchType: "Sinker", velo: 91.2, spin: 2055, ivb: 8.4, hb: 14.5, ext: 5.2, result: "Single", batter: "Seth Farni" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 1975, ivb: 15.2, hb: 12.7, ext: 5.1, result: "Single", batter: "Ty Powell" },
      // Keegan Rodin
      { pitchType: "Slider", velo: 81.7, spin: 2144, ivb: -2.0, hb: -9.6, ext: 4.5, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 83.2, spin: 2052, ivb: 3.3, hb: -5.8, ext: 4.7, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 82.1, spin: 2137, ivb: -2.0, hb: -7.5, ext: 4.5, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Sinker", velo: 91.1, spin: 2042, ivb: 5.6, hb: 15.6, ext: 5.4, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Sinker", velo: 92.9, spin: 2048, ivb: 6.0, hb: 14.0, ext: 5.4, result: "Strikeout", batter: "Keegan Rodin" },
      // Max Hartman
      { pitchType: "Slider", velo: 82.2, spin: 2159, ivb: -1.9, hb: -10.3, ext: 4.5, result: "Called Strike", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 82.1, spin: 2152, ivb: -1.2, hb: -7.7, ext: 4.4, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 82.0, spin: 2316, ivb: 0.3, hb: -10.4, ext: 4.5, result: "Strikeout", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Slider", velo: 81.7, spin: 2082, ivb: 1.4, hb: -4.2, ext: 4.5, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 81.7, spin: 2075, ivb: -0.4, hb: -5.3, ext: 4.5, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 82.5, spin: 2189, ivb: -1.6, hb: -4.7, ext: 4.6, result: "Strikeout", batter: "Khi Holiday" }
    ],
    3: [
      // Chase Heath
      { pitchType: "Sinker", velo: 91.6, spin: 2059, ivb: 10.9, hb: 17.9, ext: 5.4, result: "Hit By Pitch", batter: "Chase Heath" },
      // Michal Sindelka
      { pitchType: "Slider", velo: 80.9, spin: 2173, ivb: 9.1, hb: -6.0, ext: 4.6, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 91.4, spin: 1989, ivb: 8.7, hb: 17.1, ext: 5.4, result: "Wild Pitch", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 91.4, spin: 1989, ivb: 8.7, hb: 17.1, ext: 5.4, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 81.4, spin: 2231, ivb: 0.2, hb: -11.8, ext: 4.6, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 81.2, spin: 2158, ivb: 1.8, hb: -10.5, ext: 4.6, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 80.5, spin: 2128, ivb: -0.8, hb: -10.1, ext: 4.6, result: "Strikeout", batter: "Michal Sindelka" },
      // JC Vanek
      { pitchType: "Slider", velo: 82.0, spin: 2146, ivb: 4.1, hb: -12.0, ext: 4.6, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 81.3, spin: 2152, ivb: -2.3, hb: -7.7, ext: 4.5, result: "Ball In Dirt", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 91.3, spin: 1998, ivb: 11.4, hb: 16.7, ext: 5.4, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 81.5, spin: 2159, ivb: 4.6, hb: -10.8, ext: 4.6, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 91.5, spin: 2071, ivb: 9.4, hb: 18.6, ext: 5.4, result: "Walk", batter: "JC Vanek" },
      // Trey Fenderson
      { pitchType: "Curveball", velo: 81.2, spin: 2145, ivb: -4.0, hb: -8.7, ext: 4.7, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 91.0, spin: 1953, ivb: 7.2, hb: 13.2, ext: 5.4, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 90.4, spin: 2038, ivb: 6.1, hb: 16.6, ext: 5.3, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 81.3, spin: 2126, ivb: -4.0, hb: -10.6, ext: 4.6, result: "Forceout", batter: "Trey Fenderson" },
      // Seth Farni
      { pitchType: "Slider", velo: 81.5, spin: 2214, ivb: 2.5, hb: -9.6, ext: 4.5, result: "Called Strike", batter: "Seth Farni" },
      { pitchType: "Slider", velo: 82.3, spin: 2300, ivb: -4.0, hb: -5.3, ext: 4.6, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Slider", velo: 80.0, spin: 2334, ivb: 7.8, hb: -11.8, ext: 4.4, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Sinker", velo: 93.0, spin: 2162, ivb: 12.2, hb: 14.5, ext: 5.3, result: "Stolen Base 2B", batter: "Seth Farni" },
      { pitchType: "Sinker", velo: 93.0, spin: 2162, ivb: 12.2, hb: 14.5, ext: 5.3, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Slider", velo: 81.6, spin: 2250, ivb: 1.6, hb: -9.5, ext: 4.6, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Curveball", velo: 80.2, spin: 2174, ivb: -2.1, hb: -9.9, ext: 4.5, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Curveball", velo: 80.2, spin: 2204, ivb: -5.8, hb: -6.1, ext: 4.6, result: "Walk", batter: "Seth Farni" },
      // Ty Powell
      { pitchType: "Sinker", velo: 91.3, spin: 2000, ivb: 7.7, hb: 11.6, ext: 5.4, result: "Ball In Dirt", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 91.6, spin: 2084, ivb: 10.6, hb: 11.2, ext: 5.5, result: "Forceout", batter: "Ty Powell" }
    ],
    4: [
      // Keegan Rodin
      { pitchType: "Sinker", velo: 90.7, spin: 1999, ivb: 8.8, hb: 14.7, ext: 5.2, result: "Foul", batter: "Keegan Rodin" },
      { pitchType: "Curveball", velo: 80.0, spin: 2064, ivb: 0.3, hb: -10.1, ext: 4.5, result: "Single", batter: "Keegan Rodin" },
      // Max Hartman
      { pitchType: "Slider", velo: 79.5, spin: 2137, ivb: 4.2, hb: -11.2, ext: 4.7, result: "Catcher Pickoff Attempt 1B", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 79.5, spin: 2137, ivb: 4.2, hb: -11.2, ext: 4.7, result: "Missed Bunt", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 91.5, spin: 2043, ivb: 11.5, hb: 11.5, ext: 5.5, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 80.8, spin: 2094, ivb: 7.0, hb: -7.3, ext: 4.6, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 90.1, spin: 1948, ivb: 4.7, hb: 15.3, ext: 5.6, result: "Swinging Strike", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 89.9, spin: 1912, ivb: 11.5, hb: 15.9, ext: 5.4, result: "Forceout", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Curveball", velo: 79.8, spin: 2204, ivb: -3.0, hb: -5.4, ext: 4.5, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 80.4, spin: 2194, ivb: -5.4, hb: -9.8, ext: 4.4, result: "Stolen Base 2B", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 80.4, spin: 2194, ivb: -5.4, hb: -9.8, ext: 4.4, result: "Swinging Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 81.2, spin: 2280, ivb: -4.2, hb: -9.2, ext: 4.4, result: "Strikeout", batter: "Khi Holiday" },
      // Chase Heath
      { pitchType: "Slider", velo: 82.0, spin: 2211, ivb: 0.8, hb: -11.7, ext: 4.5, result: "Groundout", batter: "Chase Heath" }
    ]
  },
  "Kai Fyke": {
    6: [
      // Seth Farni
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2170, ivb: 14.6, hb: 3.7, ext: 5.5, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2070, ivb: 14.1, hb: 3.7, ext: 5.5, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2130, ivb: 16.2, hb: 4.4, ext: 5.7, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Changeup", velo: 85.1, spin: 1559, ivb: 2.7, hb: 14.2, ext: 5.3, result: "Single", batter: "Seth Farni" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2219, ivb: 18.8, hb: 6.3, ext: 5.5, result: "Foul", batter: "Ty Powell" },
      { pitchType: "Changeup", velo: 83.1, spin: 1520, ivb: 4.8, hb: 7.3, ext: 5.3, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Curveball", velo: 80.0, spin: 2728, ivb: -7.6, hb: -5.6, ext: 5.0, result: "Strikeout Double Play", batter: "Ty Powell" },
      // Keegan Rodin
      { pitchType: "Curveball", velo: 79.1, spin: 2713, ivb: -6.5, hb: -6.3, ext: 5.5, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Cutter", velo: 91.5, spin: 2181, ivb: 16.5, hb: -0.8, ext: 5.4, result: "Double", batter: "Keegan Rodin" },
      // Max Hartman
      { pitchType: "Slider", velo: 79.9, spin: 2725, ivb: -4.4, hb: -6.3, ext: 5.2, result: "Hit By Pitch", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2139, ivb: 17.4, hb: 2.4, ext: 5.5, result: "Groundout", batter: "Khi Holiday" }
    ],
    7: [
      // Chase Heath (Fyke)
      { pitchType: "Curveball", velo: 79.8, spin: 2675, ivb: -4.4, hb: -3.8, ext: 5.2, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2130, ivb: 16.8, hb: 6.1, ext: 5.4, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2196, ivb: 16.9, hb: 4.1, ext: 5.4, result: "Swinging Strike", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 82.1, spin: 2730, ivb: -1.2, hb: -3.0, ext: 5.2, result: "Single", batter: "Chase Heath" },
      // Michal Sindelka (Fyke)
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2211, ivb: 21.0, hb: -2.7, ext: 5.7, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2273, ivb: 19.0, hb: 0.9, ext: 5.3, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2319, ivb: 18.7, hb: -1.5, ext: 5.6, result: "Called Strike", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2302, ivb: 16.8, hb: 2.2, ext: 5.6, result: "Single", batter: "Michal Sindelka" },
      // JC Vanek (Fyke)
      { pitchType: "Slider", velo: 81.9, spin: 2846, ivb: -4.8, hb: -0.5, ext: 5.0, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 85.5, spin: 1521, ivb: 1.8, hb: 13.8, ext: 5.2, result: "Wild Pitch", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 85.5, spin: 1521, ivb: 1.8, hb: 13.8, ext: 5.2, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2239, ivb: 18.9, hb: 3.3, ext: 5.8, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2130, ivb: 13.0, hb: 3.2, ext: 5.3, result: "Walk", batter: "JC Vanek" },
      // Trey Fenderson (Fyke)
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2099, ivb: 17.9, hb: 6.7, ext: 5.7, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 80.3, spin: 2717, ivb: -5.7, hb: -4.0, ext: 5.1, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 81.0, spin: 2771, ivb: -7.8, hb: -4.0, ext: 5.2, result: "Double", batter: "Trey Fenderson" },
      // Seth Farni (Fyke)
      { pitchType: "Changeup", velo: 81.6, spin: 1538, ivb: 0.6, hb: 13.2, ext: 5.4, result: "Swinging Strike", batter: "Seth Farni" },
      { pitchType: "Changeup", velo: 84.7, spin: 1495, ivb: 9.2, hb: 10.1, ext: 5.5, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Curveball", velo: 80.9, spin: 2784, ivb: -8.6, hb: -5.0, ext: 5.3, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2141, ivb: 12.1, hb: 6.1, ext: 5.4, result: "Ball", batter: "Seth Farni" },
      { pitchType: "Changeup", velo: 86.1, spin: 1452, ivb: 10.9, hb: 11.0, ext: 5.3, result: "Foul", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2185, ivb: 15.2, hb: 3.2, ext: 5.6, result: "Strikeout", batter: "Seth Farni" },

    ]
  },
  "Jarrette Bonet": {
    7: [
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2133, ivb: 15.6, hb: 6.4, ext: 5.7, result: "Foul", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 92.6, spin: 2074, ivb: 10.1, hb: 17.1, ext: 5.3, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 93.8, spin: 2209, ivb: 16.8, hb: 16.6, ext: 5.2, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 88.3, spin: 2158, ivb: 7.0, hb: 17.2, ext: 5.6, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Cutter", velo: 89.2, spin: 2111, ivb: 4.3, hb: -0.3, ext: 5.4, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2239, ivb: 16.5, hb: 6.7, ext: 5.7, result: "Walk", batter: "Ty Powell" },
      // Keegan Rodin
      { pitchType: "Cutter", velo: 88.8, spin: 2130, ivb: 4.3, hb: 2.4, ext: 5.3, result: "Ball In Dirt", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2212, ivb: 20.4, hb: 3.5, ext: 5.7, result: "Foul", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2118, ivb: 15.8, hb: 5.7, ext: 5.8, result: "Sac Fly", batter: "Keegan Rodin" },
      // Max Hartman
      { pitchType: "Sinker", velo: 91.6, spin: 2069, ivb: 13.2, hb: 12.9, ext: 5.2, result: "Called Strike", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 91.6, spin: 2085, ivb: 10.8, hb: 15.5, ext: 5.3, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 87.9, spin: 2183, ivb: 8.7, hb: 17.1, ext: 5.3, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 93.3, spin: 2298, ivb: 12.9, hb: 16.8, ext: 5.3, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2188, ivb: 16.5, hb: 10.9, ext: 5.6, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 93.7, spin: 2142, ivb: 16.0, hb: 13.3, ext: 5.6, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2141, ivb: 17.4, hb: 10.2, ext: 5.6, result: "Strikeout", batter: "Max Hartman" }
    ]
  }
};

export default pitchersData;
