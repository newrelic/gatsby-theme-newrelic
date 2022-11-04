import React from 'react';
import { css } from '@emotion/react';
import { Collapser } from '@newrelic/gatsby-theme-newrelic';

const PropsDisplay = ({ componentInfo, children }) => {
  return (
    <div
      css={css`
        margin-bottom: 1rem;
      `}
    >
      <h2>{componentInfo.displayName}</h2>
      {children}
      <p>{componentInfo.description}</p>
      {componentInfo.props ? (
        <Collapser
          title="Props"
          id={componentInfo.displayName}
          defaultOpen={false}
        >
          {componentInfo.props.map((prop) => {
            return (
              <div
                css={css`
                  padding-bottom: 0.5rem;
                `}
              >
                <div>
                  <b>{prop.name}</b>
                </div>
                <span>
                  Type: <i>{prop.type}</i>
                </span>
                {prop.required && (
                  <div
                    css={css`
                      color: red;
                    `}
                  >
                    <i>Required</i>
                  </div>
                )}
                <p>{prop.description}</p>
              </div>
            );
          })}
        </Collapser>
      ) : (
        <p>No props</p>
      )}
    </div>
  );
};

export default PropsDisplay;
