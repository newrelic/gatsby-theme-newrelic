import React from 'react';
import PropTypes from 'prop-types';
import GlobalFooter from '../GlobalFooter';
import { css } from '@emotion/core';
import useLayout from '../../hooks/useLayout';

const Footer = ({ fileRelativePath }) => {
  const { contentPadding } = useLayout();

  return (
    <GlobalFooter
      fileRelativePath={fileRelativePath}
      css={css`
        grid-area: footer;
        margin: 0 -${contentPadding};
      `}
    />
  );
};

Footer.propTypes = {
  fileRelativePath: PropTypes.string,
};

export default Footer;
