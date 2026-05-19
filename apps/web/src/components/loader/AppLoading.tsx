import { cn } from '@/utils/cn';

const AppLoading = () => {
  return (
    <div
      className={cn(
        'flex-1 flex items-center justify-center flex-col text-center',
      )}
    >
      <h2>
        Welcome to the <span className="text-theme-orange">Odin Messenger</span>
      </h2>
      <p className="text-lg">Please wait while app is being ready</p>
      <h2 className={cn('dot-loader text-theme-orange')}></h2>
    </div>
  );
};

export default AppLoading;
