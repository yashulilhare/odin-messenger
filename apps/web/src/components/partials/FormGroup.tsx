import { cn } from '@/utils/cn';
import type { ClassValue } from 'clsx';
import type {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
} from 'react';

interface FormGroupProps {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  inputClass?: ClassValue;
  divClass?: ClassValue;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  isRequired?: boolean;
  regEx?: string;
}

const FormGroup = ({
  name,
  type,
  placeholder,
  inputClass,
  divClass,
  autoComplete,
  isRequired,
  regEx
}: FormGroupProps) => {
  return (
    <div className={cn(divClass)}>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || ''}
        autoComplete={autoComplete}
        required={isRequired}
        pattern={regEx}
        className={cn(
          'bg-orange-100 ring ring-orange-400 focus-visible:ring-2 focus-visible:ring-blue-300 outline-0 w-full p-1 px-2 rounded-md',
          inputClass,
        )}
      />
    </div>
  );
};

export default FormGroup;
