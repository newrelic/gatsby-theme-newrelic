import PropTypes from 'prop-types';
import React from 'react';

import {
  appendClassName,
  getUrlSanitizer,
} from '@elastic/react-search-ui-views/es/view-helpers';
import { isFieldValueWrapper } from '@elastic/react-search-ui-views/es/types/FieldValueWrapper';
import { css } from '@emotion/core';
import { rgba } from 'polished';

function getFieldType(result, field, type) {
  if (result[field]) return result[field][type];
}

function getRaw(result, field) {
  return getFieldType(result, field, 'raw');
}

function getSnippet(result, field) {
  return getFieldType(result, field, 'snippet');
}

function htmlEscape(str) {
  if (!str) return '';

  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getEscapedField(result, field) {
  // Fallback to raw values here, because non-string fields
  // will not have a snippet fallback. Raw values MUST be html escaped.
  const safeField =
    getSnippet(result, field) || htmlEscape(getRaw(result, field));
  return Array.isArray(safeField) ? safeField.join(', ') : safeField;
}

function getEscapedFields(result) {
  return Object.keys(result).reduce((acc, field) => {
    // If we receive an arbitrary value from the response, we may not properly
    // handle it, so we should filter out arbitrary values here.
    //
    // I.e.,
    // Arbitrary value: "_metaField: '1939191'"
    // vs.
    // FieldValueWrapper: "_metaField: {raw: '1939191'}"
    if (!isFieldValueWrapper(result[field])) return acc;
    return { ...acc, [field]: getEscapedField(result, field) };
  }, {});
}

function ResultView({
  className,
  result,
  onClickLink,
  titleField,
  urlField,
  ...rest
}) {
  const fields = getEscapedFields(result);
  const title = getEscapedField(result, titleField);
  const url = getUrlSanitizer(URL, window.location)(getRaw(result, urlField));
  const newRelicSite = fields.url.split('.newrelic')[0].slice(8);

  return (
    <li className={appendClassName('sui-result', className)} {...rest}>
      <div className="sui-result__header">
        {title && !url && (
          <h3
            className="sui-result__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {title && url && (
          <h3>
            <a
              className="sui-result__title sui-result__title-link"
              dangerouslySetInnerHTML={{ __html: title }}
              href={url}
              onClick={onClickLink}
              target="_blank"
              rel="noopener noreferrer"
            />
          </h3>
        )}
      </div>
      <div className="sui-result__body">
        <ul className="sui-result__details">
          <li>
            <span
              className="sui-result__value"
              dangerouslySetInnerHTML={{ __html: fields.body }}
            />
          </li>
          <li>
            <div
              css={css`
                font-size: 0.75rem;
                background: ${rgba('#007e8a', 0.2)};
                padding: 0.25rem 0.5rem;
                border-radius: 0.25rem;
                width: fit-content;
                margin-top: 1rem;
              `}
            >
              {newRelicSite}
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
}

ResultView.propTypes = {
  result: PropTypes.object.isRequired,
  onClickLink: PropTypes.func.isRequired,
  className: PropTypes.string,
  titleField: PropTypes.string,
  urlField: PropTypes.string,
};

export default ResultView;
