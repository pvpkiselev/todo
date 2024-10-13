import { useTodos } from '@/context/todo-context';
import type { FilterTabs } from '@/models/types';
import { useFilteredTodos } from './hooks/useFilteredTodos';
import Container from './shared/ui/container';
import TodoForm from './todo-form';
import TodoList from './todo-list';
import Button from './shared/ui/button';
import { filterTabs } from '@/models/tabs';
import { Tabs, TabTrigger } from './shared/ui/tabs';
import useTabs from './hooks/useTabs';

const TodoContainer: React.FC = () => {
  const { clearCompleted } = useTodos();
  const { selectedTab, selectTab } = useTabs<FilterTabs>('all');
  const { remainingCount } = useFilteredTodos(selectedTab);

  return (
    <Container>
      <main className="bg-color05 flex h-full w-full flex-1 flex-col gap-9">
        <TodoForm />
        <TodoList filter={selectedTab} />
        <Tabs>
          {Object.values(filterTabs).map((tab) => (
            <TabTrigger
              key={tab.label}
              label={tab.label}
              isSelected={selectedTab === tab.value}
              onClick={() => selectTab(tab.value as FilterTabs)}
            />
          ))}
        </Tabs>
        <Button onClick={clearCompleted}>Clear completed</Button>
        <div className="mt-4 text-sm text-gray-500">
          <span>{remainingCount} tasks left</span>
        </div>
      </main>
    </Container>
  );
};

export default TodoContainer;
