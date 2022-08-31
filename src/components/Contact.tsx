import { Typography, Stack, ButtonGroup } from '@mui/material';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { IContact } from '../types/contact';

interface ContactProps {
  contact: IContact;
  handleOpen: () => void;
  initForm: (contact: IContact) => void;
  deleteContact: (contact: IContact) => void;
}

const Contact = ({
  contact,
  handleOpen,
  initForm,
  deleteContact,
}: ContactProps) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={2}
      mt={2}
    >
      <Typography variant="h6" component="span">
        {contact.name}
      </Typography>
      <Typography variant="h6" component="span">
        {contact.email}
      </Typography>
      <ButtonGroup>
        <ButtonEdit
          onClick={() => {
            initForm(contact);
            handleOpen();
          }}
        />
        <ButtonDelete onClick={deleteContact.bind(null, contact)} />
      </ButtonGroup>
    </Stack>
  );
};

export default Contact;
