export const ADD_TODO = 'ADD_TODO' as const;
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE' as const;
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED' as const;

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: { text: string };
}

interface ToggleCompleteAction {
  type: typeof TOGGLE_COMPLETE;
  payload: { id: string };
}

interface ClearCompletedAction {
  type: typeof CLEAR_COMPLETED;
}

export type TodoActionTypes = AddTodoAction | ToggleCompleteAction | ClearCompletedAction;

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleComplete = (id: string): ToggleCompleteAction => ({
  type: TOGGLE_COMPLETE,
  payload: { id },
});

export const clearCompleted = (): ClearCompletedAction => ({
  type: CLEAR_COMPLETED,
});
