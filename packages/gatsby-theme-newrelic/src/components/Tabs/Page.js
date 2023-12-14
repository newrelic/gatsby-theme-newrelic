import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Page = ({ index, children, id, className }) => {
  const {
    currentTabIndex,
    transitionDirection,
    previousTabIndex,
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
    index === currentTabIndex || (currentTabIndex === undefined && index === 0);

  console.log('🔮🔮🔮🔮', transitionDirection, previousTabIndex, index);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      css={css`
        opacity: 1;
        background: var(--secondary-background-color);

        transform: translateX(0);

        transition: 0.75s ease-in;
        transition-property: visibility, transform, opacity;

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
              `
            : css`
                transform: translateX(-100%);
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
