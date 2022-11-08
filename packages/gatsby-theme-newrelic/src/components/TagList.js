import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

const TagList = ({ children }) => (
  <div
    css={css`
      --gap: 0.5rem;

      display: inline-flex;
      flex-wrap: wrap;
      margin: 0 calc(-1 * var(--gap)) calc(-1 * var(--gap)) 0;

      ~ span {
        margin: 0 var(--gap) var(--gap) 0;
      }

      @supports (gap: 0) {
        margin: unset;
        width: unset;
        gap: var(--gap);

        ~ span {
          margin: unset;
        }
      }
    `}
  >
    {children}
  </div>
);

TagList.propTypes = {
  children: PropTypes.node,
};

export default TagList;
