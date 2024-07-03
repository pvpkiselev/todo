import React, { useState } from 'react';
import { Box, Checkbox, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useTasksDispatchContext } from '@/context/TasksContext';
import { EDITED, DELETED, CHECKED } from '@/reducer/constants';
import { TaskType } from '@/reducer/tasksReducer.types';
import { Delete, Done, Edit } from '@mui/icons-material';
import { theme } from '@/theme/theme';

interface TaskProps {
  task: TaskType;
}

function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useTasksDispatchContext();

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: EDITED,
      task: {
        ...task,
        text: e.target.value,
      },
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: CHECKED,
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: DELETED,
      id: task.id,
    });
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ overflow: 'hidden', width: '100%' }}
      >
        <Checkbox checked={task.done} onChange={handleCheckboxChange} />
        {isEditing ? (
          <TextField
            value={task.text}
            onChange={handleTaskChange}
            variant="standard"
            autoFocus
            multiline
            maxRows={4}
            sx={{ width: '100%' }}
          />
        ) : (
          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {task.text}
          </Typography>
        )}
      </Stack>

      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        {isEditing ? (
          <IconButton
            sx={{ color: theme.palette.primary.main }}
            onClick={() => setIsEditing(false)}
          >
            <Done />
          </IconButton>
        ) : (
          isHovered && (
            <>
              <IconButton
                sx={{ color: theme.palette.primary.main }}
                onClick={() => setIsEditing(true)}
              >
                <Edit />
              </IconButton>
              <IconButton sx={{ color: theme.palette.error.light }} onClick={handleDelete}>
                <Delete />
              </IconButton>
            </>
          )
        )}
      </Stack>
    </Box>
  );
}

export default Task;
