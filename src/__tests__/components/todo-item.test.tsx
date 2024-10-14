import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TodoItem from '@/components/todo-item';

vi.mock('@/context/todo/todo-context', () => ({
  useTodosDispatch: () => ({
    dispatch: vi.fn(),
  }),
}));

describe('TodoItem', () => {
  const todo = { id: '1', text: 'Test Todo', completed: false };

  it('должен отображать текст задачи и переключать состояние', () => {
    const { rerender } = render(<TodoItem todo={todo} />);

    const todoText = screen.getByText('Test Todo');
    expect(todoText).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    todo.completed = true;
    rerender(<TodoItem todo={todo} />);

    expect(checkbox).toBeChecked();
  });
});
