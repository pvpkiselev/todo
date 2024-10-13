import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;

  return (
    <button className={cn('mt-4 text-red-500', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
