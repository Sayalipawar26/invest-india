import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navItems = ['Home', 'Services', 'Team', 'Contact'];

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width:960px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // to highlight active route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const drawer = (
    <Box sx={{ width: 280 }} onClick={toggleDrawer}>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item}
            component={Link}
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            selected={
              location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
            }
          >
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                sx: {
                  fontWeight: 600,
                  fontFamily: 'Poppins',
                  fontSize: '1.2rem',
                  color:
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? '#0072ff'
                      : '#003366',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isScrolled ? 4 : 0}
        sx={{
          background: isScrolled
            ? 'rgba(0, 123, 255, 0.2)'
            : 'rgba(0, 123, 255, 0.1)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          transition: 'background-color 0.4s ease, box-shadow 0.3s ease',
          boxShadow: isScrolled ? '0 2px 12px rgba(0,0,0,0.1)' : 'none',
          py: 0.5
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 3, minHeight: '56px !important' }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: '#003366',
              fontWeight: 700,
              fontFamily: 'Poppins',
textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',            }}
          >
            Umbrella WebFX
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
              {navItems.map((item) => {
                const route = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
                const isActive = location.pathname === route;
                return (
                  <Button
                    key={item}
                    component={Link}
                    to={route}
                    sx={{
                      color: isActive ? '#0072ff' : '#003366',
                      mx: 2,
                      fontWeight: 600,
                      fontFamily: 'Poppins',
                      fontSize: '1rem',
                      textTransform: 'none',
                      textShadow: '0 1px 1px rgba(255,255,255,0.6)',
                      borderBottom: isActive ? '2px solid #0072ff' : 'none',
                      borderRadius: 0,
                    }}
                  >
                    {item}
                  </Button>
                );
              })}
            </Box>
          )}

          {/* Mobile Nav */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer}>
              <MenuIcon sx={{ color: '#003366', fontSize: '2rem' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Toolbar sx={{ minHeight: '56px' }} />

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </>
  );
}
