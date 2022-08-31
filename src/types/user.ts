interface IUserPayload {
  accessToken: string;
  id: number;
  email: string;
}

export interface IFormUser {
  email: string;
  password: string;
}
export interface IUserState {
  user: IUserPayload | null;
  error: null | string;
}

export enum UserAction {
  FETCH_LOGIN = 'FETCH_LOGIN',
  FETCH_LOGIN_SUCCESS = 'LOGIN_SUCCES',
  FETCH_LOGIN_ERROR = 'LOGIN_ERROR',
  FETCH_LOGOUT = 'LOGOUT',
}

interface IFetchLogin {
  type: UserAction.FETCH_LOGIN;
}

interface IFetchLoginSuccess {
  type: UserAction.FETCH_LOGIN_SUCCESS;
  payload: IUserPayload;
}

interface IFetchLoginError {
  type: UserAction.FETCH_LOGIN_ERROR;
  payload: string;
}

interface IFetchLogout {
  type: UserAction.FETCH_LOGOUT;
}

export type IUserAction =
  | IFetchLogout
  | IFetchLoginError
  | IFetchLoginSuccess
  | IFetchLogin;
