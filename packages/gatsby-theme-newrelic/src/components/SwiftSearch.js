import React from 'react';
import SiteSearchAPIConnector from '@elastic/search-ui-site-search-connector';
import {
  SearchProvider,
  WithSearch,
  SearchBox,
  Results,
} from '@elastic/react-search-ui';

import '@elastic/react-search-ui-views/lib/styles/styles.css';

const connector = new SiteSearchAPIConnector({
  documentType: 'page',
  engineKey: 'REPLACE_ME',
});

const SwiftSearch = () => {
  return (
    <SearchProvider
      config={{
        apiConnector: connector,
      }}
    >
      <WithSearch mapContextToProps={({ isLoading }) => ({ isLoading })}>
        {({ isLoading }) => (
          <div className="App">
            <SearchBox />
            {isLoading && <div>loading...</div>}
            {!isLoading && (
              <>
                <Results titleField="title" urlField="nps_link" />
              </>
            )}
          </div>
        )}
      </WithSearch>
    </SearchProvider>
  );
};

export default SwiftSearch;
