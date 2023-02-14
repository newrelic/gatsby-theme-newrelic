import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const Page = ({ index, children, id, className }) => {
  const [[currentTab]] = useTabs();

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      css={
        !isSelected &&
        css`
          height: 0;
          position: absolute;
          overflow: hidden;
          width: 0;
        `
      }
      className={className}
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
