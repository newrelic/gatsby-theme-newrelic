import { useCallback, useEffect, useRef } from 'react';
import warning from 'warning';

const useInstrumentedHandler = (handler, attributes) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  return useCallback(
    (...args) => {
      const { actionName, ...attrs } =
        typeof attributes === 'function' ? attributes(...args) : attributes;

      if (window.newrelic) {
        warning(
          actionName,
          'You are attempting to instrument a handler, but the `actionName` property is not set. This will result in a no-op.'
        );

        actionName && window.newrelic.addPageAction(actionName, attrs);
      }

      if (savedHandler.current) {
        return savedHandler.current(...args);
      }
    },
    [attributes]
  );
};

export default useInstrumentedHandler;
