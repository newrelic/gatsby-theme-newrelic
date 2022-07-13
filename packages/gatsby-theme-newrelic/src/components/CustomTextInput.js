import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';

const CustomTextInput = ({
  name,
  label,
  placeholder,
  onChange,
  value,
  toolTip,
}) => {
  return (
    <div
      css={css`
        margin-top: 16px;
        position: relative;
      `}
    >
      <label
        htmlFor={name}
        css={css`
          background-color: var(--primary-background-color);
          display: flex;
          font-weight: 600;
          padding: 0 8px;
          position: absolute;
          left: 10px;
          line-height: 1;
          top: -9px;
          z-index: 1;
        `}
      >
        {label}
        {toolTip && (
          <div
            css={css`
              position: relative;
            `}
          >
            <Icon
              name="info"
              css={css`
                margin-left: 0.5rem;

                .input-tooltip {
                  opacity: 1;
                }
              `}
              fill={'#0095a9'}
              stroke={'#0095a9'}
            />
            <p
              className={'input-tooltip'}
              css={css`
                background-color: tan;
                font-weight: 400;
                opacity: 0;
                position: absolute;
              `}
            >
              {toolTip}
            </p>
          </div>
        )}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        css={css`
          appearance: none;
          background: var(--primary-background-color);
          border-radius: 8px;
          border: 1px solid #0095a9;
          color: var(--primary-text-color);
          font-family: inherit;
          font-size: inherit;
          line-height: 1;
          outline: none;
          padding: 1.1875rem 1rem;
          width: 100%;
        `}
      />
    </div>
  );
};

CustomTextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  toolTip: PropTypes.string,
  value: PropTypes.string,
};

export default CustomTextInput;
