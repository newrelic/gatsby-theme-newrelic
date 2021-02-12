import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const TextHighlight = ({ text, match, caseSensitive = false }) => {
  const parts = text.split(
    new RegExp(`(${match})`, caseSensitive ? 'g' : 'gi')
  );

  return (
    <>
      {parts.map((part, idx) => {
        const matches = caseSensitive
          ? part === match
          : part.toLowerCase() === match.toLowerCase();

        return matches ? (
          <strong
            key={idx}
            css={css`
              border-radius: 0.125rem;
              padding: 0.125rem 0;
              color: var(--color-neutrals-800);
              background: var(--color-neutrals-200);

              .dark-mode & {
                color: var(--color-dark-800);
                background: var(--color-dark-200);
              }
            `}
          >
            {part}
          </strong>
        ) : (
          part
        );
      })}
    </>
  );
};

TextHighlight.propTypes = {
  text: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
  caseSensitive: PropTypes.bool,
};

export default TextHighlight;
