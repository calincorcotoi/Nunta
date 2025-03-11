import React, { useState } from 'react';
import { Box, Container, Typography, TextField, CircularProgress } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Guest } from '../app/models/guests';
import agent from '../app/api/agent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Prea scurt!').max(50, 'Prea lung!').required('Obligatoriu'),
  numberOfGuestComing: Yup.number().required('Obligatoriu'),
});

export const RSVPSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      numberOfGuestComing: 1,
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      const createGuest: Guest = { ...values };
      agent.Guests.create(createGuest)
        .then(() => console.log('Invitat creat cu succes'))
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
          navigate('/thanks');
        });
    },
  });

  return (
    <Box
      id="rsvp"
      sx={{
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm">
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
          Vei participa?
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Vă rugăm să ne anunțați dacă veți fi alături de noi în această zi specială.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <form onSubmit={formik.handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Numele tău
            </Typography>
            <TextField
              variant="outlined"
              sx={{ mb: 3 }}
              fullWidth
              placeholder="Introduceți numele dvs."
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <Typography variant="h6" gutterBottom>
              Numărul de persoane
            </Typography>
            <TextField
              select
              variant="outlined"
              fullWidth
              sx={{ mb: 3, maxWidth: 100 }}
              SelectProps={{
                native: true,
              }}
            >
              {[...Array(6).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </TextField>
            <Typography variant="h6" gutterBottom>
              Mesaj
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Introduceți o mesaj"
              multiline
              rows={4}
              sx={{ mb: 6 }}
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
            />

            <Box sx={{ textAlign: 'center' }}>
              {loading ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ minWidth: 200 }}
                  type="submit"
                >
                  Trimite
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};
