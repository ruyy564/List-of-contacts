export const isEmpty = (str: string) => {
  return str.trim() === '';
};

export const testRegExp = (str: string, regExp: RegExp) => {
  return !regExp.test(str);
};
