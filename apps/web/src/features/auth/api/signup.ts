import api from '@/lib/api';
import type { SignUpData } from '@shared/src/types/auth-data-types';

const signup = async (data: SignUpData) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const signupUrl = baseUrl + '/auth/signup';

  const res = await api(signupUrl, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return res;
};

export default signup;
