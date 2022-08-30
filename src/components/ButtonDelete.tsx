import Button from './Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface IButton {
  onClick?: () => void;
}

const ButtonDelete = ({ onClick }: IButton) => {
  return (
    <Button title={'Delete'} color="error" onClick={onClick}>
      <DeleteIcon />
    </Button>
  );
};

export default ButtonDelete;
