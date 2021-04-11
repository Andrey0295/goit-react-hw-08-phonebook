/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const register = registerData => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', registerData)
    .then(responce => dispatch(authActions.registerSuccess(responce.data)))
    .catch(error => dispatch(authActions.registerError(error.message)));
};

const login = loginData => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', loginData)
    .then(responce => dispatch(authActions.loginSuccess(responce.data)))
    .catch(error => dispatch(authActions.loginError(error.message)));
};

export default {
  register,
  login,
};
