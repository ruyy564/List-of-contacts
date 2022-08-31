import { Button, TextField, Typography, ButtonGroup } from '@mui/material';
import Modal from './Modal';

interface FormContactProps {
  open: boolean;
  form: any;
  errors: string[];
  handleClose: () => void;
  saveContact: () => void;
  changeFormHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormContact = ({
  open,
  handleClose,
  form,
  errors,
  changeFormHandler,
  saveContact,
}: FormContactProps) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      {errors.map((error, index) => (
        <Typography key={index} component="h1" variant="h5" color="error">
          {error}
        </Typography>
      ))}
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Input a data about new contact
      </Typography>

      <TextField
        id="name"
        label="Name"
        fullWidth
        value={form.name}
        onChange={changeFormHandler}
      />
      <TextField
        id="email"
        label="Email"
        fullWidth
        value={form.email}
        onChange={changeFormHandler}
      />
      <ButtonGroup>
        <Button variant="contained" fullWidth onClick={saveContact}>
          Accept
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClose}
          color="error"
        >
          Cancel
        </Button>
      </ButtonGroup>
    </Modal>
  );
};

export default FormContact;
