import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useInitAuth from '@/hooks/useInitAuth';
import AppLoading from '@/components/loader/AppLoading';

const MainLayout = () => {
  const [pageReady, setPageReady] = useState(false);
  const { isLoading, initAuthData } = useInitAuth();

  useEffect(() => {
    const key = setTimeout(() => {
      setPageReady(true);
    }, 5000);
    return () => {
      clearTimeout(key);
    };
  }, []);
  console.log('rendered');
  return (
    <>
      {isLoading || (!pageReady && <AppLoading />)}
      {!isLoading && pageReady && initAuthData && (
        <h1>{initAuthData.message}</h1>
      )}
      <Outlet />
    </>
  );
};

export default MainLayout;
