const pitchersData = {
  "Jude Abbadessa": {
    1: [
      // Trey Lipsey
      { pitchType: "Sinker", velo: 92.4, spin: 1999, ivb: 11.0, hb: 15.1, ext: 5.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 92.3, spin: 1997, ivb: 6.6, hb: 14.8, ext: 5.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 91.6, spin: 1964, ivb: 8.5, hb: 14.6, ext: 5.4, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 91.8, spin: 1950, ivb: 7.7, hb: 11.6, ext: 5.7, result: "Groundout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Sinker", velo: 92.5, spin: 2006, ivb: 10.8, hb: 13.3, ext: 5.3, result: "Triple", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 83.2, spin: 2192, ivb: 2.4, hb: -9.4, ext: 4.6, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 82.5, spin: 2150, ivb: -1.7, hb: -9.7, ext: 4.5, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 83.0, spin: 2253, ivb: -1.3, hb: -11.2, ext: 4.7, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Sinker", velo: 92.1, spin: 1991, ivb: 9.5, hb: 12.7, ext: 5.4, result: "Walk", batter: "Sam Parker" },
      // Lance Trippel
      { pitchType: "Sinker", velo: 92.4, spin: 1991, ivb: 8.9, hb: 14.6, ext: 5.5, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 82.7, spin: 2199, ivb: -0.7, hb: -9.4, ext: 4.4, result: "Grounded Into DP", batter: "Lance Trippel" }
    ],
    2: [
      // Bruin Agbayani
      { pitchType: "Sinker", velo: 93.4, spin: 2039, ivb: 8.4, hb: 16.4, ext: 5.0, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 87.0, spin: 1790, ivb: 0.9, hb: 15.6, ext: 5.3, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Sinker", velo: 93.0, spin: 2002, ivb: 14.8, hb: 13.6, ext: 5.2, result: "Lineout", batter: "Bruin Agbayani" },
      // Jose Silva
      { pitchType: "Sinker", velo: 92.4, spin: 1985, ivb: 11.9, hb: 15.4, ext: 5.4, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 81.4, spin: 2253, ivb: -4.0, hb: -9.1, ext: 4.6, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Sinker", velo: 91.6, spin: 2045, ivb: 9.5, hb: 16.6, ext: 5.4, result: "Lineout", batter: "Jose Silva" },
      // Anthony Diaz
      { pitchType: "Changeup", velo: 86.7, spin: 1943, ivb: 4.5, hb: 15.1, ext: 5.4, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 82.7, spin: 2290, ivb: 5.5, hb: 1.3, ext: 4.3, result: "Groundout", batter: "Anthony Diaz" }
    ],
    3: [
      // Taj Bates
      { pitchType: "Slider", velo: 82.9, spin: 2092, ivb: 2.4, hb: -5.4, ext: 4.3, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 81.9, spin: 2175, ivb: 1.2, hb: -7.7, ext: 4.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 92.0, spin: 2008, ivb: 12.7, hb: 14.3, ext: 5.2, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 82.9, spin: 2195, ivb: 1.9, hb: -3.6, ext: 4.6, result: "Swinging Strike", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 83.5, spin: 2137, ivb: 3.9, hb: -9.6, ext: 4.7, result: "Strikeout", batter: "Taj Bates" },
      // Jordan Peyton
      { pitchType: "Slider", velo: 82.4, spin: 2262, ivb: 1.7, hb: -9.0, ext: 4.6, result: "Called Strike", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 82.5, spin: 2274, ivb: 1.8, hb: -7.0, ext: 4.7, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2120, ivb: 15.7, hb: 10.0, ext: 5.4, result: "Foul", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 83.6, spin: 2279, ivb: -5.3, hb: -5.2, ext: 4.6, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 83.0, spin: 2150, ivb: 2.6, hb: -4.6, ext: 4.7, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 82.8, spin: 2132, ivb: 4.4, hb: -5.8, ext: 4.8, result: "Walk", batter: "Jordan Peyton" },
      // Trey Lipsey
      { pitchType: "Slider", velo: 81.7, spin: 2246, ivb: 4.8, hb: -9.4, ext: 4.7, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 83.6, spin: 2253, ivb: 7.7, hb: -4.3, ext: 4.4, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "", velo: 88.3, spin: 2074, ivb: 8.0, hb: 12.2, ext: 5.4, result: "Wild Pitch", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 88.3, spin: 2074, ivb: 8.0, hb: 12.2, ext: 5.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 84.3, spin: 2154, ivb: 4.9, hb: -3.7, ext: 4.6, result: "Groundout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Slider", velo: 82.0, spin: 2181, ivb: -0.3, hb: -6.7, ext: 4.7, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2054, ivb: 19.7, hb: 6.9, ext: 5.5, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.0, spin: 2210, ivb: -1.2, hb: -9.5, ext: 4.5, result: "Single", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Sinker", velo: 92.9, spin: 2048, ivb: 9.9, hb: 17.3, ext: 5.5, result: "Forceout", batter: "Sam Parker" }
    ],
    4: [
      // Lance Trippel
      { pitchType: "Sinker", velo: 93.4, spin: 2113, ivb: 10.8, hb: 15.8, ext: 5.2, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 92.5, spin: 2130, ivb: 11.3, hb: 15.2, ext: 5.3, result: "Swinging Strike", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 92.5, spin: 2001, ivb: 5.2, hb: 17.8, ext: 5.5, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 91.8, spin: 2088, ivb: 7.5, hb: 17.7, ext: 5.6, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 91.8, spin: 2030, ivb: 6.3, hb: 15.0, ext: 5.6, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Sinker", velo: 91.7, spin: 2051, ivb: 12.4, hb: 15.1, ext: 5.4, result: "Home Run", batter: "Lance Trippel" },
      // Bruin Agbayani
      { pitchType: "Sinker", velo: 93.2, spin: 2128, ivb: 8.9, hb: 18.3, ext: 5.4, result: "Foul", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 87.5, spin: 2028, ivb: 5.3, hb: 20.8, ext: 5.4, result: "Swinging Strike", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 84.2, spin: 2403, ivb: -3.6, hb: -6.6, ext: 4.8, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 87.0, spin: 2072, ivb: 1.9, hb: 13.0, ext: 5.1, result: "Groundout", batter: "Bruin Agbayani" },
      // Jose Silva
      { pitchType: "Slider", velo: 82.2, spin: 2267, ivb: -2.1, hb: -10.7, ext: 4.8, result: "Swinging Strike", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 81.7, spin: 2313, ivb: -0.9, hb: -12.1, ext: 4.9, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Sinker", velo: 93.0, spin: 2155, ivb: 13.5, hb: 14.8, ext: 5.5, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Sinker", velo: 92.9, spin: 2182, ivb: 9.5, hb: 15.6, ext: 5.7, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 83.1, spin: 2205, ivb: 4.1, hb: -8.8, ext: 4.6, result: "Strikeout", batter: "Jose Silva" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2077, ivb: 21.7, hb: 10.1, ext: 5.4, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2140, ivb: 17.9, hb: 12.1, ext: 5.7, result: "Swinging Strike", batter: "Anthony Diaz" },
      { pitchType: "Sinker", velo: 93.0, spin: 2222, ivb: 18.4, hb: 13.7, ext: 5.3, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 82.4, spin: 2255, ivb: -1.3, hb: -6.3, ext: 4.7, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Sinker", velo: 91.9, spin: 2210, ivb: 16.4, hb: 15.6, ext: 5.6, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Sinker", velo: 92.1, spin: 2088, ivb: 9.1, hb: 18.7, ext: 5.4, result: "Walk", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Sinker", velo: 92.6, spin: 2016, ivb: 12.7, hb: 15.1, ext: 5.4, result: "Single", batter: "Taj Bates" },
      // Jordan Peyton
      { pitchType: "Slider", velo: 83.0, spin: 2158, ivb: 1.5, hb: -7.7, ext: 4.2, result: "Field Error", batter: "Jordan Peyton" },
      // Trey Lipsey
      { pitchType: "Changeup", velo: 86.1, spin: 1948, ivb: 11.9, hb: 15.4, ext: 5.7, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 82.6, spin: 2334, ivb: -3.2, hb: -6.9, ext: 4.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 82.4, spin: 2283, ivb: -2.9, hb: -4.8, ext: 4.7, result: "Swinging Strike", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 91.5, spin: 2063, ivb: 8.8, hb: 14.6, ext: 5.3, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 91.6, spin: 2005, ivb: 9.4, hb: 17.5, ext: 5.3, result: "Groundout", batter: "Trey Lipsey" }
    ],
    5: [
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2219, ext: 5.0, ivb: 18.8, hb: -2.7, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 88.5, spin: 2278, ext: 5.0, ivb: 14.4, hb: -2.1, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 87.1, spin: 2180, ext: 5.1, ivb: 18.6, hb: -5.4, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2187, ext: 5.0, ivb: 15.8, hb: 1.5, result: "Walk", batter: "Jordan Peyton" },
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 2217, ext: 5.1, ivb: 17.0, hb: -6.0, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Slider", velo: 87.8, spin: 2227, ext: 4.8, ivb: 6.9, hb: -3.1, result: "Swinging Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2197, ext: 5.2, ivb: 18.7, hb: -2.0, result: "Strikeout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Changeup", velo: 86.8, spin: 2245, ext: 4.8, ivb: 5.7, hb: -8.3, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 80.0, spin: 2602, ext: 4.6, ivb: -1.2, hb: 15.0, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Changeup", velo: 84.4, spin: 1944, ext: 5.0, ivb: 9.9, hb: -13.5, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 90.5, spin: 2245, ext: 5.0, ivb: 14.6, hb: -7.7, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 81.5, spin: 2571, ext: 4.6, ivb: -0.3, hb: 10.3, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 78.4, spin: 2615, ext: 4.6, ivb: -4.4, hb: 12.8, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 88.2, spin: 2116, ext: 5.1, ivb: 14.7, hb: -1.9, result: "Groundout", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Slider", velo: 86.6, spin: 2310, ext: 4.8, ivb: 6.5, hb: -1.3, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 78.4, spin: 2561, ext: 4.5, ivb: -3.3, hb: 17.7, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 86.9, spin: 2208, ext: 5.2, ivb: 14.8, hb: -1.9, result: "Flyout", batter: "Sam Parker" }
      ]
  },
  "Codi Scott": {
    4: [
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2242, ext: 5.0, ivb: 17.8, hb: -3.1, result: "Ball In Dirt", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2235, ext: 4.9, ivb: 7.2, hb: -1.6, result: "Swinging Strike", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 89.2, spin: 2334, ext: 4.9, ivb: 8.2, hb: 1.7, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 79.8, spin: 2646, ext: 4.5, ivb: -2.0, hb: 16.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2184, ext: 4.9, ivb: 15.0, hb: -6.1, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2141, ext: 4.9, ivb: 15.4, hb: -6.3, result: "Ball", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 87.9, spin: 2256, ext: 4.9, ivb: 5.1, hb: -1.2, result: "Walk", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2186, ext: 5.0, ivb: 19.5, hb: -4.4, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2173, ext: 4.9, ivb: 18.6, hb: -8.7, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2095, ext: 4.9, ivb: 17.5, hb: 0.6, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 2202, ext: 5.0, ivb: 18.6, hb: 0.7, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 88.0, spin: 2248, ext: 4.9, ivb: 6.2, hb: -2.6, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2308, ext: 5.0, ivb: 17.6, hb: -2.5, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 78.8, spin: 2519, ext: 4.6, ivb: 4.0, hb: 12.4, result: "Strikeout", batter: "Taj Bates" }
    ],
    5: [
      // Eddie Hacopian
      { pitchType: "Sinker", velo: 90.4, spin: 2052, ivb: 13.1, hb: 13.0, ext: 5.2, result: "Single", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Sinker", velo: 92.2, spin: 2065, ivb: 7.9, hb: 17.3, ext: 5.4, result: "Swinging Strike", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 85.1, spin: 1904, ivb: -2.0, hb: 13.9, ext: 5.3, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 86.3, spin: 1976, ivb: 7.8, hb: 15.5, ext: 5.3, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 82.6, spin: 2216, ivb: 5.4, hb: -7.3, ext: 4.7, result: "Flyout", batter: "Sam Parker" },
      // Lance Trippel
      { pitchType: "Sinker", velo: 90.9, spin: 2058, ivb: 10.5, hb: 15.3, ext: 5.6, result: "Hit By Pitch", batter: "Lance Trippel" },
      // Bruin Agbayani
      { pitchType: "Changeup", velo: 85.0, spin: 1795, ivb: 10.8, hb: 8.9, ext: 5.4, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Sinker", velo: 91.0, spin: 2061, ivb: 10.8, hb: 12.6, ext: 5.3, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 82.0, spin: 2156, ivb: 8.7, hb: -7.5, ext: 4.4, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 82.1, spin: 2193, ivb: 3.7, hb: -7.4, ext: 4.3, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Sinker", velo: 90.8, spin: 2063, ivb: 12.7, hb: 15.0, ext: 5.3, result: "Foul", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 82.9, spin: 2229, ivb: 4.6, hb: -4.7, ext: 4.7, result: "Strikeout", batter: "Bruin Agbayani" },
      // Jose Silva
      { pitchType: "Slider", velo: 81.1, spin: 2186, ivb: 2.7, hb: -12.9, ext: 4.3, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 81.3, spin: 2094, ivb: 6.8, hb: -11.4, ext: 4.5, result: "Swinging Strike", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 81.8, spin: 2242, ivb: -4.0, hb: -8.9, ext: 4.6, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 82.8, spin: 2345, ivb: 0.2, hb: -6.7, ext: 5.0, result: "Ball In Dirt", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 82.5, spin: 2286, ivb: 3.1, hb: -7.9, ext: 4.5, result: "Strikeout", batter: "Jose Silva" }
    ],
  },
  "Paulo Noris": {
    6: [
      // Lance Trippel
      { pitchType: "Cutter", velo: 87.2, spin: 1982, ext: 6.1, ivb: 17.5, hb: 4.3, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 75.1, spin: 1954, ext: 5.0, ivb: -4.0, hb: -10.8, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 86.2, spin: 1624, ext: 5.8, ivb: 15.5, hb: 3.7, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Curveball", velo: 75.8, spin: 1890, ext: 5.3, ivb: -6.5, hb: -15.4, result: "Ball", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 86.3, spin: 1700, ext: 5.9, ivb: 14.8, hb: 3.2, result: "Foul", batter: "Lance Trippel" },
      { pitchType: "Cutter", velo: 86.0, spin: 1849, ext: 6.0, ivb: 13.6, hb: 1.2, result: "Strikeout", batter: "Lance Trippel" },
      // Bruin Agbayani
      { pitchType: "Curveball", velo: 76.7, spin: 1848, ext: 5.8, ivb: 2.5, hb: 18.7, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Four-Seam Fastball", velo: 86.4, spin: 2186, ext: 5.8, ivb: 18.7, hb: 6.4, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Curveball", velo: 78.0, spin: 1993, ext: 5.2, ivb: -1.1, hb: -5.3, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Cutter", velo: 86.7, spin: 1730, ext: 5.9, ivb: 14.5, hb: 4.0, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Curveball", velo: 73.7, spin: 1795, ext: 5.0, ivb: -3.9, hb: -6.4, result: "Single", batter: "Bruin Agbayani" },
      // Jose Silva
      { pitchType: "Cutter", velo: 84.9, spin: 1793, ext: 5.6, ivb: 16.1, hb: 3.0, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 73.0, spin: 1823, ext: 4.9, ivb: -8.0, hb: -11.3, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 73.4, spin: 1968, ext: 5.2, ivb: -9.8, hb: -12.6, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 83.1, spin: 1706, ext: 6.1, ivb: 12.4, hb: 1.3, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 83.0, spin: 1768, ext: 6.0, ivb: 10.6, hb: -0.9, result: "Swinging Strike", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 71.3, spin: 1758, ext: 4.9, ivb: -5.5, hb: -11.6, result: "Walk", batter: "Jose Silva" },
      // Anthony Diaz
      { pitchType: "Slider", velo: 83.8, spin: 1831, ext: 5.8, ivb: 14.1, hb: 2.0, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Curveball", velo: 75.5, spin: 1934, ext: 5.2, ivb: -3.7, hb: -0.8, result: "Called Strike", batter: "Anthony Diaz" },
      { pitchType: "Changeup", velo: 76.8, spin: 1922, ext: 5.8, ivb: 13.3, hb: 14.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Cutter", velo: 84.2, spin: 1892, ext: 5.9, ivb: 15.0, hb: 1.1, result: "Flyout", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Cutter", velo: 84.9, spin: 2065, ext: 6.0, ivb: 17.8, hb: 3.8, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 84.6, spin: 1872, ext: 6.0, ivb: 14.1, hb: 3.3, result: "Ball In Dirt", batter: "Taj Bates" },
      { pitchType: "Curveball", velo: 72.8, spin: 1843, ext: 4.9, ivb: -12.2, hb: -11.7, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Cutter", velo: 85.1, spin: 1779, ext: 5.9, ivb: 15.0, hb: 5.3, result: "Lineout", batter: "Taj Bates" }
    ]
  },
  "Noah Edders": {
  6: [
      // Anthony Diaz
      { pitchType: "Sinker", velo: 92.2, spin: 1984, ivb: 11.7, hb: 14.3, ext: 6.2, result: "Single", batter: "Anthony Diaz" },
      // Taj Bates
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2270, ivb: 15.4, hb: 6.5, ext: 6.1, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2293, ivb: 15.5, hb: 6.8, ext: 6.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2107, ivb: 15.0, hb: 7.0, ext: 6.1, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 80.5, spin: 2495, ivb: -0.1, hb: -8.8, ext: 5.2, result: "Ball In Dirt", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2251, ivb: 17.2, hb: 6.6, ext: 6.1, result: "Single", batter: "Taj Bates" },
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2391, ivb: 18.1, hb: 5.8, ext: 6.2, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2412, ivb: 16.4, hb: 7.1, ext: 6.1, result: "Swinging Strike", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2431, ivb: 17.3, hb: 7.4, ext: 6.3, result: "Forceout", batter: "Jordan Peyton" },
      // Trey Lipsey
      { pitchType: "Sinker", velo: 94.1, spin: 2262, ivb: 9.5, hb: 17.4, ext: 6.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 94.0, spin: 2263, ivb: 14.5, hb: 14.6, ext: 6.2, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2232, ivb: 17.8, hb: 3.6, ext: 6.2, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Changeup", velo: 87.6, spin: 1785, ivb: 7.7, hb: 16.4, ext: 6.0, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2193, ivb: 14.5, hb: 10.5, ext: 6.3, result: "Strikeout", batter: "Trey Lipsey" },
      // Eddie Hacopian
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2391, ivb: 13.6, hb: 7.6, ext: 6.4, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.5, spin: 2468, ivb: 9.9, hb: -3.6, ext: 5.2, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2411, ivb: 16.4, hb: 8.8, ext: 6.3, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Slider", velo: 82.0, spin: 2607, ivb: 7.4, hb: -4.0, ext: 5.4, result: "Strikeout", batter: "Eddie Hacopian" }
    ],
    7: [
      // Sam Parker
      { pitchType: "Sinker", velo: 89.6, spin: 2230, ivb: 13.5, hb: 16.1, ext: 5.9, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Sinker", velo: 89.9, spin: 2296, ivb: 15.3, hb: 13.0, ext: 6.4, result: "Double", batter: "Sam Parker" },
      // Lance Trippel
      { pitchType: "Slider", velo: 81.2, spin: 2353, ivb: 4.9, hb: -10.2, ext: 5.3, result: "Called Strike", batter: "Lance Trippel" },
      { pitchType: "Slider", velo: 82.5, spin: 2405, ivb: 5.0, hb: -9.1, ext: 5.5, result: "Flyout", batter: "Lance Trippel" },
      // Bruin Agbayani
      { pitchType: "Changeup", velo: 87.6, spin: 1655, ivb: 9.4, hb: 19.7, ext: 6.2, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Sinker", velo: 90.5, spin: 2259, ivb: 13.8, hb: 14.4, ext: 5.9, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 81.8, spin: 2495, ivb: 1.4, hb: -8.6, ext: 5.4, result: "Called Strike", batter: "Bruin Agbayani" },
      { pitchType: "Changeup", velo: 87.5, spin: 1677, ivb: 7.5, hb: 16.5, ext: 6.3, result: "Ball", batter: "Bruin Agbayani" },
      { pitchType: "Slider", velo: 81.5, spin: 2363, ivb: 7.0, hb: -6.8, ext: 5.2, result: "Single", batter: "Bruin Agbayani" },
      // Jose Silva
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2448, ivb: 17.2, hb: 10.7, ext: 6.4, result: "Pop Out", batter: "Jose Silva" },
      // Anthony Diaz
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2388, ivb: 16.1, hb: 9.7, ext: 6.3, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Slider", velo: 81.5, spin: 2405, ivb: 10.3, hb: -5.2, ext: 5.4, result: "Foul", batter: "Anthony Diaz" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2458, ivb: 18.5, hb: 4.9, ext: 6.2, result: "Strikeout", batter: "Anthony Diaz" }
    ],
  },
  "Jarrette Bonet": {
    8: [
      // Taj Bates
      { pitchType: "Sinker", velo: 93.2, spin: 2285, ivb: 13.2, hb: 11.2, ext: 5.8, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 93.5, spin: 2296, ivb: 12.0, hb: 13.6, ext: 6.1, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 93.5, spin: 2295, ivb: 12.7, hb: 13.5, ext: 5.7, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 84.3, spin: 2542, ivb: 0.5, hb: -6.1, ext: 5.3, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2237, ivb: 18.9, hb: 5.4, ext: 5.8, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2329, ivb: 18.2, hb: 9.4, ext: 5.7, result: "Strikeout", batter: "Taj Bates" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2366, ivb: 19.3, hb: 9.3, ext: 5.8, result: "Swinging Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2237, ivb: 19.4, hb: 8.3, ext: 5.6, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2250, ivb: 18.6, hb: 8.5, ext: 5.9, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 83.9, spin: 2574, ivb: -0.3, hb: -7.6, ext: 5.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 84.2, spin: 2576, ivb: 0.3, hb: -7.7, ext: 5.1, result: "Flyout", batter: "Tervell Johnson" },
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2298, ivb: 18.7, hb: 6.2, ext: 6.0, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2313, ivb: 19.0, hb: 8.2, ext: 5.8, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2276, ivb: 16.9, hb: 8.0, ext: 5.8, result: "Lineout", batter: "Trey Lipsey" }
    ]
  },
  "Sean Finn": {
    9: [
      // Eddie Hacopian
      { pitchType: "Curveball", velo: 81.7, spin: 2665, ivb: -3.9, hb: -7.5, ext: 4.2, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2371, ivb: 18.4, hb: 9.2, ext: 4.9, result: "Foul", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2431, ivb: 19.4, hb: 8.8, ext: 5.0, result: "Called Strike", batter: "Eddie Hacopian" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2348, ivb: 19.6, hb: 13.2, ext: 4.7, result: "Ball", batter: "Eddie Hacopian" },
      { pitchType: "Curveball", velo: 80.9, spin: 2568, ivb: -1.8, hb: -7.6, ext: 4.5, result: "Groundout", batter: "Eddie Hacopian" },
      // Sam Parker
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2392, ivb: 18.7, hb: 13.9, ext: 4.9, result: "Foul", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 84.1, spin: 1505, ivb: 1.4, hb: 12.4, ext: 5.1, result: "Flyout", batter: "Sam Parker" },
      // Lance Trippel
      { pitchType: "Sinker", velo: 92.2, spin: 2438, ivb: 15.2, hb: 16.0, ext: 5.2, result: "Lineout", batter: "Lance Trippel" }
    ]
  }
};

export default pitchersData;

