import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, Typography } from '@mui/material';

interface HeroSectionProps {
  mode: 'light' | 'dark';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mode }) => {
  const isLight = mode === 'light';

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set wedding date
  const weddingDate = new Date('July 5, 2025 16:00:00').getTime();

  // Update countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isLight
          ? 'linear-gradient(to right, #f9f9f9, #fff)'
          : 'linear-gradient(to right, #333, #121212)',
        padding: { xs: '20px', md: '40px' },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          backgroundImage: 'url("/floral-border.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: { xs: 4, md: 6 },
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: isLight ? 'white' : '#424242',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left side - Photo */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                background:
                  'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 100%)',
                pointerEvents: 'none',
              },
            }}
          >
            <Box
              component="img"
              src="public/AC.jpg"
              alt="Alina and Călin"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            />
          </Box>

          {/* Right side - Text */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: { xs: 2, md: 3 },
            }}
          >
            {/* Names */}
            <Typography
              variant="h2"
              sx={{
                color: isLight ? '#2e3756' : '#fff',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 400,
                letterSpacing: '0.1em',
                marginBottom: 1,
                textShadow: isLight ? '0 2px 4px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              Alina & Călin
            </Typography>
            <Box
              sx={{
                width: '80px',
                height: '2px',
                background: 'linear-gradient(to right, #e89f71, #e8c8a9)',
                margin: '0 auto 16px',
              }}
            />

            {/* Wedding announcement */}
            <Typography
              variant="h6"
              sx={{
                color: isLight ? '#6b7280' : '#ccc',
                marginTop: 3,
                marginBottom: 1,
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              Se căsătoresc
            </Typography>

            {/* Location */}
            <Typography
              variant="h5"
              sx={{
                color: isLight ? '#2e3756' : '#fff',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 600,
                marginTop: 2,
                marginBottom: 1,
              }}
            >
              Timișoara, Romania
            </Typography>

            {/* Date */}
            <Typography
              variant="body1"
              sx={{
                color: isLight ? '#2e3756' : '#fff',
                marginBottom: 4,
                letterSpacing: '1px',
              }}
            >
              Sâmbătă, 5 Iulie 2025
            </Typography>

            {/* Countdown */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                marginBottom: 4,
                width: '100%',
              }}
            >
              <TimeBox value={timeLeft.days} label="Zile" mode={mode} />
              <TimeBox value={timeLeft.hours} label="Ore" mode={mode} />
              <TimeBox value={timeLeft.minutes} label="Minute" mode={mode} />
              <TimeBox value={timeLeft.seconds} label="Secunde" mode={mode} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

interface TimeBoxProps {
  value: number;
  label: string;
  mode: 'light' | 'dark';
}

const TimeBox = ({ value, label, mode }: TimeBoxProps) => (
  <Paper
    elevation={3}
    sx={{
      width: 100,
      height: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: mode === 'light' ? 'background.paper' : '#333',
      borderRadius: 1,
      p: 1,
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 'bold',
        mb: 1,
        color: mode === 'light' ? 'primary.main' : '#fff',
      }}
    >
      {String(value).padStart(2, '0')}
    </Typography>
    <Typography variant="body2" sx={{ color: mode === 'light' ? 'text.secondary' : '#ccc' }}>
      {label}
    </Typography>
  </Paper>
);
