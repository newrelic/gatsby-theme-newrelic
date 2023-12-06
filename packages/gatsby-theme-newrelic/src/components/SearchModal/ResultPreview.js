import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import { css } from '@emotion/react';

const ResultPreview = memo(({ result }) => {
  return (
    <div
      css={css`
        padding: 1rem 2rem 2rem;
        height: calc(100vh - 6 * var(--site-content-padding));
        max-width: 512px;
        overflow: scroll;
        background: white;

        .dark-mode & {
          background: transparent;
        }

        @media screen and (max-width: 760px) {
          display: none;
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
              letter-spacing: 1px;
            `}
          >
            {result.type.replace('_', ' ')}
          </Tag>
          <div
            css={css`
              margin-bottom: 1rem;
            `}
          >
            <h2
              css={css`
                margin-bottom: 0.25rem;
              `}
              dangerouslySetInnerHTML={{ __html: result.highlight.title }}
            />
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
          {result.sections.length && (
            <div css={css``}>
              <h5
                css={css`
                  text-transform: uppercase;
                  padding-top: 1rem;
                `}
              >
                On This Page
              </h5>
              <div>
                {result.sections.map((section, index) => {
                  return (
                    <p
                      key={index}
                      css={css`
                        font-size: 0.75rem;
                        padding-bottom: 0.5rem;
                        padding-top: 0.5rem;
                        margin: 0;
                      `}
                    >
                      {section}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
});

ResultPreview.propTypes = {
  result: PropTypes.object,
};

export default ResultPreview;
