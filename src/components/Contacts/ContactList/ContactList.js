import { React, Component } from 'react';
// import PropTypes from 'prop-types';

import Contact from '../Contact/Contact';
import ContactFilter from '../ContactFilter/ContactFilterConstructor';

export default class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <>
        <h1>Contacts</h1>
        <ContactFilter />

        {contacts.length > 0 && (
          <ul>
            {contacts.map(contact => (
              <li key={contact.id}>
                <Contact uniqueKey={contact.id} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   filter: PropTypes.string,
//   onChangeFilter: PropTypes.func.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
