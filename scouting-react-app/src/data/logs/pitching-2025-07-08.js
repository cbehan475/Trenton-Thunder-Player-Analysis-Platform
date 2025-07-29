const pitchersData = {
  "Kai Fyke": {
    1: [
      // Tyler Cerny
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2063, ivb: 11.8, hb: 9.0, ext: 5.9, result: "Swinging Strike", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2005, ivb: 12.9, hb: 9.1, ext: 5.6, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Cutter", velo: 87.9, spin: 2313, ivb: 8.3, hb: 0.6, ext: 5.8, result: "Double", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Curveball", velo: 79.8, spin: 2618, ivb: -2.5, hb: -6.1, ext: 5.6, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2206, ivb: 13.2, hb: 10.2, ext: 5.9, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2048, ivb: 11.5, hb: 8.5, ext: 5.8, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 90.7, spin: 2063, ivb: 13.2, hb: 12.2, ext: 5.8, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 91.0, spin: 2192, ivb: 9.6, hb: 11.5, ext: 6.0, result: "Walk", batter: "Tyler Pettorini" },
      // Connor Hicks
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2151, ivb: 13.6, hb: 10.0, ext: 5.8, result: "Lineout", batter: "Connor Hicks" },
      // Nico Newhan
      { pitchType: "Cutter", velo: 88.4, spin: 2246, ivb: 7.0, hb: 3.6, ext: 5.9, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2161, ivb: 10.8, hb: 8.7, ext: 6.1, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2193, ivb: 13.5, hb: 8.2, ext: 5.6, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "", velo: 92.0, spin: 2137, ivb: 16.2, hb: 6.3, ext: 5.9, result: "Stolen Base 3B", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2137, ivb: 16.2, hb: 6.3, ext: 5.9, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2147, ivb: 15.5, hb: 7.8, ext: 6.0, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2084, ivb: 11.7, hb: 7.1, ext: 5.9, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Slider", velo: 82.6, spin: 2667, ivb: -3.0, hb: -1.5, ext: 5.8, result: "Strikeout", batter: "Nico Newhan" },
      // Sam Miller
      { pitchType: "Curveball", velo: 80.5, spin: 2657, ivb: -5.2, hb: -2.6, ext: 5.8, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2120, ivb: 14.3, hb: 5.7, ext: 6.0, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2157, ivb: 11.8, hb: 6.7, ext: 5.9, result: "Double", batter: "Sam Miller" },
      // Ben Zeigler-Namoa
      { pitchType: "Changeup", velo: 85.4, spin: 1441, ivb: 4.6, hb: 13.5, ext: 6.1, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2139, ivb: 13.7, hb: 5.7, ext: 5.8, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Sinker", velo: 91.0, spin: 2088, ivb: 7.5, hb: 9.5, ext: 5.7, result: "Flyout", batter: "Ben Zeigler-Namoa" }
    ],
    2: [
      // Ethan Hott
      { pitchType: "Four-Seam Fastball", velo: 90.3, spin: 2096, ivb: 13.8, hb: 6.0, ext: 5.9, result: "Ball", batter: "Ethan Hott" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 2154, ivb: 14.1, hb: 7.7, ext: 5.8, result: "Double", batter: "Ethan Hott" },
      // Bryan Arendt
      { pitchType: "Curveball", velo: 78.9, spin: 2583, ivb: -5.7, hb: -2.7, ext: 5.4, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2164, ivb: 12.9, hb: 7.3, ext: 6.1, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Cutter", velo: 86.9, spin: 2327, ivb: 7.9, hb: -0.6, ext: 5.9, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2079, ivb: 10.9, hb: 8.9, ext: 6.0, result: "Groundout", batter: "Bryan Arendt" },
      // Ben Lumsden
      { pitchType: "Changeup", velo: 86.0, spin: 1478, ivb: 8.4, hb: 9.9, ext: 5.9, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2173, ivb: 12.3, hb: 6.6, ext: 6.0, result: "Sac Fly", batter: "Ben Lumsden" },
      // Tyler Cerny
      { pitchType: "Curveball", velo: 80.6, spin: 2493, ivb: -3.3, hb: -2.1, ext: 5.6, result: "Hit By Pitch", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2151, ivb: 12.6, hb: 5.3, ext: 6.0, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2217, ivb: 16.6, hb: 2.0, ext: 6.0, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 86.2, spin: 1468, ivb: 1.0, hb: 11.9, ext: 5.9, result: "Swinging Strike", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 82.8, spin: 1363, ivb: 4.1, hb: 7.8, ext: 6.0, result: "Groundout", batter: "Tyler Pettorini" }
    ],
    3: [
      // Connor Hicks
      { pitchType: "Changeup", velo: 84.5, spin: 1397, ivb: 4.8, hb: 9.1, ext: 5.8, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 86.6, spin: 1399, ivb: 2.9, hb: 11.5, ext: 5.7, result: "Groundout", batter: "Connor Hicks" },
      // Nico Newhan
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2107, ivb: 12.1, hb: 3.1, ext: 6.0, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 85.5, spin: 1530, ivb: 5.9, hb: 10.0, ext: 6.1, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2074, ivb: 13.0, hb: 4.3, ext: 6.1, result: "Single", batter: "Nico Newhan" },
      // Sam Miller
      { pitchType: "Curveball", velo: 80.3, spin: 2550, ivb: -4.1, hb: 0.5, ext: 5.6, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Slider", velo: 85.1, spin: 1433, ivb: 4.7, hb: 3.9, ext: 5.8, result: "Foul", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2178, ivb: 11.1, hb: 1.7, ext: 6.0, result: "Foul", batter: "Sam Miller" },
      { pitchType: "Changeup", velo: 86.4, spin: 1514, ivb: 10.7, hb: 7.8, ext: 6.0, result: "Groundout", batter: "Sam Miller" },
      // Ben Zeigler-Namoa
      { pitchType: "", velo: 86.5, spin: 1425, ivb: 7.4, hb: 6.2, ext: 6.0, result: "Wild Pitch", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Changeup", velo: 86.5, spin: 1425, ivb: 7.4, hb: 6.2, ext: 6.0, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2191, ivb: 10.7, hb: 5.9, ext: 6.0, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Changeup", velo: 86.8, spin: 1488, ivb: 11.6, hb: 10.3, ext: 5.9, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Curveball", velo: 81.1, spin: 2698, ivb: -6.4, hb: -6.9, ext: 5.7, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2120, ivb: 10.1, hb: 5.6, ext: 6.1, result: "Groundout", batter: "Ben Zeigler-Namoa" }
    ],
    4: [
      // Ethan Hott
      { pitchType: "Cutter", velo: 86.9, spin: 1994, ivb: 9.5, hb: -2.2, ext: 5.9, result: "Groundout", batter: "Ethan Hott" },
      // Bryan Arendt
      { pitchType: "Curveball", velo: 76.1, spin: 2361, ivb: -7.5, hb: 1.1, ext: 5.5, result: "Called Strike", batter: "Bryan Arendt" },
      { pitchType: "Cutter", velo: 87.4, spin: 2065, ivb: 5.2, hb: 0.0, ext: 5.8, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 1969, ivb: 10.9, hb: 5.7, ext: 6.0, result: "Flyout", batter: "Bryan Arendt" },
      // Ben Lumsden
      { pitchType: "Changeup", velo: 84.5, spin: 1443, ivb: 7.0, hb: 9.3, ext: 5.7, result: "Swinging Strike", batter: "Ben Lumsden" },
      { pitchType: "Changeup", velo: 85.2, spin: 1524, ivb: 3.3, hb: 10.4, ext: 5.7, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2069, ivb: 9.7, hb: 5.4, ext: 5.9, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Changeup", velo: 87.4, spin: 1435, ivb: 7.4, hb: 11.0, ext: 5.6, result: "Groundout", batter: "Ben Lumsden" }
    ],
    5: [
      // Tyler Cerny
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 1965, ivb: 14.3, hb: 8.9, ext: 5.8, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Cutter", velo: 85.6, spin: 2056, ivb: 10.2, hb: 2.0, ext: 5.8, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Changeup", velo: 83.3, spin: 1498, ivb: 6.9, hb: 13.0, ext: 5.9, result: "Called Strike", batter: "Tyler Cerny" },
      { pitchType: "Slider", velo: 83.8, spin: 1418, ivb: 8.5, hb: 3.5, ext: 5.8, result: "Strikeout", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Changeup", velo: 84.7, spin: 1485, ivb: 6.3, hb: 9.2, ext: 5.8, result: "Swinging Strike", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2163, ivb: 9.6, hb: 6.9, ext: 5.9, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 85.3, spin: 1477, ivb: 6.4, hb: 9.9, ext: 6.0, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 89.5, spin: 1913, ivb: 5.2, hb: 9.4, ext: 5.9, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2171, ivb: 12.0, hb: 7.4, ext: 6.1, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2063, ivb: 11.2, hb: 5.5, ext: 6.2, result: "Walk", batter: "Tyler Pettorini" },
      // Connor Hicks
      { pitchType: "Curveball", velo: 77.2, spin: 2475, ivb: -5.2, hb: -2.1, ext: 5.5, result: "Ball", batter: "Connor Hicks" },
      { pitchType: "", velo: 83.9, spin: 1463, ivb: 1.3, hb: 9.6, ext: 5.8, result: "Stolen Base 2B", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 83.9, spin: 1463, ivb: 1.3, hb: 9.6, ext: 5.8, result: "Called Strike", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 83.8, spin: 1505, ivb: 5.7, hb: 8.6, ext: 5.8, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Cutter", velo: 90.6, spin: 2001, ivb: 8.9, hb: 3.2, ext: 6.1, result: "Foul", batter: "Connor Hicks" },
      { pitchType: "Changeup", velo: 86.7, spin: 1524, ivb: 7.5, hb: 11.2, ext: 5.7, result: "Strikeout", batter: "Connor Hicks" },
      // Nico Newhan
      { pitchType: "Curveball", velo: 77.2, spin: 2299, ivb: -1.4, hb: -3.9, ext: 5.7, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Cutter", velo: 87.7, spin: 2158, ivb: 11.3, hb: -0.7, ext: 5.8, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "", velo: 84.9, spin: 1378, ivb: 3.0, hb: 7.2, ext: 6.0, result: "Stolen Base 3B", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 84.9, spin: 1378, ivb: 3.0, hb: 7.2, ext: 6.0, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Cutter", velo: 91.7, spin: 2046, ivb: 14.7, hb: -0.1, ext: 5.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 87.5, spin: 1360, ivb: 1.7, hb: 6.4, ext: 5.9, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Curveball", velo: 77.0, spin: 2470, ivb: -8.8, hb: -5.3, ext: 5.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2028, ivb: 7.7, hb: 4.6, ext: 6.3, result: "Walk", batter: "Nico Newhan" },
      // Sam Miller
      { pitchType: "Cutter", velo: 88.0, spin: 1995, ivb: 8.7, hb: 0.2, ext: 6.1, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Changeup", velo: 84.3, spin: 1379, ivb: 0.7, hb: 11.5, ext: 6.1, result: "Ball In Dirt", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 2007, ivb: 13.4, hb: 6.9, ext: 6.2, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "", velo: 88.4, spin: 2124, ivb: 11.4, hb: 2.6, ext: 6.3, result: "Stolen Base 2B", batter: "Sam Miller" },
      { pitchType: "Cutter", velo: 88.4, spin: 2124, ivb: 11.4, hb: 2.6, ext: 6.3, result: "Ball In Dirt", batter: "Sam Miller" },
      { pitchType: "Cutter", velo: 88.3, spin: 1956, ivb: 10.6, hb: 4.4, ext: 6.3, result: "Walk", batter: "Sam Miller" },
      // Ben Zeigler-Namoa
      { pitchType: "Cutter", velo: 88.9, spin: 2047, ivb: 9.0, hb: 4.0, ext: 6.2, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Changeup", velo: 84.0, spin: 1383, ivb: -1.4, hb: 10.4, ext: 6.0, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Cutter", velo: 88.9, spin: 2013, ivb: 9.8, hb: 5.0, ext: 6.1, result: "Groundout", batter: "Ben Zeigler-Namoa" }
    ]
  },
  "Zach Silfies": {
    6: [
      // Ethan Hott
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 1865, ivb: 9.2, hb: 8.1, ext: 6.2, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 64.7, spin: 2409, ivb: -8.8, hb: -17.7, ext: 5.9, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 79.7, spin: 2099, ivb: -1.9, hb: -7.7, ext: 5.9, result: "Ball", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 74.0, spin: 2334, ivb: -1.5, hb: -18.2, ext: 5.7, result: "Groundout", batter: "Ethan Hott" },
      // Bryan Arendt
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 1771, ivb: 12.4, hb: 10.6, ext: 6.2, result: "Foul", batter: "Bryan Arendt" },
      { pitchType: "Slider", velo: 81.7, spin: 1812, ivb: 3.7, hb: -10.1, ext: 6.0, result: "Called Strike", batter: "Bryan Arendt" },
      { pitchType: "Curveball", velo: 74.4, spin: 2294, ivb: 0.0, hb: -10.9, ext: 5.8, result: "Foul", batter: "Bryan Arendt" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 1924, ivb: 13.7, hb: 4.3, ext: 6.3, result: "Pop Out", batter: "Bryan Arendt" },
      // Ben Lumsden
      { pitchType: "Curveball", velo: 65.8, spin: 2273, ivb: -11.0, hb: -9.5, ext: 6.0, result: "Called Strike", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 70.0, spin: 2533, ivb: -10.6, hb: -13.8, ext: 5.6, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 66.5, spin: 2426, ivb: -10.5, hb: -12.7, ext: 5.9, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2005, ivb: 10.7, hb: 8.6, ext: 6.2, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2030, ivb: 10.8, hb: 9.8, ext: 6.2, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 78.4, spin: 2098, ivb: 1.4, hb: -4.8, ext: 5.9, result: "Strikeout", batter: "Ben Lumsden" }
    ]
  },
  "Zach Silfies": {
    6: [
      // Ethan Hott
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 1865, ivb: 9.2, hb: 8.1, ext: 6.2, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 64.7, spin: 2409, ivb: -8.8, hb: -17.7, ext: 5.9, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 79.7, spin: 2099, ivb: -1.9, hb: -7.7, ext: 5.9, result: "Ball", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 74.0, spin: 2334, ivb: -1.5, hb: -18.2, ext: 5.7, result: "Groundout", batter: "Ethan Hott" },
      // Bryan Arendt
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 1771, ivb: 12.4, hb: 10.6, ext: 6.2, result: "Foul", batter: "Bryan Arendt" },
      { pitchType: "Slider", velo: 81.7, spin: 1812, ivb: 3.7, hb: -10.1, ext: 6.0, result: "Called Strike", batter: "Bryan Arendt" },
      { pitchType: "Curveball", velo: 74.4, spin: 2294, ivb: 0.0, hb: -10.9, ext: 5.8, result: "Foul", batter: "Bryan Arendt" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 1924, ivb: 13.7, hb: 4.3, ext: 6.3, result: "Pop Out", batter: "Bryan Arendt" },
      // Ben Lumsden
      { pitchType: "Curveball", velo: 65.8, spin: 2273, ivb: -11.0, hb: -9.5, ext: 6.0, result: "Called Strike", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 70.0, spin: 2533, ivb: -10.6, hb: -13.8, ext: 5.6, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 66.5, spin: 2426, ivb: -10.5, hb: -12.7, ext: 5.9, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2005, ivb: 10.7, hb: 8.6, ext: 6.2, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2030, ivb: 10.8, hb: 9.8, ext: 6.2, result: "Foul", batter: "Ben Lumsden" },
      { pitchType: "Curveball", velo: 78.4, spin: 2098, ivb: 1.4, hb: -4.8, ext: 5.9, result: "Strikeout", batter: "Ben Lumsden" }
    ],
    7: [
      // Tyler Cerny
      { pitchType: "Slider", velo: 79.8, spin: 2044, ivb: 3.8, hb: -4.4, ext: 5.9, result: "Called Strike", batter: "Tyler Cerny" },
      { pitchType: "Curveball", velo: 75.4, spin: 2409, ivb: -1.6, hb: -19.6, ext: 5.5, result: "Swinging Strike", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 1881, ivb: 14.0, hb: 8.1, ext: 6.4, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Curveball", velo: 78.6, spin: 2214, ivb: 2.2, hb: -6.6, ext: 5.8, result: "Double", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2018, ivb: 11.0, hb: 7.6, ext: 6.2, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 88.2, spin: 1946, ivb: 15.4, hb: 7.3, ext: 6.3, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Curveball", velo: 68.9, spin: 2399, ivb: -12.4, hb: -13.8, ext: 5.3, result: "Ball In Dirt", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 88.4, spin: 1950, ivb: 9.8, hb: 11.1, ext: 6.2, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "", velo: 79.6, spin: 1855, ivb: 1.1, hb: -6.4, ext: 5.9, result: "Stolen Base 3B", batter: "Tyler Pettorini" },
      { pitchType: "Curveball", velo: 79.6, spin: 1855, ivb: 1.1, hb: -6.4, ext: 5.9, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 88.3, spin: 1955, ivb: 9.0, hb: 9.9, ext: 6.3, result: "Single", batter: "Tyler Pettorini" },
      // Connor Hicks
      { pitchType: "", velo: 78.5, spin: 2144, ivb: 0.7, hb: -5.2, ext: 5.7, result: "Stolen Base 2B", batter: "Connor Hicks" },
      { pitchType: "Curveball", velo: 78.5, spin: 2144, ivb: 0.7, hb: -5.2, ext: 5.7, result: "Called Strike", batter: "Connor Hicks" },
      { pitchType: "Slider", velo: 80.2, spin: 2206, ivb: 4.7, hb: -5.7, ext: 6.0, result: "Lineout", batter: "Connor Hicks" },
      // Nico Newhan
      { pitchType: "Curveball", velo: 67.3, spin: 2255, ivb: -10.5, hb: -12.7, ext: 5.7, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Curveball", velo: 74.3, spin: 2386, ivb: -0.6, hb: -18.7, ext: 5.9, result: "Groundout", batter: "Nico Newhan" },
      // Sam Miller
      { pitchType: "Curveball", velo: 73.6, spin: 2219, ivb: -1.4, hb: -12.9, ext: 5.7, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Slider", velo: 79.9, spin: 2270, ivb: 0.8, hb: -7.0, ext: 5.9, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Changeup", velo: 88.0, spin: 2024, ivb: 10.3, hb: 10.2, ext: 6.0, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 72.9, spin: 2158, ivb: -1.0, hb: -16.7, ext: 5.5, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Slider", velo: 79.8, spin: 2457, ivb: 1.7, hb: -6.7, ext: 6.0, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 72.5, spin: 2418, ivb: -1.9, hb: -17.4, ext: 5.8, result: "Strikeout", batter: "Sam Miller" }
    ]
  },
  "JJ Almeda": {
    8: [
      // Ben Zeigler-Namoa
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2306, ivb: 20.0, hb: 6.9, ext: 5.8, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2339, ivb: 18.3, hb: 5.4, ext: 5.5, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 89.0, spin: 2337, ivb: 20.1, hb: 4.0, ext: 5.8, result: "Flyout", batter: "Ben Zeigler-Namoa" },
      // Ethan Hott
      { pitchType: "Curveball", velo: 80.0, spin: 2521, ivb: -2.8, hb: -3.7, ext: 5.2, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 80.6, spin: 2522, ivb: 0.2, hb: -4.9, ext: 5.1, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Four-Seam Fastball", velo: 89.0, spin: 2361, ivb: 19.7, hb: 4.8, ext: 5.7, result: "Strikeout", batter: "Ethan Hott" },
      // Bryan Arendt
      { pitchType: "Curveball", velo: 77.6, spin: 2404, ivb: -0.4, hb: -7.0, ext: 5.6, result: "Called Strike", batter: "Bryan Arendt" },
      { pitchType: "Curveball", velo: 79.5, spin: 2576, ivb: -1.1, hb: -7.3, ext: 5.4, result: "Swinging Strike", batter: "Bryan Arendt" },
      { pitchType: "Slider", velo: 80.6, spin: 2400, ivb: -1.8, hb: -4.0, ext: 5.5, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Slider", velo: 80.9, spin: 2643, ivb: -2.2, hb: -4.7, ext: 5.4, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2323, ivb: 19.3, hb: 2.2, ext: 5.9, result: "Ball", batter: "Bryan Arendt" },
      { pitchType: "Slider", velo: 80.7, spin: 2563, ivb: 1.7, hb: -4.3, ext: 5.4, result: "Walk", batter: "Bryan Arendt" },
      // Ben Lumsden
      { pitchType: "Curveball", velo: 77.4, spin: 2388, ivb: -2.8, hb: -5.9, ext: 5.3, result: "Ball In Dirt", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2424, ivb: 18.8, hb: 4.9, ext: 5.8, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 2365, ivb: 18.7, hb: 4.8, ext: 5.9, result: "Called Strike", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2434, ivb: 19.2, hb: 5.9, ext: 5.8, result: "Ball", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2430, ivb: 15.9, hb: 9.5, ext: 5.8, result: "Swinging Strike", batter: "Ben Lumsden" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2421, ivb: 20.5, hb: 6.4, ext: 5.7, result: "Strikeout", batter: "Ben Lumsden" }
    ]
  }
};

export default pitchersData;
