import { useState } from 'react';

const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, changeHandler, setValue };
};

export default useInput;
