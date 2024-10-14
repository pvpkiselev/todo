// hooks/useTodosSelectors.ts
import { useTodos } from '@/context/todo/todo-context';
import { useMemo } from 'react';

export const useRemainingCount = () => {
  const { todos } = useTodos();

  return useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);
};

export const useIsListEmpty = () => {
  const { todos } = useTodos();

  return useMemo(() => {
    return todos.length === 0;
  }, [todos]);
};
