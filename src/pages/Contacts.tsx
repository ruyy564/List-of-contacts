import { useEffect, useState } from 'react';
import {
  Button,
  Typography,
  Container,
  Stack,
  LinearProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useActions from '../hooks/useActions';
import useSearch from '../hooks/useSearch';
import useModals from '../hooks/useModal';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import FormContact from '../components/FormContact';
import useTypedSelector from '../hooks/useTypedSelector';

const Contacts = () => {
  const { getContacts, deleteContact } = useActions();
  const { open, handleClose, handleOpen } = useModals();
  const { runSearch, searchHandler } = useSearch();
  const { error, loading } = useTypedSelector((state) => state.contacts);
  const [initState, setInitState] = useState({ name: '', email: '', id: null });

  useEffect(() => {
    getContacts();
  }, []);

  const openForm = (initState: any) => {
    setInitState(initState);
    handleOpen();
  };

  return (
    <>
      <Menu searchHandler={searchHandler} />
      {error && (
        <Typography variant="h5" component="h3" color="error">
          {error}
        </Typography>
      )}
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <Container>
          <Stack
            direction="row"
            spacing={2}
            mt={5}
            mb={5}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size={'large'}
              onClick={() => {
                openForm({ name: '', email: '', id: null });
              }}
              startIcon={<AddIcon />}
            >
              Add a new contact
            </Button>
          </Stack>
          <Typography variant="h5" component="h3">
            My contacts:
          </Typography>
          {runSearch().length === 0 && (
            <Typography variant="h5" component="h3">
              The list of contact is empty
            </Typography>
          )}
          {runSearch().map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              handleOpen={() => {
                openForm(contact);
              }}
              deleteContact={deleteContact}
            />
          ))}
          <FormContact
            open={open}
            handleClose={handleClose}
            initState={initState}
          />
        </Container>
      )}
    </>
  );
};

export default Contacts;
