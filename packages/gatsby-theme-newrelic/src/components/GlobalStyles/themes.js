import { css } from '@emotion/react';

export default css`
  .light-mode {
    --primary-background-color: var(--system-background-app-light);
    --primary-contrast-color: var(--system-text-primary-dark);
    --primary-text-color: var(--system-text-primary-light);
    --primary-hover-color: var(--system-background-selected-low-contrast-light);

    --secondary-background-color: var(--system-background-surface-1-light);
    --secondary-text-color: var(--system-text-secondary-light);

    --secondary-text-color-inverted: var(
      --system-text-secondary-inverted-light
    );

    --modal-background-color: var(--secondary-background-color);
    --modal-wrapper-color: var(--modal-wrapper-background-light);

    --button-background-color: var(--primary-text-color);
    --button-outline-color: var(--color-black);
    --button-text-color: var(--color-white);

    --accent-text-color: var(--secondary-text-color);
    --link-color: var(--interactive-link-light);
    --link-hover-color: #074382;
    --border-color: var(--system-border-strong-light);
    --divider-color: var(--system-background-selected-low-contrast-light);
    --heading-text-color: var(--primary-text-color);

    --callout-caution-background-color: #fce9e935;
    --callout-important-background-color: #fff9cc30;
    --callout-tip-background-color: #d1f7d925;
    --callout-course-background-color: #00b3c310;

    input::placeholder {
      color: var(--primary-text-color);
    }

    *:not(pre) > code,
    var {
      background: var(--system-background-muted-light);
    }
  }

  .dark-mode {
    --primary-background-color: var(--system-background-app-dark);
    --primary-contrast-color: var(--system-text-primary-light);
    --primary-text-color: var(--system-text-primary-dark);
    --primary-hover-color: var(--system-background-hover-dark);

    --secondary-background-color: var(--system-background-surface-1-dark);
    --secondary-text-color: var(--system-text-secondary-dark);
    --secondary-text-color-inverted: var(--system-text-secondary-inverted-dark);

    --modal-background-color: var(--system-background-surface-1-dark);
    --modal-wrapper-color: var(--modal-wrapper-background-dark);

    --button-background-color: var(--primary-text-color);
    --button-text-color: var(--color-black);
    --button-outline-color: var(--color-white);

    --accent-text-color: var(--secondary-text-color);
    --link-color: var(--interactive-link-dark);
    --link-hover-color: var(--interactive-link-light);
    --border-color: var(--system-border-regular-dark);
    --divider-color: var(--primary-contrast-color);
    --heading-text-color: var(--primary-text-color);

    --callout-caution-background-color: #1b000020;
    --callout-important-background-color: #14110020;
    --callout-tip-background-color: #02120020;

    input::placeholder {
      color: var(--primary-text-color);
    }

    *:not(pre) > code,
    var {
      background: var(--primary-contrast-color);
    }
  }
`;
