import React, { Component } from 'react';
import { connect } from 'react-redux';

import contactsOperations from '../../redux/contacts/contacts-operations';

import Container from '../../components/Container/Container';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';

import styles from './ContactsView.module.css';

class ContactsView extends Component {
  componentDidMount() {
    const { fetchContacts } = this.props;
    fetchContacts();
  }
  render() {
    return (
      <Container>
        <div className={styles.mainBlock}>
          <div>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm onSubmit={this.handleContactsData} />
          </div>

          <div className={styles.contactsBlock}>
            <h1 className={styles.title}>Contacts</h1>

            <Filter />
            <ContactList />
          </div>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(ContactsView);
