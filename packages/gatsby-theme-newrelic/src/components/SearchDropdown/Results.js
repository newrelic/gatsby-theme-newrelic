import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Results = ({ results, onViewMore }) => {
  return (
    <>
      <List>
        {results.map((result) => (
          <Result>
            <p
              css={css`
                color: var(--secondary-text-color);
                font-size: 0.625rem;
                line-height: 1.125;
                margin: 0 0 0.25rem;
              `}
            >
              {result.breadcrumb}
            </p>
            <p
              css={css`
                font-size: 0.875rem;
                font-weight: 500;
                line-height: 1.25;
                margin-bottom: 0.25rem;
              `}
              dangerouslySetInnerHTML={{ __html: result.title }}
            />
            <p
              css={css`
                font-size: 0.75rem;
                line-height: 1.4;
              `}
              dangerouslySetInnerHTML={{ __html: result.blurb }}
            />
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

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    background: var(--search-dropdown-hover);
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
    })
  ),
};

export default Results;
