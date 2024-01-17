import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useNRBrowserAgent from '../../hooks/useNRBrowserAgent';
import Icon from '../Icon';

const PopoverButton = ({ children, nrBrowserAgentCategory, Popover }) => {
  const [opened, setOpened] = useState();
  const [{ bottom, left }, setBox] = useState({});
  const { current: popoverId } = useRef(Math.random().toString());
  const hideTimeoutId = useRef();
  const clicked = useRef(false);

  const hide = () => setOpened(false);

  const hideOnDelay = (delay = 440) => {
    const id = setTimeout(hide, delay);
    hideTimeoutId.current = id;
  };

  const show = useCallback(() => {
    if (hideTimeoutId.current != null) clearTimeout(hideTimeoutId.current);
    setOpened(true);
  }, [setOpened]);

  const nrBrowserAgent = useNRBrowserAgent();
  useEffect(() => {
    if (!opened || !nrBrowserAgentCategory) return;

    nrBrowserAgent.addPageAction({
      category: nrBrowserAgentCategory,
      eventName: 'opened',
    });
  }, [opened, nrBrowserAgent, nrBrowserAgentCategory]);

  const button = useCallback(
    (node) => {
      // skip calculating positions if popover isn't showing
      if (!node || !opened) return;

      const box = node.getBoundingClientRect();
      /* the math on this one took me a lil while.
       * maybe this will make it easier if you need to come back and edit this.
       * the box in the middle is the viewport.
       * `x` is what the popover's `bottom` needs to be.
       *        ┌─────────────┐   ┬  ┬
       *        │             │   │  │ amount scrolled
       *        │             │   │  │ `window.scrollY`
       *        │             │   │  │
       *       ┌──╤────────────┐  │  ┴
       *       │  │`el.gBCR().top`│
       *       │  │            │  │ entire document height
       *       │  ┴      ┬     │  │ `document.documentElement.scrollHeight`
       *       │ element │     │  │
       *       │         │     │  │
       *       └─────────┼─────┘  │
       *        │        │    │   │
       *        │        │`x` │   │
       *        │        │    │   │
       *        └────────╧────┘   ┴
       */
      const newBottom =
        document.documentElement.scrollHeight - (window.scrollY + box.top);
      const newLeft = box.left + box.width / 2;

      if (newLeft === left && newBottom === bottom) return;
      setBox({ bottom: newBottom, left: newLeft });
    },
    [bottom, left, opened]
  );

  return (
    <button
      aria-describedby={`license-key-explainer-${popoverId}`}
      css={css`
        align-items: center;
        background: none;
        border: 0;
        border-bottom: 1px solid var(--primary-text-color);
        color: var(--primary-text-color);
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        padding-bottom: 1px;
        padding-right: 1px;
      `}
      ref={button}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;

        clicked.current = true;
        if (!opened) show();
        if (clicked.current && opened) hide();
      }}
      onMouseEnter={show}
      onMouseLeave={() => {
        // if the Popover was opened via click,
        // we only want to close it via click.
        if (clicked.current) return;
        hideOnDelay();
      }}
      type="button"
    >
      {children}
      <Icon
        css={css`
          margin-left: 0.25em;
        `}
        name="fe-info"
        size="1.25em"
      />

      <Popover
        bottom={bottom ?? 0}
        id={popoverId}
        left={left ?? 0}
        onClose={() => {
          clicked.current = false;
          hide();
        }}
        show={opened}
      />
    </button>
  );
};

PopoverButton.propTypes = {
  /**
   * The text to display in the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The popover to show when the button is clicked/hovered.
   * Recieves `show` to decide if it's opened,
   * and `left` and `bottom` to allow the Popover to position itself.
   */
  Popover: PropTypes.elementType.isRequired,
  /**
   * The `category` for the NR Browser Agent event sent.
   * The `eventName` is `'opened'`.
   * If not supplied, no event is sent.
   */
  nrBrowserAgentCategory: PropTypes.string,
};

export default PopoverButton;
