import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const ScrollContainer = ({ children }) => {
  const root = useRef();

  return (
    <div
      ref={root}
      css={css`
        border-right: 1px solid var(--border-color);
        height: calc(100vh - 6 * var(--site-content-padding));
        overflow: auto;
        @media screen and (max-width: 760px) {
          border-right: none;
          height: unset;
        }
      `}
    >
      {children}
    </div>
  );
};

ScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onIntersection: PropTypes.func.isRequired,
  monitor: PropTypes.bool,
};

export default ScrollContainer;
