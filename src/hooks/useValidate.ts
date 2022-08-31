import { useState } from 'react';
import { isEmpty, testRegExp } from '../helpers/stringMethods';
import { EMAIL_REG_EXP } from '../config/constants';
import { Validate } from '../types/validate';

const useValidate = (value: string, validators: any) => {
  const [errors, setErrors] = useState<string[]>([]);

  const addError = (message: string) => {
    setErrors((prev) => [...prev, message]);
  };

  const clearErrors = () => {
    setErrors([]);
  };

  const validate = () => {
    let isValid = true;

    for (let validator in validators) {
      switch (validator) {
        case Validate.IS_EMPTY:
          if (validators[validator] && isEmpty(value)) {
            addError('Field is required');
            isValid = false;
          }

          break;
        case Validate.EMAIL:
          if (validators[validator] && testRegExp(value, EMAIL_REG_EXP)) {
            addError('Email is incorrect');
            isValid = false;
          }

          break;
      }
    }

    return isValid;
  };

  return { errors, validate, clearErrors };
};

export default useValidate;
