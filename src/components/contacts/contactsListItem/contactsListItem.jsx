import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './contactsListItem.module.css';

export class ContactsListItem extends Component {
  render() {
    const { name, number, deleteContact, id } = this.props;

    return (
      <li className={css.contacts__item}>
        {name}: {number}
        <button
          type="button"
          onClick={() => deleteContact(id)}
          className={css.button}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};