import React from 'react';
import PropTypes from 'prop-types';
import GlobalFooter from '../GlobalFooter';
import { css } from '@emotion/core';

const Footer = ({ fileRelativePath }) => {
  return (
    <GlobalFooter
      fileRelativePath={fileRelativePath}
      css={css`
        grid-area: footer;
      `}
    />
  );
};

Footer.propTypes = {
  fileRelativePath: PropTypes.string,
};

export default Footer;
