import React from 'react';
import { Box, Card, CardContent, Container, Typography, useTheme } from '@mui/material';
import Confetti from 'react-confetti';
import { Heart } from 'lucide-react';

const ThankYouMessage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
    <Confetti width={window.innerWidth} height={window.innerHeight}/>
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Card sx={{ maxWidth: 600, boxShadow: 3, borderRadius: 2 }}>
        <CardContent sx={{ p: 6, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 4 }}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              Mulțumim!
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ fontSize: '1.25rem', color: theme.palette.text.primary, mb: 4 }}>
            Vă mulțumim că ați fost alături de noi în această zi specială. Prezența și sprijinul vostru au făcut ca nunta noastră să fie cu adevărat memorabilă.
          </Typography>
          <Heart color={theme.palette.primary.main} size={32} fill={theme.palette.primary.main} />
        </CardContent>
      </Card>
    </Container>
    </>
  );
};

export default ThankYouMessage;