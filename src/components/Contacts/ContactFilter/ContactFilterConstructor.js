import { connect } from 'react-redux';
import * as contactActions from '../../../redux/contact/contactActions';
import * as contactsSelectors from '../../../redux/contact/contactsSelectors';
import ContactFilter from './ContactFilter';

const mapStateToProps = state => ({
  filter: contactsSelectors.getContactFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(contactActions.filterContacts(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
