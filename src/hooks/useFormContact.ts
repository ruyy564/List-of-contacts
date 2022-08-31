import useActions from '../hooks/useActions';
import { useEffect, useState } from 'react';
import { IContact } from '../types/contact';
import useInput from '../hooks/useInput';
import { emailVal, nameVal } from '../helpers/validator';
import useValidate from '../hooks/useValidate';

const useFormContact = (handleClose: () => void, initState: IContact) => {
  const { addContact, editContact } = useActions();
  const [editId, setEditId] = useState<null | number>(null);
  const email = useInput();
  const name = useInput();
  const emailValidator = useValidate(email.value, emailVal);
  const nameValidator = useValidate(name.value, nameVal);

  useEffect(() => {
    email.setValue(initState.email);
    name.setValue(initState.name);
    setEditId(initState.id);
  }, [initState, handleClose]);

  const clearErrors = () => {
    emailValidator.clearErrors();
    nameValidator.clearErrors();
  };

  const closeForm = () => {
    handleClose();
    clearErrors();
  };

  const saveContact = () => {
    clearErrors();
    const isEmailValid = emailValidator.validate();
    const isNameValid = nameValidator.validate();

    if (!isEmailValid || !isNameValid) {
      return;
    }

    if (editId) {
      editContact({ email: email.value, name: name.value, id: editId });
    } else {
      addContact({ email: email.value, name: name.value, id: Date.now() });
    }
    closeForm();
  };

  return {
    closeForm,
    nameValidator,
    emailValidator,
    name,
    email,
    saveContact,
  };
};

export default useFormContact;
