import { useTodos } from '@/context/todo-context';
import { cn } from '@/lib/utils';
import type { Todo } from '@/models/types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleComplete } = useTodos();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          className={cn(
            'mr-2 h-6 w-6 appearance-none rounded-full border-2',
            todo.completed ? 'border-green-400 bg-green-400' : 'border-gray-400'
          )}
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className={cn('text-xl', { 'text-gray-400 line-through': todo.completed })}>
          {todo.text}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
