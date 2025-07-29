const pitchersData = {
  "Codi Scott": {
    1: [
      // Max Hartman
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2353, ivb: 17.3, hb: -2.0, ext: 4.9, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Changeup", velo: 88.0, spin: 2163, ivb: 15.1, hb: -13.4, ext: 4.8, result: "Called Strike", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 2278, ivb: 14.8, hb: -0.3, ext: 4.8, result: "Single", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 87.1, spin: 2325, ivb: 15.4, hb: -5.2, ext: 5.0, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 87.2, spin: 2334, ivb: 15.0, hb: -5.1, ext: 5.0, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 86.6, spin: 2331, ivb: 7.7, hb: 0.8, ext: 4.8, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2150, ivb: 12.5, hb: 0.2, ext: 4.9, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2119, ivb: 16.7, hb: -0.1, ext: 5.0, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 88.4, spin: 2098, ivb: 15.4, hb: -1.2, ext: 4.9, result: "Walk", batter: "Khi Holiday" },
      // JC Vanek
      { pitchType: "Changeup", velo: 87.2, spin: 2186, ivb: 16.9, hb: -12.2, ext: 4.9, result: "Single", batter: "JC Vanek" },
      // Kendrey Maduro
      { pitchType: "Slider", velo: 85.9, spin: 2306, ivb: 7.8, hb: -0.1, ext: 4.9, result: "Called Strike", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 86.4, spin: 2319, ivb: 8.1, hb: -3.1, ext: 4.9, result: "Forceout", batter: "Kendrey Maduro" },
      // Daniel Stewart
      { pitchType: "Slider", velo: 86.7, spin: 2338, ivb: 7.7, hb: -5.1, ext: 4.9, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 86.1, spin: 2269, ivb: 8.4, hb: -7.0, ext: 4.8, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 84.1, spin: 2191, ivb: 6.1, hb: 0.8, ext: 4.8, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 87.7, spin: 2171, ivb: 15.1, hb: -6.1, ext: 4.8, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 85.0, spin: 2187, ivb: 7.3, hb: 3.8, ext: 4.9, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 86.5, spin: 2218, ivb: 9.0, hb: -0.1, ext: 4.9, result: "Groundout", batter: "Daniel Stewart" }
    ],
    2: [
      // Michal Sindelka
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2270, ivb: 16.0, hb: -3.8, ext: 4.8, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 83.8, spin: 2306, ivb: 7.9, hb: -0.1, ext: 4.7, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 85.8, spin: 2206, ivb: 10.6, hb: -4.8, ext: 4.9, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 84.7, spin: 2276, ivb: 6.4, hb: -7.0, ext: 4.7, result: "Groundout", batter: "Michal Sindelka" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 85.6, spin: 2256, ivb: 6.2, hb: -2.1, ext: 4.8, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 84.9, spin: 2166, ivb: 7.6, hb: -1.4, ext: 4.7, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 85.6, spin: 2198, ivb: 10.6, hb: -2.7, ext: 4.8, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 85.7, spin: 2223, ivb: 8.0, hb: -6.3, ext: 4.7, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 83.6, spin: 2198, ivb: 5.6, hb: -0.8, ext: 4.8, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 83.5, spin: 2383, ivb: 4.8, hb: 1.8, ext: 4.7, result: "Strikeout", batter: "Trey Fenderson" },
      // LJ Layhew
      { pitchType: "Slider", velo: 83.6, spin: 2265, ivb: 5.9, hb: 1.5, ext: 4.7, result: "Foul", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 83.8, spin: 2329, ivb: 5.5, hb: 3.3, ext: 4.7, result: "Called Strike", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 77.0, spin: 2576, ivb: -0.9, hb: 13.5, ext: 4.6, result: "Strikeout", batter: "LJ Layhew" }
    ],
    3: [
      // Max Johnson
      { pitchType: "Slider", velo: 83.3, spin: 2229, ivb: 8.0, hb: 0.6, ext: 4.8, result: "Swinging Strike", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 82.3, spin: 2273, ivb: 7.2, hb: -2.1, ext: 4.7, result: "Swinging Strike", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 85.2, spin: 2147, ivb: 10.6, hb: 0.7, ext: 4.7, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 83.4, spin: 2142, ivb: 8.3, hb: -3.5, ext: 4.7, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 80.7, spin: 2234, ivb: 6.0, hb: 0.1, ext: 4.5, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 79.7, spin: 2188, ivb: 3.3, hb: 2.1, ext: 4.7, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Slider", velo: 84.3, spin: 2328, ivb: 5.6, hb: -0.9, ext: 4.7, result: "Walk", batter: "Max Johnson" },
      // Max Hartman
      { pitchType: "Slider", velo: 81.9, spin: 2354, ivb: 6.8, hb: 3.5, ext: 4.8, result: "Swinging Strike", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 73.9, spin: 2538, ivb: -4.9, hb: 15.9, ext: 4.4, result: "Swinging Strike", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 83.6, spin: 2111, ivb: 11.0, hb: 2.1, ext: 4.9, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 72.6, spin: 2507, ivb: -4.2, hb: 16.2, ext: 4.4, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 81.3, spin: 2290, ivb: 9.1, hb: 1.7, ext: 4.8, result: "Single", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Slider", velo: 85.5, spin: 2190, ivb: 18.8, hb: 1.0, ext: 5.0, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 82.6, spin: 2279, ivb: 9.7, hb: 2.9, ext: 4.9, result: "Swinging Strike", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 82.4, spin: 2325, ivb: 6.9, hb: 3.0, ext: 4.8, result: "Single", batter: "Khi Holiday" },
      // JC Vanek
      { pitchType: "Slider", velo: 73.5, spin: 2482, ivb: -0.7, hb: 16.5, ext: 4.5, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 81.6, spin: 2199, ivb: 6.9, hb: 2.4, ext: 4.8, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 85.3, spin: 2208, ivb: 12.9, hb: -3.8, ext: 4.9, result: "Groundout", batter: "JC Vanek" },
      // Kendrey Maduro
      { pitchType: "Slider", velo: 82.3, spin: 2258, ivb: 6.1, hb: 0.4, ext: 4.7, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 81.3, spin: 2205, ivb: 2.9, hb: 6.2, ext: 4.7, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 82.3, spin: 2170, ivb: 5.9, hb: 4.8, ext: 4.9, result: "Pop Out", batter: "Kendrey Maduro" },
      // Daniel Stewart
      { pitchType: "Curveball", velo: 73.5, spin: 2612, ivb: -6.3, hb: 15.7, ext: 4.4, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 81.9, spin: 2381, ivb: 1.9, hb: 8.7, ext: 4.7, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 80.4, spin: 2339, ivb: 2.7, hb: 2.1, ext: 4.8, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 73.2, spin: 2510, ivb: -6.3, hb: 14.6, ext: 4.4, result: "Swinging Strike (Blocked)", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 82.0, spin: 2311, ivb: 3.9, hb: 4.3, ext: 4.7, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 86.2, spin: 2309, ivb: 9.8, hb: -2.4, ext: 5.0, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 80.6, spin: 2216, ivb: 2.2, hb: 4.2, ext: 4.7, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 73.9, spin: 2508, ivb: -3.4, hb: 16.9, ext: 4.5, result: "Single", batter: "Daniel Stewart" },
      // Michal Sindelka
      { pitchType: "Slider", velo: 81.0, spin: 2050, ivb: 8.0, hb: 0.3, ext: 4.7, result: "Foul", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 83.0, spin: 2265, ivb: 5.4, hb: 2.1, ext: 4.7, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 81.0, spin: 2269, ivb: 4.2, hb: 3.2, ext: 4.7, result: "Called Strike", batter: "Michal Sindelka" },
      { pitchType: "Curveball", velo: 76.4, spin: 2512, ivb: -6.2, hb: 15.6, ext: 4.7, result: "Foul", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 82.3, spin: 2370, ivb: 3.3, hb: -0.3, ext: 4.6, result: "Single", batter: "Michal Sindelka" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 78.4, spin: 2321, ivb: 1.3, hb: 3.3, ext: 4.6, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 73.4, spin: 2468, ivb: -5.7, hb: 7.8, ext: 4.5, result: "Ball In Dirt", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 80.3, spin: 2174, ivb: 4.4, hb: 4.0, ext: 4.6, result: "Groundout", batter: "Trey Fenderson" }
    ]
  },
  "Matthew Hoskins": {
    4: [
      // LJ Layhew
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2262, ivb: 13.3, hb: 9.9, ext: 5.5, result: "Hit By Pitch", batter: "LJ Layhew" },
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 95.3, spin: 2239, ivb: 11.3, hb: 3.4, ext: 5.5, result: "Hit By Pitch", batter: "Max Johnson" },
      // Max Hartman
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2106, ivb: 9.7, hb: 7.8, ext: 5.5, result: "Wild Pitch", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2106, ivb: 9.7, hb: 7.8, ext: 5.5, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2285, ivb: 14.7, hb: 6.0, ext: 5.5, result: "Called Strike", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2191, ivb: 9.7, hb: 2.8, ext: 5.3, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2286, ivb: 10.2, hb: 6.2, ext: 5.5, result: "Single", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Slider", velo: 83.6, spin: 2493, ivb: 2.0, hb: -10.7, ext: 4.9, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2157, ivb: 15.7, hb: 9.3, ext: 5.8, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2274, ivb: 12.3, hb: 5.2, ext: 5.7, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2155, ivb: 13.2, hb: 8.6, ext: 5.5, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2180, ivb: 13.1, hb: 6.5, ext: 5.5, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 96.7, spin: 2192, ivb: 8.4, hb: 6.9, ext: 5.8, result: "Walk", batter: "Khi Holiday" },
      // JC Vanek
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2172, ivb: 12.3, hb: 4.2, ext: 5.5, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 86.6, spin: 1658, ivb: 4.8, hb: 15.3, ext: 5.3, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 97.8, spin: 2228, ivb: 9.3, hb: 8.5, ext: 5.5, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 85.9, spin: 1592, ivb: 11.4, hb: 12.9, ext: 5.2, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 86.4, spin: 2068, ivb: -0.1, hb: -2.5, ext: 4.9, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 96.3, spin: 2179, ivb: 10.0, hb: 3.5, ext: 5.5, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 86.3, spin: 1399, ivb: 12.1, hb: 10.7, ext: 5.2, result: "Strikeout", batter: "JC Vanek" },
      // Kendrey Maduro
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2140, ivb: 10.9, hb: 4.0, ext: 5.7, result: "Single", batter: "Kendrey Maduro" },
      // Daniel Stewart
      { pitchType: "Slider", velo: 83.6, spin: 2282, ivb: -3.5, hb: -20.5, ext: 5.2, result: "Called Strike", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 82.5, spin: 2426, ivb: 4.5, hb: -20.5, ext: 5.0, result: "Passed Ball", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 82.5, spin: 2426, ivb: 4.5, hb: -20.5, ext: 5.0, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2134, ivb: 12.0, hb: 5.2, ext: 5.5, result: "Swinging Strike", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 96.1, spin: 2058, ivb: 9.9, hb: 4.1, ext: 5.6, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2100, ivb: 12.4, hb: 2.4, ext: 5.5, result: "Ball In Dirt", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2078, ivb: 10.0, hb: 4.2, ext: 5.6, result: "Strikeout", batter: "Daniel Stewart" },
      // Michal Sindelka
      { pitchType: "Slider", velo: 82.6, spin: 2368, ivb: -0.3, hb: -16.4, ext: 4.8, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 81.4, spin: 2368, ivb: 0.9, hb: -15.9, ext: 5.0, result: "Groundout", batter: "Michal Sindelka" }
    ],
    5: [
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2104, ivb: 13.0, hb: 8.6, ext: 5.7, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2323, ivb: 11.9, hb: 8.7, ext: 5.5, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 82.2, spin: 2420, ivb: 0.0, hb: -18.0, ext: 4.9, result: "Swinging Strike", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 83.4, spin: 2524, ivb: 0.2, hb: -18.4, ext: 5.0, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2198, ivb: 9.6, hb: 4.1, ext: 5.5, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Changeup", velo: 85.3, spin: 1641, ivb: 0.7, hb: 17.5, ext: 5.3, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 93.0, spin: 2204, ivb: 7.5, hb: 7.8, ext: 5.6, result: "Walk", batter: "Trey Fenderson" },
      // LJ Layhew
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2343, ivb: 8.1, hb: 6.7, ext: 5.6, result: "Called Strike", batter: "LJ Layhew" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2204, ivb: 9.9, hb: 3.2, ext: 5.5, result: "Foul", batter: "LJ Layhew" },
      { pitchType: "Changeup", velo: 84.4, spin: 1606, ivb: 10.9, hb: 10.8, ext: 5.3, result: "Strikeout", batter: "LJ Layhew" },
      // Max Johnson
      { pitchType: "Cutter", velo: 91.9, spin: 2073, ivb: 7.5, hb: 0.3, ext: 5.2, result: "Ball", batter: "Max Johnson" }
    ]
  },
  "Andrew Ronne": {
    5: [
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2184, ivb: 12.6, hb: 8.1, ext: 5.8, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2176, ivb: 13.2, hb: 5.6, ext: 5.8, result: "Single", batter: "Max Johnson" },
      // Max Hartman
      { pitchType: "Curveball", velo: 80.3, spin: 2651, ivb: -6.2, hb: -13.5, ext: 5.7, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2399, ivb: 12.2, hb: 4.7, ext: 5.6, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2229, ivb: 13.6, hb: 5.0, ext: 5.8, result: "Grounded Into DP", batter: "Max Hartman" }
    ],
    6: [
      // Khi Holiday
      { pitchType: "Slider", velo: 82.5, spin: 2493, ivb: -0.9, hb: -10.7, ext: 5.7, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2225, ivb: 12.4, hb: 4.7, ext: 6.0, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2364, ivb: 19.5, hb: 4.4, ext: 5.8, result: "Foul", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2276, ivb: 14.2, hb: 8.3, ext: 5.9, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2277, ivb: 12.8, hb: 5.1, ext: 5.8, result: "Groundout", batter: "Khi Holiday" },
      // JC Vanek
      { pitchType: "Curveball", velo: 77.1, spin: 1561, ivb: -12.6, hb: -8.3, ext: 5.7, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2229, ivb: 15.9, hb: 6.1, ext: 6.1, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2195, ivb: 13.6, hb: 3.8, ext: 6.0, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2106, ivb: 15.0, hb: 5.5, ext: 6.0, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2198, ivb: 13.7, hb: 9.1, ext: 6.1, result: "Swinging Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2175, ivb: 12.7, hb: 8.9, ext: 6.1, result: "Walk", batter: "JC Vanek" },
      // Kendrey Maduro
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2200, ivb: 12.6, hb: 8.6, ext: 6.1, result: "Single", batter: "Kendrey Maduro" },
      // Daniel Stewart
      { pitchType: "Curveball", velo: 81.1, spin: 2610, ivb: -7.3, hb: -15.6, ext: 5.7, result: "Ball", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2259, ivb: 14.5, hb: 9.2, ext: 5.7, result: "Called Strike", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 81.5, spin: 2498, ivb: -8.1, hb: -17.4, ext: 5.5, result: "Swinging Strike (Blocked)", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 78.8, spin: 1961, ivb: -15.2, hb: -5.0, ext: 5.4, result: "Ball In Dirt", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2238, ivb: 13.6, hb: 7.8, ext: 6.1, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2270, ivb: 13.9, hb: 4.1, ext: 6.2, result: "Foul", batter: "Daniel Stewart" },
      { pitchType: "Curveball", velo: 81.1, spin: 2580, ivb: -5.6, hb: -21.2, ext: 5.5, result: "Single", batter: "Daniel Stewart" },
      // Michal Sindelka
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2237, ivb: 12.5, hb: 7.2, ext: 5.9, result: "Groundout", batter: "Michal Sindelka" },
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2198, ivb: 12.9, hb: 8.1, ext: 5.9, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2143, ivb: 14.6, hb: 5.6, ext: 6.1, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2160, ivb: 13.0, hb: 4.8, ext: 6.0, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2022, ivb: 15.1, hb: 7.7, ext: 6.2, result: "Walk", batter: "Trey Fenderson" },
      // LJ Layhew
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2249, ivb: 13.3, hb: 10.0, ext: 6.3, result: "Wild Pitch", batter: "LJ Layhew" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2249, ivb: 13.3, hb: 10.0, ext: 6.3, result: "Ball", batter: "LJ Layhew" },
      { pitchType: "Slider", velo: 83.1, spin: 2761, ivb: -1.6, hb: -14.9, ext: 5.7, result: "Hit By Pitch", batter: "LJ Layhew" },
      // Max Johnson
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2209, ivb: 14.1, hb: 12.9, ext: 5.9, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2246, ivb: 17.5, hb: 7.0, ext: 6.2, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2175, ivb: 16.0, hb: 4.9, ext: 5.9, result: "Ball", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2287, ivb: 15.1, hb: 8.1, ext: 5.9, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2255, ivb: 11.8, hb: 4.6, ext: 6.2, result: "Foul", batter: "Max Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2162, ivb: 14.6, hb: 5.5, ext: 6.2, result: "Single", batter: "Max Johnson" },
      // Max Hartman
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2191, ivb: 13.8, hb: 5.6, ext: 6.2, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 78.7, spin: 2025, ivb: -17.9, hb: -2.0, ext: 5.4, result: "Ball In Dirt", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2286, ivb: 16.4, hb: 1.7, ext: 5.9, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 81.7, spin: 2705, ivb: -3.6, hb: -15.8, ext: 5.6, result: "Hit By Pitch", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Curveball", velo: 81.0, spin: 2459, ivb: -9.8, hb: -14.8, ext: 5.4, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2354, ivb: 12.6, hb: 3.9, ext: 6.1, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2290, ivb: 13.4, hb: 2.1, ext: 5.8, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2240, ivb: 17.3, hb: 3.1, ext: 5.9, result: "Walk", batter: "Khi Holiday" }
    ],
  },
  "Cullen Horowicz": {
    6: [
      // JC Vanek
      { pitchType: "Sinker", velo: 92.8, spin: 2315, ivb: 11.6, hb: 19.7, ext: 5.4, result: "Flyout", batter: "JC Vanek" }
    ],
    7: [
      // Kendrey Maduro
      { pitchType: "Sinker", velo: 90.0, spin: 2273, ivb: 9.9, hb: 18.7, ext: 5.6, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Sinker", velo: 88.1, spin: 2343, ivb: 14.5, hb: 18.0, ext: 5.5, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 81.4, spin: 2213, ivb: 8.1, hb: 0.3, ext: 5.6, result: "Called Strike", batter: "Kendrey Maduro" },
      { pitchType: "Sinker", velo: 91.3, spin: 2302, ivb: 11.8, hb: 18.6, ext: 5.5, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 82.4, spin: 2194, ivb: 3.2, hb: 2.8, ext: 5.6, result: "Lineout", batter: "Kendrey Maduro" },
      // Daniel Stewart
      { pitchType: "Sinker", velo: 88.5, spin: 2265, ivb: 10.2, hb: 16.9, ext: 5.5, result: "Called Strike", batter: "Daniel Stewart" },
      { pitchType: "Slider", velo: 83.2, spin: 2187, ivb: 11.4, hb: -2.2, ext: 5.7, result: "Single", batter: "Daniel Stewart" },
      // Michal Sindelka
      { pitchType: "Sinker", velo: 89.8, spin: 2291, ivb: 11.0, hb: 17.7, ext: 5.9, result: "Ball", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 91.5, spin: 2370, ivb: 12.2, hb: 20.5, ext: 5.5, result: "Swinging Strike", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 90.1, spin: 2188, ivb: 11.1, hb: 16.2, ext: 5.7, result: "Called Strike", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 92.7, spin: 2318, ivb: 12.9, hb: 17.2, ext: 5.5, result: "Foul", batter: "Michal Sindelka" },
      { pitchType: "Slider", velo: 81.7, spin: 2138, ivb: 2.4, hb: 1.6, ext: 5.7, result: "Ball In Dirt", batter: "Michal Sindelka" },
      { pitchType: "Sinker", velo: 91.0, spin: 2343, ivb: 9.5, hb: 14.6, ext: 5.4, result: "Forceout", batter: "Michal Sindelka" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 81.6, spin: 2176, ivb: 3.7, hb: 0.2, ext: 5.7, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 90.5, spin: 2401, ivb: 10.0, hb: 16.0, ext: 5.7, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 89.4, spin: 2298, ivb: 8.9, hb: 16.8, ext: 5.5, result: "Caught Stealing 2B", batter: "Trey Fenderson" }
    ]
  }
};

export default pitchersData;