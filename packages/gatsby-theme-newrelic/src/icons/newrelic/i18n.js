import React from 'react';
import { css } from '@emotion/react';
import SVG from '../../components/SVG';

const I18nIcon = (props) => (
  <SVG
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    css={css`
      stroke: currentColor;
    `}
  >
    <circle cx="10.0001" cy="10" r="9.09091" strokeWidth="1.5" />
    <path
      d="M10.2842 18.512C7.84969 16.4278 6.30688 13.3321 6.30688 9.87611C6.30688 6.5488 7.73691 3.55549 10.0159 1.47726"
      strokeWidth="1.5"
    />
    <path
      d="M9.71609 18.512C12.1505 16.4278 13.6934 13.3321 13.6934 9.87611C13.6934 6.5488 12.2633 3.55549 9.98435 1.47726"
      strokeWidth="1.5"
    />
    <line
      x1="1.81812"
      y1="6.52274"
      x2="18.1818"
      y2="6.52274"
      strokeWidth="1.5"
    />
    <line
      x1="0.90918"
      y1="12.8864"
      x2="18.1819"
      y2="12.8864"
      strokeWidth="1.5"
    />
  </SVG>
);

export default I18nIcon;
