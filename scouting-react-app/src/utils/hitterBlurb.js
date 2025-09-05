// src/utils/hitterBlurb.js
export function buildHitterBlurb({ avgEV = 0, avgLA = 0, hhPct = 0, mix = {}, bip = 0 }) {
  const GB = Number(mix.GB ?? 0);
  const LD = Number(mix.LD ?? 0);
  const FB = Number(mix.FB ?? 0);
  const PU = Number(mix.PU ?? 0);

  const tags = [];

  // Quality tags (neutral wording; tweak thresholds later if desired)
  if (avgEV >= 92) tags.push("above-avg EV");
  else if (avgEV >= 88) tags.push("solid EV");

  if (hhPct >= 45) tags.push("high HH%");
  else if (hhPct >= 35) tags.push("average HH%");

  // Flight/mix tags
  if (LD >= 26) tags.push("line-drive lean");
  if (GB >= 48) tags.push("ground-ball heavy");
  if (FB >= 36) tags.push("fly-ball tendency");
  if (PU >= 10) tags.push("elevates to pop-ups");

  // LA context
  const laNote =
    avgLA >= 17 ? "plays uphill at times"
    : avgLA >= 10 ? "keeps the ball in a workable window"
    : "works flatter with more ground contact";

  const s1 = `Avg EV ${avgEV.toFixed(1)} mph, Avg LA ${avgLA.toFixed(1)}°, Hard-Hit% ${hhPct.toFixed(1)}% over ${bip} BIP.`;
  const s2 = `Mix: GB ${GB.toFixed(1)}%, LD ${LD.toFixed(1)}%, FB ${FB.toFixed(1)}%, PU ${PU.toFixed(1)}%.`;
  const s3 = tags.length ? `${laNote}; profile: ${tags.join(", ")}.` : `${laNote}.`;
  const smallSample = bip < 10 ? " Small sample — interpret cautiously." : "";

  return `${s1} ${s2} ${s3}${smallSample}`;
}
