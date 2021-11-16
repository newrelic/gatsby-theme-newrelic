/* eslint-disable no-nested-ternary */
import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { LiveError, LivePreview, LiveProvider } from 'react-live';
import Button from './Button';
import CodeEditor from './CodeEditor';
import Icon from './Icon';
import CodeHighlight from './CodeHighlight';
import MiddleEllipsis from 'react-middle-ellipsis';
import RawCode from './RawCode';
import useClipboard from '../hooks/useClipboard';
import useFormattedCode from '../hooks/useFormattedCode';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedHandler from '../hooks/useInstrumentedHandler';

const AUTO_FORMATTED_LANGUAGES = [
  'jsx',
  'html',
  'graphql',
  'json',
  'css',
  'sass',
  'scss',
];

const defaultComponents = {
  Preview: LivePreview,
};

const replaceHTML = (code) =>
  code
    .replace(/<\/?var>/g, '')
    .replace(/<\/?mark>/g, '')
    .replace(/<a href=.*?>/g, '')
    .replace(/<\/a>/g, '');

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { code: action.payload, modified: true };
    case 'reformat':
      return { ...state, code: action.payload };
    default:
      return state;
  }
};

const CodeBlock = ({
  autoFormat,
  children,
  className,
  components: componentOverrides = {},
  copyable,
  fileName,
  formatOptions,
  highlightedLines,
  language,
  lineNumbers,
  live,
  preview,
  scope,
}) => {
  children = children.trim();

  if (isJSLang()) {
    language = 'jsx';
  }

  const normalizedCode = replaceHTML(children);
  const containsEmbeddedHTML = children !== normalizedCode;
  const { t } = useThemeTranslation();
  const components = { ...defaultComponents, ...componentOverrides };
  const formattedCode = useFormattedCode(children, {
    ...formatOptions,
    language,
    disable:
      autoFormat == null
        ? !AUTO_FORMATTED_LANGUAGES.includes(language)
        : !autoFormat,
  });
  const [copied, copy] = useClipboard();
  const [{ code, modified }, dispatch] = useReducer(reducer, {
    code: formattedCode,
    modified: false,
  });

  const handleCopyClick = useInstrumentedHandler(
    () => copy(containsEmbeddedHTML ? normalizedCode : code),
    {
      eventName: 'copyCodeBlockClick',
      category: 'CodeBlock',
      modified,
    }
  );

  useEffect(() => {
    dispatch({ type: 'reformat', payload: formattedCode });
  }, [formattedCode]);

  return (
    <LiveProvider code={code} scope={scope}>
      {preview && (
        <components.Preview
          css={css`
            padding: 2rem;
            background: var(--color-white);
            border: 1px solid var(--color-neutrals-100);
            box-shadow: var(--boxshadow);
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          `}
        />
      )}
      <div className={className}>
        <div
          css={css`
            background: var(--color-nord-0);
            border-radius: 4px;

            .light-mode & {
              background: var(--color-nord-6);
            }

            ${preview &&
              css`
                border-top-left-radius: 0;
                border-top-right-radius: 0;
              `};
          `}
        >
          <div
            css={css`
              max-height: 26em;
              overflow: auto;
            `}
          >
            {language !== 'html' && containsEmbeddedHTML ? (
              <RawCode code={children} language={language} />
            ) : live ? (
              <CodeEditor
                value={code}
                language={language}
                lineNumbers={lineNumbers}
                onChange={(code) => dispatch({ type: 'update', payload: code })}
              />
            ) : (
              <CodeHighlight
                highlightedLines={highlightedLines}
                language={language}
                lineNumbers={lineNumbers}
              >
                {code}
              </CodeHighlight>
            )}
          </div>
          {(copyable || fileName) && (
            <div
              css={css`
                color: var(--color-nord-6);
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: var(--color-nord-1);
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
                padding: 0 1rem;
                font-size: 0.75rem;

                .light-mode & {
                  color: var(--color-nord-0);
                  background: var(--color-nord-4);
                }
              `}
            >
              <div
                css={css`
                  font-family: var(--code-font);
                  white-space: nowrap;
                  overflow: hidden;
                  padding-right: 0.5rem;
                `}
              >
                {fileName && (
                  <MiddleEllipsis>
                    <span title={fileName}>{fileName}</span>
                  </MiddleEllipsis>
                )}
              </div>
              <Button
                type='button'
                variant={Button.VARIANT.LINK}
                onClick={handleCopyClick}
                size={Button.SIZE.SMALL}
                css={css`
                  white-space: nowrap;
                `}
              >
                <Icon
                  name='fe-copy'
                  css={css`
                    margin-right: 0.5rem;
                  `}
                />
                {copied ? t('button.copied') : t('button.copy')}
              </Button>
            </div>
          )}
        </div>
        {(live || preview) && (
          <LiveError
            css={css`
              color: white;
              background: var(--color-red-400);
              padding: 0.5rem 1rem;
              font-size: 0.75rem;
              overflow: auto;
              margin-top: 0.5rem;
              border-radius: 2px;
            `}
          />
        )}
      </div>
    </LiveProvider>
  );
};

CodeBlock.propTypes = {
  autoFormat: PropTypes.bool,
  fileName: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  components: PropTypes.shape({
    Preview: PropTypes.elementType,
  }),
  copyable: PropTypes.bool,
  formatOptions: PropTypes.object,
  highlightedLines: PropTypes.string,
  language: PropTypes.string,
  lineNumbers: PropTypes.bool,
  live: PropTypes.bool,
  preview: PropTypes.bool,
  scope: PropTypes.object,
};

CodeBlock.defaultProps = {
  copyable: true,
  lineNumbers: false,
  live: false,
  preview: false,
};

const isJSLang = (language) => ['js', 'javascript'].includes(language);

export default CodeBlock;
