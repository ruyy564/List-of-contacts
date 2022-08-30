import { Button, TextField, Typography, ButtonGroup } from '@mui/material';
import Modal from './Modal';

interface IFormContact {
  open: boolean;
  form: any;
  handleClose: () => void;
  saveContact: () => void;
  changeFormHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormContact: React.FC<IFormContact> = ({
  open,
  handleClose,
  form,
  saveContact,
  changeFormHandler,
}) => {
  return (
    <Modal open={open} handleClose={handleClose}>
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
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            saveContact();
            handleClose();
          }}
        >
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
