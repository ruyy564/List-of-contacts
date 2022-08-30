import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction } from '../../types/user';

interface IUser {
  email: string;
  password: string;
}

export const fetchLogin = (payload: IUser) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: UserAction.FETCH_LOGIN });

    const response = await axios.post('http://localhost:3001/login', payload);
    const { accessToken, user } = response.data;

    dispatch({
      type: UserAction.FETCH_LOGIN_SUCCESS,
      payload: { ...user, accessToken },
    });
    localStorage.setItem('user', JSON.stringify({ ...user, accessToken }));
  } catch (error) {
    dispatch({
      type: UserAction.FETCH_LOGIN_ERROR,
      payload: 'Login/password is incorrect',
    });
  }
};

export const fetchLogout = () => {
  localStorage.removeItem('user');

  return {
    type: UserAction.FETCH_LOGOUT,
  };
};
