import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Card, CardContent } from '@mui/material';

export default function HittersTable({ hittersData }) {
  const columns = [
    {
      field: 'hitter',
      headerName: 'Hitter',
      width: 150,
      sortable: true,
      renderCell: (params) => {
        // Only show hitter name for the first at-bat of each hitter
        const { id, row, api } = params;
        // Find the index of this row in the sorted/visible rows
        const visibleSortedRows = api.getSortedRowIds();
        const idx = visibleSortedRows.indexOf(id);
        // If first row, show hitter name
        if (idx === 0) return row.hitter;
        // Otherwise, compare with previous row's hitter
        const prevRow = api.getRow(visibleSortedRows[idx - 1]);
        if (prevRow && prevRow.hitter !== row.hitter) return row.hitter;
        return '';
      },
    },
    { field: 'inning', headerName: 'Inning', width: 100, sortable: true },
    { field: 'result', headerName: 'Result', width: 120, sortable: true },
    { field: 'ev', headerName: 'EV', width: 90, sortable: true },
    { field: 'la', headerName: 'LA', width: 90, sortable: true },
  ];
  const rows = useMemo(() => {
    return hittersData.flatMap((hitter) =>
      hitter.atBats.map((atBat, idx) => ({
        id: `${hitter.hitter}-${idx}`,
        hitter: hitter.hitter,
        inning: atBat.inning,
        result: atBat.result,
        ev: atBat.ev,
        la: atBat.la
      }))
    );
  }, [hittersData]);

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[10, 25, 50]}
          disableSelectionOnClick
          getRowClassName={(params) => `hitter-${params.row.hitter.replace(/\s+/g, '-')}`}
          sx={{
            '& .MuiDataGrid-row:nth-of-type(2n)': {
              backgroundColor: '#f9f9f9'
            },
            background: '#fff',
            borderRadius: 2,
            '& .MuiDataGrid-columnHeaders': {
              position: 'sticky',
              top: 0,
              backgroundColor: 'background.paper',
              zIndex: 1,
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            },
            '& .MuiDataGrid-root': {
              overflowX: 'auto',
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
