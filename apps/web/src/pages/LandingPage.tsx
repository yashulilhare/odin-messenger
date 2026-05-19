import { cn } from '@/utils/cn';

import AuthButton from '@/components/ui/AuthButton';

const LandingPage = () => {
  return (
    <>
      <main className={cn('py-8 flex-1 h-full')}>
        <div>
          <h1 className={cn('text-orange-400')}>
            A place for meaningful conversations.
          </h1>
          <p className={cn('mb-8')}>
            <span className={cn('text-theme-orange font-bold')}>
              Odin Messenger
            </span>{' '}
            helps you connect with friends and people around the world. Create
            and join groups, share images and have a realtime chat.
          </p>

          <AuthButton
            content="Log In if you are a member"
            className={'bg-orange-300'}
          />
          <AuthButton
            content="Sign Up if visiting for the first time"
            className={'-translate-y-4 z-1 bg-orange-400'}
          />
          <AuthButton
            content="Try with a Demo Account"
            className={'-translate-y-8 z-2 bg-gray-400'}
          />
        </div>
        <div className={cn('bg-gray-400 w-full h-80 rounded-xl')}></div>
      </main>
    </>
  );
};

export default LandingPage;
