import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const WalkthroughStep = ({ className, children, title, number, id }) => {
  return (
    <div
      css={css`
        display: flex;

        &:hover {
          aside {
            div {
              background-color: var(--brand-button-primary-accent);
              border-color: var(--brand-button-primary-accent);
              color: black;
              font-weight: 500;
              transform: scale(1.18) translateX(14px);
              transition: background-color 325ms, border 325ms, color 325ms, transform 325ms;
            }

            &::after {
              background: var(--brand-button-primary-accent);
              transition: background 325ms;
            }
          }
        }
      `}
    >
      <aside
        css={css`
          margin-right: 2rem;
          position: relative;

          &::after {
            background: var(--secondary-text-color);
            bottom: 0;
            content: '';
            position: absolute;
            right: calc(var(--timeline-width) * -1);
            top: 35px;
            transition: background 325ms;
            width: var(--timeline-width);
            z-index: -1;
          }

          @media screen and (max-width: 1000px) {
            border-right: none;
            margin-right: 0;
            text-align: left;

            &::after {
              display: none;
            }
          }
        `}
      >
        <div
          css={css`
            background: var(--primary-background-color);
            border-radius: 50%;
            border: var(--ring-border-width) var(--secondary-text-color) solid;
            color: var(--secondary-text-color);
            display: grid;
            font-size: 18px;
            font-weight: 400;
            height: var(--ring-size);
            place-items: center;
            position: absolute;
            right: calc((var(--timeline-width) * -1) / 2);
            text-align: center;
            top: -4px;
            transform: translateX(50%);
            transition: background-color 325ms, border 325ms, color 325ms, transform 325ms;
            width: var(--ring-size);

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
          border-bottom: solid 1px var(--border-color);
          margin-bottom: 1.25rem;
          padding-bottom: 2rem;
          width: 100%;
        `}
        className={className}
      >
        {title && (
          <h3
            css={css`
              font-size: 1.25rem;
            `}
            id={id}
          >
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
};

WalkthroughStep.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string,
};

export default WalkthroughStep;
