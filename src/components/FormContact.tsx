import {Button,TextField,Typography,ButtonGroup} from "@mui/material";
import Modal from './Modal';

interface IFormContact{
    open: boolean,
    handleClose:()=>void
  }

const FormContact=({open,handleClose}:IFormContact)=>{
    return (
        <Modal open={open} handleClose={handleClose}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Input a data about new contact
            </Typography>
            <TextField id="outlined-name" label="Name" fullWidth />
            <TextField id="outlined-mail" label="Email" fullWidth />
            <ButtonGroup >
                <Button variant="contained" fullWidth  onClick={handleClose} >Accept</Button>
                <Button variant="contained" fullWidth  onClick={handleClose} color='error'>Cancel</Button>
            </ButtonGroup>
        </Modal>
    )
}

export default FormContact;