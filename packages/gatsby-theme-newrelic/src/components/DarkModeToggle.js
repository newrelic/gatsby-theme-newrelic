import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = ({ className, size }) => {
  const darkMode = useDarkMode();

  return (
    <Icon
      name={darkMode.value ? Icon.TYPE.SUN : Icon.TYPE.MOON}
      className={className}
      size={size}
      onClick={darkMode.toggle}
    />
  );
};

DarkModeToggle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

export default DarkModeToggle;
