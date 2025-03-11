import React from 'react';
import { Box } from '@mui/material';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { RSVPSection } from './RSVPSection';
import { ScheduleSection } from './ScheduleSection';
import { WeddingPartySection } from './WeddingPartySection';

interface WeddingLandingPageProps {
  mode: 'light' | 'dark';
}
const WeddingLandingPage: React.FC<WeddingLandingPageProps> = ({ mode }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
        ml: -1,
        mr: -1,
        mb: -1,
      }}
    >
      <HeroSection mode={mode} />

      <ScheduleSection />

      <WeddingPartySection />

      <RSVPSection />

      <Footer />
    </Box>
  );
};

export default WeddingLandingPage;
