import { cn } from '@/utils/cn';
import logoImg from '@/assets/icons/logo.png';

const Logo = () => {
  return (
    <div className={cn('flex gap-2 items-center pt-2')}>
      <img src={logoImg} className={cn('w-8 aspect-square')} />
      <h1 className={cn('m-0 text-gray-800 ')}>Odin Messenger</h1>
    </div>
  );
};

export default Logo;
