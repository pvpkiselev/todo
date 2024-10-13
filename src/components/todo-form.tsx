import { useTodos } from '@/context/todo-context';
import React, { useState } from 'react';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validText = text.trim();
    const isTextEmpty = validText === '';
    if (isTextEmpty) return;

    addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <input
        className="w-full border-none p-2 text-xl text-gray-700 outline-none"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
