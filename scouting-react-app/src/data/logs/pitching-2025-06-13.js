const pitchersData = {
  "Preston Prince": {
    1: [
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 89.0, spin: 1892, ivb: 20.6, hb: -8.6, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 1937, ivb: 18.9, hb: -10.0, ext: 5.5, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 87.7, spin: 1748, ivb: 17.9, hb: -4.8, ext: 5.5, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 85.2, spin: 1630, ivb: 15.8, hb: -6.9, ext: 5.4, result: "Walk", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 1700, ivb: 18.3, hb: -0.7, ext: 5.5, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 82.1, spin: 2015, ivb: 6.6, hb: 4.2, ext: 5.6, result: "Foul Tip", batter: "Armani Newton" },
      { pitchType: "Changeup", velo: 79.1, spin: 1449, ivb: 1.7, hb: -8.7, ext: 5.5, result: "Strikeout", batter: "Armani Newton" },
      // Logan Johnstone
      { pitchType: "Slider", velo: 81.9, spin: 1929, ivb: 6.5, hb: 4.4, ext: 5.6, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 89.2, spin: 2105, ivb: 21.9, hb: -7.0, ext: 5.6, result: "Pop Out", batter: "Logan Johnstone" },
      // Taeg Gollert
      { pitchType: "Four-Seam Fastball", velo: 89.4, spin: 1953, ivb: 19.7, hb: -6.8, ext: 5.5, result: "Groundout", batter: "Taeg Gollert" }
    ],
    2: [
      // Boston Smith
      { pitchType: "Changeup", velo: 88.2, spin: 2005, ivb: 20.5, hb: -11.0, ext: 5.5, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 88.3, spin: 2010, ivb: 20.7, hb: -10.1, ext: 5.5, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 82.4, spin: 1966, ivb: 8.4, hb: -0.8, ext: 5.8, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 77.5, spin: 1661, ivb: 2.6, hb: -13.8, ext: 5.5, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 76.9, spin: 1639, ivb: 7.4, hb: -10.7, ext: 5.3, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 84.3, spin: 1940, ivb: 8.9, hb: 1.1, ext: 5.6, result: "Field Error", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Changeup", velo: 77.7, spin: 1503, ivb: 3.2, hb: -13.2, ext: 5.6, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 1978, ivb: 19.7, hb: -2.4, ext: 5.5, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2111, ivb: 19.2, hb: -7.2, ext: 5.4, result: "Forceout", batter: "Hayden Jatczak" },
      // Matthew Graveline
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2130, ivb: 16.0, hb: -7.4, ext: 5.5, result: "Ball In Dirt", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2026, ivb: 20.0, hb: -5.0, ext: 5.4, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 1992, ivb: 17.7, hb: -8.8, ext: 5.5, result: "Ball In Dirt", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 87.6, spin: 1754, ivb: 13.0, hb: -3.2, ext: 5.4, result: "Walk", batter: "Matthew Graveline" },
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 88.0, spin: 2005, ivb: 19.2, hb: -6.2, ext: 5.5, result: "Ball In Dirt", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 87.5, spin: 1930, ivb: 20.4, hb: -8.5, ext: 5.6, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: null, velo: 82.4, spin: 1843, ivb: 9.6, hb: -2.7, ext: 5.4, result: "Wild Pitch", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 82.4, spin: 1843, ivb: 9.6, hb: -2.7, ext: 5.4, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 88.8, spin: 1842, ivb: 18.8, hb: -6.0, ext: 5.6, result: "Called Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 1909, ivb: 19.2, hb: -5.9, ext: 5.5, result: "Single", batter: "Matt Ilgenfritz" },
      // Dylan Schaefer
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 1953, ivb: 20.6, hb: -6.0, ext: 5.5, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 87.7, spin: 2023, ivb: 19.3, hb: -9.6, ext: 5.6, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: null, velo: 87.4, spin: 1995, ivb: 19.6, hb: -8.0, ext: 5.4, result: "Catcher Pickoff Attempt 1B", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 1995, ivb: 19.6, hb: -8.0, ext: 5.4, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Changeup", velo: 85.8, spin: 1882, ivb: 17.4, hb: -9.5, ext: 5.8, result: "Walk", batter: "Dylan Schaefer" },
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 87.0, spin: 2077, ivb: 18.7, hb: -9.0, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2116, ivb: 19.9, hb: -8.4, ext: 5.5, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 85.5, spin: 1917, ivb: 20.0, hb: -4.0, ext: 5.5, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 86.4, spin: 1936, ivb: 22.3, hb: -3.6, ext: 5.4, result: "Ball In Dirt", batter: "Ryan Kennell" },
      { pitchType: "Changeup", velo: 86.9, spin: 1925, ivb: 15.9, hb: -9.5, ext: 5.4, result: "Walk", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Slider", velo: 82.2, spin: 1818, ivb: 10.3, hb: 1.8, ext: 5.7, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 81.1, spin: 1940, ivb: 11.0, hb: 1.2, ext: 5.5, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 82.6, spin: 1865, ivb: 8.5, hb: 4.5, ext: 5.7, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Changeup", velo: 78.4, spin: 1498, ivb: 6.1, hb: -15.5, ext: 5.5, result: "Hit By Pitch", batter: "Armani Newton" },
      // Logan Johnstone
      { pitchType: "Slider", velo: 80.8, spin: 1816, ivb: 5.7, hb: 0.5, ext: 5.5, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Slider", velo: 81.3, spin: 1960, ivb: 3.1, hb: 0.8, ext: 5.7, result: "Ball In Dirt", batter: "Logan Johnstone" },
      { pitchType: "Slider", velo: 83.4, spin: 1969, ivb: 8.5, hb: 4.1, ext: 5.8, result: "Single", batter: "Logan Johnstone" }
    ]
  },
  "Caden Spivey": {
    2: [
      // Taeg Gollert
      { pitchType: "Sinker", velo: 91.0, spin: 2347, ivb: 16.8, hb: 11.7, ext: 6.2, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 92.1, spin: 2330, ivb: 17.1, hb: 10.1, ext: 6.0, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Curveball", velo: 78.0, spin: 2504, ivb: -7.3, hb: -15.2, ext: 5.4, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2359, ivb: 17.4, hb: 10.2, ext: 5.9, result: "Double", batter: "Taeg Gollert" },
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2371, ivb: 16.0, hb: 10.3, ext: 6.1, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.7, spin: 2450, ivb: 15.4, hb: 13.2, ext: 5.9, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 82.3, spin: 2497, ivb: 0.3, hb: -5.4, ext: 5.4, result: "Home Run", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Four-Seam Fastball", velo: 92.6, spin: 2075, ivb: 18.4, hb: 5.6, ext: 6.2, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 2321, ivb: 20.1, hb: 7.7, ext: 5.9, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Curveball", velo: 78.2, spin: 2542, ivb: -6.8, hb: -17.2, ext: 5.5, result: "Flyout", batter: "Hayden Jatczak" },
      // Matthew Graveline
      { pitchType: "Curveball", velo: 76.7, spin: 2570, ivb: -6.1, hb: -7.5, ext: 5.3, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2239, ivb: 14.7, hb: 8.4, ext: 6.1, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2259, ivb: 17.3, hb: 6.2, ext: 6.0, result: "Called Strike", batter: "Matthew Graveline" },
      { pitchType: "Sinker", velo: 92.8, spin: 2307, ivb: 14.4, hb: 13.0, ext: 6.1, result: "Foul", batter: "Matthew Graveline" },
      { pitchType: "Sinker", velo: 93.7, spin: 2318, ivb: 12.2, hb: 15.7, ext: 6.2, result: "Single", batter: "Matthew Graveline" },
      // Matt Ilgenfritz
      { pitchType: "Curveball", velo: 80.1, spin: 2522, ivb: -0.7, hb: -11.2, ext: 5.5, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 83.4, spin: 2511, ivb: -1.0, hb: -6.5, ext: 5.2, result: "Foul", batter: "Matt Ilgenfritz" },
      { pitchType: "Slider", velo: 84.2, spin: 2619, ivb: 0.7, hb: -1.3, ext: 5.2, result: "Groundout", batter: "Matt Ilgenfritz" }
    ],
    3: [
      // Dylan Schaefer
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2189, ivb: 17.0, hb: 7.8, ext: 6.2, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Sinker", velo: 92.0, spin: 2270, ivb: 14.7, hb: 11.6, ext: 6.3, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 90.8, spin: 2321, ivb: 16.1, hb: 10.2, ext: 6.1, result: "Swinging Strike", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2293, ivb: 15.4, hb: 10.6, ext: 6.2, result: "Called Strike", batter: "Dylan Schaefer" },
      { pitchType: "Slider", velo: 82.8, spin: 2593, ivb: -0.1, hb: -2.8, ext: 5.6, result: "Lineout", batter: "Dylan Schaefer" },
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2261, ivb: 17.4, hb: 7.8, ext: 6.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2358, ivb: 17.6, hb: 8.9, ext: 6.3, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Slider", velo: 81.8, spin: 2460, ivb: -2.1, hb: -3.2, ext: 5.4, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2281, ivb: 15.8, hb: 9.9, ext: 6.3, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2273, ivb: 19.8, hb: 6.5, ext: 6.1, result: "Foul", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 2216, ivb: 17.2, hb: 6.5, ext: 6.0, result: "Strikeout", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2163, ivb: 15.0, hb: 9.3, ext: 6.1, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Curveball", velo: 76.3, spin: 2497, ivb: -1.7, hb: -13.0, ext: 5.1, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Curveball", velo: 78.3, spin: 2640, ivb: -1.9, hb: -12.6, ext: 5.3, result: "Called Strike", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2227, ivb: 18.9, hb: 5.0, ext: 5.8, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 92.1, spin: 2097, ivb: 10.9, hb: 9.1, ext: 6.0, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Curveball", velo: 77.3, spin: 2427, ivb: -6.9, hb: -13.4, ext: 5.1, result: "Walk", batter: "Armani Newton" },
      // Logan Johnstone
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2178, ivb: 15.7, hb: 5.6, ext: 6.0, result: "Groundout", batter: "Logan Johnstone" }
    ],
    4: [
      // Taeg Gollert
      { pitchType: "Sinker", velo: 89.7, spin: 2065, ivb: 11.9, hb: 15.3, ext: 6.1, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Curveball", velo: 77.6, spin: 2467, ivb: -4.0, hb: -10.9, ext: 5.2, result: "Lineout", batter: "Taeg Gollert" },
      // Boston Smith
      { pitchType: "Curveball", velo: 75.9, spin: 2424, ivb: -3.6, hb: -8.7, ext: 5.5, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Curveball", velo: 78.5, spin: 2438, ivb: 1.0, hb: -2.2, ext: 5.4, result: "Groundout", batter: "Boston Smith" },
      // Hayden Jatczak
      { pitchType: "Sinker", velo: 89.9, spin: 2215, ivb: 12.9, hb: 14.3, ext: 6.2, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 91.2, spin: 2249, ivb: 11.8, hb: 13.7, ext: 6.2, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 88.4, spin: 2263, ivb: 13.0, hb: 13.7, ext: 6.0, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2333, ivb: 15.4, hb: 10.7, ext: 6.0, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 90.9, spin: 2113, ivb: 11.3, hb: 12.1, ext: 6.2, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 89.4, spin: 2036, ivb: 10.4, hb: 8.7, ext: 6.2, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Curveball", velo: 77.0, spin: 2476, ivb: -4.6, hb: -10.6, ext: 5.4, result: "Strikeout", batter: "Hayden Jatczak" }
    ]
  },
  "Eddie Smink": {
    5: [
      // Matthew Graveline
      { pitchType: "Sinker", velo: 92.2, spin: 2264, ivb: 16.2, hb: 14.4, ext: 5.5, result: "Foul", batter: "Matthew Graveline" },
      { pitchType: "Curveball", velo: 78.9, spin: 2394, ivb: 0.0, hb: -5.8, ext: 5.2, result: "Foul", batter: "Matthew Graveline" },
      { pitchType: "Sinker", velo: 92.9, spin: 2070, ivb: 14.8, hb: 14.5, ext: 5.6, result: "Triple", batter: "Matthew Graveline" },
      // Matt Ilgenfritz
      { pitchType: "Curveball", velo: 72.0, spin: 2237, ivb: -13.6, hb: -9.7, ext: 5.4, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 91.9, spin: 2136, ivb: 14.4, hb: 12.5, ext: 5.5, result: "Single", batter: "Matt Ilgenfritz" },
      // Dylan Schaefer
      { pitchType: "Curveball", velo: 75.3, spin: 2377, ivb: -3.9, hb: -6.2, ext: 5.4, result: "Called Strike", batter: "Dylan Schaefer" },
      { pitchType: "Curveball", velo: 78.7, spin: 2507, ivb: -4.0, hb: -3.4, ext: 5.3, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Sinker", velo: 91.9, spin: 2117, ivb: 15.5, hb: 12.7, ext: 5.7, result: "Ball", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2211, ivb: 19.7, hb: 10.7, ext: 5.8, result: "Swinging Strike", batter: "Dylan Schaefer" },
      { pitchType: "Curveball", velo: 68.6, spin: 2315, ivb: -14.6, hb: -12.7, ext: 6.0, result: "Ball In Dirt", batter: "Dylan Schaefer" },
      { pitchType: "Curveball", velo: 74.4, spin: 2286, ivb: -6.0, hb: -3.2, ext: 5.8, result: "Groundout", batter: "Dylan Schaefer" },
      // Ryan Kennell
      { pitchType: "Curveball", velo: 71.2, spin: 2357, ivb: -14.0, hb: -14.0, ext: 5.7, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 91.6, spin: 2082, ivb: 18.5, hb: 16.1, ext: 5.8, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 71.3, spin: 2439, ivb: -13.8, hb: -13.5, ext: 5.5, result: "Ball In Dirt", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 76.1, spin: 2450, ivb: -6.5, hb: -3.0, ext: 5.4, result: "Groundout", batter: "Ryan Kennell" },
      // Armani Newton
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2191, ivb: 15.6, hb: 12.1, ext: 5.6, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Changeup", velo: 81.0, spin: 1476, ivb: 6.9, hb: 14.6, ext: 5.7, result: "Ball In Dirt", batter: "Armani Newton" },
      { pitchType: "Sinker", velo: 92.4, spin: 2210, ivb: 12.4, hb: 12.6, ext: 5.7, result: "Groundout", batter: "Armani Newton" }
    ],
    6: [
      // Logan Johnstone
      { pitchType: "Sinker", velo: 92.2, spin: 2145, ivb: 13.7, hb: 17.1, ext: 5.4, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 92.4, spin: 2221, ivb: 15.6, hb: 14.1, ext: 5.7, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Changeup", velo: 81.7, spin: 1573, ivb: 7.9, hb: 14.8, ext: 5.2, result: "Foul", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 92.6, spin: 2121, ivb: 14.1, hb: 15.4, ext: 5.6, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 93.7, spin: 2220, ivb: 13.8, hb: 15.6, ext: 5.8, result: "Strikeout", batter: "Logan Johnstone" },
      // Taeg Gollert
      { pitchType: "Curveball", velo: 77.9, spin: 2444, ivb: -6.6, hb: -3.7, ext: 5.2, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Sinker", velo: 93.3, spin: 2195, ivb: 17.2, hb: 12.7, ext: 5.7, result: "Foul", batter: "Taeg Gollert" },
      { pitchType: "Curveball", velo: 79.3, spin: 2395, ivb: -3.5, hb: -5.1, ext: 5.2, result: "Strikeout", batter: "Taeg Gollert" },
      // Boston Smith
      { pitchType: "Sinker", velo: 92.6, spin: 2054, ivb: 13.7, hb: 13.9, ext: 5.9, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 80.5, spin: 1583, ivb: 7.6, hb: 15.7, ext: 5.5, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 90.7, spin: 1888, ivb: 12.1, hb: 15.0, ext: 5.9, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 91.3, spin: 2029, ivb: 12.4, hb: 12.3, ext: 5.7, result: "Groundout", batter: "Boston Smith" }
    ]
  },
  "Cooper McGrath": {
    7: [
      // Hayden Jatczak
      { pitchType: "Sinker", velo: 94.2, spin: 2733, ivb: 12.2, hb: 9.9, ext: 6.7, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 94.7, spin: 2664, ivb: 10.7, hb: 12.8, ext: 6.5, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Cutter", velo: 87.4, spin: 2578, ivb: 1.5, hb: -0.9, ext: 6.7, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 94.2, spin: 2559, ivb: 8.3, hb: 10.2, ext: 6.8, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 93.3, spin: 2571, ivb: 6.1, hb: 9.2, ext: 6.7, result: "Walk", batter: "Hayden Jatczak" },
      // Matthew Graveline
      { pitchType: "Cutter", velo: 86.5, spin: 2551, ivb: 2.1, hb: -1.4, ext: 6.6, result: "Called Strike", batter: "Matthew Graveline" },
      { pitchType: "Cutter", velo: 87.2, spin: 2619, ivb: 1.3, hb: -0.3, ext: 6.7, result: "Single", batter: "Matthew Graveline" },
      // Matt Ilgenfritz
      { pitchType: "Cutter", velo: 88.3, spin: 2657, ivb: 2.0, hb: -0.8, ext: 6.7, result: "Ball", batter: "Matt Ilgenfritz" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2535, ivb: 12.8, hb: 6.0, ext: 6.5, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 93.3, spin: 2569, ivb: 8.4, hb: 11.0, ext: 6.7, result: "Swinging Strike", batter: "Matt Ilgenfritz" },
      { pitchType: "Sinker", velo: 93.6, spin: 2727, ivb: 4.5, hb: 10.8, ext: 6.7, result: "Single", batter: "Matt Ilgenfritz" },
      // Dylan Schaefer
      { pitchType: "Cutter", velo: 89.1, spin: 2600, ivb: 2.4, hb: -1.1, ext: 6.7, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2574, ivb: 15.2, hb: 7.7, ext: 6.5, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Curveball", velo: 82.3, spin: 2873, ivb: -4.2, hb: -11.8, ext: 6.3, result: "Foul", batter: "Dylan Schaefer" },
      { pitchType: "Sinker", velo: 93.3, spin: 2494, ivb: 9.0, hb: 9.4, ext: 6.6, result: "Sac Fly", batter: "Dylan Schaefer" },
      // Carlos Castillo
      { pitchType: "Sinker", velo: 94.1, spin: 2542, ivb: 7.6, hb: 9.4, ext: 6.8, result: "Double", batter: "Carlos Castillo" },
      // Armani Newton
      { pitchType: "Cutter", velo: 87.7, spin: 2690, ivb: 2.5, hb: -0.4, ext: 6.6, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 86.6, spin: 2500, ivb: 0.9, hb: -0.4, ext: 6.6, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Four-Seam Fastball", velo: 92.9, spin: 2661, ivb: 11.0, hb: 9.0, ext: 6.4, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 85.7, spin: 2651, ivb: 0.2, hb: -2.4, ext: 6.6, result: "Swinging Strike", batter: "Armani Newton" },
      { pitchType: "Cutter", velo: 87.0, spin: 2647, ivb: 1.3, hb: -1.2, ext: 6.7, result: "Ball", batter: "Armani Newton" },
      { pitchType: "Cutter", velo: 87.1, spin: 2573, ivb: 0.6, hb: -1.0, ext: 6.6, result: "Foul", batter: "Armani Newton" },
      { pitchType: "Slider", velo: 82.6, spin: 2811, ivb: -1.9, hb: -13.0, ext: 6.1, result: "Single", batter: "Armani Newton" },
      // Logan Johnstone
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2582, ivb: 9.0, hb: 7.8, ext: 6.6, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2653, ivb: 13.1, hb: 7.4, ext: 6.6, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 94.5, spin: 2612, ivb: 8.6, hb: 10.3, ext: 6.7, result: "Foul", batter: "Logan Johnstone" },
      { pitchType: "Slider", velo: 86.4, spin: 2645, ivb: 2.2, hb: -1.7, ext: 6.8, result: "Groundout", batter: "Logan Johnstone" },
      // Taeg Gollert
      { pitchType: "Slider", velo: 81.4, spin: 2786, ivb: -1.2, hb: -11.8, ext: 6.2, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Cutter", velo: 87.9, spin: 2617, ivb: 4.9, hb: -3.5, ext: 6.9, result: "Ball In Dirt", batter: "Taeg Gollert" },
      { pitchType: "Slider", velo: 81.8, spin: 2788, ivb: 1.0, hb: -8.7, ext: 6.3, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Sinker", velo: 93.5, spin: 2650, ivb: 10.8, hb: 10.1, ext: 6.5, result: "Foul", batter: "Taeg Gollert" },
      { pitchType: "Slider", velo: 82.7, spin: 2720, ivb: -2.3, hb: -11.4, ext: 6.3, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2510, ivb: 9.2, hb: 6.9, ext: 6.6, result: "Walk", batter: "Taeg Gollert" },
      // Christian Reyes
      { pitchType: "Sinker", velo: 93.3, spin: 2516, ivb: 9.1, hb: 8.6, ext: 6.7, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Cutter", velo: 88.0, spin: 2527, ivb: 5.6, hb: -2.1, ext: 6.8, result: "Ball", batter: "Christian Reyes" },
      { pitchType: "Sinker", velo: 93.7, spin: 2526, ivb: 8.9, hb: 9.7, ext: 6.8, result: "Pop Out", batter: "Christian Reyes" }
    ]
  },
  "Jarrette Bonet": {
    8: [
      // Hayden Jatczak
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2296, ivb: 16.2, hb: 11.7, ext: 5.7, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 84.8, spin: 2469, ivb: -2.9, hb: -9.2, ext: 5.5, result: "Swinging Strike", batter: "Hayden Jatczak" },
      { pitchType: "Slider", velo: 85.7, spin: 2538, ivb: 0.8, hb: -8.1, ext: 5.4, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Cutter", velo: 86.6, spin: 2706, ivb: -0.5, hb: -8.0, ext: 5.4, result: "Strikeout", batter: "Hayden Jatczak" },
      // Matthew Graveline
      { pitchType: "Changeup", velo: 87.8, spin: 2117, ivb: 5.8, hb: 17.8, ext: 5.9, result: "Groundout", batter: "Matthew Graveline" },
      // Matt Ilgenfritz
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2340, ivb: 17.2, hb: 8.9, ext: 5.9, result: "Flyout", batter: "Matt Ilgenfritz" }
    ]
  }
};

export default pitchersData;