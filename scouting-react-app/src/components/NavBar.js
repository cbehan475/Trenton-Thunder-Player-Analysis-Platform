// src/components/NavBar.js
import React, { useState, useRef, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText,
  Box, Menu, MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link as RouterLink, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();
  const location = useLocation();

  // mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // single active state + delayed close
  const [activeMenu, setActiveMenu] = useState(null); // 'pitching' | 'hitting' | 'pd' | null
  const closeTimer = useRef(null);
  const openMenu = (id) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 160);
  };
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // close on route change
  useEffect(() => { setActiveMenu(null); }, [location.pathname]);

  // anchors
  const pitchRef = useRef(null);
  const hitRef   = useRef(null);
  const devRef   = useRef(null);
  const refs = { pitching: pitchRef, hitting: hitRef, pd: devRef };
  const navContainerRef = useRef(null);
  const headerRef = useRef(null);

  // reliable touch detection (do not block desktop clicks)
  const isTouchDevice =
    typeof window !== 'undefined' && (
      (navigator.maxTouchPoints > 0) ||
      (window.matchMedia?.('(hover: none)')?.matches)
    );

  // global outside-click close (prevents sticky menus)
  useEffect(() => {
    const onDocClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  // --- NAV Styling constants ---
  const NAV_TEXT = '#FFFFFF';
  const NAV_ACTIVE = '#FFB300';   // team yellow (same as bolt)
  const NAV_HOVER = '#FFB300';

  // tabs + menu items
  const tabs = [
    { id: 'pitching', label: 'Pitching Analysis', hub: '/pitching' },
    { id: 'hitting',   label: 'Hitting Analysis',  hub: '/hitting' },
    { id: 'pd',   label: 'Player Development', hub: '/player-development' },
  ];
  const menuItems = {
    pitching: [
      { label: 'Pitching Game Logs', to: '/pitching/logs' },
      { label: 'Pitcher Arsenals', to: '/pitching/arsenals' },
      { label: 'Pitch Type Analysis', to: '/pitching/types' },
      { label: 'MLB Benchmarks', to: '/pitching/mlb-benchmarks' },
      { label: 'Pitcher Reports', to: '/pitching/reports' },
    ],
    hitting: [
      { label: 'Hitting Game Logs', to: '/hitting/logs' },
      { label: 'Hitter Reports', to: '/hitting/batted-ball' },
      { label: 'MLB Benchmarks', to: '/hitting/mlb-benchmarks' },
      // removed (page merged into Hitter Reports at /hitting/batted-ball)
    ],
    pd: [
      { label: 'Pitcher Development Plans', to: '/player-development/pitchers' },
      { label: 'Hitter Development Plans', to: '/player-development/hitters' },
      { label: 'Player Comparison Table', to: '/player-development/comparisons' },
    ],
  };

  const isActive = (hub) => location.pathname.startsWith(hub);

  return (
    <AppBar
  component="header"
  className="site-header"
  ref={headerRef}
  position="sticky"
  sx={{
    zIndex: (t) => t.zIndex.drawer + 1,
    background: 'linear-gradient(180deg, rgba(16,40,72,0.96) 0%, rgba(16,40,72,0.90) 100%)',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 4px 18px rgba(0,0,0,0.25)'
  }}
  onPointerMove={(e) => {
    if (!isDesktop) return; // desktop hover only
    // Centralized hover controller: track pointer across the entire header
    const item = e.target.closest('.top-item');
    const id = item?.dataset?.menu; // 'pitching' | 'hitting' | 'pd'
    if (id && id !== activeMenu) openMenu(id);
  }}
  onMouseLeave={scheduleClose}
  onKeyDown={(e) => { if (e.key === 'Escape') setActiveMenu(null); }}
>
      <Toolbar sx={{ maxWidth: 1120, mx: 'auto', width: '100%' }}>
        {/* Mobile hamburger */}
        {!isDesktop && (
          <IconButton color="inherit" edge="start" onClick={() => setDrawerOpen(true)} sx={{ mr: 1 }}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Centered nav on desktop */}
        <Box
          className="navbar"
          sx={{ flex: 1, position: 'relative' }}
          onMouseEnter={isDesktop ? () => { if (closeTimer.current) clearTimeout(closeTimer.current); } : undefined}
          ref={navContainerRef}
        >
          <Box className="nav-inner" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', maxWidth: 1200, mx: 'auto' }}>
            {tabs.map((t) => (
              <Box
                key={t.id}
                className="top-item"
                data-menu={t.id}
                onMouseEnter={isDesktop ? () => openMenu(t.id) : undefined}
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: '-10px',
                    right: '-10px',
                    top: '100%',
                    height: '14px',
                    pointerEvents: 'none'
                  }
                }}
              >
                <Box
                  ref={refs[t.id]}
                  tabIndex={0}
                  onFocus={() => openMenu(t.id)}
                  onKeyDown={(e) => { if (e.key === 'Escape') setActiveMenu(null); }}
                  onClick={(e) => {
                    // Only intercept the first tap on true touch devices
                    if (isTouchDevice && activeMenu !== t.id) {
                      e.preventDefault();
                      openMenu(t.id);
                    }
                  }}
                  sx={{
                    cursor: 'pointer',
                    px: 1, py: 0.5,
                    userSelect: 'none'
                  }}
                  aria-haspopup="true"
                  aria-expanded={activeMenu === t.id}
                  aria-controls={`menu-${t.id}`}
                >
                  <NavLink
                    to={t.hub}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      // Preserve the dropdown first-tap behavior for touch
                      if (isTouchDevice && activeMenu !== t.id) {
                        e.preventDefault();
                        openMenu(t.id);
                      }
                    }}
                  >
                    {t.label}
                  </NavLink>
                </Box>

                <Menu
                  id={`menu-${t.id}`}
                  anchorEl={refs[t.id].current}
                  open={isDesktop && activeMenu === t.id}
                  onClose={scheduleClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                  marginThreshold={0}
                  keepMounted
                  disableScrollLock
                  container={typeof document !== 'undefined' ? document.body : undefined}
                  MenuListProps={{
                    onMouseEnter: () => openMenu(t.id),
                    onMouseLeave: scheduleClose,
                    dense: true,
                    onKeyDown: (e) => { if (e.key === 'Escape') setActiveMenu(null); }
                  }}
                  transitionDuration={150}
                  slotProps={{
                    paper: {
                      onMouseEnter: () => { if (closeTimer.current) clearTimeout(closeTimer.current); },
                      onMouseLeave: scheduleClose,
                      elevation: 10,
                      sx: {
                        mt: 0.5,
                        borderRadius: '10px',
                        border: '1px solid rgba(201,162,39,.18)',
                        bgcolor: 'rgba(10, 22, 52, .96)',
                        backdropFilter: 'blur(4px)',
                        color: '#fff',
                        minWidth: 240,
                        zIndex: 2100
                      }
                    },
                    root: {}
                  }}
                >
                  {menuItems[t.id].map((item) => (
                    <MenuItem
                      key={item.to}
                      onClick={() => { navigate(item.to); setActiveMenu(null); }}
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
        </Box>

        {/* Mobile drawer with same links */}
        <Drawer anchor="left" open={!isDesktop && drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 280 }} role="presentation" onClick={() => setDrawerOpen(false)}>
            <List>
              {tabs.map((t) => (
                <React.Fragment key={t.id}>
                  <ListItem disablePadding>
                    <ListItemButton disabled>
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