const pitchersData = {
  "Gavin King": {
    1: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2351, ivb: 20.5, hb: 10.8, ext: 5.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2338, ivb: 20.7, hb: 6.4, ext: 5.5, result: "Home Run", batter: "Trey Lipsey" },
      // Dawson Willis
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2113, ivb: 17.2, hb: 9.7, ext: 5.6, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2163, ivb: 16.8, hb: 11.4, ext: 5.5, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 91.4, spin: 2406, ivb: 10.0, hb: 1.1, ext: 5.7, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2298, ivb: 17.8, hb: 6.1, ext: 5.5, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 80.8, spin: 2386, ivb: -8.7, hb: -8.8, ext: 5.1, result: "Strikeout", batter: "Dawson Willis" },
      // Sam Parker
      { pitchType: "Curveball", velo: 82.8, spin: 2396, ivb: -10.3, hb: -2.4, ext: 5.4, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2262, ivb: 22.1, hb: 8.4, ext: 5.5, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 81.0, spin: 2293, ivb: -2.1, hb: -8.8, ext: 5.2, result: "Called Strike", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 81.5, spin: 2494, ivb: -6.1, hb: -8.6, ext: 4.6, result: "Strikeout", batter: "Sam Parker" },
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2283, ivb: 19.8, hb: 6.2, ext: 5.4, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2395, ivb: 22.0, hb: 9.0, ext: 5.7, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2378, ivb: 22.4, hb: 7.7, ext: 5.6, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2274, ivb: 21.5, hb: 11.2, ext: 5.5, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Sinker", velo: 87.7, spin: 2209, ivb: 16.7, hb: 17.2, ext: 5.8, result: "Walk", batter: "Shane Lewis" },
      // Taj Bates
      { pitchType: "Curveball", velo: 80.5, spin: 2406, ivb: -8.3, hb: -7.1, ext: 5.2, result: "Swinging Strike", batter: "Taj Bates" },
      { pitchType: "", velo: 79.8, spin: 2347, ivb: -8.3, hb: -4.8, ext: 5.4, result: "Wild Pitch", batter: "Taj Bates" },
      { pitchType: "Curveball", velo: 79.8, spin: 2347, ivb: -8.3, hb: -4.8, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2335, ivb: 21.0, hb: 8.4, ext: 5.4, result: "Foul", batter: "Taj Bates" },
      { pitchType: "Curveball", velo: 80.6, spin: 2292, ivb: -6.5, hb: -2.5, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Slider", velo: 81.0, spin: 2459, ivb: -1.3, hb: -4.8, ext: 5.4, result: "Strikeout", batter: "Taj Bates" }
    ],
    2: [
      // Walter Urbon
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2107, ivb: 17.9, hb: 5.7, ext: 5.5, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2239, ivb: 20.6, hb: 8.4, ext: 5.5, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2224, ivb: 22.8, hb: 9.0, ext: 5.3, result: "Called Strike", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2196, ivb: 21.8, hb: 10.6, ext: 5.4, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2175, ivb: 18.7, hb: 10.0, ext: 5.5, result: "Foul", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2177, ivb: 19.2, hb: 7.2, ext: 5.5, result: "Strikeout", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2314, ivb: 9.7, hb: 6.6, ext: 5.7, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2255, ivb: 11.1, hb: 6.3, ext: 5.8, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2151, ivb: 21.5, hb: 5.2, ext: 5.7, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Curveball", velo: 82.0, spin: 2369, ivb: -9.2, hb: 0.0, ext: 5.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Cutter", velo: 91.3, spin: 2397, ivb: 8.6, hb: 2.1, ext: 5.7, result: "Single", batter: "Tervell Johnson" },
      // Grant Gallagher
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2219, ivb: 21.2, hb: 9.2, ext: 5.4, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2201, ivb: 20.0, hb: 9.0, ext: 5.3, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Cutter", velo: 88.9, spin: 2297, ivb: 10.0, hb: 4.0, ext: 5.7, result: "Called Strike", batter: "Grant Gallagher" },
      { pitchType: "Cutter", velo: 88.2, spin: 2272, ivb: 7.0, hb: 0.9, ext: 5.6, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2210, ivb: 22.0, hb: 8.6, ext: 5.5, result: "Walk", batter: "Grant Gallagher" },
      // Jose Silva
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2211, ivb: 18.4, hb: 9.7, ext: 5.3, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2325, ivb: 12.9, hb: 5.6, ext: 5.6, result: "Grounded Into DP", batter: "Jose Silva" }
    ],
    3: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2220, ivb: 19.9, hb: 9.9, ext: 5.5, result: "Groundout", batter: "Trey Lipsey" },
      // Dawson Willis
      { pitchType: "Curveball", velo: 79.5, spin: 2379, ivb: -5.1, hb: -7.8, ext: 5.4, result: "Called Strike", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 88.9, spin: 2258, ivb: 11.4, hb: 1.9, ext: 5.8, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2074, ivb: 14.8, hb: 10.7, ext: 5.6, result: "Pop Out", batter: "Dawson Willis" },
      // Sam Parker
      { pitchType: "Curveball", velo: 78.5, spin: 2143, ivb: -4.9, hb: 1.6, ext: 5.2, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2079, ivb: 16.8, hb: 9.3, ext: 5.6, result: "Groundout", batter: "Sam Parker" }
    ],
    4: [
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2190, ivb: 17.7, hb: 11.9, ext: 5.7, result: "Double", batter: "Shane Lewis" },
      // Taj Bates
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2309, ivb: 8.8, hb: 9.6, ext: 5.7, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2256, ivb: 19.1, hb: 12.0, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2106, ivb: 17.2, hb: 9.1, ext: 5.5, result: "Groundout", batter: "Taj Bates" },
      // Walter Urbon
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2254, ivb: 9.8, hb: 4.4, ext: 5.7, result: "Groundout", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Curveball", velo: 82.5, spin: 2448, ivb: -9.4, hb: 0.7, ext: 5.3, result: "Ball In Dirt", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2270, ivb: 18.4, hb: 8.3, ext: 5.6, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2287, ivb: 19.6, hb: 10.2, ext: 5.4, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2278, ivb: 14.6, hb: 4.4, ext: 6.0, result: "Groundout", batter: "Tervell Johnson" }
    ],
    5: [
      // Grant Gallagher
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2075, ivb: 19.5, hb: 10.1, ext: 5.5, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2126, ivb: 19.3, hb: 7.7, ext: 5.3, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Cutter", velo: 89.4, spin: 2250, ivb: 11.4, hb: -1.8, ext: 5.6, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2140, ivb: 18.6, hb: 11.3, ext: 5.4, result: "Called Strike", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2074, ivb: 18.4, hb: 7.0, ext: 5.4, result: "Called Strike", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2122, ivb: 20.9, hb: 6.5, ext: 5.7, result: "Flyout", batter: "Grant Gallagher" },
      // Jose Silva
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2447, ivb: 7.2, hb: 5.8, ext: 5.7, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Curveball", velo: 80.5, spin: 2432, ivb: -3.9, hb: -6.8, ext: 5.2, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2440, ivb: 21.0, hb: 9.3, ext: 5.5, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2089, ivb: 19.9, hb: 8.1, ext: 5.6, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2299, ivb: 19.6, hb: 6.9, ext: 5.7, result: "Strikeout", batter: "Jose Silva" },
      // Trey Lipsey
      { pitchType: "Curveball", velo: 80.3, spin: 2440, ivb: -9.8, hb: -2.0, ext: 4.8, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2291, ivb: 19.4, hb: 6.1, ext: 5.7, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2311, ivb: 18.0, hb: 7.5, ext: 5.5, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2219, ivb: 16.3, hb: 12.6, ext: 5.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2343, ivb: 12.6, hb: 5.0, ext: 5.7, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2088, ivb: 16.9, hb: 13.4, ext: 5.6, result: "Walk", batter: "Trey Lipsey" },
      // Dawson Willis
      { pitchType: "Cutter", velo: 88.8, spin: 2198, ivb: 7.0, hb: 3.7, ext: 5.8, result: "Swinging Strike", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 90.0, spin: 2193, ivb: 8.2, hb: 4.7, ext: 5.9, result: "Ball In Dirt", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2289, ivb: 20.1, hb: 8.2, ext: 5.5, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Curveball", velo: 80.4, spin: 2293, ivb: -6.8, hb: 0.7, ext: 5.2, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2279, ivb: 19.1, hb: 6.9, ext: 5.5, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Cutter", velo: 89.0, spin: 2234, ivb: 9.7, hb: 3.9, ext: 5.9, result: "Strikeout", batter: "Dawson Willis" }
    ],
    6: [
      // Sam Parker
      { pitchType: "Sinker", velo: 92.2, spin: 2177, ivb: 16.3, hb: 14.6, ext: 5.5, result: "Groundout", batter: "Sam Parker" },
      // Shane Lewis
      { pitchType: "Changeup", velo: 86.5, spin: 1949, ivb: 5.7, hb: 18.5, ext: 5.9, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Changeup", velo: 87.3, spin: 1935, ivb: 9.9, hb: 17.0, ext: 6.1, result: "Swinging Strike", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2150, ivb: 19.9, hb: 9.6, ext: 5.5, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2201, ivb: 23.7, hb: 9.8, ext: 5.7, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2114, ivb: 19.1, hb: 12.8, ext: 5.5, result: "Single", batter: "Shane Lewis" },
      // Taj Bates
      { pitchType: "", velo: 89.2, spin: 2242, ivb: 9.2, hb: 9.2, ext: 5.9, result: "Wild Pitch", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.2, spin: 2242, ivb: 9.2, hb: 9.2, ext: 5.9, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2329, ivb: 20.2, hb: 11.9, ext: 5.4, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2400, ivb: 18.5, hb: 3.3, ext: 5.9, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2324, ivb: 13.4, hb: 5.6, ext: 5.9, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Cutter", velo: 89.4, spin: 2250, ivb: 7.4, hb: 5.5, ext: 5.8, result: "Walk", batter: "Taj Bates" },
      // Walter Urbon
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2370, ivb: 18.9, hb: 3.0, ext: 6.0, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2325, ivb: 22.2, hb: 6.5, ext: 5.4, result: "Swinging Strike", batter: "Walter Urbon" },
      { pitchType: "Slider", velo: 82.5, spin: 2374, ivb: -2.4, hb: -4.3, ext: 4.7, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2309, ivb: 19.8, hb: 10.7, ext: 5.5, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2296, ivb: 19.6, hb: 14.0, ext: 5.5, result: "Called Strike", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2141, ivb: 21.2, hb: 10.5, ext: 5.4, result: "Walk", batter: "Walter Urbon" }
    ]
  },
  "Miles Garrett": {
    6: [
      // Tervell Johnson
      { pitchType: "Sinker", velo: 91.3, spin: 2152, ivb: 11.3, hb: 20.8, ext: 5.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Sinker", velo: 92.4, spin: 2339, ivb: 20.5, hb: 16.9, ext: 5.2, result: "Swinging Strike", batter: "Tervell Johnson" },
      { pitchType: "Sinker", velo: 91.3, spin: 2282, ivb: 14.3, hb: 15.8, ext: 5.1, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 81.9, spin: 2067, ivb: 3.1, hb: 1.9, ext: 5.1, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 83.4, spin: 2060, ivb: 3.1, hb: 2.3, ext: 5.1, result: "Grounded Into DP", batter: "Tervell Johnson" }
    ],
    7: [
      // Grant Gallagher
      { pitchType: "Slider", velo: 81.8, spin: 1984, ivb: 1.9, hb: 1.7, ext: 5.2, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Sinker", velo: 90.0, spin: 1881, ivb: 13.0, hb: 14.7, ext: 5.2, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Sinker", velo: 89.0, spin: 2149, ivb: 13.8, hb: 12.4, ext: 5.5, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Sinker", velo: 90.1, spin: 2156, ivb: 14.4, hb: 11.3, ext: 5.2, result: "Walk", batter: "Grant Gallagher" },
      // Jose Silva
      { pitchType: "Sinker", velo: 91.1, spin: 2200, ivb: 15.3, hb: 13.8, ext: 5.1, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2332, ivb: 14.5, hb: 12.0, ext: 5.2, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 81.7, spin: 2064, ivb: 2.9, hb: 1.5, ext: 5.0, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Sinker", velo: 89.1, spin: 2236, ivb: 18.2, hb: 14.5, ext: 5.3, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Sinker", velo: 90.2, spin: 2298, ivb: 15.7, hb: 13.6, ext: 5.1, result: "Walk", batter: "Jose Silva" },
      // Trey Lipsey
      { pitchType: "Changeup", velo: 88.2, spin: 2027, ivb: 6.5, hb: 16.8, ext: 5.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2063, ivb: 16.0, hb: 13.0, ext: 5.4, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 89.8, spin: 2247, ivb: 18.5, hb: 15.6, ext: 5.1, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 89.2, spin: 2160, ivb: 16.3, hb: 13.9, ext: 5.3, result: "Called Strike", batter: "Trey Lipsey" },
      { pitchType: "Sinker", velo: 91.1, spin: 2231, ivb: 16.3, hb: 13.7, ext: 5.2, result: "Walk", batter: "Trey Lipsey" }
    ]
  },
  "Cooper McGrath": {
    7: [
      // Dawson Willis
      { pitchType: "Sinker", velo: 92.1, spin: 2511, ivb: 6.5, hb: 9.4, ext: 6.1, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Sinker", velo: 91.9, spin: 2479, ivb: 10.1, hb: 9.7, ext: 6.1, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Sinker", velo: 92.9, spin: 2548, ivb: 8.6, hb: 9.6, ext: 5.8, result: "Pop Out", batter: "Dawson Willis" },
      // Sam Parker
      { pitchType: "Cutter", velo: 87.8, spin: 2655, ivb: 4.4, hb: 0.3, ext: 6.0, result: "Swinging Strike", batter: "Sam Parker" },
      { pitchType: "Slider", velo: 84.1, spin: 2690, ivb: -0.3, hb: -4.9, ext: 5.8, result: "Ball In Dirt", batter: "Sam Parker" },
      { pitchType: "Sinker", velo: 92.1, spin: 2616, ivb: 11.1, hb: 12.8, ext: 6.1, result: "Foul", batter: "Sam Parker" },
      { pitchType: "Cutter", velo: 87.2, spin: 2550, ivb: 1.6, hb: 0.6, ext: 6.2, result: "Ball In Dirt", batter: "Sam Parker" },
      { pitchType: "Cutter", velo: 87.2, spin: 2661, ivb: 2.4, hb: -1.5, ext: 6.0, result: "Strikeout", batter: "Sam Parker" },
      // Shane Lewis
      { pitchType: "Cutter", velo: 87.2, spin: 2700, ivb: 0.2, hb: -3.0, ext: 5.7, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2564, ivb: 9.8, hb: 5.6, ext: 6.3, result: "Foul", batter: "Shane Lewis" },
      { pitchType: "Cutter", velo: 86.5, spin: 2525, ivb: 0.5, hb: -4.5, ext: 5.8, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Sinker", velo: 92.2, spin: 2626, ivb: 9.3, hb: 12.2, ext: 5.9, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Cutter", velo: 88.1, spin: 2753, ivb: 1.5, hb: 0.1, ext: 5.7, result: "Strikeout", batter: "Shane Lewis" }
    ],
    8: [
      // Taj Bates
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2406, ivb: 14.3, hb: 5.3, ext: 5.8, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Sinker", velo: 91.5, spin: 2489, ivb: 10.9, hb: 6.8, ext: 5.8, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Cutter", velo: 85.7, spin: 2550, ivb: 3.6, hb: -0.1, ext: 5.8, result: "Hit By Pitch", batter: "Taj Bates" },
      // Walter Urbon
      { pitchType: "Sinker", velo: 92.4, spin: 2626, ivb: 9.9, hb: 7.5, ext: 6.3, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Sinker", velo: 92.9, spin: 2596, ivb: 12.8, hb: 10.4, ext: 6.3, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Sinker", velo: 93.3, spin: 2659, ivb: 9.3, hb: 7.9, ext: 6.1, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Sinker", velo: 92.8, spin: 2532, ivb: 13.6, hb: 10.3, ext: 6.2, result: "Walk", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2722, ivb: 13.2, hb: 8.4, ext: 6.2, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Cutter", velo: 86.1, spin: 2650, ivb: 2.9, hb: -0.5, ext: 5.8, result: "Called Strike", batter: "Tervell Johnson" },
      { pitchType: "Cutter", velo: 87.2, spin: 2625, ivb: 2.2, hb: -2.4, ext: 5.9, result: "Flyout", batter: "Tervell Johnson" },
      // Grant Gallagher
      { pitchType: "Cutter", velo: 88.0, spin: 2638, ivb: 2.5, hb: -0.5, ext: 6.1, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Cutter", velo: 86.4, spin: 2691, ivb: 3.1, hb: -1.2, ext: 5.9, result: "Called Strike", batter: "Grant Gallagher" },
      { pitchType: "Slider", velo: 85.9, spin: 2643, ivb: 3.0, hb: 0.1, ext: 5.9, result: "Called Strike", batter: "Grant Gallagher" },
      { pitchType: "Cutter", velo: 87.8, spin: 2646, ivb: 2.1, hb: -0.9, ext: 5.9, result: "Strikeout", batter: "Grant Gallagher" },
      // Jose Silva
      { pitchType: "Slider", velo: 85.2, spin: 2630, ivb: 1.9, hb: -0.9, ext: 5.8, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 85.7, spin: 2671, ivb: 2.5, hb: -0.7, ext: 5.7, result: "Called Strike", batter: "Jose Silva" },
      { pitchType: "Cutter", velo: 87.6, spin: 2634, ivb: 2.8, hb: -1.4, ext: 6.2, result: "Ball", batter: "Jose Silva" },
      { pitchType: "Cutter", velo: 86.5, spin: 2443, ivb: 0.6, hb: -2.1, ext: 6.0, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Sinker", velo: 92.4, spin: 2591, ivb: 7.6, hb: 7.8, ext: 6.3, result: "Foul", batter: "Jose Silva" },
      { pitchType: "Slider", velo: 86.3, spin: 2576, ivb: -1.6, hb: -2.6, ext: 5.8, result: "Strikeout", batter: "Jose Silva" }
    ]
  },
  "Aidan Weaver": {
    9: [
      // Trey Lipsey
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2091, ivb: 21.8, hb: 7.4, ext: 6.3, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 1984, ivb: 12.5, hb: 10.8, ext: 6.3, result: "Foul", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 1997, ivb: 10.6, hb: 4.2, ext: 6.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2144, ivb: 14.2, hb: 9.3, ext: 6.5, result: "Ball", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2109, ivb: 13.0, hb: 11.4, ext: 6.5, result: "Swinging Strike", batter: "Trey Lipsey" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2123, ivb: 16.5, hb: 13.3, ext: 6.2, result: "Walk", batter: "Trey Lipsey" },
      // Dawson Willis
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2040, ivb: 13.9, hb: 12.2, ext: 6.4, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2055, ivb: 16.6, hb: 9.8, ext: 6.4, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2046, ivb: 15.0, hb: 6.3, ext: 6.7, result: "Foul", batter: "Dawson Willis" },
      { pitchType: "", velo: 85.6, spin: 2011, ivb: 1.4, hb: -0.7, ext: 6.1, result: "Stolen Base 2B", batter: "Dawson Willis" },
      { pitchType: "Slider", velo: 85.6, spin: 2011, ivb: 1.4, hb: -0.7, ext: 6.1, result: "Ball", batter: "Dawson Willis" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2088, ivb: 19.9, hb: 5.4, ext: 6.5, result: "Strikeout", batter: "Dawson Willis" },
      // Sam Parker
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2003, ivb: 18.8, hb: 6.1, ext: 6.4, result: "Ball", batter: "Sam Parker" },
      { pitchType: "", velo: 91.5, spin: 2036, ivb: 8.4, hb: 4.3, ext: 6.6, result: "Wild Pitch", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2036, ivb: 8.4, hb: 4.3, ext: 6.6, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2132, ivb: 11.8, hb: 2.1, ext: 6.2, result: "Swinging Strike", batter: "Sam Parker" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2126, ivb: 9.9, hb: 3.5, ext: 6.3, result: "Ball", batter: "Sam Parker" },
      { pitchType: "Changeup", velo: 79.5, spin: 1771, ivb: 8.9, hb: 17.1, ext: 6.2, result: "Walk", batter: "Sam Parker" },
      // Shane Lewis
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2007, ivb: 13.7, hb: 7.7, ext: 6.6, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 2058, ivb: 19.1, hb: 5.4, ext: 6.6, result: "Called Strike", batter: "Shane Lewis" },
      { pitchType: "Changeup", velo: 77.3, spin: 1692, ivb: 0.1, hb: 16.8, ext: 6.1, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "", velo: 92.6, spin: 2102, ivb: 18.1, hb: 4.1, ext: 6.5, result: "Wild Pitch", batter: "Shane Lewis" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2102, ivb: 18.1, hb: 4.1, ext: 6.5, result: "Ball", batter: "Shane Lewis" },
      { pitchType: "Changeup", velo: 78.2, spin: 1781, ivb: 2.9, hb: 13.7, ext: 6.1, result: "Walk", batter: "Shane Lewis" },
      // Taj Bates
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2079, ivb: 18.5, hb: 4.9, ext: 6.5, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "", velo: 91.2, spin: 2113, ivb: 16.4, hb: 4.2, ext: 6.6, result: "Wild Pitch", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2113, ivb: 16.4, hb: 4.2, ext: 6.6, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2030, ivb: 18.0, hb: 11.3, ext: 6.3, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2047, ivb: 16.4, hb: 7.9, ext: 6.3, result: "Ball", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2056, ivb: 14.8, hb: 9.5, ext: 6.4, result: "Called Strike", batter: "Taj Bates" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2032, ivb: 14.5, hb: 7.9, ext: 6.6, result: "Groundout", batter: "Taj Bates" },
      // Walter Urbon
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 1977, ivb: 19.1, hb: 5.5, ext: 6.4, result: "Ball", batter: "Walter Urbon" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2084, ivb: 14.7, hb: 12.9, ext: 6.4, result: "Single", batter: "Walter Urbon" },
      // Tervell Johnson
      { pitchType: "Slider", velo: 84.7, spin: 2124, ivb: 1.0, hb: -2.4, ext: 6.2, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "", velo: 92.5, spin: 1973, ivb: 14.2, hb: 8.7, ext: 6.5, result: "Stolen Base 2B", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 92.5, spin: 1973, ivb: 14.2, hb: 8.7, ext: 6.5, result: "Ball", batter: "Tervell Johnson" }
    ]
  },
  "Clayton Johnson": {
    9: [
      // Tervell Johnson
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2319, ivb: 18.1, hb: 10.6, ext: 6.8, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2372, ivb: 19.1, hb: 7.8, ext: 6.8, result: "Swinging Strike", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2389, ivb: 18.1, hb: 7.9, ext: 6.8, result: "Ball", batter: "Tervell Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2438, ivb: 19.6, hb: 10.8, ext: 6.8, result: "Foul", batter: "Tervell Johnson" },
      { pitchType: "Slider", velo: 83.0, spin: 1992, ivb: -1.5, hb: -15.2, ext: 6.0, result: "Walk", batter: "Tervell Johnson" },
      // Grant Gallagher
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2117, ivb: 14.8, hb: 7.5, ext: 6.9, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2298, ivb: 18.9, hb: 7.2, ext: 6.8, result: "Ball", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2286, ivb: 18.4, hb: 7.8, ext: 6.8, result: "Called Strike", batter: "Grant Gallagher" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2104, ivb: 16.5, hb: 5.4, ext: 6.9, result: "Groundout", batter: "Grant Gallagher" }
    ]
  }
};

export default pitchersData;
