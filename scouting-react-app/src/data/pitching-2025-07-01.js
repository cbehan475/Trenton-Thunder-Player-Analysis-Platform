const pitchersData = {
  "Bryson Dudley": {
    1: [
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2254, ivb: 17.1, hb: 11.8, ext: 5.7, result: "Hit By Pitch", batter: "Jordan Peyton" },
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2226, ivb: 17.9, hb: 10.6, ext: 5.9, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 81.5, spin: 2369, ivb: -3.1, hb: -2.9, ext: 5.6, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2198, ivb: 20.0, hb: 11.7, ext: 6.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2232, ivb: 18.6, hb: 11.3, ext: 6.0, result: "Walk", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Slider", velo: 82.5, spin: 2439, ivb: -6.3, hb: -3.2, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2288, ivb: 20.7, hb: 11.7, ext: 6.0, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2243, ivb: 20.1, hb: 8.8, ext: 6.1, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2235, ivb: 21.1, hb: 7.3, ext: 6.1, result: "Walk", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Cutter", velo: 88.1, spin: 2355, ivb: 4.0, hb: 1.2, ext: 5.9, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2251, ivb: 21.3, hb: 10.4, ext: 5.9, result: "Foul Tip", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2238, ivb: 20.4, hb: 10.2, ext: 6.0, result: "Swinging Strike", batter: "Matthew Bardowell" },
      { pitchType: "Cutter", velo: 89.3, spin: 2453, ivb: 6.5, hb: 0.9, ext: 6.0, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2287, ivb: 20.4, hb: 10.6, ext: 6.1, result: "Strikeout", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2210, ivb: 19.4, hb: 11.3, ext: 6.0, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 94.6, spin: 2287, ivb: 17.0, hb: 12.8, ext: 6.1, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 95.9, spin: 2262, ivb: 19.4, hb: 13.9, ext: 6.2, result: "Strikeout", batter: "Amman Dewberry" },
      // Matt Ilgenfritz
      { pitchType: "Cutter", velo: 88.0, spin: 2370, ivb: 4.6, hb: -0.7, ext: 6.0, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Cutter", velo: 88.1, spin: 2505, ivb: 4.3, hb: 0.2, ext: 6.0, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2308, ivb: 23.1, hb: 9.6, ext: 6.0, result: "Pop Out", batter: "Matt Ilgenfritz" }
    ],
    2: [
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 94.2, spin: 2319, ivb: 21.5, hb: 9.7, ext: 5.8, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2372, ivb: 19.1, hb: 10.5, ext: 5.9, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2311, ivb: 17.6, hb: 10.1, ext: 6.0, result: "Flyout", batter: "Armani Newton" },
      // Christian Reyes
      { pitchType: "Four-Seam Fastball", velo: 97.0, spin: 2387, ivb: 21.1, hb: 9.6, ext: 6.0, result: "Called Strike", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 96.3, spin: 2349, ivb: 19.6, hb: 10.0, ext: 6.0, result: "Called Strike", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 96.1, spin: 2385, ivb: 19.8, hb: 9.5, ext: 6.1, result: "Strikeout", batter: "Christian Reyes" },
      // Dylan Schaefer
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2371, ivb: 20.2, hb: 9.5, ext: 6.0, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2379, ivb: 19.6, hb: 10.5, ext: 6.1, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 96.0, spin: 2427, ivb: 19.9, hb: 11.8, ext: 6.1, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2407, ivb: 21.2, hb: 10.9, ext: 6.0, result: "Walk", batter: "Dylan Schaefer" },
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 95.1, spin: 2379, ivb: 20.9, hb: 8.8, ext: 6.2, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Cutter", velo: 86.8, spin: 2409, ivb: 2.9, hb: -0.4, ext: 6.0, result: "Called Strike", batter: "Jordan Peyton" },
      { pitchType: "Cutter", velo: 88.1, spin: 2387, ivb: 3.5, hb: 0.7, ext: 5.9, result: "Swinging Strike", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2402, ivb: 19.8, hb: 10.9, ext: 6.1, result: "Foul", batter: "Jordan Peyton" },
      { pitchType: "Cutter", velo: 87.1, spin: 2453, ivb: 4.6, hb: -0.7, ext: 5.8, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Cutter", velo: 88.1, spin: 2374, ivb: 3.8, hb: -0.2, ext: 6.0, result: "Strikeout", batter: "Jordan Peyton" }
    ],
    3: [
      // Ryan Kennell
      { pitchType: "Slider", velo: 85.9, spin: 2383, ivb: 2.3, hb: 3.1, ext: 5.7, result: "Single", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2289, ivb: 22.1, hb: 7.9, ext: 5.8, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 83.7, spin: 2362, ivb: -2.1, hb: -4.8, ext: 5.6, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 83.4, spin: 2425, ivb: -4.5, hb: -3.9, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2301, ivb: 21.8, hb: 11.2, ext: 6.1, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 2334, ivb: 22.0, hb: 6.7, ext: 6.1, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2321, ivb: 18.2, hb: 12.7, ext: 6.1, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2303, ivb: 19.0, hb: 8.7, ext: 6.1, result: "Home Run", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2310, ivb: 17.1, hb: 9.9, ext: 5.9, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2237, ivb: 18.0, hb: 6.6, ext: 6.0, result: "Flyout", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 2315, ivb: 20.6, hb: 11.1, ext: 6.0, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 84.2, spin: 2512, ivb: -6.0, hb: -2.4, ext: 5.8, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 96.9, spin: 2400, ivb: 19.4, hb: 7.6, ext: 6.0, result: "Strikeout", batter: "Amman Dewberry" },
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2170, ivb: 17.8, hb: 4.8, ext: 6.1, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 85.6, spin: 2358, ivb: 3.1, hb: -4.4, ext: 6.0, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Cutter", velo: 88.9, spin: 2412, ivb: 1.3, hb: 1.2, ext: 6.1, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Cutter", velo: 86.8, spin: 2431, ivb: 2.3, hb: -0.2, ext: 5.8, result: "Called Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Cutter", velo: 87.6, spin: 2438, ivb: 2.7, hb: -1.9, ext: 5.9, result: "Strikeout", batter: "Matt Ilgenfritz" }
    ],
    4: [
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2222, ivb: 17.9, hb: 9.8, ext: 5.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2403, ivb: 18.3, hb: 9.5, ext: 5.8, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2310, ivb: 17.3, hb: 10.1, ext: 5.8, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2371, ivb: 19.1, hb: 12.3, ext: 5.6, result: "Flyout", batter: "Armani Newton" },
      // Christian Reyes
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2396, ivb: 19.2, hb: 10.5, ext: 6.0, result: "Foul", batter: "Christian Reyes" },
      { pitchType: "Sinker", velo: 94.6, spin: 2381, ivb: 18.1, hb: 14.1, ext: 6.0, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Slider", velo: 86.3, spin: 2357, ivb: 2.2, hb: 1.5, ext: 5.9, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 94.3, spin: 2368, ivb: 19.6, hb: 11.8, ext: 6.0, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2354, ivb: 20.6, hb: 11.5, ext: 5.9, result: "Swinging Strike", batter: "Christian Reyes" },
      { pitchType: "Slider", velo: 84.2, spin: 2370, ivb: 3.8, hb: -3.3, ext: 5.8, result: "Strikeout", batter: "Christian Reyes" },
      // Dylan Schaefer
      { pitchType: "Sinker", velo: 96.2, spin: 2371, ivb: 18.0, hb: 14.6, ext: 6.2, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 96.1, spin: 2280, ivb: 15.2, hb: 9.2, ext: 6.1, result: "Swinging Strike", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2286, ivb: 20.6, hb: 2.2, ext: 6.2, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2263, ivb: 16.9, hb: 8.1, ext: 6.1, result: "Strikeout", batter: "Dylan Schaefer" }
    ]
  },
  "Andrew Ronne": {
    5: [
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2171, ivb: 12.0, hb: 3.0, ext: 6.2, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Slider", velo: 83.0, spin: 2776, ivb: -7.0, hb: -16.6, ext: 5.5, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2326, ivb: 12.4, hb: 8.1, ext: 6.3, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 92.8, spin: 2291, ivb: 12.3, hb: 6.6, ext: 6.2, result: "Walk", batter: "Jordan Peyton" },
      // Ryan Kennell
      { pitchType: "Curveball", velo: 81.5, spin: 2501, ivb: -5.5, hb: -13.1, ext: 5.4, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 81.5, spin: 2572, ivb: -2.0, hb: -19.6, ext: 5.5, result: "Single", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2286, ivb: 12.7, hb: 4.8, ext: 6.0, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2161, ivb: 12.5, hb: 6.0, ext: 6.2, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 83.3, spin: 2628, ivb: -4.6, hb: -11.8, ext: 5.7, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Curveball", velo: 82.1, spin: 2577, ivb: -4.2, hb: -12.7, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2266, ivb: 13.9, hb: 4.1, ext: 6.0, result: "Walk", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Slider", velo: 83.2, spin: 2528, ivb: -2.9, hb: -12.6, ext: 5.8, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Slider", velo: 82.9, spin: 2540, ivb: -4.2, hb: -12.3, ext: 5.4, result: "Sac Fly", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2182, ivb: 14.1, hb: 4.8, ext: 5.9, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 81.9, spin: 2485, ivb: -4.1, hb: -18.6, ext: 5.7, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 82.2, spin: 2517, ivb: -5.3, hb: -11.0, ext: 5.8, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2227, ivb: 14.0, hb: 4.9, ext: 6.0, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2267, ivb: 13.1, hb: 6.7, ext: 6.0, result: "Walk", batter: "Amman Dewberry" },
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2289, ivb: 12.5, hb: 6.1, ext: 6.4, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 93.5, spin: 2213, ivb: 13.1, hb: 3.0, ext: 6.1, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.2, spin: 2542, ivb: -4.3, hb: -12.7, ext: 5.6, result: "Called Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Curveball", velo: 82.2, spin: 2557, ivb: -2.5, hb: -16.9, ext: 5.9, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 83.7, spin: 2781, ivb: -2.3, hb: -17.8, ext: 5.6, result: "Ball In Dirt", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 93.9, spin: 2335, ivb: 12.0, hb: 6.7, ext: 6.4, result: "Strikeout", batter: "Matt Ilgenfritz" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2421, ivb: 12.9, hb: 7.3, ext: 6.0, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 83.2, spin: 2576, ivb: -2.3, hb: -13.0, ext: 5.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2265, ivb: 12.6, hb: 5.9, ext: 5.9, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2225, ivb: 12.5, hb: 7.0, ext: 6.1, result: "Groundout", batter: "Armani Newton" }
    ]
  },
  "Collin Bosley-Smith": {
    6: [
      // Christian Reyes
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2169, ivb: 21.1, hb: 6.3, ext: 6.0, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Curveball", velo: 81.3, spin: 2544, ivb: -3.9, hb: -6.8, ext: 5.4, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2143, ivb: 20.4, hb: 4.5, ext: 6.1, result: "Called Strike", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2169, ivb: 20.3, hb: 6.8, ext: 5.9, result: "Swinging Strike", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2148, ivb: 19.8, hb: 6.0, ext: 6.1, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2161, ivb: 20.3, hb: 5.9, ext: 6.0, result: "Walk", batter: "Christian Reyes" },
      // Dylan Schaefer
      { pitchType: "Curveball", velo: 81.0, spin: 2446, ivb: -2.0, hb: -13.5, ext: 5.5, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2144, ivb: 20.7, hb: 3.8, ext: 5.8, result: "Swinging Strike", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 91.8, spin: 2179, ivb: 20.3, hb: 7.9, ext: 6.0, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2157, ivb: 20.9, hb: 8.4, ext: 6.0, result: "Swinging Strike", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2115, ivb: 19.5, hb: 5.8, ext: 6.1, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2149, ivb: 18.0, hb: 8.4, ext: 6.0, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Curveball", velo: 80.4, spin: 2633, ivb: -4.7, hb: -9.8, ext: 5.6, result: "Strikeout", batter: "Dylan Schaefer" },
      // Jordan Peyton
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2163, ivb: 21.7, hb: 6.9, ext: 6.0, result: "Ball", batter: "Jordan Peyton" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2129, ivb: 18.2, hb: 7.6, ext: 6.2, result: "Single", batter: "Jordan Peyton" },
      // Ryan Kennell
      { pitchType: "Curveball", velo: 79.9, spin: 2578, ivb: -7.8, hb: -9.1, ext: 5.7, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2204, ivb: 19.8, hb: 9.1, ext: 6.2, result: "Lineout", batter: "Ryan Kennell" },
      // Boston Smith
      { pitchType: "Changeup", velo: 82.7, spin: 1627, ivb: 7.1, hb: 15.2, ext: 6.2, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2172, ivb: 17.8, hb: 7.7, ext: 5.9, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Curveball", velo: 81.8, spin: 2561, ivb: -6.6, hb: -8.8, ext: 5.6, result: "Groundout", batter: "Boston Smith" }
    ]
  },
  "Ryan Calvert": {
    7: [
      // Matthew Bardowell
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2220, ivb: 17.0, hb: 10.0, ext: 6.1, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2280, ivb: 19.3, hb: 12.3, ext: 6.0, result: "Called Strike", batter: "Matthew Bardowell" },
      { pitchType: "Curveball", velo: 76.4, spin: 2590, ivb: -14.5, hb: -8.5, ext: 5.7, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2144, ivb: 18.3, hb: 9.4, ext: 6.0, result: "Called Strike", batter: "Matthew Bardowell" },
      { pitchType: "Curveball", velo: 75.3, spin: 2610, ivb: -17.8, hb: -10.7, ext: 5.7, result: "Strikeout", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Changeup", velo: 79.0, spin: 1537, ivb: 9.8, hb: 11.3, ext: 6.0, result: "Groundout", batter: "Amman Dewberry" },
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2265, ivb: 19.5, hb: 10.6, ext: 6.0, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2298, ivb: 19.9, hb: 11.5, ext: 6.0, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Curveball", velo: 73.9, spin: 2546, ivb: -15.0, hb: -15.8, ext: 5.6, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2286, ivb: 19.6, hb: 10.9, ext: 6.0, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.5, spin: 2254, ivb: 10.7, hb: 1.6, ext: 5.9, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 89.1, spin: 2263, ivb: 15.8, hb: 14.1, ext: 6.2, result: "Triple", batter: "Matt Ilgenfritz" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2204, ivb: 15.1, hb: 11.1, ext: 6.1, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Curveball", velo: 74.0, spin: 2504, ivb: -14.9, hb: -9.0, ext: 5.8, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Curveball", velo: 75.3, spin: 2492, ivb: -11.6, hb: -8.9, ext: 6.0, result: "Strikeout", batter: "Armani Newton" }
    ]
  },
  "Miles Garrett": {
    8: [
      // Hayden Christiansen
      { pitchType: "Sinker", velo: 92.7, spin: 2344, ivb: 16.2, hb: 12.1, ext: 5.5, result: "Ball", batter: "Hayden Christiansen" },
      { pitchType: "Sinker", velo: 93.2, spin: 2323, ivb: 12.5, hb: 16.4, ext: 5.4, result: "Ball", batter: "Hayden Christiansen" },
      { pitchType: "Sinker", velo: 92.5, spin: 2352, ivb: 15.8, hb: 14.4, ext: 5.4, result: "Single", batter: "Hayden Christiansen" },
      // Dylan Schaefer
      { pitchType: "Sinker", velo: 92.2, spin: 2198, ivb: 15.3, hb: 16.1, ext: 5.3, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Sinker", velo: 92.6, spin: 2362, ivb: 17.1, hb: 14.2, ext: 5.2, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Sinker", velo: 93.4, spin: 2428, ivb: 14.8, hb: 17.5, ext: 5.3, result: "Swinging Strike", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 85.1, spin: 2108, ivb: 3.6, hb: -1.6, ext: 5.6, result: "Ball In Dirt", batter: "Dylan Schaefer" },
      { pitchType: "Sinker", velo: 92.4, spin: 2110, ivb: 10.4, hb: 15.1, ext: 5.7, result: "Walk", batter: "Dylan Schaefer" },
      // Jordan Peyton
      { pitchType: "Sinker", velo: 92.3, spin: 2328, ivb: 13.9, hb: 15.2, ext: 5.5, result: "Lineout", batter: "Jordan Peyton" },
      // Ryan Kennell
      { pitchType: "Slider", velo: 84.1, spin: 2176, ivb: 1.9, hb: 0.2, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.4, spin: 2105, ivb: 4.6, hb: 18.8, ext: 5.5, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 91.8, spin: 2343, ivb: 14.7, hb: 14.9, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.7, spin: 2117, ivb: 10.2, hb: 16.7, ext: 5.4, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.0, spin: 2314, ivb: 13.9, hb: 13.2, ext: 5.5, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 91.1, spin: 2366, ivb: 13.7, hb: 17.5, ext: 5.5, result: "Grounded Into DP", batter: "Ryan Kennell" }
    ]
  },
  "Paulo Noris": {
    9: [
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 86.8, spin: 2165, ivb: 20.7, hb: 6.2, ext: 6.1, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 86.9, spin: 2158, ivb: 18.2, hb: 5.9, ext: 6.2, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 87.2, spin: 2168, ivb: 19.5, hb: 3.8, ext: 6.1, result: "Flyout", batter: "Boston Smith" },
      // Matthew Bardowell
      { pitchType: "Cutter", velo: 86.7, spin: 2036, ivb: 17.5, hb: 4.2, ext: 6.3, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 86.4, spin: 2074, ivb: 18.2, hb: 6.1, ext: 6.2, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 84.6, spin: 2146, ivb: 20.3, hb: 6.0, ext: 6.2, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Cutter", velo: 84.5, spin: 2029, ivb: 18.5, hb: 3.6, ext: 6.3, result: "Walk", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Changeup", velo: 77.3, spin: 1952, ivb: 6.2, hb: 18.4, ext: 5.9, result: "Swinging Strike", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 85.7, spin: 2003, ivb: 17.6, hb: 6.7, ext: 6.2, result: "Foul", batter: "Amman Dewberry" },
      { pitchType: "Changeup", velo: 76.5, spin: 1854, ivb: 7.7, hb: 16.7, ext: 5.8, result: "Strikeout", batter: "Amman Dewberry" },
      // Matt Ilgenfritz
      { pitchType: "Cutter", velo: 84.8, spin: 1787, ivb: 14.8, hb: 4.6, ext: 6.2, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Changeup", velo: 75.9, spin: 1958, ivb: 8.8, hb: 17.0, ext: 6.0, result: "Swinging Strike (Blocked)", batter: "Matt Ilgenfritz" },
      { pitchType: "Changeup", velo: 77.7, spin: 1866, ivb: 10.5, hb: 15.0, ext: 5.7, result: "Triple", batter: "Matt Ilgenfritz" },
      // Armani Newton
      { pitchType: "Changeup", velo: 77.7, spin: 1919, ivb: 10.2, hb: 16.0, ext: 6.0, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 79.8, spin: 2011, ivb: 2.5, hb: 1.5, ext: 5.7, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 87.7, spin: 2017, ivb: 18.1, hb: 9.5, ext: 6.0, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Cutter", velo: 86.3, spin: 2027, ivb: 16.1, hb: 6.0, ext: 6.0, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Changeup", velo: 77.8, spin: 2024, ivb: 9.0, hb: 15.5, ext: 5.8, result: "Flyout", batter: "Armani Newton" }
    ]
  }
};

export default pitchersData;
