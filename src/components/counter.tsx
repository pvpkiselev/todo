import React from 'react';

interface CounterProps {
  count: number;
}

const TodoCounter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className="text-body02">
      <span>{count} tasks left</span>
    </div>
  );
};

export default TodoCounter;
