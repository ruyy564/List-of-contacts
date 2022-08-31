import { useState } from 'react';
import useActions from '../hooks/useActions';
import useValidateFormAuth from './useValidateFormAuth';

const useFormAuth = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { fetchLogin } = useActions();
  const { clearError, isValidateForm, errorValidation } = useValidateFormAuth();

  const changeFormHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const login = () => {
    clearError();

    if (isValidateForm({ ...form })) {
      fetchLogin(form);
    }
  };

  return { form, changeFormHandler, login, errorValidation };
};

export default useFormAuth;
