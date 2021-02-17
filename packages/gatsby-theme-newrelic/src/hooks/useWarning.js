import { useEffect, useRef } from 'react';
import warning from 'warning';

const useWarning = (test, message, { once = true } = {}) => {
  const warnRef = useRef();

  useEffect(() => {
    if (once && warnRef.current) {
      return;
    }

    warning(test, message);

    if (!test) {
      warnRef.current = true;
    }
  }, [test, message, once]);
};

export default useWarning;
