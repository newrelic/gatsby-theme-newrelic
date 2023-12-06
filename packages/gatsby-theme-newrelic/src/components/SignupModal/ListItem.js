import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const ListItem = ({ primaryText, secondaryText }) => {
  return (
    <li
      css={css`
        position: relative;
        padding-left: 3rem;
        margin-bottom: 1rem;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          display: block;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background: #f9e3f2
            url(https://newrelic.com/tlmk-c346d3210f137392f1ae1cdfee1bcdcd.svg)
            no-repeat center center / 50%;
        }
      `}
    >
      <span
        css={css`
          display: block;
          margin-bottom: 0.5rem;
          color: var(--primary-text-color);
        `}
      >
        {primaryText}
      </span>
      <span
        css={css`
          color: var(--secondary-text-color);
        `}
      >
        {secondaryText}
      </span>
    </li>
  );
};

ListItem.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};

export default ListItem;
