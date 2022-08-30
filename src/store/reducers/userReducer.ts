import { IUserState, IUserAction, UserAction } from '../../types/user';
import { KEY_USER } from '../../config/constants';

const user = localStorage.getItem(KEY_USER);
const initUser = user ? JSON.parse(user) : null;

const initialState: IUserState = {
  user: initUser,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case UserAction.FETCH_LOGIN:
      return { user: null, loading: true, error: null };
    case UserAction.FETCH_LOGIN_SUCCESS:
      return { loading: false, error: null, user: { ...action.payload } };
    case UserAction.FETCH_LOGIN_ERROR:
      return { loading: false, error: action.payload, user: null };
    case UserAction.FETCH_LOGOUT:
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export default userReducer;
