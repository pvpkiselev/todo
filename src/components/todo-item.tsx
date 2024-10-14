import React from 'react';
import { cn } from '@/lib/utils';
import type { Todo } from '@/models/types';
import Checkbox from './shared/ui/checkbox';
import { toggleComplete } from '@/context/todo/todo-actions';
import { useTodosDispatch } from '@/context/todo/todo-context';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodosDispatch();

  const handleToggle = () => {
    dispatch(toggleComplete(todo.id));
  };

  return (
    <div className="flex h-8 items-center justify-between border-b border-border p-2">
      <div className="flex items-center">
        <Checkbox checked={todo.completed} onChange={handleToggle} />
        <span className={cn('p-2 text-xl', { 'text-body02 line-through': todo.completed })}>
          {todo.text}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
