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
      title: 'Ceremonie',
      time: '14:00',
      location: "Biserica Sf. Maria",
      description: 'Alăturați-vă nouă pentru a ne schimba jurămintele într-o ceremonie frumoasă.',
    },
    {
      title: 'Ora de cocktail',
      time: '15:30',
      location: 'Terasa Grădinii',
      description: "Bucurați-vă de băuturi și aperitive în timp ce facem fotografii.",
    },
    {
      title: 'Recepție',
      time: '17:00',
      location: 'Sala Mare',
      description: 'Cină, dans și sărbătoare alături de familie și prieteni.',
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
        Programul Evenimentelor
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