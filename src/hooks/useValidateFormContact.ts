import useTypedSelector from './useTypedSelector';
import { useEffect } from 'react';
import { EMAIL_REG_EXP } from '../config/constants';
import { IFormContact } from '../types/contact';
import { isEmpty, testRegExp } from '../helpers/stringMethods';
import useError from './useError';

const useValidateFormAuth = () => {
  const { error } = useTypedSelector((state) => state.auth);
  const { addError, errorValidation, clearError } = useError();

  useEffect(() => {
    if (error) {
      addError(error);
    }
  }, [error]);

  const isValidateForm = ({ name, email }: IFormContact) => {
    let validate = true;

    if (isEmpty(name)) {
      validate = false;
      addError('Name is required');
    }

    if (isEmpty(email)) {
      validate = false;
      addError('Email is required');
    }

    if (testRegExp(email, EMAIL_REG_EXP)) {
      validate = false;
      addError('Email is incorrect');
    }

    return validate;
  };

  return { isValidateForm, errorValidation, clearError };
};

export default useValidateFormAuth;
