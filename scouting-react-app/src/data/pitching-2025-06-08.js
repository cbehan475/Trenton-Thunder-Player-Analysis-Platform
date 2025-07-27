const pitchersData = {
  "Codi Scott": {
    1: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 88.3, spin: 2127, ivb: 20.9, hb: -8.8, ext: 4.8, result: "Single", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2295, ivb: 17.5, hb: -2.5, ext: 4.8, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 85.4, spin: 2406, ivb: 7.5, hb: -2.0, ext: 4.6, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 87.0, spin: 2293, ivb: 17.8, hb: -3.6, ext: 4.7, result: "Double", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 80.0, spin: 2745, ivb: 0.7, hb: 6.7, ext: 4.3, result: "Swinging Strike", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 79.3, spin: 2540, ivb: -2.3, hb: 13.4, ext: 4.6, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2219, ivb: 17.4, hb: -1.7, ext: 5.0, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2244, ivb: 18.3, hb: -5.3, ext: 4.9, result: "Strikeout", batter: "Sam Parker" },
      // Hayden Christiansen
      { pitchType: "Slider", velo: 87.3, spin: 2341, ivb: 6.5, hb: -1.0, ext: 4.5, result: "Ball", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2374, ivb: 14.0, hb: -2.4, ext: 4.9, result: "Swinging Strike", batter: "Hayden Christiansen" },
      { pitchType: "Slider", velo: 80.1, spin: 2626, ivb: -0.2, hb: 16.1, ext: 4.4, result: "Groundout", batter: "Hayden Christiansen" },
      // Bruin Agbayani
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2385, ivb: 14.2, hb: -3.3, ext: 5.0, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 87.8, spin: 2289, ivb: 5.1, hb: -1.4, ext: 4.9, result: "Foul", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 80.4, spin: 2730, ivb: 0.1, hb: 13.6, ext: 4.5, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 82.3, spin: 2665, ivb: -0.7, hb: 11.9, ext: 4.6, result: "Foul", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2155, ivb: 14.4, hb: -5.0, ext: 5.0, result: "Foul", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2238, ivb: 15.5, hb: -1.4, ext: 4.9, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2175, ivb: 12.0, hb: 1.4, ext: 5.0, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 85.9, spin: 2302, ivb: 8.0, hb: 1.0, ext: 5.0, result: "Strikeout", batter: "Bruin Agbayani" }
    ],
    2: [
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 87.9, spin: 2220, ivb: 17.5, hb: -5.7, ext: 4.8, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 85.5, spin: 2224, ivb: 16.5, hb: -3.5, ext: 4.7, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 83.6, spin: 2178, ivb: 8.0, hb: -4.6, ext: 4.6, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 85.0, spin: 2270, ivb: 11.9, hb: 1.1, ext: 4.7, result: "Walk", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Slider", velo: 78.9, spin: 2473, ivb: 4.9, hb: 4.7, ext: 4.6, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 85.9, spin: 2212, ivb: 16.9, hb: -6.2, ext: 5.0, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 87.3, spin: 2268, ivb: 15.8, hb: -6.1, ext: 5.0, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 87.0, spin: 2271, ivb: 15.8, hb: -4.2, ext: 4.8, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2263, ivb: 18.4, hb: -3.5, ext: 5.0, result: "Walk", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Four-Seam Fastball", velo: 87.3, spin: 2282, ivb: 18.6, hb: -3.9, ext: 5.0, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 86.9, spin: 2283, ivb: 17.9, hb: -1.9, ext: 4.9, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 86.6, spin: 2249, ivb: 17.3, hb: -1.2, ext: 5.0, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 2376, ivb: 19.0, hb: -2.0, ext: 5.0, result: "Flyout", batter: "Taj Bates" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 2301, ivb: 18.7, hb: -3.6, ext: 5.0, result: "Groundout", batter: "Tervell Johnson" },
      // Trey Lipsey
      { pitchType: "Slider", velo: 78.2, spin: 2635, ivb: -4.9, hb: 10.3, ext: 4.6, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 85.6, spin: 2416, ivb: 5.4, hb: 5.5, ext: 4.7, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 80.5, spin: 2707, ivb: -2.9, hb: 11.7, ext: 4.6, result: "Pop Out", batter: "Trey Lipsey" }
    ]
  },
  "Paulo Noris": {
    3: [
      // Eddie Hacopian
      { pitchType: "Cutter", velo: 87.0, spin: 2154, ivb: 12.7, hb: 1.5, ext: 5.9, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 75.2, spin: 1924, ivb: -11.2, hb: -8.7, ext: 4.9, result: "Pop Out", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 80.3, spin: 1904, ivb: 2.2, hb: -3.4, ext: 5.2, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Cutter", velo: 87.9, spin: 2164, ivb: 10.8, hb: 1.5, ext: 5.7, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 79.9, spin: 2099, ivb: 5.8, hb: 14.9, ext: 5.4, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Curveball", velo: 79.6, spin: 2009, ivb: -0.1, hb: -3.6, ext: 5.1, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 79.7, spin: 2120, ivb: 7.5, hb: 16.3, ext: 5.5, result: "Single", batter: "Sam Parker" },
      // Hayden Christiansen
      { pitchType: "Slider", velo: 79.4, spin: 1870, ivb: 1.7, hb: -4.3, ext: 5.1, result: "Ball In Dirt", batter: "Hayden Christiansen" },
      { pitchType: "Cutter", velo: 87.6, spin: 1939, ivb: 15.7, hb: 4.9, ext: 5.8, result: "Ball", batter: "Hayden Christiansen" },
      { pitchType: "Cutter", velo: 86.5, spin: 1987, ivb: 12.8, hb: 4.2, ext: 5.8, result: "Single", batter: "Hayden Christiansen" },
      // Bruin Agbayani
      { pitchType: "Slider", velo: 80.0, spin: 1834, ivb: 4.6, hb: 1.7, ext: 5.0, result: "Foul", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 78.2, spin: 2041, ivb: 9.0, hb: 12.7, ext: 5.4, result: "Pop Out", batter: "Bruin Agbayani" }
    ],
    4: [
      // Lance Trippel
      { pitchType: "Cutter", velo: 86.3, spin: 1684, ivb: 6.6, hb: 0.6, ext: 5.8, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 86.7, spin: 2031, ivb: 17.0, hb: 4.9, ext: 5.8, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 75.9, spin: 1983, ivb: -3.6, hb: -7.7, ext: 5.2, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 77.4, spin: 1955, ivb: -1.7, hb: -4.4, ext: 5.0, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 86.6, spin: 1874, ivb: 12.1, hb: -2.6, ext: 5.9, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Changeup", velo: 77.5, spin: 1962, ivb: 9.5, hb: 15.0, ext: 5.5, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 86.2, spin: 1856, ivb: 15.6, hb: -0.9, ext: 5.8, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 79.1, spin: 1990, ivb: 3.8, hb: -2.6, ext: 5.2, result: "Walk", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Curveball", velo: 76.6, spin: 1847, ivb: 6.0, hb: 14.2, ext: 5.5, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Curveball", velo: 76.7, spin: 1881, ivb: 6.7, hb: 12.8, ext: 5.6, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Cutter", velo: 86.7, spin: 1946, ivb: 15.0, hb: 2.0, ext: 5.5, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Cutter", velo: 85.9, spin: 2036, ivb: 17.6, hb: 4.1, ext: 5.5, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Changeup", velo: 77.5, spin: 1823, ivb: 12.1, hb: 13.5, ext: 5.6, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Changeup", velo: 79.0, spin: 2124, ivb: 7.4, hb: 13.0, ext: 5.5, result: "Strikeout", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Curveball", velo: 77.7, spin: 1884, ivb: 1.7, hb: -3.8, ext: 5.2, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Cutter", velo: 84.7, spin: 1953, ivb: 19.0, hb: -2.8, ext: 5.8, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Cutter", velo: 85.1, spin: 1985, ivb: 19.0, hb: 0.9, ext: 5.8, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Curveball", velo: 75.1, spin: 1816, ivb: -7.3, hb: -2.0, ext: 5.0, result: "Forceout", batter: "Taj Bates" },
      // Tervell Johnson
      { pitchType: "Cutter", velo: 85.5, spin: 2076, ivb: 18.8, hb: 2.0, ext: 5.8, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Cutter", velo: 85.7, spin: 1803, ivb: 19.1, hb: 2.1, ext: 5.8, result: "Swinging Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 86.0, spin: 2028, ivb: 19.6, hb: 4.8, ext: 5.8, result: "Strikeout", batter: "Tervell Johnson" }
    ]
  },
  "Preston Prince": {
    5: [
      // Trey Lipsey
      { pitchType: "Slider", velo: 86.1, spin: 1987, ivb: 8.1, hb: -0.7, ext: 5.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2096, ivb: 21.0, hb: -10.6, ext: 5.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 1917, ivb: 20.0, hb: 0.9, ext: 5.2, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2099, ivb: 20.4, hb: -7.6, ext: 5.3, result: "Walk", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Changeup", velo: 81.3, spin: 1406, ivb: 5.0, hb: -11.7, ext: 5.4, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 2062, ivb: 14.6, hb: 0.6, ext: 5.7, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 86.2, spin: 1910, ivb: 10.8, hb: 0.0, ext: 5.6, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 1957, ivb: 20.8, hb: -5.8, ext: 5.3, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 85.8, spin: 1983, ivb: 6.8, hb: 1.4, ext: 5.5, result: "Walk", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 86.8, spin: 2022, ivb: 9.4, hb: 2.5, ext: 5.7, result: "Ball In Dirt", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2042, ivb: 21.4, hb: -7.2, ext: 5.4, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2080, ivb: 23.2, hb: -8.1, ext: 5.5, result: "Ball In Dirt", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2038, ivb: 20.1, hb: -4.0, ext: 5.5, result: "Foul", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 1790, ivb: 18.7, hb: -5.2, ext: 5.2, result: "Walk", batter: "Sam Parker" },
      // Hayden Christiansen
      { pitchType: "Slider", velo: 84.8, spin: 1955, ivb: 10.1, hb: 2.5, ext: 5.6, result: "Ball In Dirt", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2042, ivb: 21.7, hb: -6.7, ext: 5.3, result: "Ball In Dirt", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2124, ivb: 18.4, hb: -7.6, ext: 5.4, result: "Called Strike", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 1935, ivb: 17.9, hb: -9.4, ext: 5.2, result: "Foul", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 86.6, spin: 2036, ivb: 12.8, hb: -0.1, ext: 5.5, result: "Ball In Dirt", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 1841, ivb: 20.7, hb: -6.8, ext: 5.5, result: "Sac Fly", batter: "Hayden Christiansen" },
      // Bruin Agbayani
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 1873, ivb: 20.1, hb: -7.5, ext: 5.2, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2048, ivb: 20.1, hb: -3.3, ext: 5.2, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 1837, ivb: 19.3, hb: -8.6, ext: 5.6, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 87.7, spin: 1858, ivb: 15.4, hb: -11.6, ext: 5.5, result: "Walk", batter: "Bruin Agbayani" },
      // Lance Trippel
      { pitchType: "Changeup", velo: 78.7, spin: 1393, ivb: 0.6, hb: -12.7, ext: 5.3, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 84.7, spin: 1994, ivb: 12.8, hb: 0.7, ext: 5.4, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2039, ivb: 17.7, hb: -4.4, ext: 5.3, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 91.6, spin: 2099, ivb: 19.7, hb: -11.9, ext: 5.4, result: "Groundout", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Slider", velo: 86.3, spin: 1882, ivb: 11.6, hb: -1.9, ext: 5.6, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 84.6, spin: 2075, ivb: 10.0, hb: -4.5, ext: 5.8, result: "Swinging Strike", batter: "Anthony Diaz" },
      { pitchType: "Changeup", velo: 80.0, spin: 1423, ivb: 0.3, hb: -19.9, ext: 5.4, result: "Strikeout", batter: "Anthony Diaz" }
    ],
    6: [
      // Taj Bates
      { pitchType: "Changeup", velo: 79.9, spin: 1471, ivb: 5.8, hb: -20.0, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 89.8, spin: 2032, ivb: 19.4, hb: -15.3, ext: 5.4, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2149, ivb: 23.6, hb: -7.6, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 90.2, spin: 2141, ivb: 20.3, hb: -13.0, ext: 5.2, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2107, ivb: 19.2, hb: -11.0, ext: 5.6, result: "Walk", batter: "Taj Bates" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 1937, ivb: 24.6, hb: -6.7, ext: 5.4, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2008, ivb: 20.7, hb: -7.8, ext: 5.5, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Changeup", velo: 82.0, spin: 1464, ivb: 4.8, hb: -11.8, ext: 5.5, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 86.2, spin: 1920, ivb: 9.8, hb: 0.8, ext: 5.7, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 86.4, spin: 1950, ivb: 11.6, hb: -1.3, ext: 5.8, result: "Strikeout", batter: "Tervell Johnson" },
      // Trey Lipsey
      { pitchType: "Slider", velo: 85.7, spin: 1987, ivb: 7.0, hb: -1.4, ext: 5.6, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 84.9, spin: 1917, ivb: 10.1, hb: 1.1, ext: 5.8, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 83.7, spin: 1937, ivb: 7.8, hb: -0.8, ext: 5.6, result: "Ball In Dirt", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2053, ivb: 22.2, hb: -5.4, ext: 5.6, result: "Forceout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Slider", velo: 85.0, spin: 2067, ivb: 16.9, hb: -1.2, ext: 5.7, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Changeup", velo: 81.9, spin: 1539, ivb: 10.8, hb: -16.3, ext: 5.4, result: "Swinging Strike", batter: "Eddie Hacopian" },
      { pitchType: "Changeup", velo: 82.1, spin: 1557, ivb: 7.6, hb: -12.3, ext: 5.4, result: "Ball In Dirt", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 86.6, spin: 2001, ivb: 8.5, hb: -0.7, ext: 5.9, result: "Strikeout", batter: "Eddie Hacopian" }
    ]
  },
  "Eddie Smink": {
    7: [
      // Sam Parker
      { pitchType: "Sinker", velo: 90.7, spin: 2067, ivb: 13.9, hb: 16.7, ext: 5.0, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Sinker", velo: 89.7, spin: 2052, ivb: 11.1, hb: 12.8, ext: 5.2, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Sinker", velo: 89.6, spin: 2009, ivb: 12.3, hb: 14.6, ext: 5.6, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2203, ivb: 18.7, hb: 12.6, ext: 5.2, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2143, ivb: 18.1, hb: 13.3, ext: 5.4, result: "Lineout", batter: "Sam Parker" },
      // Hayden Christiansen
      { pitchType: "Curveball", velo: 71.1, spin: 2454, ivb: -14.4, hb: -16.4, ext: 5.3, result: "Called Strike", batter: "Hayden Christiansen" },
      { pitchType: "Sinker", velo: 90.9, spin: 2084, ivb: 14.6, hb: 12.8, ext: 5.2, result: "Groundout", batter: "Hayden Christiansen" },
      // Bruin Agbayani
      { pitchType: "Sinker", velo: 91.7, spin: 2092, ivb: 13.6, hb: 13.9, ext: 5.2, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 82.9, spin: 1598, ivb: 7.1, hb: 13.6, ext: 5.4, result: "Groundout", batter: "Bruin Agbayani" }
    ],
    8: [
      // Lance Trippel
      { pitchType: "Curveball", velo: 68.1, spin: 2344, ivb: -18.6, hb: -17.0, ext: 4.9, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2170, ivb: 21.3, hb: 7.1, ext: 5.3, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2103, ivb: 18.1, hb: 8.6, ext: 5.5, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 88.8, spin: 2216, ivb: 13.9, hb: 19.2, ext: 5.5, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2247, ivb: 22.6, hb: 9.1, ext: 5.4, result: "Walk", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Sinker", velo: 90.4, spin: 2085, ivb: 14.7, hb: 12.6, ext: 5.1, result: "Forceout", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Curveball", velo: 76.3, spin: 2453, ivb: -3.0, hb: -9.3, ext: 4.9, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Curveball", velo: 67.2, spin: 2236, ivb: -14.1, hb: -20.2, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2050, ivb: 18.4, hb: 13.3, ext: 5.3, result: "Pop Out", batter: "Taj Bates" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2053, ivb: 17.7, hb: 10.1, ext: 5.4, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 70.1, spin: 2365, ivb: -13.2, hb: -22.6, ext: 5.2, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2228, ivb: 24.2, hb: 5.5, ext: 5.7, result: "Ball In Dirt", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.0, spin: 1977, ivb: 13.7, hb: 11.9, ext: 5.5, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2104, ivb: 21.3, hb: 7.3, ext: 5.6, result: "Walk", batter: "Tervell Johnson" },
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2154, ivb: 15.5, hb: 13.0, ext: 5.4, result: "Swinging Strike", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 82.4, spin: 1601, ivb: 7.1, hb: 13.9, ext: 5.4, result: "Groundout", batter: "Trey Lipsey" }
    ]
  },
  "Andrew Ronne": {
    9: [
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2160, ivb: 15.4, hb: 8.4, ext: 5.9, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2164, ivb: 15.2, hb: 9.0, ext: 6.0, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Sinker", velo: 95.5, spin: 2231, ivb: 11.5, hb: 8.7, ext: 5.7, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 84.7, spin: 2693, ivb: -2.2, hb: -22.2, ext: 5.6, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 83.6, spin: 2862, ivb: 0.7, hb: -21.0, ext: 5.6, result: "Strikeout", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 81.2, spin: 2550, ivb: -3.7, hb: -18.5, ext: 5.4, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 82.3, spin: 2637, ivb: -0.4, hb: -19.9, ext: 5.5, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Curveball", velo: 81.0, spin: 1916, ivb: -20.2, hb: -5.4, ext: 5.9, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2364, ivb: 12.0, hb: 2.9, ext: 5.7, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Curveball", velo: 82.1, spin: 2572, ivb: -2.9, hb: -17.5, ext: 5.4, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 83.8, spin: 2722, ivb: -4.7, hb: -16.2, ext: 5.1, result: "Single", batter: "Sam Parker" },
      // Hayden Christiansen
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2241, ivb: 13.6, hb: 4.5, ext: 5.8, result: "Called Strike", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2146, ivb: 14.4, hb: 6.2, ext: 5.9, result: "Ball", batter: "Hayden Christiansen" },
      { pitchType: "Slider", velo: 81.8, spin: 2560, ivb: -2.8, hb: -16.4, ext: 5.4, result: "Called Strike", batter: "Hayden Christiansen" },
      { pitchType: "Slider", velo: 82.7, spin: 2592, ivb: -2.8, hb: -17.7, ext: 5.2, result: "Ball", batter: "Hayden Christiansen" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2203, ivb: 15.2, hb: 6.5, ext: 5.8, result: "Single", batter: "Hayden Christiansen" },
      // Bruin Agbayani
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2135, ivb: 13.7, hb: 3.2, ext: 5.8, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2161, ivb: 14.6, hb: 4.2, ext: 6.0, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 82.6, spin: 2635, ivb: -2.1, hb: -18.9, ext: 5.4, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Curveball", velo: 81.6, spin: 2508, ivb: -2.2, hb: -12.6, ext: 5.7, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2267, ivb: 17.6, hb: 5.5, ext: 6.2, result: "Forceout", batter: "Bruin Agbayani" },
      // Lance Trippel
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2294, ivb: 15.4, hb: 4.2, ext: 5.8, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2288, ivb: 14.6, hb: 4.1, ext: 5.8, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 81.5, spin: 2654, ivb: -0.5, hb: -18.9, ext: 5.4, result: "Swinging Strike", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 84.4, spin: 2665, ivb: 0.0, hb: -12.0, ext: 5.5, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2211, ivb: 15.3, hb: 6.5, ext: 6.0, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 82.9, spin: 2587, ivb: -3.3, hb: -22.0, ext: 5.5, result: "Walk", batter: "Lance Trippel" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 1985, ivb: 14.8, hb: 4.6, ext: 6.2, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2055, ivb: 17.5, hb: 4.4, ext: 6.0, result: "Flyout", batter: "Anthony Diaz" }
    ]
  }
};

export default pitchersData;