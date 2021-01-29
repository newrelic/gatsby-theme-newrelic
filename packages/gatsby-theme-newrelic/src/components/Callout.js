import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import useThemeTranslation from '../hooks/useThemeTranslation';

const VARIANTS = {
  CAUTION: 'caution',
  IMPORTANT: 'important',
  TIP: 'tip',
};

const styles = {
  variant: {
    [`${VARIANTS.CAUTION}-title`]: css`
      color: var(--color-red-400);
    `,
    [VARIANTS.CAUTION]: css`
      border-top: 1px solid var(--color-red-400);
      border-right: 1px solid var(--color-red-400);
      border-bottom: 1px solid var(--color-red-400);
      border-left: 6px solid var(--color-red-400);
      background: var(--callout-caution-background-color);
    `,
    [`${VARIANTS.IMPORTANT}-title`]: css`
      color: var(--color-yellow-400);
    `,
    [VARIANTS.IMPORTANT]: css`
      border-top: 1px solid var(--color-yellow-400);
      border-right: 1px solid var(--color-yellow-400);
      border-bottom: 1px solid var(--color-yellow-400);
      border-left: 6px solid var(--color-yellow-400);
      background: var(--callout-important-background-color);
    `,
    [`${VARIANTS.TIP}-title`]: css`
      color: var(--color-green-400);
    `,
    [VARIANTS.TIP]: css`
      border-top: 1px solid var(--color-green-400);
      border-right: 1px solid var(--color-green-400);
      border-bottom: 1px solid var(--color-green-400);
      border-left: 6px solid var(--color-green-400);
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
        border-radius: 3px;
        color: var(--primary-text-color);
        ${styles.variant[variant]}
      `}
    >
      {title !== null && (
        <h4
          css={css`
            font-size: 0.75rem !important;
            text-transform: uppercase;
            /* color: var(--heading-text-color); */
            margin-top: 0 !important;
            ${styles.variant[`${variant}-title`]}
          `}
        >
          {title ||
            // needed for i18next-parser to resolve the dynamic values
            // t('callout.tip')
            // t('callout.caution')
            // t('callout.important')
            t(`callout.${variant}`)}
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
