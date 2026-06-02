import signup from '../api/signup';
import { useState } from 'react';

import type {
  AuthErrorResponse,
  SignUpData,
  AuthSuccessResponse,
} from '@shared/src/types/auth-data-types';
import type {
  GlobalErrorObject,
  CatchBlockError,
} from '@shared/src/types/global-types';

import { useNavigate } from 'react-router-dom';

const useSignUp = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [error, setError] = useState<
    AuthErrorResponse | GlobalErrorObject | CatchBlockError | null
  >(null);
  const navigate = useNavigate();

  const handleSignUp = async (data: SignUpData) => {
    setIsWaiting(true);
    setError(null);

    try {
      const res = await signup(data);

      if (!res.ok) {
        const signupError = (await res.json()) as
          | AuthErrorResponse
          | GlobalErrorObject;
        setError(signupError);
        return;
      }

      const authSuccessData = (await res.json()) as AuthSuccessResponse;
      console.log(authSuccessData);
      // todo: use zustand and store user data in global state
      // todo: then navigate to root page after changing the global state so HomePage should render instead of LandingPage

      navigate('/');
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

  return { handleSignUp, isWaiting, error };
};

export default useSignUp;
