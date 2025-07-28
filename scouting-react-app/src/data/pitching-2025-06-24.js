const pitchersData = {
  "Bryson Dudley": {
    1: [
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2378, ivb: 20.3, hb: 9.1, ext: 5.8, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2344, ivb: 21.3, hb: 7.8, ext: 5.6, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Sinker", velo: 96.3, spin: 2254, ivb: 16.9, hb: 11.8, ext: 5.6, result: "Double", batter: "Khi Holiday" },
      // Ben Watson
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2255, ivb: 17.9, hb: 9.4, ext: 5.6, result: "Swinging Strike", batter: "Ben Watson" },
      { pitchType: "Curveball", velo: 82.8, spin: 2474, ivb: -5.2, hb: -3.7, ext: 5.3, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2368, ivb: 20.7, hb: 7.8, ext: 5.8, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 88.6, spin: 1610, ivb: 9.9, hb: 14.5, ext: 6.0, result: "Flyout", batter: "Ben Watson" },
      // Chase Heath
      { pitchType: "Four-Seam Fastball", velo: 96.5, spin: 2380, ivb: 20.8, hb: 8.0, ext: 5.6, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 89.3, spin: 2444, ivb: 6.6, hb: -0.7, ext: 5.8, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2353, ivb: 17.6, hb: 11.3, ext: 5.6, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 87.8, spin: 2374, ivb: 6.8, hb: 1.4, ext: 5.6, result: "Swinging Strike", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 88.4, spin: 2422, ivb: 5.1, hb: -4.0, ext: 5.6, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 86.4, spin: 2336, ivb: 2.7, hb: -0.3, ext: 5.4, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 84.3, spin: 2355, ivb: 2.0, hb: -1.5, ext: 5.5, result: "Groundout", batter: "Chase Heath" },
      // Michal Sindelka
      { pitchType: "Cutter", velo: 89.2, spin: 2414, ivb: 8.3, hb: 0.8, ext: 5.8, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2349, ivb: 17.6, hb: 11.0, ext: 5.7, result: "Called Strike", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2382, ivb: 16.7, hb: 11.4, ext: 5.7, result: "Foul", batter: "Michal Sindelka" },
      { pitchType: "Cutter", velo: 87.0, spin: 2546, ivb: 3.5, hb: -0.9, ext: 5.5, result: "Strikeout", batter: "Michal Sindelka" }
    ],
    2: [
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2405, ivb: 20.1, hb: 10.8, ext: 5.6, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 93.6, spin: 2352, ivb: 15.8, hb: 14.1, ext: 5.5, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 81.5, spin: 2520, ivb: -3.7, hb: -3.2, ext: 5.3, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2433, ivb: 17.3, hb: 10.2, ext: 5.5, result: "Strikeout", batter: "JC Vanek" },
      // LJ Layhew
      { pitchType: "Curveball", velo: 81.0, spin: 2533, ivb: -3.8, hb: -5.6, ext: 5.3, result: "Called Strike", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 82.6, spin: 2683, ivb: -5.2, hb: -6.4, ext: 5.4, result: "Groundout", batter: "LJ Layhew" },
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2406, ivb: 17.4, hb: 13.6, ext: 5.7, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 94.8, spin: 2409, ivb: 17.7, hb: 13.9, ext: 5.6, result: "Double", batter: "Trey Fenderson" },
      // Ty Powell
      { pitchType: "Curveball", velo: 81.1, spin: 2632, ivb: -7.7, hb: -14.4, ext: 5.3, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Sinker", velo: 95.2, spin: 2360, ivb: 16.6, hb: 17.4, ext: 5.6, result: "Called Strike", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2346, ivb: 19.7, hb: 12.5, ext: 5.6, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Changeup", velo: 88.6, spin: 1631, ivb: 13.0, hb: 7.6, ext: 5.9, result: "Foul", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2290, ivb: 21.9, hb: 7.1, ext: 5.6, result: "Strikeout", batter: "Ty Powell" }
    ],
    3: [
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2452, ivb: 22.1, hb: 8.3, ext: 5.4, result: "Swinging Strike", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 84.1, spin: 2664, ivb: -5.3, hb: -2.2, ext: 5.5, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Curveball", velo: 81.8, spin: 2438, ivb: -4.1, hb: -3.0, ext: 5.3, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2271, ivb: 21.3, hb: 9.5, ext: 5.6, result: "Swinging Strike", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2272, ivb: 18.5, hb: 13.5, ext: 5.5, result: "Strikeout", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Cutter", velo: 87.5, spin: 2410, ivb: 6.2, hb: -0.2, ext: 5.4, result: "Swinging Strike", batter: "Khi Holiday" },
      { pitchType: "Cutter", velo: 86.9, spin: 2516, ivb: 4.2, hb: -2.0, ext: 5.1, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 85.3, spin: 2336, ivb: 3.6, hb: -4.8, ext: 5.2, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Sinker", velo: 95.2, spin: 2384, ivb: 19.8, hb: 14.1, ext: 5.6, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2281, ivb: 17.2, hb: 7.3, ext: 5.7, result: "Flyout", batter: "Khi Holiday" },
      // Ben Watson
      { pitchType: "Curveball", velo: 82.6, spin: 2457, ivb: -5.4, hb: -3.2, ext: 5.5, result: "Called Strike", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 95.3, spin: 2326, ivb: 16.5, hb: 12.5, ext: 5.6, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2321, ivb: 17.4, hb: 8.9, ext: 5.6, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2431, ivb: 19.5, hb: 8.7, ext: 5.6, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2382, ivb: 20.8, hb: 9.3, ext: 5.5, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2307, ivb: 21.8, hb: 6.1, ext: 5.6, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Slider", velo: 81.8, spin: 2487, ivb: -4.1, hb: -3.6, ext: 5.4, result: "Strikeout", batter: "Ben Watson" }
    ],
    4: [
      // Chase Heath
      { pitchType: "Cutter", velo: 86.2, spin: 2118, ivb: 20.6, hb: -0.7, ext: 6.0, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 85.8, spin: 2146, ivb: 18.9, hb: -2.3, ext: 5.8, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Changeup", velo: 75.3, spin: 1911, ivb: 9.2, hb: 14.9, ext: 5.6, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 83.8, spin: 1940, ivb: 18.5, hb: -1.3, ext: 6.0, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 83.2, spin: 1926, ivb: 16.3, hb: -1.0, ext: 6.0, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Cutter", velo: 83.6, spin: 1887, ivb: 18.5, hb: 0.8, ext: 6.0, result: "Flyout", batter: "Chase Heath" },
      // Michal Sindelka
      { pitchType: "Cutter", velo: 84.6, spin: 1855, ivb: 16.2, hb: 2.3, ext: 5.9, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Cutter", velo: 83.3, spin: 1957, ivb: 18.7, hb: -0.5, ext: 5.9, result: "Foul", batter: "Michal Sindelka" },
      { pitchType: "Curveball", velo: 75.2, spin: 1950, ivb: -2.4, hb: -5.4, ext: 5.3, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 82.3, spin: 1987, ivb: 12.4, hb: 3.0, ext: 5.8, result: "Called Strike", batter: "Michal Sindelka" },
      { pitchType: "Changeup", velo: 75.9, spin: 1901, ivb: 10.4, hb: 17.6, ext: 5.7, result: "Single", batter: "Michal Sindelka" },
      // JC Vanek
      { pitchType: "Cutter", velo: 83.9, spin: 2086, ivb: 18.3, hb: 3.0, ext: 5.9, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 82.5, spin: 1993, ivb: 14.7, hb: 1.1, ext: 5.8, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 74.6, spin: 1960, ivb: 9.4, hb: 17.6, ext: 5.8, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 74.7, spin: 1875, ivb: 6.2, hb: 17.7, ext: 5.8, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 82.0, spin: 1878, ivb: 13.6, hb: -0.7, ext: 5.8, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 83.5, spin: 1939, ivb: 15.3, hb: 1.2, ext: 5.9, result: "Flyout", batter: "JC Vanek" },
      // LJ Layhew
      { pitchType: "Slider", velo: 83.0, spin: 1842, ivb: 14.5, hb: 2.8, ext: 6.0, result: "Foul", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 81.9, spin: 2030, ivb: 16.8, hb: -0.1, ext: 5.8, result: "Ball", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 83.1, spin: 1987, ivb: 17.8, hb: 0.4, ext: 6.0, result: "Called Strike", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 81.7, spin: 1917, ivb: 14.9, hb: 1.3, ext: 5.8, result: "Ball", batter: "LJ Layhew" },
      { pitchType: "Curveball", velo: 72.9, spin: 1857, ivb: -3.5, hb: -1.3, ext: 5.0, result: "Strikeout", batter: "LJ Layhew" }
    ]
  },
  "Gavin King": {
    5: [
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2190, ivb: 22.3, hb: 7.5, ext: 5.6, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2263, ivb: 19.3, hb: 10.1, ext: 5.5, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2317, ivb: 20.6, hb: 3.5, ext: 5.5, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2234, ivb: 20.5, hb: 7.0, ext: 5.5, result: "Groundout", batter: "Trey Fenderson" },
      // Ty Powell
      { pitchType: "Curveball", velo: 82.3, spin: 2237, ivb: -10.2, hb: -0.5, ext: 5.1, result: "Groundout", batter: "Ty Powell" },
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2296, ivb: 17.8, hb: 9.9, ext: 5.7, result: "Called Strike", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2287, ivb: 17.9, hb: 12.1, ext: 5.7, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 81.5, spin: 2441, ivb: -6.6, hb: 0.1, ext: 5.3, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2284, ivb: 19.8, hb: 6.8, ext: 5.6, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2216, ivb: 22.0, hb: 5.5, ext: 5.6, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2235, ivb: 17.9, hb: 11.4, ext: 5.7, result: "Home Run", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Slider", velo: 82.9, spin: 2384, ivb: -1.9, hb: -4.8, ext: 5.5, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2168, ivb: 19.7, hb: 9.3, ext: 5.5, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2332, ivb: 20.9, hb: 7.8, ext: 5.6, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 83.6, spin: 2437, ivb: -1.1, hb: -1.4, ext: 5.3, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2368, ivb: 18.7, hb: 9.5, ext: 5.6, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 82.3, spin: 2447, ivb: -7.9, hb: -4.9, ext: 5.7, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2125, ivb: 16.8, hb: 9.0, ext: 5.8, result: "Groundout", batter: "Khi Holiday" }
    ]
  },
  "Clayton Johnson": {
    6: [
      // Ben Watson
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2303, ivb: 19.0, hb: 7.9, ext: 6.5, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2087, ivb: 13.1, hb: 3.0, ext: 6.7, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2177, ivb: 13.8, hb: 3.8, ext: 7.0, result: "Hit By Pitch", batter: "Ben Watson" },
      // Chase Heath
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2192, ivb: 15.1, hb: 11.2, ext: 7.0, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 96.6, spin: 2334, ivb: 17.6, hb: 7.2, ext: 6.8, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2223, ivb: 14.6, hb: 5.7, ext: 6.7, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2282, ivb: 14.7, hb: 7.8, ext: 6.7, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Curveball", velo: 84.0, spin: 2189, ivb: -9.9, hb: -11.5, ext: 6.1, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2307, ivb: 18.1, hb: 9.2, ext: 6.6, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2382, ivb: 20.3, hb: 6.2, ext: 6.6, result: "Strikeout Double Play", batter: "Chase Heath" },
      // Michal Sindelka
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2193, ivb: 14.4, hb: 11.1, ext: 6.7, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 76.5, spin: 1800, ivb: 20.5, hb: 7.8, ext: 7.4, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2170, ivb: 16.7, hb: 6.4, ext: 6.7, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2139, ivb: 15.2, hb: 9.3, ext: 6.7, result: "Walk", batter: "Michal Sindelka" }
    ]
  },
  "Cooper McGrath": {
    6: [
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2528, ivb: 9.8, hb: 7.4, ext: 5.9, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 84.3, spin: 2721, ivb: -3.0, hb: -4.3, ext: 5.6, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 93.2, spin: 2592, ivb: 8.9, hb: 8.6, ext: 6.1, result: "Groundout", batter: "JC Vanek" }
    ],
    7: [
      // LJ Layhew
      { pitchType: "Sinker", velo: 91.3, spin: 2494, ivb: 8.8, hb: 10.9, ext: 5.7, result: "Called Strike", batter: "LJ Layhew" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2499, ivb: 12.4, hb: 7.5, ext: 6.2, result: "Swinging Strike", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 84.7, spin: 2578, ivb: -0.9, hb: -2.2, ext: 5.5, result: "Ball", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 84.4, spin: 2494, ivb: -2.8, hb: -2.8, ext: 5.6, result: "Groundout", batter: "LJ Layhew" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 85.7, spin: 2532, ivb: -1.7, hb: -2.3, ext: 5.9, result: "Swinging Strike", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 85.4, spin: 2549, ivb: 3.0, hb: -3.3, ext: 5.8, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 80.4, spin: 2865, ivb: 2.7, hb: -19.1, ext: 5.6, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 84.9, spin: 2538, ivb: 1.7, hb: -3.3, ext: 5.7, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 80.5, spin: 2867, ivb: 0.7, hb: -14.5, ext: 5.8, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2556, ivb: 9.0, hb: 1.6, ext: 6.3, result: "Strikeout", batter: "Trey Fenderson" },
      // Ty Powell
      { pitchType: "Cutter", velo: 91.3, spin: 2524, ivb: 9.7, hb: 2.7, ext: 5.8, result: "Groundout", batter: "Ty Powell" }
    ]
  },
  "Jarrette Bonet": {
    8: [
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2292, ivb: 18.0, hb: 8.1, ext: 5.7, result: "Swinging Strike", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2257, ivb: 17.2, hb: 9.5, ext: 5.5, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Sinker", velo: 89.3, spin: 2223, ivb: 8.5, hb: 18.3, ext: 5.5, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Cutter", velo: 88.4, spin: 2222, ivb: 2.2, hb: 0.4, ext: 5.1, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2310, ivb: 16.6, hb: 11.8, ext: 5.5, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Cutter", velo: 89.4, spin: 2223, ivb: 3.4, hb: 0.6, ext: 5.3, result: "Strikeout", batter: "Max Johnson" },
      // Khi Holiday
      { pitchType: "Cutter", velo: 88.0, spin: 2150, ivb: 4.4, hb: 2.5, ext: 5.3, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2247, ivb: 19.1, hb: 10.6, ext: 5.5, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 83.2, spin: 2474, ivb: -2.6, hb: -14.7, ext: 5.1, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 84.4, spin: 2551, ivb: -4.7, hb: -9.1, ext: 5.1, result: "Strikeout", batter: "Khi Holiday" },
      // Ben Watson
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2271, ivb: 18.9, hb: 10.8, ext: 5.4, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2247, ivb: 18.8, hb: 9.0, ext: 5.6, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 92.6, spin: 2276, ivb: 9.5, hb: 16.6, ext: 5.5, result: "Swinging Strike", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 87.6, spin: 2102, ivb: 12.8, hb: 16.5, ext: 5.4, result: "Strikeout", batter: "Ben Watson" }
    ]
  },
  "Aidan Weaver": {
    9: [
      // Chase Heath
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 1912, ivb: 12.1, hb: 8.8, ext: 6.0, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2041, ivb: 11.7, hb: 8.3, ext: 6.6, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2038, ivb: 16.4, hb: 5.8, ext: 6.2, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2092, ivb: 16.8, hb: 9.5, ext: 6.0, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2068, ivb: 14.9, hb: 9.2, ext: 6.2, result: "Single", batter: "Chase Heath" },
      // Michal Sindelka
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2020, ivb: 18.6, hb: 8.5, ext: 6.2, result: "Called Strike", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 85.7, spin: 2078, ivb: 2.3, hb: -1.9, ext: 5.8, result: "Stolen Base 2B", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 85.7, spin: 2078, ivb: 2.3, hb: -1.9, ext: 5.8, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2149, ivb: 16.9, hb: 6.5, ext: 6.2, result: "Foul", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2101, ivb: 11.4, hb: 1.0, ext: 6.0, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2132, ivb: 13.6, hb: 14.2, ext: 6.1, result: "Single", batter: "Michal Sindelka" },
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2160, ivb: 13.2, hb: 15.5, ext: 6.1, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2140, ivb: 17.0, hb: 12.8, ext: 5.8, result: "Stolen Base 2B", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2140, ivb: 17.0, hb: 12.8, ext: 5.8, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 84.3, spin: 2075, ivb: 2.4, hb: -2.2, ext: 6.0, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2160, ivb: 15.6, hb: 5.0, ext: 6.3, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2108, ivb: 14.1, hb: 15.9, ext: 6.2, result: "Walk", batter: "JC Vanek" },
      // LJ Layhew
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2100, ivb: 14.7, hb: 15.4, ext: 6.1, result: "Ball", batter: "LJ Layhew" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2072, ivb: 12.6, hb: 13.5, ext: 6.1, result: "Called Strike", batter: "LJ Layhew" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2103, ivb: 13.8, hb: 14.6, ext: 6.2, result: "Sac Fly", batter: "LJ Layhew" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 85.3, spin: 2142, ivb: 2.9, hb: -3.1, ext: 5.9, result: "Single", batter: "Trey Fenderson" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 1871, ivb: 15.3, hb: 12.3, ext: 5.9, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2001, ivb: 12.4, hb: 13.7, ext: 6.1, result: "Called Strike", batter: "Ty Powell" },
      { pitchType: "Changeup", velo: 80.1, spin: 1627, ivb: 2.8, hb: 15.1, ext: 5.6, result: "Groundout", batter: "Ty Powell" },
      // Seth Farni
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2130, ivb: 14.5, hb: 14.0, ext: 6.1, result: "Swinging Strike", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2137, ivb: 14.7, hb: 14.8, ext: 6.1, result: "Swinging Strike", batter: "Seth Farni" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2101, ivb: 14.3, hb: 13.7, ext: 6.2, result: "Strikeout", batter: "Seth Farni" }
    ]
  }
};

export default pitchersData;
