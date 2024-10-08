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
            onClick={() => onResultClick(result)}
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
                {result.url.replace('https://docs.newrelic.com/docs/', '')}
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
  max-height: 31.5rem;
  overflow-y: scroll;
  padding: 0;

  & em {
    color: var(--search-dropdown-emphasis);
    font-style: normal;
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

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      breadcrumb: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Results;
