import { IContact } from '../types/contact';

export interface IUseModal {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface IUseForm {
  form: {
    name: string;
    email: string;
  };
  saveContact: () => void;
  changeFormHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initForm: (contact: IContact) => void;
}
