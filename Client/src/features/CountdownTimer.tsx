import { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date - June 15, 2025
    const weddingDate = new Date('2025-06-15T14:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <Paper 
      elevation={3}
      sx={{
        width: 100,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.paper',
        borderRadius: 2,
        p: 2
      }}
    >
      <Typography 
        variant="h3" 
        color="primary" 
        sx={{ 
          fontWeight: 'bold',
          mb: 1
        }}
      >
        {String(value).padStart(2, '0')}
      </Typography>
      <Typography 
        variant="body2"
        color="text.secondary"
      >
        {label}
      </Typography>
    </Paper>
  );

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        py: 12
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            '@media (max-width:370px)': {
          fontSize: '2rem',
            }
          }}
        >
          Ne căsătorim!
        </Typography>
        
        <Typography 
          variant="h5" 
          align="center" 
          gutterBottom
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Te invităm la nunta noastră!
        </Typography>
        
        <Typography 
          variant="body1" 
          align="center" 
          sx={{ 
            mb: 8,
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Ne dorim din suflet să ne poți fi alături și să marcăm împreună ziua în care destinele noastre vor merge pe același drum.
        </Typography>

        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            flexWrap: 'wrap'
          }}
        >
          <TimeBox value={timeLeft.days} label="Zile" />
          <TimeBox value={timeLeft.hours} label="Ore" />
          <TimeBox value={timeLeft.minutes} label="Minute" />
          <TimeBox value={timeLeft.seconds} label="Secunde" />
        </Box>
      </Container>
    </Box>
  );
};

export default CountdownTimer;