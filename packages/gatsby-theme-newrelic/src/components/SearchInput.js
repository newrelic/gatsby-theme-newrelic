import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';

import Icon from './Icon';
import Link from './Link';
import composeHandlers from '../utils/composeHandlers';
import useSyncedRef from '../hooks/useSyncedRef';
import useKeyPress from '../hooks/useKeyPress';

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const ICONS = {
  FILTER: 'fe-filter',
  SEARCH: 'fe-search',
};

const ICON_ALIGNMENTS = {
  LEFT: 'left',
  RIGHT: 'right',
};

const HORIZONTAL_SPACING = {
  [SIZES.SMALL]: '0.5rem',
  [SIZES.MEDIUM]: '1rem',
  [SIZES.LARGE]: '1rem',
};

const SearchInput = forwardRef(
  (
    {
      alignIcon = 'left',
      className,
      focusWithHotKey,
      iconName = 'fe-search',
      isIconClickable = false,
      onBlur,
      onClear,
      onFocus,
      onSubmit,
      onMove,
      setValue,
      size = 'medium',
      showShortcut = false,
      value,
      width,
      ...props
    },
    ref
  ) => {
    const {
      site: {
        layout: { mobileBreakpoint },
      },
    } = useStaticQuery(graphql`
      query SearchInputQuery {
        site {
          layout {
            mobileBreakpoint
          }
        }
      }
    `);
    const inputRef = useSyncedRef(ref);
    const [showHotKey, setShowHotkey] = useState(Boolean(focusWithHotKey));

    useKeyPress(focusWithHotKey, (e) => {
      e.preventDefault();

      inputRef.current.focus();
    });

    return (
      <div
        width={width}
        className={className}
        css={css`
          --horizontal-spacing: ${HORIZONTAL_SPACING[size]};

          border: var(--search-input-border);
          border-radius: 4px;
          position: relative;
          width: ${width || '100%'};
          ${size && styles.size[size].container}
        `}
      >
        {isIconClickable ? (
          <Link
            to={`search-results/?query=${value}&page=1`}
            css={css`
              color: var(--brand-button-primary-accent);
              &:hover {
                color: var(--brand-button-primary-accent-hover);
              }
            `}
          >
            <Icon
              css={css`
                position: absolute;
                ${alignIcon === 'right'
                  ? css`
                      right: var(--horizontal-spacing);
                    `
                  : css`
                      left: var(--horizontal-spacing);
                    `}
                top: 50%;
                transform: translateY(-50%);
              `}
              name={iconName}
              size={styles.size[size].icon}
            />
          </Link>
        ) : (
          <Icon
            css={css`
              position: absolute;
              ${alignIcon === 'right'
                ? css`
                    right: var(--horizontal-spacing);
                  `
                : css`
                    left: var(--horizontal-spacing);
                  `}
              top: 50%;
              transform: translateY(-50%);
            `}
            name={iconName}
            size={styles.size[size].icon}
          />
        )}

        <input
          ref={inputRef}
          value={value}
          {...props}
          type="text"
          onInput={(e) => setValue(e.target.value)}
          onFocus={composeHandlers(onFocus, () => setShowHotkey(false))}
          onBlur={composeHandlers(onBlur, () =>
            setShowHotkey(Boolean(focusWithHotKey))
          )}
          onKeyDown={(e) => {
            switch (e.key) {
              case 'ArrowUp':
                onMove('prev');
                break;
              case 'ArrowDown':
                onMove('next');
                break;
              case 'Escape':
                // without this, if the user is in fullscreen on Mac Firefox,
                // Esc will exit fullscreen as well.
                e.preventDefault();
                onClear && onClear();
                e.target.blur();
                break;
              case 'Enter':
                return onSubmit?.(value);
              default:
              // do nothing
            }
          }}
          css={css`
            width: 100%;
            border: 1px solid var(--primary-text-color);
            border-radius: 4px;
            background: var(--secondary-background-color);
            transition: 0.15s ease-out;
            line-height: 1;
            color: var(--primary-text-color);
            ${alignIcon === 'left'
              ? css`
                  padding-left: calc(
                    var(--horizontal-spacing) + 0.5rem + var(--icon-size)
                  );
                  padding-right: var(--horizontal-spacing);
                `
              : css`
                  padding-left: var(--horizontal-spacing);
                  padding-right: calc(
                    var(--horizontal-spacing) + 0.5rem + var(--icon-size)
                  );
                `}

            ${size && styles.size[size].input}

            &:focus {
              outline: none;
              border: 1px solid rgba(0, 126, 138, 0.6);
              box-shadow: 0 0 0 4px rgba(0, 126, 138, 0.1);
            }
          `}
        />
        {showShortcut && (
          <kbd
            css={css`
              border: 1px solid currentColor;
              border-radius: 4px;
              display: inline-grid;
              line-height: 1.1;
              margin-right: 0.25rem;
              padding: 2px 4px;
              place-items: center;
              position: absolute;
              right: 0.5rem;
              top: 50%;
              transform: translateY(-50%);

              @media (max-width: ${mobileBreakpoint}) {
                display: none;
              }
            `}
          >
            /
          </kbd>
        )}
        {onClear && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onClear();
            }}
            css={css`
              display: none;
              right: ${alignIcon === 'right'
                ? ' calc(var(--horizontal-spacing) + 0.5rem + var(--icon-size))'
                : 'var(--horizontal-spacing)'};
              top: 50%;
              transform: translateY(-50%);
              &:hover {
                cursor: pointer;
              }

              color: var(--primary-text-color);
              border: none;
              background: transparent;
              position: absolute;
              margin: 0;
              padding: 0;
              outline: none;
              z-index: 123;

              @media (max-width: ${mobileBreakpoint}) {
                display: block;
              }
            `}
            type="button"
          >
            <Icon
              name="fe-x"
              css={css`
                display: block;
              `}
              size={styles.size[size].icon}
            />
          </button>
        )}
        {showHotKey && (
          <span
            className="search-hotkey"
            css={css`
              position: absolute;
              right: var(--horizontal-spacing);
              top: 50%;
              transform: translateY(-50%);
              border: 1px solid var(--border-color);
              line-height: 1rem;
              text-align: center;
              background: var(--secondary-background-color);

              ${styles.size[size].hotkey}
            `}
          >
            {focusWithHotKey}
          </span>
        )}
      </div>
    );
  }
);

SearchInput.propTypes = {
  alignIcon: PropTypes.oneOf(Object.values(ICON_ALIGNMENTS)),
  className: PropTypes.string,
  focusWithHotKey: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(ICONS)),
  isIconClickable: PropTypes.bool,
  onBlur: PropTypes.func,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onMove: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)),
  showShortcut: PropTypes.bool,
  value: PropTypes.string,
  width: PropTypes.string,
};

SearchInput.SIZE = SIZES;
SearchInput.ICONS = ICONS;
SearchInput.ICON_ALIGNMENT = ICON_ALIGNMENTS;

export default SearchInput;

const styles = {
  size: {
    [SIZES.SMALL]: {
      input: css`
        font-size: 0.75rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      `,
      container: css`
        --icon-size: 0.75rem;
      `,
      hotkey: css`
        border-radius: 0.125rem;
        font-size: 0.675rem;
        padding: 0.0625rem 0.3125rem;
      `,
      icon: '0.75rem',
    },
    [SIZES.MEDIUM]: {
      input: css`
        font-size: 0.875rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      `,
      container: css`
        --icon-size: 1rem;
      `,
      hotkey: css`
        border-radius: 0.125rem;
        font-size: 0.875rem;
        padding: 0.125rem 0.375rem;
      `,
      icon: '0.875rem',
    },
    [SIZES.LARGE]: {
      input: css`
        font-size: 1.25rem;
        font-weight: 500;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      `,
      container: css`
        --icon-size: 1.5rem;
      `,
      hotkey: css`
        border-radius: 0.125rem;
        font-size: 1.25rem;
        padding: 0.125rem 0.4375rem;
      `,
      icon: '1.25rem',
    },
  },
};
