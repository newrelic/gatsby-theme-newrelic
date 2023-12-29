import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Page = ({ index, children, id, className }) => {
  const { currentTab, updateHeight } = useTabs();

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

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      css={css`
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
};

export default Page;
