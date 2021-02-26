import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Table = ({ className, children }) => (
  <div
    className={className}
    css={css`
      width: 100%;
      overflow-x: auto;
    `}
  >
    <table
      css={css`
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        text-align: left;

        td,
        th {
          min-width: 5rem;
          padding: 0.5rem 1rem;
          vertical-align: top;
        }

        tr {
          border: 1px solid transparent;
        }

        thead + tbody tr:first-child {
          border-top: 3px solid var(--color-brand-600);
        }

        tbody {
          tr {
            border-color: var(--border-color);

            &:nth-child(even) {
              background: var(--primary-background-color);
            }

            &:nth-child(odd) {
              background: var(--color-neutrals-100);

              .dark-mode & {
                background: var(--color-dark-100);
              }
            }
          }
        }
      `}
    >
      {children}
    </table>
  </div>
);

Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Table;
