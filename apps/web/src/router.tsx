import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import AppLoading from './components/AppLoading';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLoading />,
  },
];

const router = createBrowserRouter(routes);

export default router;
