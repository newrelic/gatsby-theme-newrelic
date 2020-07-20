import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = ({ className, size }) => {
  const darkMode = useDarkMode();

  return (
    <Icon
      className={className}
      size={size}
      type={darkMode.value ? Icon.TYPE.SUN : Icon.TYPE.MOON}
      onClick={darkMode.toggle}
    />
  );
};

DarkModeToggle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

export default DarkModeToggle;
