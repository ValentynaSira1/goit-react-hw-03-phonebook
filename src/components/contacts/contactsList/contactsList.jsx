import PropTypes from 'prop-types';
import { ContactsListItem } from '../contactsListItem/contactsListItem';
import css from './contactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contacts__box}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};