import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  mode: 'light' | 'dark';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mode }) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(${mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(18,18,18,0.8)'}, ${mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(18,18,18,0.8)'}), url("/api/placeholder/1920/1080")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h1" gutterBottom align="center" sx={{ 
          '@media (max-width:370px)': {
        fontSize: '2rem',
          }
        }}>
        Alina & Călin
      </Typography>
      <Typography variant="h3" gutterBottom align="center"sx={{ 
          '@media (max-width:370px)': {
        fontSize: '2rem',
          }
        }}>
        Se căsătoresc
      </Typography>
      <Typography variant="h2" align="center"sx={{ 
          '@media (max-width:370px)': {
        fontSize: '2rem',
          }
        }}>
        Iulie 5, 2025
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <Box
          sx={{
            animation: 'heartbeat 1.5s infinite',
            '@keyframes heartbeat': {
              '0%, 100%': {
                transform: 'scale(1)',
              },
              '50%': {
                transform: 'scale(1.3)',
              },
            },
          }}
        >
          <IconButton color="primary">
            <Heart size={32} />
          </IconButton>
        </Box>
      </Box>
    </Container>
  </Box>
);