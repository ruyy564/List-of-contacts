import axios from 'axios';
import { Dispatch } from 'redux';
import { IContact, ContactAction } from '../../types/contact';
import { URL } from '../../config/constants';

export const addContact = (payload: IContact) =>
  async function (dispatch: Dispatch) {
    try {
      const response = await axios.post(`${URL}contacts`, payload);

      dispatch({
        type: ContactAction.ADD_CONTACT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ContactAction.ADD_CONTACT_ERROR,
        payload: 'Can not to add contact',
      });
    }
  };

export const editContact = (payload: IContact) =>
  async function (dispatch: Dispatch) {
    try {
      const response = await axios.put(`${URL}contacts/${payload.id}`, payload);

      dispatch({
        type: ContactAction.EDIT_CONTACT_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ContactAction.EDIT_CONTACT_ERROR,
        payload: 'Can not to edit contact',
      });
    }
  };

export const deleteContact = (payload: IContact) =>
  async function (dispatch: Dispatch) {
    try {
      await axios.delete(`${URL}contacts/${payload.id}`);
      dispatch({
        type: ContactAction.DELETE_CONTACT_SUCCESS,
        payload: payload,
      });
    } catch (e) {
      dispatch({
        type: ContactAction.DELETE_CONTACT_ERROR,
        payload: 'Can not to delete contact',
      });
    }
  };

export const getContacts = () =>
  async function (dispatch: Dispatch) {
    try {
      dispatch({
        type: ContactAction.FETCH_GET_CONTACTS,
      });

      const response = await axios.get(`${URL}contacts`);
      setTimeout(() => {
        dispatch({
          type: ContactAction.FETCH_GET_CONTACTS_SUCCESS,
          payload: response.data,
        });
      }, 2000);
    } catch (e) {
      dispatch({
        type: ContactAction.FETCH_GET_CONTACTS_ERROR,
        payload: 'Can not to get contacts',
      });
    }
  };
