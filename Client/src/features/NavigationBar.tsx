import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import { Menu, Sun, Moon } from 'lucide-react';

interface NavigationBarProps {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ mode, toggleTheme }) => (
  <AppBar
    position="fixed"
    color="transparent"
    elevation={0}
    sx={{
      backdropFilter: 'blur(8px)',
      backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(18,18,18,0.8)',
      color: mode === 'light' ? 'inherit' : 'white',
    }}
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, color: mode === 'light' ? 'inherit' : 'white' }}>
        Alina & Călin
      </Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Button
          color="inherit"
          href="#schedule"
          sx={{ color: mode === 'light' ? 'inherit' : 'white' }}
        >
          Program
        </Button>
        <Button
          color="inherit"
          href="#wedding-party"
          sx={{ color: mode === 'light' ? 'inherit' : 'white' }}
        >
          Membrii
        </Button>
        <Button
          color="inherit"
          href="#location"
          sx={{ color: mode === 'light' ? 'inherit' : 'white' }}
        >
          Locaţie
        </Button>
        <Button color="inherit" href="#rsvp" sx={{ color: mode === 'light' ? 'inherit' : 'white' }}>
          Confirmare
        </Button>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => {
            const menu = document.querySelector('#mobile-menu');
            if (menu) {
              menu.classList.toggle('open');
            }
          }}
        >
          <Menu />
        </IconButton>
        <Box
          id="mobile-menu"
          sx={{
            display: 'none',
            flexDirection: 'column',
            position: 'absolute',
            top: '64px',
            right: '0',
            bgcolor: 'background.paper',
            boxShadow: 3,
            '&.open': {
              display: 'flex',
            },
          }}
        >
          <Button
            color="inherit"
            href="#schedule"
            onClick={() => {
              const menu = document.querySelector('#mobile-menu');
              if (menu) {
                menu.classList.remove('open');
              }
            }}
            sx={{ color: mode === 'light' ? 'inherit' : 'black' }}
          >
            Programul
          </Button>
          <Button
            color="inherit"
            href="#wedding-party"
            sx={{ color: mode === 'light' ? 'inherit' : 'black' }}
            onClick={() => {
              const menu = document.querySelector('#mobile-menu');
              if (menu) {
                menu.classList.remove('open');
              }
            }}
          >
            Membrii
          </Button>
          <Button
            color="inherit"
            href="#location"
            sx={{ color: mode === 'light' ? 'inherit' : 'black' }}
            onClick={() => {
              const menu = document.querySelector('#mobile-menu');
              if (menu) {
                menu.classList.remove('open');
              }
            }}
          >
            Locaţie
          </Button>
          <Button
            color="inherit"
            href="#rsvp"
            sx={{ color: mode === 'light' ? 'inherit' : 'black' }}
            onClick={() => {
              const menu = document.querySelector('#mobile-menu');
              if (menu) {
                menu.classList.remove('open');
              }
            }}
          >
            Confirmare
          </Button>
        </Box>
      </Box>
      <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
        {mode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </IconButton>
    </Toolbar>
  </AppBar>
);
