import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Icon from './Icon';
import useDarkMode from 'use-dark-mode';
import { useTrack } from '@splitsoftware/splitio-react';

const DarkModeToggle = ({ className, size }) => {
  const darkMode = useDarkMode();
  const track = useTrack();

  return (
    <Icon
      name={darkMode.value ? Icon.TYPE.SUN : Icon.TYPE.MOON}
      className={className}
      size={size}
      onClick={() => {
        darkMode.toggle();

        track('global_header.action_clicked', null, { action: 'dark_mode' });
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
};

export default DarkModeToggle;
