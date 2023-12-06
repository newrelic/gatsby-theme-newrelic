import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Icon from './Icon';
import Link from './Link';
import { animated, useSpring } from 'react-spring';
import { usePrevious, useIsomorphicLayoutEffect } from 'react-use';
import useKeyPress from '../hooks/useKeyPress';
import useQueryParams from '../hooks/useQueryParams';
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
        onClick={() => setIsOpen((isOpen) => !isOpen)}
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
              to={`#${id}`}
              className="anchor"
              css={css`
                margin-left: 0.5rem;
              `}
            >
              <Icon
                name="fe-link-2"
                css={css`
                  display: block;
                  color: inherit !important;
                `}
              />
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
