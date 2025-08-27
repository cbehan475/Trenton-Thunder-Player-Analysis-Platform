import React, { useMemo, useState, useCallback } from 'react';
import { Box, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PitchersTable from '../components/PitchersTable';
import dataFirstHalf from '../data/arsenals/firstHalf.json';

export default function ArsenalsPage() {
  const navigate = useNavigate();
  const [openBatchFix, setOpenBatchFix] = useState(false);

  const arsenals = useMemo(() => Array.isArray(dataFirstHalf) ? dataFirstHalf : [], []);

  const handleRowDoubleClick = useCallback((paramsOrRow) => {
    const row = paramsOrRow?.row ?? paramsOrRow; // support either signature
    const pid = row?.playerId;
    if (!pid) return;
    navigate(`/pitching/reports?pid=${encodeURIComponent(pid)}`);
  }, [navigate]);

  const navy = '#0B1220';
  const gold = '#FFB300';

  return (
    <div>
      <Box sx={{
        background: navy,
        color: '#E9EEFF',
        py: 1,
        borderBottom: '3px solid ' + gold,
        mb: 2,
      }}>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography component="h1" sx={{ fontSize: 22, fontWeight: 800 }}>Pitcher Arsenals</Typography>
          <Button variant="outlined" size="small" onClick={()=>setOpenBatchFix(true)} sx={{ textTransform: 'none', color:'#E9EEFF', borderColor:'rgba(233,238,255,0.35)' }}>
            Batch Fix
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {!arsenals.length ? (
          <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, textAlign: 'center', color: '#6b7280' }}>
            No arsenals loaded yet.
          </Box>
        ) : (
          <PitchersTable mode="arsenals" arsenals={arsenals} onRowDoubleClick={handleRowDoubleClick} />
        )}
      </Container>

      <Dialog open={openBatchFix} onClose={()=>setOpenBatchFix(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Batch Fix (Coming soon)</DialogTitle>
        <DialogContent>
          <Typography sx={{ color:'#6b7280', mb: 2 }}>
            This feature will let you normalize/merge pitch labels across rows.
          </Typography>
          <Box sx={{ display:'flex', flexDirection:'column', gap: 1.5 }}>
            <Button variant="outlined" disabled>Remap 2-Seam → SI</Button>
            <Button variant="outlined" disabled>Merge SL/SW → SW</Button>
            <Button variant="outlined" disabled>Normalize FF/FT → FF</Button>
            <Button variant="outlined" disabled>Collapse misc. → OTH</Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenBatchFix(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
