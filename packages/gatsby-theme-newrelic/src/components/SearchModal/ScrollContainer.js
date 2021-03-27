import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { useIntersection } from 'react-use';
import usePrevious from '../../hooks/usePrevious';

const ScrollContainer = ({ children, onIntersection, monitor = true }) => {
  const intersectionRef = useRef();
  const root = useRef();
  const intersection = useIntersection(intersectionRef, {
    root: root.current,
    rootMargin: '0px 0px 200px 0px',
    threshold: 1,
  });

  const isIntersecting = intersection?.isIntersecting;
  const wasIntersecting = usePrevious(isIntersecting);

  useEffect(() => {
    if (isIntersecting && !wasIntersecting) {
      onIntersection();
    }
  }, [wasIntersecting, isIntersecting, onIntersection]);

  return (
    <div
      ref={root}
      css={css`
        border-right: 1px solid var(--border-color);
        height: calc(100vh - 6 * var(--site-content-padding));
        max-width: 512px;
        overflow: scroll;
      `}
    >
      {children}
      {monitor && <div ref={intersectionRef} />}
    </div>
  );
};

ScrollContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onIntersection: PropTypes.func.isRequired,
  monitor: PropTypes.bool,
};

export default ScrollContainer;
