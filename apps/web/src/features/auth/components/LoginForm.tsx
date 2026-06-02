import { cn } from '@/utils/cn';
import FormGroup from '@/components/partials/FormGroup';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <form
        autoComplete="on"
        className={cn('flex flex-col gap-3 my-5 p-6 pb-0')}
      >
        <FormGroup
          type="text"
          isRequired={true}
          placeholder="username"
          name="username"
          autoComplete="username"
        />
        <FormGroup
          type="password"
          isRequired={true}
          placeholder="password"
          name="password"
          autoComplete="current-password"
          regEx="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{5,}$"
        />
        <p className={cn('italic text-sm')}>
          Note: Password must more than 5 in length and should contain at least
          1 letter, 1 number, 1 symbol!
        </p>
        <button
          type="submit"
          className={cn(
            'hover:brightness-110 border w-max px-4 rounded-lg mt-2 bg-green-500 text-white border-white font-bold py-1',
          )}
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
