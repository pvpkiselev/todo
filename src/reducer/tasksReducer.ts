import { ReducerError } from '@/errors/reducerError';
import { ADDED, EDITED, DELETED, CHECKED } from './constants';
import { Action, TasksState } from './tasksReducer.types';

export function tasksReducer(tasksState: TasksState, action: Action) {
  switch (action.type) {
    case ADDED: {
      return [
        ...tasksState,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case EDITED: {
      return tasksState.map((task) => (task.id === action.task.id ? action.task : task));
    }
    case CHECKED: {
      const changedTask = action.task;
      const updatedTasksState = [
        changedTask,
        ...tasksState.filter((task) => task.id !== changedTask.id),
      ];
      return updatedTasksState;
    }
    case DELETED: {
      return tasksState.filter((task) => task.id !== action.id);
    }
    default: {
      throw new ReducerError((action as Action).type);
    }
  }
}
