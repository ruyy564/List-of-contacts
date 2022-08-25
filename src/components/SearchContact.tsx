import SearchIcon from '@mui/icons-material/Search';
import {Search,SearchIconWrapper,StyledInputBase} from '../muiComponent/Search';

const SearchContact=()=>{
    return (
    <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
    </Search>
    )
}

export default SearchContact;