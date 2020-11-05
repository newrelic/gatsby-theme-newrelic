import React from 'react';
import PropTypes from 'prop-types';
import FeatherSVG from './FeatherSVG';
import constantize from '../utils/constantize';
import transformKeys from '../utils/transformKeys';
import featherIcons from '../icons/feather';
import newrelicIcons from '../icons/newrelic';

const TYPES = transformKeys(
  {
    ...featherIcons,
    ...newrelicIcons,
  },
  constantize
);

const Icon = ({ name, ...props }) => {
  const featherIcon = featherIcons[name];
  const NRIcon = newrelicIcons[name];

  if (featherIcon) {
    return <FeatherSVG {...props}>{featherIcon}</FeatherSVG>;
  }

  if (NRIcon) {
    return <NRIcon {...props} />;
  }

  throw new Error(`Icon: ${name} did not match a known icon`);
};

Icon.propTypes = {
  ...FeatherSVG.propTypes,
  name: PropTypes.oneOf(Object.values(TYPES)).isRequired,
};

Icon.TYPE = TYPES;

export default Icon;
