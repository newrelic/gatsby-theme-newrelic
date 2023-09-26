import { useEffect, useRef } from 'react';

const usePrevious = (value, { initializeWithValue = false } = {}) => {
  const ref = useRef(initializeWithValue ? value : null);

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
