import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';
import { graphql, useStaticQuery } from 'gatsby';
import createPersistedState from 'use-persisted-state';
import { STORAGE_KEYS } from '../utils/constants';

const useBannerIdState = createPersistedState(STORAGE_KEYS.BANNER_ID);

const Banner = ({ children }) => {
  const childrenHash = btoa(children);
  const [bannerId, setBannerId] = useBannerIdState();
  const [visible, setVisible] = useState(bannerId !== childrenHash);

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

  useEffect(() => {
    if (bannerId === childrenHash) {
      setVisible(false);
    }
  }, [bannerId, childrenHash]);

  if (!visible) return null;

  return (
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
        onClick={() => setBannerId(childrenHash)}
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
  );
};

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
