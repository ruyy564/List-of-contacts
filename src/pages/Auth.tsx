import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormAuth from '../components/FormAuth';

const Auth=() =>{
  return (
      <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            heigth:'100%'
          }}
        >
          <FormAuth/>
        </Box>
      </Container>
  );
}

export default Auth;