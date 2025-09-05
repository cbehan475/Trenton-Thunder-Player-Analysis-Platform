// src/utils/grades.js
function roundTo5(x) {
  return Math.max(20, Math.min(80, Math.round(x / 5) * 5));
}
export function gradeFromTable(value, table) {
  if (value == null || Number.isNaN(Number(value))) return 20;
  const v = Number(value);
  for (const row of table) if (v <= row.max) return row.grade;
  return table[table.length - 1]?.grade ?? 20;
}

// Avg EV -> Raw Power
const EV_AVG_TABLE = [
  { max: 82.0, grade: 20 },
  { max: 84.0, grade: 30 },
  { max: 86.0, grade: 40 },
  { max: 87.9, grade: 45 },
  { max: 89.9, grade: 50 },
  { max: 91.9, grade: 55 },
  { max: 93.9, grade: 60 },
  { max: 95.9, grade: 70 },
  { max: 200.0, grade: 80 },
];

// Hard-Hit% -> Impact
const HH_PCT_TABLE = [
  { max: 25, grade: 20 },
  { max: 30, grade: 30 },
  { max: 34, grade: 40 },
  { max: 37, grade: 45 },
  { max: 41, grade: 50 },
  { max: 45, grade: 55 },
  { max: 50, grade: 60 },
  { max: 55, grade: 70 },
  { max: 100, grade: 80 },
];

export function computeHitterGrades({ avgEV = 0, hhPct = 0, mix = {}, bip = 0 }) {
  const rawPower = gradeFromTable(avgEV, EV_AVG_TABLE);
  const impact = gradeFromTable(hhPct, HH_PCT_TABLE);

  // Game Power = 60% Impact + 40% RawPower, with flight-shape adjustment
  const GB = Number(mix?.GB ?? 0);
  const LD = Number(mix?.LD ?? 0);
  const FB = Number(mix?.FB ?? 0);
  let gamePower = 0.6 * impact + 0.4 * rawPower;
  if (GB >= 50) gamePower -= 5;
  if ((LD + FB) >= 55) gamePower += 5;

  const smallSample = bip < 20;
  if (smallSample) gamePower = Math.min(gamePower, 55);

  return {
    rawPower: roundTo5(rawPower),
    impact: roundTo5(impact),
    gamePower: roundTo5(gamePower),
    smallSample,
  };
}
