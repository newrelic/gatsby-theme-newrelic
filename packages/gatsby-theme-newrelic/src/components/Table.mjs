import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Table = ({ className, children, ...props }) => (
  <div
    {...props}
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

        tbody {
          border-bottom: 1px solid var(--primary-text-color);
          border-top: 1px solid var(--primary-text-color);
          tr {
            &:nth-of-type(even) {
              background: var(--primary-background-color);
            }

            &:nth-of-type(odd) {
              background: var(--primary-hover-color);

              .dark-mode & {
                background: var(--primary-contrast-color);
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
