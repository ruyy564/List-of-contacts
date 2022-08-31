import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction } from '../../types/user';
import {
  URL,
  KEY_USER,
  MESSAGE_EMAIL_PASSWORD_INCORRECT,
} from '../../config/constants';

interface IUser {
  email: string;
  password: string;
}

export const fetchLogin = (payload: IUser) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: UserAction.FETCH_LOGIN });
    const response = await axios.post(`${URL}login`, payload);
    const { accessToken, user } = response.data;

    dispatch({
      type: UserAction.FETCH_LOGIN_SUCCESS,
      payload: { ...user, accessToken },
    });
    localStorage.setItem(KEY_USER, JSON.stringify({ ...user, accessToken }));
  } catch (error) {
    dispatch({
      type: UserAction.FETCH_LOGIN_ERROR,
      payload: MESSAGE_EMAIL_PASSWORD_INCORRECT,
    });
  }
};

export const fetchLogout = () => {
  localStorage.removeItem(KEY_USER);

  return {
    type: UserAction.FETCH_LOGOUT,
  };
};
