const pitchersData = {
  "Caden Spivey": {
    1: [
      // Max Hartman
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2214, ivb: 19.0, hb: 7.5, ext: 5.6, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2328, ivb: 19.0, hb: 7.9, ext: 5.6, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 77.6, spin: 2688, ivb: -6.0, hb: -12.2, ext: 4.6, result: "Called Strike", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2329, ivb: 14.3, hb: 7.0, ext: 5.7, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 77.8, spin: 2696, ivb: -4.5, hb: -15.9, ext: 4.7, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2295, ivb: 16.1, hb: 6.2, ext: 5.7, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 90.3, spin: 2342, ivb: 9.9, hb: 13.9, ext: 5.9, result: "Walk", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2429, ivb: 18.1, hb: 6.9, ext: 5.7, result: "Caught Stealing 2B", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2429, ivb: 18.1, hb: 6.9, ext: 5.7, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2257, ivb: 17.2, hb: 9.0, ext: 5.7, result: "Swinging Strike", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2384, ivb: 16.7, hb: 8.3, ext: 5.6, result: "Groundout", batter: "Khi Holiday" },
      // Kendrey Maduro
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2345, ivb: 19.6, hb: 7.5, ext: 5.7, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2305, ivb: 15.7, hb: 8.3, ext: 5.6, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 83.1, spin: 2681, ivb: 1.7, hb: -1.6, ext: 4.9, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2375, ivb: 19.3, hb: 7.7, ext: 5.7, result: "Strikeout", batter: "Kendrey Maduro" }
    ],
    2: [
      // Chase Heath
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2245, ivb: 17.3, hb: 8.4, ext: 5.8, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 90.4, spin: 2161, ivb: 16.2, hb: 13.2, ext: 5.6, result: "Swinging Strike", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2279, ivb: 17.3, hb: 11.7, ext: 5.7, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 83.8, spin: 2694, ivb: 1.6, hb: -6.6, ext: 5.1, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 84.1, spin: 2636, ivb: 4.2, hb: -5.5, ext: 5.0, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2342, ivb: 18.7, hb: 6.7, ext: 5.7, result: "Strikeout", batter: "Chase Heath" },
      // JC Vanek
      { pitchType: "Curveball", velo: 75.0, spin: 2545, ivb: -3.3, hb: -13.8, ext: 4.8, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2354, ivb: 15.7, hb: 6.1, ext: 5.6, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2418, ivb: 17.0, hb: 4.1, ext: 5.6, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Curveball", velo: 80.1, spin: 2665, ivb: 1.1, hb: -8.9, ext: 4.8, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2416, ivb: 16.4, hb: 7.0, ext: 5.8, result: "Strikeout", batter: "JC Vanek" },
      // Trey Fenderson
      { pitchType: "Slider", velo: 84.5, spin: 2654, ivb: 9.7, hb: -1.6, ext: 5.1, result: "Swinging Strike", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 83.7, spin: 2745, ivb: 4.1, hb: -3.1, ext: 5.1, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Cutter", velo: 85.9, spin: 2636, ivb: 6.2, hb: -2.5, ext: 5.1, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 84.4, spin: 2553, ivb: 4.1, hb: -3.4, ext: 4.9, result: "Lineout", batter: "Trey Fenderson" }
    ],
    3: [
      // Ben Watson
      { pitchType: "Curveball", velo: 78.2, spin: 2732, ivb: -4.2, hb: -13.4, ext: 4.8, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2336, ivb: 15.8, hb: 10.9, ext: 5.8, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2468, ivb: 19.2, hb: 5.3, ext: 5.6, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2479, ivb: 12.9, hb: 7.5, ext: 5.6, result: "Single", batter: "Ben Watson" },
      // Keegan Rodin
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2402, ivb: 16.6, hb: 5.4, ext: 5.6, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2433, ivb: 19.7, hb: 6.6, ext: 5.7, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2290, ivb: 12.3, hb: 12.2, ext: 5.4, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 84.9, spin: 2516, ivb: 6.0, hb: -1.8, ext: 5.2, result: "Foul", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 85.2, spin: 2781, ivb: 3.6, hb: -5.6, ext: 5.2, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2399, ivb: 16.6, hb: 7.2, ext: 5.9, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 83.9, spin: 2632, ivb: 4.2, hb: -5.6, ext: 5.2, result: "Double Play", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2513, ivb: 18.8, hb: 4.8, ext: 5.5, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2479, ivb: 16.3, hb: 8.0, ext: 5.6, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2496, ivb: 13.4, hb: 8.9, ext: 6.0, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Cutter", velo: 89.3, spin: 2428, ivb: 13.5, hb: 2.5, ext: 5.7, result: "Walk", batter: "Ty Powell" },
      // Max Hartman
      { pitchType: "Slider", velo: 83.9, spin: 2587, ivb: 8.7, hb: -3.6, ext: 5.1, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2281, ivb: 15.0, hb: 6.2, ext: 5.8, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2213, ivb: 15.5, hb: 12.9, ext: 5.9, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 88.0, spin: 2320, ivb: 15.9, hb: 5.2, ext: 5.7, result: "Single", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 86.9, spin: 2105, ivb: 18.6, hb: 11.5, ext: 5.8, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 84.6, spin: 2457, ivb: 6.5, hb: -0.2, ext: 5.3, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2367, ivb: 15.2, hb: 7.8, ext: 5.5, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2369, ivb: 20.0, hb: 7.0, ext: 5.8, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2296, ivb: 16.4, hb: 6.4, ext: 5.8, result: "Walk", batter: "Khi Holiday" },
      // Kendrey Maduro
      { pitchType: "Curveball", velo: 76.2, spin: 2571, ivb: -4.2, hb: -9.3, ext: 4.8, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Cutter", velo: 87.8, spin: 2172, ivb: 15.0, hb: 1.8, ext: 5.7, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 81.9, spin: 2453, ivb: 5.3, hb: 3.6, ext: 5.1, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2362, ivb: 14.8, hb: 4.6, ext: 5.7, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Slider", velo: 82.2, spin: 2592, ivb: 4.0, hb: -5.3, ext: 5.2, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2438, ivb: 13.0, hb: 5.6, ext: 5.6, result: "Single", batter: "Kendrey Maduro" }
    ]
  },
  "Chris Billingsley": {
    3: [
      // Chase Heath
      { pitchType: "Sinker", velo: 91.5, spin: 2055, ivb: 13.5, hb: 12.1, ext: 5.7, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 92.7, spin: 2063, ivb: 15.7, hb: 12.5, ext: 5.8, result: "Swinging Strike", batter: "Chase Heath" },
      { pitchType: "Slider", velo: 85.1, spin: 2656, ivb: 1.6, hb: -5.9, ext: 5.0, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2073, ivb: 15.7, hb: 11.1, ext: 5.5, result: "Single", batter: "Chase Heath" },
      // JC Vanek
      { pitchType: "Slider", velo: 83.4, spin: 2566, ivb: 5.2, hb: -9.1, ext: 5.2, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 82.3, spin: 2850, ivb: -2.8, hb: -11.8, ext: 5.2, result: "Called Strike", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2137, ivb: 14.8, hb: 10.8, ext: 5.6, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 86.1, spin: 1479, ivb: 13.6, hb: 11.9, ext: 5.4, result: "Wild Pitch", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 86.1, spin: 1479, ivb: 13.6, hb: 11.9, ext: 5.4, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Slider", velo: 83.3, spin: 2785, ivb: 2.0, hb: -13.0, ext: 5.2, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2253, ivb: 10.2, hb: 4.1, ext: 5.9, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 93.0, spin: 1991, ivb: 12.3, hb: 11.7, ext: 5.8, result: "Single", batter: "JC Vanek" },
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2170, ivb: 16.7, hb: 9.3, ext: 5.7, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2250, ivb: 17.9, hb: 7.4, ext: 5.9, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2113, ivb: 16.6, hb: 8.5, ext: 5.8, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 86.4, spin: 2863, ivb: -0.2, hb: -7.8, ext: 4.9, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 85.4, spin: 2680, ivb: -0.8, hb: -6.4, ext: 5.1, result: "Flyout", batter: "Trey Fenderson" }
    ],
    4: [
      // Ben Watson
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2057, ivb: 17.6, hb: 9.5, ext: 5.6, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Curveball", velo: 79.5, spin: 2589, ivb: -0.3, hb: -20.1, ext: 5.0, result: "Called Strike", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2031, ivb: 14.8, hb: 10.5, ext: 5.7, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2049, ivb: 16.0, hb: 6.6, ext: 5.8, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Curveball", velo: 81.9, spin: 2756, ivb: -3.0, hb: -15.0, ext: 5.4, result: "Strikeout", batter: "Ben Watson" },
      // Keegan Rodin
      { pitchType: "Slider", velo: 82.6, spin: 2720, ivb: -1.3, hb: -7.9, ext: 5.1, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2157, ivb: 18.7, hb: 6.1, ext: 5.9, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 84.7, spin: 2700, ivb: 1.7, hb: -6.8, ext: 5.1, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 82.2, spin: 2563, ivb: 1.8, hb: -7.0, ext: 4.8, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2252, ivb: 17.2, hb: 4.1, ext: 5.8, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 85.5, spin: 2589, ivb: 1.0, hb: -7.6, ext: 5.5, result: "Walk", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2128, ivb: 18.3, hb: 3.0, ext: 5.7, result: "Single", batter: "Ty Powell" },
      // Max Hartman
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2157, ivb: 13.5, hb: 11.3, ext: 5.8, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Changeup", velo: 83.3, spin: 1386, ivb: 8.2, hb: 11.2, ext: 5.8, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2168, ivb: 16.5, hb: 6.7, ext: 5.7, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 84.3, spin: 2706, ivb: 1.2, hb: -14.6, ext: 5.1, result: "Sac Fly Double Play", batter: "Max Hartman" }
    ]
  },
  "John Carver": {
    5: [
      // Khi Holiday
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2258, ivb: 18.3, hb: 9.4, ext: 5.2, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Changeup", velo: 83.7, spin: 1438, ivb: 8.2, hb: 12.0, ext: 5.2, result: "Flyout", batter: "Khi Holiday" },
      // Kendrey Maduro
      { pitchType: "Changeup", velo: 85.8, spin: 1701, ivb: -0.8, hb: 16.6, ext: 5.3, result: "Swinging Strike", batter: "Kendrey Maduro" },
      { pitchType: "Changeup", velo: 85.8, spin: 1791, ivb: -1.4, hb: 17.9, ext: 5.1, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2303, ivb: 17.5, hb: 8.9, ext: 5.3, result: "Swinging Strike", batter: "Kendrey Maduro" },
      { pitchType: "Changeup", velo: 86.5, spin: 1741, ivb: 1.5, hb: 15.7, ext: 5.4, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2367, ivb: 17.3, hb: 9.3, ext: 5.4, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Changeup", velo: 85.4, spin: 1618, ivb: 3.0, hb: 14.3, ext: 5.2, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Changeup", velo: 86.5, spin: 1712, ivb: -0.5, hb: 17.1, ext: 5.3, result: "Strikeout", batter: "Kendrey Maduro" },
      // Chase Heath
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2339, ivb: 18.2, hb: 8.8, ext: 5.3, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Changeup", velo: 83.5, spin: 1531, ivb: 5.4, hb: 18.3, ext: 5.2, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2371, ivb: 15.2, hb: 9.4, ext: 5.4, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Changeup", velo: 83.5, spin: 1586, ivb: 2.9, hb: 18.6, ext: 5.3, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Changeup", velo: 85.0, spin: 1730, ivb: 2.1, hb: 13.8, ext: 5.3, result: "Double", batter: "Chase Heath" },
      // JC Vanek
      { pitchType: "Changeup", velo: 84.9, spin: 1616, ivb: 1.2, hb: 13.1, ext: 5.1, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 83.8, spin: 1514, ivb: 2.3, hb: 15.2, ext: 5.3, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2341, ivb: 19.6, hb: 7.8, ext: 5.4, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2342, ivb: 17.1, hb: 12.0, ext: 5.3, result: "Ball In Dirt", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 84.2, spin: 1608, ivb: 6.0, hb: 17.0, ext: 5.3, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 84.9, spin: 1647, ivb: 1.2, hb: 15.1, ext: 5.5, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2252, ivb: 19.3, hb: 14.0, ext: 5.1, result: "Strikeout", batter: "JC Vanek" }
    ]
  },
  "Andrew Ronne": {
    6: [
      // Trey Fenderson
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2239, ivb: 14.0, hb: 5.8, ext: 5.6, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2282, ivb: 18.2, hb: 7.7, ext: 5.7, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Slider", velo: 82.3, spin: 2502, ivb: -2.9, hb: -14.6, ext: 4.9, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 81.0, spin: 2403, ivb: -1.1, hb: -15.1, ext: 5.0, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2290, ivb: 14.1, hb: 6.6, ext: 5.8, result: "Called Strike", batter: "Trey Fenderson" },
      { pitchType: "Curveball", velo: 81.5, spin: 2533, ivb: -7.1, hb: -15.5, ext: 5.1, result: "Groundout", batter: "Trey Fenderson" },
      // Ben Watson
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2196, ivb: 13.5, hb: 5.9, ext: 5.8, result: "Called Strike", batter: "Ben Watson" },
      { pitchType: "Curveball", velo: 83.3, spin: 2493, ivb: -10.5, hb: -16.1, ext: 5.2, result: "Single", batter: "Ben Watson" },
      // Keegan Rodin
      { pitchType: "Curveball", velo: 80.4, spin: 2424, ivb: -4.9, hb: -17.4, ext: 5.2, result: "Called Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2241, ivb: 13.7, hb: 5.2, ext: 5.7, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 81.8, spin: 2454, ivb: -2.7, hb: -13.8, ext: 4.6, result: "Strikeout", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Curveball", velo: 76.7, spin: 1825, ivb: -17.3, hb: -7.5, ext: 5.5, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2210, ivb: 12.5, hb: 7.3, ext: 5.6, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2243, ivb: 14.8, hb: 6.8, ext: 5.7, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2279, ivb: 13.0, hb: 7.8, ext: 5.9, result: "Caught Stealing 2B", batter: "Ty Powell" }
    ],
    7: [
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2205, ivb: 14.2, hb: 6.0, ext: 5.6, result: "Foul Bunt", batter: "Ty Powell" },
      { pitchType: "Curveball", velo: 77.9, spin: 1927, ivb: -15.1, hb: -1.2, ext: 5.4, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Slider", velo: 82.2, spin: 2761, ivb: -6.1, hb: -9.8, ext: 5.4, result: "Swinging Strike", batter: "Ty Powell" },
      { pitchType: "Slider", velo: 82.6, spin: 2658, ivb: -1.9, hb: -18.0, ext: 5.6, result: "Groundout", batter: "Ty Powell" },
      // Max Hartman
      { pitchType: "Curveball", velo: 81.4, spin: 2665, ivb: -4.4, hb: -8.5, ext: 5.3, result: "Called Strike", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2336, ivb: 12.5, hb: 10.3, ext: 5.8, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2320, ivb: 10.4, hb: 9.7, ext: 5.8, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 82.3, spin: 2563, ivb: -6.5, hb: -14.2, ext: 4.9, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2201, ivb: 16.8, hb: 2.8, ext: 5.7, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Curveball", velo: 81.8, spin: 1978, ivb: -15.3, hb: -3.5, ext: 5.8, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Slider", velo: 83.8, spin: 2746, ivb: -4.6, hb: -17.8, ext: 5.0, result: "Foul", batter: "Max Hartman" },
      { pitchType: "Sinker", velo: 94.8, spin: 2369, ivb: 13.7, hb: 9.7, ext: 5.6, result: "Pop Out", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Slider", velo: 83.2, spin: 2677, ivb: -1.0, hb: -17.7, ext: 5.2, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Slider", velo: 83.4, spin: 2762, ivb: -3.4, hb: -15.6, ext: 5.1, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2309, ivb: 14.4, hb: 3.8, ext: 5.7, result: "Ball", batter: "Khi Holiday" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2285, ivb: 15.3, hb: 8.3, ext: 5.8, result: "Called Strike", batter: "Khi Holiday" },
      { pitchType: "Curveball", velo: 82.3, spin: 2658, ivb: -7.9, hb: -18.6, ext: 5.4, result: "Walk", batter: "Khi Holiday" }
    ]
  },
  "Eddie Smink": {
    8: [
      // Kendrey Maduro
      { pitchType: "Sinker", velo: 93.1, spin: 2226, ivb: 17.4, hb: 17.3, ext: 5.0, result: "Swinging Strike", batter: "Kendrey Maduro" },
      { pitchType: "Curveball", velo: 79.3, spin: 2442, ivb: -1.9, hb: -5.6, ext: 4.7, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Sinker", velo: 93.1, spin: 2162, ivb: 13.9, hb: 15.3, ext: 5.2, result: "Foul", batter: "Kendrey Maduro" },
      { pitchType: "Sinker", velo: 92.0, spin: 2129, ivb: 15.3, hb: 15.7, ext: 5.4, result: "Ball", batter: "Kendrey Maduro" },
      { pitchType: "Sinker", velo: 92.1, spin: 2100, ivb: 18.6, hb: 15.5, ext: 5.0, result: "Strikeout", batter: "Kendrey Maduro" },
      // Chase Heath
      { pitchType: "Curveball", velo: 72.4, spin: 2196, ivb: -13.1, hb: -8.3, ext: 5.2, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 91.7, spin: 2132, ivb: 13.9, hb: 20.5, ext: 4.9, result: "Called Strike", batter: "Chase Heath" },
      { pitchType: "Curveball", velo: 76.9, spin: 2405, ivb: -4.2, hb: -5.0, ext: 4.9, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 92.6, spin: 2126, ivb: 17.8, hb: 13.3, ext: 5.0, result: "Foul", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 92.7, spin: 2043, ivb: 16.1, hb: 13.7, ext: 5.3, result: "Ball", batter: "Chase Heath" },
      { pitchType: "Sinker", velo: 91.1, spin: 1905, ivb: 13.7, hb: 14.3, ext: 5.4, result: "Walk", batter: "Chase Heath" },
      // JC Vanek
      { pitchType: "Sinker", velo: 91.5, spin: 1878, ivb: 10.5, hb: 14.8, ext: 5.0, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 79.5, spin: 1456, ivb: 6.0, hb: 12.9, ext: 5.2, result: "Ball", batter: "JC Vanek" },
      { pitchType: "Changeup", velo: 79.3, spin: 1504, ivb: 4.5, hb: 12.1, ext: 5.2, result: "Foul", batter: "JC Vanek" },
      { pitchType: "Sinker", velo: 93.8, spin: 2153, ivb: 13.8, hb: 14.1, ext: 5.3, result: "Forceout", batter: "JC Vanek" },
      // Trey Fenderson
      { pitchType: "Curveball", velo: 76.7, spin: 2481, ivb: -2.4, hb: -6.1, ext: 5.0, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 90.6, spin: 2065, ivb: 14.7, hb: 17.6, ext: 5.0, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Sinker", velo: 90.1, spin: 2222, ivb: 18.3, hb: 16.8, ext: 5.2, result: "Foul", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2104, ivb: 23.0, hb: 2.9, ext: 5.2, result: "Wild Pitch", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2104, ivb: 23.0, hb: 2.9, ext: 5.2, result: "Ball", batter: "Trey Fenderson" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2240, ivb: 23.6, hb: 14.0, ext: 5.3, result: "Walk", batter: "Trey Fenderson" },
      // Ben Watson
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2081, ivb: 22.8, hb: 5.4, ext: 5.2, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2071, ivb: 21.5, hb: 8.4, ext: 5.1, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Changeup", velo: 79.7, spin: 1609, ivb: 8.3, hb: 14.7, ext: 5.2, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 91.6, spin: 2079, ivb: 11.9, hb: 17.9, ext: 5.3, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 93.1, spin: 2221, ivb: 15.5, hb: 13.2, ext: 5.5, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 92.1, spin: 2148, ivb: 14.1, hb: 15.1, ext: 5.4, result: "Foul", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 93.0, spin: 2280, ivb: 18.9, hb: 17.3, ext: 5.3, result: "Ball", batter: "Ben Watson" },
      { pitchType: "Sinker", velo: 91.7, spin: 2253, ivb: 18.4, hb: 17.8, ext: 5.5, result: "Strikeout", batter: "Ben Watson" }
    ]
  },
  "Collin Bosley-Smith": {
    9: [
      // Keegan Rodin
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2148, ivb: 20.9, hb: 5.6, ext: 5.8, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2208, ivb: 22.2, hb: 3.3, ext: 5.7, result: "Swinging Strike", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2205, ivb: 20.5, hb: 3.2, ext: 5.6, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2198, ivb: 22.2, hb: 6.0, ext: 5.7, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Slider", velo: 81.3, spin: 2727, ivb: -5.2, hb: -7.0, ext: 5.3, result: "Ball", batter: "Keegan Rodin" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2169, ivb: 20.8, hb: 5.8, ext: 5.7, result: "Walk", batter: "Keegan Rodin" },
      // Ty Powell
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2132, ivb: 22.1, hb: 6.9, ext: 5.7, result: "Foul", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2138, ivb: 21.9, hb: 4.0, ext: 5.7, result: "Ball", batter: "Ty Powell" },
      { pitchType: "Changeup", velo: 80.9, spin: 1730, ivb: 6.4, hb: 13.8, ext: 5.5, result: "Called Strike", batter: "Ty Powell" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2211, ivb: 19.0, hb: 7.2, ext: 5.8, result: "Lineout", batter: "Ty Powell" },
      // Max Hartman
      { pitchType: "Changeup", velo: 82.3, spin: 1660, ivb: 5.2, hb: 15.6, ext: 5.8, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2333, ivb: 23.6, hb: 5.4, ext: 5.6, result: "Ball", batter: "Max Hartman" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2291, ivb: 20.8, hb: 4.8, ext: 5.6, result: "Single", batter: "Max Hartman" },
      // Khi Holiday
      { pitchType: "Curveball", velo: 80.8, spin: 2536, ivb: -2.3, hb: -12.0, ext: 5.2, result: "Grounded Into DP", batter: "Khi Holiday" }
    ]
  }
};

export default pitchersData;
