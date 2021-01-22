import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ICONS = {
  FILTER: 'fe-filter',
  SEARCH: 'fe-search',
};

const SearchInput = forwardRef(
  (
    {
      onClear,
      onSubmit,
      value,
      width,
      size = 'medium',
      className,
      style,
      iconName = 'fe-search',
      ...props
    },
    ref
  ) => {
    const handleClick = (e) => {
      e.preventDefault();
      onClear();
    };
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          return onClear?.();
        case 'Enter':
          return onSubmit?.(value);
        default:
        // do nothing
      }
    };

    return (
      <div
        width={width}
        className={className}
        style={style}
        css={css`
          position: relative;
          width: ${(props) => props.width || '100%'};
          ${size && styles.size[size].container}
        `}
      >
        <Icon
          css={css`
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
          `}
          name={iconName}
        />
        <input
          ref={ref}
          value={value}
          {...props}
          type="text"
          onKeyDown={handleKeyDown}
          css={css`
            width: 100%;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            background: var(--primary-background-color);
            color: var(--primary-text-color);
            transition: 0.15s ease-out;
            line-height: 1;
            ${size && styles.size[size].input}

            &:focus {
              outline: none;
              border: 1px solid rgba(0, 126, 138, 0.6);
              box-shadow: 0 0 0 4px rgba(0, 126, 138, 0.1);
            }
          `}
        />
        {value && onClear && (
          <button
            onClick={handleClick}
            css={css`
              right: 1rem;
              top: 50%;
              transform: translateY(-50%);
              &:hover {
                cursor: pointer;
              }

              position: absolute;
              background-color: transparent;
              border: none;
              margin: 0;
              padding: 0;
              outline: none;
              ${size && styles.size[size].button}
            `}
            onKeyDown={handleKeyDown}
            type="button"
          >
            <Icon
              name="fe-x"
              css={css`
                display: block;
              `}
            />
          </button>
        )}
      </div>
    );
  }
);

SearchInput.propTypes = {
  className: PropTypes.string,
  onClear: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  style: PropTypes.object,
  iconName: PropTypes.oneOf(Object.values(ICONS)),
};

SearchInput.SIZE = SIZES;
SearchInput.ICONS = ICONS;

export default SearchInput;

const styles = {
  size: {
    [SIZES.SMALL]: {
      input: css`
        font-size: 0.75rem;
        padding: 0.25rem calc(1.5rem + var(--icon-size));
      `,
      container: css`
        --icon-size: 0.75rem;
      `,
    },
    [SIZES.MEDIUM]: {
      input: css`
        font-size: 0.875rem;
        padding: 0.5rem calc(1.5rem + var(--icon-size));
      `,
      container: css`
        --icon-size: 1rem;
      `,
    },
    [SIZES.LARGE]: {
      input: css`
        font-size: 1.25rem;
        padding: 1rem calc(1.5rem + var(--icon-size));
      `,
      container: css`
        --icon-size: 1.5rem;
      `,
    },
  },
};
