import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const VARIANTS = {
  CAUTION: 'caution',
  IMPORTANT: 'important',
  TIP: 'tip',
};

const DEFAULT_TITLES = {
  [VARIANTS.CAUTION]: 'Caution',
  [VARIANTS.IMPORTANT]: 'Important',
  [VARIANTS.TIP]: 'Tip',
};

const styles = {
  variant: {
    [VARIANTS.CAUTION]: css`
      border-left: 4px solid var(--color-red-400);
      background: var(--callout-caution-background-color);
    `,
    [VARIANTS.IMPORTANT]: css`
      border-left: 4px solid var(--color-yellow-400);
      background: var(--callout-important-background-color);
    `,
    [VARIANTS.TIP]: css`
      border-left: 4px solid var(--color-green-400);
      background: var(--callout-tip-background-color);
    `,
  },
};

const Callout = ({ title, variant, children }) => {
  return (
    <div
      css={css`
        padding: 1.25rem 0.25rem 1.25rem 1.25rem;
        margin: 1.5rem 3rem 1.5rem 1.25rem;
        color: var(--primary-text-color);
        ${styles.variant[variant]}
      `}
    >
      <h4
        css={css`
          font-size: 0.75rem !important;
          text-transform: uppercase;
          color: var(--heading-text-color);
        `}
      >
        {title || DEFAULT_TITLES[variant]}
      </h4>
      {children}
    </div>
  );
};

Callout.VARIANT = VARIANTS;

Callout.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(Callout.VARIANT)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Callout;
