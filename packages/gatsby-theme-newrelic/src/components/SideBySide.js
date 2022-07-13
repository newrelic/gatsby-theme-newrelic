import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const BREAKPOINTS = {
  SINGLE_COLUMN: '1240px',
  RELATED_CONTENT: '1520px',
};

const SideBySide = ({ children, className }) => {
  const childObjects = Children.toArray(children);
  const numberOfChildren = childObjects.length;
  const spacePercentage = 100 / numberOfChildren;

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(
          ${numberOfChildren},
          calc(${spacePercentage}% - 0.5rem)
        );

        p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: ${BREAKPOINTS.SINGLE_COLUMN}) {
          grid-template-columns: minmax(0, 1fr);
        }
      `}
      className={className}
    >
      {childObjects.map((child, i) => {
        return <div key={i}>{child}</div>;
      })}
    </div>
  );
};

SideBySide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SideBySide;
