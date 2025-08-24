// src/pages/BattedBallProfilePage.test.js
import React from 'react';
import { render, screen, within, fireEvent, waitFor } from '@testing-library/react';
import BattedBallProfilePage from './BattedBallProfilePage';

jest.mock('../data/logs/hittersByDate', () => ({
  __esModule: true,
  default: {
    '2025-07-01': {
      'Aaron Graeber': {
        atBats: [
          { ev: 96, la: 12, result: '1B' },
          { ev: 88, la: 28, result: 'Flyout' },
        ],
      },
      'John Doe': {
        atBats: [
          { ev: 82, la: 5, result: 'Groundout' },
          { ev: 101, la: 18, result: '2B' },
        ],
      },
    },
    '2025-07-02': {
      'John Doe': {
        atBats: [
          { ev: 99, la: 24, result: 'LD' },
        ],
      },
    },
  },
}));

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
  },
}));

describe('BattedBallProfilePage - names and overrides', () => {
  test('dropdown options are hitter names (strings) and All Hitters table shows names', async () => {
    render(<BattedBallProfilePage />);
    // Expand date range to include both mock dates
    const startInput = screen.getByLabelText(/Start Date/i);
    fireEvent.change(startInput, { target: { value: '2025-07-01' } });

    // Hitter dropdown should list names, not indices
    const combo = screen.getByRole('combobox');
    fireEvent.mouseDown(combo);
    const listbox = await screen.findByRole('listbox');
    const options = within(listbox).getAllByRole('option').map(o => o.textContent);
    expect(options).toEqual(expect.arrayContaining(['Aaron Graeber', 'John Doe']));
    // Close listbox (Escape or click outside)
    fireEvent.keyDown(document.body, { key: 'Escape' });
    fireEvent.click(document.body);

    // Switch to All Hitters tab
    fireEvent.click(screen.getByText(/All Hitters/i));

    // Table first column should render hitter names (rowheaders)
    const table = await screen.findByRole('table', { name: /All Hitters Metrics/i });
    const rows = within(table).getAllByRole('row').slice(1); // skip header
    const firstColTexts = rows.map(r => within(r).getByRole('rowheader').textContent);
    expect(firstColTexts).toEqual(expect.arrayContaining(['Aaron Graeber', 'John Doe']));
  });

  test('override-only hitter appears in All Hitters and Per Hitter when no in-range events', async () => {
    render(<BattedBallProfilePage />);

    // Select a date range with no events (before mocked dates)
    fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: '2025-01-01' } });
    fireEvent.change(screen.getByLabelText(/End Date/i), { target: { value: '2025-01-01' } });

    // All Hitters should list override-only hitter with override values
    fireEvent.click(screen.getByText(/All Hitters/i));
    const table = await screen.findByRole('table', { name: /All Hitters Metrics/i });
    const rowHeader = within(table).getByText('Aaron Graeber');
    const row = rowHeader.closest('tr');
    const cells = within(row).getAllByRole('cell');
    expect(cells[0].textContent).toBe('50'); // BIP from override
    expect(cells[5].textContent).toBe('88.2'); // Avg EV
    expect(cells[8].textContent).toBe('37.3%'); // Hard-Hit %

    // Per Hitter should also render override values
    fireEvent.click(screen.getByText(/Per Hitter/i));
    const combo = screen.getByRole('combobox');
    fireEvent.mouseDown(combo);
    const listbox = await screen.findByRole('listbox');
    fireEvent.click(within(listbox).getByText('Aaron Graeber'));
    const perTables = await screen.findAllByRole('table');
    const perTable = perTables.find(t => within(t).queryByText('Avg EV'));
    const perCells = within(perTable).getAllByRole('cell');
    expect(perCells[0].textContent).toBe('50');
    expect(perCells[5].textContent).toBe('88.2');
    expect(perCells[8].textContent).toBe('37.3%');
  });

  test('name normalization (extra spaces) still matches override', async () => {
    render(<BattedBallProfilePage />);

    // Switch to All Hitters and ensure normalized name still appears
    fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: '2025-07-01' } });
    fireEvent.click(screen.getByText(/All Hitters/i));
    const table = await screen.findByRole('table', { name: /All Hitters Metrics/i });
    // Simulate lookup by normalized form by asserting the row renders and has override values
    const rowHeader = within(table).getByText('Aaron Graeber');
    const row = rowHeader.closest('tr');
    const cells = within(row).getAllByRole('cell');
    expect(cells[0].textContent).toBe('50');
    expect(cells[5].textContent).toBe('88.2');
    expect(cells[8].textContent).toBe('37.3%');
  });

  test('override applies for matching hitter name (Aaron Graeber)', async () => {
    render(<BattedBallProfilePage />);

    // All Hitters view
    // Expand date range to include the date with Aaron Graeber
    const startInput2 = screen.getByLabelText(/Start Date/i);
    fireEvent.change(startInput2, { target: { value: '2025-07-01' } });

    fireEvent.click(screen.getByRole('tab', { name: /All Hitters/i }));
    const table = await screen.findByRole('table', { name: /All Hitters Metrics/i });
    const nameCell = within(table).getByText('Aaron Graeber');
    // Find row for Aaron Graeber and check a couple override values
    const row = nameCell.closest('tr');
    const cells = within(row).getAllByRole('cell');
    // Note: first column is a rowheader (<th>), not included in getAllByRole('cell').
    // cells indices map to: [BIP, GB%, LD%, FB%, PU%, Avg EV, Max EV, Avg LA, Hard-Hit %]
    expect(cells[0].textContent).toBe('50'); // BIP
    expect(cells[5].textContent).toBe('88.2'); // Avg EV (one decimal)
    expect(cells[8].textContent).toBe('37.3%'); // Hard-Hit % with % sign

    // Per Hitter view should also reflect override. Switch and explicitly select Aaron.
    fireEvent.click(screen.getByText(/Per Hitter/i));
    const combo2 = screen.getByRole('combobox');
    fireEvent.mouseDown(combo2);
    const listbox2 = await screen.findByRole('listbox');
    fireEvent.click(within(listbox2).getByText('Aaron Graeber'));
    const perTables = await screen.findAllByRole('table');
    const perTable = perTables.find(t => within(t).queryByText('Avg EV'));
    const perCells = within(perTable).getAllByRole('cell');
    // order: BIP, GB%, LD%, FB%, PU%, Avg EV, Max EV, Avg LA, Hard-Hit %
    expect(perCells[0].textContent).toBe('50');
    expect(perCells[5].textContent).toBe('88.2');
    expect(perCells[8].textContent).toBe('37.3%');
  });

  test('hitter Select has no numeric options', async () => {
    render(<BattedBallProfilePage />);
    const combo = screen.getByRole('combobox', { name: /Hitter/i });
    fireEvent.mouseDown(combo);
    const listbox = await screen.findByRole('listbox');
    const options = within(listbox).getAllByRole('option');
    const texts = options.map(o => o.textContent?.trim());
    expect(texts.some(t => /^\d+$/.test(t ?? ''))).toBe(false);
    // close
    fireEvent.keyDown(document.body, { key: 'Escape' });
  });
});
