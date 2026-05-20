import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Logo from '@/components/ui/Logo';
import useInitAuth from '@/hooks/useInitAuth';
import AppLoading from '@/components/loader/AppLoading';

import { cn } from '@/utils/cn';
import Footer from '@/components/footer/Footer';

const MainLayout = () => {
  const [customLoading, setCustomLoading] = useState(true);
  const { isLoading, initAuthData } = useInitAuth();
  const navigate = useNavigate();

  // use 5 second of custom delay to prevent flash of render for the loading screen.
  useEffect(() => {
    const key = setTimeout(() => {
      setCustomLoading(false);
    }, 5000);
    return () => {
      clearTimeout(key);
    };
  }, []);

  useEffect(() => {
    if (initAuthData) {
      if (!initAuthData.success) {
        navigate('auth');
      }
    }
  }, [initAuthData]);

  const showLoadingScreen = isLoading || customLoading;

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

        {showLoadingScreen ? (
          <AppLoading />
        ) : (
          <Outlet context={{ user: initAuthData }} />
        )}
      </div>
      {!showLoadingScreen && <Footer />}
    </>
  );
};

export default MainLayout;
