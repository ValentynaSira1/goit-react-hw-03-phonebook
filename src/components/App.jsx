import { Component } from 'react';
import { ContactsList } from '../components/contacts/contactsList/contactsList';
import { ContactsForm } from './contactsForm/contactsForm';
import { Filter } from './filter/filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts_book'));

    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts_book', JSON.stringify(this.state.contacts));
    }
  }
  
  addContact = newContact => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return toast.error(
        `${newContact.name} or ${newContact.number} is already in contacts`
      );
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter handleChange={this.changeFilter} value={this.state.filter} />
        <ContactsList
          contacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
        <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      </div>
    );
  }
}
