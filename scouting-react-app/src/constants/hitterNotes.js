// Normalize "First Last" -> "first last"
export const normalizeName = (s) =>
  (s || "").toString().trim().toLowerCase().replace(/\s+/g, " ");

export const HITTER_NOTES = {
  // ===== Prefilled examples =====
  [normalizeName("Aaron Whitley")]: {
    speed: "Elite; broke 1st-half stolen base record.",
    defense: "Plus-plus CF defender; excellent range and reads.",
    arm: "Fringe-average; playable for CF.",
    build: "Smaller frame; limited raw power projection.",
    overall:
      "Contact/speed profile; value from OBP pressure and run prevention. Offense plays when he lifts and ambushes in advantage counts.",
  },

  // Add more hitters as you go (placeholders kept on purpose)
  [normalizeName("Michael Whooley")]: {},
  [normalizeName("JuJu Stevens")]: {},
  [normalizeName("Jakob Poturnak")]: {},
  [normalizeName("John Schroeder")]: {},
  [normalizeName("Aaron Graeber")]: {},
  [normalizeName("Rowan Masse")]: {},
  [normalizeName("Evin Sullivan")]: {},
  [normalizeName("Brayden Fraasman")]: {},
  [normalizeName("Carsten Sabathia")]: {},
  [normalizeName("Harry Genth")]: {},
  [normalizeName("Jaden Sheffield")]: {},
  [normalizeName("Danny Corona")]: {},
  [normalizeName("Taylor Belza")]: {},
  [normalizeName("Jayden Melendez")]: {},
  [normalizeName("Logan Dawson")]: {},
  [normalizeName("Jared Beebe")]: {},
  [normalizeName("Justin Fogel")]: {},
  [normalizeName("Paulo Noris")]: {},
  [normalizeName("Cole Leach")]: {},
};
