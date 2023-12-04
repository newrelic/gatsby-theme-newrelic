import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { isMdxType } from '../../utils/mdx';

const ALLOWED_HEADINGS = ['h2', 'h3', 'h4'];

const TutorialStep = ({ children, stepNumber, totalSteps }) => {
  children = Children.toArray(children);

  const title = ALLOWED_HEADINGS.some((level) => isMdxType(children[0], level))
    ? children[0]
    : null;

  const content = title
    ? children.filter((child) => child !== title)
    : children;

  return (
    <div
      css={css`
        padding: 1.5rem 0 2rem 0;
        border-top: 1px solid var(--divider-color);

        &:last-child {
          border-bottom: 1px solid var(--divider-color);
        }

        h2,
        h3 {
          font-size: 1.17em;
        }
      `}
    >
      <StepCounter stepNumber={stepNumber} total={totalSteps} />
      {title}
      {content.map((item) => {
        return item;
      })}
    </div>
  );
};

TutorialStep.propTypes = {
  children: PropTypes.node,
  stepNumber: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

const StepCounter = ({ className, stepNumber, total }) => (
  <div
    className={className}
    css={css`
      --accent-size: 1.2em;

      font-size: 0.75rem;
      font-weight: 600;
      color: var(--accent-text-color);
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    `}
  >
    Step{' '}
    <span
      css={css`
        font-size: var(--accent-size);
      `}
    >
      {stepNumber}
    </span>{' '}
    of{' '}
    <span
      css={css`
        font-size: var(--accent-size);
      `}
    >
      {total}
    </span>
  </div>
);

StepCounter.propTypes = {
  className: PropTypes.string,
  stepNumber: PropTypes.number,
  total: PropTypes.number,
};

export default TutorialStep;
