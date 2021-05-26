import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';
import useDarkMode from 'use-dark-mode';
import isLocalStorageAvailable from '../utils/isLocalStorageAvailable';

const DarkModeToggle = ({ className, size, onClick }) => {
  const isDarkDefault = false;

  // If localStorage is not available, tell useDarkMode to just use an in-memory store
  const darkModeOptions = isLocalStorageAvailable()
    ? {}
    : { storageProvider: false };
  const darkMode = useDarkMode(isDarkDefault, darkModeOptions);

  return (
    <Icon
      name={darkMode.value ? 'fe-sun' : 'fe-moon'}
      className={className}
      size={size}
      onClick={(e) => {
        darkMode.toggle();

        if (window.newrelic) {
          window.newrelic.setCustomAttribute(
            'mode',
            darkMode.value ? 'dark' : 'light'
          );
        }

        if (onClick) {
          onClick(e);
        }
      }}
      css={css`
        cursor: pointer;
      `}
    />
  );
};

DarkModeToggle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default DarkModeToggle;
