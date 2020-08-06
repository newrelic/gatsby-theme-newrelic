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
import PagingInfoView from './PagingInfoView';
import SearchInput from './SearchInput';
import Icon from './Icon';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from '../styles/SwiftTypeSearchStyles';
import { navigate, useLocation } from '@reach/router';
import qs from 'query-string';

const connector = new SiteSearchAPIConnector({
  documentType: 'page',
  engineKey: 'Ad9HfGjDw4GRkcmJjUut',
});

const configOptions = {
  apiConnector: connector,
  searchQuery: {
    result_fields: {
      title: {
        snippet: {
          size: 100,
          fallback: true,
        },
      },
      body: {
        snippet: {
          size: 400,
          fallback: true,
        },
      },
      url: {
        raw: {},
      },
    },
  },
  initialState: {
    resultsPerPage: 10,
  },
};

const SwiftTypeSearch = ({ className }) => {
  const location = useLocation();
  return (
    <div css={styles} className={className}>
      <SearchProvider config={configOptions}>
        <WithSearch
          mapContextToProps={({ isLoading, results, searchTerm }) => ({
            isLoading,
            results,
            searchTerm,
          })}
        >
          {({ isLoading, results, searchTerm }) => {
            const hasResults = !isLoading && results && results.length > 0;
            const hasSearched = !isLoading && searchTerm.length > 0;
            return (
              <>
                <SearchBox
                  searchAsYouType
                  debounceLength={500}
                  inputView={InputView}
                  onSubmit={(searchTerm) => {
                    const queryString = qs.parse(location.search);

                    queryString.q = searchTerm;
                    navigate(location.pathname + qs.stringify(queryString));
                  }}
                />
                {isLoading && (
                  <Icon
                    css={css`
                      margin-top: 1rem;
                    `}
                    size="1.5rem"
                    name={Icon.TYPE.LOADER}
                  />
                )}
                {hasSearched && (
                  <>
                    <PagingInfo view={PagingInfoView} />

                    {hasResults && (
                      <StyledResultsContainer>
                        <Results
                          resultView={ResultView}
                          titleField="title"
                          urlField="url"
                        />
                        <Paging />
                      </StyledResultsContainer>
                    )}
                  </>
                )}
              </>
            );
          }}
        </WithSearch>
      </SearchProvider>
    </div>
  );
};

const InputView = ({ getAutocomplete, getInputProps }) => {
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
        <SearchInput size={SearchInput.SIZE.LARGE} {...inputProps} />
        {getAutocomplete()}
      </div>
    </>
  );
};

SwiftTypeSearch.propTypes = {
  className: PropTypes.string,
};

InputView.propTypes = {
  className: PropTypes.string,
  getAutocomplete: PropTypes.func,
  getInputProps: PropTypes.func,
};

const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SwiftTypeSearch;
