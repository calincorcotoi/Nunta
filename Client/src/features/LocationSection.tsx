import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => (
  <Box id="location" sx={{ 
    py: 12,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'background.paper' 
  }}>
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom sx={{ 
          '@media (max-width:370px)': {
        fontSize: '2rem',
          }
        }}>
        Location
      </Typography>
      <Card elevation={3}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            The Grand Hotel
          </Typography>
          <Typography variant="body1" paragraph>
            123 Elegant Street, Beverly Hills, CA 90210
          </Typography>
          <Box sx={{ my: 3 }}>
            <img 
              src="/api/placeholder/800/400" 
              alt="Venue" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                maxHeight: '60vh',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<MapPin />}
            href="https://maps.google.com"
            target="_blank"
          >
            Get Directions
          </Button>
        </CardContent>
      </Card>
    </Container>
  </Box>
);