import { TasksState } from './tasksReducer.types';

export const initialTasksState: TasksState = [
  { id: '0', text: 'Сделать Туду Лист', done: true },
  { id: '1', text: 'Сходить в магазин за пивом', done: false },
  { id: '2', text: 'Спастись от жары', done: false },
];
