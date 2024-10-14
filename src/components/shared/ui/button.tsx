import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn('flex items-center justify-center gap-2 font-medium text-body01', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
