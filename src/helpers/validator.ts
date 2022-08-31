import { Validator } from '../types/validation';

export const emailVal = {
  [Validator.IS_EMPTY]: true,
  [Validator.EMAIL]: true,
};

export const passwordVal = {
  [Validator.IS_EMPTY]: true,
};

export const nameVal = {
  [Validator.IS_EMPTY]: true,
};
