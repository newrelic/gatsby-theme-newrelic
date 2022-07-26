import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Walkthrough = ({ className, children }) => {
  const filteredSteps = children.filter(
    (child) => child.type.name === 'WalkthroughStep'
  );
  const numberedSteps = filteredSteps.map((child, idx) => {
    return { ...child, props: { ...child.props, number: idx + 1 } };
  });

  return (
    <div
      css={css`
        --timeline-width: 4px;
        --ring-size: 1.75rem;
        --ring-border-width: 3px;

        display: grid;
        grid-template-columns: auto 1fr;
        grid-column-gap: 2rem;

        @media screen and (max-width: 1000px) {
          grid-template-columns: auto;
        }
      `}
      className={className}
    >
      {numberedSteps}
    </div>
  );
};

Walkthrough.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Walkthrough;
