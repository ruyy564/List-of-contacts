import { useEffect } from 'react';
import useForm from '../hooks/useForm';
import useActions from '../hooks/useActions';
import useSearch from '../hooks/useSearch';
import useModals from '../hooks/useModal';
import { Button, Typography, Container, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import FormContact from '../components/FormContact';

const Contacts = () => {
  const { getContacts } = useActions();
  const { open, handleClose, handleOpen } = useModals();
  const { form, saveContact, changeFormHandler, initForm } = useForm();
  const { searchHandler, runSearch } = useSearch();

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <Container>
      <Menu searchHandler={searchHandler} />
      <Stack direction="row" spacing={2} mt={5} mb={5} justifyContent="center">
        <Button
          variant="contained"
          size={'large'}
          onClick={handleOpen}
          startIcon={<AddIcon />}
        >
          Add a new contact
        </Button>
      </Stack>
      <Typography variant="h5" component="h3">
        My contacts:
      </Typography>
      {runSearch().length === 0 && <span>The list of contact is empty</span>}
      {runSearch().map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleOpen={handleOpen}
          initForm={initForm}
        />
      ))}
      <FormContact
        open={open}
        handleClose={handleClose}
        form={form}
        saveContact={saveContact}
        changeFormHandler={changeFormHandler}
      />
    </Container>
  );
};

export default Contacts;
