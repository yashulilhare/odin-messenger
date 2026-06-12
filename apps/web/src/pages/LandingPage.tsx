import { cn } from '@/utils/cn';

import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { Outlet } from 'react-router-dom';

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
        </div>
        <Outlet />
        <ImagePlaceholder />
      </main>
    </>
  );
};

export default LandingPage;
