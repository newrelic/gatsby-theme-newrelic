import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, placeholder, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextInput;
