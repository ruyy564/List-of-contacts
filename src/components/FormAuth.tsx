import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FormAuth = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { fetchLogin } = useActions();
  const { error, user } = useTypedSelector((state) => state.auth);

  const changeFormHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const login = () => {
    fetchLogin(form);
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Typography component="h1" variant="h5" color="error">
        {error}
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        value={form.email}
        onChange={changeFormHandler}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={form.password}
        onChange={changeFormHandler}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={login}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default FormAuth;
