export interface IContact {
  id: number;
  name: string;
  email: string;
}

export interface IContactAction {
  type: string;
  payload: any;
}

export interface IContactState {
  contacts: IContact[];
  error: null | string;
  loading: boolean;
}

export enum ContactAction {
  ADD_CONTACT = 'ADD_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT',
  GET_CONTACTS = 'GET_CONTACTS',
}
