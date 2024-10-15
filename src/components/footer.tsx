import { useTodosDispatch } from '@/context/todo/todo-context';
import Button from './shared/ui/button';
import { Tabs, TabTrigger } from './shared/ui/tabs';
import TodoCounter from './counter';
import type { FilterTabs } from '@/models/types';
import { filterTabs } from '@/models/tabs';
import { useRemainingCount } from './hooks/useTodosSelector';

interface TodoFooterProps {
  selectedTab: FilterTabs;
  onSelectTab: (tab: FilterTabs) => void;
}

const TodoFooter: React.FC<TodoFooterProps> = (props) => {
  const { dispatch } = useTodosDispatch();
  const { selectedTab, onSelectTab } = props;
  const remainingCount = useRemainingCount();

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <footer className="flex items-center justify-between p-2">
      <TodoCounter count={remainingCount} />
      <Tabs>
        {Object.values(filterTabs).map((tab) => (
          <TabTrigger
            key={tab.label}
            label={tab.label}
            isSelected={selectedTab === tab.value}
            onClick={() => onSelectTab(tab.value as FilterTabs)}
          />
        ))}
      </Tabs>
      <Button className="text-body02" onClick={clearCompleted}>
        Clear completed
      </Button>
    </footer>
  );
};

export default TodoFooter;
