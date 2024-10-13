import { createContext, useContext, useEffect, useId, useState } from 'react';
import { Todo } from '@/models/types';

interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleComplete: (id: string) => void;
  clearCompleted: () => void;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const todo = {
      id: useId(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleComplete, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};
