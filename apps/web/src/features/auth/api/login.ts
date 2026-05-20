import api from '@/lib/api';

import type { LoginData } from '@shared/src/types/auth-data-types';

const login = async (data: LoginData) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const loginUrl = baseUrl + '/auth/login';

  const response = await api(loginUrl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response;
};

export default login;
