import React, { useEffect, useState } from 'react';
import { useTasksDispatchContext } from '@/context/TasksContext';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import validateValue from '@/utils/validateValue';
import { ADDED } from '@/reducer/constants';
import { v4 as uuidv4 } from 'uuid';
import { theme } from '@/theme/theme';
import { Add } from '@mui/icons-material';

function AddTask() {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useTasksDispatchContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateValue(value)) {
      setError('The task name must be at least 2 characters long');
      return;
    }

    dispatch({
      type: ADDED,
      id: uuidv4(),
      text: value,
      done: false,
    });

    setValue('');
    setError(null);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <Box>
      <Typography variant="h3" component="h1" sx={{ color: theme.palette.primary.main }}>
        TODO
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ marginBlock: 4 }}>
        <TextField
          id="add-task"
          label="New Task"
          variant="standard"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!!error}
          helperText={error}
          fullWidth
          autoComplete="true"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="add new task"
                  edge="end"
                  type="submit"
                  sx={{ color: theme.palette.primary.main }}
                >
                  <Add />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}

export default AddTask;
