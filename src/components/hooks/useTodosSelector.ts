import { useTodos } from '@/context/todo/todo-context';

export const useRemainingCount = () => {
  const { todos } = useTodos();

  return todos.filter((todo) => !todo.completed).length;
};

export const useIsListEmpty = () => {
  const { todos } = useTodos();

  return todos.length === 0;
};
