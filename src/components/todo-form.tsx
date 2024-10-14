import React, { useEffect, useState } from 'react';
import { useTodos } from '@/context/todo-context';
import { validateText } from '@/lib/utils';
import Input from './shared/ui/input';

const TodoForm: React.FC = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateText(text);

    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    addTodo(text.trim());
    setText('');
    setError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input
        className="h-8 w-full border-b border-border p-2 text-xl text-body01"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
      />

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default TodoForm;
