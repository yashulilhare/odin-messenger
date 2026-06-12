import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import { LoginForm } from './features/auth';
import { SignUpForm } from './features/auth';
import LandingPage from './pages/LandingPage';
import AuthButtons from './components/ui/AuthButtons';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
        children: [
          { index: true, element: <AuthButtons /> },
          { path: '/login', element: <LoginForm /> },
          { path: '/signup', element: <SignUpForm /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
