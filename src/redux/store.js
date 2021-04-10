import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';
// import authReducer from './auth/auth-reducers';
import authReducer from './auth/auth-reducers';

const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
