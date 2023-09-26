import React from 'react';
import GlobalFooter from '../GlobalFooter';
import { css } from '@emotion/react';

const Footer = (props) => (
  <GlobalFooter
    {...props}
    css={css`
      grid-area: footer;
    `}
  />
);

export default Footer;
