import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import React from 'react';

import MainLayout from './layouts/MainLayout';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const LoginForm = React.lazy(
  () => import('@/features/auth/components/LoginForm'),
);
const SignUpForm = React.lazy(
  () => import('@/features/auth/components/SignUpForm'),
);
const AuthButtons = React.lazy(() => import('@/components/ui/AuthButtons'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'auth',
        element: <LandingPage />,
        children: [
          {
            index: true,
            element: <AuthButtons />,
          },
          {
            path: 'login',
            element: <LoginForm />,
          },
          {
            path: 'signup',
            element: <SignUpForm />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
