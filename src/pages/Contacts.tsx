import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Typography, Container, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Menu from '../components/Menu';
import useModals from '../hooks/useModal';
import Contact from '../components/Contact';
import FormContact from '../components/FormContact';
import { useTypedSelector } from '../hooks/useTypedSelector';
import useForm from '../hooks/useForm';
import { getContacts } from '../store/actions/actionCreatorContact';
import { IContact } from '../types/contact';

const Contacts = () => {
  const { open, handleClose, handleOpen } = useModals();
  const { contacts } = useTypedSelector((state) => state.contacts);
  const { form, saveContact, changeFormHandler, initForm } = useForm();
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const runSearch = (): IContact[] => {
    return [
      ...contacts.filter((contact) => contact.name.includes(query.trim())),
    ];
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(getContacts());
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
