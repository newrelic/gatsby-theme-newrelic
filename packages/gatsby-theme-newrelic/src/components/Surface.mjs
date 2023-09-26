import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const BASES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

const styles = {
  base: {
    [BASES.PRIMARY]: css`
      border: 1px solid var(--border-color);
      background: var(--primary-background-color);
    `,

    [BASES.SECONDARY]: css`
      background: var(--primary-background-color);
      .dark-mode & {
        background: var(--primary-hover-color);
      }
    `,
  },
  interactive: {
    [BASES.PRIMARY]: css`
      &:hover {
        border-color: var(--border-color);
      }
    `,
  },
};

const Surface = styled.div`
  border-radius: 0.25rem;
  box-shadow: var(--shadow-3);
  text-decoration: none;

  ${({ base }) => styles.base[base]};

  ${({ base, interactive }) =>
    interactive &&
    css`
      cursor: pointer;
      transition: transform 0.15s ease-out, border-color 0.15s ease-out,
        box-shadow 0.15s ease-out;

      &:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-4);
      }

      ${styles.interactive[base]}
    `}
`;

Surface.propTypes = {
  base: PropTypes.oneOf(Object.values(BASES)).isRequired,
  interactive: PropTypes.bool,
};

Surface.defaultProps = {
  interactive: false,
};

Surface.BASE = BASES;

export default Surface;
