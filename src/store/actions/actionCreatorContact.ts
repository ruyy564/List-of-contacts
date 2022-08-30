import axios from 'axios';
import { Dispatch } from 'redux';
import { IContact, ContactAction } from '../../types/contact';
import { URL } from '../../config/constants';

export const addContact = (payload: IContact) =>
  async function (dispatch: Dispatch) {
    try {
      const response = await axios.post(`${URL}contacts`, payload);
      dispatch({
        type: ContactAction.ADD_CONTACT,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const editContact = (payload: IContact) =>
  async function (dispatch: Dispatch) {
    try {
      const response = await axios.put(`${URL}contacts/${payload.id}`, payload);
      dispatch({
        type: ContactAction.EDIT_CONTACT,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const deleteContact = (payload: IContact) =>
  async function (dispatch: Dispatch) {
    try {
      const response = await axios.delete(`${URL}contacts/${payload.id}`);
      dispatch({
        type: ContactAction.DELETE_CONTACT,
        payload: payload,
      });
    } catch (e) {
      console.log(e);
    }
  };

export const getContacts = () =>
  async function (dispatch: Dispatch) {
    try {
      const response = await axios.get(`${URL}contacts`);
      dispatch({
        type: ContactAction.GET_CONTACTS,
        payload: response.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
