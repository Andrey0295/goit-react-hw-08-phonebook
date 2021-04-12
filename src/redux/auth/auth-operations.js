/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = registerData => dispatch => {
  dispatch(authActions.registerRequest());

  axios
    .post('/users/signup', registerData)
    .then(responce => {
      token.set(responce.data.token);
      dispatch(authActions.registerSuccess(responce.data));
    })
    .catch(error => dispatch(authActions.registerError(error.message)));
};

const login = loginData => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', loginData)
    .then(responce => {
      token.set(responce.data.token);
      dispatch(authActions.loginSuccess(responce.data));
    })
    .catch(error => dispatch(authActions.loginError(error.message)));
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistToken },
  } = getState();
  if (!persistToken) {
    return;
  }

  token.set(persistToken);
  dispatch(authActions.getCurrentUserRequest);

  axios
    .get('/users/current')
    .then(responce =>
      dispatch(authActions.getCurrentUserSuccess(responce.data)),
    )
    .catch(error => dispatch(authActions.getCurrentUserError(error.message)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
