const pitchersData = {
  "Ryan Calvert": {
    1: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2285, ivb: 18.6, hb: 4.6, ext: 6.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2290, ivb: 18.4, hb: 5.4, ext: 6.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2370, ivb: 20.5, hb: 9.5, ext: 6.1, result: "Groundout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Cutter", velo: 85.4, spin: 2294, ivb: 8.7, hb: -3.3, ext: 6.1, result: "Foul Bunt", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2351, ivb: 13.3, hb: 9.4, ext: 6.0, result: "Groundout", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Curveball", velo: 76.5, spin: 2479, ivb: -11.7, hb: -7.5, ext: 5.7, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 84.5, spin: 2319, ivb: 10.7, hb: 3.8, ext: 6.1, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2396, ivb: 14.9, hb: 12.0, ext: 6.0, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 77.9, spin: 2617, ivb: -14.4, hb: -6.1, ext: 5.9, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2293, ivb: 17.4, hb: 9.5, ext: 6.2, result: "Strikeout", batter: "Shane Lewis" }
    ],
    2: [
      // Dawson Willis
      { pitchType: "Slider", velo: 83.4, spin: 2154, ivb: 3.5, hb: -2.0, ext: 6.0, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 76.3, spin: 2571, ivb: -12.4, hb: -10.2, ext: 5.7, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2316, ivb: 17.7, hb: 10.2, ext: 6.2, result: "Single", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "", velo: 89.9, spin: 2346, ivb: 17.0, hb: 10.9, ext: 6.3, result: "Stolen Base 2B", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2346, ivb: 17.0, hb: 10.9, ext: 6.3, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "", velo: 84.4, spin: 2241, ivb: 10.6, hb: 3.9, ext: 6.1, result: "Stolen Base 3B", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 84.4, spin: 2241, ivb: 10.6, hb: 3.9, ext: 6.1, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 84.8, spin: 2460, ivb: 14.9, hb: -0.1, ext: 6.3, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 76.2, spin: 2715, ivb: -14.3, hb: -6.4, ext: 5.8, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 76.7, spin: 2552, ivb: -13.7, hb: -10.5, ext: 5.7, result: "Single", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2344, ivb: 15.2, hb: 12.3, ext: 6.2, result: "Pop Out", batter: "Anthony Diaz" },
      // Truitt Madonna
      { pitchType: "Slider", velo: 84.6, spin: 2300, ivb: 8.7, hb: 7.4, ext: 6.3, result: "Ball In Dirt", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2329, ivb: 16.1, hb: 10.0, ext: 6.1, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Curveball", velo: 76.3, spin: 2550, ivb: -14.5, hb: -6.4, ext: 5.7, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Cutter", velo: 85.2, spin: 2368, ivb: 11.1, hb: -1.4, ext: 6.1, result: "Swinging Strike", batter: "Truitt Madonna" },
      { pitchType: "Cutter", velo: 85.6, spin: 2369, ivb: 5.1, hb: 0.3, ext: 6.2, result: "Forceout", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Slider", velo: 84.1, spin: 2347, ivb: 9.5, hb: -0.2, ext: 6.0, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2294, ivb: 15.0, hb: 12.8, ext: 6.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2271, ivb: 15.1, hb: 10.8, ext: 6.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Cutter", velo: 85.4, spin: 2406, ivb: 7.5, hb: 0.2, ext: 6.3, result: "Field Error", batter: "Tervell Johnson" },
      // Jose Silva
      { pitchType: "Slider", velo: 84.5, spin: 2420, ivb: 6.1, hb: -2.0, ext: 6.1, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 76.1, spin: 2523, ivb: -13.4, hb: -9.2, ext: 5.8, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 78.5, spin: 2443, ivb: -10.8, hb: -6.2, ext: 6.0, result: "Ball In Dirt", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2227, ivb: 15.8, hb: 7.7, ext: 6.4, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 83.9, spin: 2231, ivb: 7.5, hb: -3.1, ext: 6.3, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2328, ivb: 21.0, hb: 8.0, ext: 6.3, result: "Strikeout", batter: "Jose Silva" }
    ],
    3: [
      // Trey Lipsey
      { pitchType: "Slider", velo: 83.9, spin: 2294, ivb: 7.4, hb: 2.0, ext: 6.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2276, ivb: 16.3, hb: 11.3, ext: 6.1, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 83.0, spin: 2262, ivb: 8.2, hb: 0.3, ext: 6.2, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 89.9, spin: 2348, ivb: 15.4, hb: 13.4, ext: 6.3, result: "Single", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Sinker", velo: 89.3, spin: 2340, ivb: 14.3, hb: 15.8, ext: 6.1, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 84.4, spin: 2333, ivb: 7.8, hb: -0.2, ext: 6.0, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Cutter", velo: 85.4, spin: 2306, ivb: 8.7, hb: 1.8, ext: 6.1, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Cutter", velo: 86.0, spin: 2363, ivb: 7.3, hb: 2.6, ext: 6.2, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Sinker", velo: 91.5, spin: 2364, ivb: 17.4, hb: 13.8, ext: 6.3, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "", velo: 76.5, spin: 2588, ivb: -12.6, hb: -9.5, ext: 5.6, result: "Stolen Base 2B", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 76.5, spin: 2588, ivb: -12.6, hb: -9.5, ext: 5.6, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 84.2, spin: 2278, ivb: 4.7, hb: -1.4, ext: 6.3, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.2, spin: 2189, ivb: 14.5, hb: 8.7, ext: 6.4, result: "Strikeout", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Curveball", velo: 77.0, spin: 2388, ivb: -15.1, hb: -2.9, ext: 5.9, result: "Ball In Dirt", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 83.7, spin: 2248, ivb: 7.4, hb: -1.9, ext: 6.2, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Cutter", velo: 84.7, spin: 2260, ivb: 11.3, hb: 2.8, ext: 6.3, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "", velo: 90.1, spin: 2293, ivb: 15.0, hb: 13.2, ext: 6.3, result: "Stolen Base 3B", batter: "Shane Lewis" },
      { pitchType: "Sinker", velo: 90.1, spin: 2293, ivb: 15.0, hb: 13.2, ext: 6.3, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Curveball", velo: 78.0, spin: 2341, ivb: -14.0, hb: -3.3, ext: 5.9, result: "Strikeout", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Curveball", velo: 76.4, spin: 2475, ivb: -14.9, hb: -6.2, ext: 5.7, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 75.2, spin: 2394, ivb: -15.2, hb: -7.9, ext: 5.8, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 85.4, spin: 2185, ivb: 8.1, hb: -0.2, ext: 6.4, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 78.0, spin: 2511, ivb: -15.3, hb: -6.2, ext: 6.1, result: "Ball In Dirt", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 85.0, spin: 2418, ivb: 10.8, hb: -3.8, ext: 6.3, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 77.6, spin: 2482, ivb: -11.6, hb: -6.7, ext: 5.7, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2209, ivb: 14.9, hb: 10.7, ext: 6.4, result: "Walk", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2368, ivb: 15.2, hb: 10.6, ext: 6.4, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2197, ivb: 17.9, hb: 7.5, ext: 6.2, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 85.4, spin: 2215, ivb: 10.3, hb: 1.3, ext: 6.4, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2100, ivb: 15.0, hb: 10.5, ext: 6.3, result: "Groundout", batter: "Lance Trippel" }
    ],
    4: [
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2217, ivb: 16.7, hb: 12.4, ext: 6.3, result: "Double", batter: "Anthony Diaz" },
      // Truitt Madonna
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2368, ivb: 18.2, hb: 4.4, ext: 6.5, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 83.7, spin: 2286, ivb: 11.6, hb: 1.0, ext: 6.4, result: "Double", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Curveball", velo: 76.8, spin: 2373, ivb: -9.9, hb: -3.1, ext: 5.6, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2291, ivb: 13.8, hb: 11.0, ext: 6.4, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2335, ivb: 14.1, hb: 9.5, ext: 6.4, result: "Groundout", batter: "Tervell Johnson" },
      // Jose Silva
      { pitchType: "Curveball", velo: 76.0, spin: 2490, ivb: -11.0, hb: -7.3, ext: 5.8, result: "Groundout", batter: "Jose Silva" },
      // Trey Lipsey
      { pitchType: "Changeup", velo: 78.6, spin: 1426, ivb: 6.2, hb: 11.6, ext: 6.6, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2281, ivb: 18.0, hb: 8.8, ext: 6.4, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 74.7, spin: 2411, ivb: -6.8, hb: -7.9, ext: 6.0, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 83.5, spin: 2256, ivb: 6.7, hb: -2.8, ext: 6.2, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2281, ivb: 18.4, hb: 6.8, ext: 6.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 84.1, spin: 2261, ivb: 7.6, hb: -4.4, ext: 6.4, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Curveball", velo: 76.2, spin: 2574, ivb: -9.9, hb: -6.0, ext: 5.9, result: "Double", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2190, ivb: 13.5, hb: 9.5, ext: 6.3, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 83.7, spin: 2232, ivb: 11.1, hb: -0.9, ext: 6.1, result: "Groundout", batter: "Eddie Hacopian" }
    ],
    5: [
      // Shane Lewis
      { pitchType: "Curveball", velo: 75.7, spin: 2418, ivb: -10.6, hb: -12.5, ext: 5.6, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2294, ivb: 23.1, hb: 8.7, ext: 6.3, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 83.2, spin: 2195, ivb: 14.5, hb: 5.1, ext: 6.4, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2213, ivb: 18.9, hb: 9.5, ext: 6.3, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 83.1, spin: 2218, ivb: 12.7, hb: 1.1, ext: 6.3, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Cutter", velo: 84.1, spin: 2238, ivb: 12.0, hb: -3.0, ext: 6.4, result: "Strikeout", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Slider", velo: 83.0, spin: 2224, ivb: 13.0, hb: -0.1, ext: 6.3, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 83.9, spin: 2292, ivb: 11.7, hb: -1.3, ext: 6.1, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 75.7, spin: 2416, ivb: -9.2, hb: -4.7, ext: 5.8, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 83.8, spin: 2359, ivb: 7.7, hb: -5.1, ext: 6.2, result: "Double", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Slider", velo: 84.0, spin: 2248, ivb: 10.9, hb: 2.9, ext: 6.3, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 84.2, spin: 2182, ivb: 6.7, hb: 2.5, ext: 6.1, result: "Ball In Dirt", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 89.6, spin: 2282, ivb: 15.2, hb: 13.7, ext: 6.2, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2227, ivb: 18.2, hb: 7.5, ext: 6.3, result: "Lineout", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Curveball", velo: 75.0, spin: 2448, ivb: -11.7, hb: -5.4, ext: 5.7, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2210, ivb: 18.2, hb: 5.9, ext: 6.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 78.7, spin: 1414, ivb: 10.2, hb: 10.4, ext: 6.6, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 83.0, spin: 2266, ivb: 7.8, hb: -0.5, ext: 6.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Cutter", velo: 85.6, spin: 2278, ivb: 11.5, hb: 0.0, ext: 6.4, result: "Strikeout", batter: "Anthony Diaz" }
    ],
    6: [
      // Truitt Madonna
      { pitchType: "Sinker", velo: 89.1, spin: 2289, ivb: 13.1, hb: 13.7, ext: 6.2, result: "Called Strike", batter: "Truitt Madonna" },
      { pitchType: "Curveball", velo: 74.1, spin: 2487, ivb: -12.9, hb: -7.4, ext: 5.8, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Curveball", velo: 75.1, spin: 2498, ivb: -8.6, hb: -2.3, ext: 5.9, result: "Swinging Strike", batter: "Truitt Madonna" },
      { pitchType: "Curveball", velo: 77.1, spin: 2574, ivb: -14.7, hb: -4.1, ext: 6.0, result: "Strikeout", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Curveball", velo: 74.1, spin: 2525, ivb: -17.2, hb: -8.2, ext: 6.1, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 83.5, spin: 2271, ivb: 7.8, hb: 4.1, ext: 6.4, result: "Groundout", batter: "Tervell Johnson" },
      // Jose Silva
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2285, ivb: 15.1, hb: 10.7, ext: 6.4, result: "Lineout", batter: "Jose Silva" }
    ],
  },
  "Luis Misla": {
    7: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2440, ivb: 16.9, hb: -6.0, ext: 6.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2351, ivb: 13.3, hb: -5.6, ext: 6.3, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2318, ivb: 14.1, hb: -0.2, ext: 6.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 80.0, spin: 2671, ivb: 2.1, hb: 12.5, ext: 5.6, result: "Hit By Pitch", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 88.4, spin: 2400, ivb: 12.7, hb: -2.7, ext: 6.1, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2374, ivb: 15.3, hb: -4.8, ext: 6.3, result: "Grounded Into DP", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2424, ivb: 14.5, hb: -5.7, ext: 6.4, result: "Groundout", batter: "Shane Lewis" }
    ]
  },
  "Aidan Weaver": {
    8: [
      // Dawson Willis
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2071, ivb: 14.9, hb: 8.0, ext: 6.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2120, ivb: 18.3, hb: 7.2, ext: 6.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2144, ivb: 14.4, hb: 9.9, ext: 6.7, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2099, ivb: 15.5, hb: 6.9, ext: 6.6, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2130, ivb: 14.7, hb: 11.1, ext: 6.6, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 96.3, spin: 2113, ivb: 10.6, hb: 8.0, ext: 6.6, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2136, ivb: 15.7, hb: 7.4, ext: 6.4, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 85.7, spin: 2030, ivb: 1.1, hb: -0.2, ext: 6.5, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2008, ivb: 13.5, hb: 6.6, ext: 6.8, result: "Single", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2031, ivb: 13.4, hb: 9.1, ext: 6.6, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "", velo: 94.1, spin: 2101, ivb: 14.8, hb: 7.3, ext: 6.8, result: "Stolen Base 2B", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2101, ivb: 14.8, hb: 7.3, ext: 6.8, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2057, ivb: 16.1, hb: 8.4, ext: 6.5, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2060, ivb: 14.8, hb: 3.6, ext: 6.5, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 85.4, spin: 2159, ivb: 1.0, hb: -0.2, ext: 6.4, result: "Strikeout", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2130, ivb: 10.2, hb: 10.1, ext: 7.0, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2218, ivb: 15.7, hb: 12.1, ext: 6.8, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2046, ivb: 9.9, hb: 10.1, ext: 6.7, result: "Swinging Strike", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 83.1, spin: 2105, ivb: -1.7, hb: -1.5, ext: 6.3, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2061, ivb: 14.8, hb: 10.2, ext: 6.6, result: "Double", batter: "Anthony Diaz" },
      // Truitt Madonna
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2045, ivb: 13.1, hb: 1.3, ext: 6.6, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2100, ivb: 12.2, hb: 10.2, ext: 6.5, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 84.3, spin: 2154, ivb: -0.3, hb: -2.5, ext: 6.5, result: "Foul", batter: "Truitt Madonna" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2000, ivb: 15.0, hb: 5.1, ext: 6.9, result: "Ball", batter: "Truitt Madonna" },
      { pitchType: "Slider", velo: 84.8, spin: 2070, ivb: -0.5, hb: -1.9, ext: 6.5, result: "Strikeout", batter: "Truitt Madonna" },
      // Tervell Johnson
      { pitchType: "Slider", velo: 84.0, spin: 1992, ivb: -3.2, hb: -0.5, ext: 6.3, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 83.9, spin: 2088, ivb: -3.1, hb: -1.8, ext: 6.4, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 81.8, spin: 2025, ivb: -4.8, hb: -1.3, ext: 6.6, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2005, ivb: 10.8, hb: 9.6, ext: 6.9, result: "Single", batter: "Tervell Johnson" },
      // Jose Silva
      { pitchType: "Slider", velo: 85.7, spin: 2162, ivb: 1.3, hb: -2.8, ext: 6.6, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2033, ivb: 11.8, hb: 7.4, ext: 7.0, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2126, ivb: 16.9, hb: 4.8, ext: 6.8, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 85.6, spin: 2229, ivb: 1.6, hb: -1.6, ext: 6.3, result: "Single", batter: "Jose Silva" },
      // Caden Merritt
      { pitchType: "Slider", velo: 85.1, spin: 2038, ivb: 0.2, hb: -1.3, ext: 6.7, result: "Ball In Dirt", batter: "Caden Merritt" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2142, ivb: 17.8, hb: 4.6, ext: 6.6, result: "Foul", batter: "Caden Merritt" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2079, ivb: 16.7, hb: 0.4, ext: 6.8, result: "Stolen Base 2B", batter: "Caden Merritt" }
    ]
  },
  "JJ Almeda": {
    9: [
      // Caden Merritt
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2430, ivb: 21.7, hb: 8.0, ext: 6.1, result: "Foul", batter: "Caden Merritt" },
      { pitchType: "Curveball", velo: 80.2, spin: 2641, ivb: -3.1, hb: -6.7, ext: 5.6, result: "Swinging Strike (Blocked)", batter: "Caden Merritt" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2195, ivb: 15.9, hb: 4.8, ext: 5.7, result: "Ball", batter: "Caden Merritt" },
      { pitchType: "Curveball", velo: 80.0, spin: 2596, ivb: -3.0, hb: -9.3, ext: 5.6, result: "Ball", batter: "Caden Merritt" },
      { pitchType: "Curveball", velo: 80.1, spin: 2601, ivb: -1.9, hb: -5.3, ext: 5.6, result: "Strikeout", batter: "Caden Merritt" },
      // Eddie Hacopian
      { pitchType: "Curveball", velo: 81.1, spin: 2487, ivb: -1.0, hb: -3.7, ext: 5.5, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 80.3, spin: 2522, ivb: -1.6, hb: -4.2, ext: 5.6, result: "Swinging Strike", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 79.2, spin: 2608, ivb: -3.7, hb: -11.7, ext: 5.8, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 81.3, spin: 2627, ivb: -1.5, hb: -6.1, ext: 5.5, result: "Single", batter: "Eddie Hacopian" },
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2313, ivb: 17.2, hb: 8.9, ext: 6.0, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "", velo: 88.7, spin: 2293, ivb: 18.0, hb: 12.8, ext: 5.8, result: "Stolen Base 2B", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 2293, ivb: 18.0, hb: 12.8, ext: 5.8, result: "Ball In Dirt", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 79.2, spin: 2767, ivb: -1.5, hb: -2.3, ext: 5.4, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2396, ivb: 12.6, hb: 8.9, ext: 6.0, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Slider", velo: 81.2, spin: 2909, ivb: 1.4, hb: -3.0, ext: 5.3, result: "Strikeout", batter: "Shane Lewis" },
      // Dawson Willis
      { pitchType: "Cutter", velo: 89.3, spin: 2130, ivb: 15.4, hb: 2.9, ext: 5.8, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2436, ivb: 17.3, hb: 5.2, ext: 6.0, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2489, ivb: 17.5, hb: 3.9, ext: 5.9, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 80.0, spin: 2652, ivb: -6.1, hb: -5.1, ext: 5.5, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 79.7, spin: 2728, ivb: 3.2, hb: -5.4, ext: 5.5, result: "Walk", batter: "Dawson Willis" },
      // Lance Trippel
      { pitchType: "Curveball", velo: 79.5, spin: 2708, ivb: 2.5, hb: -7.0, ext: 5.3, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 80.8, spin: 2723, ivb: -4.9, hb: -5.5, ext: 5.5, result: "Swinging Strike", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 79.9, spin: 2838, ivb: 0.1, hb: -8.8, ext: 5.5, result: "Strikeout", batter: "Lance Trippel" }
    ]
  }
};

export default pitchersData;
