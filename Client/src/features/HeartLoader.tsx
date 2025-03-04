import React from 'react';
import { Box, keyframes } from '@mui/material';

const heartPulseAnimation = keyframes`
  0% { 
    transform: scale(0.95) rotate(0deg);
    opacity: 0.9;
  }
  20% { 
    transform: scale(1.05) rotate(2deg);
    opacity: 1;
  }
  40% { 
    transform: scale(0.98) rotate(-2deg);
    opacity: 0.95;
  }
  60% { 
    transform: scale(1.03) rotate(1deg);
    opacity: 1;
  }
  80% {
    transform: scale(0.97) rotate(-1deg);
    opacity: 0.92;
  }
  100% { 
    transform: scale(0.95) rotate(0deg);
    opacity: 0.9;
  }
`;

const glowAnimation = keyframes`
  0% {
    filter: drop-shadow(0 0 0px rgba(212,165,165,0.3));
  }
  20% {
    filter: drop-shadow(0 0 10px rgba(212,165,165,0.5));
  }
  40% {
    filter: drop-shadow(0 0 15px rgba(212,165,165,0.6));
  }
  60% {
    filter: drop-shadow(0 0 15px rgba(212,165,165,0.6));
  }
  80% {
    filter: drop-shadow(0 0 10px rgba(212,165,165,0.5));
  }
  100% {
    filter: drop-shadow(0 0 0px rgba(212,165,165,0.3));
  }
`;

const HeartLoader: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'transparent',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        sx={{
          width: { xs: '250px', sm: '350px', md: '450px' },
          height: { xs: '250px', sm: '350px', md: '450px' },
          animation: `
            ${heartPulseAnimation} 2.5s ease-in-out infinite,
            ${glowAnimation} 2.5s ease-in-out infinite
          `,
          zIndex: 10,
        }}
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A5A5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4A5A5" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
          fill="url(#heartGradient)"
          fillOpacity="0.8"
        />
      </Box>
    </Box>
  );
};

export default HeartLoader;
