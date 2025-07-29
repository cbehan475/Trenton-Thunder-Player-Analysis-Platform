const pitchersData = {
  "Tommy Case": {
    1: [
      // Sam Miller
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 1934, ivb: 20.9, hb: 9.7, ext: 4.6, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 76.2, spin: 2483, ivb: -14.6, hb: -15.4, ext: 4.3, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2261, ivb: 20.6, hb: 13.1, ext: 4.7, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 77.4, spin: 2694, ivb: -16.9, hb: -18.1, ext: 4.2, result: "Field Error", batter: "Sam Miller" },
      // Tyler Pettorini
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2380, ivb: 22.6, hb: 14.0, ext: 4.7, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 90.8, spin: 2363, ivb: 19.6, hb: 16.0, ext: 4.5, result: "Triple", batter: "Tyler Pettorini" },
      // Jonny McGill
      { pitchType: "Curveball", velo: 77.5, spin: 2599, ivb: -11.2, hb: -15.1, ext: 4.2, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2253, ivb: 22.3, hb: 12.1, ext: 4.7, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Sinker", velo: 91.8, spin: 2185, ivb: 21.1, hb: 15.4, ext: 4.6, result: "Foul", batter: "Jonny McGill" },
      { pitchType: "Changeup", velo: 85.9, spin: 1824, ivb: 2.4, hb: 17.6, ext: 5.0, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2408, ivb: 20.8, hb: 14.5, ext: 4.7, result: "Walk", batter: "Jonny McGill" },
      // Beau Sylvester
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2397, ivb: 21.5, hb: 12.4, ext: 4.8, result: "Double", batter: "Beau Sylvester" },
      // Connor Hicks
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2343, ivb: 23.8, hb: 11.1, ext: 4.8, result: "Called Strike", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2284, ivb: 22.6, hb: 10.5, ext: 4.6, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2451, ivb: 22.2, hb: 8.3, ext: 4.6, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 86.6, spin: 1602, ivb: 5.3, hb: 14.5, ext: 5.0, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2407, ivb: 19.7, hb: 12.6, ext: 4.4, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 87.1, spin: 1686, ivb: 9.0, hb: 13.9, ext: 4.9, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2320, ivb: 19.9, hb: 10.4, ext: 4.6, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "Curveball", velo: 76.3, spin: 2664, ivb: -10.7, hb: -13.0, ext: 4.3, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2303, ivb: 17.6, hb: 13.6, ext: 4.6, result: "Walk", batter: "Connor Hicks" },
      // Ben Zeigler-Namoa
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2299, ivb: 19.7, hb: 15.4, ext: 4.6, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2195, ivb: 20.5, hb: 13.0, ext: 4.6, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Sinker", velo: 91.0, spin: 2228, ivb: null, hb: null, ext: 4.6, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2328, ivb: 19.0, hb: 14.1, ext: 5.0, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2045, ivb: 17.5, hb: 10.4, ext: 5.1, result: "Walk", batter: "Ben Zeigler-Namoa" },
      // Nico Newhan
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2335, ivb: 18.9, hb: 8.3, ext: 5.3, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2291, ivb: 21.3, hb: 12.2, ext: 5.2, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Curveball", velo: 74.9, spin: 2603, ivb: -13.8, hb: -12.6, ext: 4.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2330, ivb: 22.2, hb: 9.4, ext: 5.2, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2286, ivb: 18.4, hb: 11.7, ext: 5.2, result: "Single", batter: "Nico Newhan" },
      // Tyler Cerny
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2218, ivb: 18.2, hb: 7.4, ext: 5.4, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Curveball", velo: 74.5, spin: 2727, ivb: -14.3, hb: -12.8, ext: 4.8, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2443, ivb: 21.9, hb: 9.8, ext: 5.2, result: "Single", batter: "Tyler Cerny" }
    ]
  },
  "Caden Spivey": {
    1: [
      // Ben Lumsden
      { pitchType: "Sinker", velo: 91.2, spin: 2091, ivb: 13.3, hb: 12.8, ext: 5.7, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2249, ivb: 14.5, hb: 8.4, ext: 5.7, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 78.6, spin: 2519, ivb: -1.6, hb: -5.0, ext: 5.0, result: "Flyout", batter: "Ben Lumsden" },
      // Sam Miller
      { pitchType: "Curveball", velo: 81.4, spin: 2436, ivb: -1.4, hb: -3.4, ext: 4.9, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2243, ivb: 17.2, hb: 10.8, ext: 5.6, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Slider", velo: 80.6, spin: 2542, ivb: -1.5, hb: -7.1, ext: 5.0, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2271, ivb: 16.8, hb: 8.3, ext: 5.7, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Sinker", velo: 90.2, spin: 2320, ivb: 15.0, hb: 13.6, ext: 5.8, result: "Sac Fly", batter: "Sam Miller" },
      // Tyler Pettorini
      { pitchType: "Curveball", velo: 79.2, spin: 2550, ivb: -1.1, hb: -8.6, ext: 4.8, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 91.8, spin: 2235, ivb: 11.3, hb: 13.8, ext: 5.7, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2203, ivb: 15.1, hb: 9.3, ext: 6.0, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Slider", velo: 83.7, spin: 2566, ivb: -3.4, hb: -3.8, ext: 5.0, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2285, ivb: 14.2, hb: 10.8, ext: 5.7, result: "Double", batter: "Tyler Pettorini" },
      // Jonny McGill
      { pitchType: "Curveball", velo: 77.6, spin: 2503, ivb: -2.4, hb: -8.0, ext: 4.9, result: "Called Strike", batter: "Jonny McGill" },
      { pitchType: "Slider", velo: 83.6, spin: 2525, ivb: -0.4, hb: -3.8, ext: 5.1, result: "Ball In Dirt", batter: "Jonny McGill" },
      { pitchType: "Sinker", velo: 90.7, spin: 2273, ivb: 8.6, hb: 14.7, ext: 5.9, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Curveball", velo: 78.9, spin: 2718, ivb: -3.3, hb: -8.9, ext: 4.7, result: "Field Error", batter: "Jonny McGill" },
      // Beau Sylvester
      { pitchType: "Sinker", velo: 91.3, spin: 2252, ivb: 12.7, hb: 15.8, ext: 5.5, result: "Swinging Strike", batter: "Beau Sylvester" },
      { pitchType: "Curveball", velo: 80.8, spin: 2503, ivb: -0.7, hb: -6.9, ext: 5.0, result: "Foul", batter: "Beau Sylvester" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2189, ivb: 13.7, hb: 8.7, ext: 5.8, result: "Ball", batter: "Beau Sylvester" },
      { pitchType: "Slider", velo: 82.5, spin: 2610, ivb: 4.2, hb: -4.9, ext: 5.1, result: "Flyout", batter: "Beau Sylvester" }
    ]
  },
  "Sean Finn": {
    2: [
      // Connor Hicks
      { pitchType: "Sinker", velo: 91.9, spin: 2177, ivb: 17.1, hb: 14.2, ext: 4.6, result: "Swinging Strike", batter: "Connor Hicks" },
      { pitchType: "Sinker", velo: 92.8, spin: 2147, ivb: 18.5, hb: 13.5, ext: 4.8, result: "Called Strike", batter: "Connor Hicks" },
      { pitchType: "Sinker", velo: 92.9, spin: 2184, ivb: 18.5, hb: 14.5, ext: 4.7, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 85.7, spin: 1617, ivb: 1.6, hb: 17.3, ext: 4.8, result: "Strikeout", batter: "Connor Hicks" },
      // Ben Zeigler-Namoa
      { pitchType: "Sinker", velo: 92.3, spin: 2231, ivb: 16.4, hb: 15.8, ext: 4.8, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Changeup", velo: 85.0, spin: 1506, ivb: 1.1, hb: 11.5, ext: 4.9, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Sinker", velo: 93.1, spin: 2357, ivb: 17.0, hb: 14.2, ext: 4.8, result: "Flyout", batter: "Ben Zeigler-Namoa" },
      // Nico Newhan
      { pitchType: "Slider", velo: 81.4, spin: 2578, ivb: -0.6, hb: -10.7, ext: 4.4, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2238, ivb: 22.2, hb: 6.9, ext: 4.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Sinker", velo: 92.0, spin: 2375, ivb: 12.9, hb: 20.6, ext: 4.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Sinker", velo: 92.2, spin: 2341, ivb: 16.5, hb: 16.4, ext: 4.8, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Sinker", velo: 91.0, spin: 2277, ivb: 18.5, hb: 15.1, ext: 4.7, result: "Flyout", batter: "Nico Newhan" }
    ],
    3: [
      // Tyler Cerny
      { pitchType: "Sinker", velo: 90.0, spin: 2159, ivb: 15.7, hb: 12.2, ext: 4.7, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Curveball", velo: 80.1, spin: 2491, ivb: -3.1, hb: -16.0, ext: 4.4, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Sinker", velo: 91.4, spin: 2263, ivb: 14.0, hb: 14.2, ext: 4.9, result: "Called Strike", batter: "Tyler Cerny" },
      { pitchType: "Slider", velo: 80.9, spin: 2604, ivb: 0.7, hb: -12.0, ext: 4.4, result: "Strikeout", batter: "Tyler Cerny" },
      // Ben Lumsden
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2276, ivb: 16.5, hb: 11.9, ext: 4.9, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2341, ivb: 18.2, hb: 13.0, ext: 4.8, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2333, ivb: 18.9, hb: 9.7, ext: 4.7, result: "Pop Out", batter: "Ben Lumsden" },
      // Sam Miller
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2305, ivb: 18.8, hb: 9.5, ext: 4.6, result: "Flyout", batter: "Sam Miller" }
    ],
    4: [
      // Tyler Pettorini
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2341, ivb: 18.7, hb: 10.2, ext: 4.9, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 90.6, spin: 2226, ivb: 15.3, hb: 14.0, ext: 4.7, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 84.6, spin: 1400, ivb: 8.1, hb: 8.6, ext: 4.8, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Curveball", velo: 80.7, spin: 2544, ivb: -1.7, hb: -13.5, ext: 4.5, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 91.9, spin: 2229, ivb: 14.4, hb: 13.5, ext: 4.9, result: "Flyout", batter: "Tyler Pettorini" },
      // Jonny McGill
      { pitchType: "Sinker", velo: 92.4, spin: 2226, ivb: 17.7, hb: 13.7, ext: 4.8, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Sinker", velo: 92.2, spin: 2415, ivb: 18.0, hb: 13.0, ext: 5.1, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Sinker", velo: 92.0, spin: 2255, ivb: 17.5, hb: 14.1, ext: 4.8, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Sinker", velo: 91.0, spin: 2242, ivb: 17.5, hb: 16.8, ext: 4.7, result: "Called Strike", batter: "Jonny McGill" },
      { pitchType: "Sinker", velo: 90.8, spin: 2162, ivb: 15.0, hb: 15.7, ext: 4.7, result: "Flyout", batter: "Jonny McGill" },
      // Beau Sylvester
      { pitchType: "Sinker", velo: 92.8, spin: 2175, ivb: 13.8, hb: 13.5, ext: 5.0, result: "Field Error", batter: "Beau Sylvester" },
      // Connor Hicks
      { pitchType: "Changeup", velo: 85.4, spin: 1406, ivb: 11.7, hb: 14.5, ext: 5.1, result: "Swinging Strike", batter: "Connor Hicks" },
      { pitchType: "Sinker", velo: 92.3, spin: 2189, ivb: 16.4, hb: 13.9, ext: 4.9, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2398, ivb: 18.3, hb: 10.3, ext: 5.1, result: "Field Error", batter: "Connor Hicks" },
      // Ben Zeigler-Namoa
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2147, ivb: 16.2, hb: 13.4, ext: 4.8, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2131, ivb: 19.0, hb: 9.5, ext: 4.9, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2172, ivb: 18.1, hb: 12.8, ext: 4.7, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Sinker", velo: 90.6, spin: 2259, ivb: 15.1, hb: 13.4, ext: 4.8, result: "Flyout", batter: "Ben Zeigler-Namoa" }
    ]
  },
  "Andrew Ronne": {
    5: [
      // Nico Newhan
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2288, ivb: 14.1, hb: 8.6, ext: 5.8, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2178, ivb: 14.4, hb: 5.8, ext: 5.7, result: "Flyout", batter: "Nico Newhan" },
      // Tyler Cerny
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2247, ivb: 13.3, hb: 8.3, ext: 5.8, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Slider", velo: 81.2, spin: 2763, ivb: -1.5, hb: -13.8, ext: 5.3, result: "Called Strike", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2326, ivb: 16.6, hb: 5.0, ext: 5.6, result: "Swinging Strike", batter: "Tyler Cerny" },
      { pitchType: "Curveball", velo: 82.7, spin: 2658, ivb: -7.7, hb: -12.7, ext: 5.3, result: "Single", batter: "Tyler Cerny" },
      // Ben Lumsden
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2214, ivb: 13.2, hb: 7.5, ext: 5.4, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2159, ivb: 16.2, hb: 2.8, ext: 5.6, result: "Ball In Dirt", batter: "Ben Lumsden" },
      { pitchType: "Slider", velo: 82.1, spin: 2609, ivb: -2.1, hb: -16.9, ext: 4.9, result: "Called Strike", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 79.4, spin: 2542, ivb: -1.1, hb: -17.9, ext: 4.9, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2253, ivb: 17.6, hb: 6.7, ext: 5.6, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2299, ivb: 20.8, hb: 3.2, ext: 5.5, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 81.7, spin: 2506, ivb: -5.1, hb: -16.3, ext: 4.8, result: "Strikeout", batter: "Ben Lumsden" },
      // Sam Miller
      { pitchType: "Slider", velo: 81.8, spin: 2501, ivb: -5.3, hb: -15.6, ext: 4.9, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 80.1, spin: 2525, ivb: -8.4, hb: -16.6, ext: 5.1, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2169, ivb: 17.1, hb: 7.8, ext: 5.7, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 81.2, spin: 2639, ivb: -3.4, hb: -14.3, ext: 4.9, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Slider", velo: 84.2, spin: 2610, ivb: 5.5, hb: -12.5, ext: 5.5, result: "Strikeout", batter: "Sam Miller" }
    ],
    6: [
      // Tyler Pettorini
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2214, ivb: 17.3, hb: 8.0, ext: 5.6, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 91.2, spin: 2185, ivb: 11.6, hb: 10.4, ext: 5.9, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Curveball", velo: 80.4, spin: 2497, ivb: -0.5, hb: -15.9, ext: 5.3, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Slider", velo: 80.8, spin: 2560, ivb: -0.6, hb: -16.5, ext: 5.5, result: "Single", batter: "Tyler Pettorini" },
      // Jonny McGill
      { pitchType: "Slider", velo: 81.2, spin: 2580, ivb: -2.0, hb: -19.7, ext: 5.2, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2182, ivb: 17.1, hb: 1.8, ext: 5.4, result: "Called Strike", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2250, ivb: 14.3, hb: 4.5, ext: 5.6, result: "Foul", batter: "Jonny McGill" },
      { pitchType: "Slider", velo: 81.4, spin: 2492, ivb: -1.4, hb: -14.2, ext: 5.2, result: "Single", batter: "Jonny McGill" },
      // Beau Sylvester
      { pitchType: "Curveball", velo: 82.3, spin: 2443, ivb: -8.6, hb: -12.0, ext: 5.5, result: "Called Strike", batter: "Beau Sylvester" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2231, ivb: 17.1, hb: 4.8, ext: 5.7, result: "Swinging Strike", batter: "Beau Sylvester" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2110, ivb: 13.6, hb: 7.7, ext: 5.9, result: "Foul", batter: "Beau Sylvester" },
      { pitchType: "Curveball", velo: 81.0, spin: 2591, ivb: -6.0, hb: -21.5, ext: 4.9, result: "Strikeout", batter: "Beau Sylvester" },
      // Connor Hicks
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2263, ivb: 15.2, hb: 5.4, ext: 5.2, result: "Hit By Pitch", batter: "Connor Hicks" },
      // Ben Zeigler-Namoa
      { pitchType: "Curveball", velo: 81.3, spin: 2631, ivb: -7.4, hb: -12.2, ext: 5.4, result: "Ball In Dirt", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2225, ivb: 15.1, hb: 2.4, ext: 5.8, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2261, ivb: 15.0, hb: 8.5, ext: 5.8, result: "Grounded Into DP", batter: "Ben Zeigler-Namoa" }
    ]
  },
  "Jarrette Bonet": {
    7: [
      // Nico Newhan
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2362, ivb: 18.5, hb: 12.3, ext: 5.6, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2209, ivb: 17.8, hb: 10.0, ext: 5.8, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2284, ivb: 21.3, hb: 9.3, ext: 5.8, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2312, ivb: 19.3, hb: 10.2, ext: 5.8, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2293, ivb: 18.2, hb: 10.7, ext: 5.7, result: "Strikeout", batter: "Nico Newhan" },
      // Tyler Cerny
      { pitchType: "Slider", velo: 84.0, spin: 2462, ivb: -1.2, hb: -8.0, ext: 5.1, result: "Flyout", batter: "Tyler Cerny" },
      // Ben Lumsden
      { pitchType: "Cutter", velo: 89.4, spin: 2378, ivb: 5.2, hb: -3.6, ext: 5.2, result: "Swinging Strike", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2339, ivb: 19.5, hb: 12.9, ext: 5.7, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Sinker", velo: 94.1, spin: 2365, ivb: 13.8, hb: 16.2, ext: 5.6, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Sinker", velo: 88.3, spin: 2100, ivb: 9.0, hb: 13.7, ext: 5.6, result: "Flyout", batter: "Ben Lumsden" }
    ],
    8: [
      // Sam Miller
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2287, ivb: 19.6, hb: 8.8, ext: 5.7, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Cutter", velo: 87.9, spin: 2353, ivb: 6.5, hb: 0.3, ext: 5.3, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Slider", velo: 84.3, spin: 2605, ivb: 0.9, hb: -5.1, ext: 5.3, result: "Groundout", batter: "Sam Miller" },
      // Tyler Pettorini
      { pitchType: "Cutter", velo: 91.2, spin: 2335, ivb: 7.9, hb: 1.9, ext: 5.3, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2289, ivb: 21.2, hb: 5.7, ext: 5.5, result: "Swinging Strike", batter: "Tyler Pettorini" },
      { pitchType: "Cutter", velo: 89.9, spin: 2295, ivb: 6.5, hb: 0.8, ext: 5.3, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Cutter", velo: 91.5, spin: 2355, ivb: 8.4, hb: 1.1, ext: 5.5, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 88.1, spin: 2024, ivb: 9.3, hb: 15.2, ext: 5.5, result: "Strikeout", batter: "Tyler Pettorini" },
      // Jonny McGill
      { pitchType: "Slider", velo: 84.9, spin: 2436, ivb: 3.5, hb: -11.0, ext: 5.2, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2296, ivb: 19.1, hb: 8.4, ext: 5.6, result: "Swinging Strike", batter: "Jonny McGill" },
      { pitchType: "Changeup", velo: 87.3, spin: 2053, ivb: 13.2, hb: 14.2, ext: 5.5, result: "Called Strike", batter: "Jonny McGill" },
      { pitchType: "Cutter", velo: 89.4, spin: 2277, ivb: 2.7, hb: -0.6, ext: 5.2, result: "Triple", batter: "Jonny McGill" },
      // Beau Sylvester
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2322, ivb: 19.4, hb: 8.3, ext: 5.9, result: "Foul", batter: "Beau Sylvester" },
      { pitchType: "Cutter", velo: 86.9, spin: 1272, ivb: 0.8, hb: -9.4, ext: 5.4, result: "Ball In Dirt", batter: "Beau Sylvester" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2234, ivb: 19.9, hb: 10.5, ext: 5.6, result: "Double", batter: "Beau Sylvester" }
    ]
  },
  "Cooper McGrath": {
    8: [
      // Connor Hicks
      { pitchType: "Sinker", velo: 93.7, spin: 2583, ivb: 10.6, hb: 11.5, ext: 5.7, result: "Swinging Strike", batter: "Connor Hicks" },
      { pitchType: "Sinker", velo: 93.2, spin: 2568, ivb: 12.8, hb: 12.4, ext: 5.8, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "Curveball", velo: 81.9, spin: 2928, ivb: -3.2, hb: -17.2, ext: 5.6, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2713, ivb: 10.0, hb: 7.3, ext: 5.7, result: "Double", batter: "Connor Hicks" },
      // Ben Zeigler-Namoa
      { pitchType: "Sinker", velo: 94.0, spin: 2586, ivb: 10.5, hb: 13.6, ext: 5.9, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Cutter", velo: 85.5, spin: 2652, ivb: 2.6, hb: -1.9, ext: 5.7, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2508, ivb: 12.3, hb: 5.5, ext: 5.8, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Slider", velo: 81.5, spin: 2889, ivb: -0.5, hb: -18.5, ext: 5.6, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2556, ivb: 13.0, hb: 5.9, ext: 5.8, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Slider", velo: 82.8, spin: 2920, ivb: 0.0, hb: -17.8, ext: 5.6, result: "Strikeout", batter: "Ben Zeigler-Namoa" }
    ],
    9: [
      // Nico Newhan
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2584, ivb: 8.2, hb: 6.1, ext: 6.0, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Slider", velo: 83.3, spin: 2652, ivb: 0.0, hb: -5.1, ext: 5.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2595, ivb: 11.2, hb: 5.2, ext: 5.9, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Slider", velo: 83.2, spin: 2799, ivb: 5.6, hb: -10.2, ext: 5.6, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2499, ivb: 10.0, hb: 4.9, ext: 5.9, result: "Strikeout", batter: "Nico Newhan" },
      // Tyler Cerny
      { pitchType: "Sinker", velo: 92.2, spin: 2535, ivb: 8.7, hb: 12.2, ext: 6.2, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Curveball", velo: 80.6, spin: 2788, ivb: -1.7, hb: -14.0, ext: 5.8, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2438, ivb: 12.6, hb: 7.1, ext: 6.1, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2503, ivb: 8.2, hb: 5.2, ext: 5.9, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Cutter", velo: 86.2, spin: 2564, ivb: 2.0, hb: -0.6, ext: 5.7, result: "Strikeout", batter: "Tyler Cerny" },
      // Ben Lumsden
      { pitchType: "Sinker", velo: 90.6, spin: 2640, ivb: 8.9, hb: 9.6, ext: 5.7, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2440, ivb: 10.3, hb: 6.2, ext: 5.7, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2571, ivb: 11.0, hb: 5.6, ext: 5.7, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2455, ivb: 10.8, hb: 6.5, ext: 5.7, result: "Called Strike", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2600, ivb: 13.2, hb: 3.7, ext: 5.7, result: "Pop Out", batter: "Ben Lumsden" }
    ]
  }
};

export default pitchersData;


