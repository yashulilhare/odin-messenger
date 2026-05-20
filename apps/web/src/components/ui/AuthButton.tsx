import { cn } from '@/utils/cn';
import type { ClassValue } from 'clsx';
import { Link } from 'react-router-dom';

interface AuthButtonProps {
  content: string;
  className?: ClassValue;
  isLink?: boolean;
  path?: string;
}

const AuthButton = ({ content, className, isLink, path }: AuthButtonProps) => {
  const classRules = cn(
    'block hover:no-underline no-underline border-white bg-orange-400 border-t-3 w-full text-center text-white visited:text-white font-bold px-2 py-4 pb-8 rounded-xl box-border border-collapse hover:brightness-110',
    className,
  );
  if (isLink && path) {
    return (
      <Link to={path} className={classRules}>
        {content}
      </Link>
    );
  }
  return <button className={classRules}>{content}</button>;
};

export default AuthButton;
