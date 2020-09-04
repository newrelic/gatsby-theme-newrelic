import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Button from './Button';
import Icon from './Icon';
import createPersistedState from 'use-persisted-state';
import { STORAGE_KEYS } from '../utils/constants';

const useBannerIdState = createPersistedState(STORAGE_KEYS.BANNER_ID);

const TYPES = {
  NORMAL: 'normal',
};

const styles = {
  [TYPES.NORMAL]: css`
    min-height: 5.625rem;
    background-color: var(--secondary-background-color);
  `,
};

const Banner = ({ children, type }) => {
  const [visible, setVisible] = useState(true);
  const [bannerId, setBannerId] = useBannerIdState();
  const childrenHash = btoa(children);

  useEffect(() => {
    if (bannerId === childrenHash) {
      setVisible(false);
    }
  }, [bannerId, childrenHash]);

  if (!visible) return null;

  return (
    <div
      css={css`
        padding: 1rem;
        ${styles[type]}
      `}
    >
      <Button
        variant={Button.VARIANT.LINK}
        size={Button.SIZE.EXTRA_SMALL}
        onClick={() => setBannerId(childrenHash)}
        css={css`
          position: absolute;
          top: 0;
          right: 0;
        `}
      >
        <Icon size="0.875rem" name="x"></Icon>
      </Button>
      {children}
    </div>
  );
};

Banner.TYPES = TYPES;

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(Banner.TYPES)).isRequired,
};

Banner.defaultProps = {
  type: Banner.TYPES.NORMAL,
};

export default Banner;
