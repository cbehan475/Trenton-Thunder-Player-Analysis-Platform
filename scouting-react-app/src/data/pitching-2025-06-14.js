const pitchersData = {
  "Miguel Sime Jr.": {
    1: [
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 97.5, spin: 2387, ivb: 18.5, hb: 10.2, ext: 5.9, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 98.1, spin: 2419, ivb: 19.0, hb: 9.7, ext: 6.0, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 98.8, spin: 2416, ivb: 17.3, hb: 12.8, ext: 5.8, result: "Foul", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 98.1, spin: 2208, ivb: 18.3, hb: 9.3, ext: 6.0, result: "Foul", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 81.0, spin: 2473, ivb: -16.2, hb: -9.5, ext: 5.2, result: "Strikeout", batter: "Ryan Kennell" },
      // Logan Johnstone
      { pitchType: "Four-Seam Fastball", velo: 98.3, spin: 2311, ivb: 20.1, hb: 9.7, ext: 5.8, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 98.2, spin: 2296, ivb: 17.7, hb: 11.3, ext: 5.8, result: "Swinging Strike", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 97.7, spin: 2271, ivb: 14.4, hb: 11.9, ext: 5.8, result: "Foul", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 100.1, spin: 2284, ivb: 18.5, hb: 6.3, ext: 5.9, result: "Groundout", batter: "Logan Johnstone" },
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 99.0, spin: 2206, ivb: 20.6, hb: 0.9, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 98.5, spin: 2286, ivb: 19.9, hb: 11.4, ext: 5.9, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 98.8, spin: 2208, ivb: 19.0, hb: 9.5, ext: 5.8, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 98.9, spin: 2228, ivb: 18.6, hb: 10.0, ext: 5.8, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 99.0, spin: 2196, ivb: 19.0, hb: 10.3, ext: 5.8, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 98.7, spin: 2226, ivb: 17.7, hb: 9.3, ext: 5.9, result: "Strikeout", batter: "Boston Smith" }
    ],
    2: [
      // Taeg Gollert
      { pitchType: "Four-Seam Fastball", velo: 96.3, spin: 2291, ivb: 18.8, hb: 10.9, ext: 5.9, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 96.8, spin: 2333, ivb: 19.9, hb: 10.8, ext: 5.9, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Curveball", velo: 81.9, spin: 2543, ivb: -17.1, hb: -10.7, ext: 5.5, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 97.1, spin: 2379, ivb: 18.5, hb: 9.5, ext: 5.9, result: "Flyout", batter: "Taeg Gollert" },
      // Matthew Graveline
      { pitchType: "Curveball", velo: 81.6, spin: 2352, ivb: -14.2, hb: -12.3, ext: 5.0, result: "Called Strike", batter: "Matthew Graveline" },
      { pitchType: "Curveball", velo: 80.7, spin: 2412, ivb: -17.5, hb: -10.0, ext: 5.0, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 98.0, spin: 2236, ivb: 13.7, hb: 13.9, ext: 5.9, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 97.7, spin: 2273, ivb: 13.5, hb: 12.3, ext: 5.8, result: "Foul", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 98.3, spin: 2304, ivb: 13.9, hb: 6.4, ext: 6.0, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 97.5, spin: 2290, ivb: 17.1, hb: 3.2, ext: 6.0, result: "Walk", batter: "Matthew Graveline" },
      // Hayden Jatczak
      { pitchType: "Four-Seam Fastball", velo: 97.2, spin: 2342, ivb: 16.0, hb: 3.8, ext: 5.9, result: "Wild Pitch", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 97.2, spin: 2342, ivb: 16.0, hb: 3.8, ext: 5.9, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Curveball", velo: 81.9, spin: 2197, ivb: -10.7, hb: -5.9, ext: 5.5, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Curveball", velo: 81.4, spin: 2460, ivb: -17.3, hb: -4.8, ext: 5.3, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 97.1, spin: 2371, ivb: 18.7, hb: 12.2, ext: 5.7, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Curveball", velo: 82.0, spin: 2237, ivb: -9.6, hb: -8.4, ext: 5.2, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 97.3, spin: 2352, ivb: 18.4, hb: 12.5, ext: 5.7, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 97.1, spin: 2326, ivb: 22.0, hb: 9.4, ext: 5.8, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Changeup", velo: 84.0, spin: 1927, ivb: 5.7, hb: 12.3, ext: 5.8, result: "Lineout", batter: "Hayden Jatczak" },
      // Matthew Bardowell
      { pitchType: "Slider", velo: 83.5, spin: 2227, ivb: -9.6, hb: -10.0, ext: 5.2, result: "Swinging Strike", batter: "Matthew Bardowell" },
      { pitchType: "Curveball", velo: 84.0, spin: 2500, ivb: -15.7, hb: -8.4, ext: 5.3, result: "Swinging Strike (Blocked)", batter: "Matthew Bardowell" },
      { pitchType: "Curveball", velo: 82.6, spin: 2001, ivb: -16.3, hb: -9.5, ext: 5.1, result: "Strikeout", batter: "Matthew Bardowell" }
    ],
    3: [
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2335, ivb: 20.7, hb: 7.0, ext: 5.8, result: "Foul", batter: "Amman Dewberry" },
      { pitchType: "Curveball", velo: 81.2, spin: 2459, ivb: -16.8, hb: -6.2, ext: 5.5, result: "Swinging Strike (Blocked)", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 98.6, spin: 2332, ivb: 19.3, hb: 8.7, ext: 5.9, result: "Strikeout", batter: "Amman Dewberry" },
      // Carlos Castillo
      { pitchType: "Four-Seam Fastball", velo: 98.1, spin: 2253, ivb: 20.3, hb: 7.2, ext: 5.8, result: "Swinging Strike", batter: "Carlos Castillo" },
      { pitchType: "Four-Seam Fastball", velo: 98.2, spin: 2171, ivb: 18.7, hb: 5.4, ext: 5.8, result: "Foul", batter: "Carlos Castillo" },
      { pitchType: "Curveball", velo: 82.3, spin: 2507, ivb: -18.0, hb: -10.0, ext: 5.2, result: "Strikeout", batter: "Carlos Castillo" },
      // Ryan Kennell
      { pitchType: "Curveball", velo: 80.7, spin: 2319, ivb: -16.7, hb: -14.3, ext: 5.1, result: "Single", batter: "Ryan Kennell" },
      // Logan Johnstone
      { pitchType: "Curveball", velo: 81.1, spin: 2344, ivb: -6.3, hb: -14.8, ext: 5.5, result: "Ball In Dirt", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 97.6, spin: 2372, ivb: 20.1, hb: 11.1, ext: 5.8, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 98.5, spin: 2337, ivb: 16.9, hb: 9.9, ext: 5.6, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 94.9, spin: 2259, ivb: 20.7, hb: 10.7, ext: 5.9, result: "Walk", batter: "Logan Johnstone" },
      // Boston Smith
      { pitchType: "Changeup", velo: 85.1, spin: 2307, ivb: 3.5, hb: 14.9, ext: 5.7, result: "Swinging Strike (Blocked)", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 97.9, spin: 2427, ivb: 19.0, hb: 12.3, ext: 5.7, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 85.5, spin: 2253, ivb: 6.2, hb: 13.3, ext: 5.6, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 96.6, spin: 2272, ivb: 18.9, hb: 12.0, ext: 5.7, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 99.9, spin: 2332, ivb: 18.7, hb: 8.5, ext: 5.8, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 85.8, spin: 2046, ivb: 0.8, hb: 15.3, ext: 5.6, result: "Groundout", batter: "Boston Smith" }
    ],
    4: [
      // Taeg Gollert
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2331, ivb: 23.2, hb: 7.8, ext: 6.0, result: "Foul", batter: "Taeg Gollert" },
      { pitchType: "Curveball", velo: 81.5, spin: 2437, ivb: -10.4, hb: -14.9, ext: 5.3, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Curveball", velo: 81.6, spin: 2315, ivb: -12.9, hb: -15.2, ext: 5.3, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 98.0, spin: 2237, ivb: 21.0, hb: 9.8, ext: 5.9, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2242, ivb: 20.4, hb: 8.8, ext: 5.9, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 97.7, spin: 2171, ivb: 13.3, hb: 11.6, ext: 6.0, result: "Walk", batter: "Taeg Gollert" },
      // Matthew Graveline
      { pitchType: "Four-Seam Fastball", velo: 96.9, spin: 2161, ivb: 19.1, hb: 12.6, ext: 5.9, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2371, ivb: 17.8, hb: 12.3, ext: 5.9, result: "Called Strike", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2288, ivb: 16.1, hb: 13.2, ext: 5.8, result: "Forceout", batter: "Matthew Graveline" },
      // Hayden Jatczak
      { pitchType: "Slider", velo: 82.6, spin: 2227, ivb: -8.2, hb: -13.1, ext: 5.5, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2204, ivb: 16.1, hb: 11.8, ext: 6.0, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2330, ivb: 20.0, hb: 10.9, ext: 5.8, result: "Swinging Strike", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 98.3, spin: 2300, ivb: 19.4, hb: 8.7, ext: 5.8, result: "Strikeout", batter: "Hayden Jatczak" },
      // Matthew Bardowell
      { pitchType: "Curveball", velo: 82.5, spin: 2236, ivb: -8.8, hb: -13.6, ext: 5.2, result: "Called Strike", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 98.1, spin: 2237, ivb: 21.1, hb: 7.2, ext: 5.8, result: "Foul Tip", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 98.7, spin: 2277, ivb: 15.6, hb: 13.4, ext: 5.8, result: "Groundout", batter: "Matthew Bardowell" }
    ]
  },
  "Clayton Johnson": {
    5: [
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 2296, ivb: 17.9, hb: 12.0, ext: 7.2, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 95.7, spin: 2315, ivb: 15.7, hb: 12.6, ext: 6.9, result: "Foul", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 96.2, spin: 2304, ivb: 13.8, hb: 12.8, ext: 7.2, result: "Called Strike", batter: "Amman Dewberry" },
      { pitchType: "Curveball", velo: 84.5, spin: 2295, ivb: -11.7, hb: -14.2, ext: 6.1, result: "Strikeout", batter: "Amman Dewberry" },
      // Carlos Castillo
      { pitchType: "Slider", velo: 84.2, spin: 2355, ivb: -6.2, hb: -12.4, ext: 6.3, result: "Ball", batter: "Carlos Castillo" },
      { pitchType: "Sinker", velo: 95.8, spin: 2260, ivb: 14.2, hb: 12.2, ext: 7.0, result: "Hit By Pitch", batter: "Carlos Castillo" },
      // Ryan Kennell
      { pitchType: "Sinker", velo: 95.2, spin: 2220, ivb: 18.4, hb: 13.6, ext: 7.1, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 95.8, spin: 2315, ivb: 18.4, hb: 7.9, ext: 7.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Curveball", velo: 83.5, spin: 2238, ivb: -10.2, hb: -16.6, ext: 6.2, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2219, ivb: 17.9, hb: 7.4, ext: 7.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2263, ivb: 16.8, hb: 13.3, ext: 7.0, result: "Walk", batter: "Ryan Kennell" },
      // Logan Johnstone
      { pitchType: "Four-Seam Fastball", velo: 94.5, spin: 2273, ivb: 18.5, hb: 4.1, ext: null, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2316, ivb: 17.8, hb: 11.4, ext: 7.0, result: "Forceout", batter: "Logan Johnstone" },
      // Boston Smith
      { pitchType: "Curveball", velo: 84.1, spin: 2231, ivb: -11.8, hb: -15.0, ext: 6.4, result: "Ball In Dirt", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2288, ivb: 17.5, hb: 9.8, ext: 7.4, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 96.6, spin: 2369, ivb: 16.7, hb: 11.4, ext: 7.0, result: "Swinging Strike", batter: "Boston Smith" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2438, ivb: 15.9, hb: 9.0, ext: 7.3, result: "Foul", batter: "Boston Smith" },
      { pitchType: null, velo: 86.1, spin: 2367, ivb: -4.3, hb: -13.2, ext: 6.0, result: "Wild Pitch", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 86.1, spin: 2367, ivb: -4.3, hb: -13.2, ext: 6.0, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Slider", velo: 85.1, spin: 2328, ivb: -5.9, hb: -12.7, ext: 6.0, result: "Walk", batter: "Boston Smith" },
      // Taeg Gollert
      { pitchType: "Sinker", velo: 93.0, spin: 2272, ivb: 13.8, hb: 14.7, ext: 7.2, result: "Called Strike", batter: "Taeg Gollert" },
      { pitchType: "Four-Seam Fastball", velo: 95.0, spin: 2402, ivb: 17.8, hb: 13.5, ext: 7.1, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Sinker", velo: 95.0, spin: 2399, ivb: 16.4, hb: 14.4, ext: 7.3, result: "Ball", batter: "Taeg Gollert" },
      { pitchType: "Sinker", velo: 95.5, spin: 2394, ivb: 14.6, hb: 14.3, ext: 7.0, result: "Single", batter: "Taeg Gollert" },
      // Matthew Graveline
      { pitchType: "Sinker", velo: 94.2, spin: 2295, ivb: 14.2, hb: 13.4, ext: 7.4, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2290, ivb: 14.3, hb: 8.9, ext: 7.1, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2320, ivb: 14.4, hb: 9.1, ext: 7.3, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Sinker", velo: 93.9, spin: 2310, ivb: 14.3, hb: 10.2, ext: 7.3, result: "Walk", batter: "Matthew Graveline" }
    ]
  },
  "Jarrette Bonet": {
    5: [
      // Hayden Jatczak
      { pitchType: "Sinker", velo: 93.6, spin: 2201, ivb: 15.6, hb: 13.6, ext: 5.6, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Cutter", velo: 88.2, spin: 2188, ivb: 2.6, hb: 3.3, ext: 5.6, result: "Forceout", batter: "Hayden Jatczak" }
    ],
    6: [
      // Matthew Bardowell
      { pitchType: "Cutter", velo: 86.6, spin: 2148, ivb: 3.6, hb: 6.0, ext: 5.6, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Cutter", velo: 86.5, spin: 2174, ivb: 1.9, hb: 5.3, ext: 5.5, result: "Called Strike", batter: "Matthew Bardowell" },
      { pitchType: "Slider", velo: 82.7, spin: 2268, ivb: 3.8, hb: -3.2, ext: 5.3, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Sinker", velo: 94.4, spin: 2272, ivb: 16.2, hb: 13.7, ext: 5.8, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Sinker", velo: 93.8, spin: 2240, ivb: 15.4, hb: 13.5, ext: 5.6, result: "Walk", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Cutter", velo: 90.0, spin: 2148, ivb: 6.2, hb: 4.5, ext: 5.8, result: "Foul", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 88.2, spin: 2018, ivb: 9.0, hb: 17.0, ext: 5.8, result: "Foul", batter: "Amman Dewberry" },
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2105, ivb: 13.9, hb: 7.8, ext: 5.9, result: "Single", batter: "Amman Dewberry" },
      // Carlos Castillo
      { pitchType: "Cutter", velo: 89.2, spin: 2082, ivb: 7.3, hb: 2.8, ext: 6.0, result: "Sac Bunt", batter: "Carlos Castillo" },
      // Ryan Kennell
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2214, ivb: 15.1, hb: 10.8, ext: 5.8, result: "Called Strike", batter: "Ryan Kennell" },
      { pitchType: "Cutter", velo: 89.9, spin: 2153, ivb: 10.7, hb: 3.7, ext: 6.0, result: "Ball In Dirt", batter: "Ryan Kennell" },
      { pitchType: "Four-Seam Fastball", velo: 93.2, spin: 2186, ivb: 13.1, hb: 9.0, ext: 5.9, result: "Groundout", batter: "Ryan Kennell" },
      // Logan Johnstone
      { pitchType: "Cutter", velo: 89.3, spin: 2143, ivb: 4.2, hb: 4.8, ext: 5.7, result: "Called Strike", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 92.5, spin: 2179, ivb: 14.2, hb: 12.7, ext: 5.7, result: "Single", batter: "Logan Johnstone" },
      // Boston Smith
      { pitchType: "Four-Seam Fastball", velo: 93.3, spin: 2168, ivb: 13.8, hb: 11.7, ext: 5.7, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Cutter", velo: 88.0, spin: 2184, ivb: 3.4, hb: 2.7, ext: 5.7, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: null, velo: 88.1, spin: 2087, ivb: 5.0, hb: 18.5, ext: 5.9, result: "Stolen Base 2B", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 88.1, spin: 2087, ivb: 5.0, hb: 18.5, ext: 5.9, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Cutter", velo: 88.6, spin: 2212, ivb: 5.2, hb: 3.5, ext: 5.8, result: "Foul", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.3, spin: 2151, ivb: 14.0, hb: 13.4, ext: 5.9, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 77.7, spin: 1933, ivb: 9.8, hb: 14.6, ext: 5.6, result: "Walk", batter: "Boston Smith" },
      // Taeg Gollert
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2184, ivb: 17.7, hb: 8.6, ext: 5.7, result: "Foul", batter: "Taeg Gollert" },
      { pitchType: "Sinker", velo: 93.3, spin: 2120, ivb: 12.5, hb: 10.8, ext: 5.7, result: "Groundout", batter: "Taeg Gollert" }
    ],
    7: [
      // Matthew Graveline
      { pitchType: "Cutter", velo: 89.3, spin: 2169, ivb: 4.6, hb: 8.0, ext: 5.8, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2236, ivb: 17.6, hb: 10.1, ext: 5.8, result: "Swinging Strike", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2286, ivb: 18.6, hb: 10.1, ext: 5.8, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2103, ivb: 14.5, hb: 8.8, ext: 6.0, result: "Swinging Strike", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 93.6, spin: 2195, ivb: 12.2, hb: 10.7, ext: 5.8, result: "Strikeout", batter: "Matthew Graveline" },
      // Hayden Jatczak
      { pitchType: "Sinker", velo: 94.0, spin: 2191, ivb: 15.5, hb: 12.7, ext: 5.8, result: "Foul", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2228, ivb: 14.9, hb: 11.2, ext: 6.0, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Sinker", velo: 92.4, spin: 2156, ivb: 14.4, hb: 11.2, ext: 5.8, result: "Double", batter: "Hayden Jatczak" },
      // Matthew Bardowell
      { pitchType: "Cutter", velo: 88.4, spin: 2106, ivb: 10.4, hb: 5.9, ext: 5.8, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2217, ivb: 17.4, hb: 13.2, ext: 5.8, result: "Hit By Pitch", batter: "Matthew Bardowell" }
    ]
  },
  "Sean Finn": {
    7: [
      // Amman Dewberry
      { pitchType: "Changeup", velo: 83.8, spin: 1501, ivb: 10.0, hb: 12.2, ext: 5.2, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 90.9, spin: 2376, ivb: 16.6, hb: 16.1, ext: 5.1, result: "Ball", batter: "Amman Dewberry" },
      { pitchType: "Sinker", velo: 92.0, spin: 2363, ivb: 16.4, hb: 15.1, ext: 5.1, result: "Triple", batter: "Amman Dewberry" },
      // Carlos Castillo
      { pitchType: "Sinker", velo: 92.3, spin: 2327, ivb: 14.5, hb: 14.3, ext: 5.2, result: "Groundout", batter: "Carlos Castillo" },
      // Ryan Kennell
      { pitchType: "Curveball", velo: 79.5, spin: 2615, ivb: -4.4, hb: -9.5, ext: 5.1, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 92.6, spin: 2382, ivb: 16.7, hb: 14.5, ext: 5.2, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 91.8, spin: 2307, ivb: 14.6, hb: 14.5, ext: 5.2, result: "Ball", batter: "Ryan Kennell" },
      { pitchType: "Sinker", velo: 91.8, spin: 2331, ivb: 16.3, hb: 14.7, ext: 5.2, result: "Walk", batter: "Ryan Kennell" },
      // Logan Johnstone
      { pitchType: "Sinker", velo: 91.5, spin: 2361, ivb: 18.4, hb: 15.8, ext: 5.2, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 91.5, spin: 2335, ivb: 16.8, hb: 13.8, ext: 5.3, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2368, ivb: 19.1, hb: 11.9, ext: 5.3, result: "Ball", batter: "Logan Johnstone" },
      { pitchType: "Sinker", velo: 91.1, spin: 2273, ivb: 16.6, hb: 12.3, ext: 5.6, result: "Walk", batter: "Logan Johnstone" },
      // Boston Smith
      { pitchType: "Curveball", velo: 79.9, spin: 2508, ivb: 0.8, hb: -5.9, ext: 4.9, result: "Called Strike", batter: "Boston Smith" },
      { pitchType: "Changeup", velo: 83.6, spin: 1525, ivb: -1.7, hb: 13.4, ext: 5.3, result: "Ball", batter: "Boston Smith" },
      { pitchType: "Sinker", velo: 92.2, spin: 2390, ivb: 15.9, hb: 12.4, ext: 5.1, result: "Pop Out", batter: "Boston Smith" }
    ],
    8: [
      // Taeg Gollert
      { pitchType: "Sinker", velo: 91.0, spin: 2394, ivb: 16.6, hb: 12.5, ext: 5.2, result: "Groundout", batter: "Taeg Gollert" },
      // Matthew Graveline
      { pitchType: "Sinker", velo: 91.8, spin: 2419, ivb: 16.9, hb: 13.9, ext: 5.2, result: "Called Strike", batter: "Matthew Graveline" },
      { pitchType: "Curveball", velo: 81.1, spin: 2643, ivb: -3.5, hb: -7.0, ext: 4.9, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Curveball", velo: 80.4, spin: 2595, ivb: -2.7, hb: -7.2, ext: 4.8, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Sinker", velo: 92.9, spin: 2491, ivb: 17.3, hb: 13.6, ext: 5.2, result: "Swinging Strike", batter: "Matthew Graveline" },
      { pitchType: "Four-Seam Fastball", velo: 92.2, spin: 2427, ivb: 19.1, hb: 13.0, ext: 5.2, result: "Foul", batter: "Matthew Graveline" },
      { pitchType: "Sinker", velo: 91.7, spin: 2325, ivb: 14.1, hb: 14.0, ext: 5.2, result: "Ball", batter: "Matthew Graveline" },
      { pitchType: "Slider", velo: 82.0, spin: 2576, ivb: -2.5, hb: -10.8, ext: 4.9, result: "Strikeout", batter: "Matthew Graveline" },
      // Hayden Jatczak
      { pitchType: "Curveball", velo: 80.0, spin: 2557, ivb: 1.0, hb: -10.2, ext: 4.6, result: "Ball", batter: "Hayden Jatczak" },
      { pitchType: "Curveball", velo: 80.8, spin: 2601, ivb: -0.3, hb: -10.6, ext: 5.0, result: "Called Strike", batter: "Hayden Jatczak" },
      { pitchType: "Four-Seam Fastball", velo: 92.7, spin: 2404, ivb: 16.6, hb: 13.1, ext: 5.2, result: "Single", batter: "Hayden Jatczak" },
      // Matthew Bardowell
      { pitchType: "Slider", velo: 80.5, spin: 2451, ivb: 0.2, hb: -15.0, ext: 4.9, result: "Foul", batter: "Matthew Bardowell" },
      { pitchType: "Sinker", velo: 92.4, spin: 2350, ivb: 15.5, hb: 14.9, ext: 5.2, result: "Ball", batter: "Matthew Bardowell" },
      { pitchType: "Slider", velo: 81.1, spin: 2565, ivb: 2.1, hb: -6.1, ext: 5.0, result: "Single", batter: "Matthew Bardowell" },
      // Amman Dewberry
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2352, ivb: 13.7, hb: 10.4, ext: 5.5, result: "Groundout", batter: "Amman Dewberry" }
    ]
  }
};

export default pitchersData;
