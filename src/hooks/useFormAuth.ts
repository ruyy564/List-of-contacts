import { useState } from 'react';
import useActions from '../hooks/useActions';

const useFormAuth = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { fetchLogin } = useActions();

  const changeFormHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const login = () => {
    fetchLogin(form);
  };

  return { form, changeFormHandler, login };
};

export default useFormAuth;
