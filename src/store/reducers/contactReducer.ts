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
    case ContactAction.GET_CONTACTS:
      return { ...state, contacts: [...action.payload] };
    case ContactAction.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case ContactAction.EDIT_CONTACT:
      const contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return { ...action.payload };
        }

        return { ...contact };
      });
      return { ...state, contacts };
    case ContactAction.DELETE_CONTACT:
      const filtered = state.contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
      return { ...state, contacts: [...filtered] };
    default:
      return state;
  }
};

export default contactRenderer;
