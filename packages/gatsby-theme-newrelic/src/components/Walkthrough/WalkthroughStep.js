import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const WalkthroughStep = ({
  className,
  children,
  title,
  active = false,
  number,
  onMouseOver,
  onFocus,
}) => {
  return (
    <>
      <aside
        onMouseOver={onMouseOver}
        onFocus={onFocus}
        css={css`
          --timeline-color: ${active
            ? 'var(--brand-button-primary-accent)'
            : 'var(--border-color)'};

          position: relative;
          padding-right: 2rem;
          text-align: right;

          &::after {
            content: '';
            position: absolute;
            width: var(--timeline-width);
            background: var(--timeline-color);
            right: calc(var(--timeline-width) * -1);
            z-index: -1;
            top: 0;
            bottom: -5px;
          }

          &:first-child:after {
            top: calc(var(--ring-size) / 2);
          }

          &:nth-last-child(2):after {
            bottom: calc(100% - (var(--ring-size) / 2));
          }

          ${active &&
          css`
            &::after {
              bottom: -10px;
              top: 5px;
            }
            & + div + aside {
              &::after {
                top: 10px;
              }
            }
          `}

          @media screen and (max-width: 1000px) {
            text-align: left;
            border-right: none;
            padding-right: 0;

            &::after {
              display: none;
            }
          }
        `}
      >
        <div
          css={css`
            position: absolute;
            top: 3px;
            right: calc((var(--timeline-width) * -1) / 2);
            transform: translateX(50%);
            width: var(--ring-size);
            height: var(--ring-size);
            border-radius: 50%;
            background: var(--timeline-color);
            color: var(--timeline-color);
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            background: var(--primary-background-color);
            border: var(--ring-border-width) var(--timeline-color) solid;

            @media screen and (max-width: 1000px) {
              display: none;
            }
          `}
        >
          {number}
        </div>
      </aside>
      <div
        css={css`
          margin-bottom: 2rem;
        `}
        className={className}
        onMouseOver={onMouseOver}
        onFocus={onFocus}
      >
        <h3>{title}</h3>
        {children}
      </div>
    </>
  );
};

WalkthroughStep.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  active: PropTypes.bool,
  number: PropTypes.number,
  onFocus: PropTypes.func,
  onMouseOver: PropTypes.func,
};

export default WalkthroughStep;
