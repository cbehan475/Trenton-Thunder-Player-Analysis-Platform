// src/lib/battedBallOverrides.test.js
import applyBattedBallOverride from './battedBallOverrides';

jest.mock('../data/overrides/battedBallMetricsOverrides', () => ({
  __esModule: true,
  default: {
    'Aaron Graeber': {
      bip: 50,
      gb: 43.5,
      ld: 23.2,
      fb: 17.5,
      pu: 15.8,
      avgEv: 88.2,
      maxEv: 104.8,
      avgLa: 14.1,
      hardHit: 37.3,
    },
    'Partial Guy': { bip: 99, avgEv: 101.1 },
  },
}));

describe('applyBattedBallOverride', () => {
  test('applies override for matching hitter', () => {
    const base = { BIP: 12, GBpct: 10, LDpct: 20, FBpct: 30, PUpct: 40, avgEV: 80, maxEV: 100, avgLA: 12, hardHitPct: 10 };
    const merged = applyBattedBallOverride('Aaron Graeber', base);
    expect(merged.BIP).toBe(50);
    expect(merged.GBpct).toBe(43.5);
    expect(merged.LDpct).toBe(23.2);
    expect(merged.FBpct).toBe(17.5);
    expect(merged.PUpct).toBe(15.8);
    expect(merged.avgEV).toBe(88.2);
    expect(merged.maxEV).toBe(104.8);
    expect(merged.avgLA).toBe(14.1);
    expect(merged.hardHitPct).toBe(37.3);
  });

  test('returns base metrics when no override exists', () => {
    const base = { BIP: 10, GBpct: 10, LDpct: 20, FBpct: 30, PUpct: 40, avgEV: 80, maxEV: 100, avgLA: 12, hardHitPct: 10 };
    const merged = applyBattedBallOverride('Nonexistent Hitter', base);
    expect(merged).toEqual(base);
  });

  test('partial override falls back to base values', () => {
    const base = { BIP: 10, GBpct: 10, LDpct: 20, FBpct: 30, PUpct: 40, avgEV: 80, maxEV: 100, avgLA: 12, hardHitPct: 10 };
    const merged = applyBattedBallOverride('Partial Guy', base);
    expect(merged.BIP).toBe(99);
    expect(merged.avgEV).toBe(101.1);
    expect(merged.GBpct).toBe(10);
    expect(merged.maxEV).toBe(100);
  });
});
