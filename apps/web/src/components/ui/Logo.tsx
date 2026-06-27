import { cn } from '@/utils/cn';
import logoImg from '@/assets/icons/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      to={'/'}
      className={cn('flex gap-2 items-center pt-2 no-underline cursor-pointer')}
    >
      <img src={logoImg} className={cn('w-8 aspect-square')} />
      <h1 className={cn('m-0 text-gray-800 ')}>Odin Messenger</h1>
    </Link>
  );
};

export default Logo;
