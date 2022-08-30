import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../muiComponent/Search';
interface MenuProps {
  searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContact = ({ searchHandler }: MenuProps) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={searchHandler}
      />
    </Search>
  );
};

export default SearchContact;
