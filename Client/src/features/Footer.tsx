import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export const Footer: React.FC = () => (
  <Box sx={{ 
    bgcolor: 'primary.main', 
    color: 'white', 
    py: 3,
    mt: 'auto'
  }}>
    <Container maxWidth="lg">
      <Typography variant="body2" align="center">
        © 2025 Nunta lui Sarah & Michael
      </Typography>
      <Typography variant="body2" align="center" sx={{ mt: 1 }}>
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact
        </Link>
        |
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Registru
        </Link>
        |
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Cazare
        </Link>
      </Typography>
    </Container>
  </Box>
);