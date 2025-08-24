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

    // Table first column should render hitter names
    const table = await screen.findByRole('table', { name: /All Hitters Metrics/i });
    const rows = within(table).getAllByRole('row').slice(1); // skip header
    const firstColTexts = rows.map(r => within(r).getAllByRole('cell')[0].textContent);
    expect(firstColTexts).toEqual(expect.arrayContaining(['Aaron Graeber', 'John Doe']));
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
    // cells: [name, BIP, GB%, LD%, FB%, PU%, Avg EV, Max EV, Avg LA, Hard-Hit %]
    expect(cells[1].textContent).toBe('50'); // BIP
    expect(cells[6].textContent).toBe('88.2'); // Avg EV (one decimal)
    expect(cells[9].textContent).toBe('37.3%'); // Hard-Hit % with % sign

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
});
