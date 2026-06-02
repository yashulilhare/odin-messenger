interface SignUpData {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface AuthSuccessResponse {
  message: string;
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName?: string;
    isGuest: boolean;
    about?: string;
    profileUrl?: string;
  };
}
interface AuthError {
  message: string;
  errorName: 'auth';
  name?: 'TokenExpiredError' | string;
  stack?: string | undefined;
}

interface ValidationErrorObject {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}
interface ValidationError {
  message: string;
  errorName: 'validation';
  errorsArray: ValidationErrorObject[];
}


type AuthErrorResponse = ValidationError | AuthError;

export type {
  SignUpData,
  AuthError,
  AuthSuccessResponse,
  LoginData,
  AuthErrorResponse,
};
