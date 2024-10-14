import { describe, it, expect } from 'vitest';
import { todoReducer, initialState } from '@/context/todo/todo-reducer';
import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED } from '@/context/todo/todo-actions';

describe('todoReducer', () => {
  it('должен добавлять новую задачу', () => {
    const action = { type: ADD_TODO, payload: { text: 'New Task' } };
    const state = todoReducer(initialState, action);

    expect(state.todos.length).toBe(1);
    expect(state.todos[0].text).toBe('New Task');
    expect(state.todos[0].completed).toBe(false);
  });

  it('должен переключать состояние задачи', () => {
    const initial = {
      todos: [{ id: '1', text: 'Task 1', completed: false }],
    };

    const action = { type: TOGGLE_COMPLETE, payload: { id: '1' } };
    const state = todoReducer(initial, action);

    expect(state.todos[0].completed).toBe(true);
  });

  it('должен очищать завершенные задачи', () => {
    const initial = {
      todos: [
        { id: '1', text: 'Task 1', completed: true },
        { id: '2', text: 'Task 2', completed: false },
      ],
    };

    const action = { type: CLEAR_COMPLETED };
    const state = todoReducer(initial, action);

    expect(state.todos.length).toBe(1);
    expect(state.todos[0].id).toBe('2');
  });
});
