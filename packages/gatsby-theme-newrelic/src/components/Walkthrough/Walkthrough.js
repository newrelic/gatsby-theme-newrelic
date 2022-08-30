import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import WalkthroughStep from './WalkthroughStep';

const Walkthrough = ({ className, children }) => {
  const numberedSteps = children.map((child, idx) => {
    return { ...child, props: { ...child.props, number: idx + 1 } };
  });

  return (
    <div
      css={css`
        --timeline-width: 4px;
        --ring-size: 1.75rem;
        --ring-border-width: 3px;

        display: grid;
        grid-template-columns: auto minmax(100px, 1fr);
        grid-column-gap: 2rem;

        @media screen and (max-width: 1000px) {
          grid-template-columns: 100%;
        }
      `}
      className={className}
    >
      {numberedSteps}
    </div>
  );
};

Walkthrough.Step = WalkthroughStep;

Walkthrough.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Walkthrough;
