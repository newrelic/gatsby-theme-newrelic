import React, { useEffect, useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Icon from './Icon';
import Link from './Link';
import { animated, useSpring } from 'react-spring';
import { usePrevious, useIsomorphicLayoutEffect } from 'react-use';
import useKeyPress from '../hooks/useKeyPress';
import useQueryParams from '../hooks/useQueryParams';
import useClipboard from '../hooks/useClipboard';

import { useLocation } from '@reach/router';

const ResizeObserver = global.ResizeObserver || class ResizeObserver {};

const Collapser = ({ title, id, defaultOpen, children }) => {
  const { queryParams } = useQueryParams();
  const location = useLocation();
  const [element, ref] = useState();
  const [isOpen, setIsOpen] = useState(() => {
    return queryParams.has('collapsers') &&
      queryParams.get('collapsers') === 'open'
      ? true
      : defaultOpen;
  });
  const [height, setHeight] = useState(0);
  const { height: viewHeight } = useSpring({ height: isOpen ? height : 0 });
  const previousIsOpen = usePrevious(isOpen);
  const [copied, copy] = useClipboard();
  const linkRef = useRef(null);

  useKeyPress(['s', 'f', 'h'], (e) => setIsOpen(e.key !== 'h'));

  useEffect(() => {
    if (id && location.hash?.replace(/^#/, '') === id) {
      setIsOpen(true);
    }
  }, [id, location.hash]);

  const observer = useMemo(
    () =>
      new ResizeObserver(([entry]) => {
        // Unfortunatly entry.contentRect does NOT return the box sizing info
        // (border + padding), which leads to an incorrect height when fully
        // expanded. We are using getBoundingClientRect() to get a more accurate
        // height.
        const { height } = entry.target.getBoundingClientRect();

        setHeight(height);
      }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [element]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        border-radius: 3px;
        border: 1px solid var(--border-color);
        box-shadow: var(--shadow-1);

        .dark-mode & {
          box-shadow: var(--shadow-2);
        }
      `}
    >
      <button
        onClick={(e) => {
          if (
            linkRef.current?.contains(e.target) ||
            linkRef.current === e.target
          )
            return;
          setIsOpen((isOpen) => !isOpen);
        }}
        type="button"
        css={css`
          --color-transition-duration: 0.3s;
          --color-transition-easing: ease-out;

          cursor: pointer;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          transition: background var(--color-transition-duration)
            var(--color-transition-easing);
          border: none;
          background: transparent;

          code {
            transition: background var(--color-transition-duration)
              var(--color-transition-easing);
          }

          &:hover,
          &:focus {
            background: var(--primary-hover-color);
            outline: none;

            .anchor svg {
              opacity: 1;
            }
          }
        `}
      >
        <h5
          id={id}
          css={css`
            display: flex;
            align-items: center;
            flex: 1;
            position: relative;
            font-size: 1rem;
            margin-top: 0;
            margin-bottom: 0;
            text-align: left;
          `}
        >
          <span>{title}</span>
          {id && (
            <Link
              ref={linkRef}
              to={`#${id}`}
              className="anchor"
              css={css`
                margin-left: 0.5rem;
                position: relative;
              `}
            >
              <Icon
                name="fe-link-2"
                css={css`
                  display: block;
                  color: inherit !important;
                `}
                onClick={() => {
                  copy(`${location.origin}${location.pathname}#${id}`);
                }}
              />
              {copied && <CopiedMessage>Copied!</CopiedMessage>}
            </Link>
          )}
        </h5>
        <Icon
          name="fe-chevron-down"
          size="1rem"
          css={css`
            margin-left: auto;
            transition: transform 0.6s ease,
              color var(--color-transition-duration)
                var(--color-transition-easing);

            color: var(--secondary-text-color);

            ${isOpen && `transform: rotate(180deg);`}
          `}
        />
      </button>

      <animated.div
        style={{ height: isOpen && previousIsOpen ? 'auto' : viewHeight }}
        css={css`
          overflow: hidden;
        `}
      >
        <div
          ref={ref}
          aria-hidden={!isOpen}
          css={css`
            border-top: 1px solid var(--border-color);
            padding: 1rem;
          `}
        >
          {children}
        </div>
      </animated.div>
    </div>
  );
};

const copyAnimation = keyframes`
from {
  transform: translate3d(0,0,0);
  opacity: 0;
}

40%, to {
  transform: translate3d(5px, 0, 0);
  opacity: 1;
}
`;

const CopiedMessage = styled.p`
  background: var(--brand-button-primary-accent);
  color: var(--system-text-primary-light);
  border-radius: 3px;
  font-size: 1rem;
  min-width: 70px;
  padding: 0 0.25rem;
  text-align: center;
  margin-left: 0.25rem;
  margin-bottom: 0;
  position: absolute;
  bottom: -33%;
  animation: ${copyAnimation} 1s ease;
`;

Collapser.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  defaultOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Collapser.defaultProps = {
  defaultOpen: false,
};

export default Collapser;
