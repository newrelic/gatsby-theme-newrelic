import feather from './feather';
import newrelic from './newrelic';

const withPrefix = (prefix, icons) =>
  Object.fromEntries(
    Object.entries(icons).map(([name, icon]) => [`${prefix}-${name}`, icon])
  );

export default {
  ...withPrefix('fe', feather),
  ...withPrefix('nr', newrelic),
};
