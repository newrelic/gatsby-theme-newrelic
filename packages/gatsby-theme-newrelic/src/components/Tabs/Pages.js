import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useTabs from './useTabs';

const Pages = ({ children }) => {
  const { mobileBreakpoint } = useTabs();

  return (
    <div
      css={css`
        padding: 1em;
        margin-bottom: 1em;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 4px;

        overflow: hidden;
        position: relative;

        .dark-mode & {
          background: rgba(24, 33, 37, 0.5);
        }
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
