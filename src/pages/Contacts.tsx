import { useEffect } from 'react';
import {
  Button,
  Typography,
  Container,
  Stack,
  LinearProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import useFormContact from '../hooks/useFormContact';
import useActions from '../hooks/useActions';
import useSearch from '../hooks/useSearch';
import useModals from '../hooks/useModal';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import FormContact from '../components/FormContact';
import useTypedSelector from '../hooks/useTypedSelector';
import useValidateFormContact from '../hooks/useValidateFormContact';

const Contacts = () => {
  const { getContacts, deleteContact, editContact, addContact } = useActions();
  const { clearError, isValidateForm, errorValidation } =
    useValidateFormContact();
  const { error, loading } = useTypedSelector((state) => state.contacts);
  const { open, handleClose, handleOpen } = useModals();
  const { form, editId, changeFormHandler, initForm, clearForm } =
    useFormContact();
  const { searchHandler, runSearch } = useSearch();

  useEffect(() => {
    getContacts();
  }, []);

  const openFormHandler = () => {
    clearError();
    handleOpen();
  };
  const closeFormHandler = () => {
    clearForm();
    handleClose();
  };

  const saveContact = () => {
    clearError();

    if (!isValidateForm(form)) {
      return;
    }

    if (editId) {
      editContact({ ...form, id: editId });
    } else {
      addContact({ ...form, id: Date.now() });
    }

    handleClose();
    clearForm();
  };

  return (
    <Container>
      <Menu searchHandler={searchHandler} />
      {error && (
        <Typography variant="h5" component="h3" color="error">
          {error}
        </Typography>
      )}
      {loading ? (
        <LinearProgress color="secondary" />
      ) : (
        <>
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
              onClick={openFormHandler}
              startIcon={<AddIcon />}
            >
              Add a new contact
            </Button>
          </Stack>
          <Typography variant="h5" component="h3">
            My contacts:
          </Typography>
          {runSearch().length === 0 && (
            <span>The list of contact is empty</span>
          )}
          {runSearch().map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              handleOpen={openFormHandler}
              initForm={initForm}
              deleteContact={deleteContact}
            />
          ))}
        </>
      )}
      <FormContact
        open={open}
        handleClose={closeFormHandler}
        form={form}
        saveContact={saveContact}
        changeFormHandler={changeFormHandler}
        errors={errorValidation}
      />
    </Container>
  );
};

export default Contacts;
