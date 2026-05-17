import Logo from '../ui/Logo';

const AppLoading = () => {
  return (
    <div className="flex flex-col px-2 min-h-screen border-theme-orange md:p-4 xl:p-6">
      <Logo />
      <div className="flex-1 flex items-center justify-center flex-col text-center">
        <h2>
          Welcome to the{' '}
          <span className="text-theme-orange">Odin Messenger</span>
        </h2>
        <p className="text-lg">Please wait while app is being ready</p>
        <h2 className="dot-loader text-theme-orange"></h2>
      </div>
    </div>
  );
};

export default AppLoading;
