import React from 'react';

const TextInput = ({ name, label, placeholder, onChange, value }) => {
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
  </div>;
};

export default TextInput;
