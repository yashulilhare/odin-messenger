import { cn } from '@/utils/cn';
import FormGroup from '@/components/partials/FormGroup';
import useSignUp from '../hooks/useSignUp';
// import type { SignUpData } from '@shared/src/types/auth-data-types';

const SignUpForm = () => {
  const { isWaiting, handleSignUp } = useSignUp();
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
        <FormGroup
          type="text"
          name="firstName"
          placeholder="First Name"
          autoComplete="name"
          isRequired={true}
        />
        <FormGroup
          type="text"
          name="lastName"
          placeholder="Last Name (optional)"
        />
        <FormGroup
          type="text"
          name="username"
          placeholder="choose yourself a username"
          autoComplete="username"
          isRequired={true}
        />
        <FormGroup
          type="password"
          name="password"
          placeholder="password"
          autoComplete="new-password"
          isRequired={true}
          regEx="^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{5,}$"
        />
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
          Already have an account? <a href="">Login here</a>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
