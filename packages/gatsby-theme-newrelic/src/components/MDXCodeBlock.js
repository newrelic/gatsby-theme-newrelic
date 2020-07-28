import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';

const MDXCodeBlock = ({
  children,
  className,
  copyable,
  lineNumbers,
  live,
  highlightedLines,
  preview,
  ...props
}) => (
  <CodeBlock
    {...props}
    copyable={copyable !== 'false'}
    highlightedLines={highlightedLines}
    language={className?.replace('language-', '')}
    lineNumbers={lineNumbers === 'true'}
    live={live === 'true'}
    preview={preview === 'true'}
  >
    {children}
  </CodeBlock>
);

MDXCodeBlock.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  copyable: PropTypes.oneOf(['true', 'false']),
  highlightedLines: PropTypes.string,
  lineNumbers: PropTypes.oneOf(['true', 'false']),
  live: PropTypes.oneOf(['true', 'false']),
  preview: PropTypes.oneOf(['true', 'false']),
};

export default MDXCodeBlock;
