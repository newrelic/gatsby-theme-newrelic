import React from 'react';
import { css } from '@emotion/react';
import { Collapser } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';

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
          {componentInfo.props.map((prop, i) => {
            return (
              <div
                css={css`
                  padding-bottom: 0.5rem;
                `}
                key={prop.name + i}
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

PropsDisplay.propTypes = {
  componentInfo: PropTypes.shape({
    description: PropTypes.string,
    displayName: PropTypes.string,
    props: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string,
        required: PropTypes.bool,
        type: PropTypes.string,
      })
    ),
  }),
  children: PropTypes.node,
};

export default PropsDisplay;
