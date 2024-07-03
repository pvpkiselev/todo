import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/theme/theme';
import { Container } from '@mui/material';
import AddTask from '@/components/addTask/AddTask';
import TaskList from '@/components/taskList/TaskList';
import { TasksProvider } from '@/context/TasksProvider';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ mt: 7 }}>
        <TasksProvider>
          <AddTask />
          <TaskList />
        </TasksProvider>
      </Container>
    </ThemeProvider>
  );
}
