import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../api/login';

import type {
  LoginData,
  LoginAuthError,
  AuthSuccessResponse,
} from '@shared/src/types/auth-data-types';

const useLogin = () => {
  // waiting to get result on form submission
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState<LoginAuthError | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (data: LoginData) => {
    setIsWaiting(true);
    setError(null);

    try {
      const response = await login(data);

      if (!response.ok) {
        const loginError = (await response.json()) as LoginAuthError;
        setError(loginError);
        return;
      }

      const authSuccessData = (await response.json()) as AuthSuccessResponse;
      //todo: set this data into global state and redirect to homepage.
      // todo: make pages to never render auth pages if user is logged in
      navigate('/');
    } catch (err) {
      // todo: create a utils function that handles these errors
      // todo: use the util for both signup and login
    }
  };

  return { handleSubmit, isWaiting, error };
};

export default useLogin;
