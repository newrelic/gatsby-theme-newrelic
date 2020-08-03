import PropTypes from 'prop-types';
import React from 'react';

import { appendClassName } from '@elastic/react-search-ui-views/es/view-helpers';
import { sites } from '../data/constants';

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
      Showing{' '}
      <strong>
        {start} - {end}
      </strong>{' '}
      out of <strong>{totalResults}</strong>
      {searchTerm && (
        <>
          {' '}
          for <em>{searchTerm}</em> across {sites.length} sites
        </>
      )}
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
