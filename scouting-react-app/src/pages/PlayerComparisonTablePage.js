import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const STAT_COLUMNS = [
  'Player', 'G', 'AB', 'R', 'H', '2B', '3B', 'HR', 'RBI', 'BB', 'SO', 'SB', 'CS', 'AVG', 'OBP', 'SLG', 'OPS', 'TB', 'HBP', 'SF'
];

export default function PlayerComparisonTablePage() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#102542', py: 4 }}>
      <Typography variant="h4" align="center" sx={{ color: '#FFD600', fontWeight: 800, mb: 3, letterSpacing: 1 }}>
        Player Comparison Table (First Half)
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: '98vw', mx: 'auto', overflowX: 'auto', bgcolor: '#1A2233', borderRadius: 2, boxShadow: 4 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {STAT_COLUMNS.map(col => (
                <TableCell key={col} sx={{ color: '#FFD600', fontWeight: 700, bgcolor: '#23304A', minWidth: 80, textAlign: col === 'Player' ? 'left' : 'center' }}>
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder: Paste player rows here later */}
            <TableRow>
              {STAT_COLUMNS.map(col => (
                <TableCell key={col} sx={{ color: '#fff', textAlign: col === 'Player' ? 'left' : 'center' }}>
                  {/* Example: {col === 'Player' ? 'Player Name' : '-'} */}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
