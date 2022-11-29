import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import Callout from './Callout';
import InteractiveOutput from './InteractiveOutput';

const InteractiveForm = ({ children, inputs, config, containerId }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: relative;
        @media screen and (max-width: 1000px) {
          flex-direction: column;
        }
      `}
    >
      <div
        css={css`
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }
        `}
      >
        {children}
      </div>
      <InteractiveOutput
        containerId={containerId}
        fileName="newrelic.yml"
        inputs={inputs}
        config={config}
        css={css`
          margin-top: 1rem;
          width: 49%;
          @media screen and (max-width: 1000px) {
            width: 100%;
          }

          #codeblock {
            // removing the height of the buttons at the top or it overflows
            max-height: calc(100% - 50px);
          }
          > div {
            height: calc(100% - 16px);
            position: absolute;
            width: inherit;
            @media screen and (max-width: 1000px) {
              position: relative;
              height: 400px;
            }
          }
        `}
      />
    </div>
  );
};

const Tip = ({ children }) => {
  return <Callout variant={Callout.VARIANT.TIP}>{children}</Callout>;
};

const InputList = ({ children }) => {
  return children;
};

InteractiveForm.Tip = Tip;
InteractiveForm.InputList = InputList;

InteractiveForm.propTypes = {
  children: PropTypes.node,
  inputs: PropTypes.array,
  config: PropTypes.string,
  containerId: PropTypes.string,
};

Tip.propTypes = {
  children: PropTypes.node,
};

InputList.propTypes = {
  children: PropTypes.node,
};

export default InteractiveForm;
