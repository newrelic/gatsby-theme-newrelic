import React from 'react';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import {
  SearchProvider,
  WithSearch,
  SearchBox,
  Results,
  Paging,
  PagingInfo,
} from '@elastic/react-search-ui';
import ResultView from './ResultView';
import SearchInput from './SearchInput';

import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import PropTypes from 'prop-types';

// TODO: move styles to emotion/wrapper
import '@elastic/react-search-ui-views/lib/styles/styles.css';

const connector = new SiteSearchAPIConnector({
  documentType: 'page',
  engineKey: 'Ad9HfGjDw4GRkcmJjUut',
});

const SwiftSearch = () => {
  return (
    <SearchProvider
      config={{
        apiConnector: connector,
      }}
    >
      <WithSearch
        mapContextToProps={({ isLoading, results }) => ({ isLoading, results })}
      >
        {({ isLoading, results }) => {
          return (
            <div className="App">
              <SearchBox
                searchAsYouType
                debounceLength={800}
                inputView={InputView}
              />
              {isLoading && <div>loading...</div>}
              {!isLoading && (
                <>
                  {results && <StyledPagingInfo />}
                  <StyledPaging />
                  <StyledResults
                    resultView={ResultView}
                    titleField="title"
                    urlField="url"
                  />
                  <StyledPaging />
                </>
              )}
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
};

function InputView({ getAutocomplete, getInputProps }) {
  const inputProps = getInputProps();
  return (
    <>
      <div
        className="sui-search-box__wrapper"
        css={css`
          .sui-search-box__text-input {
            border: none;
            padding: 0;
          }
        `}
      >
        <SearchInput
          onClear={() => inputProps.onChange({ target: { value: '' } })}
          {...inputProps}
        />
        {getAutocomplete()}
      </div>
    </>
  );
}

InputView.propTypes = {
  getAutocomplete: PropTypes.func,
  getInputProps: PropTypes.func,
};

const StyledPagingInfo = styled(PagingInfo)`
  margin: 1rem 0;
  color: var(--primary-text-color);
`;

const StyledPaging = styled(Paging)`
  .rc-pagination-item a {
    color: var(--link-color);
  }
  .rc-pagination-item:hover {
    background: var(--tertiary-background-color);
    a {
      color: var(--link-color);
    }
  }
  .rc-pagination-next:hover {
    background: var(--tertiary-background-color);
    a {
      color: var(--link-color);
    }
  }
  .rc-pagination-prev:hover {
    background: var(--tertiary-background-color);
    a {
      color: var(--link-color);
    }
  }
  .rc-pagination-jump-next:hover {
    background: var(--tertiary-background-color);
  }
  .rc-pagination-jump-next:hover:after {
    color: var(--link-color) !important;
  }
  .rc-pagination-jump-prev:hover {
    background: var(--tertiary-background-color);
  }
  .rc-pagination-jump-prev:hover:after {
    color: var(--link-color) !important;
  }
`;

const StyledResults = styled(Results)`
  > li {
    border: var(--border-color) solid 1px;
    background: var(--primary-background-color);
  }
  a {
    color: var(--link-color);
  }
  em {
    color: var(--link-color);
    &::after {
      background: ${rgba('#007e8a', 0.2)};
    }
  }
`;

export default SwiftSearch;
