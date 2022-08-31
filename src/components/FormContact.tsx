import { Button, TextField, Typography, ButtonGroup } from '@mui/material';
import Modal from './Modal';
import useFormContact from '../hooks/useFormContact';
import { IContact } from '../types/contact';

interface FormContactProps {
  open: boolean;
  initState: IContact;
  handleClose: () => void;
}

const FormContact = ({ open, handleClose, initState }: FormContactProps) => {
  const { closeForm, nameValidator, emailValidator, name, email, saveContact } =
    useFormContact(handleClose, initState);

  return (
    <Modal open={open} handleClose={closeForm}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Input a data about new contact
      </Typography>
      <Typography component="h5" variant="h6" color="error">
        {nameValidator.errors.join('/')}
      </Typography>
      <TextField
        id="name"
        label="Name"
        fullWidth
        value={name.value}
        onChange={name.changeHandler}
      />
      <Typography component="h5" variant="h6" color="error">
        {emailValidator.errors.join('/')}
      </Typography>
      <TextField
        id="email"
        label="Email"
        fullWidth
        value={email.value}
        onChange={email.changeHandler}
      />
      <ButtonGroup>
        <Button variant="contained" fullWidth onClick={saveContact}>
          Accept
        </Button>
        <Button variant="contained" fullWidth onClick={closeForm} color="error">
          Cancel
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default FormContact;
