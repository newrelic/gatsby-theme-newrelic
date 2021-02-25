import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from '../Icon';
import Link from '../Link';

const Result = ({ result, selected, onSelect }) => {
  return (
    <Link
      to={result.url}
      role="option"
      aria-selected={selected}
      tabIndex={-1}
      css={css`
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 0.5rem;
        text-decoration: none;
        cursor: pointer;
        padding: 0.5rem var(--horizontal-spacing);
        transition: background-color 0.2s ease-out;

        &:not(:last-child) {
          border-bottom: 1px solid var(--border-color);
        }

        ${selected &&
        css`
          outline: none;
          background: var(--color-neutrals-100);

          .dark-mode & {
            background: var(--color-dark-100);
          }

          svg {
            visibility: visible;
          }
        }`}
      `}
      onMouseOver={onSelect}
    >
      <div>
        <h3
          css={css`
            font-size: 1rem;
            margin-bottom: 0.25rem;

            em {
              font-size: inherit;
            }
          `}
          dangerouslySetInnerHTML={{ __html: result.highlight.title }}
        />
        <p
          css={css`
            color: var(--accent-text-color);
            font-size: 0.75rem;
          `}
        >
          {result.breadcrumb}
        </p>
      </div>
      <Icon
        name="fe-corner-down-left"
        size="1rem"
        css={css`
          align-self: center;
          visibility: hidden;
          color: var(--primary-text-color);
        `}
      />
    </Link>
  );
};

Result.propTypes = {
  result: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default Result;
