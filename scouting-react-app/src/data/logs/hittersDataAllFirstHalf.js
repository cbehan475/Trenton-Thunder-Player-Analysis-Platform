// Auto-generated: Aggregates all unique hitters from first-half logs

const requireLog = date => require(`./hitters-${date}.js`).default;

const DATES = [
  '2025-06-04','2025-06-05','2025-06-06','2025-06-07','2025-06-08','2025-06-10','2025-06-11','2025-06-12','2025-06-13','2025-06-14','2025-06-15','2025-06-18','2025-06-20','2025-06-21','2025-06-22','2025-06-24','2025-06-25','2025-06-26','2025-06-27','2025-06-28','2025-06-29','2025-07-01','2025-07-02','2025-07-03','2025-07-04','2025-07-05','2025-07-06','2025-07-08','2025-07-09','2025-07-10','2025-07-11','2025-07-12'
];

let allHittersMap = {};

for (const date of DATES) {
  try {
    const log = requireLog(date);
    for (const hitterObj of log) {
      if (!allHittersMap[hitterObj.hitter]) {
        allHittersMap[hitterObj.hitter] = { ...hitterObj, atBats: [...hitterObj.atBats] };
      } else {
        // Merge atBats arrays if hitter appears in multiple logs
        allHittersMap[hitterObj.hitter].atBats.push(...hitterObj.atBats);
      }
    }
  } catch (e) {
    // ignore missing logs
  }
}

const hittersDataAllFirstHalf = Object.values(allHittersMap);

export default hittersDataAllFirstHalf;
