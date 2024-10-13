import { useMemo } from 'react';
import { useTodos } from '@/context/todo-context';
import type { FilterTabs } from '@/models/types';

export const useFilteredTodos = (filter: FilterTabs) => {
  const { todos } = useTodos();

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const remainingCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  return {
    filteredTodos,
    remainingCount,
  };
};
