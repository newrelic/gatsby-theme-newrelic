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
    <path d="M12.9999 20.0722C11.1242 20.0722 9.3254 19.3271 7.99912 18.0008C6.67283 16.6745 5.92773 14.8757 5.92773 13C5.92773 11.1244 6.67283 9.32553 7.99912 7.99924C9.3254 6.67296 11.1242 5.92786 12.9999 5.92786L12.9999 13L12.9999 20.0722Z" />
    <circle cx="12.9999" cy="13" r="7.57215" />
    <line
      x1="13.1826"
      y1="0.5"
      x2="13.1826"
      y2="2.76407"
      strokeLinecap="round"
    />
    <line
      x1="25.6125"
      y1="13.106"
      x2="23.3485"
      y2="13.106"
      strokeLinecap="round"
    />
    <line
      x1="13.106"
      y1="23.3485"
      x2="13.106"
      y2="25.6126"
      strokeLinecap="round"
    />
    <line
      x1="22.0242"
      y1="4.26704"
      x2="20.4232"
      y2="5.86798"
      strokeLinecap="round"
    />
    <line
      x1="21.8998"
      y1="21.9701"
      x2="20.2989"
      y2="20.3692"
      strokeLinecap="round"
    />
  </SVG>
);

export default DarkModeIcon;
