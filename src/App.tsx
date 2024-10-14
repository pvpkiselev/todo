import { TodoProvider } from './context/todo-context';
import TodoContainer from './components/todo-container';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="flex min-h-screen flex-col items-center justify-center overflow-auto bg-background font-sans antialiased">
        <TodoContainer />
      </div>
    </TodoProvider>
  );
};

export default App;
