import React, { useState, useEffect } from 'react';

import useInitAuth from '@/hooks/useInitAuth';
import { useAuthStore } from '@/store/useAuthStore';
import AppLoading from '@/components/loader/AppLoading';

import { cn } from '@/utils/cn';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet } from 'react-router-dom';
const HomePage = React.lazy(() => import('@/pages/Homepage'));

const MainLayout = () => {
  const [customLoading, setCustomLoading] = useState(true);
  const { isLoading, initAuthData } = useInitAuth();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // use 5 second of custom delay to prevent flash of render of loading screen.
  useEffect(() => {
    const key = setTimeout(() => {
      setCustomLoading(false);
    }, 5000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  const showLoadingScreen = isLoading || customLoading;
  console.log(isLoggedIn + '&&' + initAuthData?.success);

  return (
    <>
      <div
        className={cn(
          'flex flex-col px-2 min-h-screen border-theme-orange bg-orange-50  md:p-4 xl:p-6',
        )}
      >
        <Header isLoggedIn={isLoggedIn} />
        {/* Render HomePage if user is logged in, otherwise render Outlet which will be LandingPage*/}
        {showLoadingScreen ? (
          <AppLoading />
        ) : isLoggedIn ? (
          <HomePage />
        ) : (
          <Outlet />
        )}
      </div>
      {!showLoadingScreen && <Footer />}
    </>
  );
};

export default MainLayout;
