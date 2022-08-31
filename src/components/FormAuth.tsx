import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useFormAuth from '../hooks/useFormAuth';

const FormAuth = () => {
  const { error, emailValidator, passwordValidator, email, password, login } =
    useFormAuth();

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Typography component="h1" variant="h6" color="error">
        {error}
      </Typography>
      <Typography component="h1" variant="h6" color="error">
        {emailValidator.errors.join('/')}
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
        value={email.value}
        onChange={email.changeHandler}
      />
      <Typography component="h1" variant="h6" color="error">
        {passwordValidator.errors.join('/')}
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password.value}
        onChange={password.changeHandler}
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
