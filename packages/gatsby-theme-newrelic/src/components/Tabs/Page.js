import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Page = ({ index, children, id, className, handleHeight }) => {
  const [[currentTab], stacked] = useTabs();

  const page = useCallback((div) => {
    if (!div) return;
    const rect = div.getBoundingClientRect();
    handleHeight(rect.height);
  }, []);

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      css={css`
        ${stacked &&
        css`
          max-height: 500px;
          overflow-y: scroll;
          width: 100%;
          -ms-overflow-style: none; /* for Internet Explorer, Edge */
          scrollbar-width: none; /* for Firefox */
          &::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
          }
        `}
        ${!isSelected &&
        css`
          position: absolute;
          visibility: hidden;
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
  handleHeight: PropTypes.func,
};

export default Page;
