import { v4 as uuidv4 } from 'uuid';
import { Todo } from '@/models/types';
import { TodoActionTypes, ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED } from './todo-actions';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (state: TodoState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: uuidv4(), text: action.payload.text, completed: false }],
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    default:
      return state;
  }
};
