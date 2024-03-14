import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import useMedia from 'use-media';

import useTabs from './useTabs';
import useHasMounted from '../../hooks/useHasMounted';

const Page = ({ index, children, id, className }) => {
  const { currentTabIndex, transitionDirection, updateHeight } = useTabs();
  const prefersReducedMotion = useMedia({ prefersReducedMotion: 'reduce' });
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
    if (
      tabpanel.current == null ||
      !hasMounted ||
      prefersReducedMotion ||
      transitionDirection === 'none'
    )
      return;
    if (isSelected) {
      const amount = transitionDirection === 'left' ? '100%' : '-100%';
      tabpanel.current.style.transitionProperty = `none`;
      tabpanel.current.style.transform = `translateX(${amount})`;
      // one `rAF` here doesn't properly wait for the initial transform
      // to be applied before adding the end state.
      // https://stackoverflow.com/questions/44145740
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          tabpanel.current.style.transitionProperty = `visibility, transform, opacity`;
          tabpanel.current.style.transform = 'translateX(0%)';
        });
      });
    } else {
      // these `rAF`s are so the animation for the exiting tab is synced
      // with the animation for the entering tab.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const amount = transitionDirection === 'left' ? '-100%' : '100%';
          tabpanel.current.style.transform = `translateX(${amount})`;
        });
      });
    }
  }, [isSelected, hasMounted, prefersReducedMotion, transitionDirection]);

  return (
    <div
      role="tabpanel"
      aria-labelledby={id}
      ref={tabpanel}
      css={css`
        opacity: 1;
        top: 1em;
        left: 1em;

        transition-delay: 0ms, 0ms, 170ms;
        transition-duration: 620ms, 620ms, 340ms;
        transition-timing-function: cubic-bezier(0.55, 0, 0.45, 1);
        transition-property: visibility, transform, opacity;
        ${!isSelected &&
        css`
          transition-delay: 0ms;
          visibility: hidden;
          position: absolute;
          opacity: 0;

          & * {
            /* this hides scrollbar pop-ins on exiting tabs */
            overflow: hidden !important;
          }
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
