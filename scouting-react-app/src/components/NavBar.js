import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function NavBar() {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: '#0B1220', boxShadow: 'none', py: 1 }}>
      <Toolbar sx={{ minHeight: 64, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', gap: { xs: 2, md: 6 } }}>
          <Button
            href="#"
            disableRipple
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: 18, md: 22 },
              textTransform: 'none',
              fontFamily: 'Montserrat, Roboto, sans-serif',
              background: 'none',
              '&:hover': { color: '#FFD600', background: 'none' }
            }}
          >
            Pitching Analysis
          </Button>
          <Button
            href="#"
            disableRipple
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: 18, md: 22 },
              textTransform: 'none',
              fontFamily: 'Montserrat, Roboto, sans-serif',
              background: 'none',
              '&:hover': { color: '#FFD600', background: 'none' }
            }}
          >
            Hitting Analysis
          </Button>
          <Button
            href="#"
            disableRipple
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: 18, md: 22 },
              textTransform: 'none',
              fontFamily: 'Montserrat, Roboto, sans-serif',
              background: 'none',
              '&:hover': { color: '#FFD600', background: 'none' }
            }}
          >
            Player Development
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
