import { useCallback, useEffect, useRef } from 'react';
import warning from 'warning';
import useTessen from './useTessen';

const useInstrumentedHandler = (handler, attributes, agent = 'newrelic') => {
  const savedHandler = useRef();
  const tessen = useTessen();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  return useCallback(
    (...args) => {
      const { actionName, tessenEventName, tessenCategoryName, ...attrs } =
        typeof attributes === 'function' ? attributes(...args) : attributes;

      if (agent === 'newrelic' && window.newrelic) {
        warning(
          actionName,
          'You are attempting to instrument a handler, but the `actionName` property is not set. This will result in a no-op.'
        );

        actionName && window.newrelic.addPageAction(actionName, attrs);
      }

      if (agent === 'tessen') {
        warning(
          tessenEventName,
          'You are attempting to instrument a handler, but the `tessenEventName` property is not set. This will result in a no-op.'
        );
        warning(
          tessenCategoryName,
          'You are attempting to instrument a handler, but the `tessenCategoryName` property is not set. This will result in a no-op.'
        );
        tessenEventName &&
          tessenCategoryName &&
          tessen.track(tessenEventName, tessenCategoryName, attrs);
      }

      if (savedHandler.current) {
        return savedHandler.current(...args);
      }
    },
    [attributes, agent, tessen]
  );
};

export default useInstrumentedHandler;
