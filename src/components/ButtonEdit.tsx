import Button from './Button';
import EditIcon from '@mui/icons-material/Edit';

interface IButton {
  onClick?: () => void;
}

const ButtonEdit = ({ onClick }: IButton) => {
  return (
    <Button title={'Edit'} onClick={onClick}>
      <EditIcon />
    </Button>
  );
};

export default ButtonEdit;
