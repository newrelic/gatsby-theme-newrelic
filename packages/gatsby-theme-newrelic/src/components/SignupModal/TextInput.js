import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

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
        css={css`
          width: 100%;
          background: var(--secondary-background-color);
          transition: 0.15s ease-out;
          line-height: 1;
          color: var(--primary-text-color);
          appearance: none;
          padding: 1.1875rem 1.5rem;
          border-radius: 0.25rem;
          border: 1px solid rgb(29 37 44);
          outline: none;
          font-family: inherit;
          font-size: inherit;
          line-height: 1.5rem;
        `}
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
