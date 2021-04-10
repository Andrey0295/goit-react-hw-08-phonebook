/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = userData => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', userData)
    .then(responce => dispatch(authActions.registerSuccess(responce.data)))
    .catch(error => dispatch(authActions.registerError(error.message)));
};

export default {
  register,
};
