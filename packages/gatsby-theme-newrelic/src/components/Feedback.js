import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ onPositiveClick, onNegativeClick, message }) => (
  <div>
    <h2>{message}</h2>
    <button type="button" onClick={onPositiveClick}>
      ya
    </button>
    <button type="button" onClick={onNegativeClick}>
      na
    </button>
  </div>
);

Feedback.propTypes = {
  onPositiveClick: PropTypes.func.isRequired,
  onNegativeClick: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Feedback.defaultProps = {
  message: 'Was this helpful?',
};

export default Feedback;
