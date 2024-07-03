import { ADDED, EDITED, DELETED, CHECKED } from './constants';

export interface TaskType {
  id: string;
  text: string;
  done: boolean;
}

export type TasksState = TaskType[];

export interface AddedAction {
  type: typeof ADDED;
  id: string;
  text: string;
  done: boolean;
}

export interface EditedAction {
  type: typeof EDITED;
  task: TaskType;
}

export interface CheckedAction {
  type: typeof CHECKED;
  task: TaskType;
}

export interface DeletedAction {
  type: typeof DELETED;
  id: string;
}

export type Action = AddedAction | EditedAction | CheckedAction | DeletedAction;
