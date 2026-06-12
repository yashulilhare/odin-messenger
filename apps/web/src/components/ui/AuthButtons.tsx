import AuthButton from '@/components/ui/AuthButton';

const AuthButtons = () => {
  return (
    <>
      <AuthButton
        content="Log In if you are a member"
        className={'bg-orange-300'}
        isLink={true}
        path={'/login'}
      />
      <AuthButton
        content="Sign Up if visiting for the first time"
        className={'-translate-y-4 z-1 bg-orange-400'}
        isLink={true}
        path={'/signup'}
      />
      <AuthButton
        content="Try with a Demo Account"
        className={'-translate-y-8 z-2 bg-gray-400'}
      />
    </>
  );
};

export default AuthButtons;
