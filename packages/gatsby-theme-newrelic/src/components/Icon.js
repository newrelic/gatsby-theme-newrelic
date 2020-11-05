import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import FeatherSVG from './FeatherSVG';
import constantize from '../utils/constantize';
import transformKeys from '../utils/transformKeys';
import featherIcons from '../icons/feather';
import icons from '../icons';
import warning from 'warning';

const TYPES = transformKeys(featherIcons, constantize);

const Icon = ({ name, ...props }) => {
  const FeatherIcon = featherIcons[name];
  const IconElement = icons[name];

  if (process.env.NODE_ENV === 'development') {
    warning(
      !FeatherIcon,
      `You are using a feather icon using its deprecated name: '${name}'. Please use the prefixed feather icon name instead: 'fe-${name}'`
    );
  }

  if (FeatherIcon) {
    return isValidElement(FeatherIcon) ? (
      <FeatherSVG {...props}>{FeatherIcon}</FeatherSVG>
    ) : (
      <FeatherIcon {...props} />
    );
  }

  if (IconElement) {
    return <IconElement {...props} />;
  }

  throw new Error(`Icon: ${name} did not match a known icon`);
};

Icon.propTypes = {
  ...FeatherSVG.propTypes,
  name: PropTypes.oneOf([...Object.keys(icons), ...Object.values(TYPES)])
    .isRequired,
};

Icon.TYPE = TYPES;

export default Icon;
