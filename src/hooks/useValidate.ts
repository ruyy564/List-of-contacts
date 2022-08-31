import { useState } from 'react';
import { isEmpty, testRegExp } from '../helpers/stringMethods';
import {
  EMAIL_REG_EXP,
  MESSAGE_EMAIL_INCORRECT,
  MESSAGE_FIELD_REQUIRED,
} from '../config/constants';
import { Validator } from '../types/validation';
import { IValidators } from '../types/validation';

const useValidate = (value: string, validators: IValidators) => {
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
        case Validator.IS_EMPTY:
          if (validators[validator] && isEmpty(value)) {
            addError(MESSAGE_FIELD_REQUIRED);
            isValid = false;
          }

          break;
        case Validator.EMAIL:
          if (validators[validator] && testRegExp(value, EMAIL_REG_EXP)) {
            addError(MESSAGE_EMAIL_INCORRECT);
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
