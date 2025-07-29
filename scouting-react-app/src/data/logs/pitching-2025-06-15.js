const pitchersData = {
  "Jude Abbadessa": {
    1: [
      // Ryan Kennell
      { pitchType: "Sinker", velo: 92.5, spin: 2030, ivb: 4.3, hb: 18.7, ext: 5.2, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 90.7, spin: 2047, ivb: 16.8, hb: 11.7, ext: 5.5, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 80.8, spin: 2217, ivb: -2.1, hb: -7.5, ext: 4.8, result: "Groundout", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Slider", velo: 81.6, spin: 2259, ivb: 0.6, hb: -8.0, ext: 4.9, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Changeup", velo: 85.7, spin: 1991, ivb: -2.8, hb: 16.7, ext: 5.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 83.1, spin: 2277, ivb: 3.7, hb: -2.7, ext: 4.9, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 91.4, spin: 1953, ivb: 7.8, hb: 16.3, ext: 5.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 91.6, spin: 1847, ivb: 5.8, hb: 18.5, ext: 5.5, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 91.4, spin: 1909, ivb: 7.0, hb: 17.4, ext: 5.6, result: "Strikeout", batter: "Armani Newton" },
      // Boston Smith
      { pitchType: "Slider", velo: 82.2, spin: 2194, ivb: -1.4, hb: -6.6, ext: 4.9, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 86.1, spin: 1900, ivb: 0.7, hb: 16.9, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 91.9, spin: 1957, ivb: 6.2, hb: 15.1, ext: 5.4, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 81.9, spin: 2150, ivb: -1.8, hb: -8.4, ext: 5.1, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 91.8, spin: 1852, ivb: 5.3, hb: 15.6, ext: 5.6, result: "Walk", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Curveball", velo: 81.4, spin: 2146, ivb: -1.4, hb: -6.2, ext: 5.0, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 81.9, spin: 2134, ivb: -0.8, hb: -7.4, ext: 4.9, result: "Lineout", batter: "Hayden Jatczak" }
    ],
    2: [
      // Logan Johnstone
      { pitchType: "Sinker", velo: 92.9, spin: 2080, ivb: 14.2, hb: 15.7, ext: 5.2, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 92.0, spin: 2103, ivb: 7.7, hb: 21.6, ext: 5.3, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 91.0, spin: 2006, ivb: 7.8, hb: 20.5, ext: 5.7, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 1938, ivb: 22.9, hb: 7.7, ext: 5.5, result: "Foul", batter: "Logan Johnstone" },
      { pitchType: "Slider", velo: 83.1, spin: 2143, ivb: 1.4, hb: -1.9, ext: 4.9, result: "Strikeout", batter: "Logan Johnstone" },
      // Matt Ilgenfritz
      { pitchType: "Slider", velo: 82.9, spin: 2157, ivb: 0.3, hb: -4.0, ext: 4.9, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 1896, ivb: 13.3, hb: 12.1, ext: 5.2, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 81.7, spin: 2135, ivb: 5.5, hb: -7.1, ext: 4.9, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 91.1, spin: 1876, ivb: 12.0, hb: 15.7, ext: 5.6, result: "Single", batter: "Matt Ilgenfritz" },
      // Joey Spence
      { pitchType: "Sinker", velo: 91.1, spin: 1981, ivb: 8.1, hb: 18.1, ext: 5.7, result: "Called Strike", batter: "Joey Spence" },
      { pitchType: "Slider", velo: 82.6, spin: 2212, ivb: 1.5, hb: -5.5, ext: 5.1, result: "Swinging Strike (Blocked)", batter: "Joey Spence" },
      { pitchType: "Slider", velo: 82.8, spin: 2300, ivb: -0.2, hb: -7.6, ext: 4.9, result: "Ball In Dirt", batter: "Joey Spence" },
      { pitchType: "Slider", velo: 83.3, spin: 2198, ivb: 2.8, hb: -4.6, ext: 5.1, result: "Hit By Pitch", batter: "Joey Spence" },
      // Amman Dewberry
      { pitchType: "Slider", velo: 83.6, spin: 2215, ivb: 2.5, hb: -2.1, ext: 5.0, result: "Ball In Dirt", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 92.8, spin: 2122, ivb: 13.4, hb: 13.1, ext: 5.6, result: "Ball In Dirt", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2090, ivb: 16.6, hb: 10.3, ext: 5.5, result: "Ball In Dirt", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 92.8, spin: 2101, ivb: 11.8, hb: 17.1, ext: 5.6, result: "Walk", batter: "Amman Dewberry" },
      // Dylan Schaefer
      { pitchType: "Sinker", velo: 92.7, spin: 1971, ivb: 11.2, hb: 15.4, ext: 5.4, result: "Called Strike", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 82.9, spin: 2114, ivb: 2.5, hb: -2.6, ext: 5.0, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 84.3, spin: 2191, ivb: 4.5, hb: -2.5, ext: 4.9, result: "Strikeout", batter: "Dylan Schaefer" },
      // Ryan Kennell
      { pitchType: "Slider", velo: 83.3, spin: 2074, ivb: 3.5, hb: -3.2, ext: 5.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.4, spin: 2094, ivb: 10.8, hb: 19.0, ext: 5.6, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 81.7, spin: 2244, ivb: -0.3, hb: -7.9, ext: 4.9, result: "Groundout", batter: "Ryan Kennell" }
    ],
    3: [
      // Armani Newton
      { pitchType: "Sinker", velo: 92.1, spin: 2059, ivb: 6.1, hb: 18.4, ext: 5.4, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 91.6, spin: 1971, ivb: 7.3, hb: 15.7, ext: 5.5, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 91.4, spin: 2001, ivb: 4.4, hb: 16.3, ext: 5.5, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 90.9, spin: 1957, ivb: 12.2, hb: 15.1, ext: 5.6, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 91.1, spin: 1825, ivb: 8.0, hb: 13.5, ext: 5.3, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 90.7, spin: 1877, ivb: 9.1, hb: 14.0, ext: 5.5, result: "Strikeout", batter: "Armani Newton" },
      // Boston Smith
      { pitchType: "Slider", velo: 82.8, spin: 2163, ivb: -0.1, hb: -4.4, ext: 5.0, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 86.7, spin: 1975, ivb: 12.5, hb: 9.3, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 1857, ivb: 13.8, hb: 9.1, ext: 5.4, result: "Groundout", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 1882, ivb: 13.9, hb: 9.9, ext: 5.5, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 83.3, spin: 2109, ivb: -3.6, hb: -1.6, ext: 4.9, result: "Groundout", batter: "Hayden Jatczak" }
    ],
    4: [
      // Logan Johnstone
      { pitchType: "Slider", velo: 81.2, spin: 2228, ivb: 4.4, hb: -5.3, ext: 4.9, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 91.7, spin: 2072, ivb: 14.8, hb: 12.9, ext: 5.6, result: "Foul", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 91.8, spin: 2037, ivb: 4.6, hb: 17.9, ext: 5.7, result: "Groundout", batter: "Logan Johnstone" },
      // Matt Ilgenfritz
      { pitchType: "Sinker", velo: 92.3, spin: 2014, ivb: 7.2, hb: 21.2, ext: 5.4, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 91.1, spin: 2033, ivb: 12.3, hb: 15.9, ext: 5.7, result: "Called Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 91.1, spin: 2018, ivb: 13.9, hb: 18.5, ext: 5.4, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 81.8, spin: 2195, ivb: -2.5, hb: -8.3, ext: 5.2, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.0, spin: 2217, ivb: -1.0, hb: -7.0, ext: 4.9, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 80.6, spin: 2070, ivb: 5.5, hb: -5.8, ext: 5.0, result: "Pop Out", batter: "Matt Ilgenfritz" },
      // Joey Spence
      { pitchType: "Sinker", velo: 92.5, spin: 1976, ivb: 5.2, hb: 16.7, ext: 5.6, result: "Ball", batter: "Joey Spence" },
      { pitchType: "Sinker", velo: 90.9, spin: 2074, ivb: 8.3, hb: 17.7, ext: 5.7, result: "Ball", batter: "Joey Spence" },
      { pitchType: "Sinker", velo: 91.1, spin: 1997, ivb: 8.5, hb: 15.6, ext: 5.8, result: "Foul", batter: "Joey Spence" },
      { pitchType: "Sinker", velo: 91.4, spin: 2051, ivb: 11.8, hb: 15.0, ext: 5.6, result: "Swinging Strike", batter: "Joey Spence" },
      { pitchType: "Slider", velo: 82.8, spin: 2256, ivb: 1.4, hb: -4.4, ext: 4.9, result: "Strikeout", batter: "Joey Spence" }
    ],
    5: [
      // Amman Dewberry
      { pitchType: "Sinker", velo: 91.8, spin: 2128, ivb: 10.5, hb: 16.8, ext: 5.7, result: "Field Error", batter: "Amman Dewberry" },
      // Dylan Schaefer
      { pitchType: "Sinker", velo: 91.1, spin: 1955, ivb: 12.5, hb: 15.6, ext: 5.8, result: "Foul Bunt", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 80.5, spin: 2315, ivb: 6.1, hb: -9.2, ext: 4.8, result: "Foul Bunt", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 82.1, spin: 2200, ivb: 6.2, hb: -5.6, ext: 5.0, result: "Strikeout", batter: "Dylan Schaefer" },
      // Ryan Kennell
      { pitchType: "Sinker", velo: 93.4, spin: 1985, ivb: 12.7, hb: 13.3, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.5, spin: 2080, ivb: 10.7, hb: 16.1, ext: 5.5, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 81.9, spin: 2291, ivb: 1.0, hb: -5.3, ext: 5.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.3, spin: 2029, ivb: 13.1, hb: 12.6, ext: 5.7, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 93.7, spin: 2099, ivb: 14.8, hb: 15.7, ext: 5.4, result: "Groundout", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2089, ivb: 15.1, hb: 12.5, ext: 5.4, result: "Groundout", batter: "Armani Newton" }
    ]
  },
  "Cooper McGrath": {
    6: [
      // Boston Smith
      { pitchType: "Sinker", velo: 92.0, spin: 2536, ivb: 6.0, hb: 15.9, ext: 6.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.1, spin: 2459, ivb: 8.7, hb: 12.8, ext: 6.5, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.8, spin: 2589, ivb: 7.7, hb: 16.0, ext: 6.5, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.5, spin: 2508, ivb: 9.5, hb: 9.9, ext: 6.6, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 93.5, spin: 2483, ivb: 7.4, hb: 12.1, ext: 6.6, result: "Groundout", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Slider", velo: 81.1, spin: 2875, ivb: 2.8, hb: -12.1, ext: 6.0, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 92.5, spin: 2465, ivb: 10.1, hb: 11.9, ext: 6.8, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 91.5, spin: 2574, ivb: 6.5, hb: 16.3, ext: 6.7, result: "Single", batter: "Hayden Jatczak" },
      // Logan Johnstone
      { pitchType: "Sinker", velo: 92.0, spin: 2451, ivb: 5.5, hb: 13.6, ext: 6.6, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 91.4, spin: 2564, ivb: 5.3, hb: 14.6, ext: 6.6, result: "Single", batter: "Logan Johnstone" },
      // Matt Ilgenfritz
      { pitchType: "Slider", velo: 85.8, spin: 2560, ivb: 2.8, hb: 0.9, ext: 6.7, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 83.7, spin: 2534, ivb: -0.6, hb: -2.2, ext: 6.5, result: "Called Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 84.3, spin: 2615, ivb: 0.0, hb: -2.2, ext: 6.5, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2530, ivb: 9.7, hb: 6.4, ext: 6.7, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.6, spin: 2873, ivb: 6.6, hb: -10.2, ext: 6.3, result: "Strikeout", batter: "Matt Ilgenfritz" },
      // Joey Spence
      { pitchType: "Slider", velo: 86.1, spin: 2744, ivb: -0.2, hb: -2.0, ext: 6.5, result: "Single", batter: "Joey Spence" }
    ]
  },
  "Codi Scott": {
    6: [
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2345, ivb: 20.1, hb: -0.8, ext: 5.4, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 87.1, spin: 2487, ivb: 7.9, hb: 0.2, ext: 5.2, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2278, ivb: 17.4, hb: -4.8, ext: 5.2, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Slider", velo: 78.7, spin: 2607, ivb: 0.2, hb: 12.6, ext: 5.1, result: "Strikeout", batter: "Amman Dewberry" }
    ],
    7: [
      // Dylan Schaefer
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 2223, ivb: 11.0, hb: -1.8, ext: 5.4, result: "Called Strike", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 85.5, spin: 2489, ivb: 4.4, hb: 3.7, ext: 4.9, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Changeup", velo: 85.3, spin: 1612, ivb: 9.4, hb: -9.6, ext: 5.5, result: "Single", batter: "Dylan Schaefer" },
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2319, ivb: 14.0, hb: -4.6, ext: 5.3, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 75.7, spin: 2518, ivb: -0.3, hb: 16.9, ext: 4.7, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 88.3, spin: 2312, ivb: 11.6, hb: -5.7, ext: 5.1, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 88.0, spin: 2282, ivb: 13.3, hb: 0.4, ext: 5.2, result: "Foul", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 84.1, spin: 2341, ivb: 3.0, hb: 3.6, ext: 5.2, result: "Strikeout", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 88.0, spin: 2167, ivb: 15.4, hb: -2.2, ext: 5.3, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 76.0, spin: 2540, ivb: -3.1, hb: 17.2, ext: 5.0, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 82.5, spin: 2353, ivb: -0.4, hb: 8.1, ext: 4.9, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 2233, ivb: 13.9, hb: -0.9, ext: 5.3, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 87.2, spin: 2223, ivb: 15.2, hb: 1.0, ext: 5.3, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 85.9, spin: 2343, ivb: 8.1, hb: 2.6, ext: 5.2, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 87.8, spin: 2275, ivb: 13.7, hb: 3.5, ext: 5.2, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 76.6, spin: 2484, ivb: -4.0, hb: 17.5, ext: 5.0, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2285, ivb: 13.6, hb: -3.5, ext: 5.4, result: "Triple", batter: "Armani Newton" }
    ]
  },
  "Noah Edders": {
    7: [
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2197, ivb: 16.0, hb: 4.5, ext: 6.5, result: "Sac Fly", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2216, ivb: 16.8, hb: 7.1, ext: 6.6, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 82.8, spin: 2247, ivb: -1.4, hb: -5.3, ext: 5.7, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 81.6, spin: 2505, ivb: -1.9, hb: -7.1, ext: 5.7, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 81.3, spin: 2546, ivb: -1.3, hb: -6.2, ext: 5.8, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2354, ivb: 15.8, hb: 6.8, ext: 6.7, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 83.9, spin: 2393, ivb: 5.1, hb: -4.9, ext: 5.9, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 83.9, spin: 2568, ivb: 0.3, hb: -6.1, ext: 5.6, result: "Flyout", batter: "Hayden Jatczak" }
    ],
    8: [
      // Logan Johnstone
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 2085, ivb: 17.9, hb: 9.8, ext: 6.5, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 90.6, spin: 2182, ivb: 13.7, hb: 12.3, ext: 6.4, result: "Flyout", batter: "Logan Johnstone" },
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2322, ivb: 16.2, hb: 9.2, ext: 6.6, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2428, ivb: 16.6, hb: 10.8, ext: 6.6, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2367, ivb: 15.9, hb: 8.0, ext: 6.5, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 91.0, spin: 2270, ivb: 17.3, hb: 9.9, ext: 6.5, result: "Called Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 90.6, spin: 2359, ivb: 16.2, hb: 7.7, ext: 6.5, result: "Groundout", batter: "Matt Ilgenfritz" },
      // Joey Spence
      { pitchType: "Sinker", velo: 91.6, spin: 2208, ivb: 15.6, hb: 14.5, ext: 6.5, result: "Called Strike", batter: "Joey Spence" },
      { pitchType: "Slider", velo: 82.9, spin: 2493, ivb: 8.9, hb: -4.8, ext: 5.8, result: "Swinging Strike", batter: "Joey Spence" },
      { pitchType: "Sinker", velo: 93.4, spin: 2289, ivb: 9.2, hb: 18.6, ext: 6.4, result: "Ball", batter: "Joey Spence" },
      { pitchType: "Slider", velo: 83.0, spin: 2519, ivb: 9.5, hb: -1.2, ext: 5.8, result: "Strikeout", batter: "Joey Spence" }
    ]
  }
};

export default pitchersData;

