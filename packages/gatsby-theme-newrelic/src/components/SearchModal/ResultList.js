/* eslint react/no-unused-prop-types: 0 */

import React, { memo, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import Result from './Result';
import useKeyPress from '../../hooks/useKeyPress';

const ResultList = memo(({ results, selectedIndex, onSelectIndex }) => {
  const selectedRef = useRef();

  const handleSelect = useCallback(
    (result) => onSelectIndex(results.indexOf(result)),
    [results, onSelectIndex]
  );

  useKeyPress(
    'ArrowUp',
    () => {
      onSelectIndex(Math.max(0, selectedIndex - 1));
    },
    { ignoreTextInput: false }
  );

  useKeyPress(
    'ArrowDown',
    () => {
      onSelectIndex(Math.min(selectedIndex + 1, results.length - 1));
    },
    { ignoreTextInput: false }
  );

  useKeyPress('Enter', () => selectedRef.current?.click(), {
    ignoreTextInput: false,
  });

  return results.map((result, idx) => {
    const isSelected = selectedIndex === idx;

    return (
      <Result
        key={result.id}
        ref={isSelected ? selectedRef : null}
        selected={isSelected}
        result={result}
        onSelect={handleSelect}
      />
    );
  });
});

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelectIndex: PropTypes.func.isRequired,
};

export default ResultList;
