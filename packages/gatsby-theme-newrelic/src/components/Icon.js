import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import FeatherSVG from './FeatherSVG';
import constantize from '../utils/constantize';
import transformKeys from '../utils/transformKeys';
import featherIcons from '../icons/feather';

const TYPES = transformKeys(
  {
    ...featherIcons,
  },
  constantize
);

const Icon = ({ name, size, ...props }) => {
  const featherIcon = featherIcons[name];

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

  throw new Error(`Icon: ${name} did not match a known icon`);
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: '1em',
};

Icon.TYPE = TYPES;

export default Icon;
