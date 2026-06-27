import { cn } from '@/utils/cn';
import { NavLink } from 'react-router-dom';
import type { MenuButtons } from '@/constants/menu-buttons';

const Menu = ({ menuButtons }: { menuButtons: MenuButtons }) => {
  return (
    <nav className="flex flex-col justify-center items-center absolute right-0 top-1/1 z-99 rounded-md bg-gray-300 border-2 border-gray-400 w-full shadow-mist-700 shadow-lg">
      {menuButtons.map((button) => {
        return (
          <>
            {typeof button.action === 'string' ? (
              <NavLink
                key={button.text + button.action}
                to={button.action}
                className={cn(
                  'w-full m-0 p-2 text-center text-blue-500 font-bold',
                )}
              >
                {button.text}
              </NavLink>
            ) : (
              <button
                key={button.text}
                onClick={button.action}
                className="w-full m-0 p-2 text-center text-blue-500 font-bold"
              >
                {button.text}
              </button>
            )}
          </>
        );
      })}
    </nav>
  );
};

export default Menu;
