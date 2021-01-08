import PropTypes from 'prop-types';
import React from 'react';
import Trans from './Trans';

import { appendClassName } from '@elastic/react-search-ui-views/es/view-helpers';

const sites = ['developer', 'opensource', 'docs'];

function PagingInfo({
  className,
  end,
  searchTerm,
  start,
  totalResults,
  ...rest
}) {
  return (
    <div className={appendClassName('sui-paging-info', className)} {...rest}>
      <Trans i18nKey="search.pagingInfo">
        Showing{' '}
        <strong>
          {start} - {end}
        </strong>{' '}
        out of <strong>{totalResults}</strong> for <em>{searchTerm}</em> across{' '}
        {sites.length} sites
      </Trans>
    </div>
  );
}

PagingInfo.propTypes = {
  end: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default PagingInfo;
