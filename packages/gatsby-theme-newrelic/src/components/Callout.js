import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useThemeTranslation from '../hooks/useThemeTranslation';

const VARIANTS = {
  CAUTION: 'caution',
  IMPORTANT: 'important',
  TIP: 'tip',
};

// needed for i18next-parser to resolve the dynamic values
// t('callout.tip')
// t('callout.caution')
// t('callout.important')

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
  const { t } = useThemeTranslation();

  return (
    <div
      css={css`
        padding: 1.25rem;
        margin: 1.5rem 0;
        color: var(--primary-text-color);
        ${styles.variant[variant]}
      `}
    >
      {title !== null && (
        <h4
          css={css`
            font-size: 0.75rem !important;
            text-transform: uppercase;
            color: var(--heading-text-color);
            margin-top: 0 !important;
          `}
        >
          {title || t(`callout.${variant}`)}
        </h4>
      )}
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
