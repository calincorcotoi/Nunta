import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Divider, Chip } from '@mui/material';
import { Heart, Crown } from 'lucide-react';

interface PartyMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  type?: 'godparent' | 'bridesmaid' | 'groomsman';
}

const partyMembers: PartyMember[] = [
  // Godparents (Nași)
  {
    name: 'Maria Ionescu',
    role: 'Nașa',
    description:
      'Ne ghidează pe drumul căsniciei cu înțelepciune și căldură. A fost alături de noi de la început și suntem recunoscători pentru sprijinul ei constant.',
    imageUrl: '/api/placeholder/200/200',
    type: 'godparent',
  },
  {
    name: 'Andrei Ionescu',
    role: 'Nașu',
    description:
      'Un mentor și un prieten adevărat care ne inspiră prin exemplul său. Împreună cu Maria, formează pilonul spiritual al căsătoriei noastre.',
    imageUrl: '/api/placeholder/200/200',
    type: 'godparent',
  },

  // Bridesmaids (Domnișoare de onoare)
  {
    name: 'Eva Thompson',
    role: 'Domnișoară de onoare',
    description:
      'Serioasă, dar cu părul creț, organizează toate cele mai bune petreceri. Și ghici ce... este și ea căsătorită!',
    imageUrl: '/api/placeholder/200/200',
    type: 'bridesmaid',
  },
  {
    name: 'Sofia Popescu',
    role: 'Domnișoară de onoare',
    description:
      'Prietena din copilărie a miresei, mereu gata să ajute și să aducă un zâmbet pe fețele tuturor. Are un talent special pentru florărie.',
    imageUrl: '/api/placeholder/200/200',
    type: 'bridesmaid',
  },
  {
    name: 'Ioana Dumitrescu',
    role: 'Domnișoară de onoare',
    description:
      'Colegă de facultate și confidentă. Cu spiritul ei aventuros și energia debordantă, a fost mereu sufletul petrecerilor noastre.',
    imageUrl: '/api/placeholder/200/200',
    type: 'bridesmaid',
  },

  // Groomsmen (Cavaleri de onoare)
  {
    name: 'Albert Wilson',
    role: 'Cavaler de onoare',
    description: 'Ar fi multe de spus începând de astăzi, dar nu va fi despre mine, ci despre noi.',
    imageUrl: '/api/placeholder/200/200',
    type: 'groomsman',
  },
  {
    name: 'Mihai Stanescu',
    role: 'Cavaler de onoare',
    description:
      'Prieten din liceu al mirelui, pasionat de sport și mereu pregătit pentru o provocare. Este omul pe care te poți baza oricând.',
    imageUrl: '/api/placeholder/200/200',
    type: 'groomsman',
  },
  {
    name: 'Radu Munteanu',
    role: 'Cavaler de onoare',
    description:
      'Fratele mirelui și partenerul perfect de distracție. Cu simțul umorului său unic, aduce mereu zâmbete în jurul său.',
    imageUrl: '/api/placeholder/200/200',
    type: 'groomsman',
  },
];

export const WeddingPartySection: React.FC = () => {
  // Filter members by type
  const godparents = partyMembers.filter((member) => member.type === 'godparent');
  const bridesmaids = partyMembers.filter((member) => member.type === 'bridesmaid');
  const groomsmen = partyMembers.filter((member) => member.type === 'groomsman');

  return (
    <Box
      id="wedding-party"
      sx={{
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'background.default',
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
          Membrii Nuntă
        </Typography>

        {/* Godparents Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Divider sx={{ mb: 4 }}>
            <Chip label="Nașii" color="warning" />
          </Divider>

          <Grid container spacing={8} justifyContent="center">
            {godparents.map((member, index) => (
              <Grid item xs={12} md={6} key={index} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {member.name} <Crown size={24} color="gold" />
                  </Typography>
                  <Typography variant="h5" color="warning.main" sx={{ fontStyle: 'italic', mb: 2 }}>
                    {member.role}
                  </Typography>
                  <Avatar
                    src={member.imageUrl}
                    sx={{
                      width: 220,
                      height: 220,
                      mb: 2,
                      border: `4px solid`,
                      borderColor: 'warning.main',
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ maxWidth: '80%', margin: '0 auto' }}
                  >
                    {member.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Bridesmaids Section */}
        <Box sx={{ mt: 8, mb: 4 }}>
          <Divider sx={{ mb: 4 }}>
            <Chip label="Domnișoare de Onoare" color="secondary" />
          </Divider>

          <Grid container spacing={4} justifyContent="center">
            {bridesmaids.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {member.name} <Heart size={20} color="pink" />
                  </Typography>
                  <Typography
                    variant="h6"
                    color="secondary.main"
                    sx={{ fontStyle: 'italic', mb: 1 }}
                  >
                    {member.role}
                  </Typography>
                  <Avatar
                    src={member.imageUrl}
                    sx={{
                      width: 180,
                      height: 180,
                      mb: 2,
                      border: `3px solid`,
                      borderColor: 'secondary.main',
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: '90%', margin: '0 auto' }}
                  >
                    {member.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Groomsmen Section */}
        <Box sx={{ mt: 8, mb: 4 }}>
          <Divider sx={{ mb: 4 }}>
            <Chip label="Cavaleri de Onoare" color="primary" />
          </Divider>

          <Grid container spacing={4} justifyContent="center">
            {groomsmen.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {member.name} <Heart size={20} color="blue" />
                  </Typography>
                  <Typography variant="h6" color="primary.main" sx={{ fontStyle: 'italic', mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Avatar
                    src={member.imageUrl}
                    sx={{
                      width: 180,
                      height: 180,
                      mb: 2,
                      border: `3px solid`,
                      borderColor: 'primary.main',
                    }}
                  />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: '90%', margin: '0 auto' }}
                  >
                    {member.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
