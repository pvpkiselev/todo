import TodoList from './todo-list';
import { cn } from '@/lib/utils';
import { useIsListEmpty } from './hooks/useTodosSelector';
import useTabs from './hooks/useTabs';
import type { FilterTabs } from '@/models/types';
import TodoFooter from './footer';

const TodoContainer: React.FC = () => {
  const isListEmpty = useIsListEmpty();
  const { selectedTab, selectTab } = useTabs<FilterTabs>('all');

  return (
    <div className={cn('flex flex-1 flex-col', { hidden: isListEmpty })}>
      <TodoList filter={selectedTab} />
      <TodoFooter selectedTab={selectedTab} onSelectTab={selectTab} />
    </div>
  );
};

export default TodoContainer;
