import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Clock, MapPin } from 'lucide-react';

interface WeddingEvent {
  title: string;
  time: string;
  location: string;
  description: string;
}

const events: WeddingEvent[] = [
    {
      title: 'Ceremony',
      time: '2:00 PM',
      location: "St. Mary's Church",
      description: 'Join us as we exchange vows in a beautiful ceremony.',
    },
    {
      title: 'Cocktail Hour',
      time: '3:30 PM',
      location: 'Garden Terrace',
      description: "Enjoy refreshments and hors d'oeuvres while we take photos.",
    },
    {
      title: 'Reception',
      time: '5:00 PM',
      location: 'Grand Ballroom',
      description: 'Dinner, dancing, and celebration with family and friends.',
    },
  ];

export const ScheduleSection: React.FC = () => (
  <Box id="schedule" sx={{ 
    py: 12,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'background.paper' 
  }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom>
        Schedule of Events
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {events.map((event, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {event.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Clock size={20} />
                  <Typography sx={{ ml: 1 }}>{event.time}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <MapPin size={20} />
                  <Typography sx={{ ml: 1 }}>{event.location}</Typography>
                </Box>
                <Typography color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);