import { Typography, Stack, ButtonGroup } from '@mui/material';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { IContact } from '../types/contact';

interface ContactProps {
  contact: IContact;
  handleOpen: () => void;
  deleteContact: (contact: IContact) => void;
}

const Contact = ({ contact, handleOpen, deleteContact }: ContactProps) => {
  return (
    <Stack
      direction="row"
      justifyContent={'space-between'}
      alignItems={'center'}
      mt={2}
    >
      <Typography
        variant="h6"
        component="h6"
        style={{ wordWrap: 'break-word', width: '20%' }}
      >
        name:{contact.name}
      </Typography>
      <Typography
        variant="h6"
        component="h6"
        color="primary"
        style={{ wordWrap: 'break-word', width: '20%' }}
      >
        email:{contact.email}
      </Typography>
      <ButtonGroup>
        <ButtonEdit onClick={handleOpen} />
        <ButtonDelete
          onClick={() => {
            deleteContact(contact);
          }}
        />
      </ButtonGroup>
    </Stack>
  );
};

export default Contact;
