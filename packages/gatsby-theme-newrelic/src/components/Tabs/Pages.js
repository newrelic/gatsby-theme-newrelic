import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabs from './useTabs';

const Pages = ({ children }) => {
  const [, stacked] = useTabs();
  // Using 500px as a fixed height to keep large content from making this look awkward.
  const FIXED_HEIGHT = 500;

  return (
    <div
      css={
        stacked &&
        css`
          align-items: start;
          display: flex;
          height: ${FIXED_HEIGHT}px;
          justify-content: center;
          overflow: scroll;
          padding: 0 8px;
          position: relative;
          width: 100%;
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
