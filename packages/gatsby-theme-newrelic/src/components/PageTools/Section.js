import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { borderRadius } from 'polished';

const Section = ({ children, className }) => (
  <section
    className={className}
    css={css`
      padding: 1rem;

      &:first-of-type {
        ${borderRadius('top', '0.25rem')};
      }

      &:last-child {
        ${borderRadius('bottom', '0.25rem')};
      }

      > :last-child {
        margin-bottom: 0;
      }
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
