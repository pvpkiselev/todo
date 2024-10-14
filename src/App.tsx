import TodoContainer from './components/todo-container';
import Container from './components/shared/ui/container';
import TodoHeader from './components/header';
import { TodoProvider } from './context/todo/todo-context';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="flex min-h-screen flex-col items-center justify-center overflow-auto bg-background font-sans antialiased">
        <Container>
          <div className="shadow-md">
            <TodoHeader />
            <TodoContainer />
          </div>
        </Container>
      </div>
    </TodoProvider>
  );
};

export default App;
