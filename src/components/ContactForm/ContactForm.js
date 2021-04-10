import React, { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

import contactsOperations from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = e => {
    const { name } = this.state;
    const { allContacts, onSubmit } = this.props;
    e.preventDefault();

    allContacts.filter(contact => contact.name === name).length > 0
      ? alert(`${name} is already in contacts`)
      : onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onFormSubmit} className={styles.contactForm}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          onChange={this.onInputChange}
          id={this.nameInputId}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          className={styles.formInput}
          type="number"
          name="number"
          value={number}
          onChange={this.onInputChange}
          id={this.numberInputId}
        />
        <button type="submit" className={styles.submitBtn}>
          Add contacts
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  allContacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
