import { Container, createTheme, ThemeProvider } from '@mui/material';
import './App.css'; // Import custom CSS for additional styling
import { NavigationBar } from './features/NavigationBar';
import { useState, useMemo, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import WeddingLandingPage from './features/WeddingLandingPage';
import HeartLoader from './features/HeartLoader';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  // Create a theme instance based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'light' ? '#D4A5A5' : '#FF9999',
          },
          secondary: {
            main: mode === 'light' ? '#9E7777' : '#805D5D',
          },
          background: {
            default: mode === 'light' ? '#ffffff' : '#121212',
            paper: mode === 'light' ? '#f8f8f8' : '#1e1e1e',
          },
        },
        typography: {
          fontFamily: '"Playfair Display", serif',
          h1: {
            fontSize: '4.5rem',
            fontWeight: 700,
          },
          h2: {
            fontSize: '3.5rem',
            fontWeight: 600,
          },
          h3: {
            fontSize: '3rem',
          },
        },
      }),
    [mode]
  );
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeProvider theme={theme}>
      {location.pathname === '/' ? (
        <>
          {isLoading ? <HeartLoader /> : null}
          <div style={{ display: isLoading ? 'none' : 'block' }}>
            <NavigationBar mode={mode} toggleTheme={toggleTheme} />
            <WeddingLandingPage mode={mode} />
          </div>
        </>
      ) : (
        <Container sx={{ mt: 4 }}>
          <Outlet />
        </Container>
      )}
    </ThemeProvider>
  );
}

export default App;
