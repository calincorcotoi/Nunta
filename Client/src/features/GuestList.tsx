import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import agent from '../app/api/agent';
import { Guest } from '../app/models/guests';

const GuestList: React.FC = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [numberOfGuests, setnumberOfGuests] = useState<number>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Guests.list()
      .then((response) => setGuests(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    agent.Guests.numberOfGuestsComing()
      .then((response) => setnumberOfGuests(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Box
      sx={{
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Guest Lists
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: '20%' }}>Name</TableCell>
                <TableCell align="left" sx={{ width: '20%' }}>
                  Number of Guests
                </TableCell>
                <TableCell align="left">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guests.map((guest, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ width: '20%' }}>{guest.name}</TableCell>
                  <TableCell align="left" sx={{ width: '20%' }}>
                    {guest.numberOfGuestComing}
                  </TableCell>
                  <TableCell align="left">{guest.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Typography variant="h6" sx={{ position: 'absolute', top: 16, right: 16 }}>
        Total Guests: {numberOfGuests}
      </Typography>
    </Box>
  );
};

export default GuestList;
