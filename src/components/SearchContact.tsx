import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../muiComponent/Search';

interface SearchContactProps {
  searchHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchContact = ({ searchHandler }: SearchContactProps) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search name…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={searchHandler}
      />
    </Search>
  );
};

export default SearchContact;
