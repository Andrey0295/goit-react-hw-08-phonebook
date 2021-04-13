import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import ContactListItem from './ContactListItem/ContactListItem';

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul>
      {contactsData.map(({ name, id, number }) => (
        <ContactListItem
          name={name}
          number={number}
          key={id}
          contactId={id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactsData: PropTypes.array,
};

ContactList.defaultProps = {
  contactsData: [],
};

const mapStateToProps = state => ({
  contactsData: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: contactId => dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
