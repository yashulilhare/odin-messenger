import { useState } from 'react';
import Logo from '../ui/Logo';
import { NavLink } from 'react-router-dom';

import menuIcon from '@/assets/icons/menu.png';
import closeIcon from '@/assets/icons/close.png';
import { cn } from '@/utils/cn';

type link = { content: string; url: string };

interface headerProps {
  headerLinks: link[];
}

const Header = ({ headerLinks }: headerProps) => {
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
      {headerLinks && isOpen && (
        <nav className="flex flex-col justify-center items-center absolute right-0 top-1/1 z-99 rounded-md bg-gray-300 border-2 border-gray-400 w-full shadow-mist-700 shadow-lg">
          {headerLinks.map((link) => {
            return (
              <NavLink
                key={link.content + link.url}
                to={link.url}
                className={cn(
                  'w-full m-0 p-2 text-center text-blue-500 font-bold',
                )}
              >
                {link.content}
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
