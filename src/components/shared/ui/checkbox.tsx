import React from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, className, ...props }) => {
  return (
    <input
      type="checkbox"
      className={cn(
        'mr-2 h-6 w-6 appearance-none rounded-full border border-border bg-center bg-no-repeat',
        checked ? 'border-success bg-[url("/icons/icon24-check.svg")]' : 'border-border',
        className
      )}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
};

export default Checkbox;
