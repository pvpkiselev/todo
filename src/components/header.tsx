import { cn } from '@/lib/utils';
import TodoForm from './form';
import { useIsListEmpty } from './hooks/useTodosSelector';

const TodoHeader: React.FC = () => {
  const isListEmpty = useIsListEmpty();

  return (
    <header className="flex items-center justify-between border-b border-border px-2">
      <div className="flex min-h-6 min-w-6 items-center justify-center">
        <img
          className={cn({ 'opacity-0': isListEmpty })}
          src="/icons/icon24-expand-more.svg"
          alt="Expand icon"
          width={24}
          height={24}
        />
      </div>
      <TodoForm />
    </header>
  );
};

export default TodoHeader;
