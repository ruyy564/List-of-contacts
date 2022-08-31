export enum ContactAction {
  ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS',
  ADD_CONTACT_ERROR = 'ADD_CONTACT_ERROR',
  EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS',
  EDIT_CONTACT_ERROR = 'EDIT_CONTACT_ERROR',
  DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR',
  FETCH_GET_CONTACTS = 'FETCH_GET_CONTACTS',
  FETCH_GET_CONTACTS_SUCCESS = 'FETCH_GET_CONTACTS_SUCCESS',
  FETCH_GET_CONTACTS_ERROR = 'FETCH_GET_CONTACTS_ERROR',
}

export interface IContact {
  id: number | null;
  name: string;
  email: string;
}

export interface IFormContact {
  name: string;
  email: string;
}

export interface IActionChangeContact {
  type:
    | ContactAction.ADD_CONTACT_SUCCESS
    | ContactAction.EDIT_CONTACT_SUCCESS
    | ContactAction.DELETE_CONTACT_SUCCESS;
  payload: IContact;
}

export interface IActionFetchGetContact {
  type: ContactAction.FETCH_GET_CONTACTS;
}

export interface IActionFetchGetContactSuccess {
  type: ContactAction.FETCH_GET_CONTACTS_SUCCESS;
  payload: IContact[];
}

export interface IActionError {
  type:
    | ContactAction.FETCH_GET_CONTACTS_ERROR
    | ContactAction.ADD_CONTACT_ERROR
    | ContactAction.DELETE_CONTACT_ERROR
    | ContactAction.EDIT_CONTACT_ERROR;
  payload: string;
}

export type IContactAction =
  | IActionFetchGetContact
  | IActionFetchGetContactSuccess
  | IActionError
  | IActionChangeContact;

export interface IContactState {
  contacts: IContact[];
  error: null | string;
  loading: boolean;
}
