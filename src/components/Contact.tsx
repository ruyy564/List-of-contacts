import { Typography, Stack, ButtonGroup } from '@mui/material';
import { useDispatch } from 'react-redux';
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';
import { deleteContact } from '../store/actions/actionCreatorContact';

interface IContact {
  contact: {
    id: number;
    name: string;
    email: string;
  };
  handleOpen: () => void;
  initForm: (contact: any) => void;
}

const Contact = ({ contact, handleOpen, initForm }: IContact) => {
  const dispatch = useDispatch();
  const deleteC = (contact: any) => {
    dispatch(deleteContact(contact));
  };
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
        <ButtonDelete
          onClick={() => {
            deleteC(contact);
          }}
        />
      </ButtonGroup>
    </Stack>
  );
};

export default Contact;
