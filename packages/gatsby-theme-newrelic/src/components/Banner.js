import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';
import { graphql, useStaticQuery } from 'gatsby';

const Banner = ({ children, visible, onClose }) => {
  const {
    site: { layout },
  } = useStaticQuery(graphql`
    query {
      site {
        layout {
          contentPadding
        }
      }
    }
  `);

  return visible ? (
    <div
      css={css`
        padding: 1rem ${layout.contentPadding};
        min-height: 5.625rem;
        background-color: var(--secondary-background-color);
      `}
    >
      <Button
        variant={Button.VARIANT.LINK}
        size={Button.SIZE.EXTRA_SMALL}
        onClick={onClose}
        css={css`
          position: absolute;
          top: 1rem;
          right: ${layout.contentPadding};
        `}
      >
        <Icon size="0.875rem" name="x" />
      </Button>
      {children}
    </div>
  ) : null;
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default Banner;
