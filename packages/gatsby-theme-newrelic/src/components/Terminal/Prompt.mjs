import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Prompt = ({ character }) => (
  <span
    css={css`
      color: var(--code-console-text-highlight);
      user-select: none;
    `}
  >
    {character || ' '}
  </span>
);

Prompt.propTypes = {
  character: PropTypes.string,
};

export default Prompt;
