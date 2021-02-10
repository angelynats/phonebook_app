import { connect } from 'react-redux';
import * as contactsOperations from '../../../redux/contact/contactsOperations';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';

import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContactsWithFilter(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
