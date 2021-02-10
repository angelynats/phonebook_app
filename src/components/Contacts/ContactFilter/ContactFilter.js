import React from 'react';
import PropTypes from 'prop-types';

const ContactFilter = ({ filter = '', onChangeFilter }) => (
  <input
    type="text"
    value={filter}
    onChange={e => onChangeFilter(e.target.value)}
    placeholder="Type to filter contacts..."
  />
);

ContactFilter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
