import { IconButton, Tooltip } from '@mui/material';

interface ButtonProps {
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
  onClick: () => void;
}

const Button = ({ title, color, children, onClick }: ButtonProps) => {
  return (
    <Tooltip title={title}>
      <IconButton color={color} onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default Button;
