import { useEffect, useRef } from 'react';

/**
 * Keeps track of a value, always returning the second most recent value.
 */
const usePrevious = (value, { initializeWithValue = false } = {}) => {
  const ref = useRef(initializeWithValue ? value : null);

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
