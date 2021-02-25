import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import { css } from '@emotion/core';

const ResultPreview = ({ result }) => {
  return (
    <div
      css={css`
        padding: 1rem 2rem 2rem;
        overflow: auto;
        max-height: 100%;
        background: white;

        .dark-mode & {
          background: transparent;
        }
      `}
    >
      {result && (
        <>
          <Tag
            css={css`
              display: inline-block;
              text-transform: uppercase;
              margin-bottom: 1rem;
            `}
          >
            {result.type}
          </Tag>
          <div
            css={css`
              margin-bottom: 0.75rem;
            `}
          >
            <h2
              css={css`
                margin-bottom: 0.25rem;
              `}
            >
              {result.title}
            </h2>
            {result.breadcrumb && (
              <div
                css={css`
                  font-size: 0.75rem;
                  color: var(--accent-text-color);
                `}
              >
                {result.breadcrumb}
              </div>
            )}
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: result.highlight.body,
            }}
          />
        </>
      )}
    </div>
  );
};

ResultPreview.propTypes = {
  result: PropTypes.object,
};

export default ResultPreview;
