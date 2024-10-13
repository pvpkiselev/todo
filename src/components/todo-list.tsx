import type { FilterTabs } from '@/models/types';
import TodoItem from './todo-item';
import { useFilteredTodos } from './hooks/useFilteredTodos';

interface TodoListProps {
  filter: FilterTabs;
}

const TodoList: React.FC<TodoListProps> = ({ filter }) => {
  const { filteredTodos } = useFilteredTodos(filter);

  return (
    <div className="flex w-full flex-col">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
