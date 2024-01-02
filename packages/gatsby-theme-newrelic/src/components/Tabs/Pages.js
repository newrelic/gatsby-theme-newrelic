import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Pages = ({ children }) => {
  const { containerHeight, stacked, mobileBreakpoint } = useTabs();

  return (
    <div
      css={css`
        padding: 1em;
        margin-bottom: 1em;
        background: var(--secondary-background-color);
        border: #afe2e3 solid 1px;
        border-top: none;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        overflow: hidden;
        position: relative;

        @media screen and (max-width: ${mobileBreakpoint}) {
          border-top: #afe2e3 solid 1px;
        }

        ${stacked &&
        css`
          align-items: start;
          display: flex;
          height: ${containerHeight}px;
          justify-content: center;
          width: 70%;
          @media screen and (max-width: ${mobileBreakpoint}) {
            width: 100%;
          }
        `}
      `}
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
