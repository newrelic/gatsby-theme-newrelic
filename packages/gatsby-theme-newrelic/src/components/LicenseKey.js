import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/react';
import { useClickAway, useWindowSize } from 'react-use';

import {
  Button,
  Icon,
  useInstrumentedHandler,
  useTessen,
} from '@newrelic/gatsby-theme-newrelic';
import useThemeTranslation from '../hooks/useThemeTranslation';

const LicenseKey = () => {
  // `useId` from React 18 would be better here
  const { current: popoverId } = useRef(Math.random().toString());
  const hideTimeoutId = useRef();
  const { t } = useThemeTranslation();
  const clicked = useRef(false);
  const [opened, setOpened] = useState(false);
  const hide = () => setOpened(false);
  const hideOnDelay = (delay = 440) => {
    const id = setTimeout(hide, delay);
    hideTimeoutId.current = id;
  };
  const show = () => {
    if (hideTimeoutId.current != null) clearTimeout(hideTimeoutId.current);
    setOpened(true);
  };

  const popover = useRef();
  useClickAway(popover, () => {
    clicked.current = false;
    hide();
  });

  const tessen = useTessen();
  useEffect(() => {
    if (!opened) return;

    tessen.track({ category: 'LicenseKey', eventName: 'opened' });
  }, [opened, tessen]);

  return (
    <div
      css={css`
        display: inline-flex;
        justify-content: center;
        position: relative;
      `}
      onMouseEnter={show}
      onMouseLeave={() => {
        // if the Popover was opened via click,
        // we only want to close it via click.
        if (clicked.current) return;
        hideOnDelay();
      }}
    >
      <button
        aria-describedby={`license-key-explainer-${popoverId}`}
        css={css`
          align-items: center;
          background: none;
          border: 0;
          border-bottom: 1px solid var(--primary-text-color);
          color: var(--primary-text-color);
          cursor: pointer;
          display: flex;
          justify-content: center;
          padding-bottom: 1px;
          padding-right: 1px;
        `}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;

          clicked.current = true;
          if (!opened) show();
          if (clicked.current && opened) hide();
        }}
        type="button"
      >
        {t('licenseKey.buttonText')}{' '}
        <Icon
          css={css`
            margin-left: 0.25em;
          `}
          name="fe-info"
          size="1.25em"
        />
      </button>

      <Popover id={popoverId} hidden={!opened} ref={popover} />
    </div>
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

const Popover = forwardRef(({ id, hidden = false }, ref) => {
  const { t } = useThemeTranslation();
  const onLearnMore = useInstrumentedHandler(() => {}, {
    eventName: 'learnMoreClick',
    category: 'LicenseKey',
  });
  const onCreateAccount = useInstrumentedHandler(() => {}, {
    eventName: 'createAccountClick',
    category: 'LicenseKey',
  });
  const onGetYourKey = useInstrumentedHandler(() => {}, {
    eventName: 'getYourKeyClick',
    category: 'LicenseKey',
  });

  const { width } = useWindowSize();
  const setOffsetRef = useCallback(
    (node) => {
      if (!node) return;

      const box = node.getBoundingClientRect();
      const overflowLeft = Math.abs(Math.min(0, box.left));
      const overflowRight = Math.min(0, width - box.right);

      const offset = (overflowLeft + overflowRight).toFixed(2);
      ref.current.style.setProperty('--overflow-offset', `${offset}px`);
    },
    [ref, width]
  );

  return (
    // this container `div` is so we can reliably calculate the offset.
    // `.getBoundingClientRect()` takes transforms into account, so we would
    // get the wrong offset after the first measurement if we measured
    // the same `div` we transformed.
    <div
      className={!hidden && 'visible'}
      css={css`
        bottom: 200%;
        position: absolute;
        visibility: hidden;
        z-index: 81;

        &.visible {
          visibility: visible;
        }
      `}
      ref={setOffsetRef}
    >
      <div
        className={!hidden && 'visible'}
        css={css`
          body.dark-mode & {
            --popover-background: var(
              --system-background-selected-low-contrast-dark
            );
          }

          --popover-background: var(--system-text-primary-light);

          background: var(--popover-background);
          border-radius: 4px;
          bottom: 0;
          color: var(--system-text-primary-dark);
          cursor: default;
          display: grid;
          font-size: 0.75rem;
          gap: 8px;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          padding: 1rem;
          text-align: left;
          translate: var(--overflow-offset) 0;
          visibility: hidden;

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

          /* this is to bridge to the hoverable area between
           * the popover and the triggering button.
           */
          &::after {
            content: '';
            height: 20%;
            position: absolute;
            top: 100%;
            width: 100%;
          }

          &.visible {
            animation: 360ms ${slideFadeIn} cubic-bezier(0, 0.3, 0.4, 1);
            visibility: visible;
          }
        `}
        id={`license-key-explainer-${id}`}
        ref={ref}
        role="status"
      >
        <p
          css={css`
            font-weight: 500;
            justify-self: start;
            margin: 0;
          `}
        >
          {t('licenseKey.popover.header')}
        </p>
        <p
          css={css`
            grid-column: 1 / 3;
            margin: 0 0 8px;
          `}
        >
          {t('licenseKey.popover.explainer')}{' '}
          <a
            css={css`
              color: currentColor;
              text-decoration: underline;

              &:hover {
                color: currentColor;
              }
            `}
            href="https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys"
            onClick={onLearnMore}
            tabIndex={0}
          >
            {t('licenseKey.popover.learnMore')}
          </a>
        </p>
        <Button
          as="a"
          href="https://one.newrelic.com/api-keys"
          onClick={onGetYourKey}
          tabIndex={0}
          variant={Button.VARIANT.PRIMARY}
        >
          {t('licenseKey.popover.getYourKey')}{' '}
          <Icon
            css={css`
              margin-left: 4px;
            `}
            name="fe-external-link"
          />
        </Button>
        <Button
          as="a"
          css={css`
            border-color: var(--system-background-app-light);
            color: var(--system-background-app-light);

            &:hover {
              color: currentColor;
            }
          `}
          href="https://newrelic.com/signup"
          onClick={onCreateAccount}
          tabIndex={0}
          variant={Button.VARIANT.OUTLINE}
        >
          {t('licenseKey.popover.createAccount')}
        </Button>
      </div>
    </div>
  );
});
Popover.propTypes = {
  hidden: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

export default LicenseKey;
