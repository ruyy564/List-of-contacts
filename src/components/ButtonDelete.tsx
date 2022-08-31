import Button from './Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface ButtonDeleteProps {
  onClick: () => void;
}

const ButtonDelete = ({ onClick }: ButtonDeleteProps) => {
  return (
    <Button title={'Delete'} color="error" onClick={onClick}>
      <DeleteIcon />
    </Button>
  );
};

export default ButtonDelete;
