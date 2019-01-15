import React from 'react';
import PropTypes from 'prop-types';

const Err = ({ error }) => (
  <p>
    {`There was an error: ${error}`}
  </p>
);

Err.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Err;
