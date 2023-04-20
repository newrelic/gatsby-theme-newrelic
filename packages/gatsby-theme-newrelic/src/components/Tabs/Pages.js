import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Pages = ({ children }) => {
  const { containerHeight, stacked, mobileBreakPoint } = useTabs();

  return (
    <div
      css={
        stacked &&
        css`
          align-items: start;
          display: flex;
          height: ${containerHeight}px;
          justify-content: center;
          width: 70%;
          @media screen and (max-width: ${mobileBreakPoint}) {
            width: 100%;
          }
        `
      }
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ...child.props, index })
      )}
    </div>
  );
};

Pages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pages;
