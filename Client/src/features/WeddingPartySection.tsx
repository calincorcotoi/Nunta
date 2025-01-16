import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { Heart } from 'lucide-react';

interface PartyMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const partyMembers: PartyMember[] = [
    {
      name: "Eva Thompson",
      role: "Maid of Honor",
      description: "Serious but with curly hair, organizing all the best parties. And guess what... she's married too!",
      imageUrl: "/api/placeholder/200/200"
    },
    {
      name: "Albert Wilson",
      role: "Best Man",
      description: "There would be much to say starting from this day, but it won't be about me, it's about us.",
      imageUrl: "/api/placeholder/200/200"
    }
  ];
export const WeddingPartySection: React.FC = () => (
  <Box id="wedding-party" sx={{ 
    py: 12,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    bgcolor: 'background.default' 
  }}>
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
        Wedding Party
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {partyMembers.map((member, index) => (
          <Grid item xs={12} md={6} key={index} sx={{ textAlign: 'center' }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              gap: 2 
            }}>
              <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {member.name} <Heart size={24} color='primary' />
              </Typography>
              <Typography variant="h5" color="primary" sx={{ fontStyle: 'italic', mb: 2 }}>
                {member.role}
              </Typography>
              <Avatar
                src={member.imageUrl}
                sx={{
                  width: 200,
                  height: 200,
                  mb: 2,
                  border: `4px solid`,
                  borderColor: 'primary.main'
                }}
              />
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '80%', margin: '0 auto' }}>
                {member.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);