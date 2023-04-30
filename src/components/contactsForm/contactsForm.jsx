import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'; 
import css from './contactsForm.module.css';

export class ContactsForm extends Component {
    state = {
      name: '',
      number: '',
    };
  
    handleChange = e => {
      const target = e.target.name;
      this.setState({ [target]: e.target.value });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      const { name, number } = this.state;
      const { onSubmit } = this.props;
  
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      onSubmit(newContact);
  
      this.setState({ name: '', number: '' });
    };
  
    render() {
      const { name, number } = this.state;
      return (
        <form onSubmit={this.handleSubmit} className={css.form}>
          <label>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={number}
            />
          </label>
          <button type="submit">Add contacts</button>
        </form>
      );
    }
  }
  
  ContactsForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };