import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from '@mui/material';
import { Clock, MapPin, Navigation } from 'lucide-react';

interface WeddingEvent {
  title: string;
  time: string;
  location: string;
  mapUrl: string;
  imageUrl: string;
  description: string;
}

const events: WeddingEvent[] = [
  {
    title: 'Ceremonie',
    time: '14:00',
    location: 'Biserica Sf. Maria',
    mapUrl: 'https://maps.google.com/?q=Biserica+Sf+Maria+București',
    imageUrl: '/api/placeholder/500/300',
    description: 'Alăturați-vă nouă pentru a ne schimba jurămintele într-o ceremonie frumoasă.',
  },
  {
    title: 'Ora de cocktail',
    time: '15:30',
    location: 'Terasa Grădinii',
    mapUrl: 'https://maps.google.com/?q=Terasa+Gradinii+București',
    imageUrl: '/api/placeholder/500/300',
    description: 'Bucurați-vă de băuturi și aperitive în timp ce facem fotografii.',
  },
  {
    title: 'Recepție',
    time: '17:00',
    location: 'Sala Mare',
    mapUrl: 'https://maps.google.com/?q=Sala+Mare+București',
    imageUrl: '/api/placeholder/500/300',
    description: 'Cină, dans și sărbătoare alături de familie și prieteni.',
  },
];

export const ScheduleSection: React.FC = () => (
  <Box
    id="schedule"
    sx={{
      py: 12,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'background.paper',
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
          },
        }}
      >
        Programul Evenimentelor
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {events.map((event, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={event.imageUrl}
                alt={event.location}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                  }}
                >
                  {event.title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1,
                  }}
                >
                  <Clock size={18} color="#666" />
                  <Typography sx={{ ml: 1, color: '#666' }}>{event.time}</Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <MapPin size={18} color="#666" />
                  <Typography sx={{ ml: 1, color: '#666' }}>{event.location}</Typography>
                </Box>

                <Divider sx={{ width: '50%', mb: 2 }} />

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                  }}
                >
                  {event.description}
                </Typography>

                <Button
                  variant="contained"
                  startIcon={<Navigation size={18} />}
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 'auto',
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 3,
                    py: 1,
                    fontWeight: 'bold',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    boxShadow: 2,
                    borderRadius: 2,
                  }}
                >
                  Vezi pe hartă
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);
