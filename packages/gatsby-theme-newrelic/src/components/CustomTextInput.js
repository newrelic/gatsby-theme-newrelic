import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';
import Link from './Link';
import Surface from './Surface';

const CustomTextInput = ({
  error = false,
  errorMessage,
  name,
  label,
  placeholder,
  onChange,
  value,
  toolTip,
  url,
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
          border-radius: 8px;
          display: flex;
          font-weight: 600;
          padding: 2px 8px;
          position: absolute;
          left: 10px;
          line-height: 1;
          top: -11px;
          z-index: 1;
        `}
      >
        {label}
        {toolTip && (
          <div
            css={css`
              padding-left: 0.5rem;
              position: relative;
            `}
          >
            <Icon
              name="fe-info"
              css={css`
                transform: scale(1.3);
                transition: transform 325ms;

                &:hover {
                  transform: scale(1.6);
                  transition: transform 325ms;
                }
                
                &:hover + .input-tooltip {
                    opacity: 1;
                    transition: opacity 325ms, transform 325ms;
                    transform: translate(10px, -10px);
                  }
                }
                `}
              height={48}
              width={48}
            />
            <Surface
              base={Surface.BASE.PRIMARY}
              className="input-tooltip"
              css={css`
                bottom: 8px;
                font-weight: 400;
                line-height: 1.25;
                left: 10px;
                min-width: 250px;
                opacity: 0;
                padding: 1rem;
                pointer-events: none;
                position: absolute;
                transition: opacity 325ms, transform 325ms;
              `}
            >
              {toolTip}
            </Surface>
          </div>
        )}
        {url && (
          <Link
            css={css`
              margin-left: 0.25rem;
              text-decoration: none;
            `}
            to={url.href}
          >
            {url.title}
          </Link>
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
          transition: background-color 200ms, border-color 200ms;
          width: 100%;

          ${error &&
          css`
            background-color: rgba(255, 0, 0, 0.25);
            border-color: #e60000;
            transition: background-color 200ms, border-color 200ms;
          `}
        `}
      />
      {error && errorMessage && (
        <p
          css={css`
            color: red;
          `}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

CustomTextInput.propTypes = {
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  toolTip: PropTypes.string,
  url: PropTypes.exact({
    href: PropTypes.string,
    title: PropTypes.string,
  }),
  value: PropTypes.string,
};

export default CustomTextInput;
