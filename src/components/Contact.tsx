import {Typography,Stack,ButtonGroup} from "@mui/material";
import ButtonEdit from './ButtonEdit';
import ButtonDelete from './ButtonDelete';

interface IContact{
    contact:{
        id:number,
        name:string,
        email:string
    },
    handleOpen:()=>void
}

 const Contact=({contact,handleOpen}:IContact)=>{
    return (
        <Stack direction="row" spacing={2} justifyContent={'space-between'} alignItems={'center'} p={2} mt={2}>
            <Typography variant="h6" component="span">{contact.name}</Typography>
            <Typography variant="h6" component="span">{contact.email}</Typography>
            <ButtonGroup >
                <ButtonEdit onClick={handleOpen}/>
                <ButtonDelete/>
            </ButtonGroup>
        </Stack>
    )
}

export default Contact;