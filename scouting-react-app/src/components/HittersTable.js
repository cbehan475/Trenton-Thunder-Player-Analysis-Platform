import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Card, CardContent } from '@mui/material';

export default function HittersTable({ hittersData }) {
  const columns = [
    { field: 'hitter', headerName: 'Hitter', width: 150, sortable: true },
    { field: 'inning', headerName: 'Inning', width: 100, sortable: true },
    { field: 'result', headerName: 'Result', width: 120, sortable: true },
    { field: 'ev', headerName: 'EV', width: 90, sortable: true },
    { field: 'la', headerName: 'LA', width: 90, sortable: true },
  ];
  const rows = useMemo(() => hittersData.map((row, idx) => ({ id: idx + 1, ...row })), [hittersData]);

  return (
    <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
      <CardContent>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          disableSelectionOnClick
          sx={{
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
