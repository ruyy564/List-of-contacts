 import {useState} from 'react';

interface IUseModal{
    open:boolean,
    handleOpen:()=>void,
    handleClose:()=>void,
}

const useModals=():IUseModal=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return {open,handleOpen,handleClose};
}

export default useModals;