// src/components/NavBar.js
import React, { useState, useRef } from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const location = useLocation();

  // mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // desktop hover menus (no flicker)
  const [openId, setOpenId] = useState(null); // 'pitch' | 'hit' | 'dev' | null
  const closeTimer = useRef(null);
  const handleEnter = (id) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenId(id); };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenId(null), 180);
  };

  // anchors
  const pitchRef = useRef(null);
  const hitRef   = useRef(null);
  const devRef   = useRef(null);
  const refs = { pitch: pitchRef, hit: hitRef, dev: devRef };

  // --- NAV Styling constants ---
  const NAV_TEXT = '#FFFFFF';
  const NAV_ACTIVE = '#FFB300';   // team yellow (same as bolt)
  const NAV_HOVER = '#FFB300';

  // tabs + menu items
  const tabs = [
    { id: 'pitch', label: 'Pitching Analysis', hub: '/pitching' },
    { id: 'hit',   label: 'Hitting Analysis',  hub: '/hitting' },
    { id: 'dev',   label: 'Player Development', hub: '/player-development' },
  ];
  const menuItems = {
    pitch: [
      { label: 'Pitching Game Logs', to: '/pitching/logs' },
      { label: 'Pitch Control & Movement', to: '/pitching/pitch-control-movement' },
      { label: 'Pitch Type Analysis', to: '/pitching/types' },
      { label: 'MLB Benchmarks', to: '/pitching/mlb-benchmarks' },
      { label: 'Pitcher Reports', to: '/pitching/reports' },
    ],
    hit: [
      { label: 'Hitting Game Logs', to: '/hitting/logs' },
      { label: 'Batting Performance Metrics', to: '/hitting/performance' },
      { label: 'Batted Ball Profiles', to: '/hitting/batted-ball' },
      { label: 'Hitter Reports', to: '/hitting/reports' },
      { label: 'Player Comparisons to Pro Averages', to: '/hitting/player-comparisons' },
    ],
    dev: [
      { label: 'Pitcher Development Plans', to: '/player-development/pitchers' },
      { label: 'Hitter Development Plans', to: '/player-development/hitters' },
      { label: 'Player Comparison Table', to: '/player-development/comparisons' },
    ],
  };

  const isActive = (hub) => location.pathname.startsWith(hub);

  return (
    <AppBar
  position="sticky"
  sx={{
    zIndex: (t) => t.zIndex.drawer + 1,
    background: 'linear-gradient(180deg, rgba(16,40,72,0.96) 0%, rgba(16,40,72,0.90) 100%)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 4px 18px rgba(0,0,0,0.25)'
  }}
>
      <Toolbar sx={{ maxWidth: 1120, mx: 'auto', width: '100%' }}>
        {/* Mobile hamburger */}
        {!isDesktop && (
          <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(true)} sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Centered nav on desktop */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', gap: 4 }}>
          {tabs.map((t) => (
            <Box
              key={t.id}
              onMouseEnter={isDesktop ? () => handleEnter(t.id) : undefined}
              onMouseLeave={isDesktop ? handleLeave : undefined}
              sx={{ position: 'relative', display: 'inline-block' }}
            >
              <Box
                ref={refs[t.id]}
                onClick={() => navigate(t.hub)}
                sx={{
                  cursor: 'pointer',
                  px: 1, py: 0.5,
                  fontWeight: 800,
                  letterSpacing: 0.15,
                  color: isActive(t.hub) ? NAV_ACTIVE : NAV_TEXT,
                  userSelect: 'none',
                  transition: 'color .15s ease',
                  '&:hover': { color: NAV_HOVER }
                }}
                aria-haspopup="true"
              >
                {t.label}
              </Box>

              <Menu
                id={`menu-${t.id}`}
                anchorEl={refs[t.id].current}
                open={isDesktop && openId === t.id}
                onClose={handleLeave}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                keepMounted
                disableScrollLock
                MenuListProps={{
                  onMouseEnter: () => { if (closeTimer.current) clearTimeout(closeTimer.current); },
                  onMouseLeave: handleLeave,
                  dense: true
                }}
                PaperProps={{
                  onMouseEnter: () => { if (closeTimer.current) clearTimeout(closeTimer.current); },
                  onMouseLeave: handleLeave,
                  sx: {
                    mt: 1,
                    borderRadius: 1.5,
                    boxShadow: 6,
                    bgcolor: 'rgba(12,20,36,0.92)',
                    color: '#fff',
                    backdropFilter: 'blur(6px)',
                    minWidth: 260
                  }
                }}
              >
                {menuItems[t.id].map((item) => (
                  <MenuItem
                    key={item.to}
                    onClick={() => { navigate(item.to); setOpenId(null); }}
                    sx={{
                      fontWeight: 600,
                      py: 1,
                      '&:hover': { bgcolor: 'rgba(255,179,0,0.18)', color: NAV_ACTIVE }
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ))}
        </Box>

        {/* Mobile drawer with same links */}
        <Drawer anchor="left" open={!isDesktop && drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 280 }} role="presentation" onClick={() => setDrawerOpen(false)}>
            <List>
              {tabs.map((t) => (
                <React.Fragment key={t.id}>
                  <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to={t.hub}>
                      <ListItemText primary={t.label} />
                    </ListItemButton>
                  </ListItem>
                  {menuItems[t.id].map((it) => (
                    <ListItem disablePadding key={it.to}>
                      <ListItemButton component={RouterLink} to={it.to}>
                        <ListItemText primary={it.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}