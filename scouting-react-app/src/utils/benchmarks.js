// src/utils/benchmarks.js
// Small, editable MLB-ish thresholds we can tune later.
// Grading rule: >= above → "Above Avg"; between → "MLB Avg"; < below → "Below Avg".
export const BENCHMARKS = {
  Fastball: {
    ivb: { above: 16, avgMin: 12 },      // <12 = Below
    hb:  { above: 10, avgMin: 4 },       // <4 = Below
  },
  Slider: {
    // More negative IVB is better (downward break). We treat 0 or negative as strong.
    ivb: { above: 0, avgMin: -3 },       // >0 = Below (rises), -3..0 = Avg, <=-3 = Above
    hb:  { above: 9, avgMin: 4 },
  },
  Curveball: {
    ivb: { above: -5, avgMin: -2 },      // <=-5 = Above, -5..-2 = Avg, >-2 = Below
    hb:  { above: 5, avgMin: 2 },
  },
  Changeup: {
    ivb: { above: 9, avgMin: 6 },
    hb:  { above: 12, avgMin: 8 },
  },
};

export function gradeIVB(pitchType, ivb) {
  const b = BENCHMARKS[pitchType];
  if (!b || b.ivb == null) return 'MLB Avg';
  // Special handling for pitches where more negative IVB is better
  if (pitchType === 'Slider' || pitchType === 'Curveball') {
    if (ivb <= b.ivb.above) return 'Above Avg';
    if (ivb <= b.ivb.avgMin) return 'MLB Avg';
    return 'Below Avg';
  }
  // FB/CH: higher IVB is better
  if (ivb >= b.ivb.above) return 'Above Avg';
  if (ivb >= b.ivb.avgMin) return 'MLB Avg';
  return 'Below Avg';
}

export function gradeHB(pitchType, hb) {
  const b = BENCHMARKS[pitchType];
  if (!b || b.hb == null) return 'MLB Avg';
  if (hb >= b.hb.above) return 'Above Avg';
  if (hb >= b.hb.avgMin) return 'MLB Avg';
  return 'Below Avg';
}
