import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { rgba } from 'polished';

const isInteractive = ({ as, interactive }) =>
  interactive || as === 'a' || as === Link;

const Tag = styled.span`
  background: var(--system-background-muted-light);
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  transition: all 0.07s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backface-visibility: hidden;
  text-decoration: none;

  .dark-mode & {
    background: var(--system-background-selected-low-contrast-dark);
  }

  ${(props) =>
    isInteractive(props) &&
    css`
      &:hover {
        cursor: pointer;
        background: ${rgba('#70ccd2', 0.17)};
        transform: translateY(-1px);
      }
    `}
  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
      letter-spacing: 1px;
    `}
`;

Tag.propTypes = {
  interactive: PropTypes.bool,
  uppercase: PropTypes.bool,
};

Tag.defaultProps = {
  interactive: false,
  uppercase: false,
};

export default Tag;
