import React from 'react';
import { css } from '@emotion/react';
import SVG from '../../components/SVG';

const DarkModeIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    css={css`
      stroke: currentColor;
      path {
        fill: currentColor;
      }
    `}
  >
    <path
      d="M13.0001 20.0722C14.8758 20.0722 16.6746 19.3271 18.0009 18.0008C19.3272 16.6745 20.0723 14.8757 20.0723 13C20.0723 11.1244 19.3272 9.32553 18.0009 7.99924C16.6746 6.67296 14.8758 5.92786 13.0001 5.92786V13L13.0001 20.0722Z"
      fill="#F3F4F4"
    />
    <circle cx="12.9999" cy="13" r="7.57215" stroke="#F3F4F4" />
    <line
      x1="13.1826"
      y1="0.5"
      x2="13.1826"
      y2="2.76407"
      stroke="#F3F4F4"
      strokeLinecap="round"
    />
    <line
      x1="25.6125"
      y1="13.106"
      x2="23.3485"
      y2="13.106"
      stroke="#F3F4F4"
      strokeLinecap="round"
    />
    <line
      x1="13.106"
      y1="23.3485"
      x2="13.106"
      y2="25.6126"
      stroke="#F3F4F4"
      strokeLinecap="round"
    />
    <line
      x1="22.0242"
      y1="4.26704"
      x2="20.4232"
      y2="5.86798"
      stroke="#F3F4F4"
      strokeLinecap="round"
    />
    <line
      x1="21.8998"
      y1="21.9701"
      x2="20.2989"
      y2="20.3692"
      stroke="#F3F4F4"
      strokeLinecap="round"
    />
  </SVG>
);

export default DarkModeIcon;
