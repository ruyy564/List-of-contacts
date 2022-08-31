import { useState } from 'react';

const useError = () => {
  const [errorValidation, setErrorValidation] = useState<string[]>([]);

  const addError = (message: string) => {
    setErrorValidation((prev) => [...prev, message]);
  };

  const clearError = () => {
    setErrorValidation([]);
  };

  return { addError, errorValidation, clearError };
};

export default useError;
