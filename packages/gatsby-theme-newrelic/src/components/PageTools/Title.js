import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Title = ({ children, className }) => (
  <h4
    className={className}
    css={css`
      margin-top: 0 !important;
      margin-bottom: 0.5rem !important;
      font-size: 1rem;
    `}
  >
    {children}
  </h4>
);

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Title;
