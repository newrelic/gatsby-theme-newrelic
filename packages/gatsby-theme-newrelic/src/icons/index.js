import React, { isValidElement } from 'react';
import FeatherSVG from '../components/FeatherSVG';

import feather from './feather';
import newrelic from './newrelic';
import logo from './logo';

const withPrefix = (prefix, icons) =>
  Object.fromEntries(
    Object.entries(icons).map(([name, icon]) => [`${prefix}-${name}`, icon])
  );

// Eventually the feather icons should be a fully wrapped component instead of
// just the guts of the SVG. These helper functions aim to provide compatibility
// with the changes to the `Icon` component, while allowing the old
// implementation to be used simultaneously. These new changes allow the Icon
// component to use multiple icon sources instead of just feather icons.
const wrapIcon = (icon) => (props) =>
  <FeatherSVG {...props}>{icon}</FeatherSVG>;

const wrapIcons = (icons) =>
  Object.fromEntries(
    Object.entries(icons).map(([name, icon]) => [
      name,
      isValidElement(icon) ? wrapIcon(icon) : icon,
    ])
  );

export default {
  ...withPrefix('fe', wrapIcons(feather)),
  ...withPrefix('nr', newrelic),
  ...withPrefix('logo', logo),
};
