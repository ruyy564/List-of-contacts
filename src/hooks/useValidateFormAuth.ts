import useTypedSelector from './useTypedSelector';
import { useEffect } from 'react';
import { EMAIL_REG_EXP } from '../config/constants';
import { IFormUser } from '../types/user';
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

  const isValidateForm = ({ email, password }: IFormUser) => {
    let validate = true;

    if (isEmpty(email)) {
      validate = false;
      addError('Email is required');
    }

    if (isEmpty(password)) {
      validate = false;
      addError('Password is required');
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
