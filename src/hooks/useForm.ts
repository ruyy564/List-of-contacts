import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { IContact } from '../types/contact';

const useForm = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [editId, setEditId] = useState<null | number>(null);
  const { editContact, addContact } = useActions();

  const saveContact = () => {
    if (editId) {
      editContact({ ...form, id: editId });
      setEditId(null);
    } else {
      addContact({ ...form, id: Date.now() });
    }
    setForm({ name: '', email: '' });
  };

  const changeFormHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const initForm = (contact: IContact) => {
    setForm({ ...contact });
    setEditId(contact.id);
  };

  return { form, saveContact, changeFormHandler, initForm };
};

export default useForm;
