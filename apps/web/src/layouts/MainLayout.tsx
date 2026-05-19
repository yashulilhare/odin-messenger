import { Outlet } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';

import Logo from '@/components/ui/Logo';
import useInitAuth from '@/hooks/useInitAuth';
import AppLoading from '@/components/loader/AppLoading';

// preventing auto downloads of LandingPage as it is only used if user is no logged in.
const LandingPage = lazy(() => {
  return import('@/pages/LandingPage');
});

import { cn } from '@/utils/cn';
import Footer from '@/components/footer/Footer';

const MainLayout = () => {
  const [customLoading, setCustomLoading] = useState(true);
  const { isLoading, initAuthData } = useInitAuth();

  // use 5 second of custom delay to prevent flash of render for the loading screen.
  useEffect(() => {
    const key = setTimeout(() => {
      setCustomLoading(false);
    }, 5000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  console.log('rendered');
  return (
    <>
      <div
        className={cn(
          'flex flex-col px-2 min-h-screen border-theme-orange bg-orange-50  md:p-4 xl:p-6',
        )}
      >
        <header className="pb-2 ">
          <Logo />
        </header>

        {isLoading || (customLoading && <AppLoading />)}
        {!isLoading && !customLoading && !initAuthData?.success && (
          <Suspense fallback={<AppLoading />}>
            <LandingPage />
          </Suspense>
        )}
        <Outlet />
      </div>
      {!isLoading && !customLoading && <Footer />}
    </>
  );
};

export default MainLayout;
