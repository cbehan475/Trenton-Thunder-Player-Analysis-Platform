// src/pages/HittingMLBBenchmarksPage.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within, fireEvent } from '@testing-library/react';
import HittingMLBBenchmarksPage from './HittingMLBBenchmarksPage';

// Mock data sources
jest.mock('../data/logs/hittersByDate', () => ({
  __esModule: true,
  default: {
    '2025-07-01': {
      'Test Hitter': {
        atBats: [
          { ev: 90, la: 10, result: '1B' },
          { ev: 100, la: 20, result: '2B' },
          { ev: 80, la: 5, result: 'Groundout' },
        ],
      },
    },
  },
}));

jest.mock('../data/overrides/battedBallMetricsOverrides', () => ({
  __esModule: true,
  default: {
    'Override Only': { avgEv: 88.0, maxEv: 110.0, avgLa: 12.0, hardHit: 38.0 },
  },
}));

jest.mock('../data/hitting/benchmarksByLevel', () => ({
  __esModule: true,
  HITTING_BENCHMARKS_VERSION: 'v2024.1-test',
  HITTING_BENCHMARKS_SOURCE: 'test-source',
  default: {
    MLB: {
      EV_AVG: { range: [86.0, 92.0], p50: 88.4 },
      EV_MAX: { range: [107.0, 115.0], p50: 111.0 },
      HARD_HIT_PCT: { range: [35.0, 45.0], p50: 39.0 },
      LA_AVG: { range: [8.0, 18.0], p50: 12.0 },
      CONTACT_PCT: { range: [70.0, 85.0], p50: 77.0 },
      ZCONTACT_PCT: { range: [80.0, 92.0], p50: 86.0 },
      WHIFF_PCT: { range: [18.0, 30.0], p50: 24.0 },
      CHASE_PCT: { range: [25.0, 35.0], p50: 30.0 },
    },
    AAA: { EV_AVG:{range:[85.0,91.0],p50:87.8}, EV_MAX:{range:[106.0,114.0],p50:110.0}, HARD_HIT_PCT:{range:[33.0,43.0],p50:37.0}, LA_AVG:{range:[7.0,17.0],p50:11.0}, CONTACT_PCT:{range:[69.0,84.0],p50:76.0}, ZCONTACT_PCT:{range:[79.0,91.0],p50:85.0}, WHIFF_PCT:{range:[19.0,31.0],p50:25.0}, CHASE_PCT:{range:[26.0,36.0],p50:31.0} },
    AA:  { EV_AVG:{range:[84.0,90.0],p50:87.0}, EV_MAX:{range:[104.0,112.0],p50:108.5}, HARD_HIT_PCT:{range:[31.0,41.0],p50:35.0}, LA_AVG:{range:[6.0,16.0],p50:10.0}, CONTACT_PCT:{range:[68.0,83.0],p50:75.0}, ZCONTACT_PCT:{range:[78.0,90.0],p50:84.0}, WHIFF_PCT:{range:[20.0,32.0],p50:26.0}, CHASE_PCT:{range:[27.0,37.0],p50:32.0} },
    APLUS:{ EV_AVG:{range:[83.0,89.0],p50:86.2}, EV_MAX:{range:[103.0,111.0],p50:107.5}, HARD_HIT_PCT:{range:[30.0,40.0],p50:34.0}, LA_AVG:{range:[5.0,15.0],p50:9.0}, CONTACT_PCT:{range:[67.0,82.0],p50:74.0}, ZCONTACT_PCT:{range:[77.0,89.0],p50:83.0}, WHIFF_PCT:{range:[21.0,33.0],p50:27.0}, CHASE_PCT:{range:[28.0,38.0],p50:33.0} },
  },
}));

describe('HittingMLBBenchmarksPage', () => {
  test('renders level=MLB, shows level ranges and p50s, table with 8 rows incl. decision metrics', async () => {
    render(<HittingMLBBenchmarksPage />);
    // Title
    expect(screen.getByText(/Hitters MLB Benchmarks/i)).toBeInTheDocument();
    // Level default MLB
    const levelSelect = screen.getByRole('combobox', { name: /Level/i });
    expect(levelSelect).toHaveValue('MLB');

    // Cards show level ranges/p50s for core + decision
    expect(screen.getAllByText('Exit Velocity (Avg)').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Max EV').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Hard-Hit %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Launch Angle (Avg)').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Z-Contact %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Whiff %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Chase %').length).toBeGreaterThan(0);

    // Table renders exactly 8 body rows
    const table = screen.getByRole('table', { name: /Hitters MLB Benchmarks/i });
    const rows = within(table).getAllByRole('row');
    // 1 header + 8 body rows
    expect(rows.length).toBe(9);
  });

  test('Compare Hitter populates player p50 and Δ, and dropdown has no numeric-only options', async () => {
    render(<HittingMLBBenchmarksPage />);

    const hitterSelect = screen.getByRole('combobox', { name: /Compare Hitter/i });
    // Ensure options contain no numeric-only labels
    const options = within(hitterSelect).getAllByRole('option');
    const texts = options.map(o => o.textContent?.trim());
    expect(texts.some(t => /^\d+$/.test(t ?? ''))).toBe(false);

    // Select our test hitter
    fireEvent.change(hitterSelect, { target: { value: 'Test Hitter' } });

    // Cards now show Player (p50) and Δ for each metric
    // From mocked events (filtering BIP, includes Groundout): evs [90,100,80] => avg 90.0, max 100.0; la [10,20,5] => avg 11.7; HH 1/3 => 33.3%
    const table = screen.getByRole('table', { name: /Hitters MLB Benchmarks/i });
    const bodyRows = within(table).getAllByRole('row').slice(1);

    const rowByLabel = (label) => bodyRows.find(r => within(r).getByRole('rowheader').textContent === label) || bodyRows.find(r => within(r).queryByText(label));

    const evAvgRow = rowByLabel('Exit Velocity (Avg)');
    const evAvgCells = within(evAvgRow).getAllByRole('cell');
    // Columns: Level Range, Level p50, Player p50, Δ vs p50, Percentile
    expect(evAvgCells[1].textContent).toMatch(/88\.4/); // level p50
    expect(evAvgCells[2].textContent).toMatch(/90\.0/); // player
    expect(evAvgCells[3].textContent).toMatch(/\+1\.6|1\.6/); // delta

    const evMaxRow = rowByLabel('Max EV');
    const evMaxCells = within(evMaxRow).getAllByRole('cell');
    expect(evMaxCells[1].textContent).toMatch(/111\.0/);
    expect(evMaxCells[2].textContent).toMatch(/100\.0/);
    expect(evMaxCells[3].textContent).toMatch(/-11\.0/);

    const hhRow = rowByLabel('Hard-Hit %');
    const hhCells = within(hhRow).getAllByRole('cell');
    expect(hhCells[1].textContent).toMatch(/39\.0/);
    expect(hhCells[2].textContent).toMatch(/33\.3/);
    expect(hhCells[3].textContent).toMatch(/-5\.7/);

    const laRow = rowByLabel('Launch Angle (Avg)');
    const laCells = within(laRow).getAllByRole('cell');
    expect(laCells[1].textContent).toMatch(/12\.0/);
    expect(laCells[2].textContent).toMatch(/11\.7/);
    expect(laCells[3].textContent).toMatch(/-0\.3/);
  });
});
