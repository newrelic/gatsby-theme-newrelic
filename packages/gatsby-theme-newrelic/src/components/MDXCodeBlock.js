import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';
import Terminal from './Terminal';
import { isShellLanguage } from '../utils/codeBlock';

const MDXCodeBlock = ({
  animate,
  children,
  className,
  copyable,
  lineNumbers,
  live,
  lineHighlight,
  preview,
  ...props
}) => {
  const language = className?.replace('language-', '');

  return isShellLanguage ? (
    <Terminal animate={animate} copyable={copyable}>
      {children}
    </Terminal>
  ) : (
    <CodeBlock
      {...props}
      copyable={copyable !== 'false'}
      highlightedLines={lineHighlight}
      language={language}
      lineNumbers={lineNumbers === 'true'}
      live={live === 'true'}
      preview={preview === 'true'}
    >
      {children}
    </CodeBlock>
  );
};

MDXCodeBlock.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  copyable: PropTypes.oneOf(['true', 'false']),
  lineHighlight: PropTypes.string,
  lineNumbers: PropTypes.oneOf(['true', 'false']),
  live: PropTypes.oneOf(['true', 'false']),
  preview: PropTypes.oneOf(['true', 'false']),
};

export default MDXCodeBlock;
