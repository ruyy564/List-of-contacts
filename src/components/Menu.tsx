import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import SearchContact from './SearchContact';
import { useActions } from '../hooks/useActions';

interface MenuProps {
  searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Menu = ({ searchHandler }: MenuProps) => {
  const { fetchLogout } = useActions();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contacts
        </Typography>
        <SearchContact searchHandler={searchHandler} />
        <Button color="inherit" onClick={fetchLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
