import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import FeatherSVG from './FeatherSVG';
import mirrorKeys from '../utils/mirrorKeys';

const FEATHER_ICONS = {
  EDIT: (
    <>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </>
  ),
  GITHUB: (
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  ),
};

const TYPES = mirrorKeys({
  ...FEATHER_ICONS,
});

const Icon = ({ type, size, ...props }) => {
  const featherIcon = FEATHER_ICONS[type];

  if (featherIcon) {
    return (
      <FeatherSVG
        css={css`
          width: ${size};
          height: ${size};
        `}
        {...props}
      >
        {featherIcon}
      </FeatherSVG>
    );
  }

  throw new Error(`Icon: ${type} did not match a known icon`);
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPES)),
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: '1em',
};

Icon.TYPE = TYPES;

export default Icon;
