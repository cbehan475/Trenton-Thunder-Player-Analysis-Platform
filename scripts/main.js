document.addEventListener('DOMContentLoaded', () => {
  const gameSelect = document.getElementById('gameSelect');
  let hittersSort = { key: null, asc: true };
  let pitchersSort = { key: null, asc: true };
  let hittersData = [];
  let pitchersData = [];

  function fetchAndRender(date) {
    // Hitters
    fetch(`data/hitters-${date}.json`)
      .then(r => r.ok ? r.json() : [])
      .then(data => {
        hittersData = Array.isArray(data) ? data : [];
        renderTable('hitters-table', hittersData, hittersSort, hittersColumns);
      })
      .catch(() => {
        hittersData = [];
        renderTable('hitters-table', hittersData, hittersSort, hittersColumns);
      });
    // Pitchers (nested structure)
    fetch(`data/pitchers-${date}.json`)
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        pitchersData = data && typeof data === 'object' ? data : {};
        populatePitcherDropdown(pitchersData);
      })
      .catch(() => {
        pitchersData = {};
        populatePitcherDropdown(pitchersData);
      });
  }

  // Columns config
  const hittersColumns = [
    { key: 'hitter', label: 'Hitter' },
    { key: 'inning', label: 'Inning' },
    { key: 'result', label: 'Result' },
    { key: 'ev', label: 'EV' },
    { key: 'la', label: 'LA' }
  ];
  // For pitchers table, columns for pitch data
  const pitchersColumns = [
    { key: 'pitchNum', label: '#' },
    { key: 'type', label: 'Type' },
    { key: 'velo', label: 'Velo' },
    { key: 'spin', label: 'Spin' },
    { key: 'ivb', label: 'IVB' },
    { key: 'hb', label: 'HB' }
  ];

  // Sorting logic
  function sortData(data, key, asc) {
    return [...data].sort((a, b) => {
      if (a[key] === b[key]) return 0;
      if (a[key] === null || a[key] === undefined) return 1;
      if (b[key] === null || b[key] === undefined) return -1;
      if (typeof a[key] === 'number' && typeof b[key] === 'number') {
        return asc ? a[key] - b[key] : b[key] - a[key];
      }
      return asc
        ? String(a[key]).localeCompare(String(b[key]))
        : String(b[key]).localeCompare(String(a[key]));
    });
  }

  // Render table
  function renderTable(tableId, data, sortState, columns) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';
    const sorted = sortState.key ? sortData(data, sortState.key, sortState.asc) : data;
    sorted.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = columns.map(col => {
        let val = row[col.key];
        if (val === null || val === undefined) val = '';
        return `<td>${val}</td>`;
      }).join('');
      tbody.appendChild(tr);
    });
  }

  // Populate pitcher and inning dropdowns, and render pitches
  function populatePitcherDropdown(pitchersObj) {
    const pitcherSelect = document.getElementById('pitcherSelect');
    const inningSelect = document.getElementById('inningSelect');
    pitcherSelect.innerHTML = '';
    inningSelect.innerHTML = '';
    const pitcherNames = Object.keys(pitchersObj);
    if (pitcherNames.length === 0) {
      renderTable('pitchers-table', [], pitchersSort, pitchersColumns);
      return;
    }
    pitcherNames.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      pitcherSelect.appendChild(opt);
    });
    pitcherSelect.selectedIndex = 0;
    populateInningDropdown(pitchersObj, pitcherSelect.value);
    pitcherSelect.onchange = () => {
      populateInningDropdown(pitchersObj, pitcherSelect.value);
    };
  }

  function populateInningDropdown(pitchersObj, pitcher) {
    const inningSelect = document.getElementById('inningSelect');
    inningSelect.innerHTML = '';
    const innings = pitchersObj[pitcher] ? Object.keys(pitchersObj[pitcher]) : [];
    if (innings.length === 0) {
      renderTable('pitchers-table', [], pitchersSort, pitchersColumns);
      return;
    }
    innings.forEach(inn => {
      const opt = document.createElement('option');
      opt.value = inn;
      opt.textContent = inn;
      inningSelect.appendChild(opt);
    });
    inningSelect.selectedIndex = 0;
    renderPitchersTable(pitchersObj, pitcher, inningSelect.value);
    inningSelect.onchange = () => {
      renderPitchersTable(pitchersObj, pitcher, inningSelect.value);
    };
  }

  function renderPitchersTable(pitchersObj, pitcher, inning) {
    const pitches = (pitchersObj[pitcher] && pitchersObj[pitcher][inning]) ? pitchersObj[pitcher][inning] : [];
    renderTable('pitchers-table', pitches, pitchersSort, pitchersColumns);
  }

  // Attach sort handlers
  function attachSortHandlers(tableId, sortState, columns, dataGetter, renderFn) {
    const table = document.getElementById(tableId);
    table.querySelectorAll('th[data-sort]').forEach(th => {
      th.addEventListener('click', () => {
        const key = th.getAttribute('data-sort');
        if (sortState.key === key) {
          sortState.asc = !sortState.asc;
        } else {
          sortState.key = key;
          sortState.asc = true;
        }
        renderFn(tableId, dataGetter(), sortState, columns);
      });
    });
  }

  attachSortHandlers('hitters-table', hittersSort, hittersColumns, () => hittersData, renderTable);
  // For pitchers, need to re-render selected inning after sort
  attachSortHandlers('pitchers-table', pitchersSort, pitchersColumns, () => {
    const pitcherSelect = document.getElementById('pitcherSelect');
    const inningSelect = document.getElementById('inningSelect');
    if (pitchersData && pitcherSelect && inningSelect) {
      const pitcher = pitcherSelect.value;
      const inning = inningSelect.value;
      return (pitchersData[pitcher] && pitchersData[pitcher][inning]) ? pitchersData[pitcher][inning] : [];
    }
    return [];
  }, renderTable);

  // On date change
  gameSelect.addEventListener('change', e => {
    fetchAndRender(e.target.value);
  });

  // Initial load
  fetchAndRender(gameSelect.value);
});
