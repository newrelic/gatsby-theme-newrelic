import React, { useRef, useEffect } from 'react';
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
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from '../styles/SwiftypeSearchStyles';
import Spinner from './Spinner';
import useQueryParams from '../hooks/useQueryParams';

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
    filters: [
      {
        field: 'type',
        values: ['docs', 'developer', 'opensource'],
        type: 'any',
      },
      {
        field: 'document_type',
        values: ['!views_page_menu'],
        type: 'any',
      },
    ],
  },
  initialState: {
    resultsPerPage: 10,
  },
};

const SwiftypeSearch = ({ className }) => {
  const { setQueryParam } = useQueryParams();

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
                  inputProps={{
                    placeholder: 'Search Docs, Developer, Open Source',
                  }}
                  onSubmit={(searchTerm) => {
                    setQueryParam('q', searchTerm);
                  }}
                />
                {isLoading && (
                  <Spinner
                    css={css`
                      margin-top: 1rem;
                    `}
                  />
                )}
                {hasSearched && (
                  <>
                    <PagingInfo view={PagingInfoView} />

                    {hasResults && (
                      <>
                        <Results
                          resultView={ResultView}
                          titleField="title"
                          urlField="url"
                        />
                        <Paging />
                      </>
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
  const inputRef = useRef();
  useEffect(() => {
    // Use a timeout to wait until overlay transitions finish (~500ms) and ready to focus.
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  }, []);
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
          ref={inputRef}
          size={SearchInput.SIZE.LARGE}
          {...inputProps}
        />
        {getAutocomplete()}
      </div>
    </>
  );
};

SwiftypeSearch.propTypes = {
  className: PropTypes.string,
};

InputView.propTypes = {
  className: PropTypes.string,
  getAutocomplete: PropTypes.func,
  getInputProps: PropTypes.func,
};

export default SwiftypeSearch;
