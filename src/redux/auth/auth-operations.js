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
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.registerSuccess(data));
    })
    .catch(({ message }) => dispatch(authActions.registerError(message)));
};

const login = loginData => dispatch => {
  dispatch(authActions.loginRequest());

  axios
    .post('/users/login', loginData)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(({ message }) => dispatch(authActions.loginError(message)));
};

const logout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(({ message }) => dispatch(authActions.logoutError(message)));
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
    .then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(({ message }) => dispatch(authActions.getCurrentUserError(message)));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
