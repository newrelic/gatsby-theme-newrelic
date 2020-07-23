import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TYPES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

const type = ({ type, interactive }) => {
  switch (type) {
    case TYPES.PRIMARY:
      return css`
        border: 1px solid var(--border-color);
        background: var(--primary-background-color);

        ${interactive &&
        css`
          &:hover {
            border-color: var(--border-hover-color);
          }
        `}
      `;
    case TYPES.SECONDARY:
      return css`
        background: var(--color-white);

        .dark-mode & {
          background: var(--color-dark-100);
        }
      `;
  }
};

const Surface = styled.div`
  border-radius: 4px;
  box-shadow: 0 0.24905px 0.55345px rgba(0, 0, 0, 0.00562291),
    0 0.59851px 1.33002px rgba(0, 0, 0, 0.00807786),
    0 1.12694px 2.50431px rgba(0, 0, 0, 0.01),
    0 2.01027px 4.46726px rgba(0, 0, 0, 0.0119221),
    0 3.75998px 8.35552px rgba(0, 0, 0, 0.0143771),
    0 9px 20px rgba(0, 0, 0, 0.02);

  ${type}

  ${({ interactive }) =>
    interactive &&
    css`
      cursor: pointer;
      transition: transform 0.15s ease-out;

      &:hover {
        transform: translateY(-2px);
      }
    `}
`;

Surface.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPES)),
};

Surface.TYPE = TYPES;

export default Surface;
