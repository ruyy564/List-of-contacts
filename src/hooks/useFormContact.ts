import { useState } from 'react';
import useActions from './useActions';
import { IContact } from '../types/contact';
import useValidateFormContact from './useValidateFormContact';

const useFormContact = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState<null | number>(null);
  const { editContact, addContact } = useActions();
  const { clearError, isValidateForm, errorValidation } =
    useValidateFormContact();

  const changeFormHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const saveContact = () => {
    clearError();

    if (!isValidateForm(form)) {
      return;
    }

    if (editId) {
      editContact({ ...form, id: editId });
    } else {
      addContact({ ...form, id: Date.now() });
    }

    clearForm();
  };

  const initForm = (contact: IContact) => {
    setForm({ ...contact });
    setEditId(contact.id);
  };

  const clearForm = () => {
    setForm({ name: '', email: '' });
    setEditId(null);
  };

  return {
    form,
    saveContact,
    changeFormHandler,
    initForm,
    clearForm,
    errorValidation,
    editId,
  };
};

export default useFormContact;
