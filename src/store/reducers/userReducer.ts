import { IUserState, IUserAction, UserAction } from '../../types/user';

const initialState: IUserState = {
  user: null,
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
