import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../api/login';
import { useQueryClient } from '@tanstack/react-query';

import type {
  LoginData,
  AuthSuccessResponse,
  AuthErrorResponse,
} from '@shared/src/types/auth-data-types';

import type {
  GlobalErrorObject,
  CatchBlockError,
} from '@shared/src/types/global-types';

const useLogin = () => {
  // waiting to get result on form submission
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState<
    AuthErrorResponse | GlobalErrorObject | CatchBlockError | null
  >(null);
  const navigate = useNavigate();
  const client = useQueryClient();

  const handleSubmit = async (data: LoginData) => {
    setIsWaiting(true);
    setError(null);

    try {
      const response = await login(data);

      if (!response.ok) {
        const loginError = (await response.json()) as
          | AuthErrorResponse
          | GlobalErrorObject;
        setError(loginError);
        return;
      }

      const authSuccessData = (await response.json()) as AuthSuccessResponse;
      console.log(authSuccessData);
      navigate('/');
      client.invalidateQueries({ queryKey: ['initAuth'] });
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        console.log(err.stack);
        setError({
          errorName: 'catch-block',
          message: err.message,
          name: err.name,
        });
      }
    } finally {
      setIsWaiting(false);
    }
  };

  return { handleSubmit, isWaiting, error };
};

export default useLogin;
