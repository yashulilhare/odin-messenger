import { cn } from '@/utils/cn';
import FormGroup from '@/components/partials/FormGroup';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { loginData } from '@/constants/auth-form-data';

const LoginForm = () => {
  const { isWaiting, handleSubmit, error } = useLogin();

  return (
    <>
      <form
        autoComplete="on"
        className={cn('flex flex-col gap-3 my-5 p-6 pb-0')}
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.target);

          const username = formData.get('username') as string;
          const password = formData.get('password') as string;

          handleSubmit({ username, password });
        }}
      >
        {error && error.errorName !== 'validation' && (
          <p className="m-0 my-1 text-sm text-red-500">! {error.message}</p>
        )}

        {loginData.map((field) => {
          return (
            <FormGroup
              key={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              name={field.name}
              autoComplete={field.autoComplete}
              errorMessage={
                error && error.errorName === 'validation'
                  ? error.errorsArray.find((i) => i.path === field.name)?.msg
                  : undefined
              }
            />
          );
        })}

        <button
          type="submit"
          className={cn(
            'hover:brightness-110 border w-max px-4 rounded-lg mt-2 bg-green-500 text-white border-white font-bold py-1',
          )}
          disabled={isWaiting}
        >
          Log In
        </button>
        <p>
          Doesn't have an account? <Link to={'/auth/signup'}>Sign Up here</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
