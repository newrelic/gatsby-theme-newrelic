import { useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setTimeout(savedCallback.current, delay);

      return () => clearTimeout(id);
    }
  }, [delay]);
};

export default useTimeout;
