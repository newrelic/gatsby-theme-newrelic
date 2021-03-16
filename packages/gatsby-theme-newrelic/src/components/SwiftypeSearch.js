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
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import styles from '../styles/SwiftypeSearchStyles';
import Spinner from './Spinner';
import useQueryParams from '../hooks/useQueryParams';
import useThemeTranslation from '../hooks/useThemeTranslation';
import useInstrumentedData from '../hooks/useInstrumentedData';
import usePrevious from '../hooks/usePrevious';

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
        values: ['docs', 'docs-jp', 'developer', 'opensource'],
        type: 'any',
      },
      {
        field: 'document_type',
        values: ['!views_page_menu', '!views_page_content'],
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
  const { t } = useThemeTranslation();

  return (
    <div css={styles} className={className}>
      <SearchProvider config={configOptions}>
        <WithSearch
          mapContextToProps={({
            isLoading,
            results,
            searchTerm,
            totalResults,
          }) => ({
            isLoading,
            results,
            searchTerm,
            totalResults,
          })}
        >
          {({ isLoading, results, searchTerm, totalResults }) => {
            const hasResults = !isLoading && results && results.length > 0;
            const hasSearched = !isLoading && searchTerm.length > 0;
            return (
              <>
                <Instrumentation
                  searchTerm={searchTerm}
                  isLoading={isLoading}
                  totalResults={totalResults}
                />
                <SearchBox
                  searchAsYouType
                  debounceLength={500}
                  inputView={InputView}
                  inputProps={{
                    placeholder: t('searchInput.placeholder'),
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
                          resultView={(props) => <ResultView {...props} />}
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

// The `WithSearch` contains the data we need, but its called as a function,
// which means we can't use hooks. This component allows us to instrument data
// about the search, but within the lifecycle of a component.
const Instrumentation = ({ searchTerm, totalResults, isLoading }) => {
  const previousIsLoading = usePrevious(isLoading);

  // we only want to instrument when search results have just been loaded (i.e.
  // when transitioning from isLoading === true -> isLoading === false). This
  // ensures we do not instrument search terms with 0 search results on the
  // initial load of the page
  useInstrumentedData(
    { actionName: 'swiftypeSearch_input', searchTerm, totalResults },
    { enabled: searchTerm && previousIsLoading === true && isLoading === false }
  );

  return null;
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

SwiftypeSearch.propTypes = {
  className: PropTypes.string,
};

InputView.propTypes = {
  className: PropTypes.string,
  getAutocomplete: PropTypes.func,
  getInputProps: PropTypes.func,
};

export default SwiftypeSearch;
