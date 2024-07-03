import { ReactNode, useEffect, useReducer } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';
import { tasksReducer } from '@/reducer/tasksReducer';
import { initialTasksState } from '@/reducer/initialState';

interface TasksProviderProps {
  children: ReactNode;
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksState, dispatch] = useReducer(tasksReducer, initialTasksState, (initial) => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : initial;
    } catch (error) {
      console.error('Error reading tasks from Local Storage:', error);
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasksState));
    } catch (error) {
      console.error('Error setting tasks to Local Storage', error);
    }
  }, [tasksState]);

  return (
    <TasksContext.Provider value={tasksState}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
