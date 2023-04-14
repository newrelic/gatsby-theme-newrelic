import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Pages = ({ children }) => {
  const [height, setHeight] = useState(0);
  const [, stacked, mobileBreakPoint] = useTabs();
  const handleHeight = (pageHeight) => {
    if (pageHeight > height) {
      const maxHeight = Math.min(pageHeight, 500);
      setHeight(maxHeight);
    }
  };

  return (
    <div
      css={
        stacked &&
        css`
          align-items: start;
          display: flex;
          height: ${height}px;
          justify-content: center;
          overflow: scroll;
          width: 70%;
          @media screen and (max-width: ${mobileBreakPoint}) {
            width: 100%;
          }
        `
      }
    >
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { ...child.props, index, handleHeight })
      )}
    </div>
  );
};

Pages.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Pages;
