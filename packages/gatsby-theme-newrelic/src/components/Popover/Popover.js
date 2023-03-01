import React, { useCallback, useRef, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useClickAway, useWindowSize } from 'react-use';

import Portal from '../Portal';

const Popover = ({ bottom, children, id, left, onClose, show }) => {
  const [overflowOffset, setOverflowOffset] = useState('0px');
  const ref = useRef();
  const { width } = useWindowSize();
  const setOffsetRef = useCallback(
    (node) => {
      if (!node) return;

      const box = node.getBoundingClientRect();
      const overflowLeft = Math.abs(Math.min(0, box.left));
      const overflowRight = Math.min(0, width - box.right);

      const offset = `${(overflowLeft + overflowRight).toFixed(2)}px`;
      if (overflowOffset === offset) return;
      setOverflowOffset(offset);
    },
    [width, overflowOffset]
  );
  useClickAway(ref, onClose);

  return (
    <Portal
      initializer={(div) => {
        if (div == null) return;
        div.style.position = 'absolute';
      }}
    >
      {/* this container `div` is so we can reliably calculate the offset. */}
      {/* `.getBoundingClientRect()` takes transforms into account, so we would */}
      {/* get the wrong offset after the first measurement if we measured */}
      {/* the same `div` we transformed. */}
      <div
        className={cx(show && 'visible')}
        css={css`
          left: ${left.toFixed(2)}px;
          position: absolute;
          bottom: ${(bottom + 20).toFixed(2)}px;
          /* this horizontally aligns the popover and the triggering button in the middle */
          translate: -50%;
          visibility: hidden;
          z-index: 81;

          &.visible {
            visibility: visible;
          }
        `}
        ref={setOffsetRef}
      >
        <div
          className={show && 'visible'}
          css={css`
            body.dark-mode & {
              --popover-background: var(
                --system-background-selected-low-contrast-dark
              );
            }

            --overflow-offset: ${overflowOffset};
            --popover-background: var(--system-text-primary-light);

            background: var(--popover-background);
            border-radius: 4px;
            color: var(--system-text-primary-dark);
            cursor: default;
            display: grid;
            font-size: 0.75rem;
            gap: 8px;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
            min-width: 370px;
            padding: 1rem;
            text-align: left;
            translate: var(--overflow-offset) 0;

            &::before {
              --size: 1rem;
              background: var(--popover-background);
              border-bottom-right-radius: 4px;
              content: '';
              bottom: calc(var(--size) / -2);
              grid-column: 1 / 3;
              height: var(--size);
              position: absolute;
              rotate: 45deg;
              transform-origin: center;
              translate: calc(var(--overflow-offset) * -1) 0;
              width: var(--size);
            }

            /* this bridges the hoverable area between
             * the popover and the triggering button.
             */
            &::after {
              content: '';
              height: 20px;
              position: absolute;
              top: 100%;
              width: 100%;
            }

            &.visible {
              animation: 360ms ${slideFadeIn} cubic-bezier(0, 0.3, 0.4, 1);
            }
          `}
          id={`license-key-explainer-${id}`}
          ref={ref}
          role="status"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

// `--overflow-offset` is set in a `useCallback` below.
// it's used to shift the popover left or right so it doesn't overflow the screen.
const slideFadeIn = keyframes`
  from {
    opacity: 0;
    translate: var(--overflow-offset) 12%;
  }
  to {
    opacity: 1;
    translate: var(--overflow-offset) 0%;
  }
`;

Popover.propTypes = {
  bottom: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default Popover;
