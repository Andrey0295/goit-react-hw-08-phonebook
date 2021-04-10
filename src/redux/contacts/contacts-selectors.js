/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.phonebook.contacts;

const getFilterValue = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilterValue],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getAllContacts,
  getFilterValue,
  getVisibleContacts,
};
