import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Section = ({ children, className }) => (
  <section
    className={className}
    css={css`
      padding: 1rem;
    `}
  >
    {children}
  </section>
);

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
