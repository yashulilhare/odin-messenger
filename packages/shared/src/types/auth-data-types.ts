interface SignUpData {
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
}

// todo: update these empty interfaces with required once;
interface SignUpAuthError {}

interface LoginData {
  username: string;
  password: string;
}

interface LoginAuthError {}

interface AuthSuccessResponse {}

export type {
  SignUpData,
  SignUpAuthError,
  AuthSuccessResponse,
  LoginData,
  LoginAuthError,
};
