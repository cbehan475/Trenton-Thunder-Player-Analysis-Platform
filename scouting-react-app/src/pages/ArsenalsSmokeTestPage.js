/* eslint-disable */
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function ArsenalsSmokeTestPage() {
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'Foo',   col2: 'Bar'   },
  ];
  const columns = [
    { field: 'col1', headerName: 'Col 1', width: 150 },
    { field: 'col2', headerName: 'Col 2', width: 150 },
  ];

  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ margin: '0 0 12px' }}>🔧 Arsenals Smoke Test</h2>
      <DataGrid rows={rows} columns={columns} autoHeight pageSizeOptions={[5]} />
    </div>
  );
}
