import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Section = ({ children, className }) => (
  <section
    className={className}
    css={css`
      padding: 1rem;
      border: 1px solid var(--border-color);
      border-radius: 4px;
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
