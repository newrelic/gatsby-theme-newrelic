import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';
import useHasMounted from '../../hooks/useHasMounted';

const Page = ({ index, children, id, className }) => {
  const { currentTabIndex, transitionDirection, updateHeight, stacked } =
    useTabs();
  const tabpanel = useRef(null);

  const hasMounted = useHasMounted();

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

  useEffect(() => {
    if (tabpanel.current == null || !hasMounted) return;
    if (isSelected) {
      console.log(tabpanel.current);
      const amount = transitionDirection === 'left' ? '100%' : '-100%';
      tabpanel.current.style.transform = `translateX(${amount})`;
      tabpanel.current.style.transition = `none`;
      requestAnimationFrame(() => {
        tabpanel.current.style.transform = 'translateX(0%)';
        tabpanel.current.style.transition = `0.75s ease-in`;
      });
    } else {
      const amount = transitionDirection === 'left' ? '-100%' : '100%';
      tabpanel.current.style.transform = `translateX(${amount})`;
    }
  }, [isSelected, hasMounted]);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      ref={tabpanel}
      css={css`
        opacity: 1;
        background: var(--secondary-background-color);

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
        `}
      `}
      className={className}
    >
      <div ref={page}>{children}</div>
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
