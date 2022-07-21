import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const SelectInline = ({ disabled, className, label, ...props }) => (
  <div
    css={css`
      margin-top: 16px;
      display: flex;
      position: relative;

      &::after {
        content: '';
        justify-self: end;
        position: absolute;
        width: 1rem;
        right: 1rem;
        height: 0.5rem;
        -webkit-clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
        background-color: var(--primary-text-color);
        top: 1.5rem;
      }
      
      .dark-mode & {
        background-color: var(--secondary-background-color);
      }
      
    `}
    className={className}
  >
    <label
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
    </label>
    <select
      disabled={disabled}
      css={css`
        appearance: none;
        background: var(--primary-background-color);
        border-radius: 8px;
        border: 1px solid #0095a9;
        padding: 1.1875rem 1rem;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        line-height: 1;
        outline: none;
        color: var(--primary-text-color);
        transition: background-color 200ms, border-color 200ms;

        option {
          font: -moz-pull-down-menu;
          color: var(--system-text-primary-light);
        }
        
      `}
      {...props}
    />
  </div>
);

SelectInline.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default SelectInline;
