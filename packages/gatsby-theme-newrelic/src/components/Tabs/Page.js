import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Page = ({ index, children, id, className }) => {
  const {
    currentTab,
    transitionDirection,
    previousTabId,
    updateHeight,
    stacked,
  } = useTabs();

  const page = useCallback(
    (div) => {
      if (!div) return;
      const rect = div.getBoundingClientRect();
      updateHeight(rect.height);
    },
    [updateHeight]
  );

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  console.log('🔮🔮🔮🔮', transitionDirection, previousTabId, index);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      css={css`
        opacity: 1;
        background: var(--primary-background-color);

        transform: translateX(0);

        -webkit-transition: all 0.9s ease-in-out;
        -moz-transition: all 0.9s ease-in-out;
        -ms-transition: all 0.9s ease-in-out;
        -o-transition: all 0.9s ease-in-out;
        transition: all 0.9s ease-in-out;

        ${stacked &&
        css`
          height: 100%;
          max-height: 500px;
          width: 100%;
          overflow-y: scroll;
          -ms-overflow-style: none; /* for Internet Explorer, Edge */
          scrollbar-width: none; /* for Firefox */
          &::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
          }
        `}
        ${!isSelected &&
        css`
          visibility: hidden;
          position: absolute;
          opacity: 0;

          ${transitionDirection === 'left'
            ? css`
                transform: translateX(100%);
                border: blue dotted 4px;
              `
            : css`
                transform: translateX(-100%);
                border: red dotted 4px;
              `}
        `}
      `}
      className={className}
      ref={page}
    >
      {children}
    </div>
  );
};

Page.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Page;
