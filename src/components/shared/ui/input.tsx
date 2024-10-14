import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        'w-full p-2 text-xl font-normal text-body01 outline-none placeholder:font-normal placeholder:italic placeholder:text-body02',
        className
      )}
      {...props}
    />
  );
};

export default Input;
