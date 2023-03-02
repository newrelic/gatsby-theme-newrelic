import React from 'react';
import { css } from '@emotion/react';

import { Button, Icon, Popover } from '@newrelic/gatsby-theme-newrelic';

const TwoButton = ({
  text,
  title,
  primaryButton,
  secondaryButton,
  primaryButtonUrl,
  secondaryButtonUrl,
  ...props
}) => (
  <Popover {...props}>
    <h2
      css={css`
        color: currentColor;
        font-size: 0.75rem;
        font-weight: 500;
        grid-column: 1 / 3;
        justify-self: start;
        margin: 0;
      `}
    >
      {title}
    </h2>
    <p
      css={css`
        font-size: 0.75rem;
        grid-column: 1 / 3;
        margin: 0 0 8px;
      `}
    >
      {text}{' '}
      <a
        css={css`
          color: currentColor;
          text-decoration: underline;

          &:hover {
            color: currentColor;
          }
        `}
        // onClick={onLearnMore}
        href={primaryButtonUrl}
      >
        {primaryButton}
      </a>
    </p>
    <Button
      as="a"
      css={css`
        cursor: pointer;
        width: 100%;
      `}
      href={primaryButtonUrl}
      // onClick={onGetYourKey}
      tabIndex={0}
      variant={Button.VARIANT.PRIMARY}
    >
      {primaryButton}{' '}
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
        cursor: pointer;
        width: 100%;

        &:hover {
          color: currentColor;
        }
      `}
      href={secondaryButtonUrl}
      // onClick={onCreateAccount}
      tabIndex={0}
      variant={Button.VARIANT.OUTLINE}
    >
      {secondaryButton}
    </Button>
  </Popover>
);

export default TwoButton;
