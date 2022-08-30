import { IconButton, Tooltip } from '@mui/material';

interface IButton {
  title: string;
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ title, color, children, onClick }: IButton) => {
  return (
    <Tooltip title={title}>
      <IconButton color={color} onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default Button;
