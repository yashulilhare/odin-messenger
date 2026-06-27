import api from '@/lib/api';

import type { InitResponse } from '@shared/src/types/initResponse';

const intiAuth = async () => {
  console.log('initAuth called' + Date.now());
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const initUrl = baseUrl + '/me';

  try {
    const res = await api(initUrl, {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      const data = (await res.json()) as InitResponse;
      throw new Error(data.message);
    }

    return res.json();
  } catch (err) {
    throw new Error('Something went wrong.');
  }
};

export default intiAuth;
