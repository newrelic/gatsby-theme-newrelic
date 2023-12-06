import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

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
              background: var(--primary-hover-color);

              .dark-mode & {
                background: var(--system-background-selected-low-contrast-dark);
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
