export enum Validator {
  IS_EMPTY = 'IS_EMPTY',
  EMAIL = 'EMAIL',
}

export interface IValidators {
  [Validator.IS_EMPTY]?: boolean;
  [Validator.EMAIL]?: boolean;
}
