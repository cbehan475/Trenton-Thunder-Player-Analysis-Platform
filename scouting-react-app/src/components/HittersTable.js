import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent } from '@mui/material';
import { fmt } from '../lib/formatters';

export default function HittersTable({ rows, onRowClick, selectedRowId }) {
  const show = (v) => (v === null || v === undefined ? '—' : v);
  const show0 = (v) => (v === null || v === undefined ? '—' : Number.isFinite(Number(v)) ? Number(v).toFixed(0) : v);
  const show1 = (v) => (v === null || v === undefined ? '—' : Number.isFinite(Number(v)) ? Number(v).toFixed(1) : v);

  // v2 chip class mapping (overrides legacy)
  const chipClassFor = (res = '') => {
    const r = String(res).toLowerCase();
    if (/home/.test(r)) return 'chip-bad';
    if (/triple|double/.test(r)) return 'chip-blue';
    if (/single|walk|hbp|reach/.test(r)) return 'chip-ok';
    if (/field\s*error|error/.test(r)) return 'chip-warn';
    if (/out|fly|ground|pop|line/.test(r)) return 'chip-neutral';
    return 'chip-neutral';
  };
  const columns = [
    {
      field: 'hitter',
      headerName: 'Hitter',
      width: 180,
      sortable: true,
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'hl-col-hitter',
      cellClassName: 'hl-col-hitter',
      renderCell: (params) => {
        // Only show hitter name for the first at-bat of each hitter
        const { id, row, api } = params;
        const visibleSortedRows = api.getSortedRowIds();
        const idx = visibleSortedRows.indexOf(id);
        if (idx === 0) return row.hitter;
        const prevRow = api.getRow(visibleSortedRows[idx - 1]);
        if (prevRow && prevRow.hitter !== row.hitter) return row.hitter;
        return '';
      },
    },
    { field: 'inning', headerName: 'Inning', width: 70, sortable: true, headerAlign: 'center', align: 'center', headerClassName: 'hl-col-inning', cellClassName: 'hl-col-inning', renderCell: (p) => show(p.row.inning) },
    { field: 'pitchType', headerName: 'Pitch Type', width: 160, sortable: true, headerAlign: 'left', align: 'left', headerClassName: 'hl-col-pitch', cellClassName: 'hl-col-pitch', renderCell: (p) => show(p.row.pitchType) },
    { field: 'spinRate', headerName: 'Spin Rate', width: 90, sortable: true, headerAlign: 'right', align: 'right', headerClassName: 'hl-col-spin', cellClassName: 'hl-col-spin', renderCell: (p) => show0(p.row.spinRate) },
    { field: 'ev', headerName: 'EV', width: 80, sortable: true, headerAlign: 'right', align: 'right', headerClassName: 'hl-col-ev', cellClassName: 'hl-col-ev', renderCell: (p) => show1(p.row.ev) },
    { field: 'la', headerName: 'LA', width: 80, sortable: true, headerAlign: 'right', align: 'right', headerClassName: 'hl-col-la', cellClassName: 'hl-col-la', renderCell: (p) => show0(p.row.la) },
    { field: 'pitchHeight', headerName: 'Pitch Height', width: 100, sortable: true, headerAlign: 'right', align: 'right', headerClassName: 'hl-col-height', cellClassName: 'hl-col-height', renderCell: (p) => show1(p.row.pitchHeight) },
    {
      field: 'result',
      headerName: 'Result',
      width: 150,
      sortable: true,
      headerAlign: 'left',
      align: 'left',
      headerClassName: 'hl-col-result',
      cellClassName: 'hl-col-result result-cell',
      renderCell: (params) => {
        const r = params.row.result;
        const cls = chipClassFor(r);
        return <span className={`result-chip ${cls}`}>{fmt.text(r)}</span>;
      },
      sortComparator: (v1, v2) => String(v1 || '').localeCompare(String(v2 || '')),
    },
  ];

  return (
    <Card elevation={0} sx={{ mb: 3, borderRadius: 2, bgcolor: 'var(--hl-panel)', border: '1px solid var(--hl-border)' }}>
      <CardContent sx={{ p: 0 }}>
        <DataGrid
          className="hl-table"
          autoHeight
          density="compact"
          rowHeight={40}
          columnHeaderHeight={40}
          rows={(rows || []).map((r, i) => ({ ...r, _i: i }))}
          columns={columns}
          getRowId={(row) => {
            const raw = row?.playerId ?? row?.pid ?? row?.id ?? row?.PlayerID ?? row?.PlayerId;
            const id = (raw !== undefined && raw !== null && String(raw).trim() !== '') ? String(raw) : `row-${row?._i ?? 0}`;
            return id;
          }}
          pagination
          pageSizeOptions={[10, 25, 50]}
          initialState={{ pagination: { paginationModel: { pageSize: 50 } } }}
          disableRowSelectionOnClick
          onRowClick={(params) => onRowClick && onRowClick(params.row)}
          getRowClassName={(params) => {
            const byHitter = `hitter-${params.row.hitter.replace(/\s+/g, '-')}`;
            const isSel = selectedRowId && params.id === selectedRowId ? 'row-selected' : '';
            return `${byHitter} ${isSel}`.trim();
          }}
          sx={{
            color: 'var(--hl-text)',
            bgcolor: 'var(--hl-panel)',
            border: 0,
            fontVariantNumeric: 'tabular-nums',
            '& .MuiDataGrid-overlay': { bgcolor: 'var(--hl-panel)' },
            '& .MuiDataGrid-columnHeaders': {
              position: 'sticky',
              top: 0,
              zIndex: 2,
              background: 'linear-gradient(180deg, #172235, #151f30)',
              color: 'var(--hl-gold)',
              borderBottom: '1px solid var(--hl-border)',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.3px',
              fontSize: '12px',
            },
            '& .MuiDataGrid-row': {
              borderBottom: '1px solid var(--hl-border)',
            },
            '& .MuiDataGrid-row:nth-of-type(2n)': {
              bgcolor: 'rgba(255,255,255,0.02)',
            },
            '& .MuiDataGrid-row:hover': {
              bgcolor: 'rgba(255,176,0,0.10)',
            },
            '& .MuiTablePagination-root': {
              color: 'var(--hl-text-dim)',
            },
            '& .MuiDataGrid-cell': {
              borderColor: 'var(--hl-border)',
              padding: '6px 10px',
            },
            '& .MuiDataGrid-footerContainer': {
              bgcolor: 'var(--hl-panel)',
              borderTop: '1px solid var(--hl-border)',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
