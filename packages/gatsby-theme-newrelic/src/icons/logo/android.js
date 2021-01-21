import React from 'react';
import { css } from '@emotion/core';
import SVG from '../../components/SVG';

const AndroidIcon = (props) => (
  <SVG
    {...props}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="-147 -70 294 345"
    css={css`
      --primary-color: black;
      --accent-color: white;

      .dark-mode & {
        --primary-color: white;
        --accent-color: black;
      }
    `}
  >
    <g fill="var(--primary-color)">
      <use strokeWidth="14.4" xlinkHref="#a" stroke="var(--accent-color)" />
      <use xlinkHref="#b" transform="scale(-1 1)" />
      <g id="b" stroke="var(--accent-color)" strokeWidth="7.2">
        <rect
          rx="6.5"
          transform="rotate(29)"
          height="86"
          width="13"
          y="-86"
          x="14"
        />
        <rect id="c" rx="24" height="133" width="48" y="41" x="-143" />
        <use y="97" x="85" xlinkHref="#c" />
      </g>
      <g id="a">
        <ellipse cy="41" rx="91" ry="84" />
        <rect rx="22" height="182" width="182" y="20" x="-91" />
      </g>
    </g>
    <g
      stroke="var(--accent-color)"
      strokeWidth="7.2"
      fill="var(--accent-color)"
    >
      <path d="M-95 44.5H95" />
      <circle cx="-42" r="4" />
      <circle cx="42" r="4" />
    </g>
  </SVG>
);

export default AndroidIcon;
