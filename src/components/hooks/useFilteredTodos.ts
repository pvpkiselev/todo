import { useMemo } from 'react';
import { useTodos } from '@/context/todo/todo-context';
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

  return {
    filteredTodos,
  };
};
