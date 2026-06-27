import { useState } from 'react';
import Logo from '../ui/Logo';
import Menu from './Menu';

import menuIcon from '@/assets/icons/menu.png';
import closeIcon from '@/assets/icons/close.png';
// import { cn } from '@/utils/cn';
import { preAuthButtons, postAuthButton } from '@/constants/menu-buttons';

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="pb-2 flex gap-2 items-center justify-between relative">
      <Logo />
      <button
        className="pt-5 self-end"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img
          src={isOpen ? closeIcon : menuIcon}
          alt="menu-close icons"
          className="w-8 h-8"
        />
      </button>
      {isOpen && (
        <Menu menuButtons={isLoggedIn ? postAuthButton : preAuthButtons} />
      )}
    </header>
  );
};

export default Header;
