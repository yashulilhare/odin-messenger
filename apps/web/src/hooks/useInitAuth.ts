import api from '@/lib/api';
import { useState, useEffect } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

import type { InitResponse } from '@shared/src/types/initResponse';

const useInitAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [initAuthData, setInitAuthData] = useState<InitResponse | null>(null);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useEffect(() => {
    const controller = new AbortController();

    const initAuth = async () => {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const initUrl = baseUrl + '/me';
      try {
        const res = await api(initUrl, {
          method: 'GET',
          credentials: 'include',
        });
        const data = (await res.json()) as InitResponse;
        setInitAuthData(data);
        console.log('success ' + data.success);
        console.log('message ' + data.message);
        setIsLoggedIn(data.success);
        setIsLoading(false);
      } catch (errRes) {
        console.log(errRes);
        setInitAuthData({ success: false, message: 'Some error happened.' });
        setIsLoading(false);
      }
    };

    initAuth();
    return () => {
      controller.abort();
    };
  }, []);

  return { isLoading, initAuthData };
};

export default useInitAuth;
