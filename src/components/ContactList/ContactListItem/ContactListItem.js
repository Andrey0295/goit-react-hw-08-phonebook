import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, onDelete, contactId }) => {
  return (
    <li className={styles.listItem}>
      {name}: {number}
      <button
        type="button"
        className={styles.deleteBtn}
        onClick={() => onDelete(contactId)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,

  onDelete: PropTypes.func.isRequired,
};

ContactListItem.defaultProps = {
  name: '',
  number: '',
};

export default ContactListItem;
