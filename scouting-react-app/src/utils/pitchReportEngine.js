// src/utils/pitchReportEngine.js
import { gradeIVB, gradeHB } from './benchmarks';

// Input "pitcher" shape:
// {
//   name: 'Miguel Sime',
//   pitches: [
//     { type:'Fastball', velocity:'94–96', ivb:17, hb:8, command:'Above-average' },
//     ...
//   ]
// }

export function buildPitcherReport(pitcher) {
  if (!pitcher || !Array.isArray(pitcher.pitches)) return [];
  const lines = [];

  pitcher.pitches.forEach(p => {
    const ivbGrade = gradeIVB(p.type, p.ivb);
    const hbGrade  = gradeHB(p.type, p.hb);

    lines.push(
      `${p.type}: Velo ${p.velocity}, IVB ${p.ivb} in (${ivbGrade}), ` +
      `HB ${p.hb} in (${hbGrade}), Command ${p.command}.`
    );
  });

  // Optional summary line (very simple for now)
  const aboveCount = lines.filter(l => l.includes('(Above Avg)')).length;
  lines.push(`Summary: ${aboveCount} pitch categories at or above MLB average.`);

  return lines;
}
