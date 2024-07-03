import { Dispatch, createContext, useContext } from 'react';
import { ContextError } from '@/errors/contextError';
import { Action, TasksState } from '@/reducer/tasksReducer.types';

const defaultTasksState: TasksState = [];
const defaultDispatch: Dispatch<Action> = () => {};

export const TasksContext = createContext<TasksState>(defaultTasksState);
export const TasksDispatchContext = createContext<Dispatch<Action>>(defaultDispatch);

export const useTasksContext = () => {
  const tasksContext = useContext(TasksContext);
  if (!tasksContext) {
    throw new ContextError('useTasksContext must be used within a TasksProvider');
  }
  return tasksContext;
};

export const useTasksDispatchContext = () => {
  const tasksDispatchContext = useContext(TasksDispatchContext);
  if (!tasksDispatchContext) {
    throw new ContextError('tasksDispatchContext must be used within a TasksProvider');
  }
  return tasksDispatchContext;
};
