/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import actions from './contacts-actions';

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest);

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(({ message }) => dispatch(actions.fetchContactsError(message)));
};

const addContact = ({ name, number }) => dispatch => {
  const contact = { name, number };

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(({ message }) => dispatch(actions.addContactError(message)));
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(({ message }) => dispatch(actions.deleteContactError(message)));
};

export default { addContact, deleteContact, fetchContacts };
