import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { TodoProvider } from '@/context/todo/todo-context';
import { useIsListEmpty, useRemainingCount } from '@/components/hooks/useTodosSelector';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TodoProvider>{children}</TodoProvider>
);

describe('useTodosSelector', () => {
  it('должен возвращать правильное количество оставшихся задач', () => {
    const { result } = renderHook(() => useRemainingCount(), { wrapper });

    expect(result.current).toBe(0);
  });

  it('должен возвращать состояние пустого списка задач', () => {
    const { result } = renderHook(() => useIsListEmpty(), { wrapper });

    expect(result.current).toBe(true);
  });
});
