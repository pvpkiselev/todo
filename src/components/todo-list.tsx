import { useTodos } from '@/context/todo-context';
import TodoItem from './todo-item';

const TodoList: React.FC = () => {
  const { todos } = useTodos();

  return (
    <div className="flex w-full flex-col">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
