import { useContext } from 'react';
import { TasksContext } from '@/context/TasksContext';
import { List, ListItem, Stack, Typography } from '@mui/material';
import Task from '../task/Task';
import { theme } from '@/theme/theme';

function TaskList() {
  const tasks = useContext(TasksContext);

  const todoTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  const todoTasksLength = todoTasks.length;
  const doneTasksLength = doneTasks.length;

  const isTodoList = todoTasksLength > 0;
  const isDoneList = doneTasksLength > 0;

  return (
    <Stack gap={4}>
      {isTodoList && (
        <List>
          <Typography sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
            PLAN ({todoTasksLength})
          </Typography>
          {todoTasks.map((task) => (
            <ListItem key={task.id} sx={{ paddingInline: 0 }}>
              <Task task={task} />
            </ListItem>
          ))}
        </List>
      )}
      {isDoneList && (
        <List>
          <Typography sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
            DONE ({doneTasksLength})
          </Typography>
          {doneTasks.map((task) => (
            <ListItem key={task.id} sx={{ paddingInline: 0 }}>
              <Task task={task} />
            </ListItem>
          ))}
        </List>
      )}
    </Stack>
  );
}

export default TaskList;
