import {Modal,Stack} from "@mui/material";
import {style} from '../muiComponent/Style'

interface IModalContact{
    children:React.ReactNode,
    open:boolean,
    handleClose:()=>void
  }

const ModalContact =({children,open,handleClose}:IModalContact)=>{
    return (
        <Modal open={open} onClose={handleClose}>
            <Stack sx={style} direction="column" spacing={2} p={2} mt={2}>{children}</Stack>
        </Modal>
    )
}

export default ModalContact;