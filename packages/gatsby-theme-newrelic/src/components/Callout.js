import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useThemeTranslation from '../hooks/useThemeTranslation';

const VARIANTS = {
  CAUTION: 'caution',
  IMPORTANT: 'important',
  TIP: 'tip',
  COURSE: 'course',
};

const styles = {
  variant: {
    [`${VARIANTS.CAUTION}-title`]: css`
      color: var(--attention-notification-critical);
    `,
    [VARIANTS.CAUTION]: css`
      border-color: var(--attention-notification-critical);
      background: var(--callout-caution-background-color);
    `,
    [`${VARIANTS.IMPORTANT}-title`]: css`
      color: var(--attention-notification-warning);
    `,
    [VARIANTS.IMPORTANT]: css`
      border-color: var(--attention-notification-warning);
      background: var(--callout-important-background-color);
    `,
    [`${VARIANTS.TIP}-title`]: css`
      color: var(--attention-notification-announcement);
    `,
    [VARIANTS.TIP]: css`
      border-color: var(--attention-notification-announcement);
      background: var(--callout-tip-background-color);
    `,
    [`${VARIANTS.COURSE}-title`]: css`
      color: var(--attention-notification-info);
    `,
    [VARIANTS.COURSE]: css`
      border-color: var(--attention-notification-info);
      background: var(--callout-course-background-color);
    `,
  },
};

const Callout = ({ className, title, variant, children }) => {
  const { t } = useThemeTranslation();

  return (
    <div
      className={className}
      css={css`
        padding: 1.25rem;
        border-radius: 0.25rem;
        border: 1px solid;
        border-left-width: 6px;
        color: var(--primary-text-color);
        ${styles.variant[variant]}
      `}
    >
      {title !== null && (
        <h4
          css={css`
            font-size: 0.75rem !important;
            text-transform: uppercase;
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
  className: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(Callout.VARIANT)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Callout;
