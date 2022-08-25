import {Button,AppBar,Toolbar,Typography} from "@mui/material";
import SearchContact from './SearchContact'

const Menu=()=>{
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Contacts
                </Typography>
                <SearchContact/>  
                <Button color="inherit" >Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Menu;