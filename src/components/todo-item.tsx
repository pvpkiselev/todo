import { useTodos } from '@/context/todo-context';
import { cn } from '@/lib/utils';
import type { Todo } from '@/models/types';
import Checkbox from './shared/ui/checkbox';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleComplete } = useTodos();

  return (
    <div className="flex h-8 items-center justify-between border-b border-border p-2">
      <div className="flex items-center">
        <Checkbox checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
        <span className={cn('text-xl', { 'text-body02 line-through': todo.completed })}>
          {todo.text}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
