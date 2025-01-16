import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import NotFound from '../errors/NotFound';
import ServerError from '../errors/ServerError';
import ThankYouMessage from '../../features/ThankYouMessage';
import GuestList from '../../features/GuestList';

export const router = createBrowserRouter(([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/server-error', element: <ServerError /> },
            { path: '/not-found', element: <NotFound /> },
            { path: '/thanks', element: <ThankYouMessage /> },
            { path: '/list', element: <GuestList /> },
            { path: '*', element: <Navigate replace to='/not-found' /> },
        ]
    }
]))