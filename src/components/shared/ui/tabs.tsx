import React from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  children: React.ReactNode;
  className?: string;
}

interface TabTriggerProps {
  label: string;
  isSelected: boolean;
  onClick: <T>(value: T) => void;
}

const TabTrigger: React.FC<TabTriggerProps> = ({ label, isSelected, onClick }) => (
  <button className={cn('px-4 py-1', { 'bg-gray-200': isSelected })} onClick={onClick}>
    {label}
  </button>
);

const Tabs: React.FC<TabsProps> = (props) => {
  const { children, className } = props;

  return <div className={cn('mt-4 flex space-x-4', className || '')}>{children}</div>;
};

export { Tabs, TabTrigger };
