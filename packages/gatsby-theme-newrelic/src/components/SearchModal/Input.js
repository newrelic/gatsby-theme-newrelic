import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Button from '../Button';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Dropdown from '../Dropdown';

const Input = forwardRef(
  (
    {
      onClear,
      onSubmit,
      onFilter,
      filters,
      value,
      width,
      className,
      style,
      loading,
      onCancel,
      ...props
    },
    ref
  ) => {
    return (
      <div
        width={width}
        className={className}
        style={style}
        css={css`
          --icon-size: 1.5rem;

          position: relative;
          width: 100%;

          .dark-mode & {
            --icon-color: var(--color-dark-500);
          }
        `}
      >
        <Icon
          css={css`
            color: var(--color-neutrals-400);
            position: absolute;
            left: var(--horizontal-spacing);
            top: 50%;
            transform: translateY(-50%);

            .dark-mode & {
              color: var(--color-dark-400);
            }
          `}
          name="fe-search"
          size="1.5rem"
        />
        <input
          ref={ref}
          value={value}
          {...props}
          type="text"
          onKeyDown={(e) => {
            switch (e.key) {
              case 'Enter':
                return onSubmit?.(value);
              case 'ArrowUp':
              case 'ArrowDown':
                e.preventDefault();
                break;
              default:
              // do nothing
            }
          }}
          css={css`
            width: 100%;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--primary-text-color);
            transition: 0.15s ease-out;
            line-height: 1;
            font-size: 1.25rem;
            font-weight: 500;
            padding: 1rem
              calc(var(--horizontal-spacing) + 0.5rem + var(--icon-size));
            padding-right: 7.5rem;

            &:focus {
              outline: none;
            }

            .dark-mode & {
              background: var(--color-dark-050);
            }
          `}
        />
        {loading && (
          <Spinner
            inline
            size="1.25rem"
            css={css`
              position: absolute;
              top: 50%;
              right: var(--horizontal-spacing);
              transform: translateY(-50%);
            `}
          />
        )}
        {value && onClear && !loading && (
          <div
            css={css`
              display: flex;
              align-items: center;
              position: absolute;
              right: var(--horizontal-spacing);
              top: 50%;
              transform: translateY(-50%);
            `}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                onClear();
              }}
              css={css`
                color: var(--accent-text-color);
                border: none;
                background: transparent;
                margin: 0;
                padding: 0;
                outline: none;
                margin-right: 1rem;

                &:hover {
                  cursor: pointer;
                }
              `}
              type="button"
            >
              <Icon
                name="fe-x"
                css={css`
                  display: block;
                `}
                size="1.25rem"
              />
            </button>
            {filters && (
              <Dropdown align="right" closeOnClick={false}>
                <Dropdown.Toggle
                  style={css`
                    color: var(--accent-text-color);
                    border: green;
                    background: transparent;
                    margin: 0;
                    padding: 0.5rem;
                    outline: none;
                    margin-right: 1rem;
                    ${filters?.find((filter) => filter.isSelected === true) &&
                    `
                    color: var(--color-brand-600);
                    .dark-mode & {
                      color: var(--color-brand-200);
                    }
                    `}

                    &:hover {
                      cursor: pointer;
                    }
                  `}
                  chevron={false}
                  variant={Button.VARIANT.PLAIN}
                >
                  <Icon
                    name="fe-filter"
                    css={css`
                      display: block;
                    `}
                    size="1rem"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {filters.map((filter) => {
                    return (
                      <Dropdown.MenuItem
                        key={filter.name}
                        onClick={() => onFilter(filter.name)}
                        css={css`
                          margin-bottom: 0.15rem;
                          ${filter.isSelected &&
                          `color: var(--text-color);
                            cursor: pointer;
                            background: var(--color-neutrals-200);
                            border-radius: 0.25rem;

                            .dark-mode & {
                              background: var(--color-dark-200);
                            }`}
                        `}
                      >
                        <div
                          css={css`
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: baseline;
                            ${filter.isSelected && ``}
                          `}
                        >
                          <div
                            css={css`
                              text-transform: uppercase;
                              font-size: 0.625rem;
                            `}
                          >
                            {filter.name}
                          </div>
                          <div
                            css={css`
                              ${filter.isSelected
                                ? `animation-duration: 0.1s;
                                animation-name: fadein;
                                @keyframes fadein {
                                  from {
                                    opacity: 0;
                                  }
                                  to {
                                    opacity: 1;
                                  }
                                }
                              `
                                : `opacity: 0;`}
                            `}
                          >
                            <Icon size="0.625rem" name="fe-check" />
                          </div>
                        </div>
                      </Dropdown.MenuItem>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            )}
            <Button
              variant={Button.VARIANT.PLAIN}
              size={Button.SIZE.EXTRA_SMALL}
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  focusWithHotKey: PropTypes.string,
  onClear: PropTypes.func,
  onCancel: PropTypes.func,
  onFilter: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
  loading: PropTypes.bool,
};

export default Input;
