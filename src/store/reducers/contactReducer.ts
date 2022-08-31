import {
  IContactState,
  IContactAction,
  ContactAction,
} from '../../types/contact';

const initialState: IContactState = {
  contacts: [],
  error: null,
  loading: false,
};

const contactRenderer = (
  state = initialState,
  action: IContactAction
): IContactState => {
  switch (action.type) {
    case ContactAction.FETCH_GET_CONTACTS:
      return { contacts: [], error: null, loading: true };
    case ContactAction.FETCH_GET_CONTACTS_SUCCESS:
      return { contacts: [...action.payload], error: null, loading: false };
    case ContactAction.ADD_CONTACT_SUCCESS:
      return {
        error: null,
        loading: false,
        contacts: [...state.contacts, action.payload],
      };
    case ContactAction.EDIT_CONTACT_SUCCESS:
      const contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return { ...action.payload };
        }

        return { ...contact };
      });

      return { error: null, loading: false, contacts };
    case ContactAction.DELETE_CONTACT_SUCCESS:
      const filtered = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );

      return { ...state, contacts: [...filtered] };
    case ContactAction.FETCH_GET_CONTACTS_ERROR:
      return { contacts: [], error: action.payload, loading: false };
    case ContactAction.ADD_CONTACT_ERROR ||
      ContactAction.EDIT_CONTACT_ERROR ||
      ContactAction.DELETE_CONTACT_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default contactRenderer;
