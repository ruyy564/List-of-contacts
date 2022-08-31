import Button from './Button';
import EditIcon from '@mui/icons-material/Edit';

interface ButtonEditProps {
  onClick: () => void;
}

const ButtonEdit = ({ onClick }: ButtonEditProps) => {
  return (
    <Button title={'Edit'} onClick={onClick}>
      <EditIcon />
    </Button>
  );
};

export default ButtonEdit;
