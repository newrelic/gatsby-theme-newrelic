import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';
import useDarkMode from 'use-dark-mode';
import isLocalStorageAvailable from '../utils/isLocalStorageAvailable';

const localStorageMock = () => {
  const store = {};
  return {
    getItem: (key) => store[key],
    setItem: (key, val) => {
      store[key] = val;
    },
  };
};

const DarkModeToggle = ({ className, size, onClick }) => {
  const darkModeOptions = isLocalStorageAvailable()
    ? {}
    : { storageProvider: localStorageMock() };
  const darkMode = useDarkMode(false, darkModeOptions);

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
