import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';
import Button from './Button';
import useDarkMode from 'use-dark-mode';
import isLocalStorageAvailable from '../utils/isLocalStorageAvailable';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

const DarkModeToggle = ({ className, size, onClick }) => {
  const isDarkDefault = false;

  // If localStorage is not available, tell useDarkMode to just use an in-memory store
  const darkModeOptions = isLocalStorageAvailable()
    ? {}
    : { storageProvider: false };
  const darkMode = useDarkMode(isDarkDefault, darkModeOptions);

  const handleDarkModeClick = useInstrumentedHandler(
    null,
    ({ darkModeValue }) => ({
      eventName: 'darkModeToggleClick',
      category: 'DarkModeToggle',
      origin: 'gatsbyTheme',
      layoutElement: 'globalHeader',
      mode: darkModeValue,
    })
  );

  return (
    <Button
      size={Button.SIZE.EXTRA_SMALL}
      variant={Button.VARIANT.LINK}
      onClick={(e) => {
        darkMode.toggle();

        handleDarkModeClick({
          darkModeValue: darkMode.value ? 'dark' : 'light',
        });

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
        @media screen and (max-width: 450px) {
          padding: 0;
        }
      `}
    >
      <Icon
        name={'nr-light-mode'}
        className={className}
        size={size}
        css={css`
          cursor: pointer;
          transition: opacity 250ms;

          path {
            transition: transform 250ms;
            transform-origin: center;
            transition-timing-function: ease-in;
          }

          ${darkMode.value === true &&
          css`
            opacity: 0.8;
            transition: opacity 250ms;

            line {
              stroke-linecap: butt;
            }

            path {
              transform: rotate(0.5turn) translate(3%, 3%);
              transform-origin: center;
              transition: transform 250ms;
              transition-timing-function: ease-in;
            }
          `}
        `}
      />
    </Button>
  );
};

DarkModeToggle.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default DarkModeToggle;
