import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';

const Results = ({ onResultClick, onViewMore, results, selected }) => {
  return (
    <>
      <List>
        {results.map((result, i) => (
          <Result
            className={cx({ selected: selected === i })}
            key={result.url}
            onClick={() => onResultClick(result, i)}
          >
            <a href={result.url}>
              <p
                css={css`
                  color: var(--secondary-text-color);
                  font-size: 0.625rem;
                  line-height: 1.125;
                  margin: 0 0 0.25rem;
                `}
              >
                {breadcrumbify(
                  result.url.replace(
                    /https:\/\/docs\.newrelic\.com(?:\/docs)?\//,
                    ''
                  )
                )}
              </p>
              <p
                css={css`
                  font-size: 0.875rem;
                  font-weight: 500;
                  line-height: 1.25;
                  margin-bottom: 0.25rem;
                `}
                dangerouslySetInnerHTML={{ __html: result.highlight.title }}
              />
              <p
                css={css`
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 3;
                  display: -webkit-box;
                  font-size: 0.75rem;
                  line-height: 1.4;
                  overflow: hidden;
                `}
                dangerouslySetInnerHTML={{
                  __html: result.highlight.body,
                }}
              />
            </a>
          </Result>
        ))}
      </List>

      <ViewMore onClick={onViewMore}>
        View more{' '}
        <Icon
          css={css`
            padding-top: 2px;
          `}
          name="fe-chevron-down"
        />
      </ViewMore>
    </>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0 calc(-1 * var(--outer-padding));
  max-height: 32rem;
  overflow-y: scroll;
  padding: 0.25rem 0 0;

  & em {
    color: var(--search-dropdown-emphasis);
    font-style: normal;
  }

  @media (max-height: 980px) {
    max-height: 24rem;
  }
`;

const Result = styled.li`
  --top-padding: 0.25rem;
  cursor: pointer;
  margin: calc(-1 * var(--top-padding)) 0 0;
  padding: var(--top-padding) var(--outer-padding) 0.5rem;
  &.selected {
    background: var(--search-dropdown-hover);
  }

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background: var(--search-dropdown-hover);
  }

  & a {
    color: currentColor;
    text-decoration: none;
  }
`;

const ViewMore = styled.button`
  background: transparent;
  border: 0;
  color: var(--secondary-text-color);
  cursor: pointer;
  font-size: 0.75rem;
  margin: 0 0 0.5rem -0.25rem;
  padding: 0.5rem 0.25rem;

  &:hover {
    background: var(--search-dropdown-hover);
  }
`;

export const ResultType = PropTypes.shape({
  highlight: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
});

Results.propTypes = {
  onViewMore: PropTypes.func.isRequired,
  onResultClick: PropTypes.func.isRequired,
  selected: PropTypes.number,
  results: PropTypes.arrayOf(ResultType),
};

// we use the url segments for breadcrumbs, since we don't have real breadcrumbs.
// breadcrumbs that would wrap to two lines get their middle parts truncated away.
// we always want to keep the first and last URL segments.
// in the very rare case that the length of the first and last segments plus ' / ... / '
// is greater than 80, we'll only show the last part, like '... / last-segment'
const breadcrumbify = (str) => {
  // URLs should be all lowercase, so using lowercase 'o' as a reference,
  // 72 about the upper limit on number of characters for us not wrap to two lines.
  // in practice, many characters in the URL will
  // be slimmer than an o, so we can use a higher limit.
  const DESIRED_LENGTH = 80;
  str = str.replace(/\/$/, '');

  const parts = str.split('/');
  let result = parts.join(' / ');

  if (result.length <= DESIRED_LENGTH) return result;

  parts[parts.length - 2] = '...';
  result = parts.join(' / ');

  while (result.length > DESIRED_LENGTH) {
    // keep the last item and the '...' in the second to last place
    parts.splice(parts.length - 3, 1);
    result = parts.join(' / ');
  }

  return result;
};

export default Results;
