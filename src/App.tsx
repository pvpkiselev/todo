import Container from './components/shared/ui/container';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import { TodoProvider } from './context/todo-context';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="flex min-h-screen flex-col overflow-auto bg-background font-sans antialiased">
        <Container>
          <main className="bg-color05 flex h-full w-full flex-1 flex-col gap-10">
            <TodoForm />
            <TodoList />
          </main>
        </Container>
      </div>
    </TodoProvider>
  );
};

export default App;
