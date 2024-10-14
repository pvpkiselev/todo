// context/todo-context.tsx
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { todoReducer, initialState, TodoState } from './todo-reducer';
import { TodoActionTypes } from './todo-actions';

interface TodosContextProps extends TodoState {}

interface TodosDispatchContextProps {
  dispatch: React.Dispatch<TodoActionTypes>;
}

const TodosContext = createContext<TodosContextProps | undefined>(undefined);
const TodosDispatchContext = createContext<TodosDispatchContextProps | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

export const useTodosDispatch = () => {
  const context = useContext(TodosDispatchContext);
  if (!context) {
    throw new Error('useTodoDispatch must be used within a TodoProvider');
  }
  return context;
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? { todos: JSON.parse(storedTodos) } : initialState;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodosContext.Provider value={state}>
      <TodosDispatchContext.Provider value={{ dispatch }}>{children}</TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};
