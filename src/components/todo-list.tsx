import React from 'react';
import type { FilterTabs } from '@/models/types';
import TodoItem from './todo-item';
import { useFilteredTodos } from './hooks/useFilteredTodos';

interface TodoListProps {
  filter: FilterTabs;
}

const TodoList: React.FC<TodoListProps> = ({ filter }) => {
  const { filteredTodos } = useFilteredTodos(filter);

  const renderedTodos = filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return <main className="flex w-full flex-col">{renderedTodos}</main>;
};

export default TodoList;
