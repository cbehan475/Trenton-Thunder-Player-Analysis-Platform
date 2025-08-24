// src/lib/battedBallMetrics.test.js
import { isBIP } from './hitLogUtils';
import { classifyLABand, computeBattedBallMetrics, flattenEventsFromByDateMap, filterEvents } from './battedBallMetrics';

describe('isBIP()', () => {
  test('includes hits and batted outs', () => {
    const yes = [
      'Single to CF', 'Double', 'Triple', 'Home Run',
      'Groundout', 'Ground ball', 'Flyout', 'Lineout', 'Pop out',
      'Sac fly', 'Forceout', 'Field error', 'Double play', 'FC', 'Sac bunt', 'Reached on error'
    ];
    yes.forEach((r) => expect(isBIP(r)).toBe(true));
  });
  test('excludes non-batted events', () => {
    const no = ['Strikeout swinging', 'Strikeout looking', 'BB', 'IBB', 'Walk', 'HBP', 'Catcher interference'];
    no.forEach((r) => expect(isBIP(r)).toBe(false));
  });
});

describe('classifyLABand()', () => {
  test('bands by thresholds', () => {
    expect(classifyLABand(5)).toBe('GB');
    expect(classifyLABand(15)).toBe('LD');
    expect(classifyLABand(30)).toBe('FB');
    expect(classifyLABand(55)).toBe('PU');
  });
});

describe('computeBattedBallMetrics()', () => {
  const sample = [
    { date: '2025-06-01', hitter: 'A', result: 'Groundout', ev: 88, la: 5 },
    { date: '2025-06-01', hitter: 'A', result: 'Single', ev: 99, la: 14 },
    { date: '2025-06-02', hitter: 'A', result: 'Flyout', ev: 92, la: 30 },
    { date: '2025-06-02', hitter: 'A', result: 'Pop out', ev: 80, la: 55 },
    { date: '2025-06-02', hitter: 'A', result: 'Walk' },
    { date: '2025-06-03', hitter: 'B', result: 'Lineout', ev: 96, la: 20 },
    { date: '2025-06-03', hitter: 'B', result: 'Strikeout swinging' },
  ];

  test('aggregates per hitter with correct counts and percentages', () => {
    const map = computeBattedBallMetrics(sample, { dateRange: ['2025-06-01','2025-06-30'] });
    const a = map.get('A');
    expect(a.BIP).toBe(4); // excludes Walk
    // GB, LD, FB, PU counts => 1,1,1,1 => 25% each
    expect(a.GBpct).toBeCloseTo(25.0, 5);
    expect(a.LDpct).toBeCloseTo(25.0, 5);
    expect(a.FBpct).toBeCloseTo(25.0, 5);
    expect(a.PUpct).toBeCloseTo(25.0, 5);
    expect(a.avgEV).toBeCloseTo((88+99+92+80)/4, 1);
    expect(a.maxEV).toBeCloseTo(99.0, 1);
    expect(a.avgLA).toBeCloseTo((5+14+30+55)/4, 1);
    expect(a.hardHitPct).toBeCloseTo(25.0, 5); // only 99 >= 95

    const b = map.get('B');
    expect(b.BIP).toBe(1);
    expect(b.hardHitPct).toBeCloseTo(100.0, 5);
  });

  test('date-range filter works', () => {
    const map = computeBattedBallMetrics(sample, { dateRange: ['2025-06-03','2025-06-30'] });
    const a = map.get('A');
    expect(a).toBeUndefined();
    const b = map.get('B');
    expect(b.BIP).toBe(1);
  });

  test('zero-BIP behavior returns null metrics except BIP', () => {
    const map = computeBattedBallMetrics(sample, { dateRange: ['2025-06-01','2025-06-01'], hitter: 'B' });
    const b = map.get('B');
    expect(b).toBeDefined();
    expect(b.BIP).toBe(0);
    expect(b.avgEV).toBeNull();
    expect(b.GBpct).toBeNull();
    expect(b.hardHitPct).toBeNull();
  });
});

describe('flattenEventsFromByDateMap()', () => {
  test('flattens mixed module shapes', () => {
    const byDate = {
      '2025-06-01': {
        A: [{ hitter: 'A', result: 'Single', ev: 95, la: 15 }],
      },
      '2025-06-02': {
        B: { atBats: [{ hitter: 'B', result: 'Lineout', ev: 90, la: 20 }] },
      },
    };
    const flat = flattenEventsFromByDateMap(byDate);
    expect(flat.length).toBe(2);
    expect(flat[0]).toHaveProperty('date', '2025-06-01');
    expect(flat[1]).toHaveProperty('date', '2025-06-02');
  });
});

describe('filterEvents()', () => {
  const evs = [
    { date: '2025-01-01', hitter: 'X' },
    { date: '2025-01-02', hitter: 'Y' },
    { date: '2025-01-03', hitter: 'X' },
  ];
  test('filters by dateRange and hitter', () => {
    const out = filterEvents(evs, { dateRange: ['2025-01-02','2025-01-03'], hitter: 'X' });
    expect(out.length).toBe(1);
    expect(out[0].date).toBe('2025-01-03');
  });
});
