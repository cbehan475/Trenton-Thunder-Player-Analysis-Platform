import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card, CardContent } from '@mui/material';
import { fmt } from '../lib/formatters';
import { resultClass } from '../lib/hitLogUtils';

export default function HittersTable({ rows, onRowClick, selectedRowId }) {
  const show = (v) => (v === null || v === undefined ? '—' : v);
  const show0 = (v) => (v === null || v === undefined ? '—' : Number.isFinite(Number(v)) ? Number(v).toFixed(0) : v);
  const show1 = (v) => (v === null || v === undefined ? '—' : Number.isFinite(Number(v)) ? Number(v).toFixed(1) : v);
  const columns = [
    {
      field: 'hitter',
      headerName: 'Hitter',
      width: 150,
      sortable: true,
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
    { field: 'inning', headerName: 'Inning', width: 100, sortable: true, renderCell: (p) => show(p.row.inning) },
    { field: 'pitchType', headerName: 'Pitch Type', width: 140, sortable: true, renderCell: (p) => show(p.row.pitchType) },
    { field: 'spinRate', headerName: 'Spin Rate', width: 110, sortable: true, renderCell: (p) => show0(p.row.spinRate) },
    { field: 'ev', headerName: 'EV', width: 90, sortable: true, renderCell: (p) => show1(p.row.ev) },
    { field: 'la', headerName: 'LA', width: 90, sortable: true, renderCell: (p) => show0(p.row.la) },
    { field: 'pitchHeight', headerName: 'Pitch Height', width: 120, sortable: true, renderCell: (p) => show1(p.row.pitchHeight) },
    {
      field: 'result',
      headerName: 'Result',
      width: 140,
      sortable: true,
      renderCell: (params) => {
        const r = params.row.result;
        const cls = resultClass(r);
        return <span className={`chip ${cls}`}>{fmt.text(r)}</span>;
      },
      sortComparator: (v1, v2) => String(v1 || '').localeCompare(String(v2 || '')),
    },
  ];

  return (
    <Card elevation={0} sx={{ mb: 3, borderRadius: 2, bgcolor: '#0f172a', border: '1px solid #1f2937' }}>
      <CardContent sx={{ p: 0 }}>
        <DataGrid
          autoHeight
          density="compact"
          rows={rows}
          columns={columns}
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
            color: '#e5e7eb',
            bgcolor: '#0f172a',
            border: 0,
            '& .MuiDataGrid-overlay': { bgcolor: '#0f172a' },
            '& .MuiDataGrid-columnHeaders': {
              position: 'sticky',
              top: 0,
              zIndex: 1,
              bgcolor: '#111827',
              color: '#e5e7eb',
              borderBottom: '1px solid #1f2937',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 700,
            },
            '& .MuiDataGrid-row': {
              borderBottom: '1px solid #1f2937',
            },
            '& .MuiDataGrid-row:nth-of-type(2n)': {
              bgcolor: '#0b1222',
            },
            '& .MuiDataGrid-row:hover': {
              bgcolor: '#162036',
            },
            '& .MuiTablePagination-root': {
              color: '#cbd5e1',
            },
            '& .MuiDataGrid-cell': {
              borderColor: '#1f2937',
            },
            '& .MuiDataGrid-footerContainer': {
              bgcolor: '#0f172a',
              borderTop: '1px solid #1f2937',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
