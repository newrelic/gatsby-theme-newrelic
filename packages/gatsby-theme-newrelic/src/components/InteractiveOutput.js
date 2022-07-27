import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';

const InteractiveOutput = ({ className, inputs, config }) => {
  let lines = '';
  inputs.forEach((input) => (lines = lines.concat(`,${input.codeLine}`)));

  const updateConfig = () => {
    let updatedConfig = config.slice();
    inputs.forEach((input, idx) => {
      updatedConfig = updatedConfig.replace(`<input${idx + 1}>`, input.value);
    });
    return updatedConfig;
  };

  return (
    <CodeBlock
      lineNumbers
      altStyle
      copyable
      highlightedLines={lines}
      fileName="newrelic.yml"
      language="yml"
      className={className}
    >
      {updateConfig()}
    </CodeBlock>
  );
};

InteractiveOutput.propTypes = {
  className: PropTypes.string,
  inputs: PropTypes.array,
  config: PropTypes.string,
};

export default InteractiveOutput;
