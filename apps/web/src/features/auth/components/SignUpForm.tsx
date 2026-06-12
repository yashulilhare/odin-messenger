import { cn } from '@/utils/cn';
import FormGroup from '@/components/partials/FormGroup';
import useSignUp from '../hooks/useSignUp';
import { signUpData } from '@/constants/auth-form-data';
import { Link } from 'react-router-dom';
// import type { SignUpData } from '@shared/src/types/auth-data-types';

const SignUpForm = () => {
  const { isWaiting, handleSignUp, error } = useSignUp();
  return (
    <>
      <form
        autoComplete="on"
        className={cn('flex flex-col gap-3 my-5 p-6 pb-0')}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const firstName = formData.get('firstName') as string;
          const lastName = formData.get('lastName') as string;
          const username = formData.get('username') as string;
          const password = formData.get('password') as string;
          handleSignUp({
            firstName,
            lastName,
            username,
            password,
          });
        }}
      >
        {error && error.errorName !== 'validation' && (
          <p className="m-0 my-1 text-sm text-red-500">! {error.message}</p>
        )}
        {signUpData.map((field) => {
          return (
            <FormGroup
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              isRequired={field.isRequired}
              autoComplete={field.autoComplete}
              regEx={field.regEx}
              errorMessage={
                error && error.errorName === 'validation'
                  ? error.errorsArray.find((i) => i.path === field.name)?.msg
                  : undefined
              }
            ></FormGroup>
          );
        })}

        <p className={cn('italic text-sm')}>
          Note: Password must more than 5 in length and should contain at least
          1 letter, 1 number, 1 symbol!
        </p>
        <button
          type="submit"
          className={cn(
            'hover:brightness-110 border w-max px-4 rounded-lg bg-sky-500 text-white border-white font-bold py-1',
          )}
          disabled={isWaiting}
        >
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
