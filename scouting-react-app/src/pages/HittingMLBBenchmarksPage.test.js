// src/pages/HittingMLBBenchmarksPage.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    'Aaron Graeber': { avgEv: 89.0, maxEv: 112.0, avgLa: 11.0, hardHit: 40.0, gb: 41.0, ld: 21.0, fb: 30.0, pu: 8.0 },
    'Override Only': { avgEv: 88.0, maxEv: 110.0, avgLa: 12.0, hardHit: 38.0, gb: 40.0, ld: 22.0, fb: 30.0, pu: 8.0 },
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
      BB_GB_PCT: { range: [36.0, 50.0], p50: 42.0 },
      BB_LD_PCT: { range: [18.0, 26.0], p50: 22.0 },
      BB_FB_PCT: { range: [30.0, 40.0], p50: 34.0 },
      BB_PU_PCT: { range: [6.0, 10.0], p50: 8.0 },
      BARREL_PCT: { range: [6.0, 12.0], p50: 8.0 },
    },
    AAA: { 
      EV_AVG:{range:[85.0,91.0],p50:87.8}, 
      EV_MAX:{range:[106.0,114.0],p50:110.0}, 
      HARD_HIT_PCT:{range:[33.0,43.0],p50:37.0}, 
      LA_AVG:{range:[7.0,17.0],p50:11.0}, 
      CONTACT_PCT:{range:[69.0,84.0],p50:76.0}, 
      ZCONTACT_PCT:{range:[79.0,91.0],p50:85.0}, 
      WHIFF_PCT:{range:[19.0,31.0],p50:25.0}, 
      CHASE_PCT:{range:[26.0,36.0],p50:31.0}, 
      BB_GB_PCT:{range:[36.0,50.0],p50:42.0}, 
      BB_LD_PCT:{range:[18.0,26.0],p50:22.0}, 
      BB_FB_PCT:{range:[30.0,40.0],p50:34.0}, 
      BB_PU_PCT:{range:[6.0,10.0],p50:8.0}, 
      BARREL_PCT:{range:[6.0,12.0],p50:8.0} 
    },
    AA:  { 
      EV_AVG:{range:[84.0,90.0],p50:87.0}, 
      EV_MAX:{range:[104.0,112.0],p50:108.5}, 
      HARD_HIT_PCT:{range:[31.0,41.0],p50:35.0}, 
      LA_AVG:{range:[6.0,16.0],p50:10.0}, 
      CONTACT_PCT:{range:[68.0,83.0],p50:75.0}, 
      ZCONTACT_PCT:{range:[78.0,90.0],p50:84.0}, 
      WHIFF_PCT:{range:[20.0,32.0],p50:26.0}, 
      CHASE_PCT:{range:[27.0,37.0],p50:32.0}, 
      BB_GB_PCT:{range:[36.0,50.0],p50:42.0}, 
      BB_LD_PCT:{range:[18.0,26.0],p50:22.0}, 
      BB_FB_PCT:{range:[30.0,40.0],p50:34.0}, 
      BB_PU_PCT:{range:[6.0,10.0],p50:8.0}, 
      BARREL_PCT:{range:[6.0,12.0],p50:8.0} 
    },
    APLUS:{ 
      EV_AVG:{range:[83.0,89.0],p50:86.2}, 
      EV_MAX:{range:[103.0,111.0],p50:107.5}, 
      HARD_HIT_PCT:{range:[30.0,40.0],p50:34.0}, 
      LA_AVG:{range:[5.0,15.0],p50:9.0}, 
      CONTACT_PCT:{range:[67.0,82.0],p50:74.0}, 
      ZCONTACT_PCT:{range:[77.0,89.0],p50:83.0}, 
      WHIFF_PCT:{range:[21.0,33.0],p50:27.0}, 
      CHASE_PCT:{range:[28.0,38.0],p50:33.0}, 
      BB_GB_PCT:{range:[36.0,50.0],p50:42.0}, 
      BB_LD_PCT:{range:[18.0,26.0],p50:22.0}, 
      BB_FB_PCT:{range:[30.0,40.0],p50:34.0}, 
      BB_PU_PCT:{range:[6.0,10.0],p50:8.0}, 
      BARREL_PCT:{range:[6.0,12.0],p50:8.0} 
    },
  },
}));

describe('HittingMLBBenchmarksPage', () => {
  test('renders level=MLB, shows level ranges and p50s, table with 13 rows incl. batted-ball + barrel', async () => {
    render(<HittingMLBBenchmarksPage />);
    // Title
    expect(screen.getByText(/Hitters MLB Benchmarks/i)).toBeInTheDocument();
    // Level default MLB
    expect(screen.getByLabelText('Level')).toHaveTextContent('MLB');

    // Cards show level ranges/p50s for core + decision
    expect(screen.getAllByText('Exit Velocity (Avg)').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Max EV').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Hard-Hit %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Launch Angle (Avg)').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Z-Contact %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Whiff %').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Chase %').length).toBeGreaterThan(0);

    // New cards
    const profileHeader = screen.getByText('Batted-Ball Profile');
    expect(profileHeader).toBeInTheDocument();
    expect(screen.getByText('Barrel% (proxy)')).toBeInTheDocument();
    // Profile card has 4 line labels; query within the card for robustness
    // Climb to the card container: cardName div -> cardHeader div -> card container
    const profileCard = profileHeader.parentElement && profileHeader.parentElement.parentElement;
    expect(profileCard).toBeTruthy();
    expect(within(profileCard).getByText(/GB\s*%/i)).toBeInTheDocument();
    expect(within(profileCard).getByText(/LD\s*%/i)).toBeInTheDocument();
    expect(within(profileCard).getByText(/FB\s*%/i)).toBeInTheDocument();
    expect(within(profileCard).getByText(/PU\s*%/i)).toBeInTheDocument();

    // Table renders 14 rows total: 1 header + 13 body rows for core (4) + decision (4) + BB (4) + Barrel (1) = 14
    const table = screen.getByRole('table', { name: /Hitters MLB Benchmarks/i });
    const rows = within(table).getAllByRole('row');
    expect(rows.length).toBe(14);
  });

  test('Select Hitter control shows renderValue placeholder, menu starts with Aaron Graeber, select and clear work', async () => {
    render(<HittingMLBBenchmarksPage />);
    const hitterSelect = screen.getAllByLabelText('Select Hitter')[0];
    // Placeholder visible via renderValue
    expect(hitterSelect).toHaveTextContent('Select Hitter');

    // Open menu and select a hitter
    await userEvent.click(hitterSelect);
    const listbox = screen.getByRole('listbox');
    // First visible item should be Aaron Graeber; placeholder should not be present in the menu list
    expect(within(listbox).getByText('Aaron Graeber')).toBeInTheDocument();
    expect(within(listbox).queryByText(/Select hitter/i)).not.toBeInTheDocument();
    const testOption = within(listbox).getByText('Test Hitter');
    await userEvent.click(testOption);

    // Clear selection via clear button
    const clearBtn = screen.getByRole('button', { name: /Clear selection/i });
    await userEvent.click(clearBtn);

    // After clearing, page should render with MLB-only baselines and no throw
    // Table still present
    expect(screen.getByRole('table', { name: /Hitters MLB Benchmarks/i })).toBeInTheDocument();
    // Placeholder visible again
    expect(hitterSelect).toHaveTextContent('Select Hitter');
  });

  test('Compare Hitter populates player p50 and Δ for core metrics; BB% percentiles/clamps; barrel from events; overrides when no events', async () => {
    render(<HittingMLBBenchmarksPage />);

    // Locate the Select Hitter control and open
    const hitterSelect = screen.getByLabelText('Select Hitter');
    await userEvent.click(hitterSelect);
    const listbox = screen.getByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    const texts = options.map(o => o.textContent?.trim());
    expect(texts.some(t => /^\d+$/.test(t ?? ''))).toBe(false);
    expect(texts.includes('None')).toBe(false);

    // Select our test hitter
    await userEvent.click(within(listbox).getByText('Test Hitter'));

    const table = screen.getByRole('table', { name: /Hitters MLB Benchmarks/i });
    const bodyRows = within(table).getAllByRole('row').slice(1);
    const rowByLabel = (label) => bodyRows.find(r => within(r).getByRole('rowheader').textContent === label) || bodyRows.find(r => within(r).queryByText(label));

    // Core metrics deltas
    const evAvgRow = rowByLabel('Exit Velocity (Avg)');
    const evAvgCells = within(evAvgRow).getAllByRole('cell');
    expect(evAvgCells[1].textContent).toMatch(/88\.4/); // level p50
    expect(evAvgCells[2].textContent).toMatch(/90\.0/); // player
    expect(evAvgCells[3].textContent).toMatch(/\+1\.6|1\.6/); // delta

    const evMaxRow = rowByLabel('Max EV');
    const evMaxCells = within(evMaxRow).getAllByRole('cell');
    expect(evMaxCells[1].textContent).toMatch(/111\.0/);
    expect(evMaxCells[2].textContent).toMatch(/100\.0/);
    expect(evMaxCells[3].textContent).toMatch(/-11\.0/);

    // Barrel% from events: EV>=95 and 8–32°; our data -> 1 of 3 => 33.3%
    const barrelRow = rowByLabel('Barrel % (proxy)');
    const barrelCells = within(barrelRow).getAllByRole('cell');
    expect(barrelCells[2].textContent).toMatch(/33\.3/);

    // GB% percentile chip exists and is integer 0–100
    const bbGbRow = rowByLabel('GB %');
    const bbGbCells = within(bbGbRow).getAllByRole('cell');
    // Percentile is last column
    expect(bbGbCells[4].textContent).toMatch(/^\d{1,3}$/);

    // Now select hitter with overrides only (no events)
    await userEvent.click(screen.getAllByLabelText('Select Hitter')[0]);
    const listbox2 = screen.getByRole('listbox');
    await userEvent.click(within(listbox2).getByText('Override Only'));
    const bbGbRow2 = rowByLabel('GB %');
    const bbGbCells2 = within(bbGbRow2).getAllByRole('cell');
    expect(bbGbCells2[2].textContent).toMatch(/40\.0/);
    const bbLdRow2 = rowByLabel('LD %');
    const bbLdCells2 = within(bbLdRow2).getAllByRole('cell');
    expect(bbLdCells2[2].textContent).toMatch(/22\.0/);
    const bbFbRow2 = rowByLabel('FB %');
    const bbFbCells2 = within(bbFbRow2).getAllByRole('cell');
    expect(bbFbCells2[2].textContent).toMatch(/30\.0/);
    const bbPuRow2 = rowByLabel('PU %');
    const bbPuCells2 = within(bbPuRow2).getAllByRole('cell');
    expect(bbPuCells2[2].textContent).toMatch(/8\.0/);

    // Barrel for overrides-only hitter should be blank (no events denom)
    const barrelRow2 = rowByLabel('Barrel % (proxy)');
    const barrelCells2 = within(barrelRow2).getAllByRole('cell');
    expect(barrelCells2[2].textContent).toBe('—');
  });

  test('Export CSV includes GB/LD/FB/PU/Barrel rows', async () => {
    // Polyfill URL methods if missing and spy on them
    // @ts-ignore
    if (!URL.createObjectURL) { (URL).createObjectURL = () => 'blob:mock'; }
    // @ts-ignore
    if (!URL.revokeObjectURL) { (URL).revokeObjectURL = () => {}; }
    // Polyfill Blob.text() to access CSV content
    const OrigBlob = global.Blob;
    class MockBlob {
      constructor(parts, opts) { this.parts = parts; this.options = opts; }
      text() { return Promise.resolve(this.parts.map(p => (typeof p === 'string' ? p : '')).join('')); }
    }
    // @ts-ignore
    global.Blob = MockBlob;
    const createObjectURLSpy = jest.spyOn(URL, 'createObjectURL');
    const revokeSpy = jest.spyOn(URL, 'revokeObjectURL');
    const clickSpy = jest.spyOn(document.body, 'appendChild');
    const removeSpy = jest.spyOn(document.body, 'removeChild');

    render(<HittingMLBBenchmarksPage />);
    const btn = screen.getByRole('button', { name: /Export CSV/i });
    fireEvent.click(btn);

    expect(createObjectURLSpy).toHaveBeenCalled();
    const blobArg = createObjectURLSpy.mock.calls[0][0];
    const text = await blobArg.text();
    expect(text).toMatch(/GB %/);
    expect(text).toMatch(/LD %/);
    expect(text).toMatch(/FB %/);
    expect(text).toMatch(/PU %/);
    expect(text).toMatch(/Barrel % \(proxy\)/);

    // Cleanup spies
    createObjectURLSpy.mockRestore();
    revokeSpy.mockRestore();
    clickSpy.mockRestore();
    removeSpy.mockRestore();
    // Restore Blob
    // @ts-ignore
    global.Blob = OrigBlob;
  });
});
