import React from 'react';
import PropTypes from 'prop-types';
import { ClassNames } from '@emotion/core';
import Editor from 'react-simple-code-editor';
import CodeHighlight from './CodeHighlight';

const CodeEditor = ({ value, language, lineNumbers, onChange }) => {
  const lineNumberWidth = value.trim().split('\n').length.toString().length;

  return (
    <ClassNames>
      {({ css }) => {
        const className = css`
          padding: 0;
        `;

        return (
          <Editor
            value={value}
            padding={16}
            onValueChange={onChange}
            highlight={(code) => (
              <CodeHighlight
                wrap
                className={className}
                language={language}
                lineNumbers={lineNumbers}
              >
                {code}
              </CodeHighlight>
            )}
            textareaClassName={
              lineNumbers &&
              css`
                padding-left: calc(2rem + ${lineNumberWidth}ch) !important;
              `
            }
            style={{
              fontFamily: 'var(--code-font)',
              fontSize: '0.75rem',
            }}
          />
        );
      }}
    </ClassNames>
  );
};

CodeEditor.propTypes = {
  language: PropTypes.string.isRequired,
  lineNumbers: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default CodeEditor;
