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
      <WithSearch mapContextToProps={({ isLoading }) => ({ isLoading })}>
        {({ isLoading }) => {
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
                  <PagingInfo />
                  <Paging />
                  <StyledResults
                    resultView={ResultView}
                    titleField="title"
                    urlField="url"
                  />
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
      background: #007e8a28;
    }
  }
`;

export default SwiftSearch;
