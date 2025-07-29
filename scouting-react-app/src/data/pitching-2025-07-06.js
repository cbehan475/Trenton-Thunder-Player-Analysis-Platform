const pitchersData = {
  "Joe Ariola": {
    1: [
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2204, ivb: 20.1, hb: -10.0, ext: 4.6, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 2223, ivb: 19.5, hb: -7.5, ext: 4.7, result: "Lineout", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2226, ivb: 19.6, hb: -8.1, ext: 4.8, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 85.4, spin: 2358, ivb: 8.3, hb: 6.3, ext: 4.7, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 86.0, spin: 2329, ivb: 5.3, hb: -1.4, ext: 4.8, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2242, ivb: 21.1, hb: -5.6, ext: 4.8, result: "Strikeout", batter: "Harrison Didawick" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 91.7, spin: 2172, ivb: 17.9, hb: -3.5, ext: 4.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 82.9, spin: 1306, ivb: 7.3, hb: -2.8, ext: 4.6, result: "Single", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "", velo: 91.4, spin: 2023, ivb: 18.5, hb: -5.6, ext: 4.7, result: "Passed Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2023, ivb: 18.5, hb: -5.6, ext: 4.7, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 84.8, spin: 2332, ivb: 6.3, hb: 2.5, ext: 4.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2038, ivb: 19.5, hb: -7.0, ext: 4.7, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 84.8, spin: 2268, ivb: 6.2, hb: -1.1, ext: 4.8, result: "Flyout", batter: "Landen Johnson" }
    ],
    2: [
      // Camden Ross
      { pitchType: "Slider", velo: 85.2, spin: 2203, ivb: 6.6, hb: -1.4, ext: 4.8, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 75.7, spin: 2656, ivb: -16.7, hb: 10.8, ext: 4.5, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 84.5, spin: 2222, ivb: 0.7, hb: 4.7, ext: 4.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 90.9, spin: 2338, ivb: 18.0, hb: -7.9, ext: 4.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 90.0, spin: 2243, ivb: 15.8, hb: -13.2, ext: 4.8, result: "Flyout", batter: "Camden Ross" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 92.3, spin: 2374, ivb: 21.1, hb: -6.8, ext: 4.8, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 84.0, spin: 2255, ivb: 3.8, hb: 1.8, ext: 4.8, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 86.0, spin: 2132, ivb: 5.5, hb: 2.7, ext: 4.9, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.9, spin: 2223, ivb: 22.7, hb: -5.5, ext: 4.8, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 84.4, spin: 2226, ivb: 3.1, hb: 2.8, ext: 4.8, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Sinker", velo: 92.3, spin: 2287, ivb: 18.8, hb: -12.1, ext: 4.7, result: "Walk", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Slider", velo: 85.2, spin: 2257, ivb: 5.3, hb: 0.1, ext: 4.9, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2168, ivb: 21.8, hb: -10.5, ext: 4.6, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Changeup", velo: 88.0, spin: 2149, ivb: 21.5, hb: -11.2, ext: 4.8, result: "Called Strike", batter: "Matt Evans" }
    ]
  },
  "Paulo Noris": {
    2: [
      // Matt Evans
      { pitchType: "Changeup", velo: 75.2, spin: 1816, ivb: 7.3, hb: 15.1, ext: 5.4, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 85.4, spin: 2072, ivb: 19.5, hb: 6.7, ext: 5.8, result: "Walk", batter: "Matt Evans" },
      // Quinn Bentley
      { pitchType: "Four-Seam Fastball", velo: 84.6, spin: 2092, ivb: 18.8, hb: 8.0, ext: 5.6, result: "Single", batter: "Quinn Bentley" },
      // Dan Tauken
      { pitchType: "Curveball", velo: 75.2, spin: 1805, ivb: 5.7, hb: 15.8, ext: 5.5, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 76.3, spin: 1990, ivb: 5.6, hb: 17.0, ext: 5.5, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 85.0, spin: 1766, ivb: 17.7, hb: 5.9, ext: 5.8, result: "Pop Out", batter: "Dan Tauken" },
      // Javon Hernandez
      { pitchType: "Curveball", velo: 76.1, spin: 1629, ivb: -0.7, hb: -1.7, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "", velo: 86.3, spin: 2090, ivb: 18.1, hb: 6.2, ext: 5.8, result: "Stolen Base 2B", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 86.3, spin: 2090, ivb: 18.1, hb: 6.2, ext: 5.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 73.7, spin: 1648, ivb: 7.4, hb: -3.7, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 86.1, spin: 1937, ivb: 16.6, hb: 7.7, ext: 5.7, result: "Walk", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 85.7, spin: 2048, ivb: 18.8, hb: 6.4, ext: 5.8, result: "Pop Out", batter: "Harrison Didawick" }
    ],
    3: [
      // Ryan Rivera
      { pitchType: "Cutter", velo: 86.4, spin: 1882, ivb: 19.4, hb: 1.5, ext: 5.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Cutter", velo: 85.2, spin: 1868, ivb: 15.9, hb: 0.0, ext: 5.9, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Changeup", velo: 85.1, spin: 1766, ivb: 16.3, hb: 4.1, ext: 5.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Cutter", velo: 85.6, spin: 1984, ivb: 18.9, hb: 3.2, ext: 5.9, result: "Walk", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Cutter", velo: 84.5, spin: 2006, ivb: 20.8, hb: 3.5, ext: 5.8, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 84.6, spin: 1872, ivb: 15.9, hb: 3.1, ext: 5.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "", velo: 86.0, spin: 1989, ivb: 19.0, hb: 4.6, ext: 5.7, result: "Stolen Base 2B", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 86.0, spin: 1989, ivb: 19.0, hb: 4.6, ext: 5.7, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 76.2, spin: 1865, ivb: 6.1, hb: 14.7, ext: 5.8, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Changeup", velo: 76.9, spin: 1930, ivb: 10.2, hb: 14.7, ext: 5.6, result: "Strikeout", batter: "Landen Johnson" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 85.5, spin: 1827, ivb: 16.2, hb: 6.8, ext: 5.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Cutter", velo: 84.8, spin: 1880, ivb: 16.1, hb: 5.0, ext: 5.9, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 83.7, spin: 1826, ivb: 14.8, hb: 3.4, ext: 6.0, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 72.8, spin: 1597, ivb: 7.3, hb: -5.0, ext: 5.2, result: "Ball", batter: "Camden Ross" },
      // Hugh Pinkney
      { pitchType: "Changeup", velo: 84.9, spin: 1798, ivb: 14.8, hb: 6.0, ext: 5.7, result: "Double", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Changeup", velo: 75.9, spin: 1813, ivb: 9.0, hb: 16.3, ext: 5.6, result: "Swinging Strike", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 74.0, spin: 1856, ivb: 4.6, hb: 15.3, ext: 5.5, result: "Hit By Pitch", batter: "Matt Evans" }
    ]
  },
  "John Carver": {
    3: [
      // Quinn Bentley
      { pitchType: "Sinker", velo: 91.7, spin: 2161, ivb: 15.0, hb: 14.4, ext: 5.1, result: "Swinging Strike", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.4, spin: 2180, ivb: 15.5, hb: 13.2, ext: 4.9, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Changeup", velo: 80.6, spin: 1415, ivb: 0.8, hb: 21.0, ext: 5.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2099, ivb: 16.2, hb: 13.7, ext: 4.9, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2128, ivb: 16.6, hb: 8.0, ext: 5.1, result: "Walk", batter: "Quinn Bentley" },
      // Dan Tauken
      { pitchType: "Changeup", velo: 82.7, spin: 1536, ivb: 1.2, hb: 17.5, ext: 5.1, result: "Swinging Strike", batter: "Dan Tauken" },
      { pitchType: "Changeup", velo: 83.6, spin: 1611, ivb: 3.9, hb: 18.9, ext: 5.1, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.1, spin: 2058, ivb: 17.7, hb: 11.8, ext: 5.1, result: "Sac Fly", batter: "Dan Tauken" },
      // Javon Hernandez
      { pitchType: "Curveball", velo: 76.8, spin: 2517, ivb: -4.4, hb: -7.2, ext: 4.8, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Changeup", velo: 84.4, spin: 1551, ivb: 3.1, hb: 18.4, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Curveball", velo: 75.8, spin: 2320, ivb: -9.0, hb: -6.0, ext: 5.0, result: "Hit By Pitch", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Changeup", velo: 85.3, spin: 1635, ivb: 2.8, hb: 19.2, ext: 5.2, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 81.9, spin: 1603, ivb: 4.7, hb: 16.0, ext: 5.2, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 92.4, spin: 2267, ivb: 18.4, hb: 9.7, ext: 5.2, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 85.1, spin: 1534, ivb: 5.7, hb: 18.5, ext: 5.3, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Changeup", velo: 83.9, spin: 1490, ivb: 4.8, hb: 18.4, ext: 5.3, result: "Groundout", batter: "Harrison Didawick" }
    ]
  },
  "Ryan Calvert": {
    4: [
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 88.7, spin: 2138, ivb: 15.4, hb: 11.5, ext: 5.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 84.1, spin: 2162, ivb: 9.1, hb: 1.8, ext: 5.6, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 88.9, spin: 2273, ivb: 17.6, hb: 11.6, ext: 5.6, result: "Pop Out", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Curveball", velo: 76.3, spin: 2479, ivb: -10.9, hb: -8.8, ext: 5.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 2144, ivb: 16.8, hb: 11.8, ext: 5.8, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.5, spin: 2169, ivb: 12.0, hb: -4.6, ext: 5.4, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 90.0, spin: 2149, ivb: 14.8, hb: 12.1, ext: 5.7, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 83.6, spin: 2207, ivb: 8.9, hb: -5.4, ext: 5.4, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Curveball", velo: 76.6, spin: 2517, ivb: -11.7, hb: -9.0, ext: 5.2, result: "Groundout", batter: "Landen Johnson" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 89.9, spin: 2024, ivb: 17.0, hb: 11.3, ext: 5.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 82.5, spin: 2266, ivb: 5.2, hb: -10.2, ext: 5.4, result: "Flyout", batter: "Camden Ross" }
    ],
    5: [
      // Hugh Pinkney
      { pitchType: "Sinker", velo: 89.7, spin: 2001, ivb: 14.2, hb: 16.5, ext: 5.6, result: "Swinging Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 83.9, spin: 2117, ivb: 9.0, hb: -0.7, ext: 5.4, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 75.7, spin: 2292, ivb: -10.4, hb: -9.1, ext: 5.3, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 76.0, spin: 2360, ivb: -6.8, hb: -5.8, ext: 5.3, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2112, ivb: 17.4, hb: 7.9, ext: 5.7, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 77.2, spin: 2442, ivb: -11.4, hb: -7.1, ext: 5.4, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 84.3, spin: 2208, ivb: 7.1, hb: -4.0, ext: 5.4, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2261, ivb: 17.9, hb: 10.8, ext: 5.7, result: "Walk", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Sinker", velo: 89.7, spin: 2213, ivb: 14.2, hb: 14.2, ext: 5.8, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2225, ivb: 14.9, hb: 10.6, ext: 5.8, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 88.8, spin: 2092, ivb: 13.3, hb: 15.1, ext: 5.7, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Curveball", velo: 74.8, spin: 2410, ivb: -11.3, hb: -7.1, ext: 5.4, result: "Groundout", batter: "Matt Evans" },
      // Quinn Bentley
      { pitchType: "Curveball", velo: 75.6, spin: 2333, ivb: -7.4, hb: -6.3, ext: 5.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2193, ivb: 19.6, hb: 9.3, ext: 6.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 90.5, spin: 2218, ivb: 13.2, hb: 14.7, ext: 5.8, result: "Groundout", batter: "Quinn Bentley" },
      // Dan Tauken
      { pitchType: "Curveball", velo: 77.7, spin: 2467, ivb: -8.7, hb: -9.2, ext: 5.3, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.2, spin: 2240, ivb: 20.7, hb: 10.2, ext: 5.8, result: "Foul Tip", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 76.9, spin: 2509, ivb: -13.8, hb: -10.7, ext: 5.2, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 89.8, spin: 2229, ivb: 16.4, hb: 8.6, ext: 5.5, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 90.4, spin: 2116, ivb: 16.2, hb: 9.9, ext: 5.7, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Curveball", velo: 75.6, spin: 2501, ivb: -12.8, hb: -6.2, ext: 5.3, result: "Foul", batter: "Dan Tauken" },
      { pitchType: "Slider", velo: 82.2, spin: 2283, ivb: 3.3, hb: -8.7, ext: 5.2, result: "Walk", batter: "Dan Tauken" },
      // Javon Hernandez
      { pitchType: "Sinker", velo: 89.2, spin: 2138, ivb: 13.6, hb: 14.0, ext: 6.0, result: "Called Strike", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 83.1, spin: 2243, ivb: 7.3, hb: -5.7, ext: 5.3, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2038, ivb: 15.3, hb: 5.3, ext: 6.0, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 88.0, spin: 2056, ivb: 16.5, hb: 6.7, ext: 5.7, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Slider", velo: 80.6, spin: 2287, ivb: -3.2, hb: -3.1, ext: 5.2, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 89.6, spin: 2124, ivb: 16.9, hb: 9.2, ext: 5.9, result: "Groundout", batter: "Javon Hernandez" }
    ],
    6: [
      // Harrison Didawick
      { pitchType: "Curveball", velo: 72.8, spin: 2411, ivb: -10.0, hb: -9.3, ext: 5.1, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 83.1, spin: 2124, ivb: 12.2, hb: 0.3, ext: 5.3, result: "Swinging Strike", batter: "Harrison Didawick" },
      { pitchType: "Sinker", velo: 88.4, spin: 2171, ivb: 12.7, hb: 12.7, ext: 5.7, result: "Called Strike", batter: "Harrison Didawick" },
      { pitchType: "Curveball", velo: 76.2, spin: 2469, ivb: -11.5, hb: -7.9, ext: 5.3, result: "Foul", batter: "Harrison Didawick" },
      { pitchType: "Four-Seam Fastball", velo: 87.4, spin: 2173, ivb: 18.7, hb: 12.8, ext: 5.6, result: "Ball", batter: "Harrison Didawick" },
      { pitchType: "Slider", velo: 82.0, spin: 2067, ivb: 7.5, hb: -4.3, ext: 5.2, result: "Lineout", batter: "Harrison Didawick" },
      // Ryan Rivera
      { pitchType: "Curveball", velo: 75.1, spin: 2361, ivb: -13.4, hb: -8.5, ext: 5.2, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 81.7, spin: 2271, ivb: 2.9, hb: -5.9, ext: 5.3, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 89.7, spin: 2216, ivb: 17.4, hb: 8.4, ext: 5.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 75.7, spin: 2456, ivb: -8.9, hb: -5.1, ext: 5.6, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2251, ivb: 18.2, hb: 7.9, ext: 5.7, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 89.3, spin: 2210, ivb: 16.6, hb: 11.4, ext: 5.9, result: "Strikeout", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Changeup", velo: 78.1, spin: 1431, ivb: 8.1, hb: 10.2, ext: 5.9, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 82.3, spin: 2212, ivb: 10.9, hb: 0.0, ext: 5.3, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Slider", velo: 82.3, spin: 2164, ivb: 12.4, hb: -2.7, ext: 5.5, result: "Swinging Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2142, ivb: 15.8, hb: 13.6, ext: 5.7, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 1995, ivb: 13.5, hb: 10.4, ext: 5.6, result: "Groundout", batter: "Landen Johnson" }
    ]
  },
  "Miles Garrett": {
    7: [
      // Camden Ross
      { pitchType: "Changeup", velo: 87.9, spin: 2139, ivb: 16.4, hb: 12.6, ext: 4.9, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 80.4, spin: 2084, ivb: 2.4, hb: 2.1, ext: 4.9, result: "Foul Tip", batter: "Camden Ross" },
      { pitchType: "Changeup", velo: 87.6, spin: 1903, ivb: 10.9, hb: 13.2, ext: 4.9, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 89.2, spin: 2068, ivb: 13.7, hb: 11.8, ext: 4.9, result: "Hit By Pitch", batter: "Camden Ross" },
      // Hugh Pinkney
      { pitchType: "Sinker", velo: 89.1, spin: 1929, ivb: 6.5, hb: 16.7, ext: 5.2, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Curveball", velo: 80.7, spin: 1397, ivb: 1.3, hb: 8.2, ext: 4.7, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Changeup", velo: 87.8, spin: 2052, ivb: 10.3, hb: 14.8, ext: 5.2, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 81.7, spin: 2131, ivb: 5.4, hb: -0.8, ext: 4.6, result: "Flyout", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Slider", velo: 81.4, spin: 2098, ivb: 3.5, hb: -0.9, ext: 5.0, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 88.6, spin: 2227, ivb: 15.5, hb: 8.8, ext: 5.1, result: "Ball", batter: "Matt Evans" },
      { pitchType: "", velo: 80.5, spin: 2079, ivb: 3.7, hb: 3.0, ext: 4.8, result: "Stolen Base 2B", batter: "Matt Evans" },
      { pitchType: "Slider", velo: 80.5, spin: 2079, ivb: 3.7, hb: 3.0, ext: 4.8, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 88.9, spin: 2242, ivb: 16.5, hb: 12.6, ext: 5.1, result: "Called Strike", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 89.1, spin: 2271, ivb: 19.2, hb: 9.7, ext: 5.3, result: "Ball", batter: "Matt Evans" },
      { pitchType: "Four-Seam Fastball", velo: 89.0, spin: 2214, ivb: 16.5, hb: 11.6, ext: 5.1, result: "Foul", batter: "Matt Evans" },
      { pitchType: "Sinker", velo: 88.2, spin: 2222, ivb: 16.8, hb: 15.8, ext: 5.0, result: "Hit By Pitch", batter: "Matt Evans" },
      // Quinn Bentley
      { pitchType: "Sinker", velo: 90.5, spin: 2327, ivb: 17.0, hb: 11.9, ext: 5.2, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 88.5, spin: 2226, ivb: 15.4, hb: 16.2, ext: 5.0, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 88.9, spin: 2277, ivb: 18.2, hb: 13.4, ext: 5.0, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "", velo: 88.8, spin: 2111, ivb: 10.2, hb: 15.2, ext: 4.9, result: "Caught Stealing 3B", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 88.8, spin: 2111, ivb: 10.2, hb: 15.2, ext: 4.9, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Sinker", velo: 90.0, spin: 2089, ivb: 14.0, hb: 14.5, ext: 4.8, result: "Strikeout", batter: "Quinn Bentley" }
    ]
  },
  "Aidan Weaver": {
    8: [
      // Dan Tauken
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 1849, ivb: 10.0, hb: 12.7, ext: 6.3, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 95.5, spin: 1876, ivb: 13.4, hb: 10.6, ext: 6.5, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 1860, ivb: 13.3, hb: 10.3, ext: 6.4, result: "Ball", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 2027, ivb: 12.0, hb: 13.0, ext: 6.3, result: "Called Strike", batter: "Dan Tauken" },
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 2030, ivb: 15.7, hb: 10.5, ext: 6.3, result: "Walk", batter: "Dan Tauken" },
      // Javon Hernandez
      { pitchType: "Four-Seam Fastball", velo: 92.0, spin: 1909, ivb: 8.9, hb: 13.0, ext: 6.0, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 96.9, spin: 2062, ivb: 15.4, hb: 4.1, ext: 6.2, result: "Foul", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 96.5, spin: 2082, ivb: 14.6, hb: 4.6, ext: 6.4, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 91.6, spin: 2086, ivb: 13.7, hb: 7.8, ext: 6.2, result: "Hit By Pitch", batter: "Javon Hernandez" },
      // Harrison Didawick
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 1863, ivb: 15.9, hb: 6.3, ext: 6.2, result: "Single", batter: "Harrison Didawick" },
      // Ryan Rivera
      { pitchType: "", velo: 94.7, spin: 1947, ivb: 11.9, hb: 9.2, ext: 6.1, result: "Stolen Base 2B", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 94.7, spin: 1947, ivb: 11.9, hb: 9.2, ext: 6.1, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2074, ivb: 12.1, hb: 9.8, ext: 6.1, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2101, ivb: 16.6, hb: 9.0, ext: 6.0, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 91.2, spin: 2023, ivb: 6.9, hb: 1.4, ext: 6.1, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2014, ivb: 11.4, hb: 10.0, ext: 6.5, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 94.0, spin: 2098, ivb: 12.8, hb: 9.5, ext: 6.4, result: "Single", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 91.1, spin: 2092, ivb: 7.8, hb: 3.6, ext: 6.2, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.7, spin: 2021, ivb: 16.1, hb: 11.6, ext: 6.3, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.1, spin: 2046, ivb: 16.2, hb: 8.8, ext: 6.2, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 94.8, spin: 2052, ivb: 16.3, hb: 7.0, ext: 6.3, result: "Foul", batter: "Landen Johnson" },
      { pitchType: "", velo: 91.5, spin: 1965, ivb: 9.0, hb: 2.0, ext: 6.1, result: "Stolen Base 2B", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 1965, ivb: 9.0, hb: 2.0, ext: 6.1, result: "Ball", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 93.4, spin: 2066, ivb: 15.3, hb: 7.8, ext: 6.1, result: "Single", batter: "Landen Johnson" },
      // Camden Ross
      { pitchType: "", velo: 96.3, spin: 2146, ivb: 13.8, hb: 6.4, ext: 6.5, result: "Wild Pitch", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 96.3, spin: 2146, ivb: 13.8, hb: 6.4, ext: 6.5, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 83.9, spin: 2042, ivb: 2.0, hb: 1.6, ext: 5.8, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 2024, ivb: 13.1, hb: 9.8, ext: 6.2, result: "Foul", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 83.7, spin: 2070, ivb: 2.9, hb: -0.1, ext: 5.6, result: "Single", batter: "Camden Ross" },
      // Hugh Pinkney
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 1944, ivb: 17.7, hb: 6.6, ext: 6.5, result: "Ball", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 95.9, spin: 2043, ivb: 16.0, hb: 8.4, ext: 6.2, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 86.0, spin: 2075, ivb: 4.4, hb: -2.0, ext: 5.6, result: "Called Strike", batter: "Hugh Pinkney" },
      { pitchType: "Four-Seam Fastball", velo: 96.7, spin: 2191, ivb: 18.1, hb: 6.0, ext: 6.3, result: "Foul", batter: "Hugh Pinkney" },
      { pitchType: "Slider", velo: 84.8, spin: 1868, ivb: -1.3, hb: -3.9, ext: 5.7, result: "Strikeout", batter: "Hugh Pinkney" },
      // Matt Evans
      { pitchType: "Four-Seam Fastball", velo: 95.7, spin: 1971, ivb: 11.2, hb: 6.5, ext: 6.6, result: "Fielders Choice", batter: "Matt Evans" },
      // Quinn Bentley
      { pitchType: "Slider", velo: 85.0, spin: 2115, ivb: -0.2, hb: -1.0, ext: 5.7, result: "Called Strike", batter: "Quinn Bentley" },
      { pitchType: "Slider", velo: 83.0, spin: 2253, ivb: -3.6, hb: -3.0, ext: 5.7, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.4, spin: 1966, ivb: 10.8, hb: 9.3, ext: 6.6, result: "Foul", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 95.6, spin: 1894, ivb: 12.9, hb: 7.8, ext: 6.5, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 94.1, spin: 2029, ivb: 12.9, hb: 5.4, ext: 6.7, result: "Ball", batter: "Quinn Bentley" },
      { pitchType: "Four-Seam Fastball", velo: 93.8, spin: 2031, ivb: 15.6, hb: 5.8, ext: 6.4, result: "Walk", batter: "Quinn Bentley" },
      // Caden Shapiro
      { pitchType: "Four-Seam Fastball", velo: 94.6, spin: 1897, ivb: 10.7, hb: 10.9, ext: 6.5, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Slider", velo: 83.7, spin: 2138, ivb: 3.2, hb: -0.9, ext: 5.8, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 1924, ivb: 14.6, hb: 6.6, ext: 6.3, result: "Swinging Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 91.5, spin: 1986, ivb: 17.7, hb: 6.4, ext: 6.1, result: "Ball", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 93.0, spin: 1987, ivb: 13.1, hb: 8.9, ext: 6.3, result: "Called Strike", batter: "Caden Shapiro" },
      { pitchType: "Four-Seam Fastball", velo: 89.5, spin: 1856, ivb: 11.1, hb: 9.1, ext: 6.2, result: "Walk", batter: "Caden Shapiro" }
    ]
  },
  "Clayton Johnson": {
    8: [
      // Javon Hernandez
      { pitchType: "Sinker", velo: 96.2, spin: 2273, ivb: 16.3, hb: 12.9, ext: 7.1, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 96.8, spin: 2351, ivb: 17.2, hb: 10.5, ext: 6.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 96.7, spin: 2329, ivb: 17.8, hb: 6.9, ext: 6.8, result: "Ball", batter: "Javon Hernandez" },
      { pitchType: "Four-Seam Fastball", velo: 95.4, spin: 2285, ivb: 18.4, hb: 9.7, ext: 6.9, result: "Walk", batter: "Javon Hernandez" },
      // Cole Pladson
      { pitchType: "Four-Seam Fastball", velo: 96.4, spin: 2277, ivb: 14.4, hb: 8.7, ext: 6.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Slider", velo: 84.1, spin: 2224, ivb: -6.6, hb: -10.4, ext: 5.9, result: "Called Strike", batter: "Cole Pladson" },
      { pitchType: "Curveball", velo: 83.9, spin: 2281, ivb: -6.8, hb: -11.5, ext: 5.9, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Sinker", velo: 96.4, spin: 2275, ivb: 14.2, hb: 11.3, ext: 6.8, result: "Ball", batter: "Cole Pladson" },
      { pitchType: "Four-Seam Fastball", velo: 95.2, spin: 2312, ivb: 16.2, hb: 10.7, ext: 6.7, result: "Walk", batter: "Cole Pladson" },
      // Ryan Rivera
      { pitchType: "Four-Seam Fastball", velo: 96.5, spin: 2234, ivb: 14.2, hb: 9.9, ext: 6.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 83.5, spin: 2138, ivb: -4.8, hb: -15.7, ext: 5.9, result: "Called Strike", batter: "Ryan Rivera" },
      { pitchType: "Curveball", velo: 83.8, spin: 2210, ivb: -7.4, hb: -12.5, ext: 5.9, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 84.0, spin: 2192, ivb: -7.0, hb: -16.3, ext: 5.8, result: "Ball", batter: "Ryan Rivera" },
      { pitchType: "Four-Seam Fastball", velo: 96.3, spin: 2292, ivb: 20.3, hb: 9.9, ext: 6.7, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 84.3, spin: 2071, ivb: -5.7, hb: -14.1, ext: 5.8, result: "Foul", batter: "Ryan Rivera" },
      { pitchType: "Slider", velo: 85.4, spin: 2395, ivb: -8.1, hb: -10.5, ext: 6.0, result: "Walk", batter: "Ryan Rivera" },
      // Landen Johnson
      { pitchType: "Four-Seam Fastball", velo: 97.0, spin: 2307, ivb: 19.6, hb: 4.4, ext: 6.7, result: "Called Strike", batter: "Landen Johnson" },
      { pitchType: "Four-Seam Fastball", velo: 97.8, spin: 2322, ivb: 18.9, hb: 4.2, ext: 7.0, result: "Hit By Pitch", batter: "Landen Johnson" },
      // Camden Ross
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2113, ivb: 14.0, hb: 9.5, ext: 6.7, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 83.2, spin: 2137, ivb: -6.9, hb: -12.2, ext: 6.0, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Sinker", velo: 97.3, spin: 2106, ivb: 15.5, hb: 11.6, ext: 6.9, result: "Called Strike", batter: "Camden Ross" },
      { pitchType: "Slider", velo: 84.3, spin: 2150, ivb: -5.1, hb: -10.6, ext: 5.6, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Four-Seam Fastball", velo: 97.0, spin: 2243, ivb: 14.3, hb: 9.3, ext: 6.8, result: "Ball", batter: "Camden Ross" },
      { pitchType: "Curveball", velo: 83.1, spin: 2149, ivb: -4.5, hb: -14.8, ext: 5.9, result: "Walk", batter: "Camden Ross" },
      // Dylan LaPointe
      { pitchType: "Sinker", velo: 94.5, spin: 2224, ivb: 13.5, hb: 11.2, ext: 6.8, result: "Called Strike", batter: "Dylan LaPointe" },
      { pitchType: "Four-Seam Fastball", velo: 96.2, spin: 2185, ivb: 15.7, hb: 7.5, ext: 6.8, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Sinker", velo: 96.3, spin: 2216, ivb: 15.2, hb: 12.7, ext: 7.0, result: "Ball", batter: "Dylan LaPointe" },
      { pitchType: "Curveball", velo: 83.4, spin: 2130, ivb: -6.7, hb: -13.6, ext: 5.8, result: "Hit By Pitch", batter: "Dylan LaPointe" },
      // Merik Carter
      { pitchType: "Sinker", velo: 95.8, spin: 2350, ivb: 16.1, hb: 11.9, ext: 6.7, result: "Ball", batter: "Merik Carter" }
    ]
  }
};

export default pitchersData;
