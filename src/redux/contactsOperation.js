import axios from 'axios';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contactsAction';

axios.defaults.baseURL = '';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContacts = contact => async dispatch => {
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactsSuccess(id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};
