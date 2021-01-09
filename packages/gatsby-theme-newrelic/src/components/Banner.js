import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';
import { graphql, useStaticQuery } from 'gatsby';
import useThemeTranslation from '../hooks/useThemeTranslation';

const Banner = ({ children, visible, onClose, ...props }) => {
  const { t } = useThemeTranslation();
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
          maxWidth
        }
      }
    }
  `);

  return visible ? (
    <div
      {...props}
      css={css`
        color: var(--color-white);
        background-color: var(--color-brand-600);
        min-height: 5.625rem;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
        z-index: 100;
        position: relative;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: var(--color-white);
        }

        a {
          color: var(--color-white);
          text-decoration: underline;
        }
      `}
    >
      <div
        css={css`
          padding: 1rem ${layout.contentPadding};
          padding-right: 7rem;
          max-width: ${layout.maxWidth};
          margin: 0 auto;
          position: relative;
        `}
      >
        {children}
        <Button
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.EXTRA_SMALL}
          onClick={onClose}
          css={css`
            position: absolute;
            top: 0.5rem;
            right: ${layout.contentPadding};
          `}
        >
          {t('button.close')}
          <Icon
            name="fe-x"
            size="0.75rem"
            css={css`
              transform: translateY(1px);
              display: block;
              margin-left: 0.25rem;
              align-self: baseline;
            `}
          />
        </Button>
      </div>
    </div>
  ) : null;
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Banner;
