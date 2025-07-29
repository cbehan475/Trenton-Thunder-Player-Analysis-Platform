const pitchersData = {
  "Luke Delongchamp": {
    1: [
      // Tyler Cerny
      { pitchType: "Changeup", velo: 86.7, spin: 2047, ivb: 14.4, hb: 15.9, ext: 6.0, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Changeup", velo: 79.0, spin: 1580, ivb: 9.8, hb: 12.5, ext: 6.1, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Changeup", velo: 78.9, spin: 1407, ivb: 9.8, hb: 9.1, ext: 6.3, result: "Groundout", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Sinker", velo: 88.3, spin: 2083, ivb: 15.6, hb: 16.4, ext: 6.1, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 88.3, spin: 2151, ivb: 13.5, hb: 14.2, ext: 6.2, result: "Flyout", batter: "Tyler Pettorini" },
      // Judah Morris
      { pitchType: "Curveball", velo: 76.0, spin: 2118, ivb: 1.6, hb: -0.3, ext: 5.9, result: "Called Strike", batter: "Judah Morris" },
      { pitchType: "Changeup", velo: 78.1, spin: 1517, ivb: 7.3, hb: 10.6, ext: 6.0, result: "Swinging Strike", batter: "Judah Morris" },
      { pitchType: "Changeup", velo: 79.2, spin: 1670, ivb: 10.4, hb: 11.3, ext: 6.5, result: "Ball", batter: "Judah Morris" },
      { pitchType: "Curveball", velo: 76.5, spin: 2128, ivb: 3.7, hb: -1.5, ext: 6.1, result: "Ball", batter: "Judah Morris" },
      { pitchType: "Sinker", velo: 88.6, spin: 2213, ivb: 13.5, hb: 14.5, ext: 6.2, result: "Foul", batter: "Judah Morris" },
      { pitchType: "Changeup", velo: 78.7, spin: 1572, ivb: 11.7, hb: 10.0, ext: 6.4, result: "Foul", batter: "Judah Morris" },
      { pitchType: "Slider", velo: 78.5, spin: 2185, ivb: 3.9, hb: -2.9, ext: 5.9, result: "Flyout", batter: "Judah Morris" }
    ],
    2: [
      // Nico Newhan
      { pitchType: "Curveball", velo: 75.9, spin: 2204, ivb: 2.1, hb: -1.1, ext: 6.0, result: "Groundout", batter: "Nico Newhan" },
      // Jonny McGill
      { pitchType: "Changeup", velo: 80.0, spin: 1540, ivb: 12.9, hb: 12.4, ext: 5.8, result: "Swinging Strike", batter: "Jonny McGill" },
      { pitchType: "Slider", velo: 79.0, spin: 1311, ivb: 11.0, hb: 8.8, ext: 5.8, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Changeup", velo: 87.2, spin: 2199, ivb: 15.3, hb: 18.3, ext: 6.1, result: "Double", batter: "Jonny McGill" },
      // Sam Miller
      { pitchType: "Changeup", velo: 77.8, spin: 1447, ivb: 9.6, hb: 12.4, ext: 6.2, result: "Hit By Pitch", batter: "Sam Miller" },
      // Ben Zeigler-Namoa
      { pitchType: "Changeup", velo: 79.9, spin: 1506, ivb: 14.9, hb: 10.6, ext: 6.1, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Slider", velo: 79.3, spin: 1489, ivb: 12.8, hb: 8.6, ext: 6.2, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Curveball", velo: 75.8, spin: 2107, ivb: 1.7, hb: -2.0, ext: 5.9, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Sinker", velo: 88.1, spin: 2093, ivb: 13.2, hb: 14.5, ext: 6.1, result: "Strikeout", batter: "Ben Zeigler-Namoa" },
      // Beau Sylvester
      { pitchType: "Changeup", velo: 80.0, spin: 1531, ivb: 15.5, hb: 9.1, ext: 6.2, result: "Swinging Strike", batter: "Beau Sylvester" },
      { pitchType: "Curveball", velo: 77.4, spin: 2189, ivb: 1.9, hb: -1.9, ext: 6.0, result: "Ball In Dirt", batter: "Beau Sylvester" },
      { pitchType: "Changeup", velo: 78.8, spin: 1467, ivb: 9.6, hb: 11.1, ext: 6.0, result: "Foul", batter: "Beau Sylvester" },
      { pitchType: "Sinker", velo: 88.0, spin: 2187, ivb: 14.6, hb: 16.9, ext: 6.1, result: "Ball", batter: "Beau Sylvester" },
      { pitchType: "Curveball", velo: 77.4, spin: 2307, ivb: 2.2, hb: 0.8, ext: 5.8, result: "Groundout", batter: "Beau Sylvester" }
    ],
    3: [
      // Ethan Hott
      { pitchType: "Changeup", velo: 87.7, spin: 2213, ivb: 11.7, hb: 15.7, ext: 6.0, result: "Called Strike", batter: "Ethan Hott" },
      { pitchType: "Changeup", velo: 79.9, spin: 1615, ivb: 10.3, hb: 10.7, ext: 6.4, result: "Single", batter: "Ethan Hott" },
      // Tyler Cerny
      { pitchType: "Changeup", velo: 77.4, spin: 1556, ivb: 10.2, hb: 12.7, ext: 6.1, result: "Hit By Pitch", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Changeup", velo: 86.1, spin: 2070, ivb: 14.1, hb: 15.7, ext: 6.1, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 87.4, spin: 2135, ivb: 9.1, hb: 16.2, ext: 6.2, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 78.5, spin: 1663, ivb: 11.1, hb: 10.9, ext: 6.0, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 87.3, spin: 2180, ivb: 14.1, hb: 18.2, ext: 6.1, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Sinker", velo: 87.9, spin: 2126, ivb: 11.9, hb: 16.5, ext: 6.1, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 80.8, spin: 1584, ivb: 10.0, hb: 12.9, ext: 6.2, result: "Strikeout", batter: "Tyler Pettorini" },
      // Judah Morris
      { pitchType: "Changeup", velo: 85.6, spin: 2096, ivb: 11.4, hb: 14.2, ext: 6.1, result: "Ball", batter: "Judah Morris" },
      { pitchType: "Changeup", velo: 86.8, spin: 2060, ivb: 10.0, hb: 14.4, ext: 6.1, result: "Called Strike", batter: "Judah Morris" },
      { pitchType: "Changeup", velo: 79.1, spin: 1686, ivb: 12.0, hb: 12.3, ext: 6.2, result: "Swinging Strike", batter: "Judah Morris" },
      { pitchType: "Sinker", velo: 88.7, spin: 2176, ivb: 14.7, hb: 17.1, ext: 6.1, result: "Grounded Into DP", batter: "Judah Morris" }
    ],
    4: [
      // Nico Newhan
      { pitchType: "Sinker", velo: 88.1, spin: 2208, ivb: 16.3, hb: 16.0, ext: 5.9, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Slider", velo: 77.7, spin: 2142, ivb: 4.5, hb: -2.0, ext: 6.1, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Curveball", velo: 75.0, spin: 2211, ivb: 1.2, hb: -4.6, ext: 6.0, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 86.1, spin: 2075, ivb: 12.2, hb: 14.0, ext: 6.1, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Curveball", velo: 75.6, spin: 2273, ivb: 4.4, hb: -2.3, ext: 6.0, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 87.3, spin: 2057, ivb: 14.3, hb: 15.1, ext: 6.2, result: "Strikeout", batter: "Nico Newhan" },
      // Jonny McGill
      { pitchType: "Changeup", velo: 82.3, spin: 1731, ivb: 14.6, hb: 12.4, ext: 6.0, result: "Flyout", batter: "Jonny McGill" },
      // Sam Miller
      { pitchType: "Curveball", velo: 75.4, spin: 2211, ivb: 4.4, hb: -0.8, ext: 6.1, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Sinker", velo: 87.8, spin: 2251, ivb: 15.8, hb: 16.6, ext: 6.2, result: "Ball", batter: "Sam Miller" },
      { pitchType: "Curveball", velo: 77.2, spin: 2203, ivb: 3.8, hb: 2.4, ext: 6.1, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Changeup", velo: 86.8, spin: 2134, ivb: 13.4, hb: 16.5, ext: 6.1, result: "Groundout", batter: "Sam Miller" }
    ],
    5: [
      // Ben Zeigler-Namoa
      { pitchType: "Changeup", velo: 79.1, spin: 1615, ivb: 14.5, hb: 14.0, ext: 6.2, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Changeup", velo: 78.4, spin: 1664, ivb: 13.1, hb: 15.7, ext: 6.0, result: "Single", batter: "Ben Zeigler-Namoa" },
      // Beau Sylvester
      { pitchType: "Changeup", velo: 87.0, spin: 2145, ivb: 12.6, hb: 19.4, ext: 6.0, result: "Single", batter: "Beau Sylvester" },
      // Ethan Hott
      { pitchType: "Changeup", velo: 87.1, spin: 2146, ivb: 11.7, hb: 16.6, ext: 6.0, result: "Ball", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 76.3, spin: 2070, ivb: 4.9, hb: 0.8, ext: 6.1, result: "Swinging Strike", batter: "Ethan Hott" },
      { pitchType: "Curveball", velo: 77.7, spin: 2171, ivb: 3.2, hb: 1.0, ext: 6.1, result: "Ball", batter: "Ethan Hott" },
      { pitchType: "Changeup", velo: 87.1, spin: 2137, ivb: 10.7, hb: 19.3, ext: 6.1, result: "Ball In Dirt", batter: "Ethan Hott" },
      { pitchType: "Changeup", velo: 86.2, spin: 2110, ivb: 9.3, hb: 19.2, ext: 6.0, result: "Grounded Into DP", batter: "Ethan Hott" },
      // Tyler Cerny
      { pitchType: "Changeup", velo: 80.6, spin: 1617, ivb: 12.6, hb: 12.2, ext: 6.2, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Changeup", velo: 80.6, spin: 1640, ivb: 11.8, hb: 10.0, ext: 6.2, result: "Groundout", batter: "Tyler Cerny" }
    ],
    6: [
      // Tyler Pettorini
      { pitchType: "Curveball", velo: 75.5, spin: 2160, ivb: 4.7, hb: -1.0, ext: 5.9, result: "Called Strike", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 79.8, spin: 1681, ivb: 13.5, hb: 12.9, ext: 5.7, result: "Swinging Strike", batter: "Tyler Pettorini" },
      { pitchType: "Changeup", velo: 80.3, spin: 1386, ivb: 11.4, hb: 12.8, ext: 5.9, result: "Home Run", batter: "Tyler Pettorini" },
      // Judah Morris
      { pitchType: "Changeup", velo: 78.4, spin: 1554, ivb: 12.6, hb: 11.1, ext: 6.2, result: "Flyout", batter: "Judah Morris" },
      // Nico Newhan
      { pitchType: "Curveball", velo: 76.1, spin: 2141, ivb: 3.8, hb: -0.7, ext: 6.0, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Curveball", velo: 75.9, spin: 2048, ivb: 4.3, hb: -0.7, ext: 5.7, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 86.6, spin: 2081, ivb: 13.2, hb: 15.7, ext: 6.0, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Changeup", velo: 79.3, spin: 1646, ivb: 12.8, hb: 10.9, ext: 6.3, result: "Foul", batter: "Nico Newhan" },
      { pitchType: "Slider", velo: 78.3, spin: 1467, ivb: 11.8, hb: 9.5, ext: 6.2, result: "Flyout", batter: "Nico Newhan" },
      // Jonny McGill
      { pitchType: "Changeup", velo: 87.4, spin: 2104, ivb: 14.6, hb: 15.8, ext: 6.0, result: "Foul", batter: "Jonny McGill" },
      { pitchType: "Changeup", velo: 86.7, spin: 2008, ivb: 12.9, hb: 15.7, ext: 6.0, result: "Groundout", batter: "Jonny McGill" }
    ]
  },
  "Aidan Weaver": {
    7: [
      // Sam Miller
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 1951, ivb: 14.0, hb: 8.1, ext: 6.5, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2011, ivb: 15.0, hb: 7.9, ext: 6.3, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2157, ivb: 8.8, hb: 10.4, ext: 6.6, result: "Strikeout", batter: "Sam Miller" },
      // Ben Zeigler-Namoa
      { pitchType: "Changeup", velo: 74.0, spin: 1844, ivb: 1.5, hb: 10.9, ext: 6.6, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2124, ivb: 17.1, hb: 8.2, ext: 6.2, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Changeup", velo: 75.9, spin: 1901, ivb: 0.4, hb: 14.3, ext: 6.6, result: "Ball", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2073, ivb: 16.7, hb: 8.2, ext: 6.3, result: "Called Strike", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Slider", velo: 74.8, spin: 1762, ivb: -1.6, hb: 10.0, ext: 6.5, result: "Foul", batter: "Ben Zeigler-Namoa" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 1984, ivb: 14.5, hb: 12.0, ext: 6.4, result: "Strikeout", batter: "Ben Zeigler-Namoa" },
      // Beau Sylvester
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2143, ivb: 14.6, hb: 13.0, ext: 6.4, result: "Ball", batter: "Beau Sylvester" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2169, ivb: 15.5, hb: 11.0, ext: 6.6, result: "Swinging Strike", batter: "Beau Sylvester" },
      { pitchType: "Slider", velo: 84.0, spin: 2067, ivb: 1.9, hb: -2.4, ext: 6.4, result: "Swinging Strike", batter: "Beau Sylvester" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2166, ivb: 13.9, hb: 14.9, ext: 6.4, result: "Strikeout", batter: "Beau Sylvester" }
    ]
  },
  "Collin Bosley-Smith": {
    8: [
      // Ethan Hott
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2136, ivb: 22.1, hb: 7.0, ext: 6.2, result: "Flyout", batter: "Ethan Hott" },
      // Tyler Cerny
      { pitchType: "Curveball", velo: 79.9, spin: 2557, ivb: -1.5, hb: -10.1, ext: 6.0, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Slider", velo: 81.7, spin: 2656, ivb: -5.0, hb: -9.4, ext: 5.7, result: "Swinging Strike", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2373, ivb: 20.6, hb: 5.9, ext: 6.4, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2257, ivb: 19.6, hb: 5.9, ext: 6.2, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2280, ivb: 22.9, hb: 2.7, ext: 6.1, result: "Ball", batter: "Tyler Cerny" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2214, ivb: 22.3, hb: 4.5, ext: 6.3, result: "Foul", batter: "Tyler Cerny" },
      { pitchType: "Slider", velo: 82.0, spin: 2586, ivb: -4.5, hb: -7.2, ext: 5.9, result: "Groundout", batter: "Tyler Cerny" },
      // Tyler Pettorini
      { pitchType: "Changeup", velo: 81.8, spin: 1580, ivb: 10.7, hb: 15.4, ext: 6.3, result: "Ball", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2155, ivb: 21.9, hb: 7.4, ext: 6.3, result: "Foul", batter: "Tyler Pettorini" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2258, ivb: 21.5, hb: 4.9, ext: 6.5, result: "Lineout", batter: "Tyler Pettorini" }
    ],
    9: [
      // Judah Morris
      { pitchType: "Slider", velo: 82.1, spin: 2561, ivb: -3.8, hb: -6.4, ext: 5.9, result: "Swinging Strike (Blocked)", batter: "Judah Morris" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2204, ivb: 20.2, hb: 8.6, ext: 6.3, result: "Ball", batter: "Judah Morris" },
      { pitchType: "Slider", velo: 81.1, spin: 2732, ivb: -2.3, hb: -8.4, ext: 5.6, result: "Ball", batter: "Judah Morris" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2294, ivb: 22.1, hb: 5.9, ext: 6.2, result: "Ball", batter: "Judah Morris" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2224, ivb: 22.3, hb: 5.8, ext: 6.3, result: "Walk", batter: "Judah Morris" },
      // Nico Newhan
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2206, ivb: 21.6, hb: 7.1, ext: 6.3, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2223, ivb: 22.1, hb: 5.5, ext: 6.4, result: "Called Strike", batter: "Nico Newhan" },
      { pitchType: "Slider", velo: 82.2, spin: 2661, ivb: -2.3, hb: -5.5, ext: 5.9, result: "Ball In Dirt", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2242, ivb: 21.8, hb: 7.0, ext: 6.2, result: "Ball", batter: "Nico Newhan" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2197, ivb: 21.3, hb: 5.4, ext: 6.3, result: "Strikeout", batter: "Nico Newhan" },
      // Jonny McGill
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2181, ivb: 22.1, hb: 5.0, ext: 6.2, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2208, ivb: 21.1, hb: 7.0, ext: 6.3, result: "Called Strike", batter: "Jonny McGill" },
      { pitchType: "Slider", velo: 80.9, spin: 2518, ivb: -0.8, hb: -6.5, ext: 5.8, result: "Ball", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2198, ivb: 22.3, hb: 6.0, ext: 6.1, result: "Foul", batter: "Jonny McGill" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2169, ivb: 22.3, hb: 5.1, ext: 6.4, result: "Lineout", batter: "Jonny McGill" },
      // Sam Miller
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2122, ivb: 20.2, hb: 7.4, ext: 6.1, result: "Called Strike", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2256, ivb: 20.6, hb: 5.5, ext: 6.3, result: "Swinging Strike", batter: "Sam Miller" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2191, ivb: 20.7, hb: 6.3, ext: 6.1, result: "Strikeout", batter: "Sam Miller" }
    ]
  }
};

export default pitchersData;
