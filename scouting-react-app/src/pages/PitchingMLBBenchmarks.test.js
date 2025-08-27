// src/pages/PitchingMLBBenchmarks.test.js
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PitchingMLBBenchmarks from './PitchingMLBBenchmarks';

// Mock: disable computed agg feature to rely on static snapshot
jest.mock('../lib/seasonAggCache.js', () => ({
  __esModule: true,
  FEATURE_AGG_FROM_LOGS: false,
  getSeasonAggFromLogsCached: jest.fn(),
}));

// Mock pitchersSeasonAggregates with known names; ensure Jude Abbadessa sorts first by last name
jest.mock('../data/pitchersSeasonAggregates.js', () => ({
  __esModule: true,
  PITCHERS_AGG_VERSION: 'test-agg-snapshot',
  PITCHERS_SEASON_AGG: [
    { id: 'p1', name: 'Jude Abbadessa', pitches: { fourSeam: { p50Velo: 94.1, p50IVB: 17.2, p50HB: -6.1, n: 100 } } },
    { id: 'p2', name: 'Zane Zett',     pitches: { slider:   { p50Velo: 85.5, p50IVB:  3.0, p50HB:  2.0,  n: 50  } } },
  ],
}));

// Minimal benchmarks for rendering
jest.mock('../lib/pitchingBenchmarksByLevel.js', () => ({
  __esModule: true,
  pitchingBenchmarksByLevel: {
    MLB: {
      fourSeam: { velo: [92, 97], p50Velo: 94.0, ivb: 17.0, p50IVB: 17.0, hb: -6.0, p50HB: -6.0, command: 'FB to top zone' },
      slider:   { velo: [83, 88], p50Velo: 85.0, ivb: 3.0,  p50IVB: 3.0,  hb:  2.0, p50HB:  2.0, command: 'Land glove-side' },
    },
  },
}));

jest.mock('./pitchingBenchmarksByLevel.js', () => ({
  __esModule: true,
  PITCHING_BENCHMARKS_VERSION: 'vX.Y-test',
}));

describe('PitchingMLBBenchmarks', () => {
  test('title and pitcher select label/placeholder/menu behavior', async () => {
    render(<PitchingMLBBenchmarks />);

    // Title updated
    expect(screen.getByText('Pitcher MLB Benchmarks')).toBeInTheDocument();

    // Labeled "Select Pitcher"
    const pitcherSelect = screen.getAllByLabelText('Select Pitcher')[0];
    expect(pitcherSelect).toBeInTheDocument();

    // Placeholder via renderValue
    expect(pitcherSelect).toHaveTextContent('Select Pitcher');

    // Open and verify menu items
    await userEvent.click(pitcherSelect);
    const listbox = screen.getByRole('listbox');

    // First visible item should be a pitcher name (alphabetical), not a placeholder or None
    const options = within(listbox).getAllByRole('option');
    expect(options.length).toBeGreaterThan(0);
    expect(options[0].textContent?.trim()).toBe('Jude Abbadessa');
    expect(within(listbox).queryByText(/Select Pitcher/i)).not.toBeInTheDocument();
    expect(within(listbox).queryByText(/None/i)).not.toBeInTheDocument();

    // Select and then clear
    await userEvent.click(within(listbox).getByText('Jude Abbadessa'));
    const clearBtn = screen.getByRole('button', { name: /Clear selection/i });
    await userEvent.click(clearBtn);

    // Placeholder restored
    expect(pitcherSelect).toHaveTextContent('Select Pitcher');
  });
});
