document.addEventListener('DOMContentLoaded', () => {
  fetch('data/hitters-2025-07-06.json')
    .then(response => response.json())
    .then(data => {
      window.scoutingData = data;
      renderTable(data);
    });

  const table = document.getElementById('scouting-table');
  let currentSort = { key: null, asc: true };

  table.querySelectorAll('th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const key = th.getAttribute('data-sort');
      if (currentSort.key === key) {
        currentSort.asc = !currentSort.asc;
      } else {
        currentSort.key = key;
        currentSort.asc = true;
      }
      const sorted = [...window.scoutingData].sort((a, b) => {
        if (a[key] === b[key]) return 0;
        if (a[key] === null || a[key] === undefined) return 1;
        if (b[key] === null || b[key] === undefined) return -1;
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {
          return currentSort.asc ? a[key] - b[key] : b[key] - a[key];
        }
        return currentSort.asc
          ? String(a[key]).localeCompare(String(b[key]))
          : String(b[key]).localeCompare(String(a[key]));
      });
      renderTable(sorted);
    });
  });
});

function renderTable(data) {
  const tbody = document.querySelector('#scouting-table tbody');
  tbody.innerHTML = '';
  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.hitter || ''}</td>
      <td>${row.inning !== null && row.inning !== undefined ? row.inning : ''}</td>
      <td>${row.result || ''}</td>
      <td>${row.ev !== null && row.ev !== undefined ? row.ev : ''}</td>
      <td>${row.la !== null && row.la !== undefined ? row.la : ''}</td>
    `;
    tbody.appendChild(tr);
  });
}
