import { useRemainingCount } from './hooks/useTodosSelector';

const TodoCounter: React.FC = () => {
  const remainingCount = useRemainingCount();

  return (
    <div className="text-body02">
      <span>{remainingCount} tasks left</span>
    </div>
  );
};

export default TodoCounter;
