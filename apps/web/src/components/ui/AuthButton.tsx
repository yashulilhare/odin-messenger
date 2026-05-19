import { cn } from '@/utils/cn';
import type { ClassValue } from 'clsx';

interface AuthButtonProps {
  content: string;
  className?: ClassValue;
}

const AuthButton = ({ content, className }: AuthButtonProps) => {
  return (
    <button
      className={cn(
        ' border-white bg-orange-400 border-t-3 w-full text-center text-white font-bold px-2 py-4 pb-8 rounded-xl box-border border-collapse hover:brightness-110',
        className,
      )}
    >
      {content}
    </button>
  );
};

export default AuthButton;
