import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from '@/components/form';
import { TodoProvider } from '@/context/todo/todo-context';

describe('TodoForm', () => {
  it('должен добавлять задачу при сабмите', () => {
    render(
      <TodoProvider>
        <TodoForm />
      </TodoProvider>
    );

    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New Task' } });

    const form = screen.getByTestId('todo-form');
    fireEvent.submit(form);

    expect(input).toHaveValue('');
  });
});
