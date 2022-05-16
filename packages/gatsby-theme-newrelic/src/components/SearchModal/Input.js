import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Button from '../Button';
import Icon from '../Icon';
import Spinner from '../Spinner';
import Dropdown from '../Dropdown';
import Filters from './Filter';

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
    const flattenedFilters = filters.flatMap(
      ({ defaultFilters }) => defaultFilters
    );
    return (
      <div
        width={width}
        className={className}
        style={style}
        css={css`
          --icon-size: 1.5rem;

          position: relative;
          width: 100%;
        `}
      >
        <Icon
          css={css`
            position: absolute;
            left: var(--horizontal-spacing);
            top: 50%;
            transform: translateY(-50%);
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
              background: var(--secondary-background-color);
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
                  css={css`
                    color: var(--accent-text-color);
                    border: green;
                    background: transparent;
                    margin: 0;
                    padding: 0.5rem;
                    outline: none;
                    margin-right: 1rem;
                    ${flattenedFilters?.find(
                      (filter) => filter?.isSelected === true
                    ) &&
                    `
                    color: var(--brand-button-primary-accent);
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
                  <div
                    css={css`
                      display: flex;
                      flex-direction: row;
                    `}
                  >
                    {filters?.map(({ type, defaultFilters }) => (
                      <div key={type}>
                        <h6
                          css={css`
                            padding: 0.25rem;
                          `}
                        >
                          {type
                            ?.split(/(?=[A-Z])/)
                            .join(' ')
                            .toUpperCase()}
                        </h6>
                        <Filters
                          key={type}
                          onClick={(name) => onFilter(name)}
                          filters={defaultFilters}
                        />
                      </div>
                    ))}
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            )}
            <Button
              variant={Button.VARIANT.PLAIN}
              size={Button.SIZE.MEDIUM}
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

// filters = [{type, filters}, ]

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
