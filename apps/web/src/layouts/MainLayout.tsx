import React, { useState, useEffect } from 'react';

import AppLoading from '@/components/loader/AppLoading';
import { useQuery } from '@tanstack/react-query';
import { initAuth } from '@/features/initAuth';

import { cn } from '@/utils/cn';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { Outlet } from 'react-router-dom';
const HomePage = React.lazy(() => import('@/pages/Homepage'));

const MainLayout = () => {
  const [customLoading, setCustomLoading] = useState(true);
  const { isPending, data } = useQuery({
    queryKey: ['initAuth'],
    queryFn: initAuth,
    retry: 0,
    refetchOnWindowFocus: false,
  });
  console.log(data);

  console.log('MainLayout mounted');

  // use 5 second of custom delay to prevent flash of render of loading screen.
  useEffect(() => {
    const key = setTimeout(() => {
      setCustomLoading(false);
    }, 2000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  const showLoadingScreen = isPending || customLoading;

  return (
    <>
      <div
        className={cn(
          'flex flex-col px-2 min-h-screen border-theme-orange bg-orange-50  md:p-4 xl:p-6',
        )}
      >
        <Header isLoggedIn={data ? true : false} />
        {/* Render HomePage if user is logged in, otherwise render Outlet which will be LandingPage */}
        {showLoadingScreen ? <AppLoading /> : data ? <HomePage /> : <Outlet />}
      </div>
      {!showLoadingScreen && <Footer />}
    </>
  );
};

export default MainLayout;
