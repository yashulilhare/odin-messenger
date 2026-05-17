import logoImg from '@/assets/icons/logo.png';

const Logo = () => {
  return (
    <div className="flex gap-2 items-center pt-2">
      <img src={logoImg} className="w-8 aspect-square" />
      <h1 className="m-0 text-gray-800 ">Odin Messenger</h1>
    </div>
  );
};

export default Logo;
