import {Button,Typography,Container,Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Menu from '../components/Menu'
import useModals from "../hooks/useModal";
import Contact from '../components/Contact';
import FormContact from '../components/FormContact';

const Contacts=()=>{
    const {open,handleClose,handleOpen} =useModals();
    const contacts:any[]=[{id:5,name: 'John', email: ''}];

    return(
      <Container >
        <Menu/>
        <Stack direction="row" spacing={2} mt={5} mb={5} justifyContent='center'>
          <Button variant="contained" size={'large'}   onClick={handleOpen} startIcon={<AddIcon />}>Add a new contact</Button>
        </Stack> 
        <Typography variant="h5" component="h3">My contacts:</Typography>
        {contacts.length===0&&<span>The list of contact is empty</span>}
        {contacts.map(contact=>(
          <Contact key={contact.id} contact={contact} handleOpen={handleOpen}/>
        ))} 
        <FormContact open={open} handleClose={handleClose}/>
      </Container>
    )
}

export default Contacts;