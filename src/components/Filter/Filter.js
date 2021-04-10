import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import styles from './Filter.module.css';

const Filter = ({ filterValue, onChangeFilter }) => {
  const filterInputId = shortid.generate();
  return (
    <>
      <label htmlFor={filterInputId}>Find contact by name</label>
      <input
        className={styles.filterInput}
        type="text"
        value={filterValue}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  filterValue: '',
};

const mapStateToProps = state => ({
  filterValue: contactsSelectors.getFilterValue(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
