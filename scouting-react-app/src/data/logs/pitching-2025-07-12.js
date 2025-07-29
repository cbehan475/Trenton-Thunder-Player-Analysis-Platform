const pitchersData = {
  "Brian Young": {
    1: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2295, ivb: 11.6, hb: -2.7, ext: 6.2, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 2288, ivb: 9.9, hb: -6.5, ext: 6.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2374, ivb: 15.2, hb: -5.1, ext: 6.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 87.9, spin: 2365, ivb: 12.0, hb: -0.8, ext: 6.2, result: "Lineout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2353, ivb: 11.6, hb: -6.8, ext: 6.3, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2337, ivb: 12.9, hb: -3.7, ext: 6.4, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 2416, ivb: 16.1, hb: -3.7, ext: 6.4, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2417, ivb: 11.7, hb: -5.4, ext: 6.2, result: "Single", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 87.7, spin: 2331, ivb: 13.6, hb: -1.2, ext: 6.5, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Changeup", velo: 80.3, spin: 1491, ivb: 1.2, hb: -9.5, ext: 5.8, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 80.8, spin: 2051, ivb: -15.9, hb: 12.6, ext: 5.6, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 88.3, spin: 2295, ivb: 7.6, hb: 0.3, ext: 6.3, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 80.9, spin: 2128, ivb: -14.8, hb: 9.2, ext: 5.7, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 87.5, spin: 2240, ivb: 7.0, hb: 0.5, ext: 6.4, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Changeup", velo: 81.2, spin: 1400, ivb: -0.5, hb: -10.3, ext: 5.9, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 79.4, spin: 2214, ivb: -13.7, hb: 13.3, ext: 5.8, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2362, ivb: 11.4, hb: -3.5, ext: 6.3, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 87.9, spin: 2285, ivb: 9.7, hb: -2.2, ext: 6.4, result: "Groundout", batter: "Shane Lewis" }
    ],
    2: [
      // Dawson Willis
      { pitchType: "Slider", velo: 85.9, spin: 2153, ivb: 11.9, hb: -4.1, ext: 6.4, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2253, ivb: 9.2, hb: -3.0, ext: 6.4, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 80.0, spin: 1855, ivb: -11.9, hb: 9.3, ext: 5.8, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 87.1, spin: 2206, ivb: 10.3, hb: -2.3, ext: 6.6, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Changeup", velo: 81.0, spin: 1508, ivb: 2.2, hb: -10.8, ext: 6.0, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 79.8, spin: 2219, ivb: -11.8, hb: 11.5, ext: 5.8, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 86.9, spin: 2163, ivb: 11.9, hb: -3.9, ext: 6.4, result: "Strikeout", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Curveball", velo: 78.9, spin: 1954, ivb: -11.2, hb: 7.8, ext: 5.8, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Changeup", velo: 79.5, spin: 1387, ivb: -1.5, hb: -11.0, ext: 6.2, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 86.7, spin: 2291, ivb: 10.3, hb: -2.9, ext: 6.5, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 79.6, spin: 2146, ivb: -7.6, hb: 11.9, ext: 5.7, result: "Single", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Slider", velo: 86.3, spin: 2283, ivb: 12.2, hb: -4.5, ext: 6.4, result: "Single", batter: "Anthony Diaz" },
      // Walter Urbon
      { pitchType: "Changeup", velo: 86.7, spin: 2357, ivb: 13.6, hb: -8.4, ext: 6.4, result: "Called Strike", batter: "Walter Urbon" },
      { pitchType: "Changeup", velo: 81.2, spin: 1497, ivb: -0.6, hb: -7.9, ext: 6.2, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Slider", velo: 79.0, spin: 2133, ivb: -5.6, hb: 11.4, ext: 5.9, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Changeup", velo: 86.5, spin: 2264, ivb: 16.2, hb: -8.0, ext: 6.5, result: "Called Strike", batter: "Walter Urbon" },
      { pitchType: "Changeup", velo: 87.1, spin: 2247, ivb: 12.1, hb: -7.9, ext: 6.5, result: "Strikeout", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Curveball", velo: 78.4, spin: 2123, ivb: -11.1, hb: 12.2, ext: 5.9, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 79.1, spin: 2101, ivb: -10.3, hb: 11.4, ext: 5.8, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 86.5, spin: 2157, ivb: 11.3, hb: -5.8, ext: 6.4, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 79.4, spin: 2115, ivb: -11.5, hb: 12.8, ext: 5.9, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 85.8, spin: 2254, ivb: 12.8, hb: -3.2, ext: 6.6, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 86.5, spin: 2278, ivb: 13.6, hb: -3.9, ext: 6.6, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 79.3, spin: 1949, ivb: -13.0, hb: 4.2, ext: 5.9, result: "Groundout", batter: "Tervell Johnson" }
    ],
    3: [
      // Jose Silva
      { pitchType: "Changeup", velo: 85.4, spin: 2144, ivb: 13.8, hb: -9.6, ext: 6.2, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Changeup", velo: 84.8, spin: 2052, ivb: 11.3, hb: -7.3, ext: 6.3, result: "Flyout", batter: "Jose Silva" },
      // Trey Lipsey
      { pitchType: "Slider", velo: 78.3, spin: 2002, ivb: -6.8, hb: 8.6, ext: 5.8, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 80.2, spin: 2271, ivb: -0.4, hb: 2.5, ext: 5.8, result: "Flyout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Changeup", velo: 78.0, spin: 1531, ivb: 3.1, hb: -11.8, ext: 6.3, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 85.4, spin: 2067, ivb: 9.7, hb: -4.5, ext: 6.5, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Changeup", velo: 79.3, spin: 1521, ivb: -1.5, hb: -11.1, ext: 6.2, result: "Single", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Changeup", velo: 85.2, spin: 2086, ivb: 14.1, hb: -8.3, ext: 6.4, result: "Single", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Slider", velo: 78.9, spin: 2014, ivb: -2.7, hb: 11.5, ext: 5.8, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Changeup", velo: 85.9, spin: 2076, ivb: 13.3, hb: -9.3, ext: 6.4, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 78.9, spin: 2182, ivb: -10.5, hb: 6.6, ext: 5.8, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 79.6, spin: 2005, ivb: -6.9, hb: 11.6, ext: 5.9, result: "Flyout", batter: "Dawson Willis" }
    ],
    4: [
      // Lance Trippel
      { pitchType: "Slider", velo: 85.1, spin: 2279, ivb: 17.1, hb: -5.3, ext: 6.4, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 85.5, spin: 2171, ivb: 15.0, hb: -6.5, ext: 6.5, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 80.0, spin: 2241, ivb: -6.1, hb: 6.9, ext: 5.7, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 78.4, spin: 1907, ivb: -5.6, hb: 11.5, ext: 5.9, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 83.9, spin: 2246, ivb: 9.8, hb: -0.6, ext: 6.4, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 79.0, spin: 2065, ivb: -2.9, hb: 12.1, ext: 5.9, result: "Pop Out", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Curveball", velo: 77.4, spin: 2097, ivb: -13.2, hb: 9.8, ext: 6.0, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 84.2, spin: 2060, ivb: 9.7, hb: -2.6, ext: 6.6, result: "Groundout", batter: "Anthony Diaz" },
      // Walter Urbon
      { pitchType: "Slider", velo: 84.6, spin: 2155, ivb: 13.1, hb: -6.6, ext: 6.5, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Slider", velo: 84.1, spin: 2026, ivb: 11.3, hb: -3.5, ext: 6.4, result: "Groundout", batter: "Walter Urbon" }
    ],
    5: [
      // Tervell Johnson
      { pitchType: "Slider", velo: 85.2, spin: 2025, ivb: 10.9, hb: -4.9, ext: 6.5, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 84.4, spin: 2005, ivb: 11.8, hb: -5.4, ext: 6.4, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 78.5, spin: 2123, ivb: -4.7, hb: 7.6, ext: 5.8, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 83.9, spin: 2033, ivb: 12.2, hb: -6.2, ext: 6.2, result: "Single", batter: "Tervell Johnson" },
      // Jose Silva
      { pitchType: "Slider", velo: 77.8, spin: 2086, ivb: -7.8, hb: 7.7, ext: 5.8, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 77.9, spin: 2195, ivb: -4.7, hb: 12.3, ext: 5.9, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Changeup", velo: 83.7, spin: 2197, ivb: 14.0, hb: -9.5, ext: 6.5, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Changeup", velo: 83.3, spin: 2126, ivb: 11.2, hb: -7.2, ext: 6.7, result: "Single", batter: "Jose Silva" },
      // Trey Lipsey
      { pitchType: "Slider", velo: 85.7, spin: 2051, ivb: 14.3, hb: -2.7, ext: 6.3, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 78.6, spin: 2134, ivb: -4.5, hb: 14.2, ext: 5.9, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 83.7, spin: 2140, ivb: 12.1, hb: -5.5, ext: 6.5, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 78.4, spin: 2383, ivb: -4.6, hb: 6.3, ext: 5.8, result: "Flyout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Slider", velo: 84.2, spin: 2144, ivb: 9.3, hb: -3.3, ext: 6.6, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 84.5, spin: 2107, ivb: 10.7, hb: -4.6, ext: 6.6, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 76.7, spin: 1820, ivb: -2.6, hb: 10.1, ext: 5.9, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.8, spin: 2122, ivb: 12.9, hb: -7.7, ext: 6.4, result: "Walk", batter: "Eddie Hacopian" }
    ]
  },
  "Collin Bosley-Smith": {
    5: [
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2347, ivb: 20.9, hb: 5.6, ext: 6.3, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2175, ivb: 20.8, hb: 8.0, ext: 6.2, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2291, ivb: 16.7, hb: 10.8, ext: 6.3, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2193, ivb: 21.2, hb: 1.7, ext: 6.2, result: "Strikeout", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Curveball", velo: 79.3, spin: 2601, ivb: -6.4, hb: -11.4, ext: 5.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2283, ivb: 23.5, hb: 2.9, ext: 6.3, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 80.5, spin: 2548, ivb: 0.1, hb: -4.3, ext: 5.8, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2228, ivb: 19.5, hb: 5.2, ext: 6.3, result: "Lineout", batter: "Dawson Willis" }
    ],
    6: [
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2172, ivb: 20.1, hb: 6.2, ext: 6.2, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2106, ivb: 18.6, hb: 7.2, ext: 6.4, result: "Single", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Changeup", velo: 82.2, spin: 1531, ivb: 8.6, hb: 13.3, ext: 6.4, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2215, ivb: 18.5, hb: 8.5, ext: 6.2, result: "Single", batter: "Anthony Diaz" },
      // Walter Urbon
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2072, ivb: 15.4, hb: 9.8, ext: 6.2, result: "Single", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Curveball", velo: 81.1, spin: 2499, ivb: -4.4, hb: -4.9, ext: 5.6, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 78.4, spin: 2519, ivb: -1.1, hb: -12.2, ext: 5.8, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2082, ivb: 15.4, hb: 8.4, ext: 6.2, result: "Foul Tip", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2153, ivb: 14.9, hb: 11.0, ext: 6.1, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 77.8, spin: 2479, ivb: -5.6, hb: -11.4, ext: 5.7, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2189, ivb: 21.1, hb: 1.6, ext: 6.5, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 78.3, spin: 2538, ivb: -9.0, hb: -8.1, ext: 6.1, result: "Ball In Dirt", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2133, ivb: 19.5, hb: 6.1, ext: 6.3, result: "Lineout", batter: "Tervell Johnson" },
      // Jose Silva
      { pitchType: "Curveball", velo: 78.7, spin: 2506, ivb: -3.0, hb: -7.1, ext: 6.1, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 79.3, spin: 2511, ivb: -3.5, hb: -12.3, ext: 5.9, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2190, ivb: 18.5, hb: 4.1, ext: 6.2, result: "Ball In Dirt", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2217, ivb: 21.5, hb: 1.1, ext: 6.3, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2233, ivb: 20.5, hb: 0.5, ext: 6.5, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2217, ivb: 19.5, hb: 2.5, ext: 6.3, result: "Strikeout", batter: "Jose Silva" }
    ]
  },
  "Luis Misla": {
    6: [
      // Trey Lipsey
      { pitchType: "", velo: 80.9, spin: 2793, ivb: 4.8, hb: 7.0, ext: 5.8, result: "Wild Pitch", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 80.9, spin: 2793, ivb: 4.8, hb: 7.0, ext: 5.8, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 88.6, spin: 2485, ivb: 17.2, hb: -8.9, ext: 6.2, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 88.5, spin: 2361, ivb: 15.5, hb: -9.6, ext: 6.3, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 79.2, spin: 2881, ivb: -5.1, hb: 5.0, ext: 5.7, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2455, ivb: 14.3, hb: -5.2, ext: 6.2, result: "Single", batter: "Trey Lipsey" }
    ],
    7: [
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2479, ivb: 16.0, hb: -8.4, ext: 6.2, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2406, ivb: 17.1, hb: -5.1, ext: 6.1, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2309, ivb: 16.4, hb: -6.5, ext: 6.3, result: "Double", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Changeup", velo: 86.7, spin: 2462, ivb: 16.8, hb: -11.1, ext: 6.2, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 78.8, spin: 2844, ivb: -4.7, hb: 9.7, ext: 5.7, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Changeup", velo: 88.2, spin: 2484, ivb: 17.3, hb: -9.8, ext: 6.3, result: "Ball In Dirt", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 79.1, spin: 2872, ivb: -3.1, hb: 7.6, ext: 5.6, result: "Ball In Dirt", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2553, ivb: 16.8, hb: -4.9, ext: 6.2, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 2442, ivb: 17.1, hb: -5.3, ext: 6.3, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 78.6, spin: 2779, ivb: -3.3, hb: 3.9, ext: 5.5, result: "Groundout", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Slider", velo: 78.3, spin: 2834, ivb: -4.9, hb: 4.9, ext: 5.6, result: "Fielders Choice", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 88.0, spin: 2359, ivb: 15.4, hb: -7.5, ext: 6.2, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Changeup", velo: 88.0, spin: 2556, ivb: 13.8, hb: -9.4, ext: 6.4, result: "Single", batter: "Lance Trippel" },
      // Caden Merritt
      { pitchType: "", velo: 77.7, spin: 2853, ivb: -2.6, hb: 7.8, ext: 5.6, result: "Stolen Base 3B", batter: "Caden Merritt" },
      { pitchType: "Slider", velo: 77.7, spin: 2853, ivb: -2.6, hb: 7.8, ext: 5.6, result: "Called Strike", batter: "Caden Merritt" },
      // Walter Urbon
      { pitchType: "Slider", velo: 77.8, spin: 2771, ivb: -6.5, hb: 7.2, ext: 5.7, result: "Foul", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 2354, ivb: 17.1, hb: -7.3, ext: 6.4, result: "Foul", batter: "Walter Urbon" },
      { pitchType: "Slider", velo: 78.8, spin: 2824, ivb: -9.3, hb: 7.3, ext: 5.6, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Slider", velo: 77.3, spin: 2748, ivb: -9.5, hb: 7.5, ext: 5.4, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Slider", velo: 78.5, spin: 2793, ivb: -8.6, hb: 4.7, ext: 5.8, result: "Foul", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 2548, ivb: 16.7, hb: -6.5, ext: 6.4, result: "Sac Fly", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Slider", velo: 78.4, spin: 2750, ivb: -2.7, hb: 8.1, ext: 5.7, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 88.1, spin: 2388, ivb: 12.9, hb: -3.2, ext: 6.2, result: "Pop Out", batter: "Tervell Johnson" }
    ]
  },
  "Zach Silfies": {
    8: [
      // Jose Silva
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 1993, ivb: 18.9, hb: 12.8, ext: 6.2, result: "Foul Tip", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 1914, ivb: 13.5, hb: 9.9, ext: 6.0, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 68.8, spin: 2289, ivb: -6.9, hb: -9.2, ext: 5.5, result: "Single", batter: "Jose Silva" },
      // Trey Lipsey
      { pitchType: "Slider", velo: 80.5, spin: 2012, ivb: -0.3, hb: -9.1, ext: 5.8, result: "Single", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 1966, ivb: 15.1, hb: 11.3, ext: 6.0, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.0, spin: 1955, ivb: 4.7, hb: -7.5, ext: 6.0, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 80.7, spin: 1942, ivb: 1.5, hb: -7.2, ext: 6.0, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 74.1, spin: 2172, ivb: -5.1, hb: -10.3, ext: 5.6, result: "Forceout", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 1835, ivb: 10.6, hb: 8.7, ext: 5.9, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 79.5, spin: 1941, ivb: -4.0, hb: -9.6, ext: 5.8, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 88.3, spin: 1859, ivb: 10.1, hb: 8.0, ext: 5.7, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Sinker", velo: 89.2, spin: 1894, ivb: 12.2, hb: 13.5, ext: 6.0, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 68.9, spin: 2315, ivb: -9.6, hb: -14.4, ext: 5.0, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 79.6, spin: 2143, ivb: -1.6, hb: -5.3, ext: 5.7, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2051, ivb: 14.6, hb: 10.1, ext: 6.0, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 67.8, spin: 2243, ivb: -9.0, hb: -9.7, ext: 5.6, result: "Strikeout", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Curveball", velo: 68.6, spin: 2327, ivb: -9.1, hb: -12.5, ext: 5.5, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 67.7, spin: 2303, ivb: -7.4, hb: -12.8, ext: 5.6, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 80.5, spin: 2052, ivb: -0.2, hb: -4.7, ext: 5.8, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 79.3, spin: 2109, ivb: 1.0, hb: -7.7, ext: 5.8, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 68.7, spin: 2456, ivb: -6.3, hb: -12.5, ext: 5.5, result: "Home Run", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 1973, ivb: 12.3, hb: 10.4, ext: 5.6, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 89.8, spin: 1994, ivb: 9.4, hb: 10.5, ext: 5.9, result: "Groundout", batter: "Lance Trippel" }
    ]
  }
};

export default pitchersData;
